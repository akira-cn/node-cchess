var Board = require('board').Board;
Board.init_board();

//console.log(Board.get_chess(0, 0));

/*Board.events.on('move', function(a,b,c,d){
    console.log(b,c,d);
});*/

var AI = require('ai').AI;

//console.log(AI);
AI.init(Board, 4);

AI.events.on('step', function(m){
    console.log(m);
});

AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);
/*AI.play_a_chess(-1);
AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);*/

//Board.unmove_chess();

//console.log(Board.chesses);