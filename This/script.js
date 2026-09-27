// Global --- this ka value window
let a = 5;
console.log(this);

// Function --- this ka value window
function abc() {
    console.log(this)
}
abc()

// closure --- this ka value window
function print() {
    let a = 5;
    return function () {
        console.log(this)
    }
}
let fn = print()
fn()


// Method with ES5 Function --- this ka value object
let obj = {
    name: "Nishant",
    age: 20,
    sayName: function () {
        console.log(this)
    }
}
obj.sayName()


// Method with ES6 Function --- this ka value window
let obj2 = {
    name: "Nishant",
    age: 20,
    sayName: () => {
        console.log(this)
    }
}
obj2.sayName()


// E5 function inside E5 method --- this ka value window
let obj3 = {
    name: "Nishant",
    age: 20,
    sayName: function () {
        function abc() {
            console.log(this)
        }
        abc();
    }
}
obj3.sayName()

// event handler --- this ka value element
let h1 = document.querySelector('h1')
h1.addEventListener("click", function () {
    console.log(this);
});


// class --- this ka value {}
class Student {
    constructor(name) {
        this.name = name;
    }
}
let s1 = new Student("Nishant");
console.log(s1);




// <----- Call, Apply, Bind ----->

// call --- this ka value object

let obj4 = {
    name: "Nishant", 
    age: 20
}

function abcd(){
    console.log(this)
}

abcd.call(obj4)



// Apply --- this ka value object

let obj5 = {
    name: "Nishant", 
    age: 20
}

function abcd(a, b, c){
    console.log(this, a, b, c)
}

abcd.apply(obj5, [1, 2, 3])


// Bind 

let obj6 = {
    name: "Nishant", 
    age: 20
}

function abcd(a, b, c){
    console.log(this, a, b, c)
}

let fnc = abcd.bind(obj6, 1, 2, 3)
fnc()