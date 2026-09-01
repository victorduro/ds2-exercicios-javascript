function somar(numero1, numero2) {
    return numero1 + numero2;
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function classificarMedia(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function criarSaudacao(nome) {
    return "Bem-vindo(a), " + nome + "!";
}

const nome = prompt("Digite seu nome:");
const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

let nota1 = Number(prompt("Digite a primeira nota:"));

while (nota1 < 0 || nota1 > 10) {
    nota1 = Number(prompt("Nota inválida. Digite uma nota entre 0 e 10:"));
}

let nota2 = Number(prompt("Digite a segunda nota:"));

while (nota2 < 0 || nota2 > 10) {
    nota2 = Number(prompt("Nota inválida. Digite uma nota entre 0 e 10:"));
}

const resultadoSoma = somar(numero1, numero2);
const resultadoMedia = calcularMedia(nota1, nota2);
const resultadoSituacao = classificarMedia(resultadoMedia);
const resultadoSaudacao = criarSaudacao(nome);

console.log("Resultado da soma:", resultadoSoma);
console.log("Resultado da média:", resultadoMedia);
console.log("Situação:", resultadoSituacao);
console.log("Saudação:", resultadoSaudacao);