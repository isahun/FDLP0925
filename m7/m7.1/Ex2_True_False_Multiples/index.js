"use strict"
function multipleOperate(num1, num2) {
     if (num1 % num2 === 0) {
            return "True"
        } else {
            return "False"
        }
}
    

function isMultiple() {
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        let message = "";
        let isMultiple = num1 % num2
        let err = "Introdueix un nombre"
        const resultDiv = document.getElementById("result");

        //VALIDACIONS
        if (isNaN(num1) || isNaN(num2)) return resultDiv.innerHTML = err;
        

        resultDiv.innerHTML = "Els teus números són múltiples? " + multipleOperate(num1, num2); 
    }