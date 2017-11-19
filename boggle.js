class Boggle {
  constructor() {
    this.border = [];
    this.dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.boggle = [ [ 'L', 'O', 'Z', 'C', 'K' ],
                    [ 'K', 'M', 'P', 'J', 'A' ],
                    [ 'D', 'T', 'F', 'T', 'K' ],
                    [ 'X', 'B', 'Z', 'S', 'F' ],
                    [ 'O', 'R', 'B', 'X', 'U' ] ]
    this.words = ['MPJA', 'BRO', 'KAKFU', 'PFT', 'LDR', 'TFK'];
    this.check = true;
  }

  shake(square) {
    for (let i = 0; i < square; i++) {
      this.border.push([])
      for (let j = 0; j < square; j++) {
        this.border[i].push(this.dictionary[Math.floor(Math.random() * this.dictionary.length)])
      }
    }
    return this.border;
  }

  checkBoggle(row, col, input) {
    if (row == 0 && col == 0) {
      for (let i = 0; i <= (row + 1); i++) {
        for (let j = 0; j <= (col + 1); j++) {
          // console.log(i);
          // console.log(j);
          // console.log('\n');
          if(this.boggle[i][j] == input) {
            return false;
          }
        }
      }
    } else if (row == 0 && col > 0) {
      for (let u = 0; u <= (row + 1); u++) {
        for (let v = Math.abs(col - 1); v <= (col + 1); v++) {
          // console.log(u);
          // console.log(v);
          // console.log('\n');
          if(this.boggle[u][v] == input) {
            return false;
          }
        }
      }
    } else if (row > 0 && col == 0) {
      for (let w = Math.abs(row - 1); w <= (row + 1); w++) {
        for (let x = 0; x <= (col + 1); x++) {
          // console.log(w);
          // console.log(x);
          // console.log('\n');
          if(this.boggle[w][x] == input) {
            return false;
          }
        }
      }
    } else if((row == (this.boggle.length - 1)) && (col == (this.boggle.length - 1))) {
      for (let o = Math.abs(row - 1); o <= row; o++) {
        for (let p = Math.abs(col - 1); p <= col; p++) {
          // console.log(o);
          // console.log(p);
          // console.log('\n');
          if(this.boggle[o][p] == input) {
            return false;
          }
        }
      }
    } else if ((row == (this.boggle.length - 1)) && (col < (this.boggle.length - 1))) {
      for (let q = Math.abs(row - 1); q <= row; q++) {
        for (let r = Math.abs(col - 1); r <= (col + 1); r++) {
          // console.log(q);
          // console.log(r);
          // console.log('\n');
          if(this.boggle[q][r] == input) {
            return false;
          }
        }
      }
    } else if ((row < (this.boggle.length - 1)) && (col == (this.boggle.length - 1))) {
      for (let s = Math.abs(row - 1); s <= (row + 1); s++) {
        for (let t = Math.abs(col - 1); t <= col; t++) {
          // console.log(s);
          // console.log(t);
          // console.log('\n');
          if(this.boggle[s][t] == input) {
            return false;
          }
        }
      }
    } else {
      for (let k = Math.abs(row - 1); k <= (row + 1); k++) {
        for (let l = Math.abs(col - 1); l <= (col + 1); l++) {
          // console.log(k);
          // console.log(l);
          // console.log('\n');
          if(this.boggle[k][l] == input) {
            return false;
          }
        }
      }
    }
    return this.check;
  }
}

var boggle1 = new Boggle()

console.log(boggle1.checkBoggle(4, 4, '-')); //check string -
