const startBtn = document.getElementById("startBtn")
const questionElement = document.getElementById('questionEle');
const nextBtn = document.getElementById("nextBtn")
  ;
const answerElement = document.getElementById('answerBtns');
const userScoreElement = document.getElementById('userScore');
const timeLeftElement = document.getElementById('timeLeft');
const controlsElement = document.getElementById('controls');

let userScores = 0;
let userTimer = 0;
var highScore = localStorage.getItem('highScore');
// let userInput = () => {
//   userInitials = document.querySelector('userInput').value
//   return;
// };

let currentIndex, shuffledQuestions;
let ansBtn;
let addScoreBtn;
let myInterval;
let userHighscore;


//event listener to start game. 
startBtn.addEventListener('click', startGame);


function startTimer() {
  myInterval = setInterval(() => {
    userTimer--;
    console.log('Time Left:', userTimer);
    console.log('Interval', myInterval);
    console.log('Current Index:', currentIndex);


    timeLeftElement.innerText = userTimer;

    if (userTimer === 0 || questionArray.length < currentIndex + 1) {
      console.log('End Game', userTimer);

      clearInterval(myInterval);


    }
  }, 1000);
}





function startGame() {
  console.log('Start Game');
  startTimer();
  clearQuestion();
  userTimer = userTimer + 10
  // I am shuffleing the question object into an array
  shuffledQuestions = questionArray.sort(() => Math.random() - .5);
  //https://www.w3schools.com/js/js_array_sort.asp sort method 
  console.log('Shuffled questions;', shuffledQuestions);//shuffle the questions.   
  currentIndex = 0;// start at the first question
  showQuestion(shuffledQuestions[currentIndex]);
}



function showQuestion(question) {
  //I need to hide the start button
  startBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  // Here I will add scores
  userScoreElement.innerHTML = userScores
  //I need to show the questions. 
  questionElement.innerText = question.question;
  // let currentAnswers = Array.from(answerBtns);
  question.answers.forEach(answer => { // creating a button for each answer
    console.log('All answers', answer);
    ansBtn = document.createElement('button');
    ansBtn.innerText = answer.text// changed text of button 
    ansBtn.classList.add('btn');

    //I need to know what questions are right. 
    if (answer.correct) { // if the answer for the current looping question is true, add the correct data attribute. 
      console.log('Correct answer', answer.text);
      ansBtn.dataset.correct = answer.text;
      // document.getElementById("questionEle").setAttribute("src", "A") 
    }
    ansBtn.addEventListener('click', selectAnswer)
    answerElement.appendChild(ansBtn);
  });
  // add them to html



}




function selectAnswer(e) {
  console.log('You clicked an answer');
  const userChoice = e.target;
  const correctChoice = userChoice.dataset.correct;
  if (correctChoice) {
    console.log('Yes!');
    userScores++;
    console.log('Score:', userScores);
    // i need to display the user score   
  } else {
    userScores--;
    userTimer--;
    // subtract time here 
    console.log('Score:', userScores);
  }
  userScoreElement.innerHTML = userScores;
  nextBtn.classList.remove('hide');
  currentIndex++;
  if (shuffledQuestions.length > currentIndex) {
    console.log('huh');
    nextBtn.classList.remove('hide');
  } else {
    // startBtn.classList.remove('hide');
    // startBtn.addEventListener('click', endGame);
    nextBtn.classList.add('hide');
    addScoreBtn = document.createElement('button');
    addScoreBtn.classList.add('btn');
    addScoreBtn.innerText = "Add Scores"
    addScoreBtn.addEventListener('click', endGame)
    controlsElement.appendChild(addScoreBtn);
  }
}



nextBtn.addEventListener('click', nextQuestion)
function nextQuestion() {
  // I need to clear the old question
  console.log('Current Question:', currentIndex);
  console.log('length of array', questionArray.length);
  clearQuestion();

  showQuestion(shuffledQuestions[currentIndex]);

}

function endGame() {
  clearInterval(myInterval);
  highScore = userScores;
  highScore = highScore + userTimer;
  console.log('Current Score', highScore);
  setScores();
  questionElement.innerText = "Add your scores to the leaderboard!"



}
function clearQuestion() {

  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

// //setting the current score = to HS 
// highScore = userScores

// highScore = highScore + userTimer



function setScores() {

  console.log('Current Highscore', highScore);
  // clear everything 
  clearQuestion();
  userForm = document.createElement('form');
  userForm.classList.add('form');
  answerElement.appendChild(userForm);



  userInput = document.createElement('input');
  userInput.setAttribute('type', 'text');
  userInput.setAttribute('placeholder', 'Add Initials');
  userInput.setAttribute('id', 'userInput');
  userInput.classList.add('userInput');
  userForm.appendChild(userInput);

  console.log('UserInput:', userInput);
  console.log('HighScore:', userHighscore);

  addScoreBtn.innerText = 'Leaderboards'
  addScoreBtn.setAttribute('type', 'submit');
  addScoreBtn.addEventListener('click', addScoresToLocal);

}

addScoreBtn.addEventListener('click', addScoresToLocal);

function addScoresToLocal() {
  const userInitials = userInput.value
  console.log('userInitials:', userInitials);

}



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
      { text: 'Cat', correct: false },
      { text: 'Dog', correct: false },
      { text: 'Rats', correct: false },
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
