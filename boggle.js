const Library = require('./data')
class Boggle{
  constructor(data){
    this.letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // this.library=['ant','bird','crow','duck']
    this.library=data
    // this.join=this.library.join(',').replace(/,/g,'')
    // console.log(this.join);
    // this.join=

    this.board=[]
    // this.ArrWordsCheck=[]
    this.foundWord=''
    this.wordIndex=[]
    this.result=[]
    this.wordResult=[]
  }
  random(){
    let result=Math.ceil(Math.random()*this.letters.length-1)
    return result
  }
  shake(param){
    // console.log(this.join);
    for (let i = 0; i < param; i++) {
      this.board.push([])
      for (let j = 0; j < param; j++) {
        // this.board[i].push(this.join[this.random()])
        this.board[i].push(this.letters[this.random()])
      }
    }
    // console.log(this.board);
    return this.board

  }
  solve(){
    this.shake()
    // let wordsCheck=[]
    //
    // ///making words of the library became letter by letter
    // for (let i = 0; i < this.library.length; i++) {
    //   this.ArrWordsCheck.push(this.library[i].split(''))
    // }
    // console.log(this.ArrWordsCheck);
    //==================================
    let rowIndex = 0;
        while (rowIndex < this.library.length) {
            this.foundWord = ''
            let colIndex = 1;
            for (let i = 0; i < this.board.length; i++) {
                for (let j = 0; j < this.board.length; j++) {
                    if (this.library[rowIndex][0] == this.board[i][j]) {
                        this.foundWord += this.board[i][j]
                        this.wordIndex = [[i, j]]
                        this.tracker(this.library[rowIndex])
                        break

                    }
                }
            }
            rowIndex++
        }

        for (let k = 0; k < this.result.length; k++) {
            if (this.library.includes(this.result[k])) {
                this.wordResult.push(this.result[k])
            }
        }
        console.log(`${this.wordResult.length} words found`)
        return this.wordResult.join(", ")



  }
//=======================CHECKER||clockwise====================================
  cekKanan(huruf, row, col) {
      if (this.board[row][col + 1] == huruf && this.usedChecker(row, col + 1)) {
          this.wordIndex.push([row, col + 1])
          return true
      }
  }

  cekKananBawah(huruf, row, col) {
      if (this.board[row + 1][col + 1] == huruf && this.usedChecker(row + 1, col + 1)) {
          this.wordIndex.push([row + 1, col + 1])
          return true
      }
  }

  cekBawah(huruf, row, col) {
      if (this.board[row + 1][col] == huruf && this.usedChecker(row + 1, col)) {
          this.wordIndex.push([row + 1, col])
          return true
      }
  }

  cekKiriBawah(huruf, row, col) {
      if (this.board[row + 1][col - 1] == huruf && this.usedChecker(row + 1, col - 1)) {
          this.wordIndex.push([row + 1, col - 1])
          return true
      }
  }

  cekKiri(huruf, row, col) {
      if (this.board[row][col - 1] == huruf && this.usedChecker(row, col - 1)) {
          this.wordIndex.push([row, col - 1])
          return true
      }
  }

  cekAtasKiri(huruf, row, col) {
      if (this.board[row - 1][col - 1] == huruf && this.usedChecker(row - 1, col - 1)) {
          this.wordIndex.push([row - 1, col - 1])
          return true
      }
  }

  cekAtas(huruf, row, col) {
      if (this.board[row - 1][col] == huruf && this.usedChecker(row - 1, col)) {
          this.wordIndex.push([row - 1, col])
          return true
      }
  }

  cekAtasKanan(huruf, row, col) {
      if (this.board[row - 1][col + 1] == huruf && this.usedChecker(row - 1, col + 1)) {
          this.wordIndex.push([row - 1, col + 1])
          return true

      }
  }

  usedChecker(baris, kolom) {

      for (let i = 0; i < this.wordIndex.length; i++) {
          let row = this.wordIndex[i][0]
          let col = this.wordIndex[i][1]
          if (baris === row && kolom === col) {
              return false
          }
      }
      return true;
  }

  //=====================Words Tracker==========================================

