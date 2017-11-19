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
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
  }

  pojokKiriBawah (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( (+col - 1) + row)
    zone.push ( (+col - 1) +''+ (+row + 1))
    zone.push ( col + (+row + 1))
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
  }

  pojokKananAtas (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( col + (+row - 1))
    zone.push ( (+col + 1) + row )
    zone.push ( (+col + 1) +''+ (+row - 1))
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
  }

  pojokKananBawah (obj, huruf) {
    let col = obj.kordinat[0]
    let row = obj.kordinat[1]
    let zone = []
    zone.push ( col + (+row - 1))
    zone.push ( (+col - 1) +''+ (+row - 1))
    zone.push ( (+col -1) + row )
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
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
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
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
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
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
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
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
    for (let i = 0; i < this.arrObj.length; i++) {
      if (this.arrObj[i].huruf == huruf && zone.indexOf(this.arrObj[i].kordinat) != -1) {
        this.arrObj[i].mark = true
        return this.arrObj[i]
      }
    }
    return -1
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
        if (col > 0 && col < this.board.length-1 && row > 0 && row < this.board[i].length-1) {
          if(this.cariKataKotakMid(obj, kamus[i]) != -1 ) {
            result.push(this.cariKataKotakMid(obj, kamus[i]))
          }
        }else if (col == 0 && row > 0 && row < this.board[i].length-1) {
          if(this.pinggirAtas(obj, kamus[i]) != -1 ) {
            result.push(this.pinggirAtas(obj, kamus[i]))
          }
        }else if (col == this.board.length -1 && row > 0 && row < this.board[i].length-1) {
          if(this.pinggirBawah(obj, kamus[i]) != -1 ) {
            result.push(this.pinggirBawah(obj, kamus[i]))
          }
        }else if (col > 0 && col < this.board.length-1 && row == 0 ) {
          if(this.pinggirKiri(obj, kamus[i]) != -1 ) {
            result.push(this.pinggirKiri(obj, kamus[i]))
          }
        }else if (col > 0 && col < this.board.length-1 && row == this.board[i].length -1 ) {
          if(this.pinggirKanan(obj, kamus[i]) != -1 ) {
            result.push(this.pinggirKanan(obj, kamus[i]))
          }
        }else if (col == 0 && row == 0) {
          if(this.pojokKiriAtas(obj, kamus[i]) != -1 ) {
            result.push(this.pojokKiriAtas(obj, kamus[i]))
          }
        }else if (col == this.board.length-1 && row == 0) {
          if(this.pojokKiriBawah(obj, kamus[i]) != -1 ) {
            result.push(this.pojokKiriBawah(obj, kamus[i]))
          }
        }else if (col == 0 && row == this.board[i].length-1) {
          if(this.pojokKananAtas(obj, kamus[i]) != -1 ) {
            result.push(this.pojokKananAtas(obj, kamus[i]))
          }
        }else if (col == this.board.length-1 && row == this.board[i].length-1) {
          if(this.pojokKananBawah(obj, kamus[i]) != -1 ) {
            result.push(this.pojokKananBawah(obj, kamus[i]))
          }
        }
      }
    }
    let arrRes = []
    result.forEach((huruf)=>{
      arrRes.push(huruf.huruf)
    })
    if(result.length < kamus.length){
      console.log('no words found '+arrRes);
    }else{
      console.log(`words found ${arrRes.join('')}`);
    }
  }
}

let boggle = new Boggle(4,4)
boggle.shake()
boggle.initAbjad()
boggle.search('ttp');
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
