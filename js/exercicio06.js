const nome = prompt("Digite o nome do aluno:");
const nota1Informada = prompt("Digite a primeira nota:");
const nota2Informada = prompt("Digite a segunda nota:");

const nota1 = Number(nota1Informada);
const nota2 = Number(nota2Informada);

let media = (nota1 + nota2) / 2;

if (media < 0 || media > 10) {
    console.log("Nota inválida");
} else {
    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    console.log("Nome:", nome);
    console.log("Nota 1:", nota1);
    console.log("Nota 2:", nota2);
    console.log("Média:", media.toFixed(1));
    console.log("Situação:", situacao);
}