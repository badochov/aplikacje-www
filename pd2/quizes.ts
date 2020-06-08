import { Quiz, Question } from "./Quiz";

import { db, QuizesRow, AnswersRow } from "./db";
import type { User } from "./login";
import type { Result } from "./views/src/QuizResults";
import type { Answer } from "./views/src/quiz";

export const getQuizes = (): Quiz[] => {
  const quizes: Quiz[] = [];

  const quizBaseData = <QuizesRow[]>db.prepare("SELECT * FROM quizes").all();
  for (const quizBase of quizBaseData) {
    const quiz = new Quiz(quizBase.id, quizBase.desc);
    const questions = <Question[]>(
      db
        .prepare(
          "SELECT * FROM questions WHERE quiz_id = ? ORDER BY question_number"
        )
        .all(quizBase.id)
    );
    questions.map(quiz.addQuestion.bind(quiz));

    quizes.push(quiz);
  }
  return quizes;
};

export const getQuiz = (rawId: string | number): Quiz | undefined => {
  const id = typeof rawId === "number" ? rawId : parseInt(rawId);

  return getQuizes().find((quiz) => quiz.id === id);
};

export const didQuiz = (rawQuizId: string | number, user: User): boolean => {
  const count = <number>(
    db
      .prepare("SELECT COUNT(*) FROM answers WHERE quiz_id = ? and user_id = ?")
      .get([
        typeof rawQuizId === "number" ? rawQuizId : parseInt(rawQuizId),
        user.id,
      ])
  );
  return count === 0;
};

export const prevResults = (user: User): Result[] => {
  const results: Result[] = [];
  const answers = <AnswersRow[]>(
    db.prepare("SELECT * FROM answers WHERE user_id = ?").all([user.id])
  );
  const groupedAnswers = answers.reduce(
    (grouped: { [id: number]: AnswersRow[] }, answer) => {
      if (grouped[answer.quiz_id] !== undefined) {
        grouped[answer.quiz_id] = [];
      }
      grouped[answer.quiz_id].push(answer);
      return grouped;
    },
    {}
  );
  for (const [id, answers] of Object.entries(groupedAnswers)) {
    const quiz = getQuiz(id);

    const numberAnswers: Answer[] = answers.map((answer) => {
      return {
        answer: answer.answer,
        time: answer.time,
        correct:
          quiz?.questions[answer.question_number].anwer === answer.answer,
      };
    });
    results.push({
      quizId: id,
      answers: numberAnswers,
      finalTime: numberAnswers.reduce((sum, answer) => sum + answer.time, 0),
    });
  }
  return results;
};
