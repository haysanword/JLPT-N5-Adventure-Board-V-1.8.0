import React, { useState, useMemo } from 'react';
import { Lesson } from '../../types';
import QuizCard from '../features/lessons/QuizCard';
import MinimalPairPractice from '../features/lessons/MinimalPairPractice';
import ListeningSituation from '../features/lessons/ListeningSituation';

interface LessonViewProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: (xp: number) => void;
}

type QuizMode = 'not_started' | 'in_progress' | 'finished';

const LessonView: React.FC<LessonViewProps> = ({ lesson, onClose, onComplete }) => {
  const [quizMode, setQuizMode] = useState<QuizMode>('not_started');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const passingThreshold = useMemo(() => Math.ceil(lesson.quiz.length * 0.6), [lesson.quiz.length]);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizMode('in_progress');
  };
  
  const resetQuiz = () => {
      startQuiz();
  }

  const handleQuestionComplete = (isCorrect: boolean) => {
    const newScore = score + (isCorrect ? 1 : 0);
    
    if (currentQuestionIndex === lesson.quiz.length - 1) {
      setScore(newScore);
      setQuizMode('finished');
    } else {
      setScore(newScore);
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const renderQuizContent = () => {
    switch (quizMode) {
      case 'not_started':
        return (
          <div className="mt-8 text-center">
            <button
              onClick={startQuiz}
              className="bg-red-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-red-700 transition-colors text-lg"
            >
              Mulai Kuis
            </button>
          </div>
        );
      case 'in_progress':
        return (
          <QuizCard
            key={currentQuestionIndex}
            question={lesson.quiz[currentQuestionIndex]}
            onComplete={handleQuestionComplete}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={lesson.quiz.length}
          />
        );
      case 'finished':
        const passed = score >= passingThreshold;
        return (
          <div className="mt-8 text-center p-6 rounded-lg bg-slate-100 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800">Kuis Selesai!</h3>
            <p className="text-lg text-slate-600 mt-2">
              Skor Anda: <span className="font-bold text-blue-600">{score}</span> dari {lesson.quiz.length} soal.
            </p>
            {passed ? (
              <>
                <p className="font-semibold text-green-700 my-3">Selamat! Anda berhasil menyelesaikan pelajaran ini.</p>
                <button
                  onClick={() => onComplete(lesson.xp)}
                  className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Selesaikan & Dapatkan {lesson.xp} XP
                </button>
              </>
            ) : (
              <>
                <p className="text-red-600 font-semibold my-3">Anda belum mencapai skor minimal ({passingThreshold} benar). Ayo coba lagi!</p>
                <button
                  onClick={resetQuiz}
                  className="bg-slate-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Coba Lagi Kuis
                </button>
              </>
            )}
          </div>
        );
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-sm font-bold text-red-600">{lesson.level}</span>
          <h2 className="text-3xl font-bold text-slate-800">{lesson.title}</h2>
          <p className="text-slate-500 mt-1">{lesson.description}</p>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-3xl leading-none">&times;</button>
      </div>

      <article className="prose prose-lg max-w-none mt-6  
        prose-h1:text-slate-800  
        prose-h2:text-slate-700 
        prose-p:text-slate-600 
        prose-strong:text-slate-700 
        prose-td:p-2 prose-td:border-slate-300 prose-td:text-slate-600 
        prose-th:p-2 prose-th:bg-slate-100 prose-th:text-slate-700">
        <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      </article>

      {lesson.listeningSituation && (
        <ListeningSituation situation={lesson.listeningSituation} />
      )}

      {lesson.vocabulary && lesson.vocabulary.length > 0 && (
        <div className="mt-8">
            <h3 className="text-2xl font-bold text-slate-800 border-t pt-6">Kosakata Penting</h3>
            <p className="text-slate-500 mb-4">Kata-kata kunci dari pelajaran ini.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {lesson.vocabulary.map((item, index) => (
                    <div key={index} className="flex items-baseline gap-3 p-2 rounded-md hover:bg-slate-100">
                        <div className="w-1/3">
                            <strong className="text-slate-700">{item.japanese}</strong>
                            <span className="block text-xs text-slate-500">{item.romaji}</span>
                        </div>
                        <div className="w-2/3 text-slate-600 text-sm">
                            {item.indonesian}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )}

      {lesson.minimalPairs && lesson.minimalPairs.length > 0 && (
        <div className="mt-8">
            <h3 className="text-2xl font-bold text-slate-800 border-t pt-6">Latihan Mendengar</h3>
            <p className="text-slate-500 mb-4">Dengarkan baik-baik dan pilih kata yang Anda dengar.</p>
            <MinimalPairPractice pairs={lesson.minimalPairs} />
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-slate-800 border-t pt-6">Waktunya Kuis!</h3>
        <p className="text-slate-500">Uji pemahaman Anda tentang materi ini.</p>
        {renderQuizContent()}
      </div>
    </div>
  );
};

export default LessonView;