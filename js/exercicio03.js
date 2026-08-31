const nome = prompt("Digite seu nome:");
const idade = prompt("Digite sua idade:");
const curso = prompt("Digite seu curso:");
const cidade = prompt("Digite sua cidade:");

console.log(
    "Olá, meu nome é " +
    nome +
    ", tenho " +
    idade +
    " anos, moro em " +
    cidade +
    " e estou cursando " +
    curso +
    "."
);

console.log(
    `Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}.`
);