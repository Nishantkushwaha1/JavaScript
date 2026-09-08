
const button = document.querySelector(".button")

button.addEventListener('click' , function(e) {
    e.preventDefault();

    const height = Number(document.querySelector('#height').value);
    const weight = Number(document.querySelector('#weight').value);
    const results = document.querySelector('.result')

    if ( height <= 0 || isNaN(height))
    {
        results.innerHTML = `Please give a valid height  ${height}`;
    }
    else if ( weight <= 0 || isNaN(weight))
    {
        results.innerHTML = `Please give a valid weight  ${weight}`;
    }
    else
    {
        const bmi = (weight/ ((height * height)/ 10000)).toFixed(2);
        results.innerHTML= `<span>${bmi}</span>`;
    }
});
