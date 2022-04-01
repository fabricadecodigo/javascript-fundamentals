// Redeclarar variaveis.

// Redeclarar uma variável criada usado var dentro de um escopo de bloco pode ocosionar alguns problemas

var teste = 'Teste';
// aqui x é 10
{
    var teste = 1;
    console.log(teste);
    // 1
}
console.log(teste)
// 1

// Perceba que alem de alterar o valor eu alterei o tipo da variável de string para int e nenhum erro aconteceu.