class Boggle {
  constructor() {
    this.board = []
    this.size = 4
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    this.vowels = 'AIUEO'
    this.consonants = this.alpha.filter(el => {
      return this.vowels.indexOf(el) === -1
    });
    this.kamus
  }

  shake(size) {
    this.size = size
    this.board = []
    this.kamus = this.getKamus()
    let randStart = this.randomNum(0,this.kamus.length -3)
    let seqAlpha = this.kamus.slice(0,this.size+1).join('')
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.board.push({
          i: this.board.length,
          row: i,   
          col: j,
          char: seqAlpha[this.randomNum(0, seqAlpha.length-1)],
        })
      }
    }
    
    this.printBoard()
  }
  


  generateChar() {
    let randomConsonants = this.consonants[this.randomNum(0, this.consonants.length - 1)]
    let randomVowels = this.vowels[this.randomNum(0, this.vowels.length - 1)]
    let char = [randomVowels,randomConsonants][this.randomNum(0, 1)]
    return char
  }

  printBoard() {
    let str = ''
    for (let i = 0; i < this.board.length; i++) {
      let iBoard = this.board[i]
      //str += `  ${iBoard.i} ${iBoard.char} [${iBoard.row},${iBoard.col}]`
      str+= `  ${iBoard.char}  `
      if ((1 + i) % this.size === 0) {
        str += `\n\n`
      }
    }
    console.log(str)
  }

  getKamus() { // LOL
    let array = Object.getOwnPropertyNames(Array.prototype)
    let promise = Object.getOwnPropertyNames(Promise)
    let string = Object.getOwnPropertyNames(String.prototype)
    let kamus = [].concat(array, string, promise).filter((el, index, arr) => {
      return el.length > 2 && el.length <= 5 && arr.indexOf(el) === index
    })
    .map(el => el.toUpperCase())
    .sort(() => Math.random() * 2 - 1) // simple array shuffle
    return kamus
  }
 
  randomNum(min, max) {
    let randomNum = Math.random()
    randomNum = randomNum * (max - min + 1)
    randomNum = Math.floor(randomNum)
    return randomNum + min
  }
}


let boggle = new Boggle()

boggle.shake(5)
console.log(`Kamus size 4x4 : \n${boggle.kamus.join(', ')}`)

console.log('\n\n')

boggle.shake(8)
console.log(`Kamus size 8x8 : \n${boggle.kamus.join(', ')}`)
