const usuario = {
    id: 1,
    nome: 'Felipe',
    email: 'contato@fabricadecodigo.com',
    endereco: {
        cidade: 'Juiz de Fora',
        uf: 'MG'
    }
}

const { nome, ...damaisInformacoes } = usuario;
console.log(nome); 
// Felipe
console.log(damaisInformacoes); 
// { 
//     id: 1, 
//     email: "contato@fabricadecodigo.com", 
//     endereco: { cidade: 'Juiz de Fora', uf: 'MG' }
// }