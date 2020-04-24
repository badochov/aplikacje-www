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

export const getQuiz = (id: string): Quiz | null => {
	const obj = JSON.parse(quiz);
	if (obj instanceof Object) {
		if (isQuiz(obj[id])) {
			return obj[id];
		}
	}
	return null;
};

export function* getQuizes(): Generator<[string, Quiz]> {
	const obj = JSON.parse(quiz);
	if (obj instanceof Object) {
		for (const id in obj) {
			if (isQuiz(obj[id])) {
				yield [ id, obj[id] ];
			}
		}
	}
}
