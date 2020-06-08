import express from "express";
import csurf from "csurf";
import cookieParser from "cookie-parser";
import { getQuiz, getQuizes, didQuiz, prevResults } from "./quizes";
import session from "express-session";
//@ts-ignore
import SQLiteStore from "connect-sqlite3";
import {
  loggedInMiddleware,
  registerUser,
  loginUser,
  changePassword,
  logoutUser,
  User,
} from "./login";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use(express.static("views"));
app.use(
  session({
    secret: "f6e42f67904abd4d6ad031b24d697c9e",
    resave: false,
    store: new (SQLiteStore(session))(),
    saveUninitialized: false,
    cookie: { maxAge: 60 * 1000 * 15 },
  })
);

app.use(async (req, res, next) => {
  res.locals["user"] = req.session?.user;
  res.locals["csrfToken"] = req.csrfToken();
  next();
});

export interface SessionRequest extends express.Request {
  session: any;
  sessionId: string;
}

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/get_quizes", (req, res) => {
  res.json(getQuizes());
});

app.get("/get_quiz/:quiz_id", (req, res) => {
  res.json(getQuiz(req.params.quiz_id));
});

app.get("/can_do_quiz/:quiz_id", loggedInMiddleware, (req, res) => {
  res.json(didQuiz(req.params.quiz_id, <User>req.session?.user));
});

app.get("/prev_results/", loggedInMiddleware, (req, res) => {
  res.json(prevResults(<User>req.session?.user));
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    if (req.body["sign-up"] === "on") {
      if (!(await registerUser(username, password))) {
        return res.status(400).send("Podana nazwa użytkownika jest zajęta");
      }
    }
    if (await loginUser(<SessionRequest>req, username, password)) {
      return res.redirect("back");
    }
    return res
      .status(400)
      .send("Złe hasło lub podany użytkownik nie istnieje!");
  } catch (e) {
    console.error(e);
    return res.status(500).send("Internal server error");
  }
});

app.get("/change_password", async (req, res) => {
  console.log(req.query);
  return res.render("change_password", { error: req.query["error"] });
});

app.post("/change_password", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newPassword = req.body["new-password"];
  if (
    await changePassword(<SessionRequest>req, username, password, newPassword)
  ) {
    return res.redirect("/");
  }
  return res.redirect((req.header("Referer") || "/") + "?error=1");
});

app.post("/logout", async (req, res) => {
  logoutUser(<SessionRequest>req);
  res.redirect("back");
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
