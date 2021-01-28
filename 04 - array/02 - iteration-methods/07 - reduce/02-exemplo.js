const numeros = [1, 2, 3, 4, 5];
const total = numeros.reduce(
  (previusValue, currentValue, currentIndex, array) => {
    return previusValue + currentValue;
  }
);

console.log(numeros);
// Array(5) [1, 2, 3, 4, 5]
console.log(total);
// 15
