/*
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
let sum = 0;
let sumOfOneToHundred = 0;
for (let index = 0; index <= 100; index++) {
    let temp = Math.pow(index, 2);
    sumOfOneToHundred += index;
    sum += temp;
}

console.log(Math.pow(sumOfOneToHundred, 2) - sum);