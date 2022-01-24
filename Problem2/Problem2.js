let temp = 1
let sum = 0;
for(let i = 1;i<4000000;){
  
  let t = i;

  i = i + temp;
  if(i % 2 === 0){
    sum += i
  }
  temp = t;
  console.log(i);
}
console.log(sum)