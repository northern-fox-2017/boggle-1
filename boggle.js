class Boggle{
  constructor(cols,rows){
    this.column = cols
    this.row = rows
    this.board = this.board()
  }
  board(){
    let arr = []
    for (let i = 0; i < this.column; i++) {
      arr.push([])
    }
    return arr
  }
  shake(){
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.row; j++){
        let abjad = 'abcdefghijklmnopqrstuvwxyz'
        let random = abjad[Math.floor((Math.random()*abjad.length))]
        this.board[i].push(random)
      }
    }
    console.log(this.board);
  }


}

let boggle = new Boggle(4,4)
boggle.shake()
