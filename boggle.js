const kamus = require('./data');

class Boggle {
	constructor(){
		this.alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		this.testBoard = [
		['A', 'N', 'H', 'I'],
		['U', 'E', 'H', 'J'],
		['S', 'K', 'O', 'M'],
		['A', 'B', 'V', 'A']]
		this.kamus = kamus;
	}
	
	box(){ //BOX DONE!
		var board = [];
		//var randomHuruf = Math.floor(Math.random()*this.alfabet.length)
		for(var i = 0; i < 4; i++){
			board.push([]);
			//var randomHuruf = Math.floor(Math.random()*this.alfabet.length)
			for(var j = 0; j < 4; j++){
			//console.log(array[i])
			var randomHuruf = Math.floor(Math.random()*this.alfabet.length);
			board[i].push(this.alfabet[randomHuruf]);	
		    }
		} 
		return board
	}
	
	library(){
		return this.kamus;
	}
	
	/*
	posisiAwal(huruf){ //Mbak, Mas, kenapa di kode yang ini hasil index nya salah tapi kalo test di testBoard bener ya?
		var tampung = [];
		var posisiHuruf = [];
		for(var i = 0; i < this.box().length; i++){
		//console.log(this.box()[i])
		   for(var j = 0; j < this.box()[i].length; j++){
			   tampung = []
			   //console.log(this.box()[j])
			   if(huruf === this.box()[i][j]){
				   tampung.push(i);
				   tampung.push(j);
				   posisiHuruf.push(tampung)
			   }
		   }
		}
		return posisiHuruf
	}
	*/
	
	posisi(huruf){
		var tampung = [];
		var posisiHuruf = [];
		for(var i = 0; i < this.testBoard.length; i++){
		//console.log(this.box()[i])
		   for(var j = 0; j < this.testBoard[i].length; j++){
			   tampung = []
			   //console.log(this.box()[j])
			   if(huruf === this.testBoard[i][j]){
				   tampung.push(i);
				   tampung.push(j);
				   posisiHuruf.push(tampung)
			   }
		   }
		}
		return posisiHuruf
	}
	
	
}

var hasil = new Boggle
//console.log(hasil.box())
console.log(hasil.testBoard)
console.log(hasil.posisi('A'))


/*
1.buat box ukuran 4x4
2.masukin huruf random
3.ambil posisi buat mulai ngecek(??)
  - atau cek baris(?)
  - atau cek kolom(?)
4.kalau huruf didalam box kebawah dan kesamping sama dengan data di library(?)
5.
*/