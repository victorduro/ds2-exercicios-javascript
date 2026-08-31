const idade = prompt("Digite sua idade:");

console.log("Valor original:", idade);
console.log("Tipo original:", typeof idade);

const idadeConvertida = Number(idade);

console.log("Valor convertido:", idadeConvertida);
console.log("Tipo convertido:", typeof idadeConvertida);

const idadeDaquiCincoAnos = idadeConvertida + 5;

console.log("Idade daqui a cinco anos:", idadeDaquiCincoAnos);