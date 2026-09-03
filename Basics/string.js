const username = "Nishant"
const rollNo = 137

console.log(`Hello, My name is ${username} and My rollNo is ${rollNo}.`);

const gameName = new String('Repository')

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
 

//substring
const newString = gameName.substring(0,5)
console.log(newString);

//Slice
const anotherString = gameName.slice(3,7)
console.log(anotherString);


//trim
const stringOne = "     Nishant     "
console.log(stringOne)
console.log(stringOne.trim())


const url = "https:/nishant%20kushwaha.com/academic"
console.log(url.replace('%20', '-'))

console.log(url.includes('nish'))