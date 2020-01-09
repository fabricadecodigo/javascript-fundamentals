const pessoas = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'José' }
];

const joao = pessoas.find((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
    return value.id == 1;
})

const maria = pessoas.find((value) => value.nome == 'Maria');

console.log(joao);
console.log(maria);