import { getQuiz, Quiz, Question, Answer } from './quiz';

const answerInput = document.getElementById('answer') as HTMLInputElement;
const nextButton = document.getElementById('next') as HTMLButtonElement;
const previousButton = document.getElementById('previous') as HTMLButtonElement;
const startButton = document.getElementById('start') as HTMLButtonElement;
const stopButton = document.getElementById('stop') as HTMLButtonElement;
const promptSpan = document.getElementById('prompt') as HTMLSpanElement;
const excerciseNumberSpan = document.getElementById('excercise-number') as HTMLSpanElement;
const excerciseSection = document.getElementById('excercise') as HTMLDivElement;
const penaltyTimeSpan = document.getElementById('penalty-time') as HTMLSpanElement;
const descParagraph = document.getElementById('desc') as HTMLParagraphElement;
const resultsDiv = document.getElementById('results') as HTMLDivElement;
const correctnessDiv = document.getElementById('correctness') as HTMLDivElement;
const resultSection = document.getElementById('result') as HTMLDivElement;
const saveButton = document.getElementById('save') as HTMLButtonElement;
const saveWithStatsButton = document.getElementById('save-with-stats') as HTMLButtonElement;

const initResultSpan = document.getElementById('init-result') as HTMLSpanElement;
const finalResultSpan = document.getElementById('final-result') as HTMLSpanElement;

/**
 * May in the future be overwriten to function that display error on screen
 */
const error = console.error;

class QuizRun {
	private questionNumber: number = 0;
	private answerStartTime: number = 0;
	private quiz: Quiz | null = null;
	private answers: Answer[] = [];
	private penalties: number[] = [];
	private quizResults: QuizResults | null = null;

	constructor(private quizName: string = 'example') {
		this.quiz = getQuiz(this.quizName);
		if (this.quiz == null) {
			error('Podany quiz nie istnieje');
			return;
		} else if (this.quiz.questions.length == 0) {
			error('Podany quiz ma za mało pytań');
			return;
		}
		descParagraph.textContent = this.quiz.desc;

		this.quiz.questions.forEach(() => {
			this.answers.push({ time: 0, answer: null, correct: false });
			this.penalties.push(0);
		});

		this.bindEventHandlers();
	}

	private bindEventHandlers(): void {
		answerInput.oninput = () => {
			console.warn(1234);
			this.saveAnswer();

			stopButton.disabled = this.answers.some((a) => a.answer === null);
		};

		startButton.onclick = () => {
			excerciseSection.style.display = 'block';
			startButton.style.display = 'none';
			this.answerStartTime = performance.now();

			this.changeQuestion();
		};

		nextButton.onclick = () => {
			this.saveAnswerTime();
			this.questionNumber++;

			this.changeQuestion();
		};

		previousButton.onclick = () => {
			this.saveAnswerTime();
			this.questionNumber--;

			this.changeQuestion();
		};

		stopButton.onclick = () => {
			this.endQuiz();
		};
	}

	/**
  * Changes current question to given.
  * Sets prevAnswerStartTime to  current timestamp.
  */
	private changeQuestion(): void {
		if (this.quiz === null) {
			return;
		}
		const question = this.quiz.questions[this.questionNumber];
		excerciseNumberSpan.textContent = (this.questionNumber + 1).toString();
		promptSpan.textContent = question.prompt;
		penaltyTimeSpan.textContent = question.penalty.toString();

		const answer = this.answers[this.questionNumber].answer;
		answerInput.value = answer === null ? '' : answer.toString();

		previousButton.disabled = this.questionNumber === 0;
		nextButton.disabled = this.questionNumber === this.quiz.questions.length - 1;

		this.answerStartTime = performance.now();
	}

	/**
  * Saves contestants answer to current question. 
  */
	private saveAnswer = (): void => {
		const prevAnswer = this.answers[this.questionNumber];

		if (prevAnswer == null) {
			return;
		}

		const answer = parseInt(answerInput.value);
		if (isNaN(answer)) {
			prevAnswer.answer = null;
		} else {
			prevAnswer.answer = answer;
		}
	};

	/**
  * Saves contestants answer time to current question.
  */
	private saveAnswerTime = (): void => {
		const endTime = performance.now();

		const prevAnswer = this.answers[this.questionNumber];

		if (prevAnswer == null) {
			return;
		}

		prevAnswer.time += endTime - this.answerStartTime;
	};

	private endQuiz() {
		this.saveAnswerTime();
		excerciseSection.style.display = 'none';

		this.quizResults = new QuizResults(this.answers, this.quiz);
	}
}

class QuizResults {
	private penalties: number[] = [];
	private initTime: number = 0;
	constructor(private answers: Answer[], private quiz: Quiz | null) {
		this.bindEventHandlers();
		this.checkAnswers();
		this.givePenalties();
		this.calculateFinalTime();
		this.display();
	}

	private checkAnswers() {
		if (this.quiz !== null) {
			for (const i in this.answers) {
				this.answers[i].correct = this.answers[i].answer === this.quiz.questions[i].answer;
			}
		}
	}

	private givePenalties() {
		if (this.quiz !== null) {
			for (const i in this.answers) {
				this.penalties.push(this.answers[i].correct ? 0 : this.quiz.questions[i].penalty);
			}
		}
	}

	private bindEventHandlers() {
		saveWithStatsButton.onclick = () => {
			this.saveWithStats();
			this.goToMainScreen();
		};
		saveButton.onclick = () => {
			this.save();
			this.goToMainScreen();
		};
	}

	private goToMainScreen() {
		window.location.reload();
	}

	private saveWithStats() {
		this.saveItem(this.answers);
	}

	private save() {
		this.saveItem(this.finalTime);
	}

	private saveItem(item: any) {
		const prevJSON = localStorage.getItem('runs') || '[]';
		const prev = JSON.parse(prevJSON) as Array<Answer | number>;
		prev.push(item);
		localStorage.setItem('runs', JSON.stringify(prev));
	}

	private calculateFinalTime() {
		this.initTime = 0;
		for (const ans of this.answers) {
			this.initTime += ans.time / 1000;
		}
	}

	public get finalTime() {
		let finalTime = this.initTime;
		for (const p of this.penalties) {
			finalTime += p;
		}
		return finalTime;
	}

	private display() {
		if (this.quiz) {
			resultSection.style.display = 'block';

			initResultSpan.textContent = this.formatTime(this.initTime);
			finalResultSpan.textContent = this.formatTime(this.finalTime);

			// console.log(this.answers.entries());
			for (const [ i, answer ] of this.answers.entries()) {
				console.log(i, answer);
				const div = document.createElement('div');
				div.textContent = `${i + 1}. `;
				const span = document.createElement('span');
				span.className = answer.correct ? 'correct' : 'incorrect';
				span.textContent = answer.correct ? 'Correct :)' : `Incorect: + ${this.quiz.questions[i].penalty}s`;
				div.appendChild(span);
				correctnessDiv.appendChild(div);
			}
		}
	}

	private formatTime(time: number): string {
		return time.toFixed(3).toString();
	}
}

const quizRun = new QuizRun();
