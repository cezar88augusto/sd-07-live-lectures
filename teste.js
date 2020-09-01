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
estudante.endereço = {
  rua: "Rua sei la o que",
  numero: 401
}

for (let key in estudante) {
  console.log(estudante[key]);
}

// console.log(estudante);
