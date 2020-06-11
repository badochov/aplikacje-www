import Database from "better-sqlite3";
import { hashPassword } from "./login";

export interface QuizesRow {
  id: number;
  desc: string;
}

export interface QuestionsRow {
  quiz_id: number;
  questions_number: number;
  prompt: string;
  answer: number;
  penalty: number;
}

export interface AnswersRow {
  quiz_id: number;
  question_number: number;
  time: number;
  answer: number;
}

export const db = new Database("./quizes.sqlite", { verbose: console.log });

process.on("exit", () => db.close());
process.on("SIGHUP", () => process.exit(128 + 1));
process.on("SIGINT", () => process.exit(128 + 2));
process.on("SIGTERM", () => process.exit(128 + 15));

export const createTables = () => {
  db.exec(
    "DROP TABLE IF EXISTS quizes;" +
      "DROP TABLE IF EXISTS questions;" +
      "DROP TABLE IF EXISTS answers;" +
      "DROP TABLE IF EXISTS users;" +
      "DROP TABLE IF EXISTS send_times"
  );
  db.exec(
    "CREATE TABLE IF NOT EXISTS quizes (id INTEGER PRIMARY KEY AUTOINCREMENT, desc TEXT);" +
      "CREATE TABLE IF NOT EXISTS questions (quiz_id INTEGER, question_number INTEGER, prompt TEXT, answer INTEGER, penalty INTEGER);" +
      "CREATE TABLE IF NOT EXISTS answers (quiz_id INTEGER, question_number INTEGER, time INTEGER, answer INTEGER, user_id INTEGER);" +
      "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT);" +
      "CREATE TABLE IF NOT EXISTS send_times (quiz_id INTEGER, user_id INTEGER, time INTEGER);"
  );
};

const allQuestions = [
  [
    {
      prompt: "2 + 3",
      answer: 5,
      penalty: 4,
    },
    {
      prompt: "2 - (-24 : 4)",
      answer: 8,
      penalty: 10,
    },
    {
      prompt: "2 - 3",
      answer: -1,
      penalty: 4,
    },
    {
      prompt: "2 + (-24 : 4)",
      answer: -4,
      penalty: 10,
    },
  ],
  [
    {
      prompt: "2 + 2",
      answer: 4,
      penalty: 2,
    },
    {
      prompt: "2 * 3",
      answer: 6,
      penalty: 1,
    },
    {
      prompt: "2 ^ 3",
      answer: 8,
      penalty: 3,
    },
    {
      prompt: "(2 ^ (1/2)) ^ 2",
      answer: 2,
      penalty: 7,
    },
  ],
];

const seedQuestions = () => {
  const addQuestionStatement = db.prepare(
    "INSERT INTO `questions` VALUES (?, ?, ?, ?, ?);"
  );
  for (const [i, questions] of allQuestions.entries()) {
    for (const [questionNumber, question] of questions.entries()) {
      addQuestionStatement.run([
        i + 1,
        questionNumber,
        question.prompt,
        question.answer,
        question.penalty,
      ]);
    }
  }
};

const seedQuizes = () => {
  const addQuizStatement = db.prepare(
    "INSERT INTO `quizes` (desc) VALUES (?);"
  );
  for (const memeData of ["Liczyć każdy może", "Quick math"]) {
    addQuizStatement.run(memeData);
  }

  seedQuestions();
};

const seedUsers = async () => {
  const addUserStatement = db.prepare(
    "INSERT INTO `users` (username, password) VALUES (?, ?);"
  );
  const password1 = await hashPassword("user1");
  const password2 = await hashPassword("user2");
  const password3 = await hashPassword("test");

  addUserStatement.run(["user1", password1]);
  addUserStatement.run(["user2", password2]);
  addUserStatement.run(["test", password3]);
};

const seedTables = async () => {
  seedQuizes();
  await seedUsers();
};

export const dbSetup = async () => {
  createTables();
  await seedTables();
};
