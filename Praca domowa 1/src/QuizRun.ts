import { Quiz, Answer, getQuiz } from './quiz';
import { QuizResults } from './QuizResults';
import {
	descParagraph,
	error,
	answerInput,
	stopButton,
	excerciseSection,
	nextButton,
	previousButton,
	excerciseNumberSpan,
	promptSpan,
	penaltyTimeSpan,
	quizChoiseSection,
	quizDescSection,
	answerForm,
	quizPrevResultsSection
} from './main';

export class QuizRun {
	private questionNumber: number = 0;
	private answerStartTime: number = 0;
	private quiz: Quiz | null = null;
	private answers: Answer[] = [];
	private penalties: number[] = [];
	private quizResults: QuizResults | null = null;

	constructor(private quizName: string = '0') {
		this.quiz = getQuiz(this.quizName);
		if (this.quiz == null) {
			error('Podany quiz nie istnieje');
			return;
		} else if (this.quiz.questions.length == 0) {
			error('Podany quiz ma za mało pytań');
			return;
		}
		quizChoiseSection.style.display = 'none';
		quizPrevResultsSection.style.display = 'none';
		quizDescSection.style.display = 'block';
		descParagraph.textContent = this.quiz.desc;

		this.quiz.questions.forEach(() => {
			this.answers.push({ time: 0, answer: null, correct: false });
			this.penalties.push(0);
		});

		this.bindEventHandlers();

		excerciseSection.style.display = 'block';
		this.answerStartTime = performance.now();

		this.changeQuestion();
	}

	private bindEventHandlers(): void {
		answerInput.oninput = () => {
			this.saveAnswer();

			stopButton.disabled = this.answers.some((a) => a.answer === null);
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

		answerForm.onsubmit = () => {
			if (stopButton.disabled) {
				nextButton.click();
			} else {
				stopButton.click();
			}
			return false;
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

		this.quizResults = new QuizResults(this.answers, this.quiz, this.quizName);
	}
}
