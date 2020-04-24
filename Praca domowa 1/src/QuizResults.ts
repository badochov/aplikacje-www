import { Answer, Quiz, getQuiz } from './quiz';
import {
	saveWithStatsButton,
	saveButton,
	resultSection,
	initResultSpan,
	finalResultSpan,
	correctnessDiv,
	quizPrevResultsSection
} from './main';

interface Result {
	finalTime: number;
	answers?: Answer[];
	quizId: string;
}

const isResult = (obj: any): obj is Result => {
	return obj.finalTime && obj.quizId;
};

export class QuizResults {
	private penalties: number[] = [];
	private initTime: number = 0;
	constructor(private answers: Answer[], private quiz: Quiz | null, private quizId: string) {
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
		this.saveResult({ finalTime: this.finalTime, answers: this.answers, quizId: this.quizId });
	}

	private save() {
		this.saveResult({ finalTime: this.finalTime, quizId: this.quizId });
	}

	private saveResult(result: Result) {
		const prevJSON = localStorage.getItem('results') || '[]';
		const prev = JSON.parse(prevJSON) as Array<Result>;
		prev.push(result);
		localStorage.setItem('results', JSON.stringify(prev));
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

			initResultSpan.textContent = QuizResults.formatTime(this.initTime);
			finalResultSpan.textContent = QuizResults.formatTime(this.finalTime);

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

	public static formatTime(time: number): string {
		return time.toFixed(3).toString();
	}

	public static displayPreviousResults(): void {
		const results = JSON.parse(localStorage.getItem('results') || '');
		let i = 1;
		console.log(results);
		if (results instanceof Array) {
			for (const res of results) {
				console.log(res, isResult(res));
				if (isResult(res)) {
					const quiz = getQuiz(res.quizId);
					if (quiz) {
						const row = document.createElement('div');
						const nameCol = document.createElement('div');
						const resultCol = document.createElement('div');
						const numberCol = document.createElement('div');

						numberCol.className = 'col-1';
						numberCol.textContent = i.toString();

						resultCol.className = 'col-4';
						resultCol.textContent = QuizResults.formatTime(res.finalTime) + 's';

						nameCol.className = 'col-7';
						nameCol.textContent = quiz.desc;

						row.className = `row prev-result-${i % 2 == 0 ? 'even' : ''}`;

						row.appendChild(numberCol);
						row.appendChild(nameCol);
						row.appendChild(resultCol);

						quizPrevResultsSection.appendChild(row);
						i++;
					}
				}
			}
		}
	}
}
