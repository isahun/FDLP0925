"use strict"


    //Fer un programa que demani dos números i un operador(+,-,*,/).
        //Al final, el programa ha d'imprimir per pantalla el resultat de fer l’operació que contingui la variable operador.

        //TO DO
        //HTML: 3 inputs: 2 nums i 1 operador + botó + div
        //JS: switch amb operador com a variable principal

    let num1 = null; //omplirem dins del switch per no fixar el valor abans, IMPORTANT
    let num2 = null;
    let operador = " ";    
    let resultat = " ";
    let resultDiv = document.getElementById("result");
    
    let err1 = "Introdueix un nombre.";
    let err2 = "Introdueix un operador vàlid.";

    function calcuOpera() {

        num1 = parseInt(document.getElementById("num1").value);
        num2 = parseInt(document.getElementById("num2").value);
        operador = document.getElementById("operador").value;

        if ((isNaN(num1) || isNaN(num2))) {
            resultDiv.innerHTML = err1;
            return;
        } else if ((operador != "+") && (operador != "-") && (operador != "/") && (operador != "*"))  {
            resultDiv.innerHTML = err2;
            return;//posarlo aqui pa k no surti lo de nan
        }   

        switch (operador) {
            case "+": //referencia als valors de la variable que ho regeix tot, (operador) i q introdueix l'usuari                
                resultat = num1 + num2;
                break;
            case "-":
                resultat = num1 - num2;
                break;
            case "/":
                resultat = num1 / num2;
                break;
            case "*":
                resultat = num1 * num2;               
                break;            
                
        }

        resultDiv.innerHTML = `El resultat de ${num1} ${operador} ${num2} és ${resultat}`;
        } 
