import { quiz } from './quizes';

export interface Question {
	prompt: string;
	answer: number;
	penalty: number;
}

export interface Quiz {
	desc: string;
	questions: Question[];
}

export interface Answer {
	answer: number | null;
	time: number;
	correct: boolean;
}

const isQuestion = (question: any): question is Question => {
	return question && question.prompt && question.answer && question.penalty;
};

const isQuiz = (quiz: any): quiz is Quiz => {
	return quiz.desc && quiz.questions;
};

export const getQuiz = (name: string): Quiz | null => {
	const obj = JSON.parse(quiz);
	if (isQuiz(obj)) {
		return obj;
	}
	return null;
};
