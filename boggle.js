class Boggle{
  constructor(rowLength, colLength, arrBoard=[], library=[]){
    this.board = arrBoard;
    this.library = library;
    this.colLength = colLength;
    this.rowLength = rowLength;


  }

  shake(){
    //generate 4x4 board filled with random characters
    let arrBoard = [];
    for (let i = 0; i < this.rowLength ; i++){
      let arrRow = [];
      for (let j = 0 ; j < this.colLength; j++){
        let charNum = Math.floor(Math.random() *25 ) + 65
          arrRow.push(String.fromCharCode(charNum));
      }
      arrBoard.push(arrRow)
    }
    this.board = arrBoard
  }

 

  getNextAdjacent(){
    //mengembalikan array huruf-huruf bersebelahan yang dapat digunakan untuk boggle


  }




}


// DRIVER

var game = new Boggle(4,4);
game.shake();
console.log(game.board)