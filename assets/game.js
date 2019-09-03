/*
on page load:
    - randonly choose word from wordArray
    - put individual letters from seletected word into lettersArray
    - correctLetters array: new array created 
    - display x number of "_" for number of letters in selected word under #current-word

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
    //replaces the word as first object in the randomword array
    randomWordStr[0] = randomWord;
    guessesRemaining = [15];
    userGuessArray = [];

    console.log(randomWord);

    //get length of random word and display corresponding empty spaces
    let wordLength = randomWord.length;
    let blankWord = " _ "
    //console.log(typeof(wordLength));
    displayCurrentWord.textContent = blankWord.repeat(wordLength);

}

init();


document.onkeyup = function() {

    userkey = event.key;

    //store key press in userGuessArray
    userGuessArray.push(" " + userkey);
    console.log(userGuessArray);

    //display userGuessArray
    displayUserGuesses.textContent = userGuessArray;

    //remaining guesses countdown
    guessesRemaining = guessesRemaining - 1;
    displayRemaining.textContent = guessesRemaining;

    console.log(randomWordStr);
    //check if key press is in the random word
    /*
    
    if (userKey === letter of randomWord) {

    }

    */


    //resets game to init if run out of guesses
    if (userGuessArray.length === 15) {
        init();
        alert("You didn't guess the word");
    }

    // if word guessed, wins++ and init(); 



}






