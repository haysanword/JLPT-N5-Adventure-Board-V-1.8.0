import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { UserProfile, UserProgress } from '../types';
import { LESSONS } from '../lessons';
import { FINAL_EXAMS } from '../exams';


interface UserContextType {
  userProfile: UserProfile;
  userProgress: UserProgress;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (profile: UserProfile, isAdminLogin: boolean) => void;
  updateProfile: (newProfile: UserProfile) => void;
  completeLesson: (lessonId: string, xp: number) => void;
  completeExam: (examId: string) => void;
  resetProgress: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('is-authenticated', false);
  const [isAdmin, setIsAdmin] = useLocalStorage('is-admin', false);
  
  const [userProgress, setUserProgress] = useLocalStorage<UserProgress>('user-progress', {
    xp: 0,
    level: 1,
    completedLessons: [],
    completedExams: [],
  });

  const [userProfile, setUserProfile] = useLocalStorage<UserProfile>('user-profile', {
    name: 'Anata',
    avatar: 'default',
  });

  const login = (profile: UserProfile, isAdminLogin: boolean) => {
    setUserProfile(profile);
    setIsAdmin(isAdminLogin);

    if (isAdminLogin) {
      const allLessonIds = LESSONS.map(l => l.id);
      const allExamIds = FINAL_EXAMS.map(e => e.id);
      const totalXp = LESSONS.reduce((sum, l) => sum + l.xp, 0);
      const adminLevel = Math.floor(totalXp / 250) + 1;

      setUserProgress({
          xp: totalXp,
          level: adminLevel,
          completedLessons: allLessonIds,
          completedExams: allExamIds,
      });
    }
    
    setIsAuthenticated(true);
  };

  const updateProfile = (newProfile: UserProfile) => {
    setUserProfile(newProfile);
  };

  const completeLesson = (lessonId: string, xp: number) => {
    if (!userProgress.completedLessons.includes(lessonId)) {
        const newCompletedLessons = [...userProgress.completedLessons, lessonId];
        const newXp = userProgress.xp + xp;
        const newLevel = Math.floor(newXp / 250) + 1;
        setUserProgress({
          ...userProgress,
          xp: newXp,
          level: newLevel,
          completedLessons: newCompletedLessons,
        });
    }
  };

  const completeExam = (examId: string) => {
    if (!userProgress.completedExams.includes(examId)) {
      setUserProgress(prev => ({
        ...prev,
        completedExams: [...prev.completedExams, examId],
      }));
    }
  };


  const resetProgress = () => {
      if (window.confirm("Apakah Anda yakin ingin mengatur ulang semua progres? Ini akan membawa Anda kembali ke halaman pembuatan profil.")) {
        setUserProgress({ xp: 0, level: 1, completedLessons: [], completedExams: [] });
        setIsAdmin(false);
        setIsAuthenticated(false);
      }
  };

  const value = {
    userProfile,
    userProgress,
    isAuthenticated,
    isAdmin,
    login,
    updateProfile,
    completeLesson,
    completeExam,
    resetProgress,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};