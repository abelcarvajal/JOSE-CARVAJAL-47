

let aux = 0
let numero = 0
let operacion

function boton(recibido) {
    aux = document.getElementById("pantalla").value
    document.getElementById("pantalla").value = aux + recibido
    valorPantalla = document.getElementById("pantalla").value = aux + recibido

}

function reset() {
    document.getElementById("pantalla").value = ""
    aux = 0;
    numero = 0;
    valorPantalla = 0
    operacion = ""
    console.log("boton C accionado")
}

function retroceso(){
    valorPantalla = valorPantalla.slice(0, -1)
    document.getElementById("pantalla").value = valorPantalla
}

function suma() {
    operacion = "+"
    numero = parseFloat(numero) + parseFloat(valorPantalla)
    console.log(`numero en suma() ${numero}`)
    //valorPantalla = numero
    limpiarPantalla()


}

function resta() {
    operacion = "-"
    if (numero == 0) {
        numero = valorPantalla
    } else {
        numero = parseFloat(numero) - parseFloat(valorPantalla)
        //valorPantalla = numero
    }

    limpiarPantalla();
}

function multiplicar() {
    operacion = "x"
    limpiarPantalla()
    if (numero == 0) {
        numero = valorPantalla
    } else {
        numero = parseFloat(numero) * parseFloat(boton(valor))
    }
}
function dividir(){
    operacion = "/"
    console.log("Operación dividir")
    limpiarPantalla()
    if (valorPantalla == 0){
        valorPantalla = "Error. No se puede dividir en 0"
    } else if(numero == 0) {
        numero = valorPantalla
    } else {
        console.log(`Numero diferente a 0 ${numero}`)
        numero = parseFloat(numero) / parseFloat(boton(valor))
    }
}

function limpiarPantalla() {
    document.getElementById("pantalla").value = ""
}

function igual() {
    limpiarPantalla();
    console.log(operacion)
    if (operacion == "+") {
        numero = parseFloat(numero) + parseFloat(valorPantalla)
        document.getElementById("pantalla").value = numero
        console.log(`numero en igual() if(+) ${numero}`)
        valorPantalla = 0
    } else if (operacion == "-") {
        numero = parseFloat(numero) - parseFloat(valorPantalla)
        document.getElementById("pantalla").value = numero
        valorPantalla = 0
    } else if (operacion == "x") {
        console.log("Esta es la multiplicacion")
        numero = parseFloat(numero) * parseFloat(valorPantalla)
        document.getElementById("pantalla").value = numero
        valorPantalla = 0
    } else if (operacion == "/") {
        numero = parseFloat(numero) / parseFloat(valorPantalla)
        document.getElementById("pantalla").value = numero
        valorPantalla = 0
    }

}