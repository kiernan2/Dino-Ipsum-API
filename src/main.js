import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DinoService from './dino-service';
import Game from './game-object';

$(document).ready(function() {
  let dinoService = new DinoService();
  const dino = dinoService.getDino(1,1);
  console.log(JSON.parse(dino));
  let game = new Game(JSON.parse(dino));
  game.createArray();
  displayWord(game.shownArray.join(' '));
  $('#submit').click(function() {
    game.setScore($('#guess').val());
    console.table(game);
    displayWord(game.shownArray.join(' '));
  });
});

function displayWord(word) {
  $('#dinoWord').html(word);
}