class BoggleBoard {
	constructor(){
		this.board = [];
		this.col = 0;
		this.row = 0;
		this.abjad = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', "Y", 'Z'];
		this.kamus = 'EEI'
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
		let str = 'DMHIKLPSGEEUTORN'
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

		for (var i = col-1; i < (col+2); i++) {
  			for (var j = row-1; j < (row+2); j++) {
  				if (this.board[i] == undefined) {
  					break;
  				}
  				if (kata == this.board[i][j] && (i!=this.col || j!= this.row)) {
  					this.col = i;
  					this.row = j;
  					return true;
  				}  				
  			}
  			if (this.board[i] == undefined) {
  				break;
  			}
  		}
  		return false;
	}
	checkKata(kata){
		let kataCount = 0;
		for (var i = 0; i < this.board.length; i++) {			
			for (var j = 0; j < this.board[i].length; j++) {
				if (kata == this.board[i][j]) {
					kataCount++
				}
			}
		}
		for (var i = 0; i < this.board.length; i++) {			
			for (var j = 0; j < this.board[i].length; j++) {
				if (kataCount > 1) {
					if (kata == this.board[i][j] && (j != this.row || i!= this.col)) {
						var ij = String(i)+'|'+String(j)
						return ij;
					}
				}
				else {
					if (kata == this.board[i][j]) {
						var ij = String(i)+'|'+String(j)
						return ij;
					}
				}
			}
		}
		//Untuk 1 kata ga ada yang sama
		/*for (var i = 0; i < this.board.length; i++) {			
			for (var j = 0; j < this.board[i].length; j++) {
				if (kata == this.board[i][j]) {
						var ij = String(i)+'|'+String(j)
						return ij;
					}
			}
		}*/
		return false;
	}
	checkKataAwal(kata){
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
				if (this.checkKata(this.kamus[i])) {
					ij = this.checkKataAwal(this.kamus[i]).split('|')
					col = Number(ij[0]);
					row = Number(ij[1]);
				}
				else {
					return false;					
				}				
			}
			if (i > 0) {
				if (this.checkArea(this.kamus[i], col, row)){
					console.log(this.col,this.row)
					ij = this.checkKata(this.kamus[i]).split('|')
					col = Number(ij[0]);
					row = Number(ij[1]);
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