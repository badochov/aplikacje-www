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
function fib(n) {
    return __awaiter(this, void 0, void 0, function* () {
        if (n < 2) {
            return Promise.resolve(n);
        }
        return (yield fib(n - 1)) + (yield (fib(n - 2)));
    });
}
exports.fib = fib;
function fib_sync(n) {
    if (n < 2) {
        return n;
    }
    return fib_sync(n - 1) + fib_sync(n - 2);
}
exports.fib_sync = fib_sync;
