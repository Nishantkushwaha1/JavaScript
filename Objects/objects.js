//singleton
//Object.create  --->constructor

//Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Nishant",
    age: 18, 
    [mySym]: "mykey1",     // you write mySym --> string , if [mySym]  --->symbol
    location: "Deoria", 
    email: "nishantkushwaha@gmail.com"
}

console.log(jsUser.email)
console.log(jsUser["email"])

console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])       // ---> string
console.log(typeof mySym)               // ---> symbol


jsUser.email = "nishantkushwaha@github.com"
// Object.freeze(jsUser)
jsUser.email = "nishantkushwaha@google.com"

console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser.greeting);

