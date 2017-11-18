"use strict"

class Boogle {
  constructor(data_string){
    this.data_string = data_string;
    this.papan = [];
    this.alp = '';
  }

  shake(kotak){
    for (var i = 0; i < Math.pow(kotak,2); i++) {
      let dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let alpRandom = Math.floor((Math.random()*dictionary.length))
      this.alp += dictionary[alpRandom];
    }
    for (var i = 0; i < this.alp.length-1; i+= kotak) {
      this.papan.push(this.alp.substr(i,kotak).split(''));
    }
    return console.log(this.papan);
  }






}


let game = new Boogle();


game.shake(4);
// console.log(game.board());
