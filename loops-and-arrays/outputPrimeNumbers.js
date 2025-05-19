let n = prompt("Enter a number:");
let arr = [];

// loop from 2 to n, check if the number is prime
for (let i = 2; i <=n; i++) {
    let isPrime = true;
    for(let j = 2; j < i; j++) {
        // if i divides evenly for any j, it is not prime
        if (i % j === 0) {       
            isPrime = false; 
            break
        }
    }
    // if the number is prime, add it to the array
    if(isPrime) {
        arr.push(i);
    }
}
console.log(arr);