const startBtn = document.getElementById("startBtn")
const questionElement =document.getElementById('questionEle');

startBtn.addEventListener('click', startGame);

//event listener to start game. 
let currentIndex, shuffledQuestions;

function startGame() {
    console.log('Start Game');

// I am shuffleing the questions
    shuffledQuestions  = questionArray.sort(() => Math.random() - .5);
    console.log('Shuffled questions;', shuffledQuestions);//shuffle the questions.   
    currentIndex = 0;// start at the first question
    showQuestion();
}

function showQuestion(question) {
//I need to hide the start button
    startBtn.classList.add('hide');
//I need to show the questions. 
    // questionElement.innerText = question.question; 

//I need to know what questions are right. 
}

// function selectAnswer(){

// }

// function nextQuestion() {

// }








// let userScores = 0;
const questionArray = [
    {
        question: 'What is 2 + 2?',
        answers: [
          { text: '4', correct: true },
          { text: '22', correct: false },
          { text: 'Corn', correct: false },
          { text: '3️⃣', correct: false }
        ]
      },
      {
        question: 'What is the best animal?',
        answers: [
          { text: 'Cat', correct: true },
          { text: 'Dog', correct: true },
          { text: 'Rats', correct: true },
          { text: 'All animals are the best', correct: true }
        ]
      },
      {
        question: 'Is web development fun?',
        answers: [
          { text: 'Kinda', correct: false },
          { text: 'YES!!!', correct: true },
          { text: 'Um no', correct: false },
          { text: 'IDK', correct: false }
        ]
      },
      {
        question: 'What is 4 * 2?',
        answers: [
          { text: '16', correct: false },
          { text: '26', correct: false },
          { text: '64', correct: false },
          { text: '8', correct: true }
        ]
      }
    ];
