// Redeclarar uma variável criada usando let resolve esse problema.

let teste = 'Teste';
// aqui x é 10
{
    let teste = 1;
    console.log(teste);
    // 1
}
console.log(teste)
// Teste

// Nesse caso nada foi alterado, as variaveis dentro e fora do escopo de bloco são diferentes.