'use strict'

class Boggle {
    constructor(sourceWords) {
        this.source = sourceWords
        this.search = ['KAF', 'OBO', 'DAN', 'ZAL']
        this.arrWord = [];
        this.initialCoord = [];
        this.isMatch = false;
    }

    shakeBoard() { //Print Board & Generate random character to put inside the board
        const vowel = 'AEIOU';
        const consonant = 'BCDFGHJKLMNPQRSTVWXYZ'
        let idxRandomVowel = -1;
        let idxRandomConso = -1;
        let arrAlphabet = [];
        let randomAlphabet = [];

        // for (let i = 0; i < 8; i++) {
        //     idxRandomVowel = Math.floor(Math.random() * 5);
        //     idxRandomConso = Math.floor(Math.random() * 21);  
        //     arrAlphabet.push(vowel[idxRandomVowel]);
        //     arrAlphabet.push(consonant[idxRandomConso]);
        // }

        // let size = 4;               // chunk alphabet to 4 element 
        // while (arrAlphabet.length > 0) {
        //     randomAlphabet.push(arrAlphabet.splice(0, size));
        // }
        //return randomAlphabet;
        let qBoard = [
            ['O', 'S', 'I', 'D'],
            ['B', 'K', 'A', 'P'],
            ['O', 'N', 'F', 'K'],
            ['O', 'Z', 'A', 'L']
        ];
        return qBoard;

    }

    library() { //Generate random words to be search of

        // let filterWords = this.source.filter( function( element ) {  //filter the words that have length between 3 to 5 character
        //     return element.length >= 3 && element.length <= 5;  
        // });

        // let index = -1;
        // let randomWords = [];
        // let wordsAmount = 4;
        // for (let i = 0; i < wordsAmount; i++) {   
        //     index = Math.floor(Math.random() * filterWords.length-1);
        //     randomWords.push(filterWords[index]);
        // }
        // return search;   
    }

    findInitialCoord() {
        let kamus = this.search;
        let board = this.shakeBoard();
        let initialWord = '';

        let initialCoord = [];
        let probablyWord = [];

        for (let i = 0; i < 1; i++) {
            initialWord = kamus[i][0];
            for (let k = 0; k < board.length; k++) {
                let checkCoord = [];
                for (let m = 0; m < board[0].length; m++) {
                    if (initialWord === board[k][m]) { //
                        checkCoord.push(k);
                        checkCoord.push(m);
                        this.initialCoord.push(checkCoord);
                        if (this.arrWord[i] !== kamus[i]) {
                            this.arrWord.push(kamus[i]);
                        }
                    }
                }
            }
        }
        console.log(this.arrWord);
    }

    checkAround() {
        this.findInitialCoord();
        let coord = this.initialCoord;
        let board = this.shakeBoard();
        let probablyWord = [];
        let start = [];
        let outputCoord = [];

        start = coord[0];
        outputCoord.push(start);
        for (let a = 0; a < this.arrWord.length; a++) {
            for (let b = start[0][0] - 1; b < start[0][0] + 1; b++) {
                for (let c = start[0][1] - 1; c < start[0][1] + 1; c++) {
                    if (board[b][c] === this.arrWord[a][a + 1] && board[b][c] !== start) {
                        outputCoord.push(board[b][c]);
                        start = [b, c];
                    }
                }
            }
        }
    }

    // let tempIndex = [];
    // for (let j = 0; j < coord.length; j++) {
    //     start = coord[j];
    //     for (let k = 0; k <= start.length; k++) {
    //         let tempXY = [];
    //         for (let m = 0; m <= start.length; m++) {
    //             if (start !== [k, m]) {
    //                 if (board[k][m] === this.arrWord[0][1]) {
    //                     tempXY.push(k);
    //                     tempXY.push(m);
    //                     if (tempIndex[j - 1] !== tempXY) {
    //                         tempIndex.push(tempXY);
    //                         let tempIndexNP = [];
    //                         for (let n = 0; n <= start.length; n++) {
    //                             let tempNP = [];
    //                             for (let p = (tempXY[0][1] - 1); p <= (tempXY[0][1] + 1); p++) {
    //                                 if (tempXY !== [n, p] || tempXY !== start) {
    //                                     if (board[n][p] == this.arrWord[0][2]) {
    //                                         tempNP.push(n);
    //                                         tempNP.push(p);
    //                                         if (tempIndexNP[m - 1] !== tempNP) {
    //                                             tempIndexNP.push(tempNP);
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }   console.log(tempIndexNP);
    //                     }
    //                 }

    //             }
    //         }
    //     }
    //     console.log(tempIndex);
    // return tempIndex;

    // }

    isMatch() {
        this.checkAround();
        // this.coordChecked 
        // for (let i = 0; i < this.coordChecked.length; i++) {

        // }
    }

}

var fs = require('fs');
var sourceWords = fs.readFileSync('data.js', 'utf8');


var boggle = new Boggle(sourceWords);

console.log(boggle.library());
console.log(boggle.shakeBoard());
console.log(boggle.checkAround());

// console.log(sourceWords);