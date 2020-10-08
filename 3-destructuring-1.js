const assert = require('assert');

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

assert.strictEqual(
  `${richestDuckInTheWorld.name} from ${richestDuckInTheWorld.birthplace}`,
  'Scrooge McDuck from Glasgow, Scotland'
);