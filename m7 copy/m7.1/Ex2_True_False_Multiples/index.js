"use strict"

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