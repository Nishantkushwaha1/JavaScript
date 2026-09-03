// ------------- Object Destructure --------------

const course = {
    courseName: "JavaScript in one shot",
    price: "free",
    courseInstructor: "Nishant"
}

// console.log(course.courseInstructor)      ---> generally we do like this

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

/*
 e.g., in React

 const navbar = ({company}) => {
    }

 navbar(company = "Nishant")

 */


// -------------- API ------------

// look like this:

// {
//     "courseName": "JavaScript in one shot",
//     "price": "free",
//     "courseInstructor": "Nishant"
// }

// [
//     {},
//     {},
//     {}
// ]
