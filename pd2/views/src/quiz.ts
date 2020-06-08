export interface Question {
  prompt: string;
  answer: number;
  penalty: number;
}

export interface Quiz {
  desc: string;
  questions: Question[];
  id: string;
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
  return quiz.desc && quiz.questions && quiz.id !== undefined;
};

/**
 * Returns quiz with given id or null on error.
 * @param id quiz id
 */
export const getQuiz = async (id: string): Promise<Quiz | null> => {
  const quizRaw = await fetch("/get_quiz/" + id);
  const quiz = await quizRaw.json();

  if (isQuiz(quiz)) {
    return quiz;
  }

  return null;
};

/**
 * Generator that returns all quizes.
 */
export async function* getQuizes(): AsyncGenerator<Quiz> {
  const quizRaw = await fetch("/get_quizes");
  const obj = await quizRaw.json();
  if (obj instanceof Array) {
    for (const quiz of obj) {
      if (isQuiz(quiz)) {
        yield quiz;
      }
    }
  }
}
