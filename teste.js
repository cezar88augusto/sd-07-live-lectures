let estudante = {
  nome: "Joana",
  idade: 43,
  hardSkills: 6,
  softSkills: 5,
  carreiraSkills: 4
}

estudante.cidade = "BH";

estudante["esporte"] = "Corrida";
estudante["nome"] = "João";

estudante.apelidos = ["Apelido1", "Apelido2", "Apelido3"];
estudante.endereco = {
  rua: "Rua sei la o que",
  numero: 401
}

console.log(estudante);

for (let key in estudante) {
  console.log(estudante[key]);
}

// Função trybe

// Soma

function soma(a, b) {
  return a + b;
}

let valor1 = 5;
let valor2 = 10;

let valorSomado = soma(valor1, valor2);

console.log(valorSomado);


// console.log(estudante);
