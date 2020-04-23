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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
const answerInput = document.getElementById('answer');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const promptSpan = document.getElementById('prompt');
const excerciseNumberSpan = document.getElementById('excercise-number');
const excerciseSection = document.getElementById('excercise');
const penaltyTimeSpan = document.getElementById('penalty-time');
const descParagraph = document.getElementById('desc');
const resultsDiv = document.getElementById('results');
const correctnessDiv = document.getElementById('correctness');
const resultSection = document.getElementById('result');
const saveButton = document.getElementById('save');
const saveWithStatsButton = document.getElementById('save-with-stats');
const initResultSpan = document.getElementById('init-result');
const finalResultSpan = document.getElementById('final-result');
/**
 * May in the future be overwriten to function that display error on screen
 */
const error = console.error;
class QuizRun {
    constructor(quizName = 'example') {
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
            const answer = parseInt(answerInput.value);
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
            error('Podany quiz nie istnieje');
            return;
        }
        else if (this.quiz.questions.length == 0) {
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
    bindEventHandlers() {
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
    changeQuestion() {
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
    endQuiz() {
        this.saveAnswerTime();
        excerciseSection.style.display = 'none';
        this.quizResults = new QuizResults(this.answers, this.quiz);
    }
}
class QuizResults {
    constructor(answers, quiz) {
        this.answers = answers;
        this.quiz = quiz;
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
        saveWithStatsButton.onclick = () => {
            this.saveWithStats();
            this.goToMainScreen();
        };
        saveButton.onclick = () => {
            this.save();
            this.goToMainScreen();
        };
    }
    goToMainScreen() {
        window.location.reload();
    }
    saveWithStats() {
        this.saveItem(this.answers);
    }
    save() {
        this.saveItem(this.finalTime);
    }
    saveItem(item) {
        const prevJSON = localStorage.getItem('runs') || '[]';
        const prev = JSON.parse(prevJSON);
        prev.push(item);
        localStorage.setItem('runs', JSON.stringify(prev));
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
            resultSection.style.display = 'block';
            initResultSpan.textContent = this.formatTime(this.initTime);
            finalResultSpan.textContent = this.formatTime(this.finalTime);
            // console.log(this.answers.entries());
            for (const [i, answer] of this.answers.entries()) {
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
    formatTime(time) {
        return time.toFixed(3).toString();
    }
}
const quizRun = new QuizRun();


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
exports.getQuiz = (name) => {
    const obj = JSON.parse(quizes_1.quiz);
    if (isQuiz(obj)) {
        return obj;
    }
    return null;
};


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
    {    \
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
}';


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXoudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXplcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsa0VBQXlEO0FBRXpELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFxQixDQUFDO0FBQzFFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFzQixDQUFDO0FBQ3hFLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFzQixDQUFDO0FBQ2hGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFzQixDQUFDO0FBQzFF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LElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQUVXLGVBQU8sR0FBRyxDQUFDLElBQVksRUFBZSxFQUFFO0lBQ3BELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBSSxDQUFDLENBQUM7SUFDN0IsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDaEIsT0FBTyxHQUFHLENBQUM7S0FDWDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ1csWUFBSSxHQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlCQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgZ2V0UXVpeiwgUXVpeiwgUXVlc3Rpb24sIEFuc3dlciB9IGZyb20gJy4vcXVpeic7XG5cbmNvbnN0IGFuc3dlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3Qgc3RvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBwcm9tcHRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb21wdCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcbmNvbnN0IGV4Y2VyY2lzZU51bWJlclNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhjZXJjaXNlLW51bWJlcicpIGFzIEhUTUxTcGFuRWxlbWVudDtcbmNvbnN0IGV4Y2VyY2lzZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhjZXJjaXNlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBwZW5hbHR5VGltZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVuYWx0eS10aW1lJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuY29uc3QgZGVzY1BhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5jb25zdCByZXN1bHRzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IGNvcnJlY3RuZXNzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcnJlY3RuZXNzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCByZXN1bHRTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBzYXZlV2l0aFN0YXRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtd2l0aC1zdGF0cycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG5jb25zdCBpbml0UmVzdWx0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0LXJlc3VsdCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcbmNvbnN0IGZpbmFsUmVzdWx0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5hbC1yZXN1bHQnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG5cbi8qKlxuICogTWF5IGluIHRoZSBmdXR1cmUgYmUgb3ZlcndyaXRlbiB0byBmdW5jdGlvbiB0aGF0IGRpc3BsYXkgZXJyb3Igb24gc2NyZWVuXG4gKi9cbmNvbnN0IGVycm9yID0gY29uc29sZS5lcnJvcjtcblxuY2xhc3MgUXVpelJ1biB7XG5cdHByaXZhdGUgcXVlc3Rpb25OdW1iZXI6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgYW5zd2VyU3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHF1aXo6IFF1aXogfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBhbnN3ZXJzOiBBbnN3ZXJbXSA9IFtdO1xuXHRwcml2YXRlIHBlbmFsdGllczogbnVtYmVyW10gPSBbXTtcblx0cHJpdmF0ZSBxdWl6UmVzdWx0czogUXVpelJlc3VsdHMgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHF1aXpOYW1lOiBzdHJpbmcgPSAnZXhhbXBsZScpIHtcblx0XHR0aGlzLnF1aXogPSBnZXRRdWl6KHRoaXMucXVpek5hbWUpO1xuXHRcdGlmICh0aGlzLnF1aXogPT0gbnVsbCkge1xuXHRcdFx0ZXJyb3IoJ1BvZGFueSBxdWl6IG5pZSBpc3RuaWVqZScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5xdWl6LnF1ZXN0aW9ucy5sZW5ndGggPT0gMCkge1xuXHRcdFx0ZXJyb3IoJ1BvZGFueSBxdWl6IG1hIHphIG1hxYJvIHB5dGHFhCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRkZXNjUGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGhpcy5xdWl6LmRlc2M7XG5cblx0XHR0aGlzLnF1aXoucXVlc3Rpb25zLmZvckVhY2goKCkgPT4ge1xuXHRcdFx0dGhpcy5hbnN3ZXJzLnB1c2goeyB0aW1lOiAwLCBhbnN3ZXI6IG51bGwsIGNvcnJlY3Q6IGZhbHNlIH0pO1xuXHRcdFx0dGhpcy5wZW5hbHRpZXMucHVzaCgwKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuYmluZEV2ZW50SGFuZGxlcnMoKTtcblx0fVxuXG5cdHByaXZhdGUgYmluZEV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XG5cdFx0YW5zd2VySW5wdXQub25pbnB1dCA9ICgpID0+IHtcblx0XHRcdGNvbnNvbGUud2FybigxMjM0KTtcblx0XHRcdHRoaXMuc2F2ZUFuc3dlcigpO1xuXG5cdFx0XHRzdG9wQnV0dG9uLmRpc2FibGVkID0gdGhpcy5hbnN3ZXJzLnNvbWUoKGEpID0+IGEuYW5zd2VyID09PSBudWxsKTtcblx0XHR9O1xuXG5cdFx0c3RhcnRCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdGV4Y2VyY2lzZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRzdGFydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5hbnN3ZXJTdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuXHRcdFx0dGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuXHRcdH07XG5cblx0XHRuZXh0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG5cdFx0XHR0aGlzLnF1ZXN0aW9uTnVtYmVyKys7XG5cblx0XHRcdHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcblx0XHR9O1xuXG5cdFx0cHJldmlvdXNCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcblx0XHRcdHRoaXMucXVlc3Rpb25OdW1iZXItLTtcblxuXHRcdFx0dGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuXHRcdH07XG5cblx0XHRzdG9wQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmVuZFF1aXooKTtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG4gICogQ2hhbmdlcyBjdXJyZW50IHF1ZXN0aW9uIHRvIGdpdmVuLlxuICAqIFNldHMgcHJldkFuc3dlclN0YXJ0VGltZSB0byAgY3VycmVudCB0aW1lc3RhbXAuXG4gICovXG5cdHByaXZhdGUgY2hhbmdlUXVlc3Rpb24oKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMucXVpeiA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVpei5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG5cdFx0ZXhjZXJjaXNlTnVtYmVyU3Bhbi50ZXh0Q29udGVudCA9ICh0aGlzLnF1ZXN0aW9uTnVtYmVyICsgMSkudG9TdHJpbmcoKTtcblx0XHRwcm9tcHRTcGFuLnRleHRDb250ZW50ID0gcXVlc3Rpb24ucHJvbXB0O1xuXHRcdHBlbmFsdHlUaW1lU3Bhbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uLnBlbmFsdHkudG9TdHJpbmcoKTtcblxuXHRcdGNvbnN0IGFuc3dlciA9IHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXS5hbnN3ZXI7XG5cdFx0YW5zd2VySW5wdXQudmFsdWUgPSBhbnN3ZXIgPT09IG51bGwgPyAnJyA6IGFuc3dlci50b1N0cmluZygpO1xuXG5cdFx0cHJldmlvdXNCdXR0b24uZGlzYWJsZWQgPSB0aGlzLnF1ZXN0aW9uTnVtYmVyID09PSAwO1xuXHRcdG5leHRCdXR0b24uZGlzYWJsZWQgPSB0aGlzLnF1ZXN0aW9uTnVtYmVyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCAtIDE7XG5cblx0XHR0aGlzLmFuc3dlclN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHR9XG5cblx0LyoqXG4gICogU2F2ZXMgY29udGVzdGFudHMgYW5zd2VyIHRvIGN1cnJlbnQgcXVlc3Rpb24uIFxuICAqL1xuXHRwcml2YXRlIHNhdmVBbnN3ZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgcHJldkFuc3dlciA9IHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXTtcblxuXHRcdGlmIChwcmV2QW5zd2VyID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhbnN3ZXIgPSBwYXJzZUludChhbnN3ZXJJbnB1dC52YWx1ZSk7XG5cdFx0aWYgKGlzTmFOKGFuc3dlcikpIHtcblx0XHRcdHByZXZBbnN3ZXIuYW5zd2VyID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJldkFuc3dlci5hbnN3ZXIgPSBhbnN3ZXI7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuICAqIFNhdmVzIGNvbnRlc3RhbnRzIGFuc3dlciB0aW1lIHRvIGN1cnJlbnQgcXVlc3Rpb24uXG4gICovXG5cdHByaXZhdGUgc2F2ZUFuc3dlclRpbWUgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgZW5kVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG5cdFx0Y29uc3QgcHJldkFuc3dlciA9IHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXTtcblxuXHRcdGlmIChwcmV2QW5zd2VyID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRwcmV2QW5zd2VyLnRpbWUgKz0gZW5kVGltZSAtIHRoaXMuYW5zd2VyU3RhcnRUaW1lO1xuXHR9O1xuXG5cdHByaXZhdGUgZW5kUXVpeigpIHtcblx0XHR0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG5cdFx0ZXhjZXJjaXNlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdFx0dGhpcy5xdWl6UmVzdWx0cyA9IG5ldyBRdWl6UmVzdWx0cyh0aGlzLmFuc3dlcnMsIHRoaXMucXVpeik7XG5cdH1cbn1cblxuY2xhc3MgUXVpelJlc3VsdHMge1xuXHRwcml2YXRlIHBlbmFsdGllczogbnVtYmVyW10gPSBbXTtcblx0cHJpdmF0ZSBpbml0VGltZTogbnVtYmVyID0gMDtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhbnN3ZXJzOiBBbnN3ZXJbXSwgcHJpdmF0ZSBxdWl6OiBRdWl6IHwgbnVsbCkge1xuXHRcdHRoaXMuYmluZEV2ZW50SGFuZGxlcnMoKTtcblx0XHR0aGlzLmNoZWNrQW5zd2VycygpO1xuXHRcdHRoaXMuZ2l2ZVBlbmFsdGllcygpO1xuXHRcdHRoaXMuY2FsY3VsYXRlRmluYWxUaW1lKCk7XG5cdFx0dGhpcy5kaXNwbGF5KCk7XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrQW5zd2VycygpIHtcblx0XHRpZiAodGhpcy5xdWl6ICE9PSBudWxsKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGkgaW4gdGhpcy5hbnN3ZXJzKSB7XG5cdFx0XHRcdHRoaXMuYW5zd2Vyc1tpXS5jb3JyZWN0ID0gdGhpcy5hbnN3ZXJzW2ldLmFuc3dlciA9PT0gdGhpcy5xdWl6LnF1ZXN0aW9uc1tpXS5hbnN3ZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnaXZlUGVuYWx0aWVzKCkge1xuXHRcdGlmICh0aGlzLnF1aXogIT09IG51bGwpIHtcblx0XHRcdGZvciAoY29uc3QgaSBpbiB0aGlzLmFuc3dlcnMpIHtcblx0XHRcdFx0dGhpcy5wZW5hbHRpZXMucHVzaCh0aGlzLmFuc3dlcnNbaV0uY29ycmVjdCA/IDAgOiB0aGlzLnF1aXoucXVlc3Rpb25zW2ldLnBlbmFsdHkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYmluZEV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0c2F2ZVdpdGhTdGF0c0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlV2l0aFN0YXRzKCk7XG5cdFx0XHR0aGlzLmdvVG9NYWluU2NyZWVuKCk7XG5cdFx0fTtcblx0XHRzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmUoKTtcblx0XHRcdHRoaXMuZ29Ub01haW5TY3JlZW4oKTtcblx0XHR9O1xuXHR9XG5cblx0cHJpdmF0ZSBnb1RvTWFpblNjcmVlbigpIHtcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cblxuXHRwcml2YXRlIHNhdmVXaXRoU3RhdHMoKSB7XG5cdFx0dGhpcy5zYXZlSXRlbSh0aGlzLmFuc3dlcnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlKCkge1xuXHRcdHRoaXMuc2F2ZUl0ZW0odGhpcy5maW5hbFRpbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlSXRlbShpdGVtOiBhbnkpIHtcblx0XHRjb25zdCBwcmV2SlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdydW5zJykgfHwgJ1tdJztcblx0XHRjb25zdCBwcmV2ID0gSlNPTi5wYXJzZShwcmV2SlNPTikgYXMgQXJyYXk8QW5zd2VyIHwgbnVtYmVyPjtcblx0XHRwcmV2LnB1c2goaXRlbSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3J1bnMnLCBKU09OLnN0cmluZ2lmeShwcmV2KSk7XG5cdH1cblxuXHRwcml2YXRlIGNhbGN1bGF0ZUZpbmFsVGltZSgpIHtcblx0XHR0aGlzLmluaXRUaW1lID0gMDtcblx0XHRmb3IgKGNvbnN0IGFucyBvZiB0aGlzLmFuc3dlcnMpIHtcblx0XHRcdHRoaXMuaW5pdFRpbWUgKz0gYW5zLnRpbWUgLyAxMDAwO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXQgZmluYWxUaW1lKCkge1xuXHRcdGxldCBmaW5hbFRpbWUgPSB0aGlzLmluaXRUaW1lO1xuXHRcdGZvciAoY29uc3QgcCBvZiB0aGlzLnBlbmFsdGllcykge1xuXHRcdFx0ZmluYWxUaW1lICs9IHA7XG5cdFx0fVxuXHRcdHJldHVybiBmaW5hbFRpbWU7XG5cdH1cblxuXHRwcml2YXRlIGRpc3BsYXkoKSB7XG5cdFx0aWYgKHRoaXMucXVpeikge1xuXHRcdFx0cmVzdWx0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdFx0aW5pdFJlc3VsdFNwYW4udGV4dENvbnRlbnQgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5pbml0VGltZSk7XG5cdFx0XHRmaW5hbFJlc3VsdFNwYW4udGV4dENvbnRlbnQgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5maW5hbFRpbWUpO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmFuc3dlcnMuZW50cmllcygpKTtcblx0XHRcdGZvciAoY29uc3QgWyBpLCBhbnN3ZXIgXSBvZiB0aGlzLmFuc3dlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGksIGFuc3dlcik7XG5cdFx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRkaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX0uIGA7XG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gYW5zd2VyLmNvcnJlY3QgPyAnY29ycmVjdCcgOiAnaW5jb3JyZWN0Jztcblx0XHRcdFx0c3Bhbi50ZXh0Q29udGVudCA9IGFuc3dlci5jb3JyZWN0ID8gJ0NvcnJlY3QgOiknIDogYEluY29yZWN0OiArICR7dGhpcy5xdWl6LnF1ZXN0aW9uc1tpXS5wZW5hbHR5fXNgO1xuXHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHRcdGNvcnJlY3RuZXNzRGl2LmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBmb3JtYXRUaW1lKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRpbWUudG9GaXhlZCgzKS50b1N0cmluZygpO1xuXHR9XG59XG5cbmNvbnN0IHF1aXpSdW4gPSBuZXcgUXVpelJ1bigpO1xuIiwiaW1wb3J0IHsgcXVpeiB9IGZyb20gJy4vcXVpemVzJztcblxuZXhwb3J0IGludGVyZmFjZSBRdWVzdGlvbiB7XG5cdHByb21wdDogc3RyaW5nO1xuXHRhbnN3ZXI6IG51bWJlcjtcblx0cGVuYWx0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aXoge1xuXHRkZXNjOiBzdHJpbmc7XG5cdHF1ZXN0aW9uczogUXVlc3Rpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbnN3ZXIge1xuXHRhbnN3ZXI6IG51bWJlciB8IG51bGw7XG5cdHRpbWU6IG51bWJlcjtcblx0Y29ycmVjdDogYm9vbGVhbjtcbn1cblxuY29uc3QgaXNRdWVzdGlvbiA9IChxdWVzdGlvbjogYW55KTogcXVlc3Rpb24gaXMgUXVlc3Rpb24gPT4ge1xuXHRyZXR1cm4gcXVlc3Rpb24gJiYgcXVlc3Rpb24ucHJvbXB0ICYmIHF1ZXN0aW9uLmFuc3dlciAmJiBxdWVzdGlvbi5wZW5hbHR5O1xufTtcblxuY29uc3QgaXNRdWl6ID0gKHF1aXo6IGFueSk6IHF1aXogaXMgUXVpeiA9PiB7XG5cdHJldHVybiBxdWl6LmRlc2MgJiYgcXVpei5xdWVzdGlvbnM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UXVpeiA9IChuYW1lOiBzdHJpbmcpOiBRdWl6IHwgbnVsbCA9PiB7XG5cdGNvbnN0IG9iaiA9IEpTT04ucGFyc2UocXVpeik7XG5cdGlmIChpc1F1aXoob2JqKSkge1xuXHRcdHJldHVybiBvYmo7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHF1aXogPVxuXHQnXFxcbiAgICB7ICAgIFxcXG4gICAgXCJkZXNjXCI6IFwiTGljennEhyBrYcW8ZHkgbW/FvGVcIixcXFxuICAgIFwicXVlc3Rpb25zXCI6IFtcXFxuICAgICAgICB7XFxcbiAgICAgICAgICAgIFwicHJvbXB0XCI6IFwiMiArIDNcIixcXFxuICAgICAgICAgICAgXCJhbnN3ZXJcIjogNSxcXFxuICAgICAgICAgICAgXCJwZW5hbHR5XCI6IDRcXFxuICAgICAgICB9LFxcXG4gICAgICAgIHtcXFxuICAgICAgICAgICAgXCJwcm9tcHRcIjogXCIyIC0gKC0yNCA6IDQpXCIsXFxcbiAgICAgICAgICAgIFwiYW5zd2VyXCI6IDgsXFxcbiAgICAgICAgICAgIFwicGVuYWx0eVwiOiAxMFxcXG4gICAgICAgIH0sXFxcbiAgICAgICAge1xcXG4gICAgICAgICAgICBcInByb21wdFwiOiBcIjIgKyAzXCIsXFxcbiAgICAgICAgICAgIFwiYW5zd2VyXCI6IDUsXFxcbiAgICAgICAgICAgIFwicGVuYWx0eVwiOiA0XFxcbiAgICAgICAgfSxcXFxuICAgICAgICB7XFxcbiAgICAgICAgICAgIFwicHJvbXB0XCI6IFwiMiAtICgtMjQgOiA0KVwiLFxcXG4gICAgICAgICAgICBcImFuc3dlclwiOiA4LFxcXG4gICAgICAgICAgICBcInBlbmFsdHlcIjogMTBcXFxuICAgICAgICB9XFxcbiAgICBdXFxcbn0nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==