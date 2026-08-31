let num = prompt("Digite um número inteiro para ver a tabuada:");
num = Number(num);

if (isNaN(num) || !Number.isInteger(num)) {
    console.log("Erro: Informe um número inteiro válido.");
} else {
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        console.log(num + " x " + i + " = " + resultado);
    }
}