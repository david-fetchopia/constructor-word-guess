function Letter(letter) {
    this.letter = letter;
    this.placeholder = "_";
    this.guessed = false;
    this.returnChar = function() {
        if (this.guessed) {
            return this.letter;
        }
        else {
            return this.placeholder;
        }
    }
    this.checkChar = function(character) {
        if (this.letter === character) {
            this.guessed = true;
        };
    };
}
module.exports = Letter;

let test = new Letter(' ');
test.checkChar(' ');
console.log(test.guessed);