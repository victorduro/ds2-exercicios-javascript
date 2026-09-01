let tentativa = 1;
let acessoPermitido = false;

while (tentativa <=3){
    const usuario = prompt("Digite o nome de usuário:");
    const senha = prompt("Digite a senha:");

    if (usuario === "admin" && senha === "1234") {
        console.log("Acesso permitido!");
        acessoPermitido = true;
        break;
    }       
    else{
        const tentativasRestantes = 3 - tentativa;
        if (tentativasRestantes > 0) {
            console.log(`Acesso negado! Você tem ${tentativasRestantes} tentativa(s) restante(s).`);

        }
        
    }
    tentativa++;
    
    if (acessoPermitido === false) {
        console.log("Acesso Bloqueado.");
    }

}