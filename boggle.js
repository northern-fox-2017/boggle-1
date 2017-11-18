

class Boggle{
  constructor(rowLength, colLength, libraryName='./data.js', arrBoard=[], library=[]){
    this.board = arrBoard;
    this.libraryName = libraryName;
    this.library = library
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

  setLibrary(){
    var fs = require('fs');
    var lib = require(this.libraryName).words

    this.library = lib;
  }
 

  getNextAdjacent(currentRow, currentCol, ignores){
    //returns array of characters that is adjacent to the current cell, except thoose which has been visited 

  }


}


// DRIVER

var game = new Boggle(4,4, './dataWahib.js');
game.shake();
console.log(game.board)
game.setLibrary();
console.log(game.library);