class Boggle{
  constructor(cols,rows){
    this.column = cols
    this.row = rows
    this.board = this.board()
    this.kamus = ['bafaot']
    this.arrObj = []
  }
  board(){
    let arr = []
    for (let i = 0; i < this.column; i++) {
      arr.push([])
    }
    return arr
  }

  initAbjad(){
    //let arrObj = []
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        let obj ={
          huruf:this.board[i][j],
          kordinat:`${i}${j}`,
          mark:false
        }
        this.arrObj.push(obj)
      }
    }
    //return arrObj
  }

  shake(){
    let index = 0
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.row; j++){
        let abjad = 'bsokcvltfaotfndp'
        //let random = abjad[Math.floor((Math.random()*abjad.length))]
        this.board[i].push(abjad[index])
        index++
      }
    }
  }
//cari posisi huruf awal
  cariHurufAwal(huruf){
    for (let i = 0; i < this.arrObj.length; i++) {
      if(this.arrObj[i].huruf == huruf){
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
  }

  pojokKiriAtas (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( (+col + 1) + row)
    zone.push ( (+col + 1) +''+ (+row + 1 ))
    zone.push ( col + (+row + 1 ))
    console.log(zone);
  }

  pojokKiriBawah (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( (+col - 1) + row)
    zone.push ( (+col - 1) +''+ (+row + 1))
    zone.push ( col + (+row + 1))
    console.log(zone);
  }

  pojokKananAtas (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( col + (+row - 1))
    zone.push ( (+col + 1) + row )
    zone.push ( (+col + 1) +''+ (+row - 1))
    console.log(zone);
  }

  pojokKananBawah (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( col + (+row - 1))
    zone.push ( (+col - 1) +''+ (+row - 1))
    zone.push ( (+col -1) + row )
    console.log(zone);
  }

  pinggirAtas (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( col + (+row + 1 ))
    zone.push ( col + (+row - 1 ))
    zone.push ( ( +col + 1 ) + row )
    zone.push ( (+col + 1) +''+ (+row - 1 ))
    zone.push ( (+col + 1) +''+ (+row + 1 ))
    console.log(zone);
  }

  pinggirKiri (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( (+col - 1) + row )
    zone.push ( (+col - 1) +''+ (+row + 1))
    zone.push ( (+col + 1) + row)
    zone.push ( (+col + 1) +''+ (+row + 1))
    zone.push ( col + ( +row + 1 ))
    console.log(zone);
  }

  pinggirBawah (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( col + (+row - 1))
    zone.push ( col + (+row + 1))
    zone.push ( (+col - 1) +''+ (+row - 1))
    zone.push ( (+col - 1) + row )
    zone.push ( (+col - 1) +''+ (+row + 1))
    console.log(zone);
  }

  pinggirKanan (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ((+col - 1) +''+ (+row - 1))
    zone.push ((+col - 1) + row )
    zone.push ( col + (+row - 1))
    zone.push ( (+col + 1) +''+ (+row - 1))
    zone.push ( (+col + 1) + row )
    console.log(zone);
  }

  cariKataKotakMid (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( ( +col - 1 ) +''+ ( +row - 1 ))
    zone.push ( ( +col - 1 ) +''+ ( +row + 1 ))
    zone.push ( ( +col + 1 ) +''+ ( +row - 1 ))
    zone.push ( ( +col + 1 ) +''+ ( +row + 1 ))
    zone.push ( ( +col + 1) + row )
    zone.push ( ( +col - 1) + row )
    zone.push ( col + ( +row - 1) )
    zone.push ( col + ( +row + 1) )
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
  }
//search pertama cari posisi huruf awal
  search(kamus){
    let result = []
    if(this.cariHurufAwal(kamus[0]) != -1) {
      let obj = this.cariHurufAwal(kamus[0])
      result.push(obj)
      let col = obj.kordinat[0]
      let row = obj.kordinat[1]
      for (let i = 1; i < kamus.length; i++ ){
        if (col > 0 && row > 0) {
          if(this.cariKataKotakMid(obj, kamus[i]) != -1 ) {
            result.push(this.cariKataKotakMid(obj, kamus[i]))
          }
        }
      }
    }
    console.log(result);
  }
}

let boggle = new Boggle(4,4)
boggle.shake()
boggle.initAbjad()
//boggle.search('vaolo');
//boggle.pojokKananBawah(boggle.arrObj[15])
//console.log(boggle.board);
//console.log(boggle.cariKataKotakMid(boggle.arrObj[6],'a'))
console.log(boggle.board);
//console.log(boggle.cariHurufAwal('v'))
//pinggir atas
// (00)->01->10->11
// 00<-(01)->02->10->11->12
// 01<-(02)->03->11->12->13
//pinggir kanan
// 02<-(03)->12->13
//pinggi kiri
// 01<-00<-(10)->11->20-21

// 02<-03<-(13)->12->22->23
//
// 21<-20<-(30)->31
// 20<-21<-22<-(31)->30->32
// 22<-23<-(33)->32
//(11)->00->01->02->10->12->20->21->22
// (21)->10->11->12->20->22->30->31->32->
