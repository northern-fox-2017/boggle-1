/*
   1. Pertama print board yang kemudia di isi dengan kata acak.
   2. Buat kata di dalam kamus menjadi bentuk objek tree(pohon)
      contoh : 'ali'
      menjadi:
      {
        a:{
          l:{
            i:{}
          }
        }
      }
   3. Kemudian cek kata tersebut ada atau tidak di board
*/

// const kamus = ['SAYA', 'ALI', 'INI', 'MAKAN', 'BYE', 'NEW', 'APPLE', 'FAN', 'FADE', 'SAD','NONE','NAN','SYS','AND','END','LOG','GOAL','SON','SUN','BAD','FAD'];
const kamus = require('./data');

class PlayBoggle {
  constructor(length, dictionary) {
    this.length = length;
    this.width = length;
    this.height = length;
    this.newBoard = [];
    this.huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.dictionary = dictionary;
    this.obj = {}
    this.hasil = []
    this.lookup = {}
  }

  board(){
    for (let i = 0; i < this.length; i++) {
      this.newBoard.push([])
      for (let j = 0; j < this.length; j++) {
        let random = Math.floor(Math.random() * this.huruf.length)
        this.newBoard[i].push(this.huruf[random])
      }
    }
    // var board = [
    //     [ 'A', 'B', 'C', 'D' ],
    //     [ 'A', 'F', 'S', 'J' ],
    //     [ 'D', 'E', 'A', 'T' ],
    //     [ 'G', 'U', 'N', 'F' ]
    // ];

    // return this.newBoard = board;

    return this.newBoard;
  }

  init () {
      debugger;
      // this.lookup = masuk()
      this.lookup = this.convertToTree(this.dictionary);
      // console.log(this.lookup);
      // console.log(this.lookup);
      this.cekBoard();
  }

  // mengkonvert kata kedalam bentuk tree(pohon)
  convertToTree(dictionary) {
    // debugger;
    // console.log('masuk');
    let word = ''
    let scope = {}
    let c = '';
    let tree = {};

    for (let i = this.dictionary.length; --i; ) {
        // console.log('masuk');
      scope = tree;
      word = dictionary[i];
      for (let j = 0; j < word.length; ++j ) {
        c = word.charAt(j);
        scope[c] = scope[c] || {};
        scope = scope[c]
        if ( j === word.length - 1 ) scope.word = true;
      }
    }
    // console.log(word);
    // console.log(this.dictionary);
    // console.log(tree);
    return tree;
  }

  // Mencari apakah kata yang di convert terdapat di board
  cekBoard(){
    debugger;

    let c = ''
    // console.log(this.newBoard[3][3]);
    for (let i = this.newBoard.length; i--; ) {
      for (let j = this.newBoard[i].length; j--; ) {
        // console.log(this.newBoard[i][j]);
        c = this.newBoard[i][j];
        // cek apa huruf ada di board, jika ada panggil method lintasan
        if ( this.lookup[c] ) this.lintasan( '', [], i, j, this.lookup[c] );
      }
    }
  }

  lintasan(word, history, x, y, lookup){
    // console.log('masuk');
    debugger;
    let c = '';
    let istart, iend, jstart, jend;

    word += this.newBoard[x][y];

    // kordinat history pencarian
    history.push( x + ',' + y );

    istart = Math.max( 0, x - 1 );
    iend = Math.min( x + 1, this.width - 1 );

    // jika hasilnya true. *word awalnya dibuat untuk menampung true*.
    // push hasil dengan titik kordinat history pencarian dan kata

    if ( lookup.word ) this.hasil.push(
      {
        coords: history.slice(),
        word: word
      }
    );


    for (let i = istart; i <= iend; i++ ) {
      jstart = Math.max( 0, y - 1 );
      jend = Math.min( y + 1, this.height - 1 );

      for (let j = jstart; j <= jend; j++ ) {
        if ( history.indexOf( i + ',' + j ) < 0 ) {
          // found = true;
          c = this.newBoard[i][j];
          if ( lookup[c] ) this.lintasan( word, history.slice(), i, j, lookup[c] );
        }
      }
    }
  }

  print(){
    debugger;
    let cetak = '';
    let count = 0;
    for (let i = this.hasil.length; i--; ) {
      count += 1
      cetak += this.hasil[i].word;
      cetak += '   | ' + this.hasil[i].coords.join(' - ') + '\n';
    }
    cetak += ''
    if (cetak.length == 0) {
      console.log('\n ==== KATA NOT FOUND ==== \n');
    }else {
      console.log('\n ==== '+count+' KATA YANG DITEMUKAN ==== \n');

      console.log(cetak);
    }
  }


}

let boggle = new PlayBoggle(6, kamus);
// console.log(kamus);
console.log(boggle.board());
boggle.init()
boggle.print()
// console.log(boggle.solve());
// console.log(boggle.checkBox(['SAYA']));
