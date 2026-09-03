// const upiUser = new Object()   //singleton

const upiUser = {}         //non- singleton

upiUser.id = "123ybl"
upiUser.name = "Samay"
upiUser.isMoney = true

console.log(upiUser);                   // { id: '123ybl', name: 'Samay', isMoney: true }

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Nishant",
            lastName: "Kushwaha"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullName.userfullname.firstName)                // Nishant

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// Method 1:
// const obj4 = {obj1, obj2}            //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// Method 2:   ---> Assign
// const obj4 = Object.assign({}, obj1, obj2, obj3)       // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// Here {} --> target   &   obj1 and obj2 --> source


// Method 3:  ---> Spread Operator
obj4 = { ...obj1, ...obj2 }           // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(obj4)

console.log(upiUser);                       // { id: '123ybl', name: 'Samay', isMoney: true }
console.log(Object.keys(upiUser));          // [ 'id', 'name', 'isMoney' ]
console.log(Object.values(upiUser));        // [ '123ybl', 'Samay', true ]
console.log(Object.entries(upiUser));       // [ [ 'id', '123ybl' ], [ 'name', 'Samay' ], [ 'isMoney', true ] ]


// Object in Array: 

let user = [
    {
        id: 1,
        email: "zyx@gmail.com"
    },
    {
        id: 2,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "npn@gmail.com"
    }
]

console.log(user[0].id)         //1
console.log(user[2].email)      //npm@gmail.com


