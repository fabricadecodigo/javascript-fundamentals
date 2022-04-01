// Removendo itens em um array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// O número 5 está no index 4
const indexNumeroCinco = numeros.indexOf(5);
const result = numeros.splice(indexNumeroCinco, 1);
console.log(numeros);
// Array(9) [1, 2, 3, 4, 6, 7, 8, 9, 10]
console.log(result);
// Array(1) [5]