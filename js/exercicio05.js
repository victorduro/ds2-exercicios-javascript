const idadeInformada = prompt("Digite sua idade:");

if (idadeInformada === null || idadeInformada.trim() === "") {
    console.log("Idade inválida");
} else {
    const idade = Number(idadeInformada);

    if (Number.isNaN(idade) || idade < 0) {
        console.log("Idade inválida");
    } else if (idade < 16) {
        console.log("Não pode votar");
    } else if (idade === 16 || idade === 17) {
        console.log("Voto opcional");
    } else {
        console.log("Voto obrigatório");
    }
}