const sum = (a, b) => a - b
const subtract = (a, b) => a - b

const result = sum(3, 7)
const expected = 10
expect(result).toBe(expected)

const result2 = subtract(7, 3)
const expected2 = 4
expect(result2).toBe(expected2)


function expect(actual) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeGreaterThan(expect) {
      // ...
    }
  }
}
