import React from 'react';
import { TrophyIcon, RefreshIcon } from '../../common/Icons';

interface ExamResultProps {
    score: number;
    totalQuestions: number;
    onClose: () => void;
}

const ExamResult: React.FC<ExamResultProps> = ({ score, totalQuestions, onClose }) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 70;

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
            <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center ${passed ? 'bg-green-100' : 'bg-red-100'}`}>
                <TrophyIcon className={`w-12 h-12 ${passed ? 'text-green-500' : 'text-red-500'}`} />
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mt-4">Ujian Selesai!</h2>

            <p className="text-lg text-slate-600 mt-2">Skor Akhir Anda:</p>
            <p className="text-6xl font-black text-blue-600 my-2">{percentage}%</p>
            <p className="text-slate-500">({score} dari {totalQuestions} benar)</p>

            {passed ? (
                <p className="mt-6 font-semibold text-green-700 text-lg">
                    Luar biasa! Anda telah lulus ujian akhir N5.
                </p>
            ) : (
                <p className="mt-6 font-semibold text-red-700 text-lg">
                    Anda belum lulus. Teruslah berlatih dan coba lagi nanti!
                </p>
            )}

            <div className="mt-8">
                <button
                    onClick={onClose}
                    className="bg-slate-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-700 transition-colors"
                >
                    Kembali ke Papan Pelajaran
                </button>
            </div>
        </div>
    );
};

export default ExamResult;