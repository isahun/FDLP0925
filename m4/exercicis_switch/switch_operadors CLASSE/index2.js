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
        //validacions
            if (isNaN(num1) || isNaN(num2)) return resultDiv.innerHTML = err1;
            if (operador == 0) return resultDiv.innerHTML = err2;

        switch (operador) {
            case 1: 
                resultat = num1 + num2;
                break;
            case 2:
                resultat = num1 - num2;
                break;
            case 3:
                resultat = num1 * num2;
                break;
            case 4:
                if (num2 == 0) { //en el cas 4, comq no es pot dividir entre 0, o si q es pot pk no es un error 
                //pero creem un cas especial, q dona infinit. Ho podem deixar, pero ens donaria infinity.
                    resultat = "Infinit";
                } else {
                    resultat = num1 / num2;
                }

                break;
                
        }

        resultDiv.innerHTML = `El resultat és: ${resultat}`;
        } 
