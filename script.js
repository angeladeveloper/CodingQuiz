const startBtn = document.getElementById("startBtn")
const questionElement =document.getElementById('questionEle');
const answerElement = document.getElementById('answerBtns');
let userScores = 0;

startBtn.addEventListener('click', startGame);

//event listener to start game. 
let currentIndex, shuffledQuestions;

function startGame() {
    console.log('Start Game');

// I am shuffleing the questions
    shuffledQuestions  = questionArray.sort(() => Math.random() - .5);
    console.log('Shuffled questions;', shuffledQuestions);//shuffle the questions.   
    currentIndex = 0;// start at the first question
    showQuestion(shuffledQuestions[currentIndex]);
}

function showQuestion(question) {
//I need to hide the start button
    startBtn.classList.add('hide');
//I need to show the questions. 
    questionElement.innerText = question.question; 
    // let currentAnswers = Array.from(answerBtns);
    question.answers.forEach(answer => { // creating a button for each answer
        console.log('All answers' , answer);
        const ansBtn = document.createElement('button');
        ansBtn.innerText = answer.text// changed text of button 

    //I need to know what questions are right. 
        if(answer.correct){ // if the answer for the current looping question is true, add the correct data attribute. 
            console.log('Correct answer', answer.text);
            ansBtn.dataset.correct = answer.text;           
        }
        ansBtn.addEventListener('click', selectAnswer)
        answerElement.appendChild(ansBtn);
    });
 // add them to html



}

function selectAnswer(e){
    console.log('You clicked an answer');
    const userChoice = e.target;
    const correctChoice = userChoice.dataset.correct;
    if(correctChoice){
        console.log('Yes!');
        userScores++;
        console.log('Score:' , userScores);    
    }else{
        userScores--;
        console.log('Score:' , userScores);  
    }
    
}

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
