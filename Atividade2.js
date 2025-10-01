const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

const { nome, cidade } = usuarios[0];

console.log(nome);
console.log(cidade);

const usuariosDoNorte = [
  ...usuarios, 
  { nome: "Ana", cidade: "Manaus" } 
];

console.log(usuariosDoNorte);

const beatrizAtualizada = {
  ...usuarios[1], 
  email: "bia.dev@exemplo.com"
};

console.log(beatrizAtualizada);

function mostrarInteresses({ nome, interesses }) {
  console.log(`${nome} tem interesse em: ${interesses.join(", ")}.`);
}
usuarios.forEach(mostrarInteresses);