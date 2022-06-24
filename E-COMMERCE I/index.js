var form = document.querySelector("form")
form.addEventListener("submit", myFunction);

function myFunction(data) {
    event.preventDefault();


    let name = form.name.value
    let category = form.category.value
    let image = form.image.value
    let price = form.price.value
    let gender = form.gender.value
    let sold = form.sold.value



    var data = new products(name, category, image, price, gender, sold)
    let Products = JSON.parse(localStorage.getItem("Products")) || []
    Products.push(data)
    localStorage.setItem('Products', JSON.stringify(Products))
        // 34
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = data.image
    var h = document.createElement("h3");
    h.innerHTML = data.name;

    var p1 = document.createElement("p");
    p1.innerHTML = data.category;

    var p2 = document.createElement("p");
    p2.innerHTML = data.price;

    var p3 = document.createElement("p");
    p3.innerHTML = data.gender;
    var p4 = document.createElement("p");

    p4.innerHTML = data.sold;


    var btn = document.createElement("button");
    btn.innerHTML = "delete";
    btn.addEventListener("click", deleteRow);
    box.append(img, h, p1, p2, p3, btn);
    document.querySelector("#Products").append(box);

}

function deleteRow() {
    event.target.parentNode.remove();
    event.target.parentNode.innerHTML = "";
}

function products(name, category, image, price, gender, sold) {
    this.name = name
    this.category = category
    this.image = image
    this.price = price
    this.gender = gender
    this.sold = sold
}