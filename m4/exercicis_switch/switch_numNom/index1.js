"use strict"


        //Crea un programa que sol·liciti a l'usuari/ària que introdueixi un número de l'1 al 10 i 
        //mostri per pantalla el seu equivalent en lletres (per exemple, 1 es mostraria com "u", 2 com "dos", etc.).

        //TO DO
        //HTML crear input per agafar numero del user, i resultat
        //JS crear switch per cada cas

        let numNum = 0;        
        let resultDiv = document.getElementById("result");
        let nomNum = " ";
        const err1 = "Introdueix un nombre de l'1 al 10.";
    

        function numtoLet() {
            numNum = parseInt(document.getElementById("numNum").value);

            //no cal validar pk hi ha default
            //if (isNaN(numNum) || numNum > 10 || numNum < 1) {
              //  resultDiv.innerHTML = err1;
              //  return;   
            //}

        switch (numNum) {
            case 1:
                nomNum = "U";
                break;
            case 2:
                nomNum = "Dos";
                break;
            case 3:
                nomNum = "Tres";
                break;
            case 4:
                nomNum = "Quatre";               
                break;
            case 5:
                nomNum = "Cinc";
                break;
            case 6:
                nomNum = "Sis";
                break;
            case 7:
                nomNum = "Set";
                break;
            case 8:
                nomNum = "Vuit";
                break;
            case 9:
                nomNum = "Nou";
                break;
            case 10:
                nomNum = "Deu";
                break;
            default:
                resultDiv.innerHTML = err1;
                return;
        }

        resultDiv.innerHTML = `El número ${numNum} s'escriu: ${nomNum}.`;
        }

