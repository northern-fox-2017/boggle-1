class Boggle {
  constructor() {
    this.founds = []
    this.board = []
    this.size = 4
    this.kamus
    this.path = []
  }
  solve() {

    for (let word of this.kamus.slice(0, 3)) { //loop kamus
      let tryBoxes = this.board.filter(item => item.char == word[0])
        .filter(el => el.length !== 0)
      for (let tryBox of tryBoxes) { // iterate box found in boogle
        
        this.path.push(tryBox.rowCol)

        for (let i = 0; i < word.length - 1; i++) { // loop char of word
          let currentChar = word[i]
          let nextMappedChars = this.getNextChars().filter(el => {
            return el.char === word[i + 1]
          })

          if (nextMappedChars.length === 0) {
            this.path = []
            break;
          }
          let x = 0
          while (true) {
            let terus = word.slice(0, i + 1) === this.pathGetWord()
            //console.log(this.pathGetWord())
            if (x < nextMappedChars.length && this.path.length !== word.length) {
              //console.log('TERUS', this.pathGetWord())

              this.path.push(nextMappedChars[x].rowCol)

              break
            } else {
              if (x >= nextMappedChars.length - 1) {
                //console.log('MUNDUR')
                this.path = this.path.slice(-1)

                i -= 2
                break
              }

            }
            x++
          }

          // console.log('---------------------------\n', `i:${i} curr:${word[i]} next:${word[i + 1]} ---- word: ${word}`)
          // console.log(nextMappedChars.map(el => {
          //   return {
          //     char: el.char,
          //     rowCol: el.rowCol,

          //   }
          // }))
          // console.log(this.path)
          if(this.pathGetWord() == word){
            console.log('SOLVED +++++++++++++++++++>', word)
          }else{
            console.log('Trying to solve ---> ', this.pathGetWord())
          }
          

        }

        this.path = [] 
      }

    }
  }
  pathGetWord() {
    let result = ''
    for (let cord of this.path) {

      for (let item of this.board) {
        if (this.isCordEqual(item.rowCol, cord)) {
          result += item.char
        }
      }

    }
    
    return result
  }
  isCordEqual(cord1, cord2) {
    return cord1[0] === cord2[0] && cord1[1] === cord2[1]
  }
  getNextChars() {
    let nextCords = this.nextCords(this.path[this.path.length - 1])
    let x = this.board.filter((item, index, arr) => {
      for (let cord of nextCords) {
        if (item.row === cord[0] && item.col === cord[1]) {
          return item
        }
      }

    })
    return x
  }

  isCordValid(cord) {
    return cord[0] >= 0 && cord[0] <= this.size - 1 && cord[1] >= 0 && cord[1] <= this.size - 1;
  }

  nextCords(c) { // only valid cords returned
    let nextCords = [
      [c[0] - 1, c[1]],   //top
      [c[0] - 1, c[1] + 1], //topright
      [c[0], c[1] + 1], //right
      [c[0] + 1, c[1] + 1], //bottomright
      [c[0] + 1, c[1]],   //bottom
      [c[0] + 1, c[1] - 1], //bottomleft
      [c[0], c[1] - 1], //left
      [c[0] - 1, c[1] - 1], //topleft
    ].filter(nextCord => {

      if (this.isCordValid(nextCord) === false) {// check boundary
        return false
      }
      // filter nextCord gak gigit buntutnya (contain in path)
      for (let cord of this.path) {
        if (cord[0] === nextCord[0] && cord[1] === nextCord[1]) {
          return false
        }
      }
      return true
    })

    return nextCords
  }

  shake(size) {
    this.size = size
    this.board = []
    this.kamus = this.getKamus()
    let seqAlpha = this.kamus.slice(0, this.size + 1).join('')
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.board.push({
          i: this.board.length,
          row: i,
          col: j,
          rowCol: [i, j],
          char: seqAlpha[this.randomNum(0, seqAlpha.length - 1)],
        })
      }
    }

    this.printBoard()
  }


  printBoard() {
    let str = ''
    for (let i = 0; i < this.board.length; i++) {
      let iBoard = this.board[i]
      // str += `  ${iBoard.i} ${iBoard.char} [${iBoard.row},${iBoard.col}]`
      str += `  ${iBoard.char}   ${iBoard.row},${iBoard.col}  `
      if ((1 + i) % this.size === 0) {
        str += `\n\n\n`
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

boggle.shake(6)
console.log(`Kamus size 4x4 : \n${boggle.kamus.join(', ')}`)

// console.log(boggle.board)
// console.log('\n\n')


console.log(boggle.solve())
// boggle.shake(8)
// console.log(`Kamus size 8x8 : \n${boggle.kamus.join(', ')}`)


// console.log(boggle.nextCordGenerator([5, 5]))


console.log(boggle.founds)