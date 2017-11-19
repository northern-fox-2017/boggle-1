function randomKata() {
  let kata = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let random = Math.floor(Math.random() * kata.length)
  return kata[random]
}
module.exports = randomKata
