const id = 1;
const dados = {
    nome: 'Felipe',
    email: 'contato@fabricadecodigo.com'    
}

const usuario = { id, ...dados };
console.log(usuario);
// { 
//     id: 1, 
//     nome: "Felipe", 
//     email: "contato@fabricadecodigo.com" 
// }