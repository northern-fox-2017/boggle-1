const library = require('./data.js')
class Boggle {
  constructor(square){
    this.words = library
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
  
  
}

const boggle = new Boggle(4)

boggle.new_board()
console.log(boggle.board);
// console.log(boggle.words[2]);