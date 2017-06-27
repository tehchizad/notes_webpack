export class RandomGenerator {
  static randomInteger() {
    console.log('randInt working')
    return Math.ceil(Math.random() * 100)
  }

  static randomRange(min, max) {
    console.log('randRng working')
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}