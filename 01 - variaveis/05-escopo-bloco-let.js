'use strict'

// ## Escopo de bloco

// Quando você declara uma variável usando let em um escopo de bloco, ela poderá ser usada dentro apenas dentro do bloco.

{    
    let teste = 'Teste';
    console.log(teste);
    // Teste
}
teste = 'Teste 2' // Erro
console.log(teste);
