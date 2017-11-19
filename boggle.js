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
        debugger
        
        if(col==0 && row ==0){ //col min , row min
            // for (let i = 0; i <= row+1; i++) {
            //     for (let j= 0; j <= col+1; j++) {
            //        
            //         console.log(i)
            //         console.log(j)
            //         console.log('\n')
            //     }
            console.log('disini')
                
                
            // }
        }else  if  (col>0 && row == 0){ //col dinamis , row 0
            // for (let i = 0; i <= (row+1); i++) {
            //     for(let j = col-1; j <= col+1;j++){
            //         console.log(i)
            //         console.log(j)
            //         console.log('\n')

            //     }
                
                
            // }
        }
        else if(col == 0 && row >0){ //col  0,row dinamis
            for (let i = Math.abs(row-1); i <= row+1; i++) {
                for (let j = 0; j <= col+1; j++) {
                    console.log(i)
                    console.log(j)
                    console.log('\n')
                    
                }
                
            }
        }
        else if ((col == this.boggleBox.length-1) && (row < this.boggleBox.length-1)){  // col  = max, row dinamis
            // for (let i = row-1; i <= row+1; i++) {
            //     for (let j = col-1; j <= col; j++) {
            //         console.log(i)   
            //         console.log(j)
            //         console.log('\n')
                    
            //     }
                
            // }

        }else if ((col <this.boggleBox.length-1) && (row == this.boggleBox.length-1)){ // row =  max,  col dinamis
            // for (let i = row-1; i <= row; i++) {
            //     for (let j = col-1; j <= col+1; j++) {
            //         console.log(i)
            //         console.log(j)
            //         console.log('\n')
                    
            //     }
                
                
            // }
        }else if ((col  == this.boggleBox.length-1) && (row == this.boggleBox.length-1)){ //col && row == max
            // for (let i = row-1; i <= row; i++) {
            //     for (let j = col-1; j <= col; j++) {
            //         console.log(i)
            //         console.log(j)
            //         console.log('\n')
                    
            //     }

            // }
         }
        else { 
        //     for (let i = Math.abs(row-1); i <= row+1; i++) { // col == row
        //     for (let j = Math.abs(col-1); j <= col+1; j++) {
        //         console.log(i)
        //         console.log(j)
        //         console.log('\n')
        //         if(this.boggleBox[i][j]=== input){
        //             return false 
        //         }
        //         else  {
        //             this.status = true;
        //         }
        console.log(this.boggleBox.length-1)
        //     }
        // }
        }

        
        return this.status
    }
    
   
}

let main = new Boggle(4)
// main.shake()
console.log(main.checkBoggle(0,1,'A'))