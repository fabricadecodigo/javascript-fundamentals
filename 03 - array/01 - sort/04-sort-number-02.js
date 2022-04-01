// # Exemplo com número usando a função de comparação

const exemploNumero = [20, 10, 2, 1];
exemploNumero.sort(function(a, b) {
    return a - b;
});
console.log(exemploNumero);
// -> Resultado no console
// -> Array(4) [1, 2, 10, 20]