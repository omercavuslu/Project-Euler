// let number = 600851475143;
// console.log(number)

// let factors = []
//   for(let j = 0;j<=number;j++){
//     if(number%j === 0){

//       var t = !factors.find(e=>j%e===0);
//       console.log(t)
//       if(!factors.find(e=>j%e===0) && j !== 1){
//         console.log("find",number,j)
//         factors.push(j)
//       }


//     }
//   }
// console.log(factors)

let i;
let maxNum = 600851475143;

for (i = 2; i <= maxNum; i++) {
  if (maxNum % i == 0) {
    maxNum /= i;
    i--;
  }
}
console.log(i)