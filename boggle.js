class Boggle {
  constructor() {
    this.dictionary = this.getDictionary();
    this.board = [];
    console.log(this.dictionary);
  }

  getDictionary() {

  }

  display() {
    var ui = '';
    this.board.forEach(element => {
      ui += '|' + element + '|\n';
    });
    console.log(ui.split(',').join('|'));
  }

  shake(num) {
    if (num >= 4) {
      for (var i = 0; i < num; i++) {
        this.board.push([]);
      }

      for (var j = 0; j < num; j++) {
        for (var k = 0; k < num; k++) {
          var randomNumber = Math.floor(Math.random() * 26); // 26 is the total of alphabet
          var randomAlphabet = String.fromCharCode(65 + randomNumber) // +65 to get uppercase letter + 97 to get lowercase letter
          this.board[j].push(randomAlphabet);
        }
      }
      return this.board;
    } else {
      console.log('Papan minimal harus 4X4');
    }
  }

  solve() {
    console.log(this.board);
  }
}

var fs = require('fs');
fs.readFile('data.js', function (err, data) {
  content = data.toString().split('"')
    .join('').split(']').join('').split('[')
    .join('').split('var words = ').join('').split(',');
  console.log(content);
});


var test = new Boggle();
test.shake(4);
test.display();
test.solve();
test.getDictionary();