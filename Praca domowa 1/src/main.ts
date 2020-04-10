import { getQuiz } from "./quiz"

const main = async () => {
    const quiz = await getQuiz("example");
    if (quiz == null) {
        console.error("Podany quiz nie istnieje");
        return;
    }

    console.log(quiz);
}

main();