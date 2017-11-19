'use strict'

class Boggle {
  constructor() {
    this.arrBoard = [];
    this.libWordsTest = ['ITU', 'YOU', 'CUEK', 'TIDAK', 'ADA', 'ZONA', 'GANTENG', 'BAIK'];
    this.arrBoardTest = [ [ 'H', 'E', 'T', 'Y' ],[ 'R', 'I', 'U', 'V' ],[ 'K', 'U', 'Z', 'O' ],[ 'E', 'C', 'N', 'A' ] ];
  }
  shake(boardLength) {
    let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < boardLength; i++) {
      this.arrBoard.push([]);
      for (let j = 0; j < boardLength; j++) {
        this.arrBoard[i].push(abjad[Math.floor(Math.random() * abjad.length)]);
      }
    }
    return this.arrBoard;
  }
  shakeTest() {
    return this.arrBoardTest;
  }
  getWordsByLibrary(libraryWords, words) {

  }
  solve() {
    let libWords = require('./data').words,
        directions = [ [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1] ],
        row, col, word,
        arrFirstWords = [], arrDirections = [], wordFound = '';

    // Tampung huruf awal library kata yang sama dengan huruf board
    for (let i = 0; i < this.arrBoardTest.length; i++) {
      for (let j = 0; j < this.arrBoardTest.length; j++) {
        for (let k = 0; k < this.libWordsTest.length; k++) {
          if (this.arrBoardTest[i][j].toUpperCase() === this.libWordsTest[k][0].toUpperCase()) {
            arrFirstWords.push(this.libWordsTest[k]);
            wordFound += this.arrBoardTest[i][j];
            for (let dir of directions) {
              let row = i + dir[0];
              let col = j + dir[1];
              if ((row >= 0) && (row < this.arrBoardTest.length) && (col >= 0) && (col < this.arrBoardTest.length)) {

              }
            }
          }
        }
      }
    }

    // for (let i = 0; i < this.arrBoardTest.length; i++) {
    //   for (let j = 0; j < this.arrBoardTest.length; j++) {
    //     for (let dir of directions) {
    //       let row = i + dir[0];
    //       let col = j + dir[1];
    //       if ((row >= 0) && (row < this.arrBoardTest.length) && (col >= 0) && (col < this.arrBoardTest.length)) {
    //
    //       }
    //     }
    //   }
    // }

    console.log('libWordsTest: ' + this.libWordsTest);
    console.log('arrFirstWords: ' + arrFirstWords);
    console.log(`Words Found: `);
  }
}

let time = new Date(),
    boggle = new Boggle();

console.log(boggle.shakeTest(4));
console.log(`BOGGLE SHAKE (start time: \x1b[33m${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}\x1b[0m)\n`);
boggle.solve();
console.log(`BOGGLE SOLVE (end time: \x1b[32m${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}\x1b[0m)`);
