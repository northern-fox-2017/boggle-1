if (this.dummy[baris][kolom] == kamus) {
  result += this.dummy[baris][kolom]
}
if (this.dummy[baris][kolom + 1] == kamus && kolom + 1 != undefined){ // 1 2
  kolom += 1
  result += this.dummy[baris][kolom+1]
}
else if (this.dummy[baris + 1][kolom] == kamus) { // 2 1
  baris += 1
  result += this.dummy[baris + 1][kolom]
}
else if (kolom - 1 != -1 && this.dummy[baris][kolom - 1] == kamus) { // 1 0
  kolom -= 1
  result += this.dummy[baris][kolom - 1]
}
else if (baris - 1 != -1 && this.dummy[baris - 1][kolom] == kamus) { // 0 1
  baris -= 1
  result += this.dummy[baris - 1][kolom]
}
else if (baris + 1 != undefined && kolom + 1 != undefined && this.dummy[baris + 1][kolom + 1] == kamus){ // 2 2
  baris += 1 , kolom += 1
  result += this.dummy[baris + 1][kolom + 1]
}
else if (kolom - 1 != -1 && this.dummy[baris + 1][kolom - 1] == kamus) { // 2 0
  baris += 1 , kamus -= 1
  result += this.dummy[baris + 1][kolom - 1]
}
else if (baris - 1 != -1 && this.dummy[baris - 1][kolom + 1] == kamus) { // 0 2
  baris -= 1 , kolom += 1
  result += this.dummy[baris - 1][kolom + 1]
}
else if (baris - 1 != -1 && kolom - 1 != -1 && this.dummy[baris - 1][kolom - 1] == kamus) { // 0 0
  baris -= 1 , kolom -= 1
  result += this.dummy[baris - 1][kolom - 1]
}
