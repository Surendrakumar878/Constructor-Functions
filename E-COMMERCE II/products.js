// var arr = JSON.parse(localStorage.getItem("arrvalue"))
//     console.log(arr)
//     displayData(arr);

//     function displayData(data) {
//         data.forEach(function(elem) {
//             var tr = document.createElement("div");

//             var td1 = document.createElement("img");

//             td1.setAttribute("src", elem.img);

//             var td2 = document.createElement("h3");
//             td2.innerText = elem.name;

//             var td3 = document.createElement("p");
//             td3.innerText = elem.role;

//             var td4 = document.createElement("img");
//             td4.setAttribute("src", elem.img2);
//             tr.append(td1, td2, td3, td4)
//             document.querySelector("#cantainer").append(tr)
//         })
//     }
let Products = JSON.parse(localStorage.getItem("Products"))
displayData(Products);

function displayData(data) {
    data.forEach(function(elem) {
        var box = document.createElement("div");
        var img = document.createElement("img");
        img.src = elem.image
        var h = document.createElement("h3");
        h.innerHTML = elem.name;

        var p1 = document.createElement("p");
        p1.innerHTML = elem.category;

        var p2 = document.createElement("p");
        p2.innerHTML = elem.price;

        var p3 = document.createElement("p");
        p3.innerHTML = elem.gender;

        var p4 = document.createElement("p");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "add";
        p4.innerHTML = elem.sold;
        if (elem.sold === "true") {


            btn1.style.backgroundColor = "red"
            btn1.addEventListener("click", cRow);
        } else {
            btn1.style.backgroundColor = "green"
        }

        var btn = document.createElement("button");
        btn.innerHTML = "delete";
        btn.addEventListener("click", deleteRow);
        box.append(img, h, p1, p2, p3, btn, btn1);
        document.querySelector("#Products").append(box);
    })
}

function deleteRow() {
    event.target.parentNode.remove();
    event.target.parentNode.innerHTML = "";
}
var i = 0

function cRow() {

    i++
    document.querySelector("#counter").innerHTML = (i)
}