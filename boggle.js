const words_bank = require('./data');  //bikin variable tetap untuk mengambil dari data.js = require('./data');
                                      // bikin export dari data.js

class Boggle {
  constructor() {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L' ,'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // alphabet a-z

    this.board = []; // papan boggle

    this.board_example = [ //EXAMPLE
      ['D', 'G', 'H', 'I'],
      ['K', 'L', 'P', 'S'],
      ['Y', 'E', 'U', 'T'],
      ['E', 'O', 'R', 'N']
    ];

    this.kamus_example = [ //EXAMPLE dari data.js
      'APPLE',
      'SIT',
      'SUPER',
      'TURN',
      'SUPER'
    ];

    this.board_self = [
      [ 'K', 'I', 'F', 'O' ],
      [ 'U', 'I', 'S', 'H' ],
      [ 'F', 'U', 'L', 'J' ],
      [ 'K', 'H', 'Z', 'I' ]
    ];

    this.kamus_self = [
      'FUL',
      'UI',
      'SIUL',
      'KIS'
    ];

    this.words_bank = words_bank;  //ambil kamus diambil dari data.js

  }


  shake(size){    // papan board dengan parameter size. huruf random
    for(let i=0; i<size; i++) {
      this.board.push([]);
      for(let j=0; j<size; j++) {
        let random = Math.ceil(Math.random()* 25); // 25 supaya tidak undifine
        this.board[i].push(this.alphabet[random])
      }
    }
    return this.board
  }

  get_dictionary() {   // buat method kamus ambil dari constructor
    return this.words_bank;
  }

  get_location_firstAlpha(firstAlpha, board) { //buat method mencari lokasi, parameter(firstAlpha, dan board)
    
  }

  solve(){
    // 1. bikin method untuk mencari lokasi [row, column] = [x,y] huruf pertama terlebih dahulu
  }

}

let game = new Boggle();

// release 0
// test case papan dengan random huruf (parameter size)
console.log('==========BOARD=========');
console.log(game.shake(4));

// release 1
// test case get dictionary
console.log('=======DICTIONARY=======');
console.log(game.get_dictionary());
