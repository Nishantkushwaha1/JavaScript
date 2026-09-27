// closures hota hai function jo ki kisi parent function ke ander ho aur ander wala function return ho rha ho,
// aur jo returning function hai wo parent function ka koi variable use kare.

function print(){
    let a = 5;
    return function(){
        console.log(a)
    }
}

let fn = print();
fn()

