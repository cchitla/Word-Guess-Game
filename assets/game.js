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



const displayWins = document.getElementById("wins");
displayWins.textContent = wins;

const displayRemaining = document.getElementById("guesses-remaining");
displayRemaining.textContent = guessesRemaining;

const displayUserGuesses = document.getElementById("user-guesses");

const displayCurrentWord = document.getElementById("current-word");



function init() {
    let wordArray = ["word1", "wordtwo", "wordtres", "wordquatro", "fifthword"];
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    guessesRemaining = [15];
    userGuessArray = [];

    //get length of random word and display corresponding empty spaces
    let wordLength = randomWord.length;
    let blankWord = " _ "
    console.log(typeof(wordLength));
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

    guessesRemaining = guessesRemaining - 1;
    displayRemaining.textContent = guessesRemaining;



    if (userGuessArray.length === 15) {
        init();
        alert("You didn't guess the word");
    }



}






