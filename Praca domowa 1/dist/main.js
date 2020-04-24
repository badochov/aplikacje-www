/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/QuizResults.ts":
/*!****************************!*\
  !*** ./src/QuizResults.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
const isResult = (obj) => {
    return obj.finalTime && obj.quizId;
};
class QuizResults {
    constructor(answers, quiz, quizId) {
        this.answers = answers;
        this.quiz = quiz;
        this.quizId = quizId;
        this.penalties = [];
        this.initTime = 0;
        this.bindEventHandlers();
        this.checkAnswers();
        this.givePenalties();
        this.calculateFinalTime();
        this.display();
    }
    checkAnswers() {
        if (this.quiz !== null) {
            for (const i in this.answers) {
                this.answers[i].correct = this.answers[i].answer === this.quiz.questions[i].answer;
            }
        }
    }
    givePenalties() {
        if (this.quiz !== null) {
            for (const i in this.answers) {
                this.penalties.push(this.answers[i].correct ? 0 : this.quiz.questions[i].penalty);
            }
        }
    }
    bindEventHandlers() {
        main_1.saveWithStatsButton.onclick = () => {
            this.saveWithStats();
            this.goToMainScreen();
        };
        main_1.saveButton.onclick = () => {
            this.save();
            this.goToMainScreen();
        };
    }
    goToMainScreen() {
        window.location.reload();
    }
    saveWithStats() {
        this.saveResult({ finalTime: this.finalTime, answers: this.answers, quizId: this.quizId });
    }
    save() {
        this.saveResult({ finalTime: this.finalTime, quizId: this.quizId });
    }
    saveResult(result) {
        const prevJSON = localStorage.getItem('results') || '[]';
        const prev = JSON.parse(prevJSON);
        prev.push(result);
        localStorage.setItem('results', JSON.stringify(prev));
    }
    calculateFinalTime() {
        this.initTime = 0;
        for (const ans of this.answers) {
            this.initTime += ans.time / 1000;
        }
    }
    get finalTime() {
        let finalTime = this.initTime;
        for (const p of this.penalties) {
            finalTime += p;
        }
        return finalTime;
    }
    display() {
        if (this.quiz) {
            main_1.resultSection.style.display = 'block';
            main_1.initResultSpan.textContent = QuizResults.formatTime(this.initTime);
            main_1.finalResultSpan.textContent = QuizResults.formatTime(this.finalTime);
            // console.log(this.answers.entries());
            for (const [i, answer] of this.answers.entries()) {
                console.log(i, answer);
                const div = document.createElement('div');
                div.textContent = `${i + 1}. `;
                const span = document.createElement('span');
                span.className = answer.correct ? 'correct' : 'incorrect';
                span.textContent = answer.correct ? 'Correct :)' : `Incorect: + ${this.quiz.questions[i].penalty}s`;
                div.appendChild(span);
                main_1.correctnessDiv.appendChild(div);
            }
        }
    }
    static formatTime(time) {
        return time.toFixed(3).toString();
    }
    static displayPreviousResults() {
        const results = JSON.parse(localStorage.getItem('results') || '');
        let i = 1;
        console.log(results);
        if (results instanceof Array) {
            for (const res of results) {
                console.log(res, isResult(res));
                if (isResult(res)) {
                    const quiz = quiz_1.getQuiz(res.quizId);
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
                        main_1.quizPrevResultsSection.appendChild(row);
                        i++;
                    }
                }
            }
        }
    }
}
exports.QuizResults = QuizResults;


/***/ }),

