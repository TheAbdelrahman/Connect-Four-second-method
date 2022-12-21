var red = 'R';
var yellow = 'Y';
var currentPlayer = red;
var gameOver = false;
var board;
var rows= 6;
var columns = 7;
window.onload = ()=>{
    setGame();
}

function setGame(){
    board= [];

    for (let r = 0; r< rows; r++){
        let row = [];
        for (let c = 0; c< columns; c++){
            row.push(' '); //js
            //html
            // <div id='0-0' class='tile'></div>
            let tile = document.createElement('div');
            tile.id = r.toString()+'-'+ c.toString();
            tile.classList.add('tile');
            tile.addEventListener('click', setPiece)
            document.getElementById('board').append(tile);
        }
        board.push(row);
    }
}

function setPiece(){
    if (gameOver){
        return;
    }

    let coords = this.id.split('-'); // '0-0' => ['0','0']

    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    board[r][c] = currentPlayer
    let tile = document.getElementById(r.toString()+'-'+c.toString());

    if(currentPlayer == red){
        tile.classList.add('red-piece');
        currentPlayer = yellow;
    }else{
        tile.classList.add('yellow-piece');
        currentPlayer = red;;
    }

}