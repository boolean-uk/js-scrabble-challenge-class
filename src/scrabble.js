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
    let total = 0
    if (!this.word) return total

    for (const char of this.word) {
      for (const score in this.scoreTable) {
        if (this.scoreTable[score].includes(String(char).toUpperCase())) {
          total += Number(score)
        }
      }
    }
    return total
  }
}

module.exports = Scrabble
