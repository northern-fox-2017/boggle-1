'use strict'

class Boggle {
  constructor() {
    this.arrBoard = [];
  }
  shake(boardLength) {
    let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < boardLength; i++) {
      this.arrBoard.push([]);
      for (let j = 0; j < boardLength; j++) {
        this.arrBoard[i].push(abjad[Math.floor(Math.random() * abjad.length)]);
      }
    }
    console.log(this.arrBoard);
  }
}


let boggle = new Boggle();
boggle.shake(4);
