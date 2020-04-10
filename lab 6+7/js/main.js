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
// const submitButton = document.querySelector("input[type=submit]");
// if (submitButton instanceof HTMLInputElement) {
//     submitButton.style.display = "none";
// }
const fib_1 = require("./fib");
const nameInput = document.querySelector("input[name=fullname]");
if (nameInput instanceof HTMLInputElement) {
    nameInput.onchange = () => {
        console.log(nameInput.value);
    };
}
const dateInput = document.querySelector("input[name=date]");
if (dateInput instanceof HTMLInputElement) {
    dateInput.onchange = () => {
        console.log(dateInput.value);
    };
}
const p = document.getElementsByTagName("p")[0];
if (p instanceof HTMLParagraphElement) {
    p.innerHTML = "42";
}
const newEl = document.createElement("div");
newEl.innerText = "Nowy element";
document.body.appendChild(newEl);
const timeout = setTimeout(() => {
    console.log("No już wreszcie.");
}, 2000);
const form = document.querySelector("form#booking");
const getToday = () => {
    return new Date().toISOString().split("T")[0];
};
const validationErrorEl = document.querySelector("#validation-error");
if (validationErrorEl instanceof HTMLDivElement) {
    const closeValidationErrorButton = validationErrorEl.getElementsByTagName("button")[0];
    if (closeValidationErrorButton instanceof HTMLButtonElement) {
        closeValidationErrorButton.onclick = () => {
            validationErrorEl.style.display = "none";
        };
    }
}
const displayValidationErrorMsg = (text) => {
    if (validationErrorEl instanceof HTMLDivElement) {
        const validationP = validationErrorEl.getElementsByTagName("p")[0];
        if (validationP instanceof HTMLParagraphElement) {
            validationErrorEl.style.display = "block";
            validationP.innerText = text;
            return true;
        }
    }
    return false;
};
if (form instanceof HTMLFormElement) {
    const submitButton = form.querySelector("input[type=submit]");
    submitButton.disabled = true;
    const validateForm = () => {
        if (nameInput.value === "") {
            displayValidationErrorMsg("Imię i nazwisko nie może być puste");
            return false;
        }
        if (dateInput.value < getToday()) {
            displayValidationErrorMsg("Data nie może być wcześniejsza niż dzisiaj");
            return false;
        }
        const fd = new FormData(form);
        const data = {};
        for (const [key, value] of fd.entries()) {
            console.log(key, value);
            data[key] = value;
        }
        return prompt("Czy podane dane są poprawne ?\n\n" + JSON.stringify(data));
    };
    form.onsubmit = validateForm;
    form.oninput = () => {
        if (nameInput.value.split(" ").length > 1
            && dateInput.value >= getToday()) {
            for (const select of Array.from(form.querySelectorAll("select"))) {
                if (select.value === "") {
                    return;
                }
            }
            submitButton.disabled = false;
        }
    };
}
const wait = (ms) => new Promise((resolve, reject) => window.setTimeout(resolve, ms));
function teczoweKolory2(el) {
    return __awaiter(this, void 0, void 0, function* () {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
        let p = Promise.resolve();
        for (const color of colors) {
            p = p.then(() => wait(1000)).then(() => {
                el.style.backgroundColor = color;
            });
        }
    });
}
function teczoweKolory(el) {
    return __awaiter(this, void 0, void 0, function* () {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
        for (const color of colors) {
            yield wait(1000);
            el.style.backgroundColor = color;
        }
    });
}
teczoweKolory(form);
const getLatestCommitAuthor = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield fetch(url);
    const json = yield raw.json();
    const authorURL = json[0].author.url;
    const rawAuthor = yield fetch(authorURL);
    const authorJson = yield rawAuthor.json();
    return authorJson;
});
const setLatestCommitAuthorProfilePicture = (author) => {
    const avatarURL = author.avatar_url;
    const ts = document.getElementById("ts");
    const img = document.createElement("img");
    img.setAttribute("alt", "Latest TS Commit Author");
    img.setAttribute("src", avatarURL);
    ts.appendChild(img);
};
const getAuthorsRepos = (author) => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield fetch(author.repos_url);
    const json = yield raw.json();
    const repos = [];
    for (const [i, repo] of Object.entries(json)) {
        repos.push(repo["name"]);
    }
    return repos.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
});
const latestTSCommit = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield getLatestCommitAuthor(url);
    setLatestCommitAuthorProfilePicture(author);
    console.table(yield getAuthorsRepos(author));
});
latestTSCommit("https://api.github.com/repos/Microsoft/TypeScript/commits");
const main = document.getElementById("main-page");
const delayed = document.getElementById("delayed");
const booking = document.getElementById("booking");
let clickNumber = 0;
booking.onclick = (e) => {
    e.stopPropagation();
};
main.onclick = (e) => {
    const el = e.target;
    fib_1.fib(Math.pow(10, clickNumber));
    clickNumber++;
    if (delayed.contains(el)) {
        el.style.backgroundColor = getRandomColor();
    }
};
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
