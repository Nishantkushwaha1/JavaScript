const accountId = 12345
let accountEmail = "nishant@gmail.com"
var accountPassword = "13579"
let accountState;

console.log("Before: ")
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
console.table([accountId, accountEmail, accountPassword, accountState])


// accountId = 2      ------> constant can't be change
accountEmail = "nishant@github.com"
accountPassword = "09876"


console.log("After: ")
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
console.table([accountId, accountEmail, accountPassword])

/*
    Prefer not use var
    because of issue in block scope and functional.
*/



