var Letter = require('./Letter');
function Word(word) {
    this.word = [];
    for (var i = 0; i < word.length; i++) {
        this.word.push(new Letter(word.charAt(i)));
    }
    this.returnString = function() {
        var resultString = "\n";
        for (var i = 0; i < this.word.length; i++) {
            if (this.word[i].letter === " ") {
                resultString += "  ";
            } else {
                resultString += this.word[i].returnChar() + " ";
            }
        }
        resultString += "\n";
        return resultString;
    }
    this.guessCharacter = function(char) {
        for (var i = 0; i < this.word.length; i++) {
            this.word[i].checkChar(char);
        }
    }
    this.isGuessed = function() {
        for (var i = 0; i < this.word.length; i++) {
            if (!this.word[i].guessed) {
                return false;
            }
        }
        return true;
    }
    this.guessCharacter(" ");

};
module.exports = Word;
// var test1 = new Word("Hello World");
// test1.guessCharacter('l');
// console.log(test1.returnString());