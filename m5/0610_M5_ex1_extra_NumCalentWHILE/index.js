"use strict"

/*Realitzar un joc per endevinar un nombre aleatori N, entre 1 i 500.

Si la distància entre el nombre a endevinar i el de l'usuari/ària és de 50 o més, el programa haurà de dir:
“Fred, fred: el teu número és més gran “ o “Fred, fred: el teu número és més petit “

Si la distància entre el nombre a endevinar i el de l'usuari/ària està entre 15 i 50, el programa haurà de dir:
“Tebi, Tebi: el teu número és més gran “ o “Tebi, Tebi: el teu número és més petit “ 

I si la distància entre el nombre a endevinar i el de l'usuari/ària i si la distància és menor a 15, el programa haurà de dir:
“Calent, calent: el teu número és més gran “ o “Calent, calent: el teu número és més petit “

El procés acaba quan l'usuari/ària encerta.

<input type="number" placeholder="Introdueix un nombre entre 1 i 500" id="num">
<button type="button" value="Fes clic" onclick="sendNum()">Fes clic</button>
<div id="resultat"></div>
<script src="index.js"></script> */


const numPC = parseInt(Math.floor(Math.random()*500)+1);
let comptador = 0;

function sendNum() {    
let num = null; //x inicialitzar el bucle
let resultDiv = document.getElementById("result");

let diferencia = null; 
let message = "";
const err1 = "Introdueix un nombre entre 1 i 500"
const mess1 = "Fred, fred, el teu número és més gran";
const mess2 = "Fred, fred, el teu número és més petit";
const mess3 = "Tebi, tebi, el teu número és més gran";
const mess4 = "Tebi, tebi, el teu número és més petit";
const mess5 = "Calent, calent, el teu número és més gran";
const mess6 = "Calent, calent, el teu número és més petit";
const mess7 = "Enhorabona, has encertat el nombre!"

num = parseInt(document.getElementById("num").value);
//OPERAR
console.log(numPC);

    //VALIDAR
        if (isNaN(num)|| num <= 0 || num > 500) {
        return resultDiv.innerHTML = err1;
    }

    num = parseInt(document.getElementById("num").value);


    if (num !== numPC) {
        comptador++
        
        if (num > numPC) {
            diferencia = num - numPC;
            if (diferencia < 15) {
                message = mess5;
            } else if (diferencia >= 15 && diferencia < 50) {
                message = mess3;
                } else if (diferencia >= 50) {
                message = mess1;
            }  
        } else if (num < numPC) {
            diferencia = numPC - num;
            if (diferencia < 15) {
            message = mess6;
                } else if (diferencia >= 15 && diferencia < 50) {
                message = mess4;
                } else if (diferencia >= 50) {
                message = mess2;
                }  
        } 
    } else { 
            message = mess7;
        }    
        resultDiv.innerHTML = message + " i has gastat " + comptador + " intents."; 
    }