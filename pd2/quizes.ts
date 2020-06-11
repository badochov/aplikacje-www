import { QuizWithAnswers, Question } from "./Quiz";

import { db, QuizesRow, AnswersRow } from "./db";
import { User, getUsers } from "./login";
import type { Result } from "./views/src/QuizResults";
import type { Answer } from "./views/src/quiz";
import type { QuestionNoAnswer } from "./views/src/quiz";

export interface UserNoPassword {
  username: string;
  id: number;
}
export interface QuizNoAnswers {
  id: number;
  desc: string;
  questions: QuestionNoAnswer[];
}

export const getQuizes = (): QuizWithAnswers[] => {
  const quizes: QuizWithAnswers[] = [];

  const quizBaseData = <QuizesRow[]>db.prepare("SELECT * FROM quizes").all();
  for (const quizBase of quizBaseData) {
    const quiz = new QuizWithAnswers(quizBase.id, quizBase.desc);
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

export const getQuiz = (
  rawId: string | number
): QuizWithAnswers | undefined => {
  const id = typeof rawId === "number" ? rawId : parseInt(rawId);

  return getQuizes().find((quiz) => quiz.id === id);
};

export const didQuiz = (rawQuizId: string | number, user: User): boolean => {
  const count = db
    .prepare(
      "SELECT COUNT(*) as cnt FROM answers WHERE quiz_id = ? and user_id = ?"
    )
    .get([
      typeof rawQuizId === "number" ? rawQuizId : parseInt(rawQuizId),
      user.id,
    ]);
  return count.cnt !== 0;
};
export const getAnswersRow = (
  userId: number,
  rawQuizId: string | number
): AnswersRow[] => {
  return <AnswersRow[]>(
    db
      .prepare("SELECT * FROM answers WHERE user_id = ? AND quiz_id = ?")
      .all([userId, rawQuizId])
  );
};

export const getQuizResults = (
  userId: number,
  rawQuizId: string | number
): Result | null => {
  const answers = <AnswersRow[]>(
    db
      .prepare("SELECT * FROM answers WHERE user_id = ? AND quiz_id = ?")
      .all([userId, rawQuizId])
  );
  if (answers.length === 0) {
    return null;
  }

  const quiz = getQuiz(rawQuizId);

  const numberAnswers: Answer[] = answers.map((answer) => {
    return {
      answer: answer.answer,
      time: answer.time,
      correct: quiz?.questions[answer.question_number].answer === answer.answer,
    };
  });
  return {
    quizId: rawQuizId.toString(),
    answers: numberAnswers,
    finalTime: numberAnswers.reduce(
      (sum, answer, i) =>
        sum +
        answer.time +
        (answer.correct ? 0 : quiz?.questions[i].penalty || 0),
      0
    ),
  };
};

export const prevResults = (user: User): Result[] => {
  const results: Result[] = [];
  for (const quiz of getQuizes()) {
    const result = getQuizResults(user.id, quiz.id);
    if (result !== null) {
      results.push(result);
    }
  }
  return results;
};

export const getAllQuizResults = (
  rawQuizId: number | string
): Array<[User, Result]> => {
  const results: Array<[User, Result]> = [];

  for (const user of getUsers()) {
    const result = getQuizResults(user.id, rawQuizId);
    if (result !== null) {
      results.push([user, result]);
    }
  }
  return results;
};

export const getTop5ResultsForQuiz = (
  rawId: string | number
): Array<[UserNoPassword, Result]> => {
  const results = getAllQuizResults(rawId);
  return results
    .sort((a, b) => a[1].finalTime - b[1].finalTime)
    .map((a) => {
      delete a[0].password;
      return a;
    })
    .slice(0, 5);
};

export const getQuizNoAnswers = (
  quizRawId: string | number
): QuizNoAnswers | undefined => {
  const quiz = getQuiz(quizRawId);
  if (quiz === undefined) {
    return quiz;
  }
  quiz.questions.forEach((q) => delete q.answer);
  return quiz;
};

export const getAnswerMeanTime = (
  quizId: string | number
): number[] | undefined => {
  const quiz = getQuiz(quizId);
  if (quiz === undefined) {
    return undefined;
  }
  const results = getAllQuizResults(quizId);
  const times: number[] = Array(quiz.questions.length).fill(0);
  results.forEach(([_, result]) => {
    if (result.answers) {
      result.answers.forEach((answer, i) => (times[i] += answer.time));
    }
  });
  return times.map((sum) => sum / (results.length || 1));
};

export const getAnswers = (
  userId: number,
  quizId: string | number
): Answer[] => {
  const rawAnswers = getAnswersRow(userId, quizId);
  const answers: Answer[] = [];
  rawAnswers.forEach(
    (rawAns) =>
      (answers[rawAns.question_number] = {
        answer: rawAns.answer,
        time: rawAns.time,
        correct: false,
      })
  );

  return answers;
};
