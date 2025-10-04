"use strict"


/* El programa demana dos nombres enters i llavors calcula la suma dels valors compresos entre els dos números, inclosos. 
Exemple: 4 i 6: resultat = 4 + 5 + 6 = 15 

TO DO            
    JS
        bucle per agafar els dos nombres i tots els del mig i sumar-los
        (no cal un array x guardar els nums no?)
        display

    <input type="number" placeholder="Escriu el primer nombre" id="num1">
    <input type="number" placeholder="Escriu el segon nombre" id="num2">
    <div id="result"></div>
    <button type="button" value="Fes clic" onclick="calculaSuma()">Fes clic per saber el resultat</button> */

function calculaSuma() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const diferencia = num1 - num2;
    let difArray = [];
    const resultDiv = document.getElementById("result");
    const err1 = "Introdueix un nombre"
    let message = "";

    if (isNaN(num1)|| isNaN(num2) || num1 < 0 || num2 < 0) {
        message = err1;
        resultDiv.innerHTML = message
    }

    if (diferencia<0) {

        for (let i = num1; i <= num2 ; i++ ) {
            difArray.push(i);
            }

            //console.log(difArray)

            let suma = 0;
            for (let i = 0; i < difArray.length; i++) {
                suma += difArray[i];
            }        
            console.log(difArray);
            console.log("The sum is " + suma); 
        } else {
            
        for (let i= num2; i <= num1 ; i++ ) {
            console.log(i);
        }
    
    }
}    


