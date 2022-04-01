// Exemplo de uma função dentro de outra
executaCalculo = () => {
    const soma = (a, b) => a + b;

    var resultado = soma(1, 2);
    console.log(resultado);
    // será igual a 3
}
executaCalculo();
