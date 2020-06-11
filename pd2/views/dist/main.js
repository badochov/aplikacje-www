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
exports.quickAccessDiv = exports.topScoresSection = exports.averageTimesSection = exports.correctAnswersSection = exports.quizPrevResultsSection = exports.finalResultSpan = exports.initResultSpan = exports.answerForm = exports.saveWithStatsButton = exports.resultSection = exports.correctnessDiv = exports.quizesDiv = exports.resultsDiv = exports.descParagraph = exports.penaltyTimeSpan = exports.quizChoiseSection = exports.quizDescSection = exports.excerciseSection = exports.excerciseNumberSpan = exports.promptSpan = exports.stopButton = exports.nextButton = exports.previousButton = exports.answerInput = void 0;
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
exports.correctAnswersSection = document.getElementById("correct-answers");
exports.averageTimesSection = document.getElementById("average-times");
exports.topScoresSection = document.getElementById("top-scores");
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
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
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
    }
    mark() {
        this.checkAnswers();
        this.givePenalties();
        this.display();
    }
    /**
     * Checks answers, sets carrect argument in each answer to either true or false.
     */
    checkAnswers() {
        for (const i in this.answers) {
            this.answers[i].correct =
                this.answers[i].answer === this.quiz.questions[i].answer;
        }
    }
    /**
     * Gives penalties for each wrong answer.
     */
    givePenalties() {
        for (const i in this.answers) {
            this.penalties.push(this.answers[i].correct ? 0 : this.quiz.questions[i].penalty);
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
        window.location.href = "/";
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
    displayUserResults() {
        HTMLElements_1.initResultSpan.textContent = QuizResults.formatTime(this.initTime);
        HTMLElements_1.finalResultSpan.textContent = QuizResults.formatTime(this.finalTime);
        // console.log(this.answers.entries());
        for (const [i, answer] of this.answers.entries()) {
            console.log(i, answer);
            const div = document.createElement("div");
            div.textContent = `${i + 1}. `;
            const span = document.createElement("span");
            const time = document.createElement("span");
            span.className = answer.correct ? "correct" : "incorrect";
            span.textContent = answer.correct
                ? "Poprawnie :)"
                : `Błąd: +${this.quiz.questions[i].penalty}s`;
            time.textContent = `  ${QuizResults.formatTime(answer.time / 1000)} s`;
            div.appendChild(span);
            div.appendChild(time);
            HTMLElements_1.correctnessDiv.appendChild(div);
        }
    }
    displayCorrectAnswers() {
        // console.log(this.answers.entries());
        for (const [i, question] of this.quiz.questions.entries()) {
            const div = document.createElement("div");
            div.textContent = `${i + 1}. `;
            const span = document.createElement("span");
            span.textContent = `${question.prompt} = ${question.answer}`;
            div.appendChild(span);
            HTMLElements_1.correctAnswersSection.appendChild(div);
        }
    }
    displayAverageTimes() {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(this.answers.entries());
            const times = yield quiz_1.averageTimes(this.quiz.id.toString());
            console.log(times);
            if (times === null) {
                util_1.error("Nie udało pobrać się średnich czasów na odpowiedź");
                return;
            }
            for (const [i, time] of times.entries()) {
                const div = document.createElement("div");
                div.textContent = `${i + 1}. `;
                const span = document.createElement("span");
                span.textContent = `${time ? QuizResults.formatTime(time / 1000) : "--.--"}s`;
                div.appendChild(span);
                HTMLElements_1.averageTimesSection.appendChild(div);
            }
        });
    }
    displayTopScores() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(this.answers.entries());
            const scores = yield quiz_1.topScores(this.quiz.id.toString());
            console.log(scores);
            if (scores === null) {
                util_1.error("Nie udało pobrać się najlepszych wyników");
                return;
            }
            for (const [i, [user, result]] of scores.entries()) {
                const div = document.createElement("div");
                const h3 = document.createElement("h3");
                // div.textContent = `${i + 1}. `;
                const timeP = document.createElement("p");
                timeP.textContent = `Czas: ${QuizResults.formatTime(result.finalTime / 1000)}s`;
                const answersP = document.createElement("p");
                answersP.textContent = `Poprawne odpowiedzi: ${(_a = result.answers) === null || _a === void 0 ? void 0 : _a.reduce((sum, ans) => (ans.correct ? sum + 1 : sum), 0)} / ${(_b = result.answers) === null || _b === void 0 ? void 0 : _b.length}`;
                h3.textContent = user.username;
                div.appendChild(h3);
                div.appendChild(timeP);
                div.appendChild(answersP);
                HTMLElements_1.topScoresSection.appendChild(div);
            }
        });
    }
    /**
     * Displays results.
     */
    display() {
        return __awaiter(this, void 0, void 0, function* () {
            this.displayUserResults();
            this.displayCorrectAnswers();
            yield this.displayAverageTimes();
            yield this.displayTopScores();
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
const HTMLElements_1 = __webpack_require__(/*! ./HTMLElements */ "./src/HTMLElements.ts");
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
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
            console.log(util_1.error);
            util_1.error("Ten quiz już jest rozwiązany przez Ciebie");
            return;
        }
        else if (this.quiz.questions.length == 0) {
            util_1.error("Podany quiz ma za mało pytań");
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
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.saveAnswerTime();
            HTMLElements_1.excerciseSection.style.display = "none";
            yield quiz_1.saveResults(this.answers, ((_a = this.quiz) === null || _a === void 0 ? void 0 : _a.id) || "-1");
            window.location.href = "/results/" + ((_b = this.quiz) === null || _b === void 0 ? void 0 : _b.id);
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
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
const QuizRun_1 = __webpack_require__(/*! ./QuizRun */ "./src/QuizRun.ts");
const QuizResults_1 = __webpack_require__(/*! ./QuizResults */ "./src/QuizResults.ts");
const HTMLElements_1 = __webpack_require__(/*! ./HTMLElements */ "./src/HTMLElements.ts");
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
exports.topScores = exports.averageTimes = exports.getAnswers = exports.saveResults = exports.getPrevResults = exports.getQuizes = exports.getQuizWithAnswers = exports.getQuiz = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
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
            "CSRF-Token": util_1.csrfToken,
        },
        body: JSON.stringify(qr),
    });
});
exports.getAnswers = (quizId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const raw = yield fetch("/get_answers/" + quizId);
        const obj = yield raw.json();
        if (obj instanceof Array) {
            return obj;
        }
    }
    catch (_) { }
    return null;
});
exports.averageTimes = (quizId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const raw = yield fetch("/get_answers_mean_time/" + quizId);
        const obj = yield raw.json();
        if (obj instanceof Array) {
            return obj;
        }
    }
    catch (_) { }
    return null;
});
exports.topScores = (quizId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const raw = yield fetch("/top_scores/" + quizId);
        const obj = yield raw.json();
        if (obj instanceof Array) {
            return obj;
        }
    }
    catch (_) { }
    return null;
});


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.csrfToken = exports.error = void 0;
/**
 * Function that logs errors.
 * May in the future be overwriten to function that display error on screen.
 */
