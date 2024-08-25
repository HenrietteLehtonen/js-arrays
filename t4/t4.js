'use strict';

const numbers = [4, 6, 12, 1, 77, 23, 9, 5];

function sortArray(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(numbers);
console.log(sortArray(numbers));
