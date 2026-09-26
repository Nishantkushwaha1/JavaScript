let user = {
    name: "Nishant", 
    age: 20,
    cgpa: 8.1,
    is_Graduated: false,
}

for (let key in user) {
    console.log(key, user[key])
}


// Output:
// name Nishant
// age 20
// cgpa 8.1
// is_Graduated false