import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DinoService from './dino-service';
import Game from './game-object';

function startGame(word) {
  let game = new Game(word);
  game.createArray();
  displayWord(game.shownArray.join(' '));
  $('#submit').click(function() {
    game.setScore($('#guess').val());
    console.table(game);
    $('#guess').val("");
    displayWord(game.shownArray.join(' '));
  });
}


$(document).ready(function() {
  let dinoService = new DinoService();
  const promise = dinoService.getDino(1,1);
  promise.then(function(response) {
    const body = JSON.parse(response);
    const word = body[0][0];
    startGame(word);
  }, function(error) {
    console.log(error);
  });
});

function displayWord(word) {
  $('#dinoWord').html(word);
}