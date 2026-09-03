
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr)
// console.log(typeof myArr)       // Object

// const myArr2 = new Array(1, 2, 3, 4, 5, 6)       //Another method to declare array
// console.log(myArr2[1])


//Array Methods

myArr.push(6)
console.log(myArr)              // [0, 1, 2, 3, 4, 5, 6]

myArr.push(7)
console.log(myArr)              // [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop()
console.log(myArr)              // [0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9)
console.log(myArr)              // [9, 0, 1, 2, 3, 4, 5, 6]

myArr.shift()
console.log(myArr)              // [0, 1, 2, 3, 4, 5, 6]


console.log(myArr.includes(9))              // false
console.log(myArr.indexOf(9))               // -1


const newArr = myArr.join()
console.log(myArr)              // [0, 1, 2, 3, 4, 5, 6]          ---> Object
console.log(newArr)             // 0, 1, 2, 3, 4, 5, 6            ---> Boolean



// --------------------- slice , splice  ------------------------------

const myn1 = myArr.slice(1, 3)
console.log(myn1)                     //   [ 1, 2 ]
console.log(myArr)                    //   [0, 1, 2, 3, 4, 5, 6]

const myn2 = myArr.splice(1,3)
console.log(myn2)                       // [ 1, 2, 3 ]
console.log(myArr)                      // [ 0, 4, 5, 6 ]



