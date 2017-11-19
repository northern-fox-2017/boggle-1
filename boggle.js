class Boggle{
  constructor(){
    // this.letters='0abcdefghijklmnopqrstuvwxyz0'
    this.library=['ant','bird','crow','duck','eagle','falcon']
    this.join=this.library.join(',').replace(/,/g,'')
    // console.log(this.join);

    this.board=[]

  }
  random(){
    let result=Math.ceil(Math.random()*this.join.length)
    return result
  }
  generateBoard(){
    console.log(this.join);
    for (let i = 0; i < 4; i++) {
      this.board.push([])
      for (let j = 0; j < 4; j++) {
        this.board[i].push(this.join[this.random()])
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
