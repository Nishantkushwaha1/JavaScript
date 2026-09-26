//Box 1
let random = document.querySelector('#random');
random.addEventListener('mouseover', function () {
    random.innerHTML = Math.floor(Math.random() * 100) + 1
})

random.addEventListener('mouseleave', function () {
    random.innerHTML = 1
})


//Box 2 


let two_color = document.querySelector('#color')
// let count = 0;
let colr = 'red';
two_color.addEventListener("mouseover", function () {
    // count = count + 1;
    // if(count%2 == 0){
    //     two_color.style.backgroundColor = "green";
    // }
    // else{
    //     two_color.style.backgroundColor = "red";
    // }
    if (colr == 'red') {
        two_color.style.backgroundColor = "red";
        colr = 'green';
    }
    else if (colr == 'green') {
        two_color.style.backgroundColor = "green";
        colr = 'blue';
    }
    else {
        two_color.style.backgroundColor = "blue";
        colr = 'red';
    }

})
two_color.addEventListener("mouseleave", function () {
    two_color.style.backgroundColor = "white";
})




//Box 3

let random_color = document.querySelector('#random_color')
random_color.addEventListener('mouseover', function () {
    let r1 = Math.floor(Math.random() * 256)
    let r2 = Math.floor(Math.random() * 256)
    let r3 = Math.floor(Math.random() * 256)
    random_color.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
})
random_color.addEventListener("mouseleave", function () {
    random_color.style.backgroundColor = "white";
})



//Box 4

let box4 = document.querySelector('#box4')
box4.addEventListener('click', function(){
    let r1 = Math.floor(Math.random() * 256)
    let r2 = Math.floor(Math.random() * 256)
    let r3 = Math.floor(Math.random() * 256)
    random.style.backgroundColor = `rgb(255, ${r2}, ${r3})`;
    two_color.style.backgroundColor = `rgb(${r1}, 255, ${r3})`;
    random_color.style.backgroundColor = `rgb(${r1}, ${r2}, 255)`;
})