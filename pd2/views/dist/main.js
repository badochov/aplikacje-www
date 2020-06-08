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

/***/ "./src/HTMLElements.ts":
/*!*****************************!*\
  !*** ./src/HTMLElements.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.quickAccessDiv = exports.quizPrevResultsSection = exports.finalResultSpan = exports.initResultSpan = exports.answerForm = exports.saveWithStatsButton = exports.saveButton = exports.resultSection = exports.correctnessDiv = exports.quizesDiv = exports.resultsDiv = exports.descParagraph = exports.penaltyTimeSpan = exports.quizChoiseSection = exports.quizDescSection = exports.excerciseSection = exports.excerciseNumberSpan = exports.promptSpan = exports.stopButton = exports.nextButton = exports.previousButton = exports.answerInput = void 0;
exports.answerInput = document.getElementById("answer");
exports.previousButton = document.getElementById("previous");
exports.nextButton = document.getElementById("next");
exports.stopButton = document.getElementById("stop");
exports.promptSpan = document.getElementById("prompt");
exports.excerciseNumberSpan = document.getElementById("excercise-number");
exports.excerciseSection = document.getElementById("excercise");
exports.quizDescSection = document.getElementById("quiz-desc");
exports.quizChoiseSection = document.getElementById("quiz-choise");
exports.penaltyTimeSpan = document.getElementById("penalty-time");
exports.descParagraph = document.getElementById("desc");
exports.resultsDiv = document.getElementById("results");
exports.quizesDiv = document.getElementById("quizes");
exports.correctnessDiv = document.getElementById("correctness");
exports.resultSection = document.getElementById("result");
exports.saveButton = document.getElementById("save");
exports.saveWithStatsButton = document.getElementById("save-with-stats");
exports.answerForm = document.getElementById("answer-form");
exports.initResultSpan = document.getElementById("init-result");
exports.finalResultSpan = document.getElementById("final-result");
exports.quizPrevResultsSection = document.getElementById("quiz-prev-results");
exports.quickAccessDiv = document.getElementById("quick-access");


/***/ }),

