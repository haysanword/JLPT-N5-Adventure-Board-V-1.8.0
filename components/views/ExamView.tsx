import React, { useState, useMemo } from 'react';
import { FinalExam, ExamQuestion } from '../../types';
import { useUser } from '../../contexts/UserContext';
import ExamResult from '../features/exams/ExamResult';

interface ExamViewProps {
  exam: FinalExam;
  onClose: () => void;
}

const ExamView: React.FC<ExamViewProps> = ({ exam, onClose }) => {
  const { completeExam } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = exam.questions[currentQuestionIndex];

  const handleSelectOption = (option: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finish exam
      const score = calculateScore();
      if (score / exam.questions.length >= 0.7) {
        completeExam(exam.id);
      }
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return exam.questions.reduce((score, question, index) => {
      return score + (userAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  const getSectionTitle = (type: ExamQuestion['type']): string => {
    switch(type) {
        case 'kanji': return 'Bagian 1: Membaca Kanji';
        case 'vocabulary': return 'Bagian 2: Kosakata';
        case 'grammar': return 'Bagian 3: Tata Bahasa';
        case 'reading': return 'Bagian 4: Pemahaman Membaca';
        default: return 'Soal';
    }
  };
  
  const isLastQuestion = currentQuestionIndex === exam.questions.length - 1;

  if (showResult) {
    return (
        <ExamResult 
            score={calculateScore()}
            totalQuestions={exam.questions.length}
            onClose={onClose}
        />
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-sm font-bold text-red-600">{exam.level}</span>
          <h2 className="text-3xl font-bold text-slate-800">{exam.title}</h2>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-3xl leading-none">&times;</button>
      </div>
      
      {/* Progress Bar */}
      <div className="my-4">
        <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / exam.questions.length) * 100}%`}}
            ></div>
        </div>
        <p className="text-sm text-right text-slate-500 mt-1">Soal {currentQuestionIndex + 1} / {exam.questions.length}</p>
      </div>
      
      {/* Question Area */}
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mt-6">
        <p className="text-sm font-semibold text-slate-500 mb-2">{getSectionTitle(currentQuestion.type)}</p>
        
        {currentQuestion.type === 'reading' && currentQuestion.readingText && (
            <div className="prose prose-sm max-w-none mb-4 p-4 bg-white rounded-md border">
                <p className="whitespace-pre-wrap">{currentQuestion.readingText}</p>
            </div>
        )}

        <h4 className="font-semibold text-lg text-slate-800 mb-4 whitespace-pre-wrap">{currentQuestion.question}</h4>
        <div className="space-y-3">
            {currentQuestion.options.map((option) => (
                <button
                    key={option}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-colors text-slate-700 font-medium
                        ${userAnswers[currentQuestionIndex] === option 
                            ? 'bg-blue-100 border-blue-500 ring-2 ring-blue-300' 
                            : 'bg-white hover:bg-slate-100 border-slate-300'}`
                    }
                >
                    {option}
                </button>
            ))}
        </div>
      </div>
      
      <div className="mt-6 text-right">
        <button
            onClick={handleNext}
            disabled={!userAnswers[currentQuestionIndex]}
            className="bg-red-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-300 disabled:cursor-not-allowed"
        >
            {isLastQuestion ? 'Selesaikan Ujian' : 'Soal Berikutnya'}
        </button>
      </div>
    </div>
  );
};

export default ExamView;