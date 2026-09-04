const user = {
    username: "nishant",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website.`)            //nishant, welcome to website.
        console.log(this);                      /* {
                                                      username: 'nishant',
                                                      price: 999,
                                                      welcomeMessage: [Function: welcomeMessage]
                                                    } */                         
        
    }
}

user.welcomeMessage()
user.username = "Elon"
user.welcomeMessage()

console.log(this)               //{}



// const chai = function (){
//     let username = "nishant"
//     console.log(this)
// }
// chai()


// ----------------- Arrow Function -------------


const chai = () => {
    let username = "animesh"
    console.log(this)               // {}
}
chai()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2

const addTwo = (num1 , num2) => (num1 + num2)

// const addTwo = (num1 , num2) => ({username: "nishant"})         // { username: 'nishant' }


console.log(addTwo(5, 5))                   // 10



