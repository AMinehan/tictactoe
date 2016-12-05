// var $ = require('./node_modules/jquery/dist/jquery');
$(document).ready(function(){
  var $body = $('body');

  var player = 'o';
  var Board = function(){
    this.data = [[' ',' ','2'],[' ',' ',' '],[' ',' ',' ']];
  }

  Board.prototype.move = function(x, y, player) {
    if( board.data[x][y] === ' '){
      board.data[x][y] = player;
    }
  }

  Board.prototype.display = function(){
    $('board').children().remove();
    this.data.forEach(function(x){
      $('<div> hi </div>').appendTo($('board'));
    });
  }

  $('#command').on('submit', function(x) {
    x.preventDefault();
    var command = $("input:first").val().split(' ');
    console.log('hi', $("input:first").val());
    $("#command").trigger('reset');
    $('board').children('div').remove();

    board.move(command[0], command[1], player);
    player = player === 'o' ? 'x' : 'o';
  });
  var board = new Board();
  board.display();
});