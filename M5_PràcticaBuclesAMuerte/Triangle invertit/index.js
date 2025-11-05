"use strict"

function drawTriangleInv() {
        const numUser = parseInt(document.getElementById("num").value);
        let message = "";
        let err = "Introdueix un nombre"
        const resultDiv = document.getElementById("result");

        //VALIDACIONS
        if (isNaN(numUser)) return resultDiv.innerHTML = err;
        
        let i = 0;
        let j = 0;

        for (i = numUser; i > 0; i--) {
            for (j = 0; j < i; j++) {
                message += "*"
            }
            message += "<br>"
        }

        resultDiv.innerHTML = message;
    }