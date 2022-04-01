# Como usar o métododo reduce ou reduceRight

Esse método roda uma função com a finalidade de reduzir o array a um único elemento.

A função vai percorrer os elementos da esquerda para a direita

Caso queira percorrer da direita para esquerda, basta usar o método reduceRight

## Sintaxe
```
Array.reduce((previousValue, currentValue, currentIndex, array) => {});
```

- **callbackfn**: Função que manipula os itens do array
    - **previousValue**: Valor percorrido anteriormente
    - **currentValue**: Valor atual
    - **currentIndex**: Índice do valor atual
    - **array**: Array que está sendo manipulado