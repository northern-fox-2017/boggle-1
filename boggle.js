"use strict"

class Boggle {
	constructor(size){
		this.size = size;
		this.board = [];
	}

	metRandomAlphabet(){
		this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let random = Math.round(Math.random() * 25)
		return this.alphabet[random]
	}

	metBoard(){
		for(let i = 0; i < this.size; i++){
			this.board.push([])
			for(let j = 0; j < this.size; j++){
				this.board[i].push(this.metRandomAlphabet())
			}
		}
		return this
	}








}

let andrey = new Boggle(5);
// console.log(andrey.metRandomAlphabet())
andrey.metBoard()
console.log(andrey.board)

