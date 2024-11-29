const questions = content

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const optionsSelected = [];
let selected = false;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    document.getElementById("answer-buttons").innerHTML = "";
    document.getElementById("navigator").innerHTML = "";
    if(currentQuestionIndex == 0){
        const button = document.createElement("button");
        button.innerHTML = "Next";
        button.classList.add("ends");
        button.setAttribute('id', "next");
        button.style.backgroundColor = "#071c95"
        document.getElementById("navigator").appendChild(button);
        document.getElementById("next").addEventListener('click', function(e){
            nextQuestion();
        })
    }else if(currentQuestionIndex == (questions.length -1)){
        const button = document.createElement("button");
        button.innerHTML = "Previous";
        button.classList.add("ends");
        button.setAttribute('id', "prev");
        button.style.backgroundColor = "grey"
        document.getElementById("navigator").appendChild(button);
        document.getElementById("prev").addEventListener('click', function(e){
            prevQuestion();
        })
    }
    else{
        const button = document.createElement("button");
        const button2 = document.createElement("button");
        button.innerHTML = "Previous";
        button2.innerHTML = "Next";
        button.classList.add("prev-btn");
        button2.classList.add("next-btn");
        button.setAttribute('id', "prev")
        button2.setAttribute('id', "next");
        button.style.backgroundColor = "grey"
        button2.style.backgroundColor = "#071c95"
        document.getElementById("navigator").appendChild(button);
        document.getElementById("navigator").appendChild(button2);
        document.getElementById("next").addEventListener('click', function(e){
            nextQuestion();
        })
        document.getElementById("prev").addEventListener('click', function(e){
            prevQuestion();
        })
    }
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    for (option of currentQuestion.options){
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("opt");
        answerButtons.appendChild(button);
    }
    showSelected();
    answerButtons.addEventListener('click', function(e){
        if(e.target && e.target.nodeName == "BUTTON"){
            validateAnswer(e.target);
        }
    })
}
function showSelected(){
    let allOptions = document.getElementsByClassName("opt");
    for (option of allOptions){
        if(option.innerHTML == optionsSelected[currentQuestionIndex]){
            console.log("Yes")
            option.classList.add("selected");
        }else{
            option.classList.remove("selected");
        }
    }
}
function validateAnswer(optionChosen){
    selectedAnswer = optionChosen.innerHTML;
    optionsSelected[currentQuestionIndex] = selectedAnswer;
    showSelected();
    console.log(optionsSelected)
}

function nextQuestion(){
    currentQuestionIndex++;
    showQuestion();
}
function prevQuestion(){
    currentQuestionIndex--;
    showQuestion();
}
startQuiz();