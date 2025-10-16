"use strict"

function drawTriangle() {
        const numUser = parseInt(document.getElementById("num").value);
        let message = "";
        let err = "Introdueix un nombre"
        const resultDiv = document.getElementById("result");

        //VALIDACIONS
        if (isNaN(numUser)) return resultDiv.innerHTML = err;
        
        for (let i = 0; i < numUser; i++) {
            for (let j = 0; j <= i; j++) {
                message += "*"
            }
            message += "<br>"
        }

        resultDiv.innerHTML = message;
    }