let dadosRifa = {}

fetch("rifa-data.json")
.then(res => res.json())
.then(data => {

dadosRifa = data

document.querySelectorAll("area").forEach(area => {

let numero = area.dataset.numero
let comprador = dadosRifa[numero]

area.addEventListener("mouseenter", () => {

if(comprador == null){

area.title = "Número " + numero + " disponível"

}else{

area.title = "Comprado por: " + comprador

}

})

area.addEventListener("click", () => {

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
