/**
 * 中国象棋 —— 棋子类
 */

// 阵营
CAMP_RED = 1;
CAMP_BLACK = -1;

var _cur_id = 0;
var _alloc_id = function() {
    return _cur_id ++;
}

function Piece(name, x, y){
    this.name = name;
    
    this.set_pos(x, y);

    this.id = _alloc_id();    

    // 决定阵营
    if (name[0] == "R") {
        this.camp = CAMP_RED;
    }
    else if (name[0] == "B") {
        this.camp = CAMP_BLACK;
    }
}

Piece.prototype.set_pos = function(x, y) {
    this.x = x;
    this.y = y;
}

exports.Piece = Piece;