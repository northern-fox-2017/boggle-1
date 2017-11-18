class BoggleBoard {
	constructor(){
		this.board = [];
		this.abjad = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', "Y", 'Z']
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
}

let boggle = new BoggleBoard();
console.log(boggle.shake(4));