/***/ "./src/QuizRun.ts":
/*!************************!*\
  !*** ./src/QuizRun.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
const QuizResults_1 = __webpack_require__(/*! ./QuizResults */ "./src/QuizResults.ts");
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
class QuizRun {
    constructor(quizName = '0') {
        this.quizName = quizName;
        this.questionNumber = 0;
        this.answerStartTime = 0;
        this.quiz = null;
        this.answers = [];
        this.penalties = [];
        this.quizResults = null;
        /**
        * Saves contestants answer to current question.
        */
        this.saveAnswer = () => {
            const prevAnswer = this.answers[this.questionNumber];
            if (prevAnswer == null) {
                return;
            }
            const answer = parseInt(main_1.answerInput.value);
            if (isNaN(answer)) {
                prevAnswer.answer = null;
            }
            else {
                prevAnswer.answer = answer;
            }
        };
        /**
        * Saves contestants answer time to current question.
        */
        this.saveAnswerTime = () => {
            const endTime = performance.now();
            const prevAnswer = this.answers[this.questionNumber];
            if (prevAnswer == null) {
                return;
            }
            prevAnswer.time += endTime - this.answerStartTime;
        };
        this.quiz = quiz_1.getQuiz(this.quizName);
        if (this.quiz == null) {
            main_1.error('Podany quiz nie istnieje');
            return;
        }
        else if (this.quiz.questions.length == 0) {
            main_1.error('Podany quiz ma za mało pytań');
            return;
        }
        main_1.quizChoiseSection.style.display = 'none';
        main_1.quizPrevResultsSection.style.display = 'none';
        main_1.quizDescSection.style.display = 'block';
        main_1.descParagraph.textContent = this.quiz.desc;
        this.quiz.questions.forEach(() => {
            this.answers.push({ time: 0, answer: null, correct: false });
            this.penalties.push(0);
        });
        this.bindEventHandlers();
        main_1.excerciseSection.style.display = 'block';
        this.answerStartTime = performance.now();
        this.changeQuestion();
    }
    bindEventHandlers() {
        main_1.answerInput.oninput = () => {
            this.saveAnswer();
            main_1.stopButton.disabled = this.answers.some((a) => a.answer === null);
        };
        main_1.nextButton.onclick = () => {
            this.saveAnswerTime();
            this.questionNumber++;
            this.changeQuestion();
        };
        main_1.previousButton.onclick = () => {
            this.saveAnswerTime();
            this.questionNumber--;
            this.changeQuestion();
        };
        main_1.stopButton.onclick = () => {
            this.endQuiz();
        };
        main_1.answerForm.onsubmit = () => {
            if (main_1.stopButton.disabled) {
                main_1.nextButton.click();
            }
            else {
                main_1.stopButton.click();
            }
            return false;
        };
    }
    /**
    * Changes current question to given.
    * Sets prevAnswerStartTime to  current timestamp.
    */
    changeQuestion() {
        if (this.quiz === null) {
            return;
        }
        const question = this.quiz.questions[this.questionNumber];
        main_1.excerciseNumberSpan.textContent = (this.questionNumber + 1).toString();
        main_1.promptSpan.textContent = question.prompt;
        main_1.penaltyTimeSpan.textContent = question.penalty.toString();
        const answer = this.answers[this.questionNumber].answer;
        main_1.answerInput.value = answer === null ? '' : answer.toString();
        main_1.previousButton.disabled = this.questionNumber === 0;
        main_1.nextButton.disabled = this.questionNumber === this.quiz.questions.length - 1;
        this.answerStartTime = performance.now();
    }
    endQuiz() {
        this.saveAnswerTime();
        main_1.excerciseSection.style.display = 'none';
        this.quizResults = new QuizResults_1.QuizResults(this.answers, this.quiz, this.quizName);
    }
}
exports.QuizRun = QuizRun;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
const QuizRun_1 = __webpack_require__(/*! ./QuizRun */ "./src/QuizRun.ts");
const QuizResults_1 = __webpack_require__(/*! ./QuizResults */ "./src/QuizResults.ts");
exports.answerInput = document.getElementById('answer');
exports.previousButton = document.getElementById('previous');
exports.nextButton = document.getElementById('next');
exports.stopButton = document.getElementById('stop');
exports.promptSpan = document.getElementById('prompt');
exports.excerciseNumberSpan = document.getElementById('excercise-number');
exports.excerciseSection = document.getElementById('excercise');
exports.quizDescSection = document.getElementById('quiz-desc');
exports.quizChoiseSection = document.getElementById('quiz-choise');
exports.penaltyTimeSpan = document.getElementById('penalty-time');
exports.descParagraph = document.getElementById('desc');
exports.resultsDiv = document.getElementById('results');
exports.quizesDiv = document.getElementById('quizes');
exports.correctnessDiv = document.getElementById('correctness');
exports.resultSection = document.getElementById('result');
exports.saveButton = document.getElementById('save');
exports.saveWithStatsButton = document.getElementById('save-with-stats');
exports.answerForm = document.getElementById('answer-form');
exports.initResultSpan = document.getElementById('init-result');
exports.finalResultSpan = document.getElementById('final-result');
exports.quizPrevResultsSection = document.getElementById('quiz-prev-results');
/**
 * May in the future be overwriten to function that display error on screen
 */
exports.error = console.error;
const addQuizToTable = (id, quiz) => {
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
    exports.quizesDiv.appendChild(row);
};
const displayQuizes = () => {
    for (const [id, quiz] of quiz_1.getQuizes()) {
        addQuizToTable(id, quiz);
    }
    const buttons = document.getElementsByClassName('quiz-start-button');
    Array.from(buttons).forEach((button) => {
        button.onclick = () => {
            new QuizRun_1.QuizRun(button.dataset.quizId);
        };
    });
};
displayQuizes();
QuizResults_1.QuizResults.displayPreviousResults();


/***/ }),

/***/ "./src/quiz.ts":
/*!*********************!*\
  !*** ./src/quiz.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const quizes_1 = __webpack_require__(/*! ./quizes */ "./src/quizes.ts");
