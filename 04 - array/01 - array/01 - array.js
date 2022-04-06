// criando um array
let frutas = ["Banana", "Maçã", "Mamão"];
console.log(frutas);

// acessando um item de um array
console.log(frutas[0]);
console.log(frutas[frutas.length - 1]);
console.log(frutas[frutas.indexOf("Maçã")]);

// adicionando item no fim do array
frutas.push("Abacate")
console.log(frutas);

// adicionando item no inicio do array
frutas.unshift("Morango");
console.log(frutas);

// removendo um item do fim do array
frutas.pop();
console.log(frutas);

// removendo um item do inicio do array
frutas.shift();
console.log(frutas);

// iterando os valores
frutas.forEach(function (value, index, array) {
    console.log(value);
    console.log(index);
});


// Matriz
const matriz = [
    [0, 1, 2], 
    [3, 4, 5]
]