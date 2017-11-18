class Boggle {
  constructor() {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L' ,'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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

    this.board_self = [  //
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

  }

  shake(size){
    for(let i=0; i<size; i++) {
      this.board.push([]);
      for(let j=0; j<size; j++) {
        let random = Math.ceil(Math.random()* 25); // 25 supaya tidak undifine
        this.board[i].push(this.alphabet[random])
      }
    }
    return this.board
  }

}

let game = new Boggle();

// release 0
// test case papan dengan random huruf (parameter size)
console.log('==========BOARD=========');
console.log(game.shake(4));
