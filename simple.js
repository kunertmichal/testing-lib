const sum = (a, b) => new Promise((resolve) => resolve(a - b))
const subtract = (a, b) => a - b

test('sum adds numbers', async () => {
  const result = await sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
  const result = subtract(5, 2)
  const expected = 3
  expect(result).toBe(expected)
})

async function test(title, callback) {
  try {
    await callback()
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${error}`)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeGreaterThan(expect) {
      // ...
    }
  }
}
