// ## Escopo de bloco

// Quando você tem um código entre chaves { }, isso é considerado escopo de bloco.

// Quando você declara uma variável usando var em um escopo de bloco, ela poderá ser usada dentro e fora do escopo.

{    
    var teste = 'Teste';
    console.log(teste);
    // Teste
}
teste = 'Teste 2'
console.log(teste);
// Teste 2