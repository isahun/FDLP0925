"use strict"


/* El programa demana dos nombres enters i llavors calcula la suma dels valors compresos entre els dos números, inclosos. 
Exemple: 4 i 6: resultat = 4 + 5 + 6 = 15 

TO DO            
    JS
        bucle per agafar els dos nombres i tots els del mig i sumar-los
        (cal un array x guardar els nums no?)
        display */

function calculaSuma() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const primerNum = Math.min(num1, num2);
    const segonNum = Math.max(num1, num2);
    let difArray = [];
    const resultDiv = document.getElementById("result");
    const err1 = "Introdueix un nombre"
    let message = "";

    if (isNaN(num1) || isNaN(num2)) {
        message = err1;
        resultDiv.innerHTML = message
    }
        for (let i = primerNum; i <= segonNum; i++ ) {
            difArray.push(i);
            }

            let suma = 0;
            for (let i = 0; i < difArray.length; i++) {
                suma += difArray[i];
            }        
            console.log(difArray);
            console.log("La suma és " + suma); 
            
            resultDiv.innerHTML = `La suma dels nombres compresos entre ${num1} i ${num2} és ${suma}.`
    
    }


