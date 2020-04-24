import { getQuiz, Quiz, Question, Answer, getQuizes } from './quiz';
import { QuizRun } from './QuizRun';
import { QuizResults } from './QuizResults';

export const answerInput = document.getElementById('answer') as HTMLInputElement;
export const previousButton = document.getElementById('previous') as HTMLButtonElement;
export const nextButton = document.getElementById('next') as HTMLButtonElement;
export const stopButton = document.getElementById('stop') as HTMLButtonElement;
export const promptSpan = document.getElementById('prompt') as HTMLSpanElement;
export const excerciseNumberSpan = document.getElementById('excercise-number') as HTMLSpanElement;
export const excerciseSection = document.getElementById('excercise') as HTMLDivElement;
export const quizDescSection = document.getElementById('quiz-desc') as HTMLDivElement;
export const quizChoiseSection = document.getElementById('quiz-choise') as HTMLDivElement;
export const penaltyTimeSpan = document.getElementById('penalty-time') as HTMLSpanElement;
export const descParagraph = document.getElementById('desc') as HTMLParagraphElement;
export const resultsDiv = document.getElementById('results') as HTMLDivElement;
export const quizesDiv = document.getElementById('quizes') as HTMLDivElement;
export const correctnessDiv = document.getElementById('correctness') as HTMLDivElement;
export const resultSection = document.getElementById('result') as HTMLDivElement;
export const saveButton = document.getElementById('save') as HTMLButtonElement;
export const saveWithStatsButton = document.getElementById('save-with-stats') as HTMLButtonElement;
export const answerForm = document.getElementById('answer-form') as HTMLFormElement;

export const initResultSpan = document.getElementById('init-result') as HTMLSpanElement;
export const finalResultSpan = document.getElementById('final-result') as HTMLSpanElement;

export const quizPrevResultsSection = document.getElementById('quiz-prev-results') as HTMLDivElement;

/**
 * May in the future be overwriten to function that display error on screen
 */
export const error = console.error;

const addQuizToTable = (id: string, quiz: Quiz) => {
	const row = document.createElement('div');
	const nameCol = document.createElement('div');
	const actionCol = document.createElement('div');
	const button = document.createElement('button');

	button.className = 'btn btn-primary quiz-start-button';
	button.dataset.quizId = id;
	button.textContent = 'Start';

	actionCol.className = 'col-4';
	actionCol.appendChild(button);

	nameCol.className = 'col-8';
	nameCol.textContent = quiz.desc;

	row.className = 'row';

	row.appendChild(nameCol);
	row.appendChild(actionCol);

	quizesDiv.appendChild(row);
};

const displayQuizes = () => {
	for (const [ id, quiz ] of getQuizes()) {
		addQuizToTable(id, quiz);
	}

	const buttons = document.getElementsByClassName('quiz-start-button') as HTMLCollectionOf<HTMLButtonElement>;
	Array.from(buttons).forEach((button) => {
		button.onclick = () => {
			new QuizRun(button.dataset.quizId);
		};
	});
};

displayQuizes();

QuizResults.displayPreviousResults();
