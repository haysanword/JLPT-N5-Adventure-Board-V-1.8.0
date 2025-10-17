import React from 'react';
import { FinalExam } from '../../../types';
import { useUser } from '../../../contexts/UserContext';
import { LockIcon, MedalIcon } from '../../common/Icons';

interface ExamTileProps {
  exam: FinalExam;
  unlocked: boolean;
  onClick: () => void;
}

const ExamTile: React.FC<ExamTileProps> = ({ exam, unlocked, onClick }) => {
  const { userProgress } = useUser();
  const completed = userProgress.completedExams.includes(exam.id);

  const baseClasses = "w-full bg-slate-800 p-6 rounded-2xl border-2 transition-all duration-300 group relative text-white";
  const unlockedClasses = "border-yellow-500 hover:border-yellow-400 hover:shadow-2xl cursor-pointer";
  const lockedClasses = "bg-slate-700 border-slate-600 cursor-not-allowed opacity-70";
  const completedClasses = "border-green-500 ring-2 ring-green-500";
  
  return (
    <div
      onClick={unlocked ? onClick : undefined}
      className={`${baseClasses} ${unlocked ? (completed ? completedClasses : unlockedClasses) : lockedClasses}`}
      aria-disabled={!unlocked}
    >
      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${completed ? 'bg-green-500' : 'bg-yellow-500'}`}>
          {unlocked ? <MedalIcon className="w-8 h-8 text-white" /> : <LockIcon className="w-7 h-7 text-slate-300"/>}
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight">{exam.title}</h3>
          <p className="text-sm text-slate-300 mt-1">{exam.description}</p>
        </div>
      </div>
      {completed && (
         <div className="absolute top-4 right-4 text-xs font-bold bg-green-600 text-white px-2 py-0.5 rounded-full">
            SELESAI
        </div>
      )}
      {!unlocked && (
        <div className="absolute top-4 right-4 text-xs font-bold bg-slate-600 text-slate-200 px-2 py-0.5 rounded-full">
            TERKUNCI
        </div>
      )}
    </div>
  );
};

export default ExamTile;