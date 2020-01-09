// Com desestruturação

const usuario = {
    id: 1,
    nome: 'Felipe',
    email: 'contato@fabricadecodigo.com',
    endereco: {
        cidade: 'Juiz de Fora',
        uf: 'MG'
    }
}

const { nome, email, endereco: { cidade } } = usuario;
console.log(nome); // Felipe
console.log(email); // contato@fabricadecodigo.com
console.log(cidade); // Juiz de Fora