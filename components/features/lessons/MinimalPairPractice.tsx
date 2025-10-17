import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { MinimalPair } from '../../../types';
import { generateSpeech } from '../../../services/geminiService';
import { SpeakerIcon, CheckIcon, XMarkIcon, RefreshIcon } from '../../common/Icons';

// Helper functions for audio processing
function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length;
  const buffer = ctx.createBuffer(1, frameCount, 24000); // Mono, 24kHz sample rate as per Gemini TTS
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
}


interface MinimalPairPracticeProps {
  pairs: MinimalPair[];
}

type Status = 'idle' | 'loading' | 'playing' | 'answered' | 'finished' | 'error';

const MinimalPairPractice: React.FC<MinimalPairPracticeProps> = ({ pairs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [score, setScore] = useState(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const audioCacheRef = useRef<Map<string, AudioBuffer>>(new Map());

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const currentPair = useMemo(() => pairs[currentIndex], [pairs, currentIndex]);

  const prepareNextRound = useCallback(() => {
    setStatus('idle');
    setUserChoice(null);
    if (currentIndex < pairs.length) {
      const nextCorrectAnswer = pairs[currentIndex].options[Math.round(Math.random())];
      setCorrectAnswer(nextCorrectAnswer);
    } else {
      setStatus('finished');
    }
  }, [currentIndex, pairs]);

  useEffect(() => {
    prepareNextRound();
  }, [prepareNextRound]);

  const playAudio = async (text: string) => {
    if (status === 'loading' || status === 'playing') return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const audioContext = audioContextRef.current;
    
    if (audioContext.state === 'suspended') {
        try {
            await audioContext.resume();
        } catch (e) {
            console.error("Error resuming audio context:", e);
            setStatus('error');
            return;
        }
    }
    
    setStatus('loading');

    try {
      let audioBuffer: AudioBuffer;
      if (audioCacheRef.current.has(text)) {
        audioBuffer = audioCacheRef.current.get(text)!;
      } else {
        const base64Audio = await generateSpeech(text);
        if (!base64Audio) throw new Error("Failed to generate audio.");
        const audioBytes = decode(base64Audio);
        audioBuffer = await decodeAudioData(audioBytes, audioContext);
        audioCacheRef.current.set(text, audioBuffer);
      }
      
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.onended = () => setStatus(userChoice ? 'answered' : 'idle');
      source.start(0);
      setStatus('playing');

    } catch (error) {
      console.error("Audio playback error:", error);
      setStatus('error');
    }
  };

  const handleChoice = (choice: string) => {
    if (status === 'answered' || status === 'finished') return;
    setUserChoice(choice);
    setStatus('answered');
    if (choice === correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setCurrentIndex(i => i + 1);
  };
  
  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
  }

  if (status === 'finished') {
    return (
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mt-4 text-center">
        <h4 className="font-bold text-lg text-slate-800">Latihan Selesai!</h4>
        <p className="text-slate-600 mt-2">
            Skor Anda: <span className="font-bold text-blue-600">{score}</span> dari {pairs.length}
        </p>
        <button
          onClick={handleReset}
          className="mt-4 bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
        >
          <RefreshIcon className="w-5 h-5" />
          Ulangi Latihan
        </button>
      </div>
    );
  }
  
  if (!currentPair) return null;

  const getButtonClass = (option: string) => {
    if (status !== 'answered') {
      return 'bg-white hover:bg-slate-100 border-slate-300';
    }
    if (option === correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-800';
    }
    if (option === userChoice) {
      return 'bg-red-100 border-red-500 text-red-800';
    }
    return 'bg-slate-50 border-slate-200 text-slate-500';
  };

  return (
    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mt-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">
          Soal {currentIndex + 1} dari {pairs.length}
        </p>
        <button
          onClick={() => playAudio(correctAnswer)}
          disabled={status === 'loading' || status === 'playing'}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 transition disabled:bg-blue-300"
          aria-label="Dengarkan audio"
        >
          {status === 'loading' ? (
             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <SpeakerIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {status === 'error' && (
        <p className="text-center text-red-500 text-sm mt-4">Gagal memuat audio. Coba lagi.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {currentPair.options.map((option, index) => (
          <button
            key={option}
            onClick={() => handleChoice(option)}
            disabled={status === 'answered'}
            className={`p-4 rounded-lg border-2 text-center transition-colors ${getButtonClass(option)}`}
          >
            <span className="text-2xl font-bold text-slate-800">{option}</span>
            <span className="block text-sm text-slate-500">{(currentPair.romaji || [])[index]}</span>
          </button>
        ))}
      </div>

      {status === 'answered' && (
        <div className="mt-6 text-center">
            {userChoice === correctAnswer ? (
                 <p className="font-semibold text-green-700 mb-3 flex items-center justify-center gap-2"><CheckIcon className="w-5 h-5"/> Benar!</p>
            ) : (
                <div className="text-center mb-3">
                    <p className="font-semibold text-red-700 flex items-center justify-center gap-2"><XMarkIcon className="w-5 h-5"/> Kurang tepat!</p>
                    <p className="text-sm text-slate-600">Jawaban yang benar: {correctAnswer}</p>
                </div>
            )}
         
          <button 
            onClick={handleNext}
            className="bg-blue-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Lanjutkan
          </button>
        </div>
      )}
    </div>
  );
};

export default MinimalPairPractice;
