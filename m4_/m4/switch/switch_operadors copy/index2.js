"use strict"

    //Fer un programa que demani dos números i un operador(+,-,*,/).
        //Al final, el programa ha d'imprimir per pantalla el resultat de fer l’operació que contingui la variable operador.

        //TO DO
        //HTML: 3 inputs: 2 nums i 1 operador + botó + div
        //JS: switch amb operador com a variable principal

    function calcuOpera() {

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const operador = parseInt(document.getElementById("operador").value);  
    const resultDiv = document.getElementById("result");
    const err1 = "Introdueix un nombre.";
    const err2 = "Introdueix un operador vàlid.";
    let resultat = " ";
    let operadorSimb = " ";
       

        if ((isNaN(num1) || isNaN(num2))) {
            resultDiv.innerHTML = err1;
            return;
        } 
        if (operador == 0) {
            resultDiv.innerHTML = err2;
            return;
        }   

        switch (operador) {
            case 1: //referencia als valors de la variable que ho regeix tot, (operador) i q introdueix l'usuari                
                resultat = num1 + num2;
                operadorSimb = "+";
                break;
            case 2:
                resultat = num1 - num2;
                operadorSimb = "-";                
                break;
            case 3:
                resultat = num1 / num2;
                operadorSimb = "/";
                break;
            case 4:
                resultat = num1 * num2;
                operadorSimb = "*"               
                break;            
                
        }

        resultDiv.innerHTML = `El resultat de ${num1} ${operadorSimb} ${num2} és ${resultat}`;
        } 
