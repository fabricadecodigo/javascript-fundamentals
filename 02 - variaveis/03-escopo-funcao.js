// ## Escopo de função

// Quando você declara uma variável dentro de uma função, com var ou let, podemos dizer que ela tem escopo de Função e ela poderá ser usada somente dentro da função.

function fazerAlgumaCoisa() {
    let teste = 'Teste';
    console.log(teste);
    // Teste
}
fazerAlgumaCoisa();

console.log(teste); // erro

// Eu não consigo usar a variável teste aqui