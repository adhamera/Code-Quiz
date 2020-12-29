
const startButton = document.getElementById('start-btn')
const highscoreButton = document.getElementById('highscore-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
var quizTimer = document.getElementById("timer");



startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    console.log(e.target)    
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')   
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//Quiz questions
const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'Hyper Text Markup Language', correct: true},
            {text: 'Hyper Test Markup List', correct: false},
            {text: 'Hyper Time Markup Language', correct: false},
            {text: 'Hyper Test Markup Loop', correct: false},
        ]
    },
     {
    question: 'What does DOM stand for?',
    answers: [
        {text: 'Document Order Model', correct: false},
        {text: 'Document Object Model', correct: true},
        {text: 'Direct Object Mode', correct: false},
        {text: 'Document Option Model', correct: false},
    ] 
     },
     {
        question: 'What is CSS used for?',
        answers: [
            {text: 'Structure of a web page or application', correct: false},
            {text: 'Behavior of a web page or application', correct: false},
            {text: 'Data storage for a web page or application', correct: false},
            {text: 'Styling of a web page or application', correct: true},
        ]
    },
    {
        question: 'Why is JavaScript used?',
        answers: [
            {text: 'It is a programming language that helps to style web applications.', correct: false},
            {text: 'It is a programming language used to add structure to web applications.', correct: false},
            {text: 'It is a programming language that allows web applications to be interactive.', correct: true},
            {text: 'It is a programming language that does not allow web applications to be interative.', correct: false},
        ]
    },

    {
        question: 'What are stylesheets?',
        answers: [
            {text: 'Style sheets allow you to build consistent, transportable, and well-defined style templates that can be linked to different web pages.', correct: true},
            {text: 'Syle sheets do not allow you to build consistent, transportable, and well-defined style templates that can be linked to different web pages. ', correct: false},
            {text: 'Style sheets allow you to build inconsistent, transportable, and well-defined style templates that can be linked to different web pages.', correct: false},
            {text: 'Style sheets are only used to change the background color of a web page.', correct: false},
        ]
    }
    
    ]

    //Timer
    var timerInterval;
    var timeLeft = 70;

    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    quizBody.style.display = "block";

   