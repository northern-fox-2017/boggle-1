const fs = require('fs')
const kata = require('./data.js')
const random = require('./randomKata.js')

class Boggle {
  constructor() {
    this.kata = kata
  }

  shake(barisKolom) {
    let arr = [];

    for(let i = 0 ; i < barisKolom ; i++) {
      arr.push([])
        for(let j = 0 ; j < barisKolom ; j++) {
          arr[i].push(random())
        }
    }
    console.log(arr);
  }

  genereateKamusData() {
    let array = [];
    for(let i = 0 ; i < 5 ; i++) {
      let random = Math.floor(Math.random() * this.kata.length);
        array.push(this.kata[random])
    }
    console.log(array);
  }

  solve() {
    
  }

}

let boggle = new Boggle()

boggle.shake(4);
boggle.genereateKamusData();
