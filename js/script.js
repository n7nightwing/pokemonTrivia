const questionForm = document.body.querySelector('#question');
const answerForm = document.body.querySelectorAll('.answers');
const button1 = document.body.querySelector('#one');
const button2 = document.body.querySelector('#two');
const button3 = document.body.querySelector('#three');
const button4 = document.body.querySelector('#four');
button1.addEventListener('click', () => buttonClick(0));
button2.addEventListener('click', () => buttonClick(1));
button3.addEventListener('click', () => buttonClick(2));
button4.addEventListener('click', () => buttonClick(3));
document.querySelector('#resetButton').addEventListener('click', reset)

let qIndex = 0;
let score = 0;

class Question {
    constructor(prompt, correct, answers) {
        this.prompt = prompt;
        this.correct = correct;
        this.answers = answers;
    }
    updateForm() {
        questionForm.innerHTML = this.prompt;
        let i = 0;
        for(let i = 0; i <= this.answers.length - 1; i++) {
            console.log("answer form", answerForm[i]);
            console.log(this.answers[i]);
            answerForm[i].textContent = this.answers[i];
        }
    }
}

const question1 = new Question("How can you obtain a shiny charm in Pokemon games after Black 2/White 2?", 0, ["Completing your Pokedex", "Beating the Elite Four", "Stealing them from Team Rocket", "Cheat Codes"]);
const question2 = new Question("Which of the following is a starter in Pokemon Sword/Shield?", 2, ["Blaziken", "Torchic", "Grookey", "Conkeldurr"]);
const question3 = new Question("Which of the following is super effective against ghost type Pokemon?", 0, ["Ghost", "Normal", "Fire", "Fairy"]);
const question4 = new Question("Which of these types is super effective against Dragon type Pokemon?", 3, ["Pikachu", "Normal", "Ground", "Fairy"]);
const question5 = new Question("Which of the following pokemon is not a starter from the Hoenn Region? (Gen3/Ruby/Sapphire)", 3, ["Mudkip", "Torchic", "Treecko", "Piplup"]);

const qArray = [question1, question2, question3, question4, question5];

function scoring() {
    document.querySelector("#score").textContent = "score: " + score;
}

function nextQuestion() {
    qIndex += 1;
    if (qIndex >= qArray.length) {
        document.querySelector('#question').textContent = `Congratulations! You have completed the quiz with ${score} points`
        document.querySelector('#answers').style.display = "none"
    }
    qArray[qIndex].updateForm();
}

function reset() {
    document.querySelector('#question').style.display = "flex";
    document.querySelector('#answers').style.display = "flex";
    document.querySelector('#answers').style.flexDirection = "column";
    score = 0;
    qIndex = 0;
    scoring()
    qArray[qIndex].updateForm();
}

function buttonClick(choice) {
    if (qArray[qIndex].correct === choice) {
        score +=1;
        scoring();
        nextQuestion();
    }
    else {
        alert("Incorrect")
        nextQuestion()
    }
}

question1.updateForm();