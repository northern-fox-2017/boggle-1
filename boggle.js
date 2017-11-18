

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
 

  solveBoggle(currentRow=0, currentCol=0, currentWord='' ,ignores = []){
    //returns array of characters that is adjacent to the current cell, except thoose which has been visited 
    let currentChar = this.board[currentRow][currentCol];
    currentWord = currentWord.concat(currentChar);
    console.log(currentWord, '>> ',ignores.length,' ', currentChar, ' ',currentRow, currentCol)

    if ( this.isIgnore(currentRow, currentCol, ignores)){
      //console.log('-----')
      return []
    } else{
      let arrBoggles = [];
      if (this.getLibMatch(currentWord) !== ''){
        arrBoggles.push(currentWord)  
      }
      ignores.push([currentRow, currentCol]);
      //console.log(ignores);
      for (let i = currentRow - 1; i <= currentRow+1 ; i++){
        for (let j= currentRow -1 ; j <= currentRow+1 ; j++){
          if (i >= 0 && i<this.rowLength  &&j >= 0 && j <this.rowLength ){  
            
            arrBoggles = arrBoggles.concat(this.solveBoggle(i,j,currentWord,ignores));
          }
          
        }
      }
      ignores.pop();
      return arrBoggles
    }
  }

  getLibMatch(word){
    //returns word that mathces the library
    for (let i = 0; i < this.library.length; i++){
      if (this.library[i] === word){
        return word
      }
    }
    return ''
  }

  isIgnore(currentRow, currentCol, ignores){
    for (let i = 0; i < ignores.length ; i++){
      if (currentRow === ignores[i][0] && currentCol === ignores[i][1]){
        return true
      }
    }
    return false
  }



}





// DRIVER

var testBoard = [ [ 'A', 'K', 'J', 'D' ],
[ 'Z', 'A', 'O', 'H' ],
[ 'G', 'E', 'B', 'R' ],
[ 'T', 'F', 'J', 'V' ] ];

var game = new Boggle(4,4, './dataWahib.js', testBoard);
//game.shake();
console.log(game.board)
game.setLibrary();
console.log(game.solveBoggle());