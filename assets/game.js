/*
on key press:
    - if keypress === (any letter in lettersArray)
        - then display that letter in correct position
*/

let wins = 0;
let currentWord;
let guessesRemaining = [15];
let lettersGuessed;

let userGuessArray = [];

let wordLength;
let wordArray = [];
let randomWord;

let randomWordStr = [];
let wordLettersArray = [];




const displayWins = document.getElementById("wins");
displayWins.textContent = wins;

const displayRemaining = document.getElementById("guesses-remaining");
displayRemaining.textContent = guessesRemaining;

const displayUserGuesses = document.getElementById("user-guesses");

const displayCurrentWord = document.getElementById("current-word");



function init() {
    //choses a word randomly
    let wordArray = ["word1", "wordtwo", "wordtres", "wordquatro", "fifthword"];
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    //replaces the word as first object in the random word array
    randomWordStr[0] = randomWord;
    //
    guessesRemaining = [15];
    userGuessArray = [];


    console.log(randomWord);
    console.log(randomWordStr);
    

    //store empty spaces of word in array
    for (i = 0; i < randomWord.length; i++) {
        wordLettersArray[i] = "_";
    }

    displayCurrentWord.textContent = wordLettersArray.join(" ");
    

}

init();


document.onkeyup = function() {

    //store key press in userGuessArray
    userkey = event.key;
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        userGuessArray.push(" " + userkey);
        console.log(userGuessArray);

        //display userGuessArray
        displayUserGuesses.textContent = userGuessArray;

        //remaining guesses countdown
        guessesRemaining = guessesRemaining - 1;
        displayRemaining.textContent = guessesRemaining;
    }



    //check if key press is in the random word
    /*
    cycle through string of word
    if userKey === one of the letters, then print at array[i]
    }

    */


    //resets game to init if run out of guesses
    if (userGuessArray.length === 15) {
        init();
        alert("You didn't guess the word");
    }

   
    // if word guessed, wins++ and init(); 



}






