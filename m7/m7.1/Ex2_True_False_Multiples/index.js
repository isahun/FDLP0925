"use strict"

/*  Crea un programa que determini si un nombre és múltiple d’un altre. 
    Per fer-ho crea una funció que ha de rebre els dos nombres per paràmetre 
    i ha de retornar true, si el primer nombre introduït és múltiple del segon o false, si no ho és.
    
    TO DO
    HTML
        inputs pels nombres
        div
        script
        botó
    JS
        variables (una per cada número, una per la comparació?)
        validació
        operacions: if else x comparar els dos números, % = 0 per saber si són múltiples
    
  
    <input type="number" placeholder="Introdueix el primer número" id="num1">
    <input type="number" placeholder="Introdueix el segon número" id="num2">
    <button type="button" onclick="isMultiple()">Fes clic per saber si són múltiples</button>
    <div id="result"></div>
    <script src="index.js"></script>
    
    */


    function isMultiple(num1, num2) {
        num1 = parseInt(document.getElementById("num1").value);
        num2 = parseInt(document.getElementById("num2").value);
        let message = "";
        let isMultiple = num1 % num2
        let err = "Introdueix un nombre"
        const resultDiv = document.getElementById("result");

        //VALIDACIONS
        if (isNaN(num1) || isNaN(num2)) return resultDiv.innerHTML = err;


        //OPERACIONS
        if (isMultiple === 0) {
            message = "True"
        } else {
            message = "False"
        }

        resultDiv.innerHTML = message
    }