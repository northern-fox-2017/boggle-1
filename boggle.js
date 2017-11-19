class Boggle {
  constructor(square){
    this.library = require('./data.js')
    this.square = square
    this.board = []
  }
  
  randomize(){
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return huruf[Math.floor(Math.random() * huruf.length)]
  }
  
  new_board(){
    this.board = []
    for (let i = 0; i < this.square; i++) {
      let baris = []
      for (let j = 0; j < this.square; j++) {
        baris.push(this.randomize())
      }
      this.board.push(baris)
    }
  }
  
  search_library(index, letter){
    for (let i = 0; i < this.library.length; i++) {
      if (this.library[i][index] == letter) {
        return this.library[i][index]
      }
    }
  }
  
  solver(){
    let letter_basket = ''
    let target_word = ''
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] == this.search_library(letter_basket.length, this.board[i][j])) {
          
        }
      }
    }
  }
  
  find_letter(baris, kolom, letter){
    if (this.board[baris-1][kolom-1] == letter) {
      
    }
  }
  
}

const boggle = new Boggle(4)

boggle.new_board()
console.log(boggle.board);
console.log(boggle.library[2]);

