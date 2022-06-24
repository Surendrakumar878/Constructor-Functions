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
 }

 function gotoslideshow() {
     window.location.href = "products.html"
 }

 function products(name, category, image, price, gender, sold) {
     this.name = name
     this.category = category
     this.image = image
     this.price = price
     this.gender = gender
     this.sold = sold
 }