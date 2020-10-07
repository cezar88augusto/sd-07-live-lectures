const assert = require('assert');

const numbers = [2, 3, 4, 6, 8, 12, 24];

// Somando os números do array com for
let sumWithFor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  sumWithFor = sumWithFor + numbers[index];
}

// Somando os números do array com reduce
// const sumWithReduce = numbers.reduce();

// Testes
const expectedValue = 59;
assert.strictEqual(sumWithFor, expectedValue);
// assert.strictEqual(sumWithReduce, expectedValue);