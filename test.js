var CChess = require('cchess.js');

var Board = CChess.Board, AI = CChess.AI;
Board.init_board();

//console.log(Board.get_chess(0, 0));

/*Board.events.on('move', function(a,b,c,d){
    console.log(b,c,d);
});*/

//初始化棋盘，设定搜索深度为4
AI.init(Board, 4);

AI.events.on('step', function(m){
    /*
        fx,fx - 移动前坐标
        tx,ty - 移动后坐标
        score - 估值
        fc - 移动的棋子
        tc - 被吃掉的棋子（0表示没有吃子）
        棋子对照表：
            B_CAR = -1;
            B_HORSE = -2;
            B_ELEPHANT = -3;
            B_BISHOP = -4;
            B_KING = -5;
            B_CANNON = -6;
            B_PAWN = -7;
            R_CAR = 1;
            R_HORSE = 2;
            R_ELEPHANT = 3;
            R_BISHOP = 4;
            R_KING = 5;
            R_CANNON = 6;
            R_PAWN = 7;
            NOCHESS = 0;
     */
    console.log(m);
});

AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);
AI.play_a_chess(-1);
AI.play_a_chess(1);

//Board.unmove_chess();

//console.log(Board.chesses);