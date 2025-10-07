"use strict"


/* El programa demana dos nombres enters i llavors calcula la suma dels valors compresos entre els dos números, inclosos. 
Exemple: 4 i 6: resultat = 4 + 5 + 6 = 15 

TO DO            
    JS
        bucle per agafar els dos nombres i tots els del mig i sumar-los
        (cal un array x guardar els nums no?)
        display */

function calculaSuma() {
    
    const resultDiv = document.getElementById("result");
    const num1 = document.getElementById("num1"); 
    const num2 = document.getElementById("num2");
    const err = "Introdueix un nombre valid";
    let suma = 0;
    
    //VALIDACIONS AIXÍ SII
    if (isNaN(num1) || isNaN(num2)) {
        return //early return
        resultDiv.innerHTML = err;
    }

    if (num1 === num2) return resultDiv.innerHTML = "Tots dos nombres són iguals i el resultat és: " + num1;

    //si el num1 > num2
    //num1 < num2
    //num1 = 8 num2 = 4
    if (num1>num2) { //amb això d'aqui sota estem intercanviant els valors de les variables 
    //en cas que la diferència surti negativa
        let aux = num1 // aux = 8
        num1 = num2 //num1 = 4
        num2 = aux //num2 = 8
    }
    //num1 = 4 num2 = 8

    for (let i = num1 ; i <= num2; i++) {
        console.log(i);
        suma += i
    }
    
    resultDiv.innerHTML = `La suma dels nombres compresos entre ${num1} i ${num2} és ${suma}.`
    
    }


