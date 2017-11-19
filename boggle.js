class Boggle{
  constructor(){
    // this.letters='0abcdefghijklmnopqrstuvwxyz0'
    this.library=['ant','bird','crow','duck','eagle','falcon']
    this.join=this.library.join(',').replace(/,/g,'')
    // console.log(this.join);

    this.board=[]

  }
  random(){
    let result=Math.ceil(Math.random()*this.join.length-1)
    return result
  }
  shake(param){
    // console.log(this.join);
    for (let i = 0; i < param; i++) {
      this.board.push([])
      for (let j = 0; j < param; j++) {
        this.board[i].push(this.join[this.random()])
      }
    }
    // console.log(this.board);
    return this.board
  }
  solve(){
    this.shake()
    let wordsCheck=[]
    for (let i = 0; i < this.library.length-1; i++) {
      wordsCheck.push(this.library[i].split(''))
    }
    console.log(wordsCheck);
    // console.log(word);
  }





}

let Game = new Boggle()

// console.log(Game.shake(4));
console.log(Game.solve());
