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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var quiz_1 = __webpack_require__(/*! ./quiz */ "./src/quiz.ts");
var answerInput = document.getElementById('answer');
var nextButton = document.getElementById('next');
var previousButton = document.getElementById('previous');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var promptSpan = document.getElementById('prompt');
var excerciseNumberSpan = document.getElementById('excercise-number');
var excerciseSection = document.getElementById('excercise');
var penaltyTimeSpan = document.getElementById('penalty-time');
var descParagraph = document.getElementById('desc');
var resultsDiv = document.getElementById('results');
var resultSection = document.getElementById('result');
var saveButton = document.getElementById('save');
var saveWithStatsButton = document.getElementById('save-with-stats');
/**
 * May in the future be overwriten to function that display error on screen
 */
var error = console.error;
var QuizRun = /** @class */ (function () {
    function QuizRun(quizName) {
        var _this = this;
        if (quizName === void 0) { quizName = 'example'; }
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
        this.saveAnswer = function () {
            var prevAnswer = _this.answers[_this.questionNumber];
            if (prevAnswer == null) {
                return;
            }
            var answer = parseInt(answerInput.value);
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
        this.saveAnswerTime = function () {
            var endTime = performance.now();
            var prevAnswer = _this.answers[_this.questionNumber];
            if (prevAnswer == null) {
                return;
            }
            prevAnswer.time += endTime - _this.answerStartTime;
        };
    }
    QuizRun.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, quiz_1.getQuiz(this.quizName)];
                    case 1:
                        _a.quiz = _b.sent();
                        if (this.quiz == null) {
                            error('Podany quiz nie istnieje');
                            return [2 /*return*/];
                        }
                        else if (this.quiz.questions.length == 0) {
                            error('Podany quiz ma za mało pytań');
                            return [2 /*return*/];
                        }
                        descParagraph.textContent = this.quiz.desc;
                        this.quiz.questions.forEach(function () {
                            _this.answers.push({ time: 0, answer: null, correct: false });
                            _this.penalties.push(0);
                        });
                        this.bindEventHandlers();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizRun.prototype.bindEventHandlers = function () {
        var _this = this;
        answerInput.oninput = function () {
            console.warn(1234);
            _this.saveAnswer();
            stopButton.disabled = _this.answers.some(function (a) { return a.answer === null; });
        };
        startButton.onclick = function () {
            excerciseSection.style.display = 'block';
            startButton.style.display = 'none';
            _this.changeQuestion();
        };
        nextButton.onclick = function () {
            _this.saveAnswerTime();
            _this.questionNumber++;
            _this.changeQuestion();
        };
        previousButton.onclick = function () {
            _this.saveAnswerTime();
            _this.questionNumber--;
            _this.changeQuestion();
        };
        stopButton.onclick = function () {
            _this.endQuiz();
        };
    };
    /**
  * Changes current question to given.
  * Sets prevAnswerStartTime to  current timestamp.
  */
    QuizRun.prototype.changeQuestion = function () {
        if (this.quiz === null) {
            return;
        }
        var question = this.quiz.questions[this.questionNumber];
        excerciseNumberSpan.textContent = (this.questionNumber + 1).toString();
        promptSpan.textContent = question.prompt;
        penaltyTimeSpan.textContent = question.penalty.toString();
        var answer = this.answers[this.questionNumber].answer;
        answerInput.value = answer === null ? '' : answer.toString();
        previousButton.disabled = this.questionNumber === 0;
        nextButton.disabled = this.questionNumber === this.quiz.questions.length - 1;
        this.answerStartTime = performance.now();
    };
    QuizRun.prototype.endQuiz = function () {
        this.saveAnswerTime();
        excerciseSection.style.display = 'none';
        this.quizResults = new QuizResults(this.answers, this.quiz);
    };
    return QuizRun;
}());
var QuizResults = /** @class */ (function () {
    function QuizResults(answers, quiz) {
        this.answers = answers;
        this.quiz = quiz;
        this.penalties = [];
        this.finalTime = 0;
        this.bindEventHandlers();
        this.checkAnswers();
        this.givePenalties();
        this.calculateFinalTime();
        this.show();
    }
    QuizResults.prototype.checkAnswers = function () {
        if (this.quiz !== null) {
            for (var i in this.answers) {
                this.answers[i].correct = this.answers[i].answer === this.quiz.questions[i].answer;
            }
        }
    };
    QuizResults.prototype.givePenalties = function () {
        if (this.quiz !== null) {
            for (var i in this.answers) {
                this.penalties.push(this.answers[i].correct ? 0 : this.quiz.questions[i].penalty);
            }
        }
    };
    QuizResults.prototype.bindEventHandlers = function () {
        var _this = this;
        saveWithStatsButton.onclick = function () { return _this.saveWithStats(); };
        saveButton.onclick = function () { return _this.save(); };
    };
    QuizResults.prototype.saveWithStats = function () {
        localStorage.setItem('run1', JSON.stringify(this.answers));
    };
    QuizResults.prototype.save = function () {
        localStorage.setItem('run1', JSON.stringify(this.finalTime));
    };
    QuizResults.prototype.calculateFinalTime = function () {
        this.finalTime = 0;
        for (var _i = 0, _a = this.penalties; _i < _a.length; _i++) {
            var p = _a[_i];
            this.finalTime += p;
        }
        for (var _b = 0, _c = this.answers; _b < _c.length; _b++) {
            var ans = _c[_b];
            this.finalTime += ans.time / 1000;
        }
    };
    QuizResults.prototype.show = function () {
        resultSection.style.display = 'block';
        resultsDiv.textContent = JSON.stringify(this.answers) + JSON.stringify(this.penalties);
    };
    return QuizResults;
}());
var quizRun = new QuizRun();
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var isQuestion = function (question) {
    return question && question.prompt && question.answer && question.penalty;
};
var isQuiz = function (quiz) {
    return quiz.desc && quiz.questions;
};
exports.getQuiz = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var raw, obj, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("/quizes/" + name + ".json")];
            case 1:
                raw = _a.sent();
                return [4 /*yield*/, raw.json()];
            case 2:
                obj = _a.sent();
                if (isQuiz(obj)) {
                    return [2 /*return*/, Promise.resolve(obj)];
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, Promise.resolve(null)];
        }
    });
}); };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1aXoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLGdFQUF5RDtBQUV6RCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBcUIsQ0FBQztBQUMxRSxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQztBQUN4RSxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQztBQUNoRixJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBc0IsQ0FB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QUMsQ0FBQzs7b0JBRXBCLHNCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUM7OztLQUM3QixDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgZ2V0UXVpeiwgUXVpeiwgUXVlc3Rpb24sIEFuc3dlciB9IGZyb20gJy4vcXVpeic7XG5cbmNvbnN0IGFuc3dlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3Qgc3RvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBwcm9tcHRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb21wdCcpIGFzIEhUTUxTcGFuRWxlbWVudDtcbmNvbnN0IGV4Y2VyY2lzZU51bWJlclNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhjZXJjaXNlLW51bWJlcicpIGFzIEhUTUxTcGFuRWxlbWVudDtcbmNvbnN0IGV4Y2VyY2lzZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhjZXJjaXNlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBwZW5hbHR5VGltZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVuYWx0eS10aW1lJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuY29uc3QgZGVzY1BhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5jb25zdCByZXN1bHRzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IHJlc3VsdFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IHNhdmVXaXRoU3RhdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS13aXRoLXN0YXRzJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbi8qKlxuICogTWF5IGluIHRoZSBmdXR1cmUgYmUgb3ZlcndyaXRlbiB0byBmdW5jdGlvbiB0aGF0IGRpc3BsYXkgZXJyb3Igb24gc2NyZWVuXG4gKi9cbmNvbnN0IGVycm9yID0gY29uc29sZS5lcnJvcjtcblxuY2xhc3MgUXVpelJ1biB7XG5cdHByaXZhdGUgcXVlc3Rpb25OdW1iZXI6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgYW5zd2VyU3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHF1aXo6IFF1aXogfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBhbnN3ZXJzOiBBbnN3ZXJbXSA9IFtdO1xuXHRwcml2YXRlIHBlbmFsdGllczogbnVtYmVyW10gPSBbXTtcblx0cHJpdmF0ZSBxdWl6UmVzdWx0czogUXVpelJlc3VsdHMgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHF1aXpOYW1lOiBzdHJpbmcgPSAnZXhhbXBsZScpIHt9XG5cblx0cHVibGljIGFzeW5jIGJ1aWxkKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRoaXMucXVpeiA9IGF3YWl0IGdldFF1aXoodGhpcy5xdWl6TmFtZSk7XG5cdFx0aWYgKHRoaXMucXVpeiA9PSBudWxsKSB7XG5cdFx0XHRlcnJvcignUG9kYW55IHF1aXogbmllIGlzdG5pZWplJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIGlmICh0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRlcnJvcignUG9kYW55IHF1aXogbWEgemEgbWHFgm8gcHl0YcWEJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGRlc2NQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0aGlzLnF1aXouZGVzYztcblxuXHRcdHRoaXMucXVpei5xdWVzdGlvbnMuZm9yRWFjaCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFuc3dlcnMucHVzaCh7IHRpbWU6IDAsIGFuc3dlcjogbnVsbCwgY29ycmVjdDogZmFsc2UgfSk7XG5cdFx0XHR0aGlzLnBlbmFsdGllcy5wdXNoKDApO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5iaW5kRXZlbnRIYW5kbGVycygpO1xuXHR9XG5cblx0cHJpdmF0ZSBiaW5kRXZlbnRIYW5kbGVycygpOiB2b2lkIHtcblx0XHRhbnN3ZXJJbnB1dC5vbmlucHV0ID0gKCkgPT4ge1xuXHRcdFx0Y29uc29sZS53YXJuKDEyMzQpO1xuXHRcdFx0dGhpcy5zYXZlQW5zd2VyKCk7XG5cblx0XHRcdHN0b3BCdXR0b24uZGlzYWJsZWQgPSB0aGlzLmFuc3dlcnMuc29tZSgoYSkgPT4gYS5hbnN3ZXIgPT09IG51bGwpO1xuXHRcdH07XG5cblx0XHRzdGFydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0ZXhjZXJjaXNlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdHN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0XHRcdHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcblx0XHR9O1xuXG5cdFx0bmV4dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlQW5zd2VyVGltZSgpO1xuXHRcdFx0dGhpcy5xdWVzdGlvbk51bWJlcisrO1xuXG5cdFx0XHR0aGlzLmNoYW5nZVF1ZXN0aW9uKCk7XG5cdFx0fTtcblxuXHRcdHByZXZpb3VzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVBbnN3ZXJUaW1lKCk7XG5cdFx0XHR0aGlzLnF1ZXN0aW9uTnVtYmVyLS07XG5cblx0XHRcdHRoaXMuY2hhbmdlUXVlc3Rpb24oKTtcblx0XHR9O1xuXG5cdFx0c3RvcEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5lbmRRdWl6KCk7XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuICAqIENoYW5nZXMgY3VycmVudCBxdWVzdGlvbiB0byBnaXZlbi5cbiAgKiBTZXRzIHByZXZBbnN3ZXJTdGFydFRpbWUgdG8gIGN1cnJlbnQgdGltZXN0YW1wLlxuICAqL1xuXHRwcml2YXRlIGNoYW5nZVF1ZXN0aW9uKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnF1aXogPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcXVlc3Rpb24gPSB0aGlzLnF1aXoucXVlc3Rpb25zW3RoaXMucXVlc3Rpb25OdW1iZXJdO1xuXHRcdGV4Y2VyY2lzZU51bWJlclNwYW4udGV4dENvbnRlbnQgPSAodGhpcy5xdWVzdGlvbk51bWJlciArIDEpLnRvU3RyaW5nKCk7XG5cdFx0cHJvbXB0U3Bhbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uLnByb21wdDtcblx0XHRwZW5hbHR5VGltZVNwYW4udGV4dENvbnRlbnQgPSBxdWVzdGlvbi5wZW5hbHR5LnRvU3RyaW5nKCk7XG5cblx0XHRjb25zdCBhbnN3ZXIgPSB0aGlzLmFuc3dlcnNbdGhpcy5xdWVzdGlvbk51bWJlcl0uYW5zd2VyO1xuXHRcdGFuc3dlcklucHV0LnZhbHVlID0gYW5zd2VyID09PSBudWxsID8gJycgOiBhbnN3ZXIudG9TdHJpbmcoKTtcblxuXHRcdHByZXZpb3VzQnV0dG9uLmRpc2FibGVkID0gdGhpcy5xdWVzdGlvbk51bWJlciA9PT0gMDtcblx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gdGhpcy5xdWVzdGlvbk51bWJlciA9PT0gdGhpcy5xdWl6LnF1ZXN0aW9ucy5sZW5ndGggLSAxO1xuXG5cdFx0dGhpcy5hbnN3ZXJTdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0fVxuXG5cdC8qKlxuICAqIFNhdmVzIGNvbnRlc3RhbnRzIGFuc3dlciB0byBjdXJyZW50IHF1ZXN0aW9uLiBcbiAgKi9cblx0cHJpdmF0ZSBzYXZlQW5zd2VyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHByZXZBbnN3ZXIgPSB0aGlzLmFuc3dlcnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG5cblx0XHRpZiAocHJldkFuc3dlciA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYW5zd2VyID0gcGFyc2VJbnQoYW5zd2VySW5wdXQudmFsdWUpO1xuXHRcdGlmIChpc05hTihhbnN3ZXIpKSB7XG5cdFx0XHRwcmV2QW5zd2VyLmFuc3dlciA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByZXZBbnN3ZXIuYW5zd2VyID0gYW5zd2VyO1xuXHRcdH1cblx0fTtcblxuXHQvKipcbiAgKiBTYXZlcyBjb250ZXN0YW50cyBhbnN3ZXIgdGltZSB0byBjdXJyZW50IHF1ZXN0aW9uLlxuICAqL1xuXHRwcml2YXRlIHNhdmVBbnN3ZXJUaW1lID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGVuZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuXHRcdGNvbnN0IHByZXZBbnN3ZXIgPSB0aGlzLmFuc3dlcnNbdGhpcy5xdWVzdGlvbk51bWJlcl07XG5cblx0XHRpZiAocHJldkFuc3dlciA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cHJldkFuc3dlci50aW1lICs9IGVuZFRpbWUgLSB0aGlzLmFuc3dlclN0YXJ0VGltZTtcblx0fTtcblxuXHRwcml2YXRlIGVuZFF1aXooKSB7XG5cdFx0dGhpcy5zYXZlQW5zd2VyVGltZSgpO1xuXHRcdGV4Y2VyY2lzZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRcdHRoaXMucXVpelJlc3VsdHMgPSBuZXcgUXVpelJlc3VsdHModGhpcy5hbnN3ZXJzLCB0aGlzLnF1aXopO1xuXHR9XG59XG5cbmNsYXNzIFF1aXpSZXN1bHRzIHtcblx0cHJpdmF0ZSBwZW5hbHRpZXM6IG51bWJlcltdID0gW107XG5cdHByaXZhdGUgZmluYWxUaW1lOiBudW1iZXIgPSAwO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFuc3dlcnM6IEFuc3dlcltdLCBwcml2YXRlIHF1aXo6IFF1aXogfCBudWxsKSB7XG5cdFx0dGhpcy5iaW5kRXZlbnRIYW5kbGVycygpO1xuXHRcdHRoaXMuY2hlY2tBbnN3ZXJzKCk7XG5cdFx0dGhpcy5naXZlUGVuYWx0aWVzKCk7XG5cdFx0dGhpcy5jYWxjdWxhdGVGaW5hbFRpbWUoKTtcblx0XHR0aGlzLnNob3coKTtcblx0fVxuXG5cdHByaXZhdGUgY2hlY2tBbnN3ZXJzKCkge1xuXHRcdGlmICh0aGlzLnF1aXogIT09IG51bGwpIHtcblx0XHRcdGZvciAoY29uc3QgaSBpbiB0aGlzLmFuc3dlcnMpIHtcblx0XHRcdFx0dGhpcy5hbnN3ZXJzW2ldLmNvcnJlY3QgPSB0aGlzLmFuc3dlcnNbaV0uYW5zd2VyID09PSB0aGlzLnF1aXoucXVlc3Rpb25zW2ldLmFuc3dlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdpdmVQZW5hbHRpZXMoKSB7XG5cdFx0aWYgKHRoaXMucXVpeiAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChjb25zdCBpIGluIHRoaXMuYW5zd2Vycykge1xuXHRcdFx0XHR0aGlzLnBlbmFsdGllcy5wdXNoKHRoaXMuYW5zd2Vyc1tpXS5jb3JyZWN0ID8gMCA6IHRoaXMucXVpei5xdWVzdGlvbnNbaV0ucGVuYWx0eSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBiaW5kRXZlbnRIYW5kbGVycygpIHtcblx0XHRzYXZlV2l0aFN0YXRzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnNhdmVXaXRoU3RhdHMoKTtcblx0XHRzYXZlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnNhdmUoKTtcblx0fVxuXG5cdHByaXZhdGUgc2F2ZVdpdGhTdGF0cygpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncnVuMScsIEpTT04uc3RyaW5naWZ5KHRoaXMuYW5zd2VycykpO1xuXHR9XG5cblx0cHJpdmF0ZSBzYXZlKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdydW4xJywgSlNPTi5zdHJpbmdpZnkodGhpcy5maW5hbFRpbWUpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlRmluYWxUaW1lKCkge1xuXHRcdHRoaXMuZmluYWxUaW1lID0gMDtcblx0XHRmb3IgKGNvbnN0IHAgb2YgdGhpcy5wZW5hbHRpZXMpIHtcblx0XHRcdHRoaXMuZmluYWxUaW1lICs9IHA7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgYW5zIG9mIHRoaXMuYW5zd2Vycykge1xuXHRcdFx0dGhpcy5maW5hbFRpbWUgKz0gYW5zLnRpbWUgLyAxMDAwO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2hvdygpIHtcblx0XHRyZXN1bHRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdHJlc3VsdHNEaXYudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmFuc3dlcnMpICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wZW5hbHRpZXMpO1xuXHR9XG59XG5cbmNvbnN0IHF1aXpSdW4gPSBuZXcgUXVpelJ1bigpO1xucXVpelJ1bi5idWlsZCgpO1xuIiwiZXhwb3J0IGludGVyZmFjZSBRdWVzdGlvbiB7XG5cdHByb21wdDogc3RyaW5nO1xuXHRhbnN3ZXI6IG51bWJlcjtcblx0cGVuYWx0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1aXoge1xuXHRkZXNjOiBzdHJpbmc7XG5cdHF1ZXN0aW9uczogUXVlc3Rpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbnN3ZXIge1xuXHRhbnN3ZXI6IG51bWJlciB8IG51bGw7XG5cdHRpbWU6IG51bWJlcjtcblx0Y29ycmVjdDogYm9vbGVhbjtcbn1cblxuY29uc3QgaXNRdWVzdGlvbiA9IChxdWVzdGlvbjogYW55KTogcXVlc3Rpb24gaXMgUXVlc3Rpb24gPT4ge1xuXHRyZXR1cm4gcXVlc3Rpb24gJiYgcXVlc3Rpb24ucHJvbXB0ICYmIHF1ZXN0aW9uLmFuc3dlciAmJiBxdWVzdGlvbi5wZW5hbHR5O1xufTtcblxuY29uc3QgaXNRdWl6ID0gKHF1aXo6IGFueSk6IHF1aXogaXMgUXVpeiA9PiB7XG5cdHJldHVybiBxdWl6LmRlc2MgJiYgcXVpei5xdWVzdGlvbnM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UXVpeiA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFF1aXogfCBudWxsPiA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gYXdhaXQgZmV0Y2goYC9xdWl6ZXMvJHtuYW1lfS5qc29uYCk7XG5cdFx0Y29uc3Qgb2JqID0gYXdhaXQgcmF3Lmpzb24oKTtcblx0XHRpZiAoaXNRdWl6KG9iaikpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUob2JqKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0fVxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=