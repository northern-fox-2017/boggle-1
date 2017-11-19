class Boggle{
  constructor(){
    // this.letters='0abcdefghijklmnopqrstuvwxyz0'
    this.library=['ant','bird','crow','duck','eagle','falcon']
    this.join=this.library.join(',').replace(/,/g,'')
    // console.log(this.join);

    this.board=[]
    this.ArrWordsCheck=[]
    this.foundWord=[]
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
    // let wordsCheck=[]
    for (let i = 0; i < this.library.length-1; i++) {
      this.ArrWordsCheck.push(this.library[i].split(''))
    }
    console.log(this.ArrWordsCheck);
  }
//=====================================CHECKER||clockwise=======================
  cekKanan(huruf, row, kolom) {
      if (this.board[row][col + 1] == huruf && this.usedChecker(row, col + 1)) {
          this.foundWord.push([row, col + 1])
          return true
      }
  }

  cekKananBawah(huruf, row, col) {
      if (this.board[row + 1][col + 1] == huruf && this.usedChecker(row + 1, col + 1)) {
          this.foundWord.push([row + 1, col + 1])
          return true
      }
  }

  cekBawah(huruf, row, col) {
      if (this.board[row + 1][col] == huruf && this.usedChecker(row + 1, col)) {
          this.foundWord.push([row + 1, col])
          return true
      }
  }

  cekKiriBawah(huruf, row, col) {
      if (this.board[row + 1][col - 1] == huruf && this.usedChecker(row + 1, col - 1)) {
          this.foundWord.push([row + 1, col - 1])
          return true
      }
  }

  cekKiri(huruf, row, col) {
      if (this.board[row][col - 1] == huruf && this.usedChecker(row, col - 1)) {
          this.foundWord.push([row, col - 1])
          return true
      }
  }

  cekAtasKiri(huruf, row, col) {
      if (this.board[row - 1][col - 1] == huruf && this.usedChecker(row - 1, col - 1)) {
          this.foundWord.push([row - 1, col - 1])
          return true
      }
  }

  cekAtas(huruf, row, col) {
      if (this.board[row - 1][col] == huruf && this.usedChecker(row - 1, col)) {
          this.foundWord.push([row - 1, col])
          return true
      }
  }

  cekAtasKanan(huruf, row, col) {
      if (this.board[row - 1][col + 1] == huruf && this.usedChecker(row - 1, col + 1)) {
          this.foundWord.push([row - 1, col + 1])
          return true

      }
  }

  usedChecker(baris, kolom) {

      for (let i = 0; i < this.foundWord.length; i++) {
          let row = this.foundWord[i][0]
          let col = this.foundWord[i][1]
          if (baris === row && kolom === col) {
              return false
          }
      }
      return true;
  }

}

let Game = new Boggle()

// console.log(Game.shake(4));
console.log(Game.solve());
// console.log(Game.usedChecker(3,4));
