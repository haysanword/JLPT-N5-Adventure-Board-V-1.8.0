export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

// FIX: Add missing PronunciationPhrase type for pronunciation exercises.
export interface PronunciationPhrase {
  japanese: string;
  romaji: string;
}

export interface VocabularyItem {
  japanese: string;
  romaji: string;
  indonesian: string;
}

export interface VocabularyItemWithLevel extends VocabularyItem {
    level: 'N5' | 'N4' | 'N3';
    example?: {
        japanese: string;
        romaji: string;
        indonesian: string;
    };
}

export interface MinimalPair {
  options: [string, string];
  romaji?: [string, string];
  correctAnswer: string;
}

export interface ListeningSituation {
  title: string;
  japaneseText: string;
  indonesianText: string;
  audioScript: string;
}

export interface Lesson {
  id: string;
  level: 'N5' | 'N4' | 'N3';
  title: string;
  description: string;
  xp: number;
  content: string;
  audioScript: string;
  quiz: QuizQuestion[];
  vocabulary?: VocabularyItem[];
  minimalPairs?: MinimalPair[];
  listeningSituation?: ListeningSituation;
  // FIX: Add optional pronunciationPhrases property to allow for pronunciation practice content in lessons.
  pronunciationPhrases?: PronunciationPhrase[];
}

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  completedLessons: string[];
  completedExams: string[];
}

export interface UserProfile {
  name: string;
  avatar: string;
}

// New types for the final exam feature
export type ExamQuestionType = 'kanji' | 'vocabulary' | 'grammar' | 'reading';

export interface ExamQuestion {
  type: ExamQuestionType;
  question: string;
  options: string[];
  correctAnswer: string;
  readingText?: string; // For reading comprehension questions
}

export interface FinalExam {
  id: string;
  level: 'N5' | 'N4' | 'N3';
  title: string;
  description: string;
  questions: ExamQuestion[];
}