/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

let primeNumbersArray = []

let counter = 2;
while (true) {

    let isPrime = false;
    for (let i = counter - 1; i > 1; i--) {
        if (counter % i == 0) {
            isPrime = true;
        }
    }
    if (!isPrime) {
        primeNumbersArray.push(counter)
        console.log(primeNumbersArray.length)
    }
    counter++;
    if (primeNumbersArray[10000]) {
        console.log(primeNumbersArray[10000])
        break;
    }
}