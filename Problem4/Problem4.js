/**
 A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
 */

var temp = []
for (let i = 999; i > 0; i--) {
    let is = true
    for (let j = 999; j > 0; j--) {
        let k = i * j;
        k += ""
        for (let a = 0; a < k.length; a++) {
            let l = k[a];
            let r = k[k.length - a - 1]
            if (l === r && k.length % 2 === 0) {
                is = false
            }
            else {
                is = true;
                break;
            }
        }
        if (!is) {
            temp.push(k)
        }
    }

}
temp.sort((a, b) => { return b - a });
console.log(temp[0])