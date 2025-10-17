import { FinalExam } from '../types';
import { exam as n5FinalExam } from './n5-final-exam';
import { exam as n4FinalExam } from './n4-final-exam';
import { exam as n3FinalExam } from './n3-final-exam';

export const FINAL_EXAMS: FinalExam[] = [
    n5FinalExam,
    n4FinalExam,
    n3FinalExam,
];