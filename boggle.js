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
    this.words = ['YGEJID', 'BILI', 'MIRSID', 'GUTLE', 'LDR']
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
    return this.papan

  }

  checkArea(r,c,a){
    let isHuruf = false;
//Jika r dan c nya 0
    if(r == 0 && c == 0){
      for (var _r = 0; _r <= (r+1); _r++) {
        for (var _c = 0; _c <= (c+1); _c++){
        // console.log(`r: ${_r} c: ${_c}`);
          if(this.papan[_r][_c] == a){
            isHuruf = true;
          }
        }
      }
      return isHuruf;
    }
// kalo row dah mentok
    if(r >= this.papan.length-1){
      for (var _r = r-1; _r <= r; _r++) {
        for (var _c = c-1; _c <= (c+1); _c++){
        // console.log(`r: ${_r} c: ${_c}`);
          if(this.papan[_r][_c] == a){
            isHuruf = true;
          }
        }
      }
    return isHuruf;
    }
// kalo col dah mentok
    if(c >= this.papan.length-1){
      for (var _r = r-1; _r <= (r+1); _r++) {
        for (var _c = c-1; _c <= c; _c++){
        // console.log(`r: ${_r} c: ${_c}`);
          if(this.papan[_r][_c] == a){
            isHuruf = true;
          }
        }
      }
    return isHuruf;
  }

//pojok kanan atas
  if(c >= this.papan.length-1 && r == 0){
    for (var _r = r; _r <= (r+1); _r++) {
      for (var _c = (c-1); _c < (c+1); _c++) {
          // console.log(`r: ${_r} c: ${_c}`);
          if(this.papan[_r][_c] == a){
          isHuruf = true;
        }
      }
    }
    return isHuruf;
  }

//standard
    for (var _r = Math.abs(r-1); _r <= (r+1); _r++) {
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


let game = new Boogle();


// game.shake(6);
console.log(game.solve());
// game.solve()
console.log(game.checkArea(1,5,'A')); //cek col mentok = false
console.log(game.checkArea(0,0,'Y')); //cek nol nol = true
console.log(game.checkArea(5,2,'B')); //cek row mentok = true
console.log(game.checkArea(1,1,'Z')); //cek standar = false
console.log(game.checkArea(5,0,'I')); // cek pkiri bawah = true
console.log(game.checkArea(5,5,'L')); // cek pkanan bawah = true

// console.log(game.board());
