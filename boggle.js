const words = require('./data.js')

class Boggle {
  constructor(){
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.simulasi = 'HYRSKUOENTTAOSQBZ'
    this.boxBoggle = []
    this.boxSimulasi = []
    this.dataKamus = words
    this.simulasiKamus = ['HUNT', 'METEOR', 'STAB', 'DOOM', 'RUN', 'ROSE']
    this.random = 0
  }

  shakeBoard(box){
    for(let i = 0; i < box; i++){
      this.boxBoggle.push([])
      for(let j = 0; j < box; j++){
        this.random = this.alphabet[Math.floor(Math.random() *this.alphabet.length)]
        this.boxBoggle[i].push(this.random)
      }
    }
    return this.boxBoggle
  }

  simulasiBoard(){
    let count = 0
    for(let i = 0; i < 4; i++){
      this.boxSimulasi.push([])
      for(let j = 0; j < 4; j++){
        this.boxSimulasi[i].push(this.simulasi[count++])
      }
    }
    return this.boxSimulasi
  }

  cekHurufSimulasi(){
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.boxSimulasi[i][j] == this.simulasiKamus[0][0]) {
          console.log(this.simulasiKamus[0][0]);
        }
      }
    }
  }
}



let boggle = new Boggle()
// console.log(boggle.shakeBoard(4))
console.log();
console.log(boggle.simulasiBoard())
// console.log(boggle.dataKamus[1]);
console.log(boggle.simulasiKamus[0][0]);
