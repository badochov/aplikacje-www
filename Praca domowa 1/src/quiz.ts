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

export const getQuiz = async (name: string): Promise<Quiz | null> => {
	try {
		const raw = await fetch(`/quizes/${name}.json`);
		const obj = await raw.json();
		if (isQuiz(obj)) {
			return Promise.resolve(obj);
		}
	} catch (err) {
		console.error(err);
	}
	return Promise.resolve(null);
};
