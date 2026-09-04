
function sayMyName() {
    console.log("Nishant")
    console.log("Kushwaha")
}
sayMyName()


function add(number1, number2) {
    console.log(number1 + number2)              //8
}
add(3, 5)


function addTwoNumer(number1, number2) {
    return number1 + number2
}
const result = addTwoNumer(3, 5)
console.log("Result:", result)                  //8


function loginUserMessage(username) {
    if (username === undefined)       //if (!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username}, just logged in.`
}

// console.log(loginUserMessage("Nishant"))        // Nishant, just logged in.
// console.log(loginUserMessage(""))                  // , just logged in.
console.log(loginUserMessage())                  // undefined, just logged in.



