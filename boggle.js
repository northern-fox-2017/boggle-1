class Boggle {
    constructor(ukuran, random) {
        this.data = require('./data')
        // this.data=['FOOD','MAU','NAS','OI']
        this.papan = random
        this.duplicater = random
        this.hasil = []
        this.panjang = ukuran;
        this.looping = 0
    }
    duplicat() {
        this.duplicater = [];
        for (let i = 0; i < this.papan.length; i++) {
            let arr = []
            for (let j = 0; j < this.papan[i].length; j++) {
                arr.push(this.papan[i][j]);
                this.looping++
            }
            this.duplicater.push(arr);
        }
    }
    checkAwal(indexKamus) {
        for (let i = 0; i < this.papan.length; i++) {
            for (let j = 0; j < this.papan[i].length; j++) {
                this.duplicat()
                if (this.papan[i][j] === this.data[indexKamus][0]) {
                    this.duplicater[i][j] = '*'
                    if (this.checkPapan(indexKamus, i, j, 1)) {
                        return true
                    }
                }
                this.looping++
            }
        }
        return false;
    }
    checkKamus() {
        for (let i = 0; i < this.data.length; i++) {
            if (this.checkAwal(i)) {
                this.hasil.push(this.data[i]);
            }
            this.looping++
        }
        console.log(this.hasil.toString())
        console.log(`Total Looping= ${this.looping}`)
        return `Jumlah hasil: ${this.hasil.length}`;
    }

    checkPapan(indexKms, indexBaris, indexKolom, stop) {
        if (stop === this.data[indexKms].length) {
            return true;
        } else {
            this.looping++
            if (this.kiriAtas(indexBaris, indexKolom, indexKms, stop)) {
                this.duplicater[indexBaris - 1][indexKolom - 1] = '*'
                return this.checkPapan(indexKms, indexBaris - 1, indexKolom - 1, stop + 1)
            } else if (this.atas(indexBaris, indexKolom, indexKms, stop)) {
                this.duplicater[indexBaris - 1][indexKolom] = '*'
                return this.checkPapan(indexKms, indexBaris - 1, indexKolom, stop + 1)
            } else if (this.kananAtas(indexBaris, indexKolom, indexKms, stop)) {
                this.duplicater[indexBaris - 1][indexKolom + 1] = '*'
                return this.checkPapan(indexKms, indexBaris - 1, indexKolom + 1, stop + 1)
            } else if (this.kanan(indexBaris, indexKolom, indexKms, stop)) {
                this.duplicater[indexBaris][indexKolom + 1] = '*'
                return this.checkPapan(indexKms, indexBaris, indexKolom + 1, stop + 1)
            } else if (this.kananBawah(indexBaris, indexKolom, indexKms, stop)) {
                this.duplicater[indexBaris + 1][indexKolom + 1] = '*'
                return this.checkPapan(indexKms, indexBaris + 1, indexKolom + 1, stop + 1)
            } else if (this.bawah(indexBaris, indexKolom, indexKms, stop)) {
                this.duplicater[indexBaris + 1][indexKolom] = '*'
                return this.checkPapan(indexKms, indexBaris + 1, indexKolom, stop + 1)
            } else if (this.kiriBawah(indexBaris, indexKolom, indexKms, stop)) {
                this.duplicater[indexBaris + 1][indexKolom - 1] = '*'
                return this.checkPapan(indexKms, indexBaris + 1, indexKolom - 1, stop + 1)
            } else if (this.kiri(indexBaris, indexKolom, indexKms, stop)) {
                this.duplicater[indexBaris][indexKolom - 1] = '*'
                return this.checkPapan(indexKms, indexBaris, indexKolom - 1, stop + 1)
            }
            return false;
        }
    }
    kiriAtas(indexBaris, indexKolom, indexKamus, i) {
        if (indexKolom === 0 || indexBaris === 0) {
            return false
        } else if (this.duplicater[indexBaris - 1][indexKolom - 1] === this.data[indexKamus][i]) {
            return true
        }
        return false;
    }
    atas(indexBaris, indexKolom, indexKamus, i) {
        if (indexBaris === 0) {
            return false
        } else if (this.duplicater[indexBaris - 1][indexKolom] === this.data[indexKamus][i]) {
            return true
        }
        return false;
    }
    kananAtas(indexBaris, indexKolom, indexKamus, i) {
        if (indexKolom === this.panjang - 1 || indexBaris === 0) {
            return false
        } else if (this.duplicater[indexBaris - 1][indexKolom + 1] === this.data[indexKamus][i]) {
            return true
        }
        return false;
    }
    kanan(indexBaris, indexKolom, indexKamus, i) {
        if (indexKolom === this.panjang - 1) {
            return false
        } else if (this.duplicater[indexBaris][indexKolom + 1] === this.data[indexKamus][i]) {
            return true
        }
        return false;
    }
    kananBawah(indexBaris, indexKolom, indexKamus, i) {
        if (indexKolom === this.panjang - 1 || indexBaris === this.panjang - 1) {
            return false
        } else if (this.duplicater[indexBaris + 1][indexKolom + 1] === this.data[indexKamus][i]) {
            return true
        }
        return false;
    }
    bawah(indexBaris, indexKolom, indexKamus, i) {
        if (indexBaris === this.panjang - 1) {
            return false
        } else if (this.duplicater[indexBaris + 1][indexKolom] === this.data[indexKamus][i]) {
            return true
        }
        return false;
    }
    kiriBawah(indexBaris, indexKolom, indexKamus, i) {
        if (indexKolom === 0 || indexBaris === this.panjang - 1) {
            return false
        } else if (this.duplicater[indexBaris + 1][indexKolom - 1] === this.data[indexKamus][i]) {
            return true
        }
        return false;
    }
    kiri(indexBaris, indexKolom, indexKamus, i) {
        if (indexKolom === 0) {
            return false
        } else if (this.duplicater[indexBaris][indexKolom - 1] === this.data[indexKamus][i]) {
            return true
        }
        return false;
    }
}
const ukuran = 6 // Ukuran Papan 
function random() {
    let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr = []
    for (let i = 0; i < ukuran; i++) {
        arr.push([])
        for (let j = 0; j < ukuran; j++) {
            arr[i].push(abjad[Math.floor(abjad.length * Math.random(1))])
        }
    }
    return arr;
}
const boogle = new Boggle(ukuran, random());

let arr = (boogle.duplicater)
console.log(boogle.duplicater)
console.log(boogle.checkKamus())