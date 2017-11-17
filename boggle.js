class Boggle {
  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // this.acak   = this.random()
  }
  board(){
    let arr = []

    for(let i = 0; i < 4; i++){
      arr.push([])
      for(let j = 0; j < 4; j++){
        let random = this.random();
        arr[i].push(this.alphabet[random])
        console.log(this.random());
      }
    }
    return arr
  }
  random() {
    let acak = Math.ceil(Math.random() * this.alphabet.length -1)
    return acak
  }
}

let boggle = new Boggle()

boggle.board()
boggle.random()
