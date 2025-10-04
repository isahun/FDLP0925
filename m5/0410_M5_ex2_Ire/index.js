"use strict"


/* El programa demana dos nombres enters i llavors calcula la suma dels valors compresos entre els dos números, inclosos. 
Exemple: 4 i 6: resultat = 4 + 5 + 6 = 15 

TO DO
            
    JS
        variables: una x cada numero, resultat, missatge, 
        validacions isNaN , > 0
        bucle per agafar els dos nombres i tots els del mig i sumar-los
        (no cal un array x guardar els nums no?)
        display

    <input type="number" placeholder="Escriu el primer nombre" id="num1">
    <input type="number" placeholder="Escriu el segon nombre" id="num2">
    <div id="result"></div>
    <button type="button" value="Fes clic" onclick="calculaSuma()">Fes clic per saber el resultat</button>
    <script src="index.js"></script>
*/

const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value);

const resultDiv = document.getElementById("result");
const err1 = "Introdueix un nombre"
let message = "";

if (isNaN(num1)|| isNaN(num2) || num1 < 0 || num2 < 0) {
    message = err1;
    resultDiv.innerHTML = message
}

for (let i=0; i >= num1 && i < num2; i++ ) {
    
}

