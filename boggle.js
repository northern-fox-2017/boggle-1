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
    this.location_firstAlpha = [];  //location first alpha expectation [x,y]
    this.cell_visit = [];
  }


  shake(size){    // papan board dengan (parameter size). huruf random
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

  get_location_firstAlpha(firstAlpha, board) { //buat method mencari lokasi, (parameter firstAlpha, dan board)
    let location = [];
    for(let i=0; i<board.length; i++) {
      for(let j=0; j<board[i]; j++) {
        location = [];
        if(firstAlpha == board[i][j]) {
          location.push(i);
          location.push(j);
          this.firstAlpha.push(location)
        }
      }
    }
    //jika tidak ditemukan, maka return array kosong
    // console.log(this.firstAlpha);
    return this.firstAlpha
  }

  // method untuk mencocokan satu huruf dari alpha dengan huruf di board
  check_firstAlpha(alpha, coordinate, board) {
    let x = coordinate[0];
    let y = coordinate[1];
    if(alpha == board[x][y]) {
      return true;
    } else {
      return false;
    }
  }

  solve(){
    // 1. bikin method untuk mencari lokasi [row, column] = [x,y] huruf pertama terlebih dahulu
    // 2. bikin method untuk cek satu huruf dengan kata target di board
    // 3. bikin method solve one word
  }

  solve_OneWord(targetWord, board) {
    let first_Alpha = targetWord[0];
    let coordinat_first_alpha = this.get_location_firstAlpha(first_Alpha, board);
    // jika tidak tidak ditemukan huruf awal return false
    if(coordinate_first_alpha.length == 0) {
      return false; //targetWord tidak ada di board
    } else if (coordinate_first_alpha.length > 0) {
       // lakukan looping sebanyak coordinate_first_alpha
       for(let i=0; i<coordinate_first_alpha.length; i++) {
         
       }
    }
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

// release 2
// test case solve
console.log(game.solve());
