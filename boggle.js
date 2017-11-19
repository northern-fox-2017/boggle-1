const words = require ('./data.js');

class Boggle {
  constructor() {
    this.play   = [];
    this.result = [];
  }

  // testBoard(){
  //   let board = [
  //     ['A', 'B', 'A', 'H'],
  //     ['S', 'B', 'G', 'S'],
  //     ['A', 'D', 'K', 'N'],
  //     ['L', 'I', 'A', 'Y']
  //   ]
  //   this.play = board
  //   // console.log(this.play);
  // }

  shake(size){
    let board = [];
    for(let i = 0; i < size; i++){
      board.push([])
      for(let j = 0; j < size; j++){
        board[i].push(this.random())
      }
    }
    this.play = board
  }

  random(){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let acak = alphabet[Math.ceil(Math.random() * alphabet.length -1)]
    return acak
  }

  words(){
    let result = [];
    for(let i = 0; i < words.length; i++){
      result.push(words[i])
    }
    return result
  }

  solve(){
    let board  = this.play;
    let words  = this.words();
    let result = [];
    //ambil per index

    for(let i = 0; i < words.length; i++){
      result = []
      for(let j = 0; j < words[i].length; j++){
        let check = words[i][j]
        if(this.checkChar(check)){
          break
        }

        let charPos = this.cekPos(charCheck)
        console.log(charPos);

        if(result[check] == null){
          result[check] = chacPos
        }

        if(j == words[i].length -1){
          this.cekPerChar(words[i], result)
        }
      }
    }
    console.log(board);
    // console.log(this.words());
    this.printResult();
    return '';
  }

  printResult(){
    console.log(this.result.length, ' word found:');
    for(let i = 0; i<this.result.length; i++){
      console.log(this.result[i]);
    }
  }

  checkChar(char){
    let board = this.play;
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++){
        if(char == board[i][j]){
          return false
        }
      }
    }
    return true
  }

  cekPos(word){
    let board = this.play;
    let pos = [];
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++){
        if(word == board[i][j]){
          pos.push([i,j])
        }
      }
    }
    return pos
  }

  cekPerChar(word, result){
    let counter = 0;
    for(let i = 0; i < word.length; i++){
      let current = result[word[i]][0]
      let next = result[word[i+1]][0]

      //cek dari indeks sekaran setelah dihapus ada undifend
      if(current == undefined || next == undefined){
        break
      }
      if(current[0]-1 <= next[0] && next[0] <= current[0]+1 && current[1]-1 <= next[1] && next[1] <= current[1]+1){
        counter += 1

        result[word[i]].shift()
      }
    }
    if(count == word.length-1){
      this.result.push(word)
    }
    return ''
  }

}

let boggle = new Boggle();
// boggle.testBoard();
boggle.shake(4)
boggle.random()
boggle.solve()
