class Boggle {
  constructor(size) {
    this.size = size;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
    this.result = []
    this.check = true;
    this.box  = [ [ 'u', 'u',  'v', 'p' ],
                  [ 'i', 'z',  'g', 'a' ],
                  [ 'p', 'm',  'v', 'o' ],
                  [ 'e', 'd',  'r', 'x' ], ]

  }

  board(){
    for (var i = 0; i < this.size; i++) {
      this.result.push([])
      for (var j = 0; j < this.size; j++) {
        this.result[i].push(this.alphabet[Math.floor(Math.random()* this.alphabet.length)])
      }
    }return this.result;
  }

  solve(value, row, col) {

    if ( row == 0 && col > 0){
      for (let c = 0; c <= (row + 1); c++) {
        for (let d = Math.abs(col - 1); d <= (col + 1); d++) {
          console.log('row c' + c);
          console.log('col d' + d);
          console.log('\n');
          if(this.box[c][d] === value){
            this.check = false;
          }
        }
      }
    }
      if ( row == 0 && col == 0){
        for (let a = 0; a <= (row + 1); a++) {
          for (let b = 0; b <= (col + 1); b++) {
            console.log('row a' + a);
            console.log('col b' + b);
            console.log('\n');
            if(this.box[a][b] === value){
              this.check = false;
            }
          }
        }
      }
      for (let i = Math.abs(row - 1); i <= row + 1; i++) {
        for (let j = Math.abs(col - 1); j <= col + 1; j++) {
          console.log('row i' + i);
          console.log('col j' + j);
          console.log('\n');
          if(this.box[i][j] === value){
            this.check = false;
          }
        }
      } return this.check;
    }
  }



let bog = new Boggle(4);
console.log(bog.solve('p', 0, 2))