/***/ "./src/QuizResults.ts":
/*!****************************!*\
  !*** ./src/QuizResults.ts ***!
  \****************************/
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
exports.QuizResults = void 0;
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
const HTMLElements_1 = __webpack_require__(/*! ./HTMLElements */ "./src/HTMLElements.ts");
const isResult = (obj) => {
    return obj.finalTime && obj.quizId;
};
class QuizResults {
    /**
     * @param answers array of marked answers
     * @param quiz quiz object
     * @param quizId chosen quiz id
     */
    constructor(answers, quiz) {
        this.answers = answers;
        this.quiz = quiz;
        this.penalties = [];
        this.bindEventHandlers();
        this.checkAnswers();
        this.givePenalties();
        this.display();
    }
    /**
     * Checks answers, sets carrect argument in each answer to either true or false.
     */
    checkAnswers() {
        if (this.quiz !== null) {
            for (const i in this.answers) {
                this.answers[i].correct =
                    this.answers[i].answer === this.quiz.questions[i].answer;
            }
        }
    }
    /**
     * Gives penalties for each wrong answer.
     */
    givePenalties() {
        if (this.quiz !== null) {
            for (const i in this.answers) {
                this.penalties.push(this.answers[i].correct ? 0 : this.quiz.questions[i].penalty);
            }
        }
    }
    /**
     * Bind neccessary event handlers.
     */
    bindEventHandlers() {
        HTMLElements_1.saveWithStatsButton.onclick = () => {
            this.saveWithStats();
            this.goToMainScreen();
        };
        HTMLElements_1.saveButton.onclick = () => {
            this.save();
            this.goToMainScreen();
        };
    }
    /**
     * Goes back to main screen.
     */
    goToMainScreen() {
        window.location.reload();
    }
    /**
     * Saves run results with stats.
     */
    saveWithStats() {
        var _a, _b;
        this.saveResult({
            finalTime: this.finalTime,
            answers: this.answers,
            quizId: (_b = (_a = this.quiz) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "",
        });
    }
    /**
     * Saves run results without stats.
     */
    save() {
        var _a, _b;
        this.saveResult({ finalTime: this.finalTime, quizId: (_b = (_a = this.quiz) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "" });
    }
    /**
     * Saves given result.
     * @param result result
     */
    saveResult(result) {
        const prevJSON = localStorage.getItem("results") || "[]";
        const prev = JSON.parse(prevJSON);
        prev.push(result);
        localStorage.setItem("results", JSON.stringify(prev));
    }
    /**
     * Calculates time spent on quiz.
     */
    get initTime() {
        return this.answers.reduce((sum, ans) => sum + ans.time / 1000, 0);
    }
    /**
     * Calculates final time, base + penalties.
     */
    get finalTime() {
        return this.penalties.reduce((sum, penalty) => sum + penalty, this.initTime);
    }
    /**
     * Displays results.
     */
    display() {
        if (this.quiz) {
            HTMLElements_1.resultSection.style.display = "block";
            HTMLElements_1.initResultSpan.textContent = QuizResults.formatTime(this.initTime);
            HTMLElements_1.finalResultSpan.textContent = QuizResults.formatTime(this.finalTime);
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
                HTMLElements_1.correctnessDiv.appendChild(div);
            }
        }
    }
    /**
     * Formats time, round to 3 digits.
     * @param time time
     */
    static formatTime(time) {
        return time.toFixed(3).toString();
    }
    /**
     * Displays previous results.
     */
    static displayPreviousResults() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = JSON.parse(localStorage.getItem("results") || "{}");
            let i = 1;
            console.log(results);
            if (results instanceof Array) {
                for (const res of results) {
                    console.log(res, isResult(res));
                    if (isResult(res)) {
                        const quiz = yield quiz_1.getQuiz(res.quizId);
                        if (quiz) {
                            const row = document.createElement("div");
                            const nameCol = document.createElement("div");
                            const resultCol = document.createElement("div");
                            resultCol.className = "col-4 d-flex justify-content-center";
                            resultCol.textContent = QuizResults.formatTime(res.finalTime) + "s";
                            nameCol.className = "col-8 d-flex justify-content-center";
                            nameCol.textContent = quiz.desc;
                            row.className = `row prev-result ${i % 2 == 0 ? "even" : ""}`;
                            row.appendChild(nameCol);
                            row.appendChild(resultCol);
                            HTMLElements_1.quizPrevResultsSection.appendChild(row);
                            i++;
                        }
                    }
                }
            }
        });
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
exports.QuizRun = void 0;
const QuizResults_1 = __webpack_require__(/*! ./QuizResults */ "./src/QuizResults.ts");
const HTMLElements_1 = __webpack_require__(/*! ./HTMLElements */ "./src/HTMLElements.ts");
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
class QuizRun {
    /**
     * @param quizId chosen quiz id
     */
    constructor(quiz = null) {
        this.quiz = quiz;
        this.questionNumber = 0;
        this.answerStartTime = 0;
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
            const answer = parseInt(HTMLElements_1.answerInput.value);
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
        if (this.quiz == null) {
            main_1.error("Podany quiz nie istnieje");
            return;
        }
        else if (this.quiz.questions.length == 0) {
            main_1.error("Podany quiz ma za mało pytań");
            return;
        }
        HTMLElements_1.quizChoiseSection.style.display = "none";
        HTMLElements_1.quizPrevResultsSection.style.display = "none";
        HTMLElements_1.quizDescSection.style.display = "block";
        HTMLElements_1.descParagraph.textContent = this.quiz.desc;
        this.quiz.questions.forEach((_, i) => {
            this.answers.push({ time: 0, answer: null, correct: false });
            this.penalties.push(0);
            const access = document.createElement("span");
            access.textContent = (i + 1).toString();
            access.className = "quick-access-node";
            access.dataset.question = i.toString();
            access.onclick = () => {
                this.saveAnswerTime();
                this.questionNumber = i;
                this.changeQuestion();
            };
            HTMLElements_1.quickAccessDiv.appendChild(access);
        });
        this.bindEventHandlers();
        HTMLElements_1.excerciseSection.style.display = "block";
        this.answerStartTime = performance.now();
        this.changeQuestion();
    }
    /**
     * Binds neccessary event handlers.
     */
    bindEventHandlers() {
        HTMLElements_1.answerInput.oninput = () => {
            this.saveAnswer();
            HTMLElements_1.stopButton.disabled = this.answers.some((a) => a.answer === null);
            const quickAccessSpan = document.querySelector(`[data-question="${this.questionNumber}"]`);
            if (this.answers[this.questionNumber].answer === null) {
                quickAccessSpan.className = quickAccessSpan.className.replace(/answered/, "");
            }
            else {
                quickAccessSpan.className += " answered";
            }
        };
        HTMLElements_1.nextButton.onclick = () => {
            this.saveAnswerTime();
            this.questionNumber++;
            this.changeQuestion();
        };
        HTMLElements_1.previousButton.onclick = () => {
            this.saveAnswerTime();
            this.questionNumber--;
            this.changeQuestion();
        };
        HTMLElements_1.stopButton.onclick = () => {
            this.endQuiz();
        };
        HTMLElements_1.answerForm.onsubmit = () => {
            if (HTMLElements_1.stopButton.disabled) {
                HTMLElements_1.nextButton.click();
            }
            else {
                HTMLElements_1.stopButton.click();
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
        HTMLElements_1.excerciseNumberSpan.textContent = (this.questionNumber + 1).toString();
        HTMLElements_1.promptSpan.textContent = question.prompt;
        HTMLElements_1.penaltyTimeSpan.textContent = question.penalty.toString();
        const answer = this.answers[this.questionNumber].answer;
        HTMLElements_1.answerInput.value = answer === null ? "" : answer.toString();
        HTMLElements_1.previousButton.disabled = this.questionNumber === 0;
        HTMLElements_1.nextButton.disabled =
            this.questionNumber === this.quiz.questions.length - 1;
        this.answerStartTime = performance.now();
    }
    /**
     * End quiz. Displays results.
     */
    endQuiz() {
        this.saveAnswerTime();
        HTMLElements_1.excerciseSection.style.display = "none";
        this.quizResults = new QuizResults_1.QuizResults(this.answers, this.quiz);
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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
const QuizRun_1 = __webpack_require__(/*! ./QuizRun */ "./src/QuizRun.ts");
const QuizResults_1 = __webpack_require__(/*! ./QuizResults */ "./src/QuizResults.ts");
const HTMLElements_1 = __webpack_require__(/*! ./HTMLElements */ "./src/HTMLElements.ts");
/**
 * Function that logs errors.
 * May in the future be overwriten to function that display error on screen.
 */
exports.error = console.error;
/**
 * Adds quiz to table of available quizes.
 *
 * @param id quiz id
 * @param quiz quiz object
 */
const addQuizToTable = (quiz) => {
    const row = document.createElement("div");
    const nameCol = document.createElement("div");
    const actionCol = document.createElement("div");
    const button = document.createElement("button");
    button.className = "btn btn-primary quiz-start-button";
    button.dataset.quizId = quiz.id;
    button.textContent = "Start";
    actionCol.className =
        "col-4 d-flex justify-content-center align-items-center";
    actionCol.appendChild(button);
    nameCol.className = "col-8 d-flex justify-content-center align-items-center";
    nameCol.textContent = quiz.desc;
    row.className = "row";
    row.appendChild(nameCol);
    row.appendChild(actionCol);
    HTMLElements_1.quizesDiv.appendChild(row);
};
/**
 * Displays available quizes in the table.
 */
const displayQuizes = () => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    try {
        for (var _b = __asyncValues(quiz_1.getQuizes()), _c; _c = yield _b.next(), !_c.done;) {
            const quiz = _c.value;
            console.log(quiz);
            addQuizToTable(quiz);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    const buttons = document.getElementsByClassName("quiz-start-button");
    Array.from(buttons).forEach((button) => {
        button.onclick = () => __awaiter(void 0, void 0, void 0, function* () {
            new QuizRun_1.QuizRun(yield quiz_1.getQuiz(button.dataset.quizId || ""));
        });
    });
});
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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuizes = exports.getQuiz = void 0;
const isQuestion = (question) => {
    return question && question.prompt && question.answer && question.penalty;
};
const isQuiz = (quiz) => {
    return quiz.desc && quiz.questions && quiz.id !== undefined;
};
/**
 * Returns quiz with given id or null on error.
 * @param id quiz id
 */
exports.getQuiz = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const quizRaw = yield fetch("/get_quiz/" + id);
    const quiz = yield quizRaw.json();
    if (isQuiz(quiz)) {
        return quiz;
    }
    return null;
});
/**
 * Generator that returns all quizes.
 */
function getQuizes() {
    return __asyncGenerator(this, arguments, function* getQuizes_1() {
        const quizRaw = yield __await(fetch("/get_quizes"));
        const obj = yield __await(quizRaw.json());
        if (obj instanceof Array) {
            for (const quiz of obj) {
                if (isQuiz(quiz)) {
                    yield yield __await(quiz);
                }
            }
        }
    });
}
exports.getQuizes = getQuizes;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hUTUxFbGVtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpelJlc3VsdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1aXpSdW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGYSxtQkFBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ2hELFFBQVEsQ0FDVyxDQUFDO0FBQ1Qsc0JBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUNuRCxVQUFVLENBQ1UsQ0FBQztBQUNWLGtCQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXNCLENBQUM7QUFDbEUsa0JBQVUsR0FBRyxR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QUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBQztRQUNqQyxJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDeEIsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNoQixvQkFBTSxJQUFJLEVBQUM7aUJBQ1o7YUFDRjtTQUNGO0lBQ0gsQ0FBQztDQUFBO0FBVkQsOEJBVUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJleHBvcnQgY29uc3QgYW5zd2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJhbnN3ZXJcIlxuKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwicHJldmlvdXNcIlxuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuZXhwb3J0IGNvbnN0IHN0b3BCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3BcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcHJvbXB0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvbXB0XCIpIGFzIEhUTUxTcGFuRWxlbWVudDtcbmV4cG9ydCBjb25zdCBleGNlcmNpc2VOdW1iZXJTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiZXhjZXJjaXNlLW51bWJlclwiXG4pIGFzIEhUTUxTcGFuRWxlbWVudDtcbmV4cG9ydCBjb25zdCBleGNlcmNpc2VTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiZXhjZXJjaXNlXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcXVpekRlc2NTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwicXVpei1kZXNjXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcXVpekNob2lzZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJxdWl6LWNob2lzZVwiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHBlbmFsdHlUaW1lU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInBlbmFsdHktdGltZVwiXG4pIGFzIEhUTUxTcGFuRWxlbWVudDtcbmV4cG9ydCBjb25zdCBkZXNjUGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiZGVzY1wiXG4pIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHJlc3VsdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcXVpemVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl6ZXNcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgY29ycmVjdG5lc3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJjb3JyZWN0bmVzc1wiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHJlc3VsdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJyZXN1bHRcIlxuKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuZXhwb3J0IGNvbnN0IHNhdmVXaXRoU3RhdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzYXZlLXdpdGgtc3RhdHNcIlxuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBhbnN3ZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiYW5zd2VyLWZvcm1cIlxuKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBpbml0UmVzdWx0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImluaXQtcmVzdWx0XCJcbikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGZpbmFsUmVzdWx0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImZpbmFsLXJlc3VsdFwiXG4pIGFzIEhUTUxTcGFuRWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJxdWl6LXByZXYtcmVzdWx0c1wiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHF1aWNrQWNjZXNzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwicXVpY2stYWNjZXNzXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG4iLCJpbXBvcnQgeyBBbnN3ZXIsIFF1aXosIGdldFF1aXogfSBmcm9tIFwiLi9xdWl6XCI7XG5pbXBvcnQge1xuICBzYXZlV2l0aFN0YXRzQnV0dG9uLFxuICBzYXZlQnV0dG9uLFxuICByZXN1bHRTZWN0aW9uLFxuICBpbml0UmVzdWx0U3BhbixcbiAgZmluYWxSZXN1bHRTcGFuLFxuICBjb3JyZWN0bmVzc0RpdixcbiAgcXVpelByZXZSZXN1bHRzU2VjdGlvbixcbn0gZnJvbSBcIi4vSFRNTEVsZW1lbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IHtcbiAgZmluYWxUaW1lOiBudW1iZXI7XG4gIGFuc3dlcnM/OiBBbnN3ZXJbXTtcbiAgcXVpeklkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGlzUmVzdWx0ID0gKG9iajogYW55KTogb2JqIGlzIFJlc3VsdCA9PiB7XG4gIHJldHVybiBvYmouZmluYWxUaW1lICYmIG9iai5xdWl6SWQ7XG59O1xuXG5leHBvcnQgY2xhc3MgUXVpelJlc3VsdHMge1xuICBwcml2YXRlIHBlbmFsdGllczogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQHBhcmFtIGFuc3dlcnMgYXJyYXkgb2YgbWFya2VkIGFuc3dlcnNcbiAgICogQHBhcmFtIHF1aXogcXVpeiBvYmplY3RcbiAgICogQHBhcmFtIHF1aXpJZCBjaG9zZW4gcXVpeiBpZFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbnN3ZXJzOiBBbnN3ZXJbXSwgcHJpdmF0ZSBxdWl6OiBRdWl6IHwgbnVsbCkge1xuICAgIHRoaXMuYmluZEV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmNoZWNrQW5zd2VycygpO1xuICAgIHRoaXMuZ2l2ZVBlbmFsdGllcygpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBhbnN3ZXJzLCBzZXRzIGNhcnJlY3QgYXJndW1lbnQgaW4gZWFjaCBhbnN3ZXIgdG8gZWl0aGVyIHRydWUgb3IgZmFsc2UuXG4gICAqL1xuICBwcml2YXRlIGNoZWNrQW5zd2VycygpIHtcbiAgICBpZiAodGhpcy5xdWl6ICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5hbnN3ZXJzKSB7XG4gICAgICAgIHRoaXMuYW5zd2Vyc1tpXS5jb3JyZWN0ID1cbiAgICAgICAgICB0aGlzLmFuc3dlcnNbaV0uYW5zd2VyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zW2ldLmFuc3dlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZXMgcGVuYWx0aWVzIGZvciBlYWNoIHdyb25nIGFuc3dlci5cbiAgICovXG4gIHByaXZhdGUgZ2l2ZVBlbmFsdGllcygpIHtcbiAgICBpZiAodGhpcy5xdWl6ICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5hbnN3ZXJzKSB7XG4gICAgICAgIHRoaXMucGVuYWx0aWVzLnB1c2goXG4gICAgICAgICAgdGhpcy5hbnN3ZXJzW2ldLmNvcnJlY3QgPyAwIDogdGhpcy5xdWl6LnF1ZXN0aW9uc1tpXS5wZW5hbHR5XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgbmVjY2Vzc2FyeSBldmVudCBoYW5kbGVycy5cbiAgICovXG4gIHByaXZhdGUgYmluZEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgc2F2ZVdpdGhTdGF0c0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlV2l0aFN0YXRzKCk7XG4gICAgICB0aGlzLmdvVG9NYWluU2NyZWVuKCk7XG4gICAgfTtcbiAgICBzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIHRoaXMuZ29Ub01haW5TY3JlZW4oKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdvZXMgYmFjayB0byBtYWluIHNjcmVlbi5cbiAgICovXG4gIHByaXZhdGUgZ29Ub01haW5TY3JlZW4oKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHJ1biByZXN1bHRzIHdpdGggc3RhdHMuXG4gICAqL1xuICBwcml2YXRlIHNhdmVXaXRoU3RhdHMoKSB7XG4gICAgdGhpcy5zYXZlUmVzdWx0KHtcbiAgICAgIGZpbmFsVGltZTogdGhpcy5maW5hbFRpbWUsXG4gICAgICBhbnN3ZXJzOiB0aGlzLmFuc3dlcnMsXG4gICAgICBxdWl6SWQ6IHRoaXMucXVpej8uaWQgPz8gXCJcIixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBydW4gcmVzdWx0cyB3aXRob3V0IHN0YXRzLlxuICAgKi9cbiAgcHJpdmF0ZSBzYXZlKCkge1xuICAgIHRoaXMuc2F2ZVJlc3VsdCh7IGZpbmFsVGltZTogdGhpcy5maW5hbFRpbWUsIHF1aXpJZDogdGhpcy5xdWl6Py5pZCA/PyBcIlwiIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGdpdmVuIHJlc3VsdC5cbiAgICogQHBhcmFtIHJlc3VsdCByZXN1bHRcbiAgICovXG4gIHByaXZhdGUgc2F2ZVJlc3VsdChyZXN1bHQ6IFJlc3VsdCkge1xuICAgIGNvbnN0IHByZXZKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZXN1bHRzXCIpIHx8IFwiW11cIjtcbiAgICBjb25zdCBwcmV2ID0gSlNPTi5wYXJzZShwcmV2SlNPTikgYXMgQXJyYXk8UmVzdWx0PjtcbiAgICBwcmV2LnB1c2gocmVzdWx0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlc3VsdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJldikpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGltZSBzcGVudCBvbiBxdWl6LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaW5pdFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJzLnJlZHVjZSgoc3VtLCBhbnMpID0+IHN1bSArIGFucy50aW1lIC8gMTAwMCwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBmaW5hbCB0aW1lLCBiYXNlICsgcGVuYWx0aWVzLlxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVuYWx0aWVzLnJlZHVjZShcbiAgICAgIChzdW0sIHBlbmFsdHkpID0+IHN1bSArIHBlbmFsdHksXG4gICAgICB0aGlzLmluaXRUaW1lXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyByZXN1bHRzLlxuICAgKi9cbiAgcHJpdmF0ZSBkaXNwbGF5KCkge1xuICAgIGlmICh0aGlzLnF1aXopIHtcbiAgICAgIHJlc3VsdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgaW5pdFJlc3VsdFNwYW4udGV4dENvbnRlbnQgPSBRdWl6UmVzdWx0cy5mb3JtYXRUaW1lKHRoaXMuaW5pdFRpbWUpO1xuICAgICAgZmluYWxSZXN1bHRTcGFuLnRleHRDb250ZW50ID0gUXVpelJlc3VsdHMuZm9ybWF0VGltZSh0aGlzLmZpbmFsVGltZSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYW5zd2Vycy5lbnRyaWVzKCkpO1xuICAgICAgZm9yIChjb25zdCBbaSwgYW5zd2VyXSBvZiB0aGlzLmFuc3dlcnMuZW50cmllcygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGksIGFuc3dlcik7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGAke2kgKyAxfS4gYDtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTmFtZSA9IGFuc3dlci5jb3JyZWN0ID8gXCJjb3JyZWN0XCIgOiBcImluY29ycmVjdFwiO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gYW5zd2VyLmNvcnJlY3RcbiAgICAgICAgICA/IFwiQ29ycmVjdCA6KVwiXG4gICAgICAgICAgOiBgSW5jb3JlY3Q6ICske3RoaXMucXVpei5xdWVzdGlvbnNbaV0ucGVuYWx0eX1zYDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBjb3JyZWN0bmVzc0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXRzIHRpbWUsIHJvdW5kIHRvIDMgZGlnaXRzLlxuICAgKiBAcGFyYW0gdGltZSB0aW1lXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZvcm1hdFRpbWUodGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGltZS50b0ZpeGVkKDMpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgcHJldmlvdXMgcmVzdWx0cy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGlzcGxheVByZXZpb3VzUmVzdWx0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXN1bHRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlc3VsdHNcIikgfHwgXCJ7fVwiKTtcbiAgICBsZXQgaSA9IDE7XG4gICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgaWYgKHJlc3VsdHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yIChjb25zdCByZXMgb2YgcmVzdWx0cykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMsIGlzUmVzdWx0KHJlcykpO1xuICAgICAgICBpZiAoaXNSZXN1bHQocmVzKSkge1xuICAgICAgICAgIGNvbnN0IHF1aXogPSBhd2FpdCBnZXRRdWl6KHJlcy5xdWl6SWQpO1xuICAgICAgICAgIGlmIChxdWl6KSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgbmFtZUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgICByZXN1bHRDb2wuY2xhc3NOYW1lID0gXCJjb2wtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiO1xuICAgICAgICAgICAgcmVzdWx0Q29sLnRleHRDb250ZW50ID0gUXVpelJlc3VsdHMuZm9ybWF0VGltZShyZXMuZmluYWxUaW1lKSArIFwic1wiO1xuXG4gICAgICAgICAgICBuYW1lQ29sLmNsYXNzTmFtZSA9IFwiY29sLTggZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIjtcbiAgICAgICAgICAgIG5hbWVDb2wudGV4dENvbnRlbnQgPSBxdWl6LmRlc2M7XG5cbiAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSBgcm93IHByZXYtcmVzdWx0ICR7aSAlIDIgPT0gMCA/IFwiZXZlblwiIDogXCJcIn1gO1xuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQocmVzdWx0Q29sKTtcblxuICAgICAgICAgICAgcXVpelByZXZSZXN1bHRzU2VjdGlvbi5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUXVpeiwgQW5zd2VyLCBnZXRRdWl6IH0gZnJvbSBcIi4vcXVpelwiO1xuaW1wb3J0IHsgUXVpelJlc3VsdHMgfSBmcm9tIFwiLi9RdWl6UmVzdWx0c1wiO1xuaW1wb3J0IHtcbiAgZGVzY1BhcmFncmFwaCxcbiAgYW5zd2VySW5wdXQsXG4gIHN0b3BCdXR0b24sXG4gIGV4Y2VyY2lzZVNlY3Rpb24sXG4gIG5leHRCdXR0b24sXG4gIHByZXZpb3VzQnV0dG9uLFxuICBleGNlcmNpc2VOdW1iZXJTcGFuLFxuICBwcm9tcHRTcGFuLFxuICBwZW5hbHR5VGltZVNwYW4sXG4gIHF1aXpDaG9pc2VTZWN0aW9uLFxuICBxdWl6RGVzY1NlY3Rpb24sXG4gIGFuc3dlckZvcm0sXG4gIHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24sXG4gIHF1aWNrQWNjZXNzRGl2LFxufSBmcm9tIFwiLi9IVE1MRWxlbWVudHNcIjtcbmltcG9ydCB7IGVycm9yIH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgY2xhc3MgUXVpelJ1biB7XG4gIHByaXZhdGUgcXVlc3Rpb25OdW1iZXI6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgYW5zd2VyU3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgYW5zd2VyczogQW5zd2VyW10gPSBbXTtcbiAgcHJpdmF0ZSBwZW5hbHRpZXM6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgcXVpelJlc3VsdHM6IFF1aXpSZXN1bHRzIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBxdWl6SWQgY2hvc2VuIHF1aXogaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVpejogUXVpeiB8IG51bGwgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMucXVpeiA9PSBudWxsKSB7XG4gICAgICBlcnJvcihcIlBvZGFueSBxdWl6IG5pZSBpc3RuaWVqZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucXVpei5xdWVzdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgIGVycm9yKFwiUG9kYW55IHF1aXogbWEgemEgbWHFgm8gcHl0YcWEXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBxdWl6Q2hvaXNlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcXVpelByZXZSZXN1bHRzU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcXVpekRlc2NTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZGVzY1BhcmFncmFwaC50ZXh0Q29udGVudCA9IHRoaXMucXVpei5kZXNjO1xuXG4gICAgdGhpcy5xdWl6LnF1ZXN0aW9ucy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlcnMucHVzaCh7IHRpbWU6IDAsIGFuc3dlcjogbnVsbCwgY29ycmVjdDogZmFsc2UgfSk7XG4gICAgICB0aGlzLnBlbmFsdGllcy5wdXNoKDApO1xuXG4gICAgICBjb25zdCBhY2Nlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGFjY2Vzcy50ZXh0Q29udGVudCA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIGFjY2Vzcy5jbGFzc05hbWUgPSBcInF1aWNrLWFjY2Vzcy1ub2RlXCI7XG4gICAgICBhY2Nlc3MuZGF0YXNldC5xdWVzdGlvbiA9IGkudG9TdHJpbmcoKTtcblxuICAgICAgYWNjZXNzLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbk51bWJlciA9IGk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuICAgICAgfTtcblxuICAgICAgcXVpY2tBY2Nlc3NEaXYuYXBwZW5kQ2hpbGQoYWNjZXNzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmluZEV2ZW50SGFuZGxlcnMoKTtcblxuICAgIGV4Y2VyY2lzZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0aGlzLmFuc3dlclN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgdGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5lY2Nlc3NhcnkgZXZlbnQgaGFuZGxlcnMuXG4gICAqL1xuICBwcml2YXRlIGJpbmRFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xuICAgIGFuc3dlcklucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNhdmVBbnN3ZXIoKTtcblxuICAgICAgc3RvcEJ1dHRvbi5kaXNhYmxlZCA9IHRoaXMuYW5zd2Vycy5zb21lKChhKSA9PiBhLmFuc3dlciA9PT0gbnVsbCk7XG4gICAgICBjb25zdCBxdWlja0FjY2Vzc1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtcXVlc3Rpb249XCIke3RoaXMucXVlc3Rpb25OdW1iZXJ9XCJdYFxuICAgICAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5hbnN3ZXJzW3RoaXMucXVlc3Rpb25OdW1iZXJdLmFuc3dlciA9PT0gbnVsbCkge1xuICAgICAgICBxdWlja0FjY2Vzc1NwYW4uY2xhc3NOYW1lID0gcXVpY2tBY2Nlc3NTcGFuLmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgICAgIC9hbnN3ZXJlZC8sXG4gICAgICAgICAgXCJcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVpY2tBY2Nlc3NTcGFuLmNsYXNzTmFtZSArPSBcIiBhbnN3ZXJlZFwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBuZXh0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG4gICAgICB0aGlzLnF1ZXN0aW9uTnVtYmVyKys7XG5cbiAgICAgIHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcbiAgICB9O1xuXG4gICAgcHJldmlvdXNCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcbiAgICAgIHRoaXMucXVlc3Rpb25OdW1iZXItLTtcblxuICAgICAgdGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuICAgIH07XG5cbiAgICBzdG9wQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVuZFF1aXooKTtcbiAgICB9O1xuXG4gICAgYW5zd2VyRm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGlmIChzdG9wQnV0dG9uLmRpc2FibGVkKSB7XG4gICAgICAgIG5leHRCdXR0b24uY2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3BCdXR0b24uY2xpY2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY3VycmVudCBxdWVzdGlvbiB0byBnaXZlbi5cbiAgICogU2V0cyBwcmV2QW5zd2VyU3RhcnRUaW1lIHRvICBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICovXG4gIHByaXZhdGUgY2hhbmdlUXVlc3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucXVpeiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVpei5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG4gICAgZXhjZXJjaXNlTnVtYmVyU3Bhbi50ZXh0Q29udGVudCA9ICh0aGlzLnF1ZXN0aW9uTnVtYmVyICsgMSkudG9TdHJpbmcoKTtcbiAgICBwcm9tcHRTcGFuLnRleHRDb250ZW50ID0gcXVlc3Rpb24ucHJvbXB0O1xuICAgIHBlbmFsdHlUaW1lU3Bhbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uLnBlbmFsdHkudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IGFuc3dlciA9IHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXS5hbnN3ZXI7XG4gICAgYW5zd2VySW5wdXQudmFsdWUgPSBhbnN3ZXIgPT09IG51bGwgPyBcIlwiIDogYW5zd2VyLnRvU3RyaW5nKCk7XG5cbiAgICBwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IHRoaXMucXVlc3Rpb25OdW1iZXIgPT09IDA7XG4gICAgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9XG4gICAgICB0aGlzLnF1ZXN0aW9uTnVtYmVyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCAtIDE7XG5cbiAgICB0aGlzLmFuc3dlclN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGNvbnRlc3RhbnRzIGFuc3dlciB0byBjdXJyZW50IHF1ZXN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBzYXZlQW5zd2VyID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHByZXZBbnN3ZXIgPSB0aGlzLmFuc3dlcnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG5cbiAgICBpZiAocHJldkFuc3dlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5zd2VyID0gcGFyc2VJbnQoYW5zd2VySW5wdXQudmFsdWUpO1xuICAgIGlmIChpc05hTihhbnN3ZXIpKSB7XG4gICAgICBwcmV2QW5zd2VyLmFuc3dlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZBbnN3ZXIuYW5zd2VyID0gYW5zd2VyO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2F2ZXMgY29udGVzdGFudHMgYW5zd2VyIHRpbWUgdG8gY3VycmVudCBxdWVzdGlvbi5cbiAgICovXG4gIHByaXZhdGUgc2F2ZUFuc3dlclRpbWUgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZW5kVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgY29uc3QgcHJldkFuc3dlciA9IHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXTtcblxuICAgIGlmIChwcmV2QW5zd2VyID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2QW5zd2VyLnRpbWUgKz0gZW5kVGltZSAtIHRoaXMuYW5zd2VyU3RhcnRUaW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgcXVpei4gRGlzcGxheXMgcmVzdWx0cy5cbiAgICovXG4gIHByaXZhdGUgZW5kUXVpeigpOiB2b2lkIHtcbiAgICB0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG4gICAgZXhjZXJjaXNlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICB0aGlzLnF1aXpSZXN1bHRzID0gbmV3IFF1aXpSZXN1bHRzKHRoaXMuYW5zd2VycywgdGhpcy5xdWl6KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUXVpeiwgZ2V0UXVpemVzLCBnZXRRdWl6IH0gZnJvbSBcIi4vcXVpelwiO1xuaW1wb3J0IHsgUXVpelJ1biB9IGZyb20gXCIuL1F1aXpSdW5cIjtcbmltcG9ydCB7IFF1aXpSZXN1bHRzIH0gZnJvbSBcIi4vUXVpelJlc3VsdHNcIjtcbmltcG9ydCB7IHF1aXplc0RpdiwgcXVpekNob2lzZVNlY3Rpb24gfSBmcm9tIFwiLi9IVE1MRWxlbWVudHNcIjtcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGxvZ3MgZXJyb3JzLlxuICogTWF5IGluIHRoZSBmdXR1cmUgYmUgb3ZlcndyaXRlbiB0byBmdW5jdGlvbiB0aGF0IGRpc3BsYXkgZXJyb3Igb24gc2NyZWVuLlxuICovXG5leHBvcnQgY29uc3QgZXJyb3IgPSBjb25zb2xlLmVycm9yO1xuXG4vKipcbiAqIEFkZHMgcXVpeiB0byB0YWJsZSBvZiBhdmFpbGFibGUgcXVpemVzLlxuICpcbiAqIEBwYXJhbSBpZCBxdWl6IGlkXG4gKiBAcGFyYW0gcXVpeiBxdWl6IG9iamVjdFxuICovXG5jb25zdCBhZGRRdWl6VG9UYWJsZSA9IChxdWl6OiBRdWl6KSA9PiB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG5hbWVDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhY3Rpb25Db2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBcImJ0biBidG4tcHJpbWFyeSBxdWl6LXN0YXJ0LWJ1dHRvblwiO1xuICBidXR0b24uZGF0YXNldC5xdWl6SWQgPSBxdWl6LmlkO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0XCI7XG5cbiAgYWN0aW9uQ29sLmNsYXNzTmFtZSA9XG4gICAgXCJjb2wtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIjtcbiAgYWN0aW9uQ29sLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgbmFtZUNvbC5jbGFzc05hbWUgPSBcImNvbC04IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiO1xuICBuYW1lQ29sLnRleHRDb250ZW50ID0gcXVpei5kZXNjO1xuXG4gIHJvdy5jbGFzc05hbWUgPSBcInJvd1wiO1xuXG4gIHJvdy5hcHBlbmRDaGlsZChuYW1lQ29sKTtcbiAgcm93LmFwcGVuZENoaWxkKGFjdGlvbkNvbCk7XG5cbiAgcXVpemVzRGl2LmFwcGVuZENoaWxkKHJvdyk7XG59O1xuXG4vKipcbiAqIERpc3BsYXlzIGF2YWlsYWJsZSBxdWl6ZXMgaW4gdGhlIHRhYmxlLlxuICovXG5jb25zdCBkaXNwbGF5UXVpemVzID0gYXN5bmMgKCkgPT4ge1xuICBmb3IgYXdhaXQgKGNvbnN0IHF1aXogb2YgZ2V0UXVpemVzKCkpIHtcbiAgICBjb25zb2xlLmxvZyhxdWl6KTtcbiAgICBhZGRRdWl6VG9UYWJsZShxdWl6KTtcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgIFwicXVpei1zdGFydC1idXR0b25cIlxuICApIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuICBBcnJheS5mcm9tKGJ1dHRvbnMpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgbmV3IFF1aXpSdW4oYXdhaXQgZ2V0UXVpeihidXR0b24uZGF0YXNldC5xdWl6SWQgfHwgXCJcIikpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZGlzcGxheVF1aXplcygpO1xuXG5RdWl6UmVzdWx0cy5kaXNwbGF5UHJldmlvdXNSZXN1bHRzKCk7XG4iLCJleHBvcnQgaW50ZXJmYWNlIFF1ZXN0aW9uIHtcbiAgcHJvbXB0OiBzdHJpbmc7XG4gIGFuc3dlcjogbnVtYmVyO1xuICBwZW5hbHR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpeiB7XG4gIGRlc2M6IHN0cmluZztcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbltdO1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuc3dlciB7XG4gIGFuc3dlcjogbnVtYmVyIHwgbnVsbDtcbiAgdGltZTogbnVtYmVyO1xuICBjb3JyZWN0OiBib29sZWFuO1xufVxuXG5jb25zdCBpc1F1ZXN0aW9uID0gKHF1ZXN0aW9uOiBhbnkpOiBxdWVzdGlvbiBpcyBRdWVzdGlvbiA9PiB7XG4gIHJldHVybiBxdWVzdGlvbiAmJiBxdWVzdGlvbi5wcm9tcHQgJiYgcXVlc3Rpb24uYW5zd2VyICYmIHF1ZXN0aW9uLnBlbmFsdHk7XG59O1xuXG5jb25zdCBpc1F1aXogPSAocXVpejogYW55KTogcXVpeiBpcyBRdWl6ID0+IHtcbiAgcmV0dXJuIHF1aXouZGVzYyAmJiBxdWl6LnF1ZXN0aW9ucyAmJiBxdWl6LmlkICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgcXVpeiB3aXRoIGdpdmVuIGlkIG9yIG51bGwgb24gZXJyb3IuXG4gKiBAcGFyYW0gaWQgcXVpeiBpZFxuICovXG5leHBvcnQgY29uc3QgZ2V0UXVpeiA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxRdWl6IHwgbnVsbD4gPT4ge1xuICBjb25zdCBxdWl6UmF3ID0gYXdhaXQgZmV0Y2goXCIvZ2V0X3F1aXovXCIgKyBpZCk7XG4gIGNvbnN0IHF1aXogPSBhd2FpdCBxdWl6UmF3Lmpzb24oKTtcblxuICBpZiAoaXNRdWl6KHF1aXopKSB7XG4gICAgcmV0dXJuIHF1aXo7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2VuZXJhdG9yIHRoYXQgcmV0dXJucyBhbGwgcXVpemVzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIGdldFF1aXplcygpOiBBc3luY0dlbmVyYXRvcjxRdWl6PiB7XG4gIGNvbnN0IHF1aXpSYXcgPSBhd2FpdCBmZXRjaChcIi9nZXRfcXVpemVzXCIpO1xuICBjb25zdCBvYmogPSBhd2FpdCBxdWl6UmF3Lmpzb24oKTtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgZm9yIChjb25zdCBxdWl6IG9mIG9iaikge1xuICAgICAgaWYgKGlzUXVpeihxdWl6KSkge1xuICAgICAgICB5aWVsZCBxdWl6O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==