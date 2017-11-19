areaKotak(col,row) {
  let arr =[]
  if(col == 0 && row == 0){

  }
}

cariKorPertama(kata) {
  for (let i = 0; i < this.board.length; i++) {
    if(this.board[i].indexOf(kata) != -1){
      return `${i}${this.board[i].indexOf(kata)}`
    }
  }
  return -1
}

search(kamus) {
  //cari kordinat huruf pertama
  if(this.cariKorPertama(kamus[0])!=-1) {
    //jika ketemu tentukan area kotak kordinat tsb
    let col = +this.cariKorPertama(kamus[0])[0]
    let row = +this.cariKorPertama(kamus[0])[1]
    console.log(col,row)
    if(col == 0) {
      if(row == 0) {

      }
    }

  }

}
