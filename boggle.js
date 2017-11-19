const fs = require('fs')
const kata = require('./data.js')
const random = require('./randomKata.js')

class Boggle {
  constructor() {
    this.kata = kata
    this.arr  = []
    this.array = [];
  }

  shake(barisKolom) {
    for(let i = 0 ; i < barisKolom ; i++) {
      this.arr.push([])
        for(let j = 0 ; j < barisKolom ; j++) {
          this.arr[i].push(random())
        }
    }
    console.log(this.arr);
  }

  generateKamusData() {
    for(let i = 0 ; i < 5 ; i++) {
      let random = Math.floor(Math.random() * this.kata.length);
        this.array.push(this.kata[random])
    }
    console.log(this.array);
  }

  // checkHuruf() {
  //   let arr = [];
  //   let tampung = '';
  //   let startBaris = 0;
  //   let startKolom = 0;
  //   for(let i = 0 ; i < this.arr.length ; i++) {
  //     for(let j = 0 ; j < this.array.length ; j++) {
  //       if(this.arr[i][j] == this.array[0][0]) {
  //         if(this.arr[i][j] < this.arr[1][1]) {
  //           startBaris = 0;
  //           startKolom = 0;
  //         } else if(this.arr[i][j] < this.arr[2][2]) {
  //           startBaris = 1;
  //           startKolom = 1;
  //         } else if(this.arr[i][j] < this.arr[3][3]) {
  //           startBaris = 2;
  //           startKolom = 2;
  //         } else if(this.arr[i][j] < this.arr[4][4]) {
  //           startBaris = 3;
  //           startKolom = 3;
  //         }
  //       }
  //     }
  //   }
  //   console.log(arr);
  // }

}

let boggle = new Boggle()

boggle.shake(4);
boggle.generateKamusData();
// boggle.checkHuruf()
