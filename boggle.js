class Boggle {
  constructor(area){
    this.area = area
    this.kamus = ['pet','dog','car','help','race']
    this.board = []
    this.possible = []
    this.firstLetter = ""
    this.result = []
  }
  shake(){
    let abjad = 'petdogcarhelprace'
    for(let i = 0; i < this.area;i++){
      let arrKosong = []
      for(let j = 0; j < this.area; j++){
        let randomChar = abjad.charAt(Math.floor(Math.random() * abjad.length))
          //  let randomChar = abjad[i]
        arrKosong.push(randomChar)
      }
      this.board.push(arrKosong)
    }
    return this.board
  }
  solve(){

    for(let i = 0; i < this.area;i++){
      for(let j = 0; j < this.area;j++){
        this.firstLetter = this.board[i][j]
        //firstletter check kamus
        this.checkKamus(this.firstLetter)
        //got possible words inside kamus
        // console.log( `ini adalah ${i} + ini adalaha ${j}` );
        this.checkArea(i,j,this.firstLetter)

      }

    }
    console.log("sisa kata di kamus: " + this.kamus)
    return "possible words: " + this.possible
  }


  checkKamus(str){
    for (let i = 0; i < this.kamus.length; i++) {
      if(str == this.kamus[i][0]){
        this.possible.push(this.kamus[i])
        this.kamus.splice(i,1)
      }
    }
  }



  checkArea(i,j,word = "",count = 1){
    let posX = i
    let posY = j

  if(word.length > 2){
    // console.log('masuk if words.length > 2')
    let possibleFiltered = this.possible.filter(x => x == word)
    if(possibleFiltered.length == 1){
      console.log("words found: " + possibleFiltered)
    }
  }




  // console.log(count)
    for (var i = 0; i < this.possible.length; i++) {
      if(word[0] == this.possible[i][0]){

        //check koordinat dan sistem pengecekan

        if(posX > 0 && posX < this.board.length-1 && posY > 0 && posY < this.board.length-1){
          // let surroundingLetters = []
          //check for 8 direction
          //north
          if(this.board[posX-1][posY] == this.possible[i][count]){
            word += this.board[posX-1][posY]
            return this.checkArea(posX-1,posY,word,count+1)
          }
          // [posX-1][posY])
          //NE
          // posX-1,posY-1
          if(this.board[posX-1][posY-1] == this.possible[i][count]){
            word += this.board[posX-1][posY-1]
            return this.checkArea(posX-1,posY-1,word,count+1)
          }
          // [posX-1][posY+1])
          //east
          // posX,posY+1
          if(this.board[posX][posY+1] == this.possible[i][count]){
            word += this.board[posX][posY+1]
            return this.checkArea(posX,posY+1,word,count+1)
          }
          // [posX][posY+1])
          //southEast
          // posX+1,posY+1
          if(this.board[posX-1][posY] == this.possible[i][count]){
            word += this.board[posX+1][posY+1]
            return this.checkArea(posX+1,posY+1,word,count+1)
          }
          // [posX+1][posY+1])
          //south
          // posX+1,posY
          if(this.board[posX+1][posY] == this.possible[i][count]){
            word += this.board[posX+1][posY]
            return this.checkArea(posX+1,posY,word,count+1)
          }
          // [posX+1][posY])
          //southwest
          // posX+1,posY-1
          if(this.board[posX+1][posY-1] == this.possible[i][count]){
            word += this.board[posX+1][posY-1]
            return this.checkArea(posX+1,posY-1,word,count+1)
          }
          // [posX+1][posY-1])
          //west
          // posX,posY-1
          if(this.board[posX][posY-1] == this.possible[i][count]){
            word += this.board[posX][posY-1]
            return this.checkArea(posX,posY-1,word,count+1)
          }
          // [posX][posY-1])
          //northWest
          // posX-1,posY-1
          if(this.board[posX-1][posY-1] == this.possible[i][count]){
            word += this.board[posX-1][posY-1]
            return this.checkArea(posX-1,posY-1,word,count+1)
          }
          // [posX-1][posY-1])


        }
        if(posX == 0 && posY == 0){
          //east
          // posX,posY+1
          if(this.board[posX][posY+1] == this.possible[i][count]){
            word += this.board[posX][posY+1]
            return this.checkArea(posX,posY+1,word,count+1)
          }
          // [posX][posY+1])
          //southEast
          // posX+1,posY+1
          if(this.board[posX+1][posY+1] == this.possible[i][count]){
            word += this.board[posX+1][posY+1]
            return this.checkArea(posX+1,posY+1,word,count+1)
          }
          // [posX+1][posY+1])
          //south
          // posX+1,posY
          if(this.board[posX+1][posY] == this.possible[i][count]){
            word += this.board[posX+1][posY]
            return this.checkArea(posX+1,posY,word,count+1)
          }
        }
        if(posX == 0){
          //east
          // posX,posY+1
          if(this.board[posX][posY+1] == this.possible[i][count]){
            word += this.board[posX][posY+1]
            return this.checkArea(posX,posY+1,word,count+1)
          }
          // [posX][posY+1])
          //southEast
          // posX+1,posY+1
          if(this.board[posX+1][posY+1] == this.possible[i][count]){
            word += this.board[posX+1][posY+1]
            return this.checkArea(posX+1,posY+1,word,count+1)
          }
          // [posX+1][posY+1])
          //south
          // posX+1,posY
          if(this.board[posX+1][posY] == this.possible[i][count]){
            word += this.board[posX+1][posY]
            return this.checkArea(posX+1,posY,word,count+1)
          }
          // [posX+1][posY])
          //southwest
          // posX+1,posY-1
          if(this.board[posX+1][posY-1] == this.possible[i][count]){
            word += this.board[posX+1][posY-1]
            return this.checkArea(posX+1,posY-1,word,count+1)
          }
          // [posX+1][posY-1])
          //west
          // posX,posY-1
          if(this.board[posX][posY-1] == this.possible[i][count]){
            word += this.board[posX][posY-1]
            return this.checkArea(posX,posY-1,word,count+1)
          }
        }
        if(posX == 0 && posY < this.board.length-1){
          //south
          // posX+1,posY
          if(this.board[posX+1][posY] == this.possible[i][count]){
            word += this.board[posX+1][posY]
            return this.checkArea(posX+1,posY,word,count+1)
          }
          // [posX+1][posY])
          //southwest
          // posX+1,posY-1
          if(this.board[posX+1][posY-1] == this.possible[i][count]){
            word += this.board[posX+1][posY-1]
            return this.checkArea(posX+1,posY-1,word,count+1)
          }
          // [posX+1][posY-1])
          //west
          // posX,posY-1
          if(this.board[posX][posY-1] == this.possible[i][count]){
            word += this.board[posX][posY-1]
            return this.checkArea(posX,posY-1,word,count+1)
          }

        }
        if(posX > 0 && posX < this.board.length-1 && posY == 0){
          //NE
          // posX-1,posY-1
          if(this.board[posX-1][posY-1] == this.possible[i][count]){
            word += this.board[posX-1][posY-1]
            return this.checkArea(posX-1,posY-1,word,count+1)
          }
          // [posX-1][posY+1])
          //east
          // posX,posY+1
          if(this.board[posX][posY+1] == this.possible[i][count]){
            word += this.board[posX][posY+1]
            return this.checkArea(posX,posY+1,word,count+1)
          }
          // [posX][posY+1])
          //southEast
          // posX+1,posY+1
          if(this.board[posX+1][posY+1] == this.possible[i][count]){
            word += this.board[posX+1][posY+1]
            return this.checkArea(posX+1,posY+1,word,count+1)
          }
          // [posX+1][posY+1])
          //south
          // posX+1,posY
          if(this.board[posX+1][posY] == this.possible[i][count]){
            word += this.board[posX+1][posY]
            return this.checkArea(posX+1,posY,word,count+1)
          }
        }
        if(posX > 0 && posX < this.board.length -1 && posY == this.board.length-1){
          //south
          // posX+1,posY
          if(this.board[posX+1][posY] == this.possible[i][count]){
            word += this.board[posX+1][posY]
            return this.checkArea(posX+1,posY,word,count+1)
          }
          // [posX+1][posY])
          //southwest
          // posX+1,posY-1
          if(this.board[posX+1][posY-1] == this.possible[i][count]){
            word += this.board[posX+1][posY-1]
            return this.checkArea(posX+1,posY-1,word,count+1)
          }
          // [posX+1][posY-1])
          //west
          // posX,posY-1
          if(this.board[posX][posY-1] == this.possible[i][count]){
            word += this.board[posX][posY-1]
            return this.checkArea(posX,posY-1,word,count+1)
          }
          // [posX][posY-1])
          //northWest
          // posX-1,posY-1
          if(this.board[posX-1][posY-1] == this.possible[i][count]){
            word += this.board[posX-1][posY-1]
            return this.checkArea(posX-1,posY-1,word,count+1)
          }
        }
        if(posX == this.board.length-1 && posY == 0){
          //north
          if(this.board[posX-1][posY] == this.possible[i][count]){
            word += this.board[posX-1][posY]
            return this.checkArea(posX-1,posY,word,count+1)
          }
          // [posX-1][posY])
          //NE
          // posX-1,posY-1
          if(this.board[posX-1][posY-1] == this.possible[i][count]){
            word += this.board[posX-1][posY-1]
            return this.checkArea(posX-1,posY-1,word,count+1)
          }
          // [posX-1][posY+1])
          //east
          // posX,posY+1
          if(this.board[posX][posY+1] == this.possible[i][count]){
            word += this.board[posX][posY+1]
            return this.checkArea(posX,posY+1,word,count+1)
          }
        }
        if(posX == this.board.length-1){
          let surroundingLetters = []
          //north
          if(this.board[posX-1][posY] == this.possible[i][count]){
            word += this.board[posX-1][posY]
            return this.checkArea(posX-1,posY,word,count+1)
          }
          // [posX-1][posY])
          //NE
          // posX-1,posY-1
          if(this.board[posX-1][posY-1] == this.possible[i][count]){
            word += this.board[posX-1][posY-1]
            return this.checkArea(posX-1,posY-1,word,count+1)
          }
          // [posX-1][posY+1])
          //east
          // posX,posY+1
          if(this.board[posX][posY+1] == this.possible[i][count]){
            word += this.board[posX][posY+1]
            return this.checkArea(posX,posY+1,word,count+1)
          }
          //west
          // posX,posY-1
          if(this.board[posX][posY-1] == this.possible[i][count]){
            word += this.board[posX][posY-1]
            return this.checkArea(posX,posY-1,word,count+1)
          }
          // [posX][posY-1])
          //northWest
          // posX-1,posY-1
          if(this.board[posX-1][posY-1] == this.possible[i][count]){
            word += this.board[posX-1][posY-1]
            return this.checkArea(posX-1,posY-1,word,count+1)
          }
        }
        if(posX == this.board.length-1 && posY == this.board.length-1){
          let surroundingLetters = []
          //north
          if(this.board[posX-1][posY] == this.possible[i][count]){
            word += this.board[posX-1][posY]
            return this.checkArea(posX-1,posY,word,count+1)
          }
          //northWest
          // posX-1,posY-1
          if(this.board[posX-1][posY-1] == this.possible[i][count]){
            word += this.board[posX-1][posY-1]
            return this.checkArea(posX-1,posY-1,word,count+1)
          }
          //west
          // posX,posY-1
          if(this.board[posX][posY-1] == this.possible[i][count]){
            word += this.board[posX][posY-1]
            return this.checkArea(posX,posY-1,word,count+1)
          }
      }
    }
  }


 }
}

let boggle = new Boggle(6)

console.log(boggle.shake())
console.log(boggle.solve())
