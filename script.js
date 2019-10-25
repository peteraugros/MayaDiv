var topNum;
var bottomNum;
var divAnswer;
var score = 0;


var praise = ["Great job, I love you!", "You're my watermelon little girl!", "Wow, I knew you could do it!", 
"You're impressive!", "If you get any better at this you will have to teach me!", "You're smart!", 
"Yay! You did it!", "Genius!", "Impressive!", "Wow, wow, wow!"];


function setUp(){
    
    //clearing all fields
    document.body.style.backgroundColor = "white";
    document.getElementById("top").textContent = "";
    document.getElementById("bottom").textContent = "";
    document.getElementById("praise").textContent = "";
    document.getElementById("output").textContent = "";
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    document.getElementById("play").textContent = "Next";


    var random = Math.floor(Math.random() * 9) + 1;
    var random2 = Math.floor(Math.random() * 9) + 1;
    topNum = random;
    bottomNum = random2;

    divAnswer = topNum * bottomNum;

    document.getElementById("top").textContent = topNum;
    document.getElementById("bottom").textContent = divAnswer;

//end setUp function
}

function praiseFunc(){
    var random3 = Math.floor(Math.random() * 10);
    document.getElementById("praise").textContent = praise[random3];

//end praise function
}

function checkAnswer(){
var answer = document.getElementById("input").value;
var correctAnswer = divAnswer / topNum;
console.log(correctAnswer);

parseInt(answer);
if(answer == correctAnswer){
    score++;
    document.getElementById("score").textContent = score;
    document.getElementById("output").textContent = "Correct!";
    praiseFunc();

} else {
    score--;
    document.getElementById("score").textContent = score;
    document.body.style.backgroundColor = "red";
    document.getElementById("output").textContent = "The correct answer is " + correctAnswer;
}

//end checkAnswer function
}

