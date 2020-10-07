const assert = require('assert');

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicPhrase = epic.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}` );

// Testes

const expectedValue = "a long time ago in a galaxy far far away";

assert.strictEqual(epicPhrase, expectedValue);