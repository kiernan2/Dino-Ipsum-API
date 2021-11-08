import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DinoService from './dino-service';
import Game from './game-object';

$(document).ready(function() {
  let game = new Game;

  const testWord = 'Proceratosaurus';

  const parsedWord = testWord.split("");
  const wordLength = parsedWord.length;
  let shownWord = new Array(wordLength);

  $('#submit').click(function() {
    let guess = $('#guess').val();
    if (parsedWord.includes(guess)) {
      console.log('hit');
      const letterIndex = game.checkLetters(parsedWord, guess);
      shownWord[letterIndex] = parsedWord[letterIndex];
    } else {
      console.log('miss');
      game.miss++;
    }
    if (game.gameOverCheck()) {
      console.log('GameOver');
    }
  });
});