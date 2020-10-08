const assert = require('assert');

const createSuperhero = (name, superheroName, nickname, powers) => {
  return {
    name: name,
    superheroName: superheroName,
    nickname: nickname,
    powers: powers
  };
};

assert.deepStrictEqual(
  createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money'),
  {
    name: 'Bruce Wayne',
    superheroName: 'Batman',
    nickname: 'The Caped Crusader',
    powers: 'Determination and money'
  }
);