const questions = content

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const optionsSelected = [];
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
        button.classList.add("prev-btn");
        button.setAttribute('id', "prev");
        button.style.backgroundColor = "grey"
        document.getElementById("navigator").appendChild(button);
        document.getElementById("prev").addEventListener('click', function(e){
            prevQuestion();
        })
        const button2 = document.createElement("button");
        button2.innerHTML = "Submit"
        button2.classList.add("next-btn");
        button2.setAttribute('id', "submit");
        button2.style.backgroundColor = "rgb(255, 94, 0)";
        document.getElementById("navigator").appendChild(button2);
        document.getElementById("submit").addEventListener('click', function(e){
            submitPage();
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
    console.log(optionsSelected);
}

function nextQuestion(){
    currentQuestionIndex++;
    showQuestion();
}
function nextQuestReview(){
    currentQuestionIndex++;
    showReview();
}

function prevQuestion(){
    currentQuestionIndex--;
    showQuestion();
}
function prevQuestReview(){
    currentQuestionIndex--;
    showReview();
}
function submitPage(){
    document.getElementById("answer-buttons").innerHTML = "";
    document.getElementById("navigator").innerHTML = "";
    document.querySelector("h2").innerHTML= "Confirm Submission";

    
    const button2 = document.createElement("button");
    button2.innerHTML = "Back";
    button2.classList.add("prev-btn");
    button2.setAttribute('id', "back")
    button2.style.backgroundColor = "grey"
    document.getElementById("navigator").appendChild(button2);
    document.getElementById("back").addEventListener('click', function(e){
        showQuestion()
    })
    const button = document.createElement("button");
    button.innerHTML = "Submit"
    button.classList.add("next-btn");
    button.setAttribute('id', "submit");
    button.style.backgroundColor = "rgb(255, 94, 0)";
    document.getElementById("navigator").appendChild(button);
    document.getElementById("submit").addEventListener('click', function(e){
        evaluateGrade();
    })
}
function evaluateGrade(){
    for(i = 0; i < questions.length; i++){
        if(optionsSelected[i] == questions[i].answer){
            score++
        }
    }
    console.log(score);
    showScore();
}
function showScore(){
    document.getElementById("answer-buttons").innerHTML = "";
    document.getElementById("navigator").innerHTML = "";

    document.querySelector("h2").innerHTML = "You scored " + score + " of " + questions.length;
    const button = document.createElement("button");
    button.innerHTML = "Review"
    button.classList.add("prev-btn");
    button.setAttribute('id', "review");
    button.style.backgroundColor = "rgb(255, 94, 0)";
    document.getElementById("navigator").appendChild(button);
    document.getElementById("review").addEventListener('click', function(e){
        startReview();
    })
}
function startReview(){
    currentQuestionIndex = 0;
    showReview();
}
function showReview(){
    document.getElementById("answer-buttons").innerHTML = "";
    document.getElementById("navigator").innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    console.log(optionsSelected[currentQuestionIndex])
    if(optionsSelected[currentQuestionIndex] == undefined){
        questionElement.innerHTML += " - Not Answered"
    }
    for (option of currentQuestion.options){
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("opt-review");
        button.style.cursor = "default";
        answerButtons.appendChild(button);
    }
    if(currentQuestionIndex == 0){
        const button = document.createElement("button");
        button.innerHTML = "Next";
        button.classList.add("ends");
        button.setAttribute('id', "next");
        button.style.backgroundColor = "#071c95"
        document.getElementById("navigator").appendChild(button);
        document.getElementById("next").addEventListener('click', function(e){
            nextQuestReview();
        })
    }else if(currentQuestionIndex == (questions.length - 1)){
        const button = document.createElement("button");
        button.innerHTML = "Previous";
        button.classList.add("prev-btn");
        button.setAttribute('id', "prev");
        button.style.backgroundColor = "grey"
        document.getElementById("navigator").appendChild(button);
        document.getElementById("prev").addEventListener('click', function(e){
            prevQuestReview();
        })
        const button2 = document.createElement("button");
        button2.innerHTML = "Exit"
        button2.classList.add("next-btn");
        button2.setAttribute('id', "exit");
        button2.style.backgroundColor = "rgb(255, 94, 0)";
        document.getElementById("navigator").appendChild(button2);
        document.getElementById("exit").addEventListener('click', function(e){
            exit();
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
            nextQuestReview();
        })
        document.getElementById("prev").addEventListener('click', function(e){
            prevQuestReview();
        })
    }
    showSelectedReview();
    answerButtons.addEventListener('mousedown', function(e){
        if(e.target && e.target.nodeName == "BUTTON"){
            e.target.style.cursor = "not-allowed"
        }
    })
    answerButtons.addEventListener('mousemove', function(e){
        if(e.target && e.target.nodeName == "BUTTON"){
            e.target.style.cursor = "default"
        }
    })
}
function showSelectedReview(){
    let  allOptions = document.getElementsByClassName("opt-review");
    for (option of allOptions){
        if(option.innerHTML == optionsSelected[currentQuestionIndex] && optionsSelected[currentQuestionIndex] == questions[currentQuestionIndex].answer){
            option.classList.add("correct");
        }else if(option.innerHTML == optionsSelected[currentQuestionIndex]){
            option.classList.add("incorrect")
        }else if(option.innerHTML == questions[currentQuestionIndex].answer){
            option.classList.add("correct");
        }
    }
}
function exit(){
    let new_window = open(location, '_self');
    new_window.close();
    return false;
}
startQuiz();