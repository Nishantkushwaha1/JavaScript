const score = 137
console.log(score);                 // 137

// ~~~~~~~~~~~~~~~~~~~~~~ Number  ~~~~~~~~~~~~~~~~~~~~~~~~

const balance = new Number(1432)
console.log(balance);               //[Number: 1432]


console.log(balance.toString().length)      // 4  
console.log(balance.toFixed(2))             // 1432.00  ---> add .00 to the end.


let othernumber = 523.657
console.log(othernumber.toPrecision(4))         // 523.7  ---> round off

const money = 10000000
console.log(money.toLocaleString())             // 1,00,00,000



// ~~~~~~~~~~~~~~~~~~~~~~ MATH ~~~~~~~~~~~~~~~~~~~~~~~~

console.log(Math)           // Object [Maths] {}

console.log(Math.abs(-4))           // 4   -->absolute value

console.log(Math.round(4.6))        // 5
console.log(Math.ceil(4.6))         // 5
console.log(Math.floor(4.6))        // 4

console.log(Math.min(4, 6, 3, 8))        // 3
console.log(Math.max(4, 6, 3, 8))        // 8

//Random Value

console.log(Math.random())    // Give random value (0 - 1)

console.log(Math.random() * 10)       // Give random value (0.0 - 9.9, less than 10)

console.log(Math.floor(Math.random() * 10))         //(0 - 9)

console.log(Math.floor((Math.random() * 10) + 1))         //(1 - 10)



// if you want random number in range by yourself

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)          // (10 - 20)
