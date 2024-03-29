const contatos = [
    {
        id: 1,
        data: {
            name: 'Felipe'
        }
    },
    { 
        id: 2, 
        data: { 
            name: 'Fábrica de Código' 
        } 
    }
];
const contatosMapeados = contatos.map((value) => {
    return { id: value.id, name: value.data.name };
});

console.log(contatos);
// [
//     {"id":1,"data":{"name":"Felipe"}},
//     {"id":2,"data":{"name":"Fábrica de Código"}}
// ]
console.log(contatosMapeados);
// [
//     {"id":1,"name":"Felipe"},
//     {"id":2,"name":"Fábrica de Código"}
// ]