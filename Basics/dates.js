
let myDate = new Date()

console.log(myDate);                            // 2026-09-03T13:39:19.843Z

console.log(myDate.toString())                  // Thu Sep 03 2026 19:09:19 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString())            // 3/9/2026, 7:09:19 pm

console.log(myDate.toDateString())              // Thu Sep 03 2026
console.log(myDate.toLocaleDateString())        // 3/9/2026

console.log(myDate.toTimeString())              // 19:09:19 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleTimeString())        // 7:09:19 pm

console.log(myDate.toISOString())               // 2026-09-03T13:39:19.843Z
console.log(myDate.toJSON())                    // 2026-09-03T13:39:19.843Z


console.log(typeof myDate)              // Object


const myCreatedDate = new Date(2027, 0, 14)
console.log(myCreatedDate.toLocaleString())             // 14/1/2027, 12:00:00 am

const myCreatedDate2 = new Date("2027-1-14")
console.log(myCreatedDate2.toLocaleString())            // 14/1/2027, 12:00:00 am


let myTimeStamp = Date.now()
console.log(myTimeStamp)                             // 1788444056756
console.log(myCreatedDate.getTime())                 // 1799865000000

let newDate = new Date()
console.log(`Day is  ${newDate.getDay()} and the time is ${newDate.getTime()}` )

// getDay -------> 0 - 6   here 0 means Sunday      ---> Give week day number
// getTime  -----> Gives the time in milliseconds since January 1, 1970.


newDate.toLocaleString('default', {
    weekday: "long"
})

