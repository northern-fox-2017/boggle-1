class Boggle {
  constructor(row, column) {
    this.row = row
    this.column = column
    this.board = []
  }

  newBoard() {
    for (var i = 0; i < this.row; i++) {
      this.board.push([])
      for (var j = 0; j < this.column; j++) {
        this.board[i].push(this.random())
      }
    }
    return this.board
  }

  random() {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var randomNumber = Math.floor(Math.random() * alphabet.length)
    return alphabet[randomNumber]
  }
}

var test = new Boggle(4, 4)
test.newBoard()
console.log(test.board)