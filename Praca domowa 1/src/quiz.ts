interface Question {
    prompt: string;
    answer: number;
    penalty: number;
}

interface Quiz {
    desc: string;
    questions: Question[];
}

const isQuestion = (question: any): question is Question => {
    return question && question.prompt && question.answer && question.penalty;
}

const isQuiz = (quiz: any): quiz is Quiz => {
    return quiz.desc && quiz.questions;
}

export const getQuiz = async (name: string): Promise<Quiz | null> => {
    try {
        const raw = await fetch(`/quizes/${name}.json`);
        const obj = await raw.json();
        if (isQuiz(obj)) {
            return Promise.resolve(obj);
        }
    }
    catch (err) {
        console.error(err);
    }
    return Promise.resolve(null);
}