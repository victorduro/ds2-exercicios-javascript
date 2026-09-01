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

let quantidadeAlunos = 0;
let continuar = "sim";

while (continuar === "sim") {
    const nome = prompt("Digite o nome do aluno:");
    const curso = prompt("Digite o nome do curso:");

    let nota1 = Number(prompt("Digite a primeira nota:"));

    while (nota1 < 0 || nota1 > 10) {
        nota1 = Number(prompt("Nota inválida. Digite uma nota entre 0 e 10:"));
    }

    let nota2 = Number(prompt("Digite a segunda nota:"));

    while (nota2 < 0 || nota2 > 10) {
        nota2 = Number(prompt("Nota inválida. Digite uma nota entre 0 e 10:"));
    }

    const media = calcularMedia(nota1, nota2);
    const situacao = classificarMedia(media);

    console.log("--------------------------------");
    console.log("FICHA DO ALUNO");
    console.log("Nome:", nome);
    console.log("Curso:", curso);
    console.log("Primeira nota:", nota1);
    console.log("Segunda nota:", nota2);
    console.log("Média:", media.toFixed(2));
    console.log("Situação:", situacao);
    console.log("--------------------------------");

    quantidadeAlunos++;

    continuar = prompt("Deseja cadastrar outro aluno? Digite sim ou não:").toLowerCase();
}

console.log("Total de alunos cadastrados:", quantidadeAlunos);