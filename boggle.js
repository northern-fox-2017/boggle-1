class BoggleBoard {
	constructor(){
		this.board = [];
		this.abjad = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', "Y", 'Z'];
		this.kamus = 'LPSEN'
	}
	shake(luas){
		for (var i = 0; i < luas; i++) {
			this.board.push([])
			for (var j = 0; j < luas; j++) {
				let acak = Math.round(Math.random()*(26-1)+1)
				this.board[i].push(this.abjad[acak]);
			}
		}
		return this.board;
	}
	pasti(){
		let str = 'DMHIKLPSGEUETORN'
		let strCount = 0;
		for (var i = 0; i < 4; i++) {
			this.board.push([])
			for (var j = 0; j < 4; j++) {
				this.board[i].push(str[strCount]);
				strCount++
			}
		}
		return this.board;
	}
	checkArea(kata, col, row){
		for (var i = col-1; i < col+2; i++) {
  			for (var j = row-1; j < row+2; j++) {
  				if (kata == this.board[i][j]) {
  					return true;
  				}
  			}
  		}
  		return false;
	}
	checkKata(kata){
		for (var i = 0; i < this.board.length; i++) {			
			for (var j = 0; j < this.board[i].length; j++) {
				if (kata == this.board[i][j]) {
					var ij = String(i)+'|'+String(j)
					return ij;
				}
			}
		}
	}
	solve(){
		let ij = 0;
		let col = 0;
		let row = 0;
		for (var i = 0; i < this.kamus.length; i++) {
			if (i == 0) {
				ij = this.checkKata(this.kamus[i]).split('|')
				col = ij[0];
				row = ij[1];
			}
			if (i > 0) {
				if (this.checkArea(this.kamus[i], col, row)){
					ij = this.checkKata(this.kamus[i]).split('|')
					col = ij[0];
					row = ij[1];
				}
				else {
					return false
				}
			}
			debugger			
		}
		return true;
	}

}

let boggle = new BoggleBoard();
// console.log(boggle.shake(4));
console.log(boggle.pasti());
console.log(boggle.solve());