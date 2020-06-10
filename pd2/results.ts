import { db } from "./db";

export interface QuizResult {
  times: number[];
  answers: number[];
}
export interface RawQuizResult {
  times: number[];
  answers: number[];
}

export const isQuizResult = (obj: any): obj is QuizResult => {
  return obj.times instanceof Array && obj.answers instanceof Array;
};

export const validateQuizResult = (qr: QuizResult): boolean => {
  console.log("fadfad");
  return 0.001 > Math.abs(qr.times.reduce((sum, el) => sum + el, 0) - 1);
};

export const saveTime = (userId: number, quizId: number) => {
  db.prepare("INSERT INTO send_times VALUES (?, ?, ?)").run([
    quizId,
    userId,
    Date.now(),
  ]);
};

export const getTime = (userId: number, quizId: number): number => {
  const time = db
    .prepare("SELECT time FROM send_times WHERE quiz_id = ? AND user_id = ?")
    .get([quizId, userId]);
  if (time === undefined) {
    throw new Error("This user didn't start");
  } else {
    return Date.now() - <number>time?.time;
  }
};

export const saveResults = (
  userId: number,
  quizId: number,
  qr: QuizResult,
  time: number
) => {
  const stmt = db.prepare("INSERT INTO answers VALUES (?, ?, ?, ?, ?)");
  for (const i in qr.answers) {
    const calculatedTime = Math.round(qr.times[i] * time);
    const answer = qr.answers[i];
    stmt.run([quizId, i, calculatedTime, answer, userId]);
  }
};
