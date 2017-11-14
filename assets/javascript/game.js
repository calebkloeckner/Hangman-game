//Words for game
var words = ["football", "baseball", "movies", "colorado", "skydive"];

var word = words[Math.floor(Math.random() * words.length)];

// Answer
var answerArray = [];
for (var i = 0; i < word.length; i++); {
    answerArray[i] = "_";
}

// Variable for letters remaining
var remainingLetters = word.length;

// Game loop

while (remainingLetters > 0) {
    var guess = prompt("Guess a letter.");
    if (guess === null) {
        break;

    } else if (guess.length !== 1) {
        alert("Please enter single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
