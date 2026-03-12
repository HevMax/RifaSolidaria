let dadosRifa = {}

fetch("rifa-data.json")
.then(res => res.json())
.then(data => {

dadosRifa = data

document.querySelectorAll("circle").forEach(circle => {

let numero = circle.dataset.numero
let comprador = dadosRifa[numero]

if(comprador != null){

circle.classList.add("vendido")

}

circle.addEventListener("mouseenter", () => {

if(comprador == null){

circle.title = "Número " + numero + " disponível"

}else{

circle.title = "Comprado por: " + comprador

}

})

circle.addEventListener("click", () => {

if(comprador == null){

let msg = "Olá! Quero comprar o número " + numero + " da rifa da Trice 🐱"

let url = "https://wa.me/5581999999999?text=" + encodeURIComponent(msg)

window.open(url)

}else{

alert("Esse número já foi comprado por " + comprador)

}

})

})

})
