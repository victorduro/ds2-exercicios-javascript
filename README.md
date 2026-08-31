# DS2 - Exercícios JavaScript

Exercícios desenvolvidos na disciplina de Desenvolvimento para Servidores II.

## Objetivo

Praticar os conceitos de desenvolvimento Web, JavaScript,
Git e GitHub.

## Tecnologias utilizadas

- HTML
- JavaScript
- Git
- GitHub

## Exercício 1 - Fundamentos da Web

### Em qual momento uma página dinâmica é processada?

A página dinâmica é processada durante o atendimento de uma requisição. O servidor recebe a solicitação feita pelo navegador e pode processar informações antes de enviar a resposta.

### Por que um banco de dados pode ser necessário?

O banco de dados pode ser necessário quando a aplicação precisa armazenar, consultar ou alterar informações.

Exemplo, uma aplicação pode armazenar usuários, produtos, pedidos e outras informações que poderão ser utilizadas para montar uma página dinâmica.


## Exercício 2 - Client-side e Server-side

| Item | Client-side | Server-side |
|---|---|---|
| Local de execução | Navegador do usuário | Servidor |
| Tecnologias de exemplo | HTML, CSS e JavaScript | Node.js, PHP e Java |
| Responsabilidades | Interação com a página e validações | Regras de negócio e acesso aos dados |
| Vantagens | Resposta rápida para algumas interações | Maior controle sobre regras e dados |
| Limitações | O código pode ser visualizado pelo usuário | Depende da comunicação com o servidor |
| Exemplos de tarefas | Alterar elementos da página | Consultar banco de dados |


### Classificação das operações

1. **Validar se um campo obrigatório foi preenchido — Client-side**

   O navegador pode verificar imediatamente se o campo foi preenchido, dando uma resposta rápida ao usuário.

2. **Consultar dados sigilosos de um cliente — Server-side**

   A consulta deve ser realizada no servidor para evitar que dados sigilosos fiquem disponíveis no código executado pelo navegador.

3. **Alterar a cor de um botão após um clique — Client-side**

   Essa alteração pode ser realizada diretamente no navegador utilizando JavaScript.

4. **Verificar login e senha em um banco de dados — Server-side**

   O servidor deve realizar a consulta no banco de dados e verificar as informações de autenticação.

5. **Calcular o total de uma compra — Ambos**

   O cálculo pode ser realizado no navegador para apresentar o resultado ao usuário, mas também pode ser realizado no servidor para aplicar as regras da aplicação.

6. **Controlar uma sessão de usuário — Server-side**

   O servidor pode manter e controlar as informações relacionadas à sessão do usuário.


## Exercício 3 - Primeiro script e diagnóstico pelo console

Foi criado o arquivo `exercicio01.js` para exibir informações sobre o aluno no console do navegador.

### Erro provocado

Foi alterado propositalmente o comando:

`console.log()`

para:

`Console.log()`

Ao executar novamente o programa, ocorreu um erro porque o JavaScript diferencia letras maiúsculas e minúsculas.

Nesse caso, `Console` e `console` são identificados como nomes
diferentes.

Depois da identificação do problema, o código foi corrigido.