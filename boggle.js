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

	metHurufChecker(array, huruf){
		this.boggle = array;
		this.availableHuruf = []
		for(let i = 0; i < this.size; i++){
			for(let j = 0; j < this.size; j++){
				if(huruf === this.boggle[i][j]){
					this.availableHuruf.push([i, j])
				}
			}
		}



		return this.availableHuruf
	}

	metCreateArea(array, huruf){
		this.boggle = array;
		this.arrArea = [];
		this.hurufChecker = this.metHurufChecker(this.boggle, huruf)
		if(this.hurufChecker.length !== 0){
			for(let i = 0; i < this.hurufChecker.length ; i++){
				this.arrArea.push([])
				for(let j = -1; j < 2; j++){
					// this.arrArea[i].push(i)
					for(let k = -1; k < 2; k++){
						let row = this.hurufChecker[i][0];
						let column = this.hurufChecker[i][1];
						if((j + row) !== row || (k + column) !== column){
							if(this.boggle[j + row] !== undefined && this.boggle[k + column] !== undefined){
								this.arrArea[i].push([(j + row) , (k + column)])
							}
							
						}
						
					}
				}
				
			}
		}
		return this.arrArea
	}

	metSolver(array, word, arrHurufSebelumnya = []){
		this.array = array;
		this.tampung = []
		this.firstHuruf = this.metHurufChecker(this.array, word[0])
		this.hurufPembanding = this.metHurufChecker(this.array, word[1])
		this.arrSebelumnya = arrHurufSebelumnya
		debugger
		if(word.length === 1){
			this.countHurufSama = 0
			for(let i = 0; i < this.arrSebelumnya.length; i++){
				for(let j = 0; j < this.firstHuruf.length; j++){
					if(this.arrSebelumnya[i][0] === this.firstHuruf[j][0] && this.arrSebelumnya[i][1] === this.firstHuruf[j][1]){
						this.countHurufSama +=1
					}else{
						if(this.firstHuruf.length === 0){
							this.countHurufSama += 1
						}
						
					}
				}
				
			}
			if(this.countHurufSama > 0){
				return this.metFinished(false)
			}else{
				return this.metFinished(true)
			}

			
		}else{
			this.area = this.metCreateArea(this.array, word[1])

			// this.tampung.push(this.hurufChecker)

			for(let j = 0; j < this.firstHuruf.length; j++){
				// this.tampung.push(this.firstHuruf[j])
				for(let k = 0; k < this.area.length; k++){
					// this.tampung.push(this.area[k])
					// console.log(this.area[k])

					for(let l = 0; l < this.area[k].length; l++){
						// this.tampung.push(this.area[l])
						// console.log(this.firstHuruf[j], this.area[k][l])

						if(this.firstHuruf[j][0] === this.area[k][l][0] && this.firstHuruf[j][1] === this.area[k][l][1]){
							// console.log(this.firstHuruf[j], this.area[k][l])
							if(this.arrSebelumnya.length === 0){
								this.arrSebelumnya.push(this.firstHuruf[j])
								this.tampung.push(this.area[k][l])
								this.arrSebelumnya.push(this.area[k][l])

							}else{
								for(let m = 0; m < this.arrSebelumnya.length; m++){
									if(this.arrSebelumnya[m][0] !== this.area[k][l][0] || this.arrSebelumnya[m][1] !== this.area[k][l][1]){
										this.arrSebelumnya.push(this.area[k][l])
										this.tampung.push(this.area[k][l])
									}
								}
							}
							
							
						}
					}
				}
			}
			if(this.tampung.length === 0){
				return this.metFinished(false)
			}else{
				this.wordSplit = word.split('')
				this.wordSplice = this.wordSplit.splice(0, 1)
				this.wordJoin = this.wordSplit.join('')

				return this.metSolver(this.array, this.wordJoin, this.arrSebelumnya);

			}
		}
			
		

	}

	metFinished(boolean){
		return boolean

	}










}

let andrey = new Boggle(5);
// console.log(andrey.metRandomAlphabet())
andrey.metBoard()
// console.log(andrey.board)

let arr =[ 
  [ 'L', 'E', 'S', 'T', 'L' ],
  [ 'D', 'E', 'M', 'J', 'S' ],
  [ 'N', 'M', 'J', 'N', 'W' ],
  [ 'P', 'R', 'V', 'O', 'P' ],
  [ 'W', 'J', 'T', 'R', 'M' ] ]

let word = [
	'MEN', //HASILNYA TRUE
	'WON', //HASILNYA TRUE
	'MELD', //HASILNYA TRUE
	'MORE', //HASILNYA FALSE
	'WONT', // HASILNYA FALSE
	'POV', // HASILNYA TRUE
	]
// console.log(andrey.metHurufChecker(arr, 'W'))
// console.log(andrey.metCreateArea(arr, 'W'))

/*CARA MEMAINKANNNYAAAAA
Pertama : cetak your own board, lalu copas board tersebut ke variable array
Kedua : isi variable ke-2 dengan kata2 yang ingin kamu tes
Ketiga : see the result

Kekurangan :
-	gk bisa identifikasi apakah ini kata valid atau tidak, karena pas cek word dictionary b.inggris di ubuntu ternyata ada 90k, nangis pas mau test
-	mau pake library di data.js ada 30k, mau nangis juga pas ngetestnya
-	result yang keluar hanya true or false*/

for(let i = 0; i < word.length; i++){
	console.log(andrey.metSolver(arr, word[i]))
}
// console.log(andrey.metSolver(arr, 'MEN'))
// console.log(andrey.metSolver(arr, 'WEUYGH'))
