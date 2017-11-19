const kamus = require('./data.js');
class Boggleboard {
    constructor(kamus) {
        this.kamus = kamus,
        this.papan = [],
        this. abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    }
    board() {
      let count = 0
      for (var i = 0; i < 4; i++) {
        this.papan.push([])
      }

      for (var j = 0; j < 16; j++) {
        let random = Math.floor(Math.random() * this.abjad.length)
        this.papan[count].push(this.abjad[random])
        if (count < 3) {
          count++
        } else {
          count = 0
        }
      }
      return this.papan
    }

    solve (){

    }

}


let play = new Boggleboard();

console.log(play.board(4))
