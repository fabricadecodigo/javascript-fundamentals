const pessoas = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'José' }
];

const indexJoao = pessoas.findIndex((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
    return value.id == 1;
})

const indexMaria = pessoas.findIndex((value) => value.nome == 'Maria');

console.log(indexJoao);
console.log(indexMaria);