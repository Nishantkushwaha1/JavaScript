fetch('https://randomuser.me/api/')

.then(function(rawdata){
    return rawdata.json();
})
.then(function(data){
    console.log(data.results[0].picture.large)
})
.catch(function(err){
    console.log(err)
}) 