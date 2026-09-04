function one() {
    const username = "nishant"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);               // error: website is not defined

    two()                               // nishant
}

one()

if (true) {
    const username = "nishant"
    if (username === "nishant") {
        const website = "_github"
        console.log(username + website);        // nishant_github
    }
}


// ------------------

console.log(addOne(4))      //---> Here above function can be access

function addOne(num) {
    return num + 1
}


// console.log(addTwo(4));     //---> But Here above function can't be access

const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(4));         //---> can access here or below
