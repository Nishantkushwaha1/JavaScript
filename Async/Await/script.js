let pr = new Promise(function (res, rej) {
    setTimeout(function(){
        let rn = Math.floor(Math.random()*10);
        if(rn>5) res("Resolve with " + rn)
        else rej("Rejected with " + rn)
    }, 2000)
})

async function abcd(){
    try{
        let val = await pr;
        console.log(val)
    }
    catch (err){
        console.log(err)
    }
}

abcd()