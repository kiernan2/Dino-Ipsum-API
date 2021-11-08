class Game {
  constructor(dinoWord) {
    this.word = dinoWord.toLowerCase();
    this.splitWord = this.word.split('');
    this.shownArray = [];
    this.wrong = [];
    this.right = [];
    this.miss = 0;
  }

  checkLetters(letter) {
    if (this.splitWord.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  setScore(guess) {
    if (!(this.wrong.includes(guess)) && !(this.right.includes(guess))) {
      if (this.checkLetters(guess)) {
        for (let i = 0;i < this.splitWord.length;i++) {
          if (this.splitWord[i] === guess) {
            this.shownArray.splice(i,1,guess);
          }
        }
        this.right.push(guess);
        this.gameOverCheck();
      } else {
        this.wrong.push(guess);
        this.miss = this.wrong.length;
        this.gameOverCheck();
      }
    } else {
      console.log('You already picked that one')
    }
  }

  gameOverCheck() {
    if (this.miss >= 5 || !this.shownArray.includes('_')) {
      console.log('Game Over');
      return true;
    } else {
      return false;
    }
  }

  createArray() {
    const empty = ('_');
    for(let i = 0;i < this.splitWord.length;i++) {
      this.shownArray.push(empty);
    }
  }
}

let game = new Game('Proceratosaurus');
game.createArray();
game.setScore('s');
game.setScore('p');
game.setScore('r');
game.setScore('o');
game.setScore('c');
game.setScore('u');
game.setScore('a');
game.setScore('e');
game.setScore('t');
console.table(game);