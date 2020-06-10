import {
  Answer,
  QuizNoAnswers,
  getQuiz,
  QuizWithAnswers,
  getQuizWithAnswers,
  getPrevResults,
} from "./quiz";
import {
  saveWithStatsButton,
  resultSection,
  initResultSpan,
  finalResultSpan,
  correctnessDiv,
  quizPrevResultsSection,
} from "./HTMLElements";
import { error } from "./main";

export interface Result {
  finalTime: number;
  answers?: Answer[];
  quizId: string;
}

const isResult = (obj: any): obj is Result => {
  return obj.finalTime && obj.quizId;
};

export class QuizResults {
  private penalties: number[] = [];
  private quizAnswers: QuizWithAnswers | null = null;

  /**
   * @param answers array of marked answers
   * @param quiz quiz object
   * @param quizId chosen quiz id
   */
  constructor(private answers: Answer[], private quiz: QuizNoAnswers | null) {
    this.bindEventHandlers();
  }

  public async mark() {
    const quiz = await getQuizWithAnswers(this.quiz?.id.toString() || "");
    if (quiz === null) {
      error("Błąd podczas pobierania quizu");
      window.location.reload();
      return;
    }
    this.quizAnswers = quiz;
    this.checkAnswers();
    this.givePenalties();
    this.display();
  }

  /**
   * Checks answers, sets carrect argument in each answer to either true or false.
   */
  private checkAnswers() {
    if (this.quizAnswers !== null) {
      for (const i in this.answers) {
        this.answers[i].correct =
          this.answers[i].answer === this.quizAnswers.questions[i].answer;
      }
    }
  }

  /**
   * Gives penalties for each wrong answer.
   */
  private givePenalties() {
    if (this.quiz !== null) {
      for (const i in this.answers) {
        this.penalties.push(
          this.answers[i].correct ? 0 : this.quiz.questions[i].penalty
        );
      }
    }
  }

  /**
   * Bind neccessary event handlers.
   */
  private bindEventHandlers() {
    saveWithStatsButton.onclick = () => {
      this.goToMainScreen();
    };
  }

  /**
   * Goes back to main screen.
   */
  private goToMainScreen() {
    window.location.reload();
  }

  /**
   * Calculates time spent on quiz.
   */
  private get initTime(): number {
    return this.answers.reduce((sum, ans) => sum + ans.time / 1000, 0);
  }

  /**
   * Calculates final time, base + penalties.
   */
  public get finalTime() {
    return this.penalties.reduce(
      (sum, penalty) => sum + penalty,
      this.initTime
    );
  }

  /**
   * Displays results.
   */
  private async display() {
    if (this.quiz) {
      resultSection.style.display = "block";

      initResultSpan.textContent = QuizResults.formatTime(this.initTime);
      finalResultSpan.textContent = QuizResults.formatTime(this.finalTime);

      // console.log(this.answers.entries());
      for (const [i, answer] of this.answers.entries()) {
        console.log(i, answer);
        const div = document.createElement("div");
        div.textContent = `${i + 1}. `;
        const span = document.createElement("span");
        span.className = answer.correct ? "correct" : "incorrect";
        span.textContent = answer.correct
          ? "Correct :)"
          : `Incorect: +${this.quiz.questions[i].penalty}s`;
        div.appendChild(span);
        correctnessDiv.appendChild(div);
      }
    }
  }

  /**
   * Formats time, round to 3 digits.
   * @param time time
   */
  public static formatTime(time: number): string {
    return time.toFixed(3).toString();
  }

  /**
   * Displays previous results.
   */
  public static async displayPreviousResults(): Promise<void> {
    let results;
    try {
      results = await getPrevResults();
    } catch (_) {}
    let i = 1;
    let any = false;
    if (results instanceof Array) {
      for (const res of results) {
        any = true;
        if (isResult(res)) {
          const quiz = await getQuizWithAnswers(res.quizId);
          if (quiz) {
            const row = document.createElement("div");
            const nameCol = document.createElement("div");
            const resultCol = document.createElement("div");
            const detailCol = document.createElement("div");
            const link = document.createElement("a");

            link.className = "btn btn-primary quiz-info-button";
            link.dataset.quizId = quiz.id;
            link.textContent = "Info";
            link.href = "/results/" + quiz.id;

            resultCol.className =
              "col-4 d-flex justify-content-center align-items-center";
            resultCol.textContent =
              QuizResults.formatTime(res.finalTime / 1000) + "s";

            nameCol.className =
              "col-6 d-flex justify-content-center align-items-center";
            nameCol.textContent = quiz.desc;

            detailCol.className =
              "col-2 d-flex justify-content-center align-items-center";
            detailCol.appendChild(link);
            row.className = `row prev-result ${i % 2 == 0 ? "even" : ""}`;

            row.appendChild(nameCol);
            row.appendChild(resultCol);
            row.appendChild(detailCol);

            quizPrevResultsSection.appendChild(row);
            i++;
          }
        }
      }
    }
    if (!any) {
      const row = document.createElement("div");
      row.className = `row prev-result d-flex justify-content-center`;
      row.textContent =
        "Jeszcze nie rozwiązałeż żadnego quizu, na co czekasz? :)";
      quizPrevResultsSection.appendChild(row);
    }
  }
}
