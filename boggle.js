const words = require ('./data')
class Boggle {
  constructor(num,words) {
    this.boardShake = num
    this.arr = []
    this.dummy = [ [ 'D', 'I', 'L', 'E' ],
                   [ 'C', 'J', 'M', 'Z' ],
                   [ 'D', 'K', 'P', 'X' ],
                   [ 'O', 'S', 'C', 'N' ]]
    this.kamus = ['OSK','DILE','EZE','TILE']
    this.posisi = []
    this.result = []
    this.dataKamus = words
  }

  board(){
    for (let i = 0 ; i < this.boardShake ; i++){
      this.arr.push([])
      for (let j = 0; j < this.boardShake ; j++){
        this.arr[i].push(this.random())
      }
    }
  }
  random(){
    let acak = Math.floor(Math.random()*(91 - 65) + 65)
    return String.fromCharCode(acak)

   }
   //manggil checkposisi ama checkKamus
   //olah kamus dan pecah jadi perkata
   //jika huruf pertama sama dengan huruf pertama kamus
   //maka lanjutkan pencarian huruf berikutnya
   //jika tidak lanjut ke kata kamus berikutnyaa

  solve(){
    let counter = 0
    for (var i = 0; i < this.result.length; i++) {
      if (this.result[i] == this.kamus[i]){
        counter++
      }
    }

    console.log(`${counter} Word Found`);
    for (var j = 0; j < this.result.length; j++) {
      if (this.result[j] == this.kamus[j]){
        console.log(this.result[j]);
      }
    }

  }

  checkHuruf(hurufPertama){
    debugger
    let index = ''
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].value == hurufPertama){
        // console.log(this.arr[i]);
        return this.arr[i]
      }
    }

    return -1;
  }

  checkKata(){
    debugger
    let kamus = this.kamus

    let cariKata = ''
    // console.log(kamus.length);
    // cari semua kemungkinan kata dari di index yang dikirim
    // while (!flag) {
    //
    // }
    for (var k = 0; k < kamus.length; k++) {
      // this.arr = this.posisi
      let index = this.checkHuruf(kamus[k][0])
      if (index == -1) {
        continue;
      }
      let baris = index.x
      let kolom = index.y
      this.ubahStatus()
    for (var i = 0; i < kamus[k].length; i++) {

      for (var j = 0; j < this.arr.length; j++) {
        // console.log(this.arr);
        if (baris == this.arr[j].x && kolom == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          cariKata+= this.arr[j].value
        }
        else if (baris + 1 == this.arr[j].x && kolom == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          baris += 1
          cariKata+= this.arr[j].value
        }
        else if (baris == this.arr[j].x && kolom + 1 == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          kolom += 1
          cariKata+= this.arr[j].value
        }
        else if (baris - 1 == this.arr[j].x && kolom == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          baris -= 1
          cariKata+= this.arr[j].value
        }
        else if (baris == this.arr[j].x && kolom -1 == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          kolom -= 1
          cariKata+= this.arr[j].value
        }
        else if (baris + 1 == this.arr[j].x && kolom + 1 == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          baris += 1,kolom += 1
          cariKata+= this.arr[j].value
        }
        else if (baris + 1 == this.arr[j].x && kolom -1 == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          baris += 1, kolom -= 1
          cariKata+= this.arr[j].value
        }
        else if (baris - 1 == this.arr[j].x && kolom +1 == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          baris -= 1, kolom += 1
          cariKata+= this.arr[j].value
        }
        else if (baris - 1 == this.arr[j].x && kolom -1 == this.arr[j].y && this.arr[j].value == kamus[k][i] && this.arr[i].status != false) {
          this.arr[i].status = false
          baris -= 1, kolom -= 1
          cariKata+= this.arr[j].value
        }
      }
    }
    this.result.push(cariKata)
    cariKata = ''
  }
    return this.result
  }

  //ngirim index yang bakal diolah ama solver
  checkPosisi(){
    for (var i = 0; i < this.dummy.length; i++) {
      for (var j = 0; j < this.dummy[i].length; j++) {
        let obj = {}
        obj.x = i
        obj.y = j
        obj.value = this.dummy[i][j]
        obj.status = true
        this.arr.push(obj)
      }
    }
    // return this.arr
  }

  //ngirim kamus buat dipecah solver
  ubahStatus(){
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i].status = true
    }
  }

}


let game = new Boggle (4,words);

// game.board();

console.log(game.dummy);
// console.log(game.checkKamus());
// game.checkHuruf('D');
// game.checkHuruf('D');
game.checkPosisi();

console.log(game.arr);

console.log(game.checkKata());
console.log(game.arr);
game.solve()
