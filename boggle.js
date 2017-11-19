

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
    

    if ( this.isIgnore(currentRow, currentCol, ignores) ){
      //console.log('-----')
      return []
    } else{
      let arrBoggles = [];
      currentWord = currentWord.concat(currentChar);
      if (this.getLibMatch(currentWord) !== ''){
        arrBoggles.push(currentWord)  
      }
      
      for (let i = currentRow - 1; i <= currentRow+1 ; i++){
        for (let j= currentCol -1 ; j <= currentCol+1 ; j++){
          // console.log(currentWord, '>> ',currentChar,' ', ignores[ignores.length-1], ignores[ignores.length-2], ' ',currentRow, currentCol)
          if (i >= 0 && i<this.rowLength  &&j >= 0 && j <this.rowLength  && this.isPossible(currentWord)){  
            ignores.push([currentRow, currentCol]);
            arrBoggles = arrBoggles.concat(this.solveBoggle(i,j,currentWord,ignores));
            ignores.pop();
          }
        }
      }
      
      currentWord.slice(0,-1) 
      return arrBoggles
    }
  }

  solveAllBoggle(){
    let arrResult = []
    for (let i = 0 ; i < this.rowLength ; i++){
      for (let j = 0 ; j < this.colLength ; j++){
        arrResult = arrResult.concat(this.solveBoggle(i,j,'',[]))
      }
    }
    arrResult = this.clearRedundant(arrResult)
    console.log('WORDS FOUND : ', arrResult.length);
    for (let i = 0; i <arrResult.length; i ++){
      console.log(arrResult[i])
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

  isPossible(word){
    for (let i = 0; i < this.library.length; i++){
      if (word === this.library[i].slice(0,word.length)){
        return true
      }
    }
    return false
  }

  clearRedundant(array){
    let arrOut = [];
    for (let i = 0; i < array.length; i++){
      if (arrOut.indexOf(array[i]) === -1){
        arrOut.push(array[i])
      }
    }
    return arrOut
  }



}





// DRIVER

var testBoard = [ [ 'A', 'K', 'J', 'D' ],
[ 'Z', 'A', 'O', 'H' ],
[ 'G', 'E', 'B', 'R' ],
[ 'T', 'F', 'J', 'V' ] ];

var game = new Boggle(4,4, './data.js', testBoard);
game.shake();
game.setLibrary();
console.log(game.board)
game.solveAllBoggle();

// console.log(game.clearRedundant(['a', 'a','b','b','c']))
//  console.log(game.solveBoggle(2,2))