
let valorPantalla = 0
let aux = 0

function boton(recibido){
    console.log(recibido)
    aux = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = aux + recibido
    valorPantalla = document.getElementById("pantalla").value = aux + recibido
}
