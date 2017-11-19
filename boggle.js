class Boggle{
  constructor(){
    this.letters='0abcdefghijklmnopqrstuvwxyz0'

    this.board=[]

  }
  random(){
    let result=Math.ceil(Math.random()*26)
    return result
  }
  generateBoard(){
    for (let i = 0; i < 4; i++) {
      this.board.push([])
      for (let j = 0; j < 4; j++) {
        this.board[i].push(this.letters[this.random()])
      }
    }
    console.log(this.board);
    // return this.board
  }
  shake(){

  }




}

let Game = new Boggle()

console.log(Game.generateBoard());
