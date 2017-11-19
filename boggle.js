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
    this.simpanHurufPertama = []
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

  cekHurufSimulasiPertama(){
    for (let i = 0; i < this.boxSimulasi.length; i++) {
      for (let j = 0; j < this.boxSimulasi.length; j++) {
        for (var k = 0; k < this.simulasiKamus.length; k++) {
          if (this.boxSimulasi[i][j] == this.simulasiKamus[k][0]) {
            this.simpanHurufPertama.push([i, j])
          }
        }
      }
    }
    return this.simpanHurufPertama
  }

  cekDimensi(){
    
  }
}



let boggle = new Boggle()
// console.log(boggle.shakeBoard(4))
console.log();
console.log(boggle.simulasiBoard())
// console.log(boggle.dataKamus[1]);
console.log(boggle.cekHurufSimulasiPertama());
