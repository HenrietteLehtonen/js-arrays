'use strict';

const numbers = [4, 6, 12, 1, 77, 23, 9, 5];

function sortArray(numbers, order) {
  if (order === 'asc') {
    return numbers.sort((a, b) => a - b);
  }
  if (order === 'desc') {
    return numbers.sort((a, b) => b - a);
  }
}

console.log(numbers);
console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
