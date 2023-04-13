// Doubling of number

let numbers = [1, 2, 3, 4];

let newNumbers = numbers
  .filter((item) => item % 2 !== 0)
  .map((item) => item * 2);
console.log(newNumbers); // [ 2, 6 ]

// codewars Link https://www.codewars.com/users/ham-oudi
