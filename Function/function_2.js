
// function calculateCartPrice(num1){               
//     return num1 
// }
// console.log(calculateCartPrice(200, 400, 500))            // 200


// --------Rest Operator(...)-----------------

function calculateCartPrice(...num1) {               //Here ... ---> rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500))              // [ 200, 400, 500 ]


// Object pass by function: 

const user = {
    username: "Nishant",
    age: 20
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the age is ${anyobject.age}`);
}

// handleObject(user)               //Username is Nishant and the age is 20
handleObject({
    username: "Nishant",
    age: 20
})


//Array pass by function

const Array = [200, 400, 100, 300] 

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(Array))                            // 400
console.log(returnSecondValue([200, 400, 100, 300] ))               // 400


