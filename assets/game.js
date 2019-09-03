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

userGuessArray = [];


const displayWins = document.getElementById("wins");
displayWins.textContent = wins;

const displayRemaining = document.getElementById("guesses-remaining");
displayRemaining.textContent = guessesRemaining;

const displayUserGuesses = document.getElementById("user-guesses");



wordArray = ["word1", "wordtwo", "wordtres", "wordquatro", "fifthword"];
let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

console.log(randomWord);
console.log(randomWord.length);



document.onkeypress = function() {

    userkey = event.key;

    //store key press in userGuessArray
    userGuessArray.push(" " + userkey);
    console.log(userGuessArray);

    //display userGuessArray
    displayUserGuesses.textContent = userGuessArray;

    






}






