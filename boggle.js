class Boggle {
  constructor(){
    this.size = 4
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    this.vowels = 'AIUEO'
    this.consonants = this.alpha.filter(el => {
      return this.vowels.indexOf(el) === -1
    })
  }

  shake(size){
    this.size = size
    let rows = []
    for(let i =0; i < this.size * this.size; i += this.size){
      let row = []
      for(let j =i; j< i+this.size; j++){
        let randomConsonants = this.consonants[this.randomNum(0,this.consonants.length -1)]
        let randomVowels =this.vowels[this.randomNum(0,this.vowels.length -1)]
        let x= [randomVowels, randomConsonants]
        row.push(x[this.randomNum(0,1)])
      }
      rows.push(row)
    }
    console.log(rows.map(el => el.join('    ')).join('\n\n'))
  }

  randomNum(min, max) {
    let randomNum = Math.random()
    randomNum = randomNum * (max - min + 1)
    randomNum = Math.floor(randomNum)
    randomNum = randomNum + min
    return randomNum
  }  
}


let boggle = new Boggle()

boggle.shake(4)
console.log('\n')
boggle.shake(7)