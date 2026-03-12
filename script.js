let rifaData = {}

fetch("rifa-data.json")
.then(res => res.json())
.then(data => {
rifaData = data
})

const imagem = document.getElementById("rifa")
const tooltip = document.getElementById("tooltip")

imagem.addEventListener("mousemove", function(e){

// EXEMPLO: detectar número aproximado pela posição
let numero = Math.floor(Math.random()*10)+1

let comprador = rifaData[numero]

tooltip.style.left = e.offsetX + "px"
tooltip.style.top = e.offsetY + "px"

if(comprador == null){

tooltip.innerText = "Disponível"

}else{

tooltip.innerText = "Comprado por: " + comprador

}

tooltip.style.display = "block"

})

imagem.addEventListener("mouseleave", function(){

tooltip.style.display = "none"

})
