const students = ["Harry", "Ron", "Hermione"]
const teachers = ["Dumbledore", "Snape", "Hagrid"]

//Method 1:

/*
students.push(teachers)

console.log(students);          // ----> [ 'Harry', 'Ron', 'Hermione', [ 'Dumbledore', 'Snape', 'Hagrid' ] ]
console.log(students[3])        // ---> [ 'Dumbledore', 'Snape', 'Hagrid' ]
console.log(students[3][1])        // ---> Snape
*/


// Method 2:

// const allCharacter = students.concat(teachers)
// console.log(allCharacter)       // [ 'Harry', 'Ron', 'Hermione', 'Dumbledore', 'Snape', 'Hagrid' ]


//Method 3:   'Spread Operator...'

const allCharacter = [...students, ...teachers]
console.log(allCharacter)       // [ 'Harry', 'Ron', 'Hermione', 'Dumbledore', 'Snape', 'Hagrid' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)     //If you want the depth then use the number otherwise you can use infinity
console.log(real_another_array)



console.log(Array.isArray("Nishant"))                // false
console.log(Array.from("Nishant"))                   // ['N', 'i', 's','h', 'a', 'n','t']
console.log(Array.from({name: "Nishant"}))           //---> []  -->empty value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))           // [ 100, 200, 300 ]