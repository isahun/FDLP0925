"use strict"

function drawTriangle() {

const numUser = parseInt(document.getElementById("num").value);
const resultDiv = document.getElementById("result");
let message = "";
let message2 = "";
let messFinal = "";
const err1 = "Introdueix un nombre";

//VALIDACIONS
if (isNaN(numUser) || numUser <= 0) {
    resultDiv.innerHTML = err1;
    return;
}

//OPERACIONS
let i = 0; //index q controla el bucle exterior, el q diu quantes files hi haurà (numUser files) sense afegir cap asterisc
let j = 0; //index diferent q controla bucle interior i per tant quants asteriscs hi haurà a la fila q marqui el bucle exterior

for (i = 1; i <= numUser; i++) { //la "i" defineix les files i parteix de la fila 1, i=1, augmentant i++ a cada iteració x canviar d fila
    for (j = 1; j <= i; j++) { // assignem el valor 1 a "j", i mentre aquesta sigui més petita o igual a "i" (el nombre d la fila), j augmentarà 1 i es posarà un asterisc.
        //si anem per la tercera fila, i=3, "j" parteix d'1 i acumula asteriscs al missatge fins que j > i. Llavors surt de l'interior, acumula un break al missatge del bucle exterior q marca la fi d la línia
        //i amb la següent iteració entra a la fila següent
        message += "*"; //afegeix un asterisc a la linia numero "i" a cada iteració (la "i" la defineix el bucle exterior)
    }
    message += "<br>"    
}

resultDiv.innerHTML = message;

}