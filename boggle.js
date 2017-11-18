class Boggle {
    constructor(Size){
        this.alpabetical = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this.dic = ['KETO,','JAJ','TOJAN','BIS']
        this.size  =  Size
        this.boggleBox = [
            [ 'K', 'E', 'T', 'O' ],
            [ 'Z', 'Z', 'N', 'J' ],
            [ 'M', 'I', 'H', 'A' ],
            [ 'H', 'B', 'J', 'N' ]]
        this.status = true;
    }
    shake(){
        for (let i = 0; i < this.size; i++) {
            this.boggleBox.push([])
            for (let j = 0; j < this.size; j++) {
                this.boggleBox[i].push(this.alpabetical[Math.floor(Math.random()*this.alpabetical.length)])
            }
        }
        return this.boggleBox
    }

    checkBoggle(col,row,input){
        let count = 0
        if(col==0 && row ==0){
            for (let i = 0; i <= row+1; i++) {
                for (let j= 0; j <= col+1; j++) {
                    // console.log(count++)
                    // console.log('\n')
                    console.log(i)
                    console.log(j)
                    console.log('\n')
                }
                
                
            }
        }else  if  (col==0){}


        
        else {
            for (let i = Math.abs(row-1); i <= row+1; i++) {
            for (let j = Math.abs(col-1); j <= col+1; j++) {
                console.log(i)
                console.log(j)
                console.log('\n')
                if(this.boggleBox[i][j]=== input){
                    return false 
                }
                else  {
                    this.status = true;
                }
            }
        }
        }

        
        return this.status
    }
    
   
}

let main = new Boggle(4)
// main.shake()
console.log(main.checkBoggle(0,0,'A'))