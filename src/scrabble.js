class Scrabble {
  // Write your implementation here
  constructor(word) {
    this.word = word
    this.scoreTable = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    }
  }

  score() {
    for (const character of this.word) {
      console.log('Looping in char :', character)
      for (const score in this.scoreTable) {
        console.log('Score: ', score)
        if (score.includes(String(character).toUpperCase())) {
          console.log('Includes char in ', score)
        }
      }
    }
  }
}

const lucianoScrabble = new Scrabble('luciano')
console.log(lucianoScrabble.score())

module.exports = Scrabble
