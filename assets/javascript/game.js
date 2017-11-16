console.log("working");
// // ============ VARIABLES ========= //
// //Words for game
// var hangman = ["football", "baseball", "movies", "colorado", "skydive"];

// var countdown = 10;
// var wins = 0;
// var losses = 0;
// document.querySelector("#wins").HTML = wins;
// document.querySelector("#losses").HTML = losses;

// // ============= CUSTOM FUNCTIONS ================== //
// function startGame() {

// // random word
// var word = hangman[Math.floor(Math.random() * hangman.length)];
// // Answer
// console.log(word);
// var answerArray = []; 
// for (var i = 0; i < word.length; i++) { // takes lenght of word
//     answerArray.push("_"); // pushes underscore into letters of word
// }

// document.querySelector("#click-begin").HTML = answerArray;
// }
// startGame();
// // console.log(answerArray);
// // =================== EVENT LISENTERS ========================== //
// // Game loop
// document.onkeyup = function(event) { // listening to key being pushed
// console.log(event);
// var guess = event.key; 
// var inWord = false; // runs through word to match 

// for (var j = 0; j < word.length; j++) { // matches guess in to word
//     if (word[j] === guess) {
//         answerArray[j] = guess; 
//         inWord = true;
//     }
// };

// if (inWord = false) { // if guess is false, countdown goes down one
//     countdown--;
//     // print guess[j];
//     document.querySelector("#countdown").HTML = countdown;
// }

// if (word.length = true) {
//     alert("You win");
// } else if (countdown === 0) {
//     alert("You lose!");
// };
    
// };

// // document.querySelector("#game").innerHTML = html;


var hangman = ["baseball", "america", "what", "beach"];

var guesses = [];
var wins = 0;
var losses = 0;
var missed;
var countdown = 10;

function startGame() {
console.log("startGame");

var word = hangman[Math.floor(Math.random() * hangman.length)];
console.log(word);
document.querySelector("#click-begin").innerHTML = ("Good luck");
var answerArray = []; 
    for (var i = 0; i < word.length; i++) { // takes lenght of word
answerArray.push("_");  
document.querySelector("#game-board").innerHTML = answerArray;
}

}
document.onkeyup = function(event) { // listening to key being pushed
var drawnWord = "";

function draw() {
    drawnWord = "";
for (var j = 0; j < word.length; j++) { // matches guess in to word
     if (word[j] === guess) {
        answerArray[j] = guess; 
        drawnWord = true;
    }
    drawnWord.includes(guess);
};
}
}