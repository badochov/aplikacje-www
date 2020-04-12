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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            this.quiz = yield quiz_1.getQuiz(this.quizName);
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
        });
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
        saveWithStatsButton.onclick = () => this.saveWithStats();
        saveButton.onclick = () => this.save();
    }
    saveWithStats() {
        localStorage.setItem('run1', JSON.stringify(this.answers));
    }
    save() {
        localStorage.setItem('run1', JSON.stringify(this.finalTime));
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
quizRun.build();


/***/ }),

/***/ "./src/quiz.ts":
/*!*********************!*\
  !*** ./src/quiz.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const isQuestion = (question) => {
    return question && question.prompt && question.answer && question.penalty;
};
const isQuiz = (quiz) => {
    return quiz.desc && quiz.questions;
};
exports.getQuiz = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const raw = yield fetch(`/quizes/${name}.json`);
        const obj = yield raw.json();
        if (isQuiz(obj)) {
            return Promise.resolve(obj);
        }
    }
    catch (err) {
        console.error(err);
    }
    return Promise.resolve(null);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLGtFQUF5RDtBQUV6RCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBcUIsQ0FBQztBQUMxRSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQztBQUN4RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQztBQUNoRixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBc0IsQ0FBQztBQUMxRSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQztBQUN4RSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBb0IsQ0FBQztBQUN4RSxNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQW9CLENBQUM7QUFDM0YsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBbUIsQ0FBQztBQUNoRixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBb0IsQ0FBQztBQUNuRixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBeUIsQ0FBQztBQUM5RSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBbUIsQ0FBQztBQUN4RSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBbUIsQ0FBQztBQUNoRixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBbUIsQ0FBQztBQUMxRSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQztBQUN4RSxNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQXNCLENBQUM7QUFFNUYsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQW9CLENBQUM7QUFDakYsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7QUFFbkY7O0dBRUc7QUFDSCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBRTVCLE1BQU0sT0FBTztJQVFaLFlBQW9CLFdBQW1CLFNBQVM7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFQeEMsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0Isb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsU0FBSSxHQUFnQixJQUFJLENBQUM7UUFDekIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQXVCLElBQUksQ0FBQztRQStFL0M7O1FBRUc7UUFDSyxlQUFVLEdBQUcsR0FBUyxFQUFFO1lBQy9CLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXJELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDdkIsT0FBTzthQUNQO1lBRUQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEIsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDekI7aUJBQU07Z0JBQ04sVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDM0I7UUFDRixDQUFDLENBQUM7UUFFRjs7UUFFRztRQUNLLG1CQUFjLEdBQUcsR0FBUyxFQUFFO1lBQ25DLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVyRCxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU87YUFDUDtZQUVELFVBQVUsQ0FBQyxJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDbkQsQ0FBQyxDQUFDO0lBNUdpRCxDQUFDO0lBRXZDLEtBQUs7O1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxjQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPO2FBQ1A7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMzQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztnQkFDdEMsT0FBTzthQUNQO1lBQ0QsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUUzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFTyxpQkFBaUI7UUFDeEIsV0FBVyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFbEIsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUM7UUFFRixXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUMxQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN6QyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFFbkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLGNBQWMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztJQUdHO0lBQ0ssY0FBYztRQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLE9BQU87U0FDUDtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRCxtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZFLFVBQVUsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxlQUFlLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3hELFdBQVcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFN0QsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxLQUFLLENBQUMsQ0FBQztRQUNwRCxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBbUNPLE9BQU87UUFDZCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0Q7QUFFRCxNQUFNLFdBQVc7SUFHaEIsWUFBb0IsT0FBaUIsRUFBVSxJQUFpQjtRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUZ4RCxjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLFlBQVk7UUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN2QixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUNuRjtTQUNEO0lBQ0YsQ0FBQztJQUVPLGFBQWE7UUFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUN2QixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xGO1NBQ0Q7SUFDRixDQUFDO0lBRU8saUJBQWlCO1FBQ3hCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekQsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVPLGFBQWE7UUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sSUFBSTtRQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLGtCQUFrQjtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQztJQUNGLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0IsU0FBUyxJQUFJLENBQUMsQ0FBQztTQUNmO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztJQUVPLE9BQU87UUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFdEMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RCxlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTlELHVDQUF1QztZQUN2QyxLQUFLLE1BQU0sQ0FBRSxDQUFDLEVBQUUsTUFBTSxDQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDO2dCQUNwRyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Q7SUFDRixDQUFDO0lBRU8sVUFBVSxDQUFDLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7Q0FDRDtBQUVELE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDOUIsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TmhCLE1BQU0sVUFBVSxHQUFHLENBQUMsUUFBYSxFQUF3QixFQUFFO0lBQzFELE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQzNFLENBQUMsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBUyxFQUFnQixFQUFFO0lBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQUVXLGVBQU8sR0FBRyxDQUFPLElBQVksRUFBd0IsRUFBRTtJQUNuRSxJQUFJO1FBQ0gsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtLQUNEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO0lBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLENBQUMsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IGdldFF1aXosIFF1aXosIFF1ZXN0aW9uLCBBbnN3ZXIgfSBmcm9tICcuL3F1aXonO1xuXG5jb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cycpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IHN0b3BCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgcHJvbXB0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9tcHQnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG5jb25zdCBleGNlcmNpc2VOdW1iZXJTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4Y2VyY2lzZS1udW1iZXInKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG5jb25zdCBleGNlcmNpc2VTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4Y2VyY2lzZScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgcGVuYWx0eVRpbWVTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlbmFsdHktdGltZScpIGFzIEhUTUxTcGFuRWxlbWVudDtcbmNvbnN0IGRlc2NQYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuY29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBjb3JyZWN0bmVzc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JyZWN0bmVzcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3Qgc2F2ZVdpdGhTdGF0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXdpdGgtc3RhdHMnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuY29uc3QgaW5pdFJlc3VsdFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdC1yZXN1bHQnKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG5jb25zdCBmaW5hbFJlc3VsdFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluYWwtcmVzdWx0JykgYXMgSFRNTFNwYW5FbGVtZW50O1xuXG4vKipcbiAqIE1heSBpbiB0aGUgZnV0dXJlIGJlIG92ZXJ3cml0ZW4gdG8gZnVuY3Rpb24gdGhhdCBkaXNwbGF5IGVycm9yIG9uIHNjcmVlblxuICovXG5jb25zdCBlcnJvciA9IGNvbnNvbGUuZXJyb3I7XG5cbmNsYXNzIFF1aXpSdW4ge1xuXHRwcml2YXRlIHF1ZXN0aW9uTnVtYmVyOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIGFuc3dlclN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBxdWl6OiBRdWl6IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgYW5zd2VyczogQW5zd2VyW10gPSBbXTtcblx0cHJpdmF0ZSBwZW5hbHRpZXM6IG51bWJlcltdID0gW107XG5cdHByaXZhdGUgcXVpelJlc3VsdHM6IFF1aXpSZXN1bHRzIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBxdWl6TmFtZTogc3RyaW5nID0gJ2V4YW1wbGUnKSB7fVxuXG5cdHB1YmxpYyBhc3luYyBidWlsZCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aGlzLnF1aXogPSBhd2FpdCBnZXRRdWl6KHRoaXMucXVpek5hbWUpO1xuXHRcdGlmICh0aGlzLnF1aXogPT0gbnVsbCkge1xuXHRcdFx0ZXJyb3IoJ1BvZGFueSBxdWl6IG5pZSBpc3RuaWVqZScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5xdWl6LnF1ZXN0aW9ucy5sZW5ndGggPT0gMCkge1xuXHRcdFx0ZXJyb3IoJ1BvZGFueSBxdWl6IG1hIHphIG1hxYJvIHB5dGHFhCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRkZXNjUGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGhpcy5xdWl6LmRlc2M7XG5cblx0XHR0aGlzLnF1aXoucXVlc3Rpb25zLmZvckVhY2goKCkgPT4ge1xuXHRcdFx0dGhpcy5hbnN3ZXJzLnB1c2goeyB0aW1lOiAwLCBhbnN3ZXI6IG51bGwsIGNvcnJlY3Q6IGZhbHNlIH0pO1xuXHRcdFx0dGhpcy5wZW5hbHRpZXMucHVzaCgwKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuYmluZEV2ZW50SGFuZGxlcnMoKTtcblx0fVxuXG5cdHByaXZhdGUgYmluZEV2ZW50SGFuZGxlcnMoKTogdm9pZCB7XG5cdFx0YW5zd2VySW5wdXQub25pbnB1dCA9ICgpID0+IHtcblx0XHRcdGNvbnNvbGUud2FybigxMjM0KTtcblx0XHRcdHRoaXMuc2F2ZUFuc3dlcigpO1xuXG5cdFx0XHRzdG9wQnV0dG9uLmRpc2FibGVkID0gdGhpcy5hbnN3ZXJzLnNvbWUoKGEpID0+IGEuYW5zd2VyID09PSBudWxsKTtcblx0XHR9O1xuXG5cdFx0c3RhcnRCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdGV4Y2VyY2lzZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRzdGFydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdFx0XHR0aGlzLmNoYW5nZVF1ZXN0aW9uKCk7XG5cdFx0fTtcblxuXHRcdG5leHRCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcblx0XHRcdHRoaXMucXVlc3Rpb25OdW1iZXIrKztcblxuXHRcdFx0dGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuXHRcdH07XG5cblx0XHRwcmV2aW91c0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlQW5zd2VyVGltZSgpO1xuXHRcdFx0dGhpcy5xdWVzdGlvbk51bWJlci0tO1xuXG5cdFx0XHR0aGlzLmNoYW5nZVF1ZXN0aW9uKCk7XG5cdFx0fTtcblxuXHRcdHN0b3BCdXR0b24ub25jbGljayA9ICgpID0+IHtcblx0XHRcdHRoaXMuZW5kUXVpeigpO1xuXHRcdH07XG5cdH1cblxuXHQvKipcbiAgKiBDaGFuZ2VzIGN1cnJlbnQgcXVlc3Rpb24gdG8gZ2l2ZW4uXG4gICogU2V0cyBwcmV2QW5zd2VyU3RhcnRUaW1lIHRvICBjdXJyZW50IHRpbWVzdGFtcC5cbiAgKi9cblx0cHJpdmF0ZSBjaGFuZ2VRdWVzdGlvbigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5xdWl6ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWl6LnF1ZXN0aW9uc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXTtcblx0XHRleGNlcmNpc2VOdW1iZXJTcGFuLnRleHRDb250ZW50ID0gKHRoaXMucXVlc3Rpb25OdW1iZXIgKyAxKS50b1N0cmluZygpO1xuXHRcdHByb21wdFNwYW4udGV4dENvbnRlbnQgPSBxdWVzdGlvbi5wcm9tcHQ7XG5cdFx0cGVuYWx0eVRpbWVTcGFuLnRleHRDb250ZW50ID0gcXVlc3Rpb24ucGVuYWx0eS50b1N0cmluZygpO1xuXG5cdFx0Y29uc3QgYW5zd2VyID0gdGhpcy5hbnN3ZXJzW3RoaXMucXVlc3Rpb25OdW1iZXJdLmFuc3dlcjtcblx0XHRhbnN3ZXJJbnB1dC52YWx1ZSA9IGFuc3dlciA9PT0gbnVsbCA/ICcnIDogYW5zd2VyLnRvU3RyaW5nKCk7XG5cblx0XHRwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IHRoaXMucXVlc3Rpb25OdW1iZXIgPT09IDA7XG5cdFx0bmV4dEJ1dHRvbi5kaXNhYmxlZCA9IHRoaXMucXVlc3Rpb25OdW1iZXIgPT09IHRoaXMucXVpei5xdWVzdGlvbnMubGVuZ3RoIC0gMTtcblxuXHRcdHRoaXMuYW5zd2VyU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cdH1cblxuXHQvKipcbiAgKiBTYXZlcyBjb250ZXN0YW50cyBhbnN3ZXIgdG8gY3VycmVudCBxdWVzdGlvbi4gXG4gICovXG5cdHByaXZhdGUgc2F2ZUFuc3dlciA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBwcmV2QW5zd2VyID0gdGhpcy5hbnN3ZXJzW3RoaXMucXVlc3Rpb25OdW1iZXJdO1xuXG5cdFx0aWYgKHByZXZBbnN3ZXIgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFuc3dlciA9IHBhcnNlSW50KGFuc3dlcklucHV0LnZhbHVlKTtcblx0XHRpZiAoaXNOYU4oYW5zd2VyKSkge1xuXHRcdFx0cHJldkFuc3dlci5hbnN3ZXIgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcmV2QW5zd2VyLmFuc3dlciA9IGFuc3dlcjtcblx0XHR9XG5cdH07XG5cblx0LyoqXG4gICogU2F2ZXMgY29udGVzdGFudHMgYW5zd2VyIHRpbWUgdG8gY3VycmVudCBxdWVzdGlvbi5cbiAgKi9cblx0cHJpdmF0ZSBzYXZlQW5zd2VyVGltZSA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBlbmRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cblx0XHRjb25zdCBwcmV2QW5zd2VyID0gdGhpcy5hbnN3ZXJzW3RoaXMucXVlc3Rpb25OdW1iZXJdO1xuXG5cdFx0aWYgKHByZXZBbnN3ZXIgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHByZXZBbnN3ZXIudGltZSArPSBlbmRUaW1lIC0gdGhpcy5hbnN3ZXJTdGFydFRpbWU7XG5cdH07XG5cblx0cHJpdmF0ZSBlbmRRdWl6KCkge1xuXHRcdHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcblx0XHRleGNlcmNpc2VTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0XHR0aGlzLnF1aXpSZXN1bHRzID0gbmV3IFF1aXpSZXN1bHRzKHRoaXMuYW5zd2VycywgdGhpcy5xdWl6KTtcblx0fVxufVxuXG5jbGFzcyBRdWl6UmVzdWx0cyB7XG5cdHByaXZhdGUgcGVuYWx0aWVzOiBudW1iZXJbXSA9IFtdO1xuXHRwcml2YXRlIGluaXRUaW1lOiBudW1iZXIgPSAwO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFuc3dlcnM6IEFuc3dlcltdLCBwcml2YXRlIHF1aXo6IFF1aXogfCBudWxsKSB7XG5cdFx0dGhpcy5iaW5kRXZlbnRIYW5kbGVycygpO1xuXHRcdHRoaXMuY2hlY2tBbnN3ZXJzKCk7XG5cdFx0dGhpcy5naXZlUGVuYWx0aWVzKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVGaW5hbFRpbWUoKTtcblx0XHR0aGlzLmRpc3BsYXkoKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBbnN3ZXJzKCkge1xuXHRcdGlmICh0aGlzLnF1aXogIT09IG51bGwpIHtcblx0XHRcdGZvciAoY29uc3QgaSBpbiB0aGlzLmFuc3dlcnMpIHtcblx0XHRcdFx0dGhpcy5hbnN3ZXJzW2ldLmNvcnJlY3QgPSB0aGlzLmFuc3dlcnNbaV0uYW5zd2VyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zW2ldLmFuc3dlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdpdmVQZW5hbHRpZXMoKSB7XG5cdFx0aWYgKHRoaXMucXVpeiAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChjb25zdCBpIGluIHRoaXMuYW5zd2Vycykge1xuXHRcdFx0XHR0aGlzLnBlbmFsdGllcy5wdXNoKHRoaXMuYW5zd2Vyc1tpXS5jb3JyZWN0ID8gMCA6IHRoaXMucXVpei5xdWVzdGlvbnNbaV0ucGVuYWx0eSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBiaW5kRXZlbnRIYW5kbGVycygpIHtcblx0XHRzYXZlV2l0aFN0YXRzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnNhdmVXaXRoU3RhdHMoKTtcblx0XHRzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnNhdmUoKTtcblx0fVxuXG5cdHByaXZhdGUgc2F2ZVdpdGhTdGF0cygpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncnVuMScsIEpTT04uc3RyaW5naWZ5KHRoaXMuYW5zd2VycykpO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdydW4xJywgSlNPTi5zdHJpbmdpZnkodGhpcy5maW5hbFRpbWUpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlRmluYWxUaW1lKCkge1xuXHRcdHRoaXMuaW5pdFRpbWUgPSAwO1xuXHRcdGZvciAoY29uc3QgYW5zIG9mIHRoaXMuYW5zd2Vycykge1xuXHRcdFx0dGhpcy5pbml0VGltZSArPSBhbnMudGltZSAvIDEwMDA7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldCBmaW5hbFRpbWUoKSB7XG5cdFx0bGV0IGZpbmFsVGltZSA9IHRoaXMuaW5pdFRpbWU7XG5cdFx0Zm9yIChjb25zdCBwIG9mIHRoaXMucGVuYWx0aWVzKSB7XG5cdFx0XHRmaW5hbFRpbWUgKz0gcDtcblx0XHR9XG5cdFx0cmV0dXJuIGZpbmFsVGltZTtcblx0fVxuXG5cdHByaXZhdGUgZGlzcGxheSgpIHtcblx0XHRpZiAodGhpcy5xdWl6KSB7XG5cdFx0XHRyZXN1bHRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0XHRpbml0UmVzdWx0U3Bhbi50ZXh0Q29udGVudCA9IHRoaXMuZm9ybWF0VGltZSh0aGlzLmluaXRUaW1lKTtcblx0XHRcdGZpbmFsUmVzdWx0U3Bhbi50ZXh0Q29udGVudCA9IHRoaXMuZm9ybWF0VGltZSh0aGlzLmZpbmFsVGltZSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuYW5zd2Vycy5lbnRyaWVzKCkpO1xuXHRcdFx0Zm9yIChjb25zdCBbIGksIGFuc3dlciBdIG9mIHRoaXMuYW5zd2Vycy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coaSwgYW5zd2VyKTtcblx0XHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGRpdi50ZXh0Q29udGVudCA9IGAke2kgKyAxfS4gYDtcblx0XHRcdFx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5jbGFzc05hbWUgPSBhbnN3ZXIuY29ycmVjdCA/ICdjb3JyZWN0JyA6ICdpbmNvcnJlY3QnO1xuXHRcdFx0XHRzcGFuLnRleHRDb250ZW50ID0gYW5zd2VyLmNvcnJlY3QgPyAnQ29ycmVjdCA6KScgOiBgSW5jb3JlY3Q6ICsgJHt0aGlzLnF1aXoucXVlc3Rpb25zW2ldLnBlbmFsdHl9c2A7XG5cdFx0XHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcblx0XHRcdFx0Y29ycmVjdG5lc3NEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZvcm1hdFRpbWUodGltZTogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGltZS50b0ZpeGVkKDMpLnRvU3RyaW5nKCk7XG5cdH1cbn1cblxuY29uc3QgcXVpelJ1biA9IG5ldyBRdWl6UnVuKCk7XG5xdWl6UnVuLmJ1aWxkKCk7XG4iLCJleHBvcnQgaW50ZXJmYWNlIFF1ZXN0aW9uIHtcblx0cHJvbXB0OiBzdHJpbmc7XG5cdGFuc3dlcjogbnVtYmVyO1xuXHRwZW5hbHR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpeiB7XG5cdGRlc2M6IHN0cmluZztcblx0cXVlc3Rpb25zOiBRdWVzdGlvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuc3dlciB7XG5cdGFuc3dlcjogbnVtYmVyIHwgbnVsbDtcblx0dGltZTogbnVtYmVyO1xuXHRjb3JyZWN0OiBib29sZWFuO1xufVxuXG5jb25zdCBpc1F1ZXN0aW9uID0gKHF1ZXN0aW9uOiBhbnkpOiBxdWVzdGlvbiBpcyBRdWVzdGlvbiA9PiB7XG5cdHJldHVybiBxdWVzdGlvbiAmJiBxdWVzdGlvbi5wcm9tcHQgJiYgcXVlc3Rpb24uYW5zd2VyICYmIHF1ZXN0aW9uLnBlbmFsdHk7XG59O1xuXG5jb25zdCBpc1F1aXogPSAocXVpejogYW55KTogcXVpeiBpcyBRdWl6ID0+IHtcblx0cmV0dXJuIHF1aXouZGVzYyAmJiBxdWl6LnF1ZXN0aW9ucztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdWl6ID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8UXVpeiB8IG51bGw+ID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBhd2FpdCBmZXRjaChgL3F1aXplcy8ke25hbWV9Lmpzb25gKTtcblx0XHRjb25zdCBvYmogPSBhd2FpdCByYXcuanNvbigpO1xuXHRcdGlmIChpc1F1aXoob2JqKSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShvYmopO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHR9XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==