    tracker(library){
      let libraryColumn = 1;
      while (libraryColumn < library.length) {
        let words = library[libraryColumn]
        for (let i = 0; i < this.wordIndex.length; i++) {
            let row = this.wordIndex[this.wordIndex.length - 1][0]
            let column = this.wordIndex[this.wordIndex.length - 1][1]
            if (row == 0 && column == 0) {
                if (this.cekKanan(words, row, column)) {
                    this.foundWord += this.board[row][column + 1]
                } else if (this.cekKananBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column + 1]
                } else if (this.cekBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column]
                }
            } else if (row == 0 && column == this.board.length - 1) {
                if (this.cekKiri(words, row, column)) {
                    this.foundWord += this.board[row][column - 1]
                } else if (this.cekKiriBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column - 1]
                } else if (this.cekBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column]
                }
            } else if (row == this.board.length - 1 && column == 0) {
                if (this.cekAtas(words, row, column)) {
                    this.foundWord += this.board[row - 1][column]
                } else if (this.cekKanan(words, row, column)) {
                    this.foundWord += this.board[row][column + 1]
                } else if (this.cekAtasKanan(words, row, column)) {
                    this.foundWord += this.board[row - 1][column + 1]
                }
            } else if (row == this.board.length - 1 && column == this.board.length - 1) {
                if (this.cekAtas(words, row, column)) {
                    this.foundWord += this.board[row - 1][column]
                } else if (this.cekKiri(words, row, column)) {
                    this.foundWord += this.board[row][column - 1]
                } else if (this.cekAtasKiri(words, row, column)) {
                    this.foundWord += this.board[row - 1][column - 1]
                }
            } else if (row == 0) {
                if (this.cekBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column]
                } else if (this.cekKiri(words, row, column)) {
                    this.foundWord += this.board[row][column - 1]
                } else if (this.cekKanan(words, row, column)) {
                    this.foundWord += this.board[row][column + 1]
                } else if (this.cekKiriBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column - 1]
                } else if (this.cekKananBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column+ 1]
                }
            } else if (column == 0) {
                if (this.cekAtas(words, row, column)) {
                    this.foundWord += this.board[row - 1][column]
                } else if (this.cekBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column]
                } else if (this.cekKanan(words, row, column)) {
                    this.foundWord += this.board[row][column + 1]
                } else if (this.cekKananBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column + 1]
                } else if (this.cekAtasKanan(words, row, column)) {
                    this.foundWord += this.board[row - 1][column + 1]
                }
            } else if (row == this.board.length - 1) {
                if (this.cekAtas(words, row, column)) {
                    this.foundWord += this.board[row - 1][column]
                } else if (this.cekKiri(words, row, column)) {
                    this.foundWord += this.board[row][column - 1]
                } else if (this.cekAtasKiri(words, row, column)) {
                    this.foundWord += this.board[row - 1][column - 1]
                } else if (this.cekKanan(words, row, column)) {
                    this.foundWord += this.board[row][column + 1]
                } else if (this.cekAtasKanan(words, row, column)) {
                    this.foundWord += this.board[row - 1][column + 1]
                }
            }
            else if (column == this.board.length - 1) {
                if (this.cekAtas(words, row, column)) {
                    this.foundWord += this.board[row - 1][column]
                } else if (this.cekKiri(words, row, column)) {
                    this.foundWord += this.board[row][column - 1]
                } else if (this.cekAtasKiri(words, row, column)) {
                    this.foundWord += this.board[row - 1][column - 1]
                } else if (this.cekKiriBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column - 1]
                } else if (this.cekBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column]
                }

            } else {
                if (this.cekAtas(words, row, column)) {
                    this.foundWord += this.board[row - 1][column]
                } else if (this.cekKiri(words, row, column)) {
                    this.foundWord += this.board[row][column - 1]
                } else if (this.cekAtasKiri(words, row, column)) {
                    this.foundWord += this.board[row - 1][column - 1]
                } else if (this.cekKiriBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column - 1]
                } else if (this.cekBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column]
                } else if (this.cekKanan(words, row, column)) {
                    this.foundWord += this.board[row][column + 1]
                } else if (this.cekAtasKanan(words, row, column)) {
                    this.foundWord += this.board[row - 1][column + 1]
                } else if (this.cekKananBawah(words, row, column)) {
                    this.foundWord += this.board[row + 1][column + 1]
                }
            }

        }

          libraryColumn++
        }
      if (this.result.indexOf(this.foundWord) == -1) {

          this.result.push(this.foundWord)
      }
      return this.result

    }

}

let Game = new Boggle(Library)

console.log(Game.shake(4));
// console.log(Game.cekAtas('N', 2, 1));
// console.log(Game.cekBawah('C', 2, 1));
// console.log(Game.cekAtasKiri('A', 2, 1));
// console.log(Game.cekAtasKanan('B', 2, 1));
// console.log(Game.cekKananBawah('E', 2, 1));
// console.log(Game.cekKananBawah('T', 2, 1));
// console.log(Game.cekKiri('A', 2, 1));
// console.log(Game.cekKanan('I', 2, 1));
console.log(Game.solve());
// console.log(Game.usedChecker(3,4));
// console.log(Game);
