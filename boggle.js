"use strict"

class Boogle {
  constructor(data_string){
    this.data_string = data_string;
    this.papan = [
  [ 'Y', 'U', 'T', 'L', 'E', 'M' ],
  [ 'G', 'S', 'C', 'B', 'I', 'F' ],
  [ 'E', 'F', 'M', 'R', 'C', 'P' ],
  [ 'J', 'B', 'S', 'I', 'R', 'D' ],
  [ 'I', 'I', 'B', 'K', 'W', 'L' ],
  [ 'D', 'L', 'V', 'F', 'S', 'C' ] ]
    this.alp = '';
    this.words = ['YGEJID', 'AVDES'];
    this.str = '';
    this.col = 0;
    this.row = 0;
    this.word = 'Y';
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

  solve(){
    console.log(this.papan);

  }

 //perualangan buat kata, misal ambil 1 dlu buat yang ini, jadi return nya di luar
  checkWord(huruf){
    for (var i = 0; i < this.words.length; i++) {
      this.word = this.words[i];
    }
    return this.word;
  }


  //check huruf pertama, isi word nya masi belum bener, anggep 1 dulu
  hurufPertama(){
    for (var _r = 0; _r < this.papan.length; _r++) { //buat tentuin row sm column
      for (var _c = 0; _c < this.papan.length; _c++) {
        // console.log(`r : ${_r} c : ${_c}`);
        for (var i = 0; i < this.word.length; i++) {
          // console.log(this.word[i]);
          if(this.word[i] == this.papan[_r][_c]){ //kalo isi ada di
            this.row = _r;
            this.col = _c;
            console.log(this.findWord(this.row,this.col,this.word[i]));
            // return true;
            // console.log(this.row);
            // console.log(this.col);
          } else {
            return 'huruf tidak ditemukan'
          }
        }
      }
    }
  }

  checkPerKata(){
    for (var i = 0; i < this.word.length; i++) {
      // console.log(this.word[i]);
      if(this.word[i] == this.papan[this.row][this.col]){
        return true;
      } else {
        return false;
      }
    }
  }

  findWord(r,c,a){
    let isHuruf = false;
    if(r == 0 && c == 0){     //kalo r dan c nya 0
      for (var _r = 0; _r <= (r+1); _r++) {
        for (var _c = 0; _c <= (c+1); _c++){
        console.log(`r: ${_r} c: ${_c}`);
          if(this.papan[_r][_c] == a){
            isHuruf = true;
          }
        }
      }
      return isHuruf;
    } else if(r == 0 && c > 0){   // kalo row = 0
      for (var _r = 0; _r <= r ; _r++) {
        for (var _c = c-1; _c <= c+1; _c++) {
          console.log(`r: ${_r} c: ${_c}`);
          if(this.papan[_r][_c] == a){
            isHuruf = true;
          }
        }
      }
      return isHuruf;
    } else if(r >= this.papan.length-1){  // kalo row dah mentok
      for (var _r = r-1; _r <= r; _r++) {
        for (var _c = c-1; _c <= (c+1); _c++){
        // console.log(`r: ${_r} c: ${_c}`);
          if(this.papan[_r][_c] == a){
            isHuruf = true;
          }
        }
      }
    return isHuruf;
  } else if(c >= this.papan.length-1){  // kalo col dah mentok
    for (var _r = r-1; _r <= (r+1); _r++) {
      for (var _c = c-1; _c <= c; _c++){
      // console.log(`r: ${_r} c: ${_c}`);
        if(this.papan[_r][_c] == a){
          isHuruf = true;
        }
      }
    }
  return isHuruf;
  } else if(c >= this.papan.length-1 && r == 0){ //pojok kanan atas
  for (var _r = r; _r <= (r+1); _r++) {
    for (var _c = (c-1); _c < (c+1); _c++) {
        // console.log(`r: ${_r} c: ${_c}`);
        if(this.papan[_r][_c] == a){
        isHuruf = true;
      }
    }
  }
  return isHuruf;
} else {
    for (var _r = Math.abs(r-1); _r <= (r+1); _r++) { //standard
      for (var _c = Math.abs(c-1); _c <= (c+1); _c++){
      // console.log(`r: ${_r} c: ${_c}`);
        if(this.papan[_r][_c] == a){
          isHuruf = true;
          }
        }
      }
      return isHuruf;
    }
  }
}


let game = new Boogle();
// game.shake(6);
// console.log(game.solve());
game.solve()
// console.log(game.findWord(0,3,'E'));
// console.log(game.checkWord());
// console.log(game.checkPerKata());
// console.log(game.findWord(3,0,'E'));
// console.log(game.board());
console.log(game.hurufPertama());
