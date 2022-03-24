const questionAndAnswer = [
    {
        question: "What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
        a: "1910",
        b: "1915",
        c: "1912",
        d: "1921",
        correctAnswer: "1912"
    },
    {
        question: "What is the name of the biggest technology company in South Korea?",
        a: "Nissan",
        b: "Samsung",
        c: "Hitachi",
        d: "Toshiba",
        correctAnswer: "Samsung"
    },
    {
        question: "What is the chemical symbol for silver?",
        a: "Ag",
        b: "A",
        c: "Ar",
        d: "Sv",
        correctAnswer: "Ag"
    },
    {
        question: "What country won the 1982 World Cup in Spain defeating West Germany 3-1?",
        a: "England",
        b: "Argentina",
        c: "Brasil",
        d: "Italy",
        correctAnswer: "Italy"
    },
    {
        question: "What is the furthest you can see with the naked eye?",
        a: "25km",
        b: "110Km",
        c: "2.5 million light years",
        d: "1 milion Km",
        correctAnswer: "2.5 million light years"
    },
    {
        question: "If you could process a billion atoms per second, how long in years would it take to teleport a typical human being?",
        a: "10 minutes",
        b: "200 billion years",
        c: "3 hours and 25 minutes",
        d: "3Days 5 hours and 30 minutes",
        correctAnswer: "200 billion years"
    },
    {
        question: "Year of foundation of the first university founded in Bologna, Italy",
        a: "1088",
        b: "1267",
        c: "1143",
        d: "1545",
        correctAnswer: "1088"
    },
    {
        question: "Who was the first woman to win a Nobel Prize (in 1903)?",
        a: "Jane Austen",
        b: "Marie Curie",
        c: "Harriet Beecher Stowe",
        d: "Grace Darling",
        correctAnswer: "Marie Curie"
    },
    {
        question: "What part of the atom has no electric charge?",
        a: "Neutron",
        b: "Electron",
        c: "Proton",
        d: "Nulltron",
        correctAnswer: "Neutron"
    },
    {
        question: "Which country produces the most coffee in the world?",
        a: "Brazil",
        b: "India",
        c: "Columbia",
        d: "Ethiopia",
        correctAnswer: "Brazil"
    },
    {
        question: "What percentage of our bodies is made up of water?",
        a: "80-85%",
        b: "70-75%",
        c: "50-55%",
        d: "60-65%",
        correctAnswer: "60-65%"
    },
    {
        question: "What is the capital of New Zealand?",
        a: "Auckland",
        b: "Christchurch",
        c: "Wellington",
        d: "Canberra",
        correctAnswer: "Wellington"
    },
    {
        question: "Which city in India would you find the Taj Mahal in?",
        a: "New Delhi",
        b: "Agra",
        c: "Surat",
        d: "Bengaluru",
        correctAnswer: "Agra"
    },
    {
        question: "Which country did AC/DC originate in?",
        a: "New Zealand",
        b: "England",
        c: "USA",
        d: "Australia",
        correctAnswer: "Australia"
    },
    {
        question: "Which Indiana Jones movie was released back in 1984?",
        a: "Raiders of the Lost Ark ",
        b: "Indiana Jones and the Last Crusade",
        c: "Indiana Jones and the Temple of Doom",
        d: "Indiana Jones and the Kingdom of the Crystal Skull",
        correctAnswer: "Indiana Jones and the Temple of Doom"
    },
    {
        question: "How many molecules of oxygen does ozone have?",
        a: "1",
        b: "3",
        c: "0",
        d: "2",
        correctAnswer: "3"
    },
];

const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerA = document.getElementById("a_text");
const answerB = document.getElementById("b_text");
const answerC = document.getElementById("c_text");
const answerD = document.getElementById("d_text");
const subEl = document.getElementById("submit");

const tot = questionAndAnswer.length;
var currentQuestion = 0;
var arrayOfCorrectAnswers = [];
var arrayOfFalseAnswers = [];
var score = 0;

// TODO opening presentation
// const startQuiz = () => {
//     quizEl.innerHTML = 
//     `<h2>Hi!</h2>
//     <h2>Here you will find a quiz consisting of ${tot} questions</h2>
//     <h2>At the end you will be shown the wrong answers, if any</h2>
//     <h2>Good Luck!</h2>
//     <button id="start">START</button>`;

//     const start = document.getElementById("start");
//     start.addEventListener('click', () => {
//         const go = "go";
//         console.log(go)
        
//     })

//     // return "go"
    
    
// }

// const ciao = startQuiz();


// console.log(ciao)

const quiz = () => {
    // console.log(currentQuestion)
    const currentQuiz = questionAndAnswer[currentQuestion];

    questionEl.innerText = currentQuiz.question;
    answerA.innerText = currentQuiz.a;
    answerB.innerText = currentQuiz.b;
    answerC.innerText = currentQuiz.c;
    answerD.innerText = currentQuiz.d;
}

const getSelected = () => {
    const answerEl = document.querySelectorAll(".answer");
    for (let i = 0; i < answerEl.length; i++) {
        if (answerEl[i].checked) {
            return answerEl[i].id;
        }
    }
}

subEl.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        // store the answer and wich one are corrects
        if (questionAndAnswer[currentQuestion][answer] === questionAndAnswer[currentQuestion].correctAnswer) {
            score++;
            arrayOfCorrectAnswers.push(questionAndAnswer[currentQuestion].question, questionAndAnswer[currentQuestion][answer])
            // console.log(arrayOfCorrectAnswers);
        }
        else {
            let falseAnswer = questionAndAnswer[currentQuestion][answer];
            arrayOfFalseAnswers.push(questionAndAnswer[currentQuestion].question, falseAnswer, questionAndAnswer[currentQuestion].correctAnswer)
            // console.log(arrayOfFalseAnswers)
        }

        // if there is more question go haed but before delete the checked box and add the next question number
        const len = questionAndAnswer.length - 1
        if (currentQuestion < len) {
            const uncheck = document.querySelectorAll(".answer");
            for (let i = 0; i < uncheck.length; i++) {
                if (uncheck[i].checked) {
                    uncheck[i].checked = false;
                }
            }
            currentQuestion++;
            quiz();
        }
        else {
            // alert("you have finish the quiz");
            if (score != tot) {
                quizEl.innerHTML =
                    `<h2><b>You have answered correctly ${score} times out of ${tot}</b></h2>
                    <h2>click here to see your wrong answers</h2>
                    <button id="controll">Check the wrong answers</button>`

                var i = 0;
                const prova = () => {
                    controll.addEventListener('click', () => {

                        let o = i + 1;
                        let p = o + 1;

                        let q = arrayOfFalseAnswers[i];
                        let a = arrayOfFalseAnswers[o];
                        let c = arrayOfFalseAnswers[p];
                        i += 3;
                        if (o < arrayOfFalseAnswers.length) {
                            quizEl.innerHTML =
                                `<h2>Question:</h2>
                            <h2><b>${q}</b></h2>
                            <h2>Your answer was:</h2>
                            <h2><b>${a}</b></h2>
                            <h2>The correct answer was:</h2>
                            <h2><b>${c}</b></h2>
                            <button id="controll">Next</button>`;
                            prova();
                        } else {
                            quizEl.innerHTML =
                                `<h2>Try one more time</h2>
                                <h2>To start again, press F5</h2>`
                        }
                    })
                }
                prova();
            }
            else {
                quizEl.innerHTML =
                    `<h2>Your answered correctly ${score} times out of ${tot}</h2> 
                <h2>CONGRATULATIONS!</h2>`
            }
        }
    }
    else {
        alert("you should choose an answer");
    }
});

quiz();