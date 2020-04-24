let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введіть число!');
  if (Number.isNaN(Number(input))) {
    alert('Некоректні дані, введіть число!');
  } else if (input >= 0) {
    numbers.push(Number(input));
  }
} while (input !== null);

for (let number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total} `)