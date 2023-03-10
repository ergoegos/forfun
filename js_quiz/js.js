// Questions will be asked
const QUESTIONS = [{

    id: 1,
    q: "What is capital of India?",
    a: [{ text: "gandhinagar", isCorrect: false },
    { text: "Surat", isCorrect: false },
    { text: "Delhi", isCorrect: true },
    { text: "mumbai", isCorrect: false }
    ]

},
{
    id: 2,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
    { text: "phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 3,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
    { text: "vadodara", isCorrect: false },
    { text: "gandhinagar", isCorrect: true },
    { text: "rajkot", isCorrect: false }
    ]

}]

const div_score = document.getElementById("score");
const div_question = document.getElementById("question");
const div_answer = document.getElementById("answer");

function print(id) {

   
    
    div_question.innerText = 
    QUESTIONS[id] + 
    QUESTIONS[id].a.forEach(answer => answer.text);

}



// main javascript activity
addEventListener('DOMContentLoaded', function (event) {

    let questions_id = 1;
    let questions_score = 0;

    // get html elements
    let button_back = document.getElementById("back");
    let button_next = document.getElementById("next");
    let button_evaluate = document.getElementById("evaluate");

  

    const quest = () => div_question.innerHTML = "Question " + 

    // annonimous listener function
    button_back.addEventListener(
        "click",
        function () {
            if (questions_id != 1) questions_id -= 1;
            print(questions_id);
            // console.log(questions_navegation);
        }
    );

    // annonimous listener function
    button_next.addEventListener(
        "click",
        function () {
            if (questions_id != QUESTIONS.length) questions_id += 1;
            print(questions_id);
            // console.log(questions_navegation);   
        }
    );

    // not annonimous listener function
    const evaluate = () => div_score.innerHTML = "score:" + questions_score;
    button_evaluate.addEventListener(
        "click",
        print()
    );



});