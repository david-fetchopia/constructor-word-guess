var inquirer = require('inquirer');
var colors = require('colors');
var Word = require('./Word');

var userTries = 9;
var guessedLetters = [];
var possibleWords = ["JACQUES CARTIER", "SAMUEL DE CHAMPLAIN", "LAURA SECORD", "GEORGE ETIENNE CARTIER", "JOHN A MACDONALD", "LOUIS RIEL", "WILFRID LAURIER", "NORMAN BETHUNE"]
var randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]
var constructed_randomWord = new Word(randomWord);

function checkRound() {
    if (constructed_randomWord.isGuessed()) {
        console.log(colors.rainbow("You got it right! Next word!"));
        randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]
        constructed_randomWord = new Word(randomWord);
        guessedLetters = [];
    }
    if (userTries <= 0) {
        console.log("###############################################");
        console.log("");
        console.log("Game over dude.".underline.red);
        console.log("");
        console.log("###############################################");
        process.exit();
    }
    playRound();
}

function playRound() {
    inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: "Guess a letter!",

        }
    ]).then(function (guess) {
        //console.log(guess.userGuess);
        if (!guessedLetters.includes(guess.userGuess.toUpperCase())) {
            guessedLetters.push(guess.userGuess.toUpperCase());
            constructed_randomWord.guessCharacter(guess.userGuess.toUpperCase());
            console.log(constructed_randomWord.returnString());
            if (randomWord.includes(guess.userGuess.toUpperCase())) {
                console.log("\x1b[42m%s\x1b[0m","CORRECT!!!");
                checkRound();
            } else {
                userTries--;
                console.log("Incorrect Guess! Tries Remaining: " + userTries);
                checkRound();
            }
            
        } else {
            console.log("\x1b[31m%s\x1b[0m","This Letter has already been guessed!");
            checkRound();
        }


    });
}

playRound();

