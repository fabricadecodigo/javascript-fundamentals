// Exemplo simples

// Array de números de 1 a 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array com o filtro de números pares
const numerosParesFuncao = numeros.filter(function(value, index, arr) {
  return value % 2 == 0;
});

const numerosParesArrowFunction1 = numeros.filter((value, index, arr) => {
    return value % 2 == 0;
});

const numerosParesArrowFunction2 = numeros.filter((value, index, arr) => value % 2 == 0);

console.log(numeros);
// resultado no console
// Array(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numerosParesFuncao);
// resultado no console
// Array(5) [2, 4, 6, 8, 10]