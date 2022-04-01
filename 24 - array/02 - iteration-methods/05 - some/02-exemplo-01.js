// Retornando true

const numeros = [10, 20, 30, 40, 50];
const resultado = numeros.some((value, index, arr) => {
    return value > 10;
});

console.log(resultado);
// true