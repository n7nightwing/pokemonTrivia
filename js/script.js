const questionForm = document.body.querySelector('#question');
const answerForm = document.body.querySelectorAll('.answers');
const button1 = document.body.querySelector('#one')
const button2 = document.body.querySelector('#two')
const button3 = document.body.querySelector('#three')
const button4 = document.body.querySelector('#four')
button1.addEventListener('click', () => buttonClick(0))
button2.addEventListener('click', () => buttonClick(1))
button3.addEventListener('click', () => buttonClick(2))
button4.addEventListener('click', () => buttonClick(3))
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

const question1 = new Question("How can you obtain a shiny charm in Pokemon games after Black 2/White 2", 0, ["Completing your Pokedex", "Beating the Elite Four", "Stealing them from Team Rocket", "Cheat Codes"]);
const question2 = new Question("Which of the following is a starter in Pokemon Sword/Shield", 2, ["Blaziken", "Torchic", "Grookey", "Conkeldurr"]);
const question3 = new Question("Which of the following is super effective against ghost type Pokemon", 0, ["Ghost", "Normal", "Fire", "Fairy"])
const question4 = new Question("Which of these types is super effective against Dragon type Pokemon", 3, ["Pikachu", "Normal", "Ground", "Fairy"])
const qArray = [question1, question2];

function scoring() {
    document.querySelector("#score").textContent = "score: " + score
}

function nextQuestion() {
    qIndex += 1;
    qArray[qIndex].updateForm();
}

function reset() {
    qIndex = 0;
    qArray[qIndex].updateForm();
}

function buttonClick(choice) {
    if (qArray[qIndex].correct === choice) {
        score +=1;
        scoring();
        nextQuestion();
    }
}

question1.updateForm();