exports.error = (s) => alert(s);
exports.csrfToken = ((_a = document === null || document === void 0 ? void 0 : document.querySelector('meta[name="csrf-token"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content")) ||
    "";


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hUTUxFbGVtZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpelJlc3VsdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1aXpSdW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXoudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGYSxtQkFBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ2hELFFBQVEsQ0FDVyxDQUFDO0FBQ1Qsc0JBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUNuRCxVQUFVLENBQ1UsQ0FBQztBQUNWLGtCQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENB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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBjb25zdCBhbnN3ZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImFuc3dlclwiXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJwcmV2aW91c1wiXG4pIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuZXhwb3J0IGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5leHBvcnQgY29uc3Qgc3RvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcFwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBwcm9tcHRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9tcHRcIikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGV4Y2VyY2lzZU51bWJlclNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJleGNlcmNpc2UtbnVtYmVyXCJcbikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGV4Y2VyY2lzZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJleGNlcmNpc2VcIlxuKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBxdWl6RGVzY1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJxdWl6LWRlc2NcIlxuKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBxdWl6Q2hvaXNlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInF1aXotY2hvaXNlXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcGVuYWx0eVRpbWVTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwicGVuYWx0eS10aW1lXCJcbikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGRlc2NQYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJkZXNjXCJcbikgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBxdWl6ZXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXplc1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBjb3JyZWN0bmVzc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImNvcnJlY3RuZXNzXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgcmVzdWx0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInJlc3VsdFwiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IHNhdmVXaXRoU3RhdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJzYXZlLXdpdGgtc3RhdHNcIlxuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmV4cG9ydCBjb25zdCBhbnN3ZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiYW5zd2VyLWZvcm1cIlxuKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBpbml0UmVzdWx0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImluaXQtcmVzdWx0XCJcbikgYXMgSFRNTFNwYW5FbGVtZW50O1xuZXhwb3J0IGNvbnN0IGZpbmFsUmVzdWx0U3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImZpbmFsLXJlc3VsdFwiXG4pIGFzIEhUTUxTcGFuRWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJxdWl6LXByZXYtcmVzdWx0c1wiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IGNvcnJlY3RBbnN3ZXJzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImNvcnJlY3QtYW5zd2Vyc1wiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuZXhwb3J0IGNvbnN0IGF2ZXJhZ2VUaW1lc1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJhdmVyYWdlLXRpbWVzXCJcbikgYXMgSFRNTERpdkVsZW1lbnQ7XG5leHBvcnQgY29uc3QgdG9wU2NvcmVzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInRvcC1zY29yZXNcIlxuKSBhcyBIVE1MRGl2RWxlbWVudDtcbmV4cG9ydCBjb25zdCBxdWlja0FjY2Vzc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInF1aWNrLWFjY2Vzc1wiXG4pIGFzIEhUTUxEaXZFbGVtZW50O1xuIiwiaW1wb3J0IHtcbiAgQW5zd2VyLFxuICBRdWl6V2l0aEFuc3dlcnMsXG4gIGdldFF1aXpXaXRoQW5zd2VycyxcbiAgZ2V0UHJldlJlc3VsdHMsXG4gIGF2ZXJhZ2VUaW1lcyxcbiAgdG9wU2NvcmVzLFxufSBmcm9tIFwiLi9xdWl6XCI7XG5pbXBvcnQge1xuICBzYXZlV2l0aFN0YXRzQnV0dG9uLFxuICBpbml0UmVzdWx0U3BhbixcbiAgZmluYWxSZXN1bHRTcGFuLFxuICBjb3JyZWN0bmVzc0RpdixcbiAgcXVpelByZXZSZXN1bHRzU2VjdGlvbixcbiAgY29ycmVjdEFuc3dlcnNTZWN0aW9uLFxuICBhdmVyYWdlVGltZXNTZWN0aW9uLFxuICB0b3BTY29yZXNTZWN0aW9uLFxufSBmcm9tIFwiLi9IVE1MRWxlbWVudHNcIjtcbmltcG9ydCB7IGVycm9yIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdCB7XG4gIGZpbmFsVGltZTogbnVtYmVyO1xuICBhbnN3ZXJzPzogQW5zd2VyW107XG4gIHF1aXpJZDogc3RyaW5nO1xufVxuXG5jb25zdCBpc1Jlc3VsdCA9IChvYmo6IGFueSk6IG9iaiBpcyBSZXN1bHQgPT4ge1xuICByZXR1cm4gb2JqLmZpbmFsVGltZSAmJiBvYmoucXVpeklkO1xufTtcblxuZXhwb3J0IGNsYXNzIFF1aXpSZXN1bHRzIHtcbiAgcHJpdmF0ZSBwZW5hbHRpZXM6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBhbnN3ZXJzIGFycmF5IG9mIG1hcmtlZCBhbnN3ZXJzXG4gICAqIEBwYXJhbSBxdWl6IHF1aXogb2JqZWN0XG4gICAqIEBwYXJhbSBxdWl6SWQgY2hvc2VuIHF1aXogaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5zd2VyczogQW5zd2VyW10sIHByaXZhdGUgcXVpejogUXVpeldpdGhBbnN3ZXJzKSB7XG4gICAgdGhpcy5iaW5kRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgcHVibGljIG1hcmsoKSB7XG4gICAgdGhpcy5jaGVja0Fuc3dlcnMoKTtcbiAgICB0aGlzLmdpdmVQZW5hbHRpZXMoKTtcbiAgICB0aGlzLmRpc3BsYXkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgYW5zd2Vycywgc2V0cyBjYXJyZWN0IGFyZ3VtZW50IGluIGVhY2ggYW5zd2VyIHRvIGVpdGhlciB0cnVlIG9yIGZhbHNlLlxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0Fuc3dlcnMoKSB7XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMuYW5zd2Vycykge1xuICAgICAgdGhpcy5hbnN3ZXJzW2ldLmNvcnJlY3QgPVxuICAgICAgICB0aGlzLmFuc3dlcnNbaV0uYW5zd2VyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zW2ldLmFuc3dlcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZXMgcGVuYWx0aWVzIGZvciBlYWNoIHdyb25nIGFuc3dlci5cbiAgICovXG4gIHByaXZhdGUgZ2l2ZVBlbmFsdGllcygpIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5hbnN3ZXJzKSB7XG4gICAgICB0aGlzLnBlbmFsdGllcy5wdXNoKFxuICAgICAgICB0aGlzLmFuc3dlcnNbaV0uY29ycmVjdCA/IDAgOiB0aGlzLnF1aXoucXVlc3Rpb25zW2ldLnBlbmFsdHlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgbmVjY2Vzc2FyeSBldmVudCBoYW5kbGVycy5cbiAgICovXG4gIHByaXZhdGUgYmluZEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgc2F2ZVdpdGhTdGF0c0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5nb1RvTWFpblNjcmVlbigpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR29lcyBiYWNrIHRvIG1haW4gc2NyZWVuLlxuICAgKi9cbiAgcHJpdmF0ZSBnb1RvTWFpblNjcmVlbigpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGltZSBzcGVudCBvbiBxdWl6LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaW5pdFRpbWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJzLnJlZHVjZSgoc3VtLCBhbnMpID0+IHN1bSArIGFucy50aW1lIC8gMTAwMCwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBmaW5hbCB0aW1lLCBiYXNlICsgcGVuYWx0aWVzLlxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVuYWx0aWVzLnJlZHVjZShcbiAgICAgIChzdW0sIHBlbmFsdHkpID0+IHN1bSArIHBlbmFsdHksXG4gICAgICB0aGlzLmluaXRUaW1lXG4gICAgKTtcbiAgfVxuICBwcml2YXRlIGRpc3BsYXlVc2VyUmVzdWx0cygpIHtcbiAgICBpbml0UmVzdWx0U3Bhbi50ZXh0Q29udGVudCA9IFF1aXpSZXN1bHRzLmZvcm1hdFRpbWUodGhpcy5pbml0VGltZSk7XG4gICAgZmluYWxSZXN1bHRTcGFuLnRleHRDb250ZW50ID0gUXVpelJlc3VsdHMuZm9ybWF0VGltZSh0aGlzLmZpbmFsVGltZSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFuc3dlcnMuZW50cmllcygpKTtcbiAgICBmb3IgKGNvbnN0IFtpLCBhbnN3ZXJdIG9mIHRoaXMuYW5zd2Vycy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGksIGFuc3dlcik7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gYCR7aSArIDF9LiBgO1xuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBhbnN3ZXIuY29ycmVjdCA/IFwiY29ycmVjdFwiIDogXCJpbmNvcnJlY3RcIjtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBhbnN3ZXIuY29ycmVjdFxuICAgICAgICA/IFwiUG9wcmF3bmllIDopXCJcbiAgICAgICAgOiBgQsWCxIVkOiArJHt0aGlzLnF1aXoucXVlc3Rpb25zW2ldLnBlbmFsdHl9c2A7XG4gICAgICB0aW1lLnRleHRDb250ZW50ID0gYCAgJHtRdWl6UmVzdWx0cy5mb3JtYXRUaW1lKGFuc3dlci50aW1lIC8gMTAwMCl9IHNgO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICAgICAgY29ycmVjdG5lc3NEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBkaXNwbGF5Q29ycmVjdEFuc3dlcnMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hbnN3ZXJzLmVudHJpZXMoKSk7XG4gICAgZm9yIChjb25zdCBbaSwgcXVlc3Rpb25dIG9mIHRoaXMucXVpei5xdWVzdGlvbnMuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LnRleHRDb250ZW50ID0gYCR7aSArIDF9LiBgO1xuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGAke3F1ZXN0aW9uLnByb21wdH0gPSAke3F1ZXN0aW9uLmFuc3dlcn1gO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgY29ycmVjdEFuc3dlcnNTZWN0aW9uLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgYXN5bmMgZGlzcGxheUF2ZXJhZ2VUaW1lcygpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFuc3dlcnMuZW50cmllcygpKTtcbiAgICBjb25zdCB0aW1lcyA9IGF3YWl0IGF2ZXJhZ2VUaW1lcyh0aGlzLnF1aXouaWQudG9TdHJpbmcoKSk7XG4gICAgY29uc29sZS5sb2codGltZXMpO1xuICAgIGlmICh0aW1lcyA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoXCJOaWUgdWRhxYJvIHBvYnJhxIcgc2nEmSDFm3JlZG5pY2ggY3phc8OzdyBuYSBvZHBvd2llZMW6XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtpLCB0aW1lXSBvZiB0aW1lcy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX0uIGA7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgIHRpbWUgPyBRdWl6UmVzdWx0cy5mb3JtYXRUaW1lKHRpbWUgLyAxMDAwKSA6IFwiLS0uLS1cIlxuICAgICAgfXNgO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgYXZlcmFnZVRpbWVzU2VjdGlvbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGFzeW5jIGRpc3BsYXlUb3BTY29yZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hbnN3ZXJzLmVudHJpZXMoKSk7XG4gICAgY29uc3Qgc2NvcmVzID0gYXdhaXQgdG9wU2NvcmVzKHRoaXMucXVpei5pZC50b1N0cmluZygpKTtcbiAgICBjb25zb2xlLmxvZyhzY29yZXMpO1xuICAgIGlmIChzY29yZXMgPT09IG51bGwpIHtcbiAgICAgIGVycm9yKFwiTmllIHVkYcWCbyBwb2JyYcSHIHNpxJkgbmFqbGVwc3p5Y2ggd3luaWvDs3dcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2ksIFt1c2VyLCByZXN1bHRdXSBvZiBzY29yZXMuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAvLyBkaXYudGV4dENvbnRlbnQgPSBgJHtpICsgMX0uIGA7XG4gICAgICBjb25zdCB0aW1lUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGltZVAudGV4dENvbnRlbnQgPSBgQ3phczogJHtRdWl6UmVzdWx0cy5mb3JtYXRUaW1lKFxuICAgICAgICByZXN1bHQuZmluYWxUaW1lIC8gMTAwMFxuICAgICAgKX1zYDtcbiAgICAgIGNvbnN0IGFuc3dlcnNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBhbnN3ZXJzUC50ZXh0Q29udGVudCA9IGBQb3ByYXduZSBvZHBvd2llZHppOiAke3Jlc3VsdC5hbnN3ZXJzPy5yZWR1Y2UoXG4gICAgICAgIChzdW0sIGFucykgPT4gKGFucy5jb3JyZWN0ID8gc3VtICsgMSA6IHN1bSksXG4gICAgICAgIDBcbiAgICAgICl9IC8gJHtyZXN1bHQuYW5zd2Vycz8ubGVuZ3RofWA7XG4gICAgICBoMy50ZXh0Q29udGVudCA9IHVzZXIudXNlcm5hbWU7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHRpbWVQKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChhbnN3ZXJzUCk7XG4gICAgICB0b3BTY29yZXNTZWN0aW9uLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHJlc3VsdHMuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGRpc3BsYXkoKSB7XG4gICAgdGhpcy5kaXNwbGF5VXNlclJlc3VsdHMoKTtcbiAgICB0aGlzLmRpc3BsYXlDb3JyZWN0QW5zd2VycygpO1xuICAgIGF3YWl0IHRoaXMuZGlzcGxheUF2ZXJhZ2VUaW1lcygpO1xuICAgIGF3YWl0IHRoaXMuZGlzcGxheVRvcFNjb3JlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdGltZSwgcm91bmQgdG8gMyBkaWdpdHMuXG4gICAqIEBwYXJhbSB0aW1lIHRpbWVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0VGltZSh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aW1lLnRvRml4ZWQoMykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBwcmV2aW91cyByZXN1bHRzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBkaXNwbGF5UHJldmlvdXNSZXN1bHRzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCByZXN1bHRzO1xuICAgIHRyeSB7XG4gICAgICByZXN1bHRzID0gYXdhaXQgZ2V0UHJldlJlc3VsdHMoKTtcbiAgICB9IGNhdGNoIChfKSB7fVxuICAgIGxldCBpID0gMTtcbiAgICBsZXQgYW55ID0gZmFsc2U7XG4gICAgaWYgKHJlc3VsdHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yIChjb25zdCByZXMgb2YgcmVzdWx0cykge1xuICAgICAgICBhbnkgPSB0cnVlO1xuICAgICAgICBpZiAoaXNSZXN1bHQocmVzKSkge1xuICAgICAgICAgIGNvbnN0IHF1aXogPSBhd2FpdCBnZXRRdWl6V2l0aEFuc3dlcnMocmVzLnF1aXpJZCk7XG4gICAgICAgICAgaWYgKHF1aXopIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBuYW1lQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBkZXRhaWxDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgICAgICBsaW5rLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IHF1aXotaW5mby1idXR0b25cIjtcbiAgICAgICAgICAgIGxpbmsuZGF0YXNldC5xdWl6SWQgPSBxdWl6LmlkO1xuICAgICAgICAgICAgbGluay50ZXh0Q29udGVudCA9IFwiSW5mb1wiO1xuICAgICAgICAgICAgbGluay5ocmVmID0gXCIvcmVzdWx0cy9cIiArIHF1aXouaWQ7XG5cbiAgICAgICAgICAgIHJlc3VsdENvbC5jbGFzc05hbWUgPVxuICAgICAgICAgICAgICBcImNvbC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiO1xuICAgICAgICAgICAgcmVzdWx0Q29sLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgUXVpelJlc3VsdHMuZm9ybWF0VGltZShyZXMuZmluYWxUaW1lIC8gMTAwMCkgKyBcInNcIjtcblxuICAgICAgICAgICAgbmFtZUNvbC5jbGFzc05hbWUgPVxuICAgICAgICAgICAgICBcImNvbC02IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiO1xuICAgICAgICAgICAgbmFtZUNvbC50ZXh0Q29udGVudCA9IHF1aXouZGVzYztcblxuICAgICAgICAgICAgZGV0YWlsQ29sLmNsYXNzTmFtZSA9XG4gICAgICAgICAgICAgIFwiY29sLTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI7XG4gICAgICAgICAgICBkZXRhaWxDb2wuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgICByb3cuY2xhc3NOYW1lID0gYHJvdyBwcmV2LXJlc3VsdCAke2kgJSAyID09IDAgPyBcImV2ZW5cIiA6IFwiXCJ9YDtcblxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2wpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHJlc3VsdENvbCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGV0YWlsQ29sKTtcblxuICAgICAgICAgICAgcXVpelByZXZSZXN1bHRzU2VjdGlvbi5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWFueSkge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJvdy5jbGFzc05hbWUgPSBgcm93IHByZXYtcmVzdWx0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyYDtcbiAgICAgIHJvdy50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiSmVzemN6ZSBuaWUgcm96d2nEhXphxYJlxbwgxbxhZG5lZ28gcXVpenUsIG5hIGNvIGN6ZWthc3o/IDopXCI7XG4gICAgICBxdWl6UHJldlJlc3VsdHNTZWN0aW9uLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBRdWl6Tm9BbnN3ZXJzLCBBbnN3ZXIsIHNhdmVSZXN1bHRzIH0gZnJvbSBcIi4vcXVpelwiO1xuaW1wb3J0IHtcbiAgZGVzY1BhcmFncmFwaCxcbiAgYW5zd2VySW5wdXQsXG4gIHN0b3BCdXR0b24sXG4gIGV4Y2VyY2lzZVNlY3Rpb24sXG4gIG5leHRCdXR0b24sXG4gIHByZXZpb3VzQnV0dG9uLFxuICBleGNlcmNpc2VOdW1iZXJTcGFuLFxuICBwcm9tcHRTcGFuLFxuICBwZW5hbHR5VGltZVNwYW4sXG4gIHF1aXpDaG9pc2VTZWN0aW9uLFxuICBxdWl6RGVzY1NlY3Rpb24sXG4gIGFuc3dlckZvcm0sXG4gIHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24sXG4gIHF1aWNrQWNjZXNzRGl2LFxufSBmcm9tIFwiLi9IVE1MRWxlbWVudHNcIjtcbmltcG9ydCB7IGVycm9yIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgUXVpelJ1biB7XG4gIHByaXZhdGUgcXVlc3Rpb25OdW1iZXI6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgYW5zd2VyU3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgYW5zd2VyczogQW5zd2VyW10gPSBbXTtcbiAgcHJpdmF0ZSBwZW5hbHRpZXM6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBxdWl6SWQgY2hvc2VuIHF1aXogaWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVpejogUXVpek5vQW5zd2VycyB8IG51bGwgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMucXVpeiA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBlcnJvcihcIlRlbiBxdWl6IGp1xbwgamVzdCByb3p3acSFemFueSBwcnpleiBDaWViaWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCA9PSAwKSB7XG4gICAgICBlcnJvcihcIlBvZGFueSBxdWl6IG1hIHphIG1hxYJvIHB5dGHFhFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcXVpekNob2lzZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHF1aXpQcmV2UmVzdWx0c1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHF1aXpEZXNjU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRlc2NQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0aGlzLnF1aXouZGVzYztcblxuICAgIHRoaXMucXVpei5xdWVzdGlvbnMuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgdGhpcy5hbnN3ZXJzLnB1c2goeyB0aW1lOiAwLCBhbnN3ZXI6IG51bGwsIGNvcnJlY3Q6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5wZW5hbHRpZXMucHVzaCgwKTtcblxuICAgICAgY29uc3QgYWNjZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBhY2Nlc3MudGV4dENvbnRlbnQgPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICBhY2Nlc3MuY2xhc3NOYW1lID0gXCJxdWljay1hY2Nlc3Mtbm9kZVwiO1xuICAgICAgYWNjZXNzLmRhdGFzZXQucXVlc3Rpb24gPSBpLnRvU3RyaW5nKCk7XG5cbiAgICAgIGFjY2Vzcy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25OdW1iZXIgPSBpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcbiAgICAgIH07XG5cbiAgICAgIHF1aWNrQWNjZXNzRGl2LmFwcGVuZENoaWxkKGFjY2Vzcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJpbmRFdmVudEhhbmRsZXJzKCk7XG5cbiAgICBleGNlcmNpc2VTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgdGhpcy5hbnN3ZXJTdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBuZWNjZXNzYXJ5IGV2ZW50IGhhbmRsZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBiaW5kRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcbiAgICBhbnN3ZXJJbnB1dC5vbmlucHV0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlQW5zd2VyKCk7XG5cbiAgICAgIHN0b3BCdXR0b24uZGlzYWJsZWQgPSB0aGlzLmFuc3dlcnMuc29tZSgoYSkgPT4gYS5hbnN3ZXIgPT09IG51bGwpO1xuICAgICAgY29uc3QgcXVpY2tBY2Nlc3NTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXF1ZXN0aW9uPVwiJHt0aGlzLnF1ZXN0aW9uTnVtYmVyfVwiXWBcbiAgICAgICkgYXMgSFRNTFNwYW5FbGVtZW50O1xuICAgICAgaWYgKHRoaXMuYW5zd2Vyc1t0aGlzLnF1ZXN0aW9uTnVtYmVyXS5hbnN3ZXIgPT09IG51bGwpIHtcbiAgICAgICAgcXVpY2tBY2Nlc3NTcGFuLmNsYXNzTmFtZSA9IHF1aWNrQWNjZXNzU3Bhbi5jbGFzc05hbWUucmVwbGFjZShcbiAgICAgICAgICAvYW5zd2VyZWQvLFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1aWNrQWNjZXNzU3Bhbi5jbGFzc05hbWUgKz0gXCIgYW5zd2VyZWRcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbmV4dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlQW5zd2VyVGltZSgpO1xuICAgICAgdGhpcy5xdWVzdGlvbk51bWJlcisrO1xuXG4gICAgICB0aGlzLmNoYW5nZVF1ZXN0aW9uKCk7XG4gICAgfTtcblxuICAgIHByZXZpb3VzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG4gICAgICB0aGlzLnF1ZXN0aW9uTnVtYmVyLS07XG5cbiAgICAgIHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcbiAgICB9O1xuXG4gICAgc3RvcEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lbmRRdWl6KCk7XG4gICAgfTtcblxuICAgIGFuc3dlckZvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG4gICAgICBpZiAoc3RvcEJ1dHRvbi5kaXNhYmxlZCkge1xuICAgICAgICBuZXh0QnV0dG9uLmNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9wQnV0dG9uLmNsaWNrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGN1cnJlbnQgcXVlc3Rpb24gdG8gZ2l2ZW4uXG4gICAqIFNldHMgcHJldkFuc3dlclN0YXJ0VGltZSB0byAgY3VycmVudCB0aW1lc3RhbXAuXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZVF1ZXN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnF1aXogPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnF1aXoucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25OdW1iZXJdO1xuICAgIGV4Y2VyY2lzZU51bWJlclNwYW4udGV4dENvbnRlbnQgPSAodGhpcy5xdWVzdGlvbk51bWJlciArIDEpLnRvU3RyaW5nKCk7XG4gICAgcHJvbXB0U3Bhbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uLnByb21wdDtcbiAgICBwZW5hbHR5VGltZVNwYW4udGV4dENvbnRlbnQgPSBxdWVzdGlvbi5wZW5hbHR5LnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCBhbnN3ZXIgPSB0aGlzLmFuc3dlcnNbdGhpcy5xdWVzdGlvbk51bWJlcl0uYW5zd2VyO1xuICAgIGFuc3dlcklucHV0LnZhbHVlID0gYW5zd2VyID09PSBudWxsID8gXCJcIiA6IGFuc3dlci50b1N0cmluZygpO1xuXG4gICAgcHJldmlvdXNCdXR0b24uZGlzYWJsZWQgPSB0aGlzLnF1ZXN0aW9uTnVtYmVyID09PSAwO1xuICAgIG5leHRCdXR0b24uZGlzYWJsZWQgPVxuICAgICAgdGhpcy5xdWVzdGlvbk51bWJlciA9PT0gdGhpcy5xdWl6LnF1ZXN0aW9ucy5sZW5ndGggLSAxO1xuXG4gICAgdGhpcy5hbnN3ZXJTdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBjb250ZXN0YW50cyBhbnN3ZXIgdG8gY3VycmVudCBxdWVzdGlvbi5cbiAgICovXG4gIHByaXZhdGUgc2F2ZUFuc3dlciA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwcmV2QW5zd2VyID0gdGhpcy5hbnN3ZXJzW3RoaXMucXVlc3Rpb25OdW1iZXJdO1xuXG4gICAgaWYgKHByZXZBbnN3ZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFuc3dlciA9IHBhcnNlSW50KGFuc3dlcklucHV0LnZhbHVlKTtcbiAgICBpZiAoaXNOYU4oYW5zd2VyKSkge1xuICAgICAgcHJldkFuc3dlci5hbnN3ZXIgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2QW5zd2VyLmFuc3dlciA9IGFuc3dlcjtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNhdmVzIGNvbnRlc3RhbnRzIGFuc3dlciB0aW1lIHRvIGN1cnJlbnQgcXVlc3Rpb24uXG4gICAqL1xuICBwcml2YXRlIHNhdmVBbnN3ZXJUaW1lID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGVuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGNvbnN0IHByZXZBbnN3ZXIgPSB0aGlzLmFuc3dlcnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG5cbiAgICBpZiAocHJldkFuc3dlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldkFuc3dlci50aW1lICs9IGVuZFRpbWUgLSB0aGlzLmFuc3dlclN0YXJ0VGltZTtcbiAgfTtcblxuICAvKipcbiAgICogRW5kIHF1aXouIERpc3BsYXlzIHJlc3VsdHMuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGVuZFF1aXooKSB7XG4gICAgdGhpcy5zYXZlQW5zd2VyVGltZSgpO1xuICAgIGV4Y2VyY2lzZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGF3YWl0IHNhdmVSZXN1bHRzKHRoaXMuYW5zd2VycywgdGhpcy5xdWl6Py5pZCB8fCBcIi0xXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcmVzdWx0cy9cIiArIHRoaXMucXVpej8uaWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFF1aXpOb0Fuc3dlcnMsIGdldFF1aXplcywgZ2V0UXVpeiB9IGZyb20gXCIuL3F1aXpcIjtcbmltcG9ydCB7IFF1aXpSdW4gfSBmcm9tIFwiLi9RdWl6UnVuXCI7XG5pbXBvcnQgeyBRdWl6UmVzdWx0cyB9IGZyb20gXCIuL1F1aXpSZXN1bHRzXCI7XG5pbXBvcnQgeyBxdWl6ZXNEaXYgfSBmcm9tIFwiLi9IVE1MRWxlbWVudHNcIjtcblxuLyoqXG4gKiBBZGRzIHF1aXogdG8gdGFibGUgb2YgYXZhaWxhYmxlIHF1aXplcy5cbiAqXG4gKiBAcGFyYW0gaWQgcXVpeiBpZFxuICogQHBhcmFtIHF1aXogcXVpeiBvYmplY3RcbiAqL1xuY29uc3QgYWRkUXVpelRvVGFibGUgPSAocXVpejogUXVpek5vQW5zd2VycykgPT4ge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBuYW1lQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWN0aW9uQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBidXR0b24uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgcXVpei1zdGFydC1idXR0b25cIjtcbiAgYnV0dG9uLmRhdGFzZXQucXVpeklkID0gcXVpei5pZDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuXG4gIGFjdGlvbkNvbC5jbGFzc05hbWUgPVxuICAgIFwiY29sLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI7XG4gIGFjdGlvbkNvbC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIG5hbWVDb2wuY2xhc3NOYW1lID0gXCJjb2wtOCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIjtcbiAgbmFtZUNvbC50ZXh0Q29udGVudCA9IHF1aXouZGVzYztcblxuICByb3cuY2xhc3NOYW1lID0gXCJyb3dcIjtcblxuICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbCk7XG4gIHJvdy5hcHBlbmRDaGlsZChhY3Rpb25Db2wpO1xuXG4gIHF1aXplc0Rpdi5hcHBlbmRDaGlsZChyb3cpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBhdmFpbGFibGUgcXVpemVzIGluIHRoZSB0YWJsZS5cbiAqL1xuY29uc3QgZGlzcGxheVF1aXplcyA9IGFzeW5jICgpID0+IHtcbiAgZm9yIGF3YWl0IChjb25zdCBxdWl6IG9mIGdldFF1aXplcygpKSB7XG4gICAgYWRkUXVpelRvVGFibGUocXVpeik7XG4gIH1cblxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcInF1aXotc3RhcnQtYnV0dG9uXCJcbiAgKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxCdXR0b25FbGVtZW50PjtcbiAgQXJyYXkuZnJvbShidXR0b25zKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgIG5ldyBRdWl6UnVuKGF3YWl0IGdldFF1aXooYnV0dG9uLmRhdGFzZXQucXVpeklkIHx8IFwiXCIpKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmRpc3BsYXlRdWl6ZXMoKTtcblxuUXVpelJlc3VsdHMuZGlzcGxheVByZXZpb3VzUmVzdWx0cygpO1xuIiwiaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSBcIi4vUXVpelJlc3VsdHNcIjtcbmltcG9ydCB7IFJhd1F1aXpSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgY3NyZlRva2VuIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9sb2dpblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXN0aW9uTm9BbnN3ZXIge1xuICBwcm9tcHQ6IHN0cmluZztcbiAgcGVuYWx0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXN0aW9uV2l0aEFuc3dlcnMge1xuICBwcm9tcHQ6IHN0cmluZztcbiAgcGVuYWx0eTogbnVtYmVyO1xuICBhbnN3ZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWl6Tm9BbnN3ZXJzIHtcbiAgZGVzYzogc3RyaW5nO1xuICBxdWVzdGlvbnM6IFF1ZXN0aW9uTm9BbnN3ZXJbXTtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWl6V2l0aEFuc3dlcnMge1xuICBkZXNjOiBzdHJpbmc7XG4gIHF1ZXN0aW9uczogUXVlc3Rpb25XaXRoQW5zd2Vyc1tdO1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuc3dlciB7XG4gIGFuc3dlcjogbnVtYmVyIHwgbnVsbDtcbiAgdGltZTogbnVtYmVyO1xuICBjb3JyZWN0OiBib29sZWFuO1xufVxuXG5jb25zdCBpc1F1ZXN0aW9uID0gKHF1ZXN0aW9uOiBhbnkpOiBxdWVzdGlvbiBpcyBRdWVzdGlvbk5vQW5zd2VyID0+IHtcbiAgcmV0dXJuIHF1ZXN0aW9uICYmIHF1ZXN0aW9uLnByb21wdCAmJiBxdWVzdGlvbi5hbnN3ZXIgJiYgcXVlc3Rpb24ucGVuYWx0eTtcbn07XG5cbmNvbnN0IGlzUXVpeiA9IChxdWl6OiBhbnkpOiBxdWl6IGlzIFF1aXpOb0Fuc3dlcnMgPT4ge1xuICByZXR1cm4gcXVpei5kZXNjICYmIHF1aXoucXVlc3Rpb25zICYmIHF1aXouaWQgIT09IHVuZGVmaW5lZDtcbn07XG5jb25zdCBpc1F1aXpXaXRoQW5zd2VycyA9IChxdWl6OiBhbnkpOiBxdWl6IGlzIFF1aXpXaXRoQW5zd2VycyA9PiB7XG4gIHJldHVybiBxdWl6LmRlc2MgJiYgcXVpei5xdWVzdGlvbnMgJiYgcXVpei5pZCAhPT0gdW5kZWZpbmVkO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHF1aXogd2l0aCBnaXZlbiBpZCBvciBudWxsIG9uIGVycm9yLlxuICogQHBhcmFtIGlkIHF1aXogaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFF1aXogPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVpek5vQW5zd2VycyB8IG51bGw+ID0+IHtcbiAgY29uc29sZS5sb2coaWQpO1xuICB0cnkge1xuICAgIGNvbnN0IHF1aXpSYXcgPSBhd2FpdCBmZXRjaChcIi9nZXRfcXVpei9cIiArIGlkKTtcbiAgICBjb25zdCBxdWl6ID0gYXdhaXQgcXVpelJhdy5qc29uKCk7XG5cbiAgICBpZiAoaXNRdWl6KHF1aXopKSB7XG4gICAgICByZXR1cm4gcXVpejtcbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHt9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFJldHVybnMgcXVpeiB3aXRoIGdpdmVuIGlkIG9yIG51bGwgb24gZXJyb3IuXG4gKiBAcGFyYW0gaWQgcXVpeiBpZFxuICovXG5leHBvcnQgY29uc3QgZ2V0UXVpeldpdGhBbnN3ZXJzID0gYXN5bmMgKFxuICBpZDogc3RyaW5nXG4pOiBQcm9taXNlPFF1aXpXaXRoQW5zd2VycyB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWl6UmF3ID0gYXdhaXQgZmV0Y2goXCIvZ2V0X3F1aXpfd2l0aF9hbnN3ZXJzL1wiICsgaWQpO1xuICAgIGNvbnN0IHF1aXogPSBhd2FpdCBxdWl6UmF3Lmpzb24oKTtcblxuICAgIGlmIChpc1F1aXpXaXRoQW5zd2VycyhxdWl6KSkge1xuICAgICAgcmV0dXJuIHF1aXo7XG4gICAgfVxuICB9IGNhdGNoIChfKSB7fVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0b3IgdGhhdCByZXR1cm5zIGFsbCBxdWl6ZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiogZ2V0UXVpemVzKCk6IEFzeW5jR2VuZXJhdG9yPFF1aXpOb0Fuc3dlcnM+IHtcbiAgY29uc3QgcXVpelJhdyA9IGF3YWl0IGZldGNoKFwiL2dldF9xdWl6ZXNcIik7XG4gIGNvbnN0IG9iaiA9IGF3YWl0IHF1aXpSYXcuanNvbigpO1xuICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBmb3IgKGNvbnN0IHF1aXogb2Ygb2JqKSB7XG4gICAgICBpZiAoaXNRdWl6KHF1aXopKSB7XG4gICAgICAgIHlpZWxkIHF1aXo7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcmV2UmVzdWx0cyA9IGFzeW5jICgpOiBQcm9taXNlPFJlc3VsdFtdPiA9PiB7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBmZXRjaChcIi9wcmV2X3Jlc3VsdHNcIik7XG4gIGNvbnN0IG9iaiA9IGF3YWl0IHJlc3VsdHMuanNvbigpO1xuICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gPFJlc3VsdFtdPm9iajtcbiAgfVxuICByZXR1cm4gW107XG59O1xuXG5jb25zdCBnZXRSYXdRdWl6UmVzdWx0cyA9IChhbnN3ZXJzOiBBbnN3ZXJbXSk6IFJhd1F1aXpSZXN1bHQgPT4ge1xuICBjb25zdCB0b3RhbFRpbWUgPSBhbnN3ZXJzLnJlZHVjZSgoc3VtLCBhbnMpID0+IHN1bSArIGFucy50aW1lLCAwKTtcbiAgY29uc3QgcXI6IFJhd1F1aXpSZXN1bHQgPSB7IGFuc3dlcnM6IFtdLCB0aW1lczogW10gfTtcbiAgYW5zd2Vycy5mb3JFYWNoKChhbnMpID0+IHtcbiAgICBxci5hbnN3ZXJzLnB1c2goPG51bWJlcj5hbnMuYW5zd2VyKTtcbiAgICBxci50aW1lcy5wdXNoKGFucy50aW1lIC8gdG90YWxUaW1lKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHFyO1xufTtcbmV4cG9ydCBjb25zdCBzYXZlUmVzdWx0cyA9IGFzeW5jIChhbnN3ZXJzOiBBbnN3ZXJbXSwgcXVpeklkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcXIgPSBnZXRSYXdRdWl6UmVzdWx0cyhhbnN3ZXJzKTtcbiAgY29uc29sZS5sb2cocXIsIGFuc3dlcnMsIEpTT04uc3RyaW5naWZ5KHFyKSk7XG4gIGF3YWl0IGZldGNoKFwiL3Bvc3RfcmVzdWx0cy9cIiArIHF1aXpJZCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ1NSRi1Ub2tlblwiOiBjc3JmVG9rZW4sXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShxciksXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFuc3dlcnMgPSBhc3luYyAocXVpeklkOiBzdHJpbmcpOiBQcm9taXNlPEFuc3dlcltdIHwgbnVsbD4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJhdyA9IGF3YWl0IGZldGNoKFwiL2dldF9hbnN3ZXJzL1wiICsgcXVpeklkKTtcbiAgICBjb25zdCBvYmogPSBhd2FpdCByYXcuanNvbigpO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIDxBbnN3ZXJbXT5vYmo7XG4gICAgfVxuICB9IGNhdGNoIChfKSB7fVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBhdmVyYWdlVGltZXMgPSBhc3luYyAoXG4gIHF1aXpJZDogc3RyaW5nXG4pOiBQcm9taXNlPG51bWJlcltdIHwgbnVsbD4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJhdyA9IGF3YWl0IGZldGNoKFwiL2dldF9hbnN3ZXJzX21lYW5fdGltZS9cIiArIHF1aXpJZCk7XG4gICAgY29uc3Qgb2JqID0gYXdhaXQgcmF3Lmpzb24oKTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiA8bnVtYmVyW10+b2JqO1xuICAgIH1cbiAgfSBjYXRjaCAoXykge31cbiAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IGNvbnN0IHRvcFNjb3JlcyA9IGFzeW5jIChcbiAgcXVpeklkOiBzdHJpbmdcbik6IFByb21pc2U8W1VzZXIsIFJlc3VsdF1bXSB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBhd2FpdCBmZXRjaChcIi90b3Bfc2NvcmVzL1wiICsgcXVpeklkKTtcbiAgICBjb25zdCBvYmogPSBhd2FpdCByYXcuanNvbigpO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIDxbVXNlciwgUmVzdWx0XVtdPm9iajtcbiAgICB9XG4gIH0gY2F0Y2ggKF8pIHt9XG4gIHJldHVybiBudWxsO1xufTtcbiIsIi8qKlxuICogRnVuY3Rpb24gdGhhdCBsb2dzIGVycm9ycy5cbiAqIE1heSBpbiB0aGUgZnV0dXJlIGJlIG92ZXJ3cml0ZW4gdG8gZnVuY3Rpb24gdGhhdCBkaXNwbGF5IGVycm9yIG9uIHNjcmVlbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGVycm9yID0gKHM6IHN0cmluZykgPT4gYWxlcnQocyk7XG5cbmV4cG9ydCBjb25zdCBjc3JmVG9rZW4gPVxuICBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpPy5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpIHx8XG4gIFwiXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9