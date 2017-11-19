function randomKata() {
  let kata = 'abcdefghijklmnopqrstuvwxyz'
  let random = Math.floor(Math.random() * kata.length)
  return kata[random]
}
module.exports = randomKata
