import React, { useState, useRef, useEffect } from 'react';
import { ListeningSituation } from '../../../types';
import { generateSpeech } from '../../../services/geminiService';
import { SpeakerIcon } from '../../common/Icons';

// Helper functions for audio processing (copied from MinimalPairPractice)
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
  const buffer = ctx.createBuffer(1, frameCount, 24000); // Mono, 24kHz
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
}

interface ListeningSituationProps {
  situation: ListeningSituation;
}

type AudioStatus = 'idle' | 'loading' | 'playing' | 'error';

const ListeningSituation: React.FC<ListeningSituationProps> = ({ situation }) => {
  const [status, setStatus] = useState<AudioStatus>('idle');
  const [showTranslation, setShowTranslation] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  
  // Reset when the situation changes
  useEffect(() => {
    setShowTranslation(false);
    setStatus('idle');
    audioBufferRef.current = null; // Clear cached buffer for new lesson
  }, [situation]);

  // Cleanup audio context on unmount
  useEffect(() => {
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const playAudio = async () => {
    if (status === 'loading' || status === 'playing') return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const audioContext = audioContextRef.current;

    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }
    
    setStatus('loading');

    try {
      if (!audioBufferRef.current) {
        const base64Audio = await generateSpeech(situation.audioScript);
        if (!base64Audio) throw new Error("Failed to generate audio.");
        const audioBytes = decode(base64Audio);
        audioBufferRef.current = await decodeAudioData(audioBytes, audioContext);
      }
      
      const source = audioContext.createBufferSource();
      source.buffer = audioBufferRef.current;
      source.connect(audioContext.destination);
      source.onended = () => setStatus('idle');
      source.start(0);
      setStatus('playing');

    } catch (error) {
      console.error("Audio playback error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-slate-800 border-t pt-6">Situasi Mendengarkan</h3>
      <p className="text-slate-500 mb-4">Dengarkan dialog atau cerita berikut untuk melatih pemahaman Anda.</p>
      
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-lg text-slate-700">{situation.title}</h4>
          <button
            onClick={playAudio}
            disabled={status === 'loading' || status === 'playing'}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-red-600 text-white hover:bg-red-700 transition disabled:bg-red-400"
            aria-label="Dengarkan audio"
          >
            {status === 'loading' ? (
              <div className="w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <SpeakerIcon className="w-7 h-7" />
            )}
          </button>
        </div>

        {status === 'error' && (
          <p className="text-center text-red-500 text-sm mb-4">Gagal memuat audio. Silakan coba lagi.</p>
        )}

        <blockquote className="bg-white p-4 rounded-md border-l-4 border-red-500">
          <p className="text-slate-700 whitespace-pre-wrap italic">{situation.japaneseText}</p>
        </blockquote>

        <div className="mt-4">
          <button 
            onClick={() => setShowTranslation(!showTranslation)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            {showTranslation ? 'Sembunyikan Terjemahan' : 'Lihat Terjemahan'}
          </button>
          {showTranslation && (
            <div className="mt-2 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-slate-600 text-sm whitespace-pre-wrap">{situation.indonesianText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListeningSituation;