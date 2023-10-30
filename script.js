const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');

// An array of objects that store question, choices and answer.
const quiz = [
    {
        question: "Q. Which of the following is not a CSS box model property?",
        choices: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    },
    {
        question: "Q. Which of the following is not a valid way to declare a function in JavaScript?",
        choices: ["function myFunction() {}", " let myFunction = function() {};", "myFunction: function() {}", "const myFunction = () => {};"],
        answer: "myFunction: function() {}"
    },
    {
        question: "Q. Which of the following is not a JavaScript data type?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "Q. What is the purpose of the this keyword in JavaScript?",
        choices: ["It refers to the current function.", "It refers to the current object.", "It refers to the parent object.", " It is used for comments."],
        answer: "It refers to the current object."
    }
];
// making variables 
let currentQuestionIndex = 0;

// Arow function to call question
const showQuestion = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question
    choicesBox.textContent = "";
    for (let i= 0 ; i<questionDetails.choices,length; i++){
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice')
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if(choiceDiv.classList.contains('selected')){
                choiceDiv.classList.remove('selected');
            }
            else{
                choiceDiv.classList.add('selected'); 
            }
        });

    }
    
}

// function to check answer
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if(selectedChoice.textContent ===quiz[currentQuestionIndex].answer){
        alert("correct answer")
    }
    else{
       alert('wrong answer') 
    }
    
}

showQuestion();
nextBtn.addEventListener('click' ,() => {
    checkAnswer();
    if(currentQuestionIndex<quiz.length){
        currentQuestionIndex++;
        showQuestion();
    }
});