class Boggle {
  constructor(kamus) {
    this.arr = []
    this.kamus = kamus;
  }

  abjad(){
  let abjad = 'abcdefghijklmnopqrstuvwxyz'
  let acak ;
    for (var i = 0; i < abjad.length ; i++) {
      acak = abjad.charAt(Math.floor(Math.random() * 26))
    }
  return acak
}


  shake(num){
    for (let i = 0; i < num; i++) {
      this.arr.push([])
        for(let j = 0;j<num;j++){
          let huruf = this.abjad()
          this.arr[i].push(huruf)
        }
    }
    return this.arr
  }

  cekHuruf(arr,index){
    if(arr.indexOf(index) !== -1){
      return true;
    } else {
      return false
    }
  }

}

const kamus = require('./data');
let test = new Boggle()



console.log(test.shake(4));
