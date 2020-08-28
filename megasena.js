// Ter um array com os números da mega sena sorteados de forma aleatória
let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma7Play = [7, 16, 28, 31, 37, 55];

let numberOfHits = 0;

for (let i = 0; i < turma7Play.length; i += 1) {
  let playedNumber = turma7Play[i];
  for (let j = 0; j < megaSenaNumbers.length; j += 1) {
    let megaSenaNumber = megaSenaNumbers[j];
    if(playedNumber === megaSenaNumber) {
      numberOfHits += 1;
    }
  }
}

console.log(`Números sorteados: ${megaSenaNumbers}`);
console.log(`Nossas tentativas: ${turma7Play}`);
console.log(`Total de acertos: ${numberOfHits}`);
