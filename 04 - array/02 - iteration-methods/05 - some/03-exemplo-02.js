// Retornando false

const numeros = [10, 20, 30, 40, 50];
const resultado = numeros.some((value, index, arr) => {
    return value > 50;
});

console.log(resultado);
// false