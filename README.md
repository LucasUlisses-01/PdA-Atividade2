# PdA-Atividade2
📝 O que eu fiz ✅ Desafio 1  Extraí e exibi apenas o nome e a cidade do primeiro usuário usando destructuring. Assim, evitei acessar várias vezes usuario.nome ou usuario.cidade.  const { nome, cidade } = usuarios[0]; console.log(`${nome} mora em ${cidade}`);
✅ Desafio 2 Criei um novo array usuariosDoNorte usando o spread operator e adicionei uma nova usuária (Ana, de Manaus). Aprendi a copiar arrays sem alterar o original.

const usuariosDoNorte = [
  ...usuarios,
  {
    nome: "Ana",
    cidade: "Manaus",
    interesses: ["Arte", "Natureza"]
  }
];

✅ Desafio 3

Atualizei o e-mail da Beatriz criando um novo objeto beatrizAtualizada. Usei o spread operator para manter os dados originais e modificar apenas o necessário.

const beatrizAtualizada = {
  ...usuariosDoNorte[1],
  email: "bia.dev@exemplo.com"
};

✅ Desafio 4

Criei a função mostrarInteresses(usuario) usando destructuring direto nos parâmetros, deixando o código mais limpo e fácil de entender.

function mostrarInteresses({ nome, interesses }) {
  console.log(`${nome} tem interesse em: ${interesses.join(", ")}`);
}

usuarios.forEach(mostrarInteresses);
