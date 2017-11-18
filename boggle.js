class BoggleBoard {
	constructor(){
		this.board = [];
		this.col = 0;
		this.row = 0;
		this.abjad = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', "Y", 'Z'];
		this.kamus = ['ADI', 'BUDI', 'DIA', 'DUTA', 'KAMU', 'PIL' ,'UANG', 'YOYO'];
	}
	shake(luas){
		for (var i = 0; i < luas; i++) {
			this.board.push([])
			for (var j = 0; j < luas; j++) {
				let acak = Math.round(Math.random()*(25-0)+0)
				this.board[i].push(this.abjad[acak]);
			}
		}
		console.log(this.board)
		return this.checkKamus();
	}
	pasti(){
		let str = 'DMHIKLPSGAEUTORN'
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
	checkArea(huruf, col, row){
		for (var i = col-1; i < (col+2); i++) {
			if (this.board[i] == undefined) {
  				continue;
  			}
  			for (var j = row-1; j < (row+2); j++) {
  				if (this.board[j] == undefined) {
  					continue;
  				}
  				if (huruf == this.board[i][j] && (i!=this.col || j!= this.row)) {
  					this.col = i;
  					this.row = j;
  					return true;
  				}  				
  			}  			
  		}
  		return false;
	}
	checkHuruf(huruf){
		let hurufCount = 0;
		for (var i = 0; i < this.board.length; i++) {			
			for (var j = 0; j < this.board[i].length; j++) {
				if (huruf == this.board[i][j]) {
					hurufCount++
				}
			}
		}
		for (var i = 0; i < this.board.length; i++) {			
			for (var j = 0; j < this.board[i].length; j++) {
				if (hurufCount > 1) {
					if (huruf == this.board[i][j] && (j != this.row || i!= this.col)) {
						var ij = String(i)+'|'+String(j)
						return ij;
					}
				}
				else {
					if (huruf == this.board[i][j]) {
						var ij = String(i)+'|'+String(j)
						return ij;
					}
				}
			}
		}
		return false;
	}
	checkHurufAwal(huruf){
		for (var i = 0; i < this.board.length; i++) {			
			for (var j = 0; j < this.board[i].length; j++) {
				if (huruf == this.board[i][j]) {
						var ij = String(i)+'|'+String(j)
						return ij;
					}
			}
		}
	}
	checkKata(kata){
		let ij = 0;
		let col = 0;
		let row = 0;
		for (var i = 0; i < kata.length; i++) {
			if (i == 0) {
				if (this.checkHurufAwal(kata[i])) {
					ij = this.checkHurufAwal(kata[i]).split('|')
					col = Number(ij[0]);
					row = Number(ij[1]);
				}
				else {
					return false;					
				}				
			}
			if (i > 0) {
				if (this.checkArea(kata[i], col, row)){
					ij = this.checkHuruf(kata[i]).split('|')
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
	checkKamus(){
		let result = [];
		for (var i = 0; i < this.kamus.length; i++) {
			if (this.checkKata(this.kamus[i])) {
				result.push(this.kamus[i]);
				
			}
		}
		if (result.length > 0) {
			return `${result.length} ditemukan: ${result}`
		}
		else {
			return 'Kata dalam kamus tidak ditemukan'
		}
	}

}

let boggle = new BoggleBoard();
console.log(boggle.shake(10));
// console.log(boggle.pasti());
// console.log(boggle.checkKamus());