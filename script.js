const startBtn = document.getElementById("startBtn")
const questionElement = document.getElementById('questionEle');
const nextBtn = document.getElementById("nextBtn")
  ;
const answerElement = document.getElementById('answerBtns');
const userScoreElement = document.getElementById('userScore');
const timeLeftElement = document.getElementById('timeLeft');
let userScores = 0;
let userTimer = 10;
let currentIndex, shuffledQuestions;
//event listener to start game. 
startBtn.addEventListener('click', startGame);




// const myInterval = setInterval(() => {
//   userTimer--;
//   console.log('Time Left:', userTimer);
// }, 1200);


function startGame() {
  console.log('Start Game');

  const myInterval = setInterval(() => {
    userTimer--;
    console.log('Time Left:', userTimer);
    timeLeftElement.innerText = userTimer;

    if (userTimer === 0) {
      console.log('End Game', userTimer);
      clearInterval(myInterval);

    }
  }, 1200);


  // I am shuffleing the questions
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
    const ansBtn = document.createElement('button');
    ansBtn.innerText = answer.text// changed text of button 

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
    // subtract time here 
    console.log('Score:', userScores);
  }
  userScoreElement.innerHTML = userScores;
  nextBtn.classList.remove('hide');
  currentIndex++;
}

nextBtn.addEventListener('click', nextQuestion)
function nextQuestion() {
  // I need to clear the old question
  console.log('Current Question:', currentIndex);

  showQuestion(shuffledQuestions[currentIndex]);
  if (currentIndex === shuffledQuestions.length + 1) {
    console.log('huh');

  }
}


function clearQuestion() {

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
