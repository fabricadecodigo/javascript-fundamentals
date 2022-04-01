// Retornando true

const numeros = [10, 20, 30, 40, 50];
const resultado = numeros.every((value, index, arr) => {
    return value > 0;
});

console.log(resultado);
// true