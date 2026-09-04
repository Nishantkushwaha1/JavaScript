
// {}  ---> scope            ---> It can also be used for objects:

let a = 300
var c = 400 

if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner a is (block scope) : ", a)       // Inner a is (block scope) :  10
}

console.log("Outside a is (global scope) : ", a);        // Outside a is (global scope) :  300       ---> value not changed
// console.log(b);          // b is not defined
console.log(c);             // 30           ---> value changed

