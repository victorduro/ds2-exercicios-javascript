let quantidade = 0;
let soma = 0;
let maior = -Infinity;
let menor = Infinity;

let valor = +prompt("Digite um número. Digite 0 para encerrar.");

while (valor !== 0) {
    quantidade++;
    soma += valor;

    if (valor > maior) {
        maior = valor;
    }
    if (valor < menor) {
        menor = valor;
    }

    valor = +prompt("Digite outro número. Digite 0 para encerrar.");
}

if (quantidade === 0) {
    console.log("Nenhum número foi informado.");
} else {
    let media = soma / quantidade;

    console.log("Quantidade de números:", quantidade);
    console.log("Soma:", soma);
    console.log("Média:", media);
    console.log("Maior número:", maior);
    console.log("Menor número:", menor);
}