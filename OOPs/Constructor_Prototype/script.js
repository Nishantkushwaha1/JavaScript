function CreateNotebook(name, price, company, color) {
    this.name = name;
    this.price = price;
    this.company = company;
    this.color = color;
}

CreateNotebook.prototype.message = function (text) {
    let h1 = document.createElement('h1');
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1)
}
let notebook1 = new CreateNotebook("Classmate", 40, "Classmate", "Blue")
let notebook2 = new CreateNotebook("Saathi", 30, "Saathi", "Red")