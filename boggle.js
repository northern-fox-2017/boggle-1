class Boggle {
  constructor(area){
    this.area = area
    this.kamus = ['pet','dog','car','help','race']
    this.board = []
  }
  printBoard(){
    let abjad = 'abcdefghijklmnopqrstufvxyz'
    for(let i = 0; i < this.area;i++){
      let arrKosong = []
      for(let j = 0; j < this.area; j++){
        let randomChar = abjad.charAt(Math.floor(Math.random() * abjad.length))
        arrKosong.push(randomChar)
      }
      this.board.push(arrKosong)
    }
    return this.board
  }
}

let boggle = new Boggle(4)

console.log(boggle.printBoard())
