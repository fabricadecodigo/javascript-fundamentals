// Adicionado novos itens em um array

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numeros.splice(0, 0, -1, 0);
console.log(numeros);
// Array(12) [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(result);
// Array(0) []