const isQuestion = (question) => {
    return question && question.prompt && question.answer && question.penalty;
};
const isQuiz = (quiz) => {
    return quiz.desc && quiz.questions;
};
exports.getQuiz = (id) => {
    const obj = JSON.parse(quizes_1.quiz);
    if (obj instanceof Object) {
        if (isQuiz(obj[id])) {
            return obj[id];
        }
    }
    return null;
};
function* getQuizes() {
    const obj = JSON.parse(quizes_1.quiz);
    if (obj instanceof Object) {
        for (const id in obj) {
            if (isQuiz(obj[id])) {
                yield [id, obj[id]];
            }
        }
    }
}
exports.getQuizes = getQuizes;


/***/ }),

/***/ "./src/quizes.ts":
/*!***********************!*\
  !*** ./src/quizes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.quiz = '\
    {\
        "0":{    \
    "desc": "Liczyć każdy może",\
    "questions": [\
        {\
            "prompt": "2 + 3",\
            "answer": 5,\
            "penalty": 4\
        },\
        {\
            "prompt": "2 - (-24 : 4)",\
            "answer": 8,\
            "penalty": 10\
        },\
        {\
            "prompt": "2 + 3",\
            "answer": 5,\
            "penalty": 4\
        },\
        {\
            "prompt": "2 - (-24 : 4)",\
            "answer": 8,\
            "penalty": 10\
        }\
    ]\
}}';


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1aXpSZXN1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9RdWl6UnVuLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWl6LnRzIiwid2VicGFjazovLy8uL3NyYy9xdWl6ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLGtFQUErQztBQUMvQyxrRUFRZ0I7QUFRaEIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFRLEVBQWlCLEVBQUU7SUFDNUMsT0FBTyxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUYsTUFBYSxXQUFXO0lBR3ZCLFlBQW9CLE9BQWlCLEVBQVUsSUFBaUIsRUFB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QyxDQUFDO0FBRUYsUUFBZSxDQUFDLENBQUMsU0FBUztJQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQUksQ0FBQyxDQUFDO0lBQzdCLElBQUksR0FBRyxZQUFZLE1BQU0sRUFBRTtRQUMxQixLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUNyQixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDcEIsTUFBTSxDQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQzthQUN0QjtTQUNEO0tBQ0Q7QUFDRixDQUFDO0FBVEQsOEJBU0M7Ozs7Ozs7Ozs7Ozs7OztBQzlDWSxZQUFJLEdBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgQW5zd2VyLCBRdWl6LCBnZXRRdWl6IH0gZnJvbSAnLi9xdWl6JztcbmltcG9ydCB7XG5cdHNhdmVXaXRoU3RhdHNCdXR0b24sXG5cdHNhdmVCdXR0b24sXG5cdHJlc3VsdFNlY3Rpb24sXG5cdGluaXRSZXN1bHRTcGFuLFxuXHRmaW5hbFJlc3VsdFNwYW4sXG5cdGNvcnJlY3RuZXNzRGl2LFxuXHRxdWl6UHJldlJlc3VsdHNTZWN0aW9uXG59IGZyb20gJy4vbWFpbic7XG5cbmludGVyZmFjZSBSZXN1bHQge1xuXHRmaW5hbFRpbWU6IG51bWJlcjtcblx0YW5zd2Vycz86IEFuc3dlcltdO1xuXHRxdWl6SWQ6IHN0cmluZztcbn1cblxuY29uc3QgaXNSZXN1bHQgPSAob2JqOiBhbnkpOiBvYmogaXMgUmVzdWx0ID0+IHtcblx0cmV0dXJuIG9iai5maW5hbFRpbWUgJiYgb2JqLnF1aXpJZDtcbn07XG5cbmV4cG9ydCBjbGFzcyBRdWl6UmVzdWx0cyB7XG5cdHByaXZhdGUgcGVuYWx0aWVzOiBudW1iZXJbXSA9IFtdO1xuXHRwcml2YXRlIGluaXRUaW1lOiBudW1iZXIgPSAwO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFuc3dlcnM6IEFuc3dlcltdLCBwcml2YXRlIHF1aXo6IFF1aXogfCBudWxsLCBwcml2YXRlIHF1aXpJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5iaW5kRXZlbnRIYW5kbGVycygpO1xuXHRcdHRoaXMuY2hlY2tBbnN3ZXJzKCk7XG5cdFx0dGhpcy5naXZlUGVuYWx0aWVzKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVGaW5hbFRpbWUoKTtcblx0XHR0aGlzLmRpc3BsYXkoKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBbnN3ZXJzKCkge1xuXHRcdGlmICh0aGlzLnF1aXogIT09IG51bGwpIHtcblx0XHRcdGZvciAoY29uc3QgaSBpbiB0aGlzLmFuc3dlcnMpIHtcblx0XHRcdFx0dGhpcy5hbnN3ZXJzW2ldLmNvcnJlY3QgPSB0aGlzLmFuc3dlcnNbaV0uYW5zd2VyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zW2ldLmFuc3dlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdpdmVQZW5hbHRpZXMoKSB7XG5cdFx0aWYgKHRoaXMucXVpeiAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChjb25zdCBpIGluIHRoaXMuYW5zd2Vycykge1xuXHRcdFx0XHR0aGlzLnBlbmFsdGllcy5wdXNoKHRoaXMuYW5zd2Vyc1tpXS5jb3JyZWN0ID8gMCA6IHRoaXMucXVpei5xdWVzdGlvbnNbaV0ucGVuYWx0eSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBiaW5kRXZlbnRIYW5kbGVycygpIHtcblx0XHRzYXZlV2l0aFN0YXRzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVXaXRoU3RhdHMoKTtcblx0XHRcdHRoaXMuZ29Ub01haW5TY3JlZW4oKTtcblx0XHR9O1xuXHRcdHNhdmVCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2F2ZSgpO1xuXHRcdFx0dGhpcy5nb1RvTWFpblNjcmVlbigpO1xuXHRcdH07XG5cdH1cblxuXHRwcml2YXRlIGdvVG9NYWluU2NyZWVuKCkge1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0fVxuXG5cdHByaXZhdGUgc2F2ZVdpdGhTdGF0cygpIHtcblx0XHR0aGlzLnNhdmVSZXN1bHQoeyBmaW5hbFRpbWU6IHRoaXMuZmluYWxUaW1lLCBhbnN3ZXJzOiB0aGlzLmFuc3dlcnMsIHF1aXpJZDogdGhpcy5xdWl6SWQgfSk7XG5cdH1cblxuXHRwcml2YXRlIHNhdmUoKSB7XG5cdFx0dGhpcy5zYXZlUmVzdWx0KHsgZmluYWxUaW1lOiB0aGlzLmZpbmFsVGltZSwgcXVpeklkOiB0aGlzLnF1aXpJZCB9KTtcblx0fVxuXG5cdHByaXZhdGUgc2F2ZVJlc3VsdChyZXN1bHQ6IFJlc3VsdCkge1xuXHRcdGNvbnN0IHByZXZKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3VsdHMnKSB8fCAnW10nO1xuXHRcdGNvbnN0IHByZXYgPSBKU09OLnBhcnNlKHByZXZKU09OKSBhcyBBcnJheTxSZXN1bHQ+O1xuXHRcdHByZXYucHVzaChyZXN1bHQpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXN1bHRzJywgSlNPTi5zdHJpbmdpZnkocHJldikpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYWxjdWxhdGVGaW5hbFRpbWUoKSB7XG5cdFx0dGhpcy5pbml0VGltZSA9IDA7XG5cdFx0Zm9yIChjb25zdCBhbnMgb2YgdGhpcy5hbnN3ZXJzKSB7XG5cdFx0XHR0aGlzLmluaXRUaW1lICs9IGFucy50aW1lIC8gMTAwMDtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGZpbmFsVGltZSgpIHtcblx0XHRsZXQgZmluYWxUaW1lID0gdGhpcy5pbml0VGltZTtcblx0XHRmb3IgKGNvbnN0IHAgb2YgdGhpcy5wZW5hbHRpZXMpIHtcblx0XHRcdGZpbmFsVGltZSArPSBwO1xuXHRcdH1cblx0XHRyZXR1cm4gZmluYWxUaW1lO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXNwbGF5KCkge1xuXHRcdGlmICh0aGlzLnF1aXopIHtcblx0XHRcdHJlc3VsdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHRcdGluaXRSZXN1bHRTcGFuLnRleHRDb250ZW50ID0gUXVpelJlc3VsdHMuZm9ybWF0VGltZSh0aGlzLmluaXRUaW1lKTtcblx0XHRcdGZpbmFsUmVzdWx0U3Bhbi50ZXh0Q29udGVudCA9IFF1aXpSZXN1bHRzLmZvcm1hdFRpbWUodGhpcy5maW5hbFRpbWUpO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmFuc3dlcnMuZW50cmllcygpKTtcblx0XHRcdGZvciAoY29uc3QgWyBpLCBhbnN3ZXIgXSBvZiB0aGlzLmFuc3dlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGksIGFuc3dlcik7XG5cdFx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRkaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX0uIGA7XG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gYW5zd2VyLmNvcnJlY3QgPyAnY29ycmVjdCcgOiAnaW5jb3JyZWN0Jztcblx0XHRcdFx0c3Bhbi50ZXh0Q29udGVudCA9IGFuc3dlci5jb3JyZWN0ID8gJ0NvcnJlY3QgOiknIDogYEluY29yZWN0OiArICR7dGhpcy5xdWl6LnF1ZXN0aW9uc1tpXS5wZW5hbHR5fXNgO1xuXHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRcdGNvcnJlY3RuZXNzRGl2LmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRpbWUudG9GaXhlZCgzKS50b1N0cmluZygpO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBkaXNwbGF5UHJldmlvdXNSZXN1bHRzKCk6IHZvaWQge1xuXHRcdGNvbnN0IHJlc3VsdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN1bHRzJykgfHwgJycpO1xuXHRcdGxldCBpID0gMTtcblx0XHRjb25zb2xlLmxvZyhyZXN1bHRzKTtcblx0XHRpZiAocmVzdWx0cyBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRmb3IgKGNvbnN0IHJlcyBvZiByZXN1bHRzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcywgaXNSZXN1bHQocmVzKSk7XG5cdFx0XHRcdGlmIChpc1Jlc3VsdChyZXMpKSB7XG5cdFx0XHRcdFx0Y29uc3QgcXVpeiA9IGdldFF1aXoocmVzLnF1aXpJZCk7XG5cdFx0XHRcdFx0aWYgKHF1aXopIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdFx0Y29uc3QgbmFtZUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVzdWx0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0XHRjb25zdCBudW1iZXJDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHRcdFx0XHRcdFx0bnVtYmVyQ29sLmNsYXNzTmFtZSA9ICdjb2wtMSc7XG5cdFx0XHRcdFx0XHRudW1iZXJDb2wudGV4dENvbnRlbnQgPSBpLnRvU3RyaW5nKCk7XG5cblx0XHRcdFx0XHRcdHJlc3VsdENvbC5jbGFzc05hbWUgPSAnY29sLTQnO1xuXHRcdFx0XHRcdFx0cmVzdWx0Q29sLnRleHRDb250ZW50ID0gUXVpelJlc3VsdHMuZm9ybWF0VGltZShyZXMuZmluYWxUaW1lKSArICdzJztcblxuXHRcdFx0XHRcdFx0bmFtZUNvbC5jbGFzc05hbWUgPSAnY29sLTcnO1xuXHRcdFx0XHRcdFx0bmFtZUNvbC50ZXh0Q29udGVudCA9IHF1aXouZGVzYztcblxuXHRcdFx0XHRcdFx0cm93LmNsYXNzTmFtZSA9IGByb3cgcHJldi1yZXN1bHQtJHtpICUgMiA9PSAwID8gJ2V2ZW4nIDogJyd9YDtcblxuXHRcdFx0XHRcdFx0cm93LmFwcGVuZENoaWxkKG51bWJlckNvbCk7XG5cdFx0XHRcdFx0XHRyb3cuYXBwZW5kQ2hpbGQobmFtZUNvbCk7XG5cdFx0XHRcdFx0XHRyb3cuYXBwZW5kQ2hpbGQocmVzdWx0Q29sKTtcblxuXHRcdFx0XHRcdFx0cXVpelByZXZSZXN1bHRzU2VjdGlvbi5hcHBlbmRDaGlsZChyb3cpO1xuXHRcdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgUXVpeiwgQW5zd2VyLCBnZXRRdWl6IH0gZnJvbSAnLi9xdWl6JztcbmltcG9ydCB7IFF1aXpSZXN1bHRzIH0gZnJvbSAnLi9RdWl6UmVzdWx0cyc7XG5pbXBvcnQge1xuXHRkZXNjUGFyYWdyYXBoLFxuXHRlcnJvcixcblx0YW5zd2VySW5wdXQsXG5cdHN0b3BCdXR0b24sXG5cdGV4Y2VyY2lzZVNlY3Rpb24sXG5cdG5leHRCdXR0b24sXG5cdHByZXZpb3VzQnV0dG9uLFxuXHRleGNlcmNpc2VOdW1iZXJTcGFuLFxuXHRwcm9tcHRTcGFuLFxuXHRwZW5hbHR5VGltZVNwYW4sXG5cdHF1aXpDaG9pc2VTZWN0aW9uLFxuXHRxdWl6RGVzY1NlY3Rpb24sXG5cdGFuc3dlckZvcm0sXG5cdHF1aXpQcmV2UmVzdWx0c1NlY3Rpb25cbn0gZnJvbSAnLi9tYWluJztcblxuZXhwb3J0IGNsYXNzIFF1aXpSdW4ge1xuXHRwcml2YXRlIHF1ZXN0aW9uTnVtYmVyOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIGFuc3dlclN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBxdWl6OiBRdWl6IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgYW5zd2VyczogQW5zd2VyW10gPSBbXTtcblx0cHJpdmF0ZSBwZW5hbHRpZXM6IG51bWJlcltdID0gW107XG5cdHByaXZhdGUgcXVpelJlc3VsdHM6IFF1aXpSZXN1bHRzIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBxdWl6TmFtZTogc3RyaW5nID0gJzAnKSB7XG5cdFx0dGhpcy5xdWl6ID0gZ2V0UXVpeih0aGlzLnF1aXpOYW1lKTtcblx0XHRpZiAodGhpcy5xdWl6ID09IG51bGwpIHtcblx0XHRcdGVycm9yKCdQb2RhbnkgcXVpeiBuaWUgaXN0bmllamUnKTtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2UgaWYgKHRoaXMucXVpei5xdWVzdGlvbnMubGVuZ3RoID09IDApIHtcblx0XHRcdGVycm9yKCdQb2RhbnkgcXVpeiBtYSB6YSBtYcWCbyBweXRhxYQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cXVpekNob2lzZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRxdWl6UHJldlJlc3VsdHNTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cXVpekRlc2NTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdGRlc2NQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0aGlzLnF1aXouZGVzYztcblxuXHRcdHRoaXMucXVpei5xdWVzdGlvbnMuZm9yRWFjaCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFuc3dlcnMucHVzaCh7IHRpbWU6IDAsIGFuc3dlcjogbnVsbCwgY29ycmVjdDogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLnBlbmFsdGllcy5wdXNoKDApO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5iaW5kRXZlbnRIYW5kbGVycygpO1xuXG5cdFx0ZXhjZXJjaXNlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR0aGlzLmFuc3dlclN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG5cdFx0dGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuXHR9XG5cblx0cHJpdmF0ZSBiaW5kRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcblx0XHRhbnN3ZXJJbnB1dC5vbmlucHV0ID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlQW5zd2VyKCk7XG5cblx0XHRcdHN0b3BCdXR0b24uZGlzYWJsZWQgPSB0aGlzLmFuc3dlcnMuc29tZSgoYSkgPT4gYS5hbnN3ZXIgPT09IG51bGwpO1xuXHRcdH07XG5cblx0XHRuZXh0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG5cdFx0XHR0aGlzLnF1ZXN0aW9uTnVtYmVyKys7XG5cblx0XHRcdHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcblx0XHR9O1xuXG5cdFx0cHJldmlvdXNCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcblx0XHRcdHRoaXMucXVlc3Rpb25OdW1iZXItLTtcblxuXHRcdFx0dGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuXHRcdH07XG5cblx0XHRzdG9wQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmVuZFF1aXooKTtcblx0XHR9O1xuXG5cdFx0YW5zd2VyRm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcblx0XHRcdGlmIChzdG9wQnV0dG9uLmRpc2FibGVkKSB7XG5cdFx0XHRcdG5leHRCdXR0b24uY2xpY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0b3BCdXR0b24uY2xpY2soKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG4gICAgKiBDaGFuZ2VzIGN1cnJlbnQgcXVlc3Rpb24gdG8gZ2l2ZW4uXG4gICAgKiBTZXRzIHByZXZBbnN3ZXJTdGFydFRpbWUgdG8gIGN1cnJlbnQgdGltZXN0YW1wLlxuICAgICovXG5cdHByaXZhdGUgY2hhbmdlUXVlc3Rpb24oKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucXVpeiA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVpei5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG5cdFx0ZXhjZXJjaXNlTnVtYmVyU3Bhbi50ZXh0Q29udGVudCA9ICh0aGlzLnF1ZXN0aW9uTnVtYmVyICsgMSkudG9TdHJpbmcoKTtcblx0XHRwcm9tcHRTcGFuLnRleHRDb250ZW50ID0gcXVlc3Rpb24ucHJvbXB0O1xuXHRcdHBlbmFsdHlUaW1lU3Bhbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uLnBlbmFsdHkudG9TdHJpbmcoKTtcblxuXHRcdGNvbnN0IGFuc3dlciA9IHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXS5hbnN3ZXI7XG5cdFx0YW5zd2VySW5wdXQudmFsdWUgPSBhbnN3ZXIgPT09IG51bGwgPyAnJyA6IGFuc3dlci50b1N0cmluZygpO1xuXG5cdFx0cHJldmlvdXNCdXR0b24uZGlzYWJsZWQgPSB0aGlzLnF1ZXN0aW9uTnVtYmVyID09PSAwO1xuXHRcdG5leHRCdXR0b24uZGlzYWJsZWQgPSB0aGlzLnF1ZXN0aW9uTnVtYmVyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCAtIDE7XG5cblx0XHR0aGlzLmFuc3dlclN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG5cblx0LyoqXG4gICAgKiBTYXZlcyBjb250ZXN0YW50cyBhbnN3ZXIgdG8gY3VycmVudCBxdWVzdGlvbi4gXG4gICAgKi9cblx0cHJpdmF0ZSBzYXZlQW5zd2VyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHByZXZBbnN3ZXIgPSB0aGlzLmFuc3dlcnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG5cblx0XHRpZiAocHJldkFuc3dlciA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYW5zd2VyID0gcGFyc2VJbnQoYW5zd2VySW5wdXQudmFsdWUpO1xuXHRcdGlmIChpc05hTihhbnN3ZXIpKSB7XG5cdFx0XHRwcmV2QW5zd2VyLmFuc3dlciA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByZXZBbnN3ZXIuYW5zd2VyID0gYW5zd2VyO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgICAqIFNhdmVzIGNvbnRlc3RhbnRzIGFuc3dlciB0aW1lIHRvIGN1cnJlbnQgcXVlc3Rpb24uXG4gICAgKi9cblx0cHJpdmF0ZSBzYXZlQW5zd2VyVGltZSA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBlbmRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cblx0XHRjb25zdCBwcmV2QW5zd2VyID0gdGhpcy5hbnN3ZXJzW3RoaXMucXVlc3Rpb25OdW1iZXJdO1xuXG5cdFx0aWYgKHByZXZBbnN3ZXIgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHByZXZBbnN3ZXIudGltZSArPSBlbmRUaW1lIC0gdGhpcy5hbnN3ZXJTdGFydFRpbWU7XG5cdH07XG5cblx0cHJpdmF0ZSBlbmRRdWl6KCkge1xuXHRcdHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcblx0XHRleGNlcmNpc2VTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0XHR0aGlzLnF1aXpSZXN1bHRzID0gbmV3IFF1aXpSZXN1bHRzKHRoaXMuYW5zd2VycywgdGhpcy5xdWl6LCB0aGlzLnF1aXpOYW1lKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgZ2V0UXVpeiwgUXVpeiwgUXVlc3Rpb24sIEFuc3dlciwgZ2V0UXVpemVzIH0gZnJvbSAnLi9xdWl6JztcbmltcG9ydCB7IFF1aXpSdW4gfSBmcm9tICcuL1F1aXpSdW4nO1xuaW1wb3J0IHsgUXVpelJlc3VsdHMgfSBmcm9tICcuL1F1aXpSZXN1bHRzJztcblxuZXhwb3J0IGNvbnN0IGFuc3dlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXMnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBzdG9wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3AnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBwcm9tcHRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb21wdCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcbmV4cG9ydCBjb25zdCBleGNlcmNpc2VOdW1iZXJTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4Y2VyY2lzZS1udW1iZXInKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgZXhjZXJjaXNlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGNlcmNpc2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBxdWl6RGVzY1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpei1kZXNjJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcXVpekNob2lzZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpei1jaG9pc2UnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBwZW5hbHR5VGltZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVuYWx0eS10aW1lJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGRlc2NQYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHJlc3VsdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHF1aXplc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6ZXMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBjb3JyZWN0bmVzc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JyZWN0bmVzcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHJlc3VsdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5leHBvcnQgY29uc3Qgc2F2ZVdpdGhTdGF0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXdpdGgtc3RhdHMnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBhbnN3ZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlci1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG5leHBvcnQgY29uc3QgaW5pdFJlc3VsdFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdC1yZXN1bHQnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgZmluYWxSZXN1bHRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmFsLXJlc3VsdCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpei1wcmV2LXJlc3VsdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuLyoqXG4gKiBNYXkgaW4gdGhlIGZ1dHVyZSBiZSBvdmVyd3JpdGVuIHRvIGZ1bmN0aW9uIHRoYXQgZGlzcGxheSBlcnJvciBvbiBzY3JlZW5cbiAqL1xuZXhwb3J0IGNvbnN0IGVycm9yID0gY29uc29sZS5lcnJvcjtcblxuY29uc3QgYWRkUXVpelRvVGFibGUgPSAoaWQ6IHN0cmluZywgcXVpejogUXVpeikgPT4ge1xuXHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgbmFtZUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBhY3Rpb25Db2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cblx0YnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnkgcXVpei1zdGFydC1idXR0b24nO1xuXHRidXR0b24uZGF0YXNldC5xdWl6SWQgPSBpZDtcblx0YnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0JztcblxuXHRhY3Rpb25Db2wuY2xhc3NOYW1lID0gJ2NvbC00Jztcblx0YWN0aW9uQ29sLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cblx0bmFtZUNvbC5jbGFzc05hbWUgPSAnY29sLTgnO1xuXHRuYW1lQ29sLnRleHRDb250ZW50ID0gcXVpei5kZXNjO1xuXG5cdHJvdy5jbGFzc05hbWUgPSAncm93JztcblxuXHRyb3cuYXBwZW5kQ2hpbGQobmFtZUNvbCk7XG5cdHJvdy5hcHBlbmRDaGlsZChhY3Rpb25Db2wpO1xuXG5cdHF1aXplc0Rpdi5hcHBlbmRDaGlsZChyb3cpO1xufTtcblxuY29uc3QgZGlzcGxheVF1aXplcyA9ICgpID0+IHtcblx0Zm9yIChjb25zdCBbIGlkLCBxdWl6IF0gb2YgZ2V0UXVpemVzKCkpIHtcblx0XHRhZGRRdWl6VG9UYWJsZShpZCwgcXVpeik7XG5cdH1cblxuXHRjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncXVpei1zdGFydC1idXR0b24nKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxCdXR0b25FbGVtZW50Pjtcblx0QXJyYXkuZnJvbShidXR0b25zKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdG5ldyBRdWl6UnVuKGJ1dHRvbi5kYXRhc2V0LnF1aXpJZCk7XG5cdFx0fTtcblx0fSk7XG59O1xuXG5kaXNwbGF5UXVpemVzKCk7XG5cblF1aXpSZXN1bHRzLmRpc3BsYXlQcmV2aW91c1Jlc3VsdHMoKTtcbiIsImltcG9ydCB7IHF1aXogfSBmcm9tICcuL3F1aXplcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlc3Rpb24ge1xuXHRwcm9tcHQ6IHN0cmluZztcblx0YW5zd2VyOiBudW1iZXI7XG5cdHBlbmFsdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWl6IHtcblx0ZGVzYzogc3RyaW5nO1xuXHRxdWVzdGlvbnM6IFF1ZXN0aW9uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5zd2VyIHtcblx0YW5zd2VyOiBudW1iZXIgfCBudWxsO1xuXHR0aW1lOiBudW1iZXI7XG5cdGNvcnJlY3Q6IGJvb2xlYW47XG59XG5cbmNvbnN0IGlzUXVlc3Rpb24gPSAocXVlc3Rpb246IGFueSk6IHF1ZXN0aW9uIGlzIFF1ZXN0aW9uID0+IHtcblx0cmV0dXJuIHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnByb21wdCAmJiBxdWVzdGlvbi5hbnN3ZXIgJiYgcXVlc3Rpb24ucGVuYWx0eTtcbn07XG5cbmNvbnN0IGlzUXVpeiA9IChxdWl6OiBhbnkpOiBxdWl6IGlzIFF1aXogPT4ge1xuXHRyZXR1cm4gcXVpei5kZXNjICYmIHF1aXoucXVlc3Rpb25zO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFF1aXogPSAoaWQ6IHN0cmluZyk6IFF1aXogfCBudWxsID0+IHtcblx0Y29uc3Qgb2JqID0gSlNPTi5wYXJzZShxdWl6KTtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkge1xuXHRcdGlmIChpc1F1aXoob2JqW2lkXSkpIHtcblx0XHRcdHJldHVybiBvYmpbaWRdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0UXVpemVzKCk6IEdlbmVyYXRvcjxbc3RyaW5nLCBRdWl6XT4ge1xuXHRjb25zdCBvYmogPSBKU09OLnBhcnNlKHF1aXopO1xuXHRpZiAob2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG5cdFx0Zm9yIChjb25zdCBpZCBpbiBvYmopIHtcblx0XHRcdGlmIChpc1F1aXoob2JqW2lkXSkpIHtcblx0XHRcdFx0eWllbGQgWyBpZCwgb2JqW2lkXSBdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGNvbnN0IHF1aXogPVxuXHQnXFxcbiAgICB7XFxcbiAgICAgICAgXCIwXCI6eyAgICBcXFxuICAgIFwiZGVzY1wiOiBcIkxpY3p5xIcga2HFvGR5IG1vxbxlXCIsXFxcbiAgICBcInF1ZXN0aW9uc1wiOiBbXFxcbiAgICAgICAge1xcXG4gICAgICAgICAgICBcInByb21wdFwiOiBcIjIgKyAzXCIsXFxcbiAgICAgICAgICAgIFwiYW5zd2VyXCI6IDUsXFxcbiAgICAgICAgICAgIFwicGVuYWx0eVwiOiA0XFxcbiAgICAgICAgfSxcXFxuICAgICAgICB7XFxcbiAgICAgICAgICAgIFwicHJvbXB0XCI6IFwiMiAtICgtMjQgOiA0KVwiLFxcXG4gICAgICAgICAgICBcImFuc3dlclwiOiA4LFxcXG4gICAgICAgICAgICBcInBlbmFsdHlcIjogMTBcXFxuICAgICAgICB9LFxcXG4gICAgICAgIHtcXFxuICAgICAgICAgICAgXCJwcm9tcHRcIjogXCIyICsgM1wiLFxcXG4gICAgICAgICAgICBcImFuc3dlclwiOiA1LFxcXG4gICAgICAgICAgICBcInBlbmFsdHlcIjogNFxcXG4gICAgICAgIH0sXFxcbiAgICAgICAge1xcXG4gICAgICAgICAgICBcInByb21wdFwiOiBcIjIgLSAoLTI0IDogNClcIixcXFxuICAgICAgICAgICAgXCJhbnN3ZXJcIjogOCxcXFxuICAgICAgICAgICAgXCJwZW5hbHR5XCI6IDEwXFxcbiAgICAgICAgfVxcXG4gICAgXVxcXG59fSc7XG4iXSwic291cmNlUm9vdCI6IiJ9