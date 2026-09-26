// function h(){
//     console.log("Hello")
// }
// setTimeout(h, 1000)


// function b(){
//     console.log("Bye")
// }
// setTimeout(b, 2000)

// setTimeout(function(){
//     console.log("Nishant")
// }, 3000)




for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        // console.log(i)
    }, i*1000)
}
// its print 1 to 10 with 1 sec gap.


//Timer for 30 to 0 
for(let i=0; i<=30; i++)
{
    setTimeout(function(){
        console.log(30-i)
    }, i*500)
}
