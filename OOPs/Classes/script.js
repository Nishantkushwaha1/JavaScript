class CreatePencil{
    constructor(name, price, company, color){
        this.name = name;
        this.price = price;
        this.company = company;
        this.color = color;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1)
    }

    erase(){
        document.body.querySelectorAll('h1').forEach(function (ele){
            ele.remove();
        }
    )}
}

let p1 = new CreatePencil("Nataraj", 15, "Nataraj", "Black")
let p2 = new CreatePencil("Apsara", 20, "Apsara", "Red")