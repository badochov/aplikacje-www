import express from "express";
import csurf from "csurf";
import cookieParser from "cookie-parser";
import { getMostExpensive, getMeme } from "./memes";
import session from "express-session";
//@ts-ignore
import SQLiteStore from "connect-sqlite3";

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
    saveUninitialized: true,
    store: new (SQLiteStore(session))("./sessions.sqlite"),
    cookie: { maxAge: 60 * 1000 * 15 },
  })
);

interface SessionRequest {
  session: any;
}

const updateAndGetVisits = (req: SessionRequest) => {
  if (req.session.visits !== undefined) {
    req.session.visits++;
  } else {
    req.session.visits = 1;
  }
  return req.session.visits;
};

app.get("/", async (req, res) => {
  const visitNo = updateAndGetVisits(<SessionRequest>req);
  res.render("index", {
    title: "Meme market",
    message: "Hello there!",
    memes: await getMostExpensive(),
    visit: visitNo,
  });
});
app.get("/meme/:memeId", async (req, res) => {
  const visitNo = updateAndGetVisits(<SessionRequest>req);
  const meme = await getMeme(req.params.memeId);
  if (meme) {
    res.render("meme", {
      title: "Meme price history",
      meme: meme,
      priceHistory: await meme.getPriceHistory(),
      csrfToken: req.csrfToken(),
      visit: visitNo,
    });
  } else {
    res.status(404).send("Requested page doesn't exists!");
  }
});
app.post("/meme/:memeId", async (req, res) => {
  const meme = await getMeme(req.params.memeId);
  const price = req.body.price;
  if (meme) {
    meme.changePrice(price);
  }
  res.redirect(req.url);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
