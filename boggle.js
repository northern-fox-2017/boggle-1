const kamus = require('./data.js');
class Boggleboard {
    constructor(kamus) {
        this.kamus = kamus,
        this.papan = [],
        this.koor  = [],
        this.found = [],
        this.abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    checkHuruf (kata){
      //let boo = kata.split('')
      for(var i = 1; i < kata.length; i++){
           this.cekArea(this.koor[this.koor.length-1][0],this.koor[this.koor.length-1][1],kata[i])
      }
          if(this.koor.length === kata.length){
              return true;
          } else {
              return false;
          }
     }

    shake() {
      let count = 0
      for (let i = 0; i < 4; i++) {
        this.papan.push([])
      }

      for (let j = 0; j < 16; j++) {
        let random = Math.floor(Math.random() * this.abjad.length)
        this.papan[count].push(this.abjad[random])
        if (count < 3) {
          count++
        } else {
          count = 0
        }
      }
      return this.papan
    }

    checkHistory(baris, kolom) {
      for (let i = 0; i < koor.length; i++) {
        if (this.koor[i][1] == baris && this.koor[i][0 == kolom]) {
          return false
        }
      }
      return true
    }

    checkArea (baris, kolom, huruf){
        let grid = this.papan
        for(var i =0; i < 8; i++){

         //cek atas
         if(i == 0 && baris-1 > -1){
            if(grid[kolom][baris-1] == huruf&& this.checkHistory(kolom,baris-1)==true){return this.koor.push([kolom,baris-1])}
        }
         //cek kanan atas
         if(i == 1 && kolom+1 < grid && baris-1 > -1){
            if(grid[kolom+1][baris-1] == huruf && this.checkHistory(kolom+1,baris-1)==true){return this.koor.push([kolom+1,baris-1])}
        }
         //cek kanan
         if(i == 2 && kolom+1 < grid){
            if(grid[kolom+1][baris] == huruf && this.checkHistory(kolom+1,baris)==true){return this.koor.push([kolom+1,baris])}
        }
        //cek kanan bawah
        if(i == 3 && kolom+1 < grid && baris+1<grid){
            if(grid[kolom+1][baris+1] == huruf && this.checkHistory(kolom+1,baris+1)==true){return this.koor.push([kolom+1,baris+1])}
        }
         //cek bawah
        if(i == 4 && baris+1<grid){
            if(grid[kolom][baris+1] === huruf && this.checkHistory(kolom,baris+1)==true){return this.koor.push([kolom,baris+1])}
        }
        //cek kiri bawah
        if(i == 5 && kolom-1>-1 && baris+1 < grid){
            if(grid[kolom-1][baris+1] == huruf && this.checkHistory(kolom-1,baris+1)==true){return this.koor.push([kolom-1,baris+1])}
          }
        // cek kiri
        if(i == 6 && kolom-1 >-1){
            if(grid[kolom-1][baris] == huruf && this.checkHistory(kolom-1,baris)==true){return this.koor.push([kolom-1,baris])}
          }

        // cek kiri atas
        if(i == 7 && kolom-1 > -1 && baris-1 > -1){
            if(grid[kolom-1][baris-1] == huruf && this.checkHistory(kolom-1,baris-1== true)){return this.koor.push([kolom-1,baris-1])}
          }

      }
        return this.koor;
    }

    solve (){
        console.log(this.kamus.length)
        for(var i = 0; i < this.kamus.length; i++){
          let status = false;
          for(var j = 0; j < this.papan.length; j++){
            for(var k = 0; k < this.papan[j].length; k++){
            if(this.kamus[i][0] === this.papan[j][k]){
            this.koor = [[j,k]];
            //debugger
            if(this.checkHuruf(this.kamus[i])===true){
            this.found.push(this.kamus[i])
            status = true;
            break;
            }
          }
        }
          if(status==true){
            break;
          }
        }
      }
    }

}


let play = new Boggleboard(kamus);

console.log(play.shake())
// console.log(play.checkHistory())
console.log(play.solve())
