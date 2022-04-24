let highscores = 0;
const questionArray = [
    //Here I will make 
    {
    prompt: "What element is used to define the font used?\n(a) Font \n(b) Font-Name \n(c) Font-src  \n(d) Font-family",
    answer: "d"
    },
    {
    prompt: "What operand is used to show a range?\n(a) Like \n(b) []? \n(c) %  \n(d) () ",
    answer: "b"        
    },
    {
    prompt: "The [typeof] operator in JavaScript always returns a/an?\n(a) Object \n(b) Function \n(c) String  \n(d) Number ",
    answer: "c" 
    },
    {
    prompt: "What array method joins all array elements into a string?\n(a) strjoin() \n(b) stringcon() \n(c) concatenate()  \n(d) Join () ",
    answer: "d"         
    }
];

console.log("QuestionArray", questionArray);

for (let i = 0; i < questionArray.length; i++) {
    const userResponse = window.prompt(questionArray[i].prompt);
    if ( userResponse == questionArray[i].answer){
        highscores++;
        alert("Correct");
        console.log('User response', userResponse);
        
    }else{
        alert("Wrong");
    }
    
}

alert(`You got ${highscores} / ${questionArray.length}`);