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
exports.quickAccessDiv = exports.quizPrevResultsSection = exports.finalResultSpan = exports.initResultSpan = exports.answerForm = exports.saveWithStatsButton = exports.resultSection = exports.correctnessDiv = exports.quizesDiv = exports.resultsDiv = exports.descParagraph = exports.penaltyTimeSpan = exports.quizChoiseSection = exports.quizDescSection = exports.excerciseSection = exports.excerciseNumberSpan = exports.promptSpan = exports.stopButton = exports.nextButton = exports.previousButton = exports.answerInput = void 0;
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
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
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
        this.quizAnswers = null;
        this.bindEventHandlers();
    }
    mark() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const quiz = yield quiz_1.getQuizWithAnswers(((_a = this.quiz) === null || _a === void 0 ? void 0 : _a.id.toString()) || "");
            if (quiz === null) {
                main_1.error("Błąd podczas pobierania quizu");
                window.location.reload();
                return;
            }
            this.quizAnswers = quiz;
            this.checkAnswers();
            this.givePenalties();
            this.display();
        });
    }
    /**
     * Checks answers, sets carrect argument in each answer to either true or false.
     */
    checkAnswers() {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        });
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
            let results;
            try {
                results = yield quiz_1.getPrevResults();
            }
            catch (_) { }
            let i = 1;
            let any = false;
            if (results instanceof Array) {
                for (const res of results) {
                    any = true;
                    if (isResult(res)) {
                        const quiz = yield quiz_1.getQuizWithAnswers(res.quizId);
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
                            HTMLElements_1.quizPrevResultsSection.appendChild(row);
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
                HTMLElements_1.quizPrevResultsSection.appendChild(row);
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
exports.QuizRun = void 0;
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
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
            console.log(main_1.error);
            main_1.error("Ten quiz już jest rozwiązany przez Ciebie");
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
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.saveAnswerTime();
            HTMLElements_1.excerciseSection.style.display = "none";
            yield quiz_1.saveResults(this.answers, ((_a = this.quiz) === null || _a === void 0 ? void 0 : _a.id) || "-1");
            this.quizResults = new QuizResults_1.QuizResults(this.answers, this.quiz);
            this.quizResults.mark();
        });
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.csrfToken = exports.error = void 0;
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
const QuizRun_1 = __webpack_require__(/*! ./QuizRun */ "./src/QuizRun.ts");
const QuizResults_1 = __webpack_require__(/*! ./QuizResults */ "./src/QuizResults.ts");
const HTMLElements_1 = __webpack_require__(/*! ./HTMLElements */ "./src/HTMLElements.ts");
/**
 * Function that logs errors.
 * May in the future be overwriten to function that display error on screen.
 */
exports.error = (s) => alert(s);
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
    var e_1, _b;
    try {
        for (var _c = __asyncValues(quiz_1.getQuizes()), _d; _d = yield _c.next(), !_d.done;) {
            const quiz = _d.value;
            addQuizToTable(quiz);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) yield _b.call(_c);
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
exports.csrfToken = ((_a = document === null || document === void 0 ? void 0 : document.querySelector('meta[name="csrf-token"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content")) ||
    "";


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
exports.saveResults = exports.getPrevResults = exports.getQuizes = exports.getQuizWithAnswers = exports.getQuiz = void 0;
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
const isQuestion = (question) => {
    return question && question.prompt && question.answer && question.penalty;
};
const isQuiz = (quiz) => {
    return quiz.desc && quiz.questions && quiz.id !== undefined;
};
const isQuizWithAnswers = (quiz) => {
    return quiz.desc && quiz.questions && quiz.id !== undefined;
};
/**
 * Returns quiz with given id or null on error.
 * @param id quiz id
 */
exports.getQuiz = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    try {
        const quizRaw = yield fetch("/get_quiz/" + id);
        const quiz = yield quizRaw.json();
        if (isQuiz(quiz)) {
            return quiz;
        }
    }
    catch (_) { }
    return null;
});
/**
 * Returns quiz with given id or null on error.
 * @param id quiz id
 */
exports.getQuizWithAnswers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizRaw = yield fetch("/get_quiz_with_answers/" + id);
        const quiz = yield quizRaw.json();
        if (isQuizWithAnswers(quiz)) {
            return quiz;
        }
    }
    catch (_) { }
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
exports.getPrevResults = () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield fetch("/prev_results");
    const obj = yield results.json();
    if (obj instanceof Array) {
        return obj;
    }
    return [];
});
const getRawQuizResults = (answers) => {
    const totalTime = answers.reduce((sum, ans) => sum + ans.time, 0);
    const qr = { answers: [], times: [] };
    answers.forEach((ans) => {
        qr.answers.push(ans.answer);
        qr.times.push(ans.time / totalTime);
    });
    return qr;
};
exports.saveResults = (answers, quizId) => __awaiter(void 0, void 0, void 0, function* () {
    const qr = getRawQuizResults(answers);
    console.log(qr, answers, JSON.stringify(qr));
    yield fetch("/post_results/" + quizId, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "CSRF-Token": main_1.csrfToken,
        },
        body: JSON.stringify(qr),
    });
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hUTUxFbGVtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpelJlc3VsdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1aXpSdW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGYSxtQkFBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ2hELFFBQVEsQ0FDVyxDQUFDO0FBQ1Qsc0JBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUNuRCxVQUFVLENBQ1UsQ0FBQztBQUNWLGtCQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXNCLENBQUM7QUFDbEUsa0JBQVUsR0FBRyxR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T0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFDVyxtQkFBVyxHQUFHLENBQU8sT0FBaUIsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUNyRSxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sRUFBRTtRQUNyQyxNQUFNLEVBQUUsTUFBTTtRQUNkLFdBQVcsRUFBRSxhQUFhO1FBQzFCLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsWUFBWSxFQUFFLGdCQUFTO1NBQ3hCO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0tBQ3pCLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBjb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImFuc3dlclwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJwcmV2aW91c1wiXG4pIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuZXhwb3J0IGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5leHBvcnQgY29uc3Qgc3RvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcFwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBwcm9tcHRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9tcHRcIikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGV4Y2VyY2lzZU51bWJlclNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJleGNlcmNpc2UtbnVtYmVyXCJcbikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGV4Y2VyY2lzZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJleGNlcmNpc2VcIlxuKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBxdWl6RGVzY1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJxdWl6LWRlc2NcIlxuKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBxdWl6Q2hvaXNlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInF1aXotY2hvaXNlXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcGVuYWx0eVRpbWVTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwicGVuYWx0eS10aW1lXCJcbikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGRlc2NQYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJkZXNjXCJcbikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBxdWl6ZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXplc1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBjb3JyZWN0bmVzc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImNvcnJlY3RuZXNzXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInJlc3VsdFwiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHNhdmVXaXRoU3RhdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzYXZlLXdpdGgtc3RhdHNcIlxuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBhbnN3ZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiYW5zd2VyLWZvcm1cIlxuKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBpbml0UmVzdWx0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImluaXQtcmVzdWx0XCJcbikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGZpbmFsUmVzdWx0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImZpbmFsLXJlc3VsdFwiXG4pIGFzIEhUTUxTcGFuRWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJxdWl6LXByZXYtcmVzdWx0c1wiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHF1aWNrQWNjZXNzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwicXVpY2stYWNjZXNzXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG4iLCJpbXBvcnQge1xuICBBbnN3ZXIsXG4gIFF1aXpOb0Fuc3dlcnMsXG4gIGdldFF1aXosXG4gIFF1aXpXaXRoQW5zd2VycyxcbiAgZ2V0UXVpeldpdGhBbnN3ZXJzLFxuICBnZXRQcmV2UmVzdWx0cyxcbn0gZnJvbSBcIi4vcXVpelwiO1xuaW1wb3J0IHtcbiAgc2F2ZVdpdGhTdGF0c0J1dHRvbixcbiAgcmVzdWx0U2VjdGlvbixcbiAgaW5pdFJlc3VsdFNwYW4sXG4gIGZpbmFsUmVzdWx0U3BhbixcbiAgY29ycmVjdG5lc3NEaXYsXG4gIHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24sXG59IGZyb20gXCIuL0hUTUxFbGVtZW50c1wiO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IHtcbiAgZmluYWxUaW1lOiBudW1iZXI7XG4gIGFuc3dlcnM/OiBBbnN3ZXJbXTtcbiAgcXVpeklkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGlzUmVzdWx0ID0gKG9iajogYW55KTogb2JqIGlzIFJlc3VsdCA9PiB7XG4gIHJldHVybiBvYmouZmluYWxUaW1lICYmIG9iai5xdWl6SWQ7XG59O1xuXG5leHBvcnQgY2xhc3MgUXVpelJlc3VsdHMge1xuICBwcml2YXRlIHBlbmFsdGllczogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSBxdWl6QW5zd2VyczogUXVpeldpdGhBbnN3ZXJzIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBhbnN3ZXJzIGFycmF5IG9mIG1hcmtlZCBhbnN3ZXJzXG4gICAqIEBwYXJhbSBxdWl6IHF1aXogb2JqZWN0XG4gICAqIEBwYXJhbSBxdWl6SWQgY2hvc2VuIHF1aXogaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5zd2VyczogQW5zd2VyW10sIHByaXZhdGUgcXVpejogUXVpek5vQW5zd2VycyB8IG51bGwpIHtcbiAgICB0aGlzLmJpbmRFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgbWFyaygpIHtcbiAgICBjb25zdCBxdWl6ID0gYXdhaXQgZ2V0UXVpeldpdGhBbnN3ZXJzKHRoaXMucXVpej8uaWQudG9TdHJpbmcoKSB8fCBcIlwiKTtcbiAgICBpZiAocXVpeiA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoXCJCxYLEhWQgcG9kY3phcyBwb2JpZXJhbmlhIHF1aXp1XCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnF1aXpBbnN3ZXJzID0gcXVpejtcbiAgICB0aGlzLmNoZWNrQW5zd2VycygpO1xuICAgIHRoaXMuZ2l2ZVBlbmFsdGllcygpO1xuICAgIHRoaXMuZGlzcGxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBhbnN3ZXJzLCBzZXRzIGNhcnJlY3QgYXJndW1lbnQgaW4gZWFjaCBhbnN3ZXIgdG8gZWl0aGVyIHRydWUgb3IgZmFsc2UuXG4gICAqL1xuICBwcml2YXRlIGNoZWNrQW5zd2VycygpIHtcbiAgICBpZiAodGhpcy5xdWl6QW5zd2VycyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuYW5zd2Vycykge1xuICAgICAgICB0aGlzLmFuc3dlcnNbaV0uY29ycmVjdCA9XG4gICAgICAgICAgdGhpcy5hbnN3ZXJzW2ldLmFuc3dlciA9PT0gdGhpcy5xdWl6QW5zd2Vycy5xdWVzdGlvbnNbaV0uYW5zd2VyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlcyBwZW5hbHRpZXMgZm9yIGVhY2ggd3JvbmcgYW5zd2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBnaXZlUGVuYWx0aWVzKCkge1xuICAgIGlmICh0aGlzLnF1aXogIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLmFuc3dlcnMpIHtcbiAgICAgICAgdGhpcy5wZW5hbHRpZXMucHVzaChcbiAgICAgICAgICB0aGlzLmFuc3dlcnNbaV0uY29ycmVjdCA/IDAgOiB0aGlzLnF1aXoucXVlc3Rpb25zW2ldLnBlbmFsdHlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQmluZCBuZWNjZXNzYXJ5IGV2ZW50IGhhbmRsZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBiaW5kRXZlbnRIYW5kbGVycygpIHtcbiAgICBzYXZlV2l0aFN0YXRzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmdvVG9NYWluU2NyZWVuKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHb2VzIGJhY2sgdG8gbWFpbiBzY3JlZW4uXG4gICAqL1xuICBwcml2YXRlIGdvVG9NYWluU2NyZWVuKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRpbWUgc3BlbnQgb24gcXVpei5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGluaXRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYW5zd2Vycy5yZWR1Y2UoKHN1bSwgYW5zKSA9PiBzdW0gKyBhbnMudGltZSAvIDEwMDAsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgZmluYWwgdGltZSwgYmFzZSArIHBlbmFsdGllcy5cbiAgICovXG4gIHB1YmxpYyBnZXQgZmluYWxUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBlbmFsdGllcy5yZWR1Y2UoXG4gICAgICAoc3VtLCBwZW5hbHR5KSA9PiBzdW0gKyBwZW5hbHR5LFxuICAgICAgdGhpcy5pbml0VGltZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgcmVzdWx0cy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZGlzcGxheSgpIHtcbiAgICBpZiAodGhpcy5xdWl6KSB7XG4gICAgICByZXN1bHRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgIGluaXRSZXN1bHRTcGFuLnRleHRDb250ZW50ID0gUXVpelJlc3VsdHMuZm9ybWF0VGltZSh0aGlzLmluaXRUaW1lKTtcbiAgICAgIGZpbmFsUmVzdWx0U3Bhbi50ZXh0Q29udGVudCA9IFF1aXpSZXN1bHRzLmZvcm1hdFRpbWUodGhpcy5maW5hbFRpbWUpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFuc3dlcnMuZW50cmllcygpKTtcbiAgICAgIGZvciAoY29uc3QgW2ksIGFuc3dlcl0gb2YgdGhpcy5hbnN3ZXJzLmVudHJpZXMoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpLCBhbnN3ZXIpO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX0uIGA7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBhbnN3ZXIuY29ycmVjdCA/IFwiY29ycmVjdFwiIDogXCJpbmNvcnJlY3RcIjtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGFuc3dlci5jb3JyZWN0XG4gICAgICAgICAgPyBcIkNvcnJlY3QgOilcIlxuICAgICAgICAgIDogYEluY29yZWN0OiArJHt0aGlzLnF1aXoucXVlc3Rpb25zW2ldLnBlbmFsdHl9c2A7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgY29ycmVjdG5lc3NEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0cyB0aW1lLCByb3VuZCB0byAzIGRpZ2l0cy5cbiAgICogQHBhcmFtIHRpbWUgdGltZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpbWUudG9GaXhlZCgzKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHByZXZpb3VzIHJlc3VsdHMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGRpc3BsYXlQcmV2aW91c1Jlc3VsdHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHJlc3VsdHM7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdHMgPSBhd2FpdCBnZXRQcmV2UmVzdWx0cygpO1xuICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgbGV0IGkgPSAxO1xuICAgIGxldCBhbnkgPSBmYWxzZTtcbiAgICBpZiAocmVzdWx0cyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKGNvbnN0IHJlcyBvZiByZXN1bHRzKSB7XG4gICAgICAgIGFueSA9IHRydWU7XG4gICAgICAgIGlmIChpc1Jlc3VsdChyZXMpKSB7XG4gICAgICAgICAgY29uc3QgcXVpeiA9IGF3YWl0IGdldFF1aXpXaXRoQW5zd2VycyhyZXMucXVpeklkKTtcbiAgICAgICAgICBpZiAocXVpeikge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICAgICAgICAgIGxpbmsuY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgcXVpei1pbmZvLWJ1dHRvblwiO1xuICAgICAgICAgICAgbGluay5kYXRhc2V0LnF1aXpJZCA9IHF1aXouaWQ7XG4gICAgICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gXCJJbmZvXCI7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBcIi9yZXN1bHRzL1wiICsgcXVpei5pZDtcblxuICAgICAgICAgICAgcmVzdWx0Q29sLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICAgIFwiY29sLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI7XG4gICAgICAgICAgICByZXN1bHRDb2wudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICBRdWl6UmVzdWx0cy5mb3JtYXRUaW1lKHJlcy5maW5hbFRpbWUgLyAxMDAwKSArIFwic1wiO1xuXG4gICAgICAgICAgICBuYW1lQ29sLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICAgIFwiY29sLTYgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI7XG4gICAgICAgICAgICBuYW1lQ29sLnRleHRDb250ZW50ID0gcXVpei5kZXNjO1xuXG4gICAgICAgICAgICBkZXRhaWxDb2wuY2xhc3NOYW1lID1cbiAgICAgICAgICAgICAgXCJjb2wtMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIjtcbiAgICAgICAgICAgIGRldGFpbENvbC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc05hbWUgPSBgcm93IHByZXYtcmVzdWx0ICR7aSAlIDIgPT0gMCA/IFwiZXZlblwiIDogXCJcIn1gO1xuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQocmVzdWx0Q29sKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChkZXRhaWxDb2wpO1xuXG4gICAgICAgICAgICBxdWl6UHJldlJlc3VsdHNTZWN0aW9uLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghYW55KSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93LmNsYXNzTmFtZSA9IGByb3cgcHJldi1yZXN1bHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJgO1xuICAgICAgcm93LnRleHRDb250ZW50ID1cbiAgICAgICAgXCJKZXN6Y3plIG5pZSByb3p3acSFemHFgmXFvCDFvGFkbmVnbyBxdWl6dSwgbmEgY28gY3pla2Fzej8gOilcIjtcbiAgICAgIHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24uYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFF1aXpOb0Fuc3dlcnMsIEFuc3dlciwgZ2V0UXVpeiwgc2F2ZVJlc3VsdHMgfSBmcm9tIFwiLi9xdWl6XCI7XG5pbXBvcnQgeyBRdWl6UmVzdWx0cyB9IGZyb20gXCIuL1F1aXpSZXN1bHRzXCI7XG5pbXBvcnQge1xuICBkZXNjUGFyYWdyYXBoLFxuICBhbnN3ZXJJbnB1dCxcbiAgc3RvcEJ1dHRvbixcbiAgZXhjZXJjaXNlU2VjdGlvbixcbiAgbmV4dEJ1dHRvbixcbiAgcHJldmlvdXNCdXR0b24sXG4gIGV4Y2VyY2lzZU51bWJlclNwYW4sXG4gIHByb21wdFNwYW4sXG4gIHBlbmFsdHlUaW1lU3BhbixcbiAgcXVpekNob2lzZVNlY3Rpb24sXG4gIHF1aXpEZXNjU2VjdGlvbixcbiAgYW5zd2VyRm9ybSxcbiAgcXVpelByZXZSZXN1bHRzU2VjdGlvbixcbiAgcXVpY2tBY2Nlc3NEaXYsXG59IGZyb20gXCIuL0hUTUxFbGVtZW50c1wiO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBjbGFzcyBRdWl6UnVuIHtcbiAgcHJpdmF0ZSBxdWVzdGlvbk51bWJlcjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBhbnN3ZXJTdGFydFRpbWU6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBhbnN3ZXJzOiBBbnN3ZXJbXSA9IFtdO1xuICBwcml2YXRlIHBlbmFsdGllczogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSBxdWl6UmVzdWx0czogUXVpelJlc3VsdHMgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQHBhcmFtIHF1aXpJZCBjaG9zZW4gcXVpeiBpZFxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWl6OiBRdWl6Tm9BbnN3ZXJzIHwgbnVsbCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5xdWl6ID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIGVycm9yKFwiVGVuIHF1aXoganXFvCBqZXN0IHJvendpxIV6YW55IHByemV6IENpZWJpZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucXVpei5xdWVzdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgIGVycm9yKFwiUG9kYW55IHF1aXogbWEgemEgbWHFgm8gcHl0YcWEXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBxdWl6Q2hvaXNlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcXVpelByZXZSZXN1bHRzU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcXVpekRlc2NTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZGVzY1BhcmFncmFwaC50ZXh0Q29udGVudCA9IHRoaXMucXVpei5kZXNjO1xuXG4gICAgdGhpcy5xdWl6LnF1ZXN0aW9ucy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLmFuc3dlcnMucHVzaCh7IHRpbWU6IDAsIGFuc3dlcjogbnVsbCwgY29ycmVjdDogZmFsc2UgfSk7XG4gICAgICB0aGlzLnBlbmFsdGllcy5wdXNoKDApO1xuXG4gICAgICBjb25zdCBhY2Nlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGFjY2Vzcy50ZXh0Q29udGVudCA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIGFjY2Vzcy5jbGFzc05hbWUgPSBcInF1aWNrLWFjY2Vzcy1ub2RlXCI7XG4gICAgICBhY2Nlc3MuZGF0YXNldC5xdWVzdGlvbiA9IGkudG9TdHJpbmcoKTtcblxuICAgICAgYWNjZXNzLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbk51bWJlciA9IGk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuICAgICAgfTtcblxuICAgICAgcXVpY2tBY2Nlc3NEaXYuYXBwZW5kQ2hpbGQoYWNjZXNzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmluZEV2ZW50SGFuZGxlcnMoKTtcblxuICAgIGV4Y2VyY2lzZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0aGlzLmFuc3dlclN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgdGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5lY2Nlc3NhcnkgZXZlbnQgaGFuZGxlcnMuXG4gICAqL1xuICBwcml2YXRlIGJpbmRFdmVudEhhbmRsZXJzKCk6IHZvaWQge1xuICAgIGFuc3dlcklucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNhdmVBbnN3ZXIoKTtcblxuICAgICAgc3RvcEJ1dHRvbi5kaXNhYmxlZCA9IHRoaXMuYW5zd2Vycy5zb21lKChhKSA9PiBhLmFuc3dlciA9PT0gbnVsbCk7XG4gICAgICBjb25zdCBxdWlja0FjY2Vzc1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtcXVlc3Rpb249XCIke3RoaXMucXVlc3Rpb25OdW1iZXJ9XCJdYFxuICAgICAgKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5hbnN3ZXJzW3RoaXMucXVlc3Rpb25OdW1iZXJdLmFuc3dlciA9PT0gbnVsbCkge1xuICAgICAgICBxdWlja0FjY2Vzc1NwYW4uY2xhc3NOYW1lID0gcXVpY2tBY2Nlc3NTcGFuLmNsYXNzTmFtZS5yZXBsYWNlKFxuICAgICAgICAgIC9hbnN3ZXJlZC8sXG4gICAgICAgICAgXCJcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVpY2tBY2Nlc3NTcGFuLmNsYXNzTmFtZSArPSBcIiBhbnN3ZXJlZFwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBuZXh0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG4gICAgICB0aGlzLnF1ZXN0aW9uTnVtYmVyKys7XG5cbiAgICAgIHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcbiAgICB9O1xuXG4gICAgcHJldmlvdXNCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZUFuc3dlclRpbWUoKTtcbiAgICAgIHRoaXMucXVlc3Rpb25OdW1iZXItLTtcblxuICAgICAgdGhpcy5jaGFuZ2VRdWVzdGlvbigpO1xuICAgIH07XG5cbiAgICBzdG9wQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmVuZFF1aXooKTtcbiAgICB9O1xuXG4gICAgYW5zd2VyRm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIGlmIChzdG9wQnV0dG9uLmRpc2FibGVkKSB7XG4gICAgICAgIG5leHRCdXR0b24uY2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3BCdXR0b24uY2xpY2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY3VycmVudCBxdWVzdGlvbiB0byBnaXZlbi5cbiAgICogU2V0cyBwcmV2QW5zd2VyU3RhcnRUaW1lIHRvICBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICovXG4gIHByaXZhdGUgY2hhbmdlUXVlc3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucXVpeiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVpei5xdWVzdGlvbnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG4gICAgZXhjZXJjaXNlTnVtYmVyU3Bhbi50ZXh0Q29udGVudCA9ICh0aGlzLnF1ZXN0aW9uTnVtYmVyICsgMSkudG9TdHJpbmcoKTtcbiAgICBwcm9tcHRTcGFuLnRleHRDb250ZW50ID0gcXVlc3Rpb24ucHJvbXB0O1xuICAgIHBlbmFsdHlUaW1lU3Bhbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uLnBlbmFsdHkudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IGFuc3dlciA9IHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXS5hbnN3ZXI7XG4gICAgYW5zd2VySW5wdXQudmFsdWUgPSBhbnN3ZXIgPT09IG51bGwgPyBcIlwiIDogYW5zd2VyLnRvU3RyaW5nKCk7XG5cbiAgICBwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IHRoaXMucXVlc3Rpb25OdW1iZXIgPT09IDA7XG4gICAgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9XG4gICAgICB0aGlzLnF1ZXN0aW9uTnVtYmVyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCAtIDE7XG5cbiAgICB0aGlzLmFuc3dlclN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGNvbnRlc3RhbnRzIGFuc3dlciB0byBjdXJyZW50IHF1ZXN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBzYXZlQW5zd2VyID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHByZXZBbnN3ZXIgPSB0aGlzLmFuc3dlcnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG5cbiAgICBpZiAocHJldkFuc3dlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5zd2VyID0gcGFyc2VJbnQoYW5zd2VySW5wdXQudmFsdWUpO1xuICAgIGlmIChpc05hTihhbnN3ZXIpKSB7XG4gICAgICBwcmV2QW5zd2VyLmFuc3dlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZBbnN3ZXIuYW5zd2VyID0gYW5zd2VyO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2F2ZXMgY29udGVzdGFudHMgYW5zd2VyIHRpbWUgdG8gY3VycmVudCBxdWVzdGlvbi5cbiAgICovXG4gIHByaXZhdGUgc2F2ZUFuc3dlclRpbWUgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZW5kVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgY29uc3QgcHJldkFuc3dlciA9IHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXTtcblxuICAgIGlmIChwcmV2QW5zd2VyID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2QW5zd2VyLnRpbWUgKz0gZW5kVGltZSAtIHRoaXMuYW5zd2VyU3RhcnRUaW1lO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbmQgcXVpei4gRGlzcGxheXMgcmVzdWx0cy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZW5kUXVpeigpIHtcbiAgICB0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG4gICAgZXhjZXJjaXNlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYXdhaXQgc2F2ZVJlc3VsdHModGhpcy5hbnN3ZXJzLCB0aGlzLnF1aXo/LmlkIHx8IFwiLTFcIik7XG4gICAgdGhpcy5xdWl6UmVzdWx0cyA9IG5ldyBRdWl6UmVzdWx0cyh0aGlzLmFuc3dlcnMsIHRoaXMucXVpeik7XG4gICAgdGhpcy5xdWl6UmVzdWx0cy5tYXJrKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFF1aXpOb0Fuc3dlcnMsIGdldFF1aXplcywgZ2V0UXVpeiB9IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCB7IFF1aXpSdW4gfSBmcm9tIFwiLi9RdWl6UnVuXCI7XG5pbXBvcnQgeyBRdWl6UmVzdWx0cyB9IGZyb20gXCIuL1F1aXpSZXN1bHRzXCI7XG5pbXBvcnQgeyBxdWl6ZXNEaXYsIHF1aXpDaG9pc2VTZWN0aW9uIH0gZnJvbSBcIi4vSFRNTEVsZW1lbnRzXCI7XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBsb2dzIGVycm9ycy5cbiAqIE1heSBpbiB0aGUgZnV0dXJlIGJlIG92ZXJ3cml0ZW4gdG8gZnVuY3Rpb24gdGhhdCBkaXNwbGF5IGVycm9yIG9uIHNjcmVlbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGVycm9yID0gKHM6IHN0cmluZykgPT4gYWxlcnQocyk7XG5cbi8qKlxuICogQWRkcyBxdWl6IHRvIHRhYmxlIG9mIGF2YWlsYWJsZSBxdWl6ZXMuXG4gKlxuICogQHBhcmFtIGlkIHF1aXogaWRcbiAqIEBwYXJhbSBxdWl6IHF1aXogb2JqZWN0XG4gKi9cbmNvbnN0IGFkZFF1aXpUb1RhYmxlID0gKHF1aXo6IFF1aXpOb0Fuc3dlcnMpID0+IHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmFtZUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFjdGlvbkNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYnV0dG9uLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IHF1aXotc3RhcnQtYnV0dG9uXCI7XG4gIGJ1dHRvbi5kYXRhc2V0LnF1aXpJZCA9IHF1aXouaWQ7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnRcIjtcblxuICBhY3Rpb25Db2wuY2xhc3NOYW1lID1cbiAgICBcImNvbC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiO1xuICBhY3Rpb25Db2wuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBuYW1lQ29sLmNsYXNzTmFtZSA9IFwiY29sLTggZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI7XG4gIG5hbWVDb2wudGV4dENvbnRlbnQgPSBxdWl6LmRlc2M7XG5cbiAgcm93LmNsYXNzTmFtZSA9IFwicm93XCI7XG5cbiAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2wpO1xuICByb3cuYXBwZW5kQ2hpbGQoYWN0aW9uQ29sKTtcblxuICBxdWl6ZXNEaXYuYXBwZW5kQ2hpbGQocm93KTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgYXZhaWxhYmxlIHF1aXplcyBpbiB0aGUgdGFibGUuXG4gKi9cbmNvbnN0IGRpc3BsYXlRdWl6ZXMgPSBhc3luYyAoKSA9PiB7XG4gIGZvciBhd2FpdCAoY29uc3QgcXVpeiBvZiBnZXRRdWl6ZXMoKSkge1xuICAgIGFkZFF1aXpUb1RhYmxlKHF1aXopO1xuICB9XG5cbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgXCJxdWl6LXN0YXJ0LWJ1dHRvblwiXG4gICkgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MQnV0dG9uRWxlbWVudD47XG4gIEFycmF5LmZyb20oYnV0dG9ucykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICBuZXcgUXVpelJ1bihhd2FpdCBnZXRRdWl6KGJ1dHRvbi5kYXRhc2V0LnF1aXpJZCB8fCBcIlwiKSk7XG4gICAgfTtcbiAgfSk7XG59O1xuXG5kaXNwbGF5UXVpemVzKCk7XG5cblF1aXpSZXN1bHRzLmRpc3BsYXlQcmV2aW91c1Jlc3VsdHMoKTtcblxuZXhwb3J0IGNvbnN0IGNzcmZUb2tlbiA9XG4gIGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJyk/LmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikgfHxcbiAgXCJcIjtcbiIsImltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCIuL1F1aXpSZXN1bHRzXCI7XG5pbXBvcnQgeyBSYXdRdWl6UmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGNzcmZUb2tlbiB9IGZyb20gXCIuL21haW5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBRdWVzdGlvbk5vQW5zd2VyIHtcbiAgcHJvbXB0OiBzdHJpbmc7XG4gIHBlbmFsdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVzdGlvbldpdGhBbnN3ZXJzIHtcbiAgcHJvbXB0OiBzdHJpbmc7XG4gIHBlbmFsdHk6IG51bWJlcjtcbiAgYW5zd2VyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpek5vQW5zd2VycyB7XG4gIGRlc2M6IHN0cmluZztcbiAgcXVlc3Rpb25zOiBRdWVzdGlvbk5vQW5zd2VyW107XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVpeldpdGhBbnN3ZXJzIHtcbiAgZGVzYzogc3RyaW5nO1xuICBxdWVzdGlvbnM6IFF1ZXN0aW9uV2l0aEFuc3dlcnNbXTtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbnN3ZXIge1xuICBhbnN3ZXI6IG51bWJlciB8IG51bGw7XG4gIHRpbWU6IG51bWJlcjtcbiAgY29ycmVjdDogYm9vbGVhbjtcbn1cblxuY29uc3QgaXNRdWVzdGlvbiA9IChxdWVzdGlvbjogYW55KTogcXVlc3Rpb24gaXMgUXVlc3Rpb25Ob0Fuc3dlciA9PiB7XG4gIHJldHVybiBxdWVzdGlvbiAmJiBxdWVzdGlvbi5wcm9tcHQgJiYgcXVlc3Rpb24uYW5zd2VyICYmIHF1ZXN0aW9uLnBlbmFsdHk7XG59O1xuXG5jb25zdCBpc1F1aXogPSAocXVpejogYW55KTogcXVpeiBpcyBRdWl6Tm9BbnN3ZXJzID0+IHtcbiAgcmV0dXJuIHF1aXouZGVzYyAmJiBxdWl6LnF1ZXN0aW9ucyAmJiBxdWl6LmlkICE9PSB1bmRlZmluZWQ7XG59O1xuY29uc3QgaXNRdWl6V2l0aEFuc3dlcnMgPSAocXVpejogYW55KTogcXVpeiBpcyBRdWl6V2l0aEFuc3dlcnMgPT4ge1xuICByZXR1cm4gcXVpei5kZXNjICYmIHF1aXoucXVlc3Rpb25zICYmIHF1aXouaWQgIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogUmV0dXJucyBxdWl6IHdpdGggZ2l2ZW4gaWQgb3IgbnVsbCBvbiBlcnJvci5cbiAqIEBwYXJhbSBpZCBxdWl6IGlkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRRdWl6ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1aXpOb0Fuc3dlcnMgfCBudWxsPiA9PiB7XG4gIGNvbnNvbGUubG9nKGlkKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWl6UmF3ID0gYXdhaXQgZmV0Y2goXCIvZ2V0X3F1aXovXCIgKyBpZCk7XG4gICAgY29uc3QgcXVpeiA9IGF3YWl0IHF1aXpSYXcuanNvbigpO1xuXG4gICAgaWYgKGlzUXVpeihxdWl6KSkge1xuICAgICAgcmV0dXJuIHF1aXo7XG4gICAgfVxuICB9IGNhdGNoIChfKSB7fVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHF1aXogd2l0aCBnaXZlbiBpZCBvciBudWxsIG9uIGVycm9yLlxuICogQHBhcmFtIGlkIHF1aXogaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFF1aXpXaXRoQW5zd2VycyA9IGFzeW5jIChcbiAgaWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxRdWl6V2l0aEFuc3dlcnMgfCBudWxsPiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcXVpelJhdyA9IGF3YWl0IGZldGNoKFwiL2dldF9xdWl6X3dpdGhfYW5zd2Vycy9cIiArIGlkKTtcbiAgICBjb25zdCBxdWl6ID0gYXdhaXQgcXVpelJhdy5qc29uKCk7XG5cbiAgICBpZiAoaXNRdWl6V2l0aEFuc3dlcnMocXVpeikpIHtcbiAgICAgIHJldHVybiBxdWl6O1xuICAgIH1cbiAgfSBjYXRjaCAoXykge31cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2VuZXJhdG9yIHRoYXQgcmV0dXJucyBhbGwgcXVpemVzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIGdldFF1aXplcygpOiBBc3luY0dlbmVyYXRvcjxRdWl6Tm9BbnN3ZXJzPiB7XG4gIGNvbnN0IHF1aXpSYXcgPSBhd2FpdCBmZXRjaChcIi9nZXRfcXVpemVzXCIpO1xuICBjb25zdCBvYmogPSBhd2FpdCBxdWl6UmF3Lmpzb24oKTtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgZm9yIChjb25zdCBxdWl6IG9mIG9iaikge1xuICAgICAgaWYgKGlzUXVpeihxdWl6KSkge1xuICAgICAgICB5aWVsZCBxdWl6O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJldlJlc3VsdHMgPSBhc3luYyAoKTogUHJvbWlzZTxSZXN1bHRbXT4gPT4ge1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgZmV0Y2goXCIvcHJldl9yZXN1bHRzXCIpO1xuICBjb25zdCBvYmogPSBhd2FpdCByZXN1bHRzLmpzb24oKTtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIDxSZXN1bHRbXT5vYmo7XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcblxuY29uc3QgZ2V0UmF3UXVpelJlc3VsdHMgPSAoYW5zd2VyczogQW5zd2VyW10pOiBSYXdRdWl6UmVzdWx0ID0+IHtcbiAgY29uc3QgdG90YWxUaW1lID0gYW5zd2Vycy5yZWR1Y2UoKHN1bSwgYW5zKSA9PiBzdW0gKyBhbnMudGltZSwgMCk7XG4gIGNvbnN0IHFyOiBSYXdRdWl6UmVzdWx0ID0geyBhbnN3ZXJzOiBbXSwgdGltZXM6IFtdIH07XG4gIGFuc3dlcnMuZm9yRWFjaCgoYW5zKSA9PiB7XG4gICAgcXIuYW5zd2Vycy5wdXNoKDxudW1iZXI+YW5zLmFuc3dlcik7XG4gICAgcXIudGltZXMucHVzaChhbnMudGltZSAvIHRvdGFsVGltZSk7XG4gIH0pO1xuXG4gIHJldHVybiBxcjtcbn07XG5leHBvcnQgY29uc3Qgc2F2ZVJlc3VsdHMgPSBhc3luYyAoYW5zd2VyczogQW5zd2VyW10sIHF1aXpJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHFyID0gZ2V0UmF3UXVpelJlc3VsdHMoYW5zd2Vycyk7XG4gIGNvbnNvbGUubG9nKHFyLCBhbnN3ZXJzLCBKU09OLnN0cmluZ2lmeShxcikpO1xuICBhd2FpdCBmZXRjaChcIi9wb3N0X3Jlc3VsdHMvXCIgKyBxdWl6SWQsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBcIkNTUkYtVG9rZW5cIjogY3NyZlRva2VuLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocXIpLFxuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9