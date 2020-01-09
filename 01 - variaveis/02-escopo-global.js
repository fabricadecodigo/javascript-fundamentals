// ## Escopo Global

// Quando você declara uma variável no inicio do arquivo, com var ou let, podemos dizer que ela tem escopo Global e ela poderá ser usada em qualquer lugar.

// Exemplo

let teste = 'Teste';
console.log(teste);

function fazerAlgumaCoisa() {
    // Eu posso usar a variável teste aqui.
    teste = 'Teste 2'
    console.log(teste);
    // Teste 2
}

fazerAlgumaCoisa();

console.log(teste);
// Teste 2

// Eu posso usar a variável teste aqui.