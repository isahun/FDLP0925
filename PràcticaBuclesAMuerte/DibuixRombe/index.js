"use strict"
//Escriu un rombe de * amb bucles anidats i condicions.

function drawRombo() {
        const numUser = parseInt(document.getElementById("num").value);
    
        let message = "";
        let message2 = "";
        let message3 = "";
        let message4 = "";
        let err = "Introdueix un nombre"
        const resultDiv = document.getElementById("result");
        const numUserHalf = Math.floor(numUser / 2);
        let i = 0;
        let j = 0;

        //VALIDACIONS
        if (isNaN(numUser)) return resultDiv.innerHTML = err;
        
        //meitat 1
            for (i = 0; i <= numUser; i++) { 
                for (j = numUserHalf+1; j >= i; j--) {
                    message += "*"; 
                }
            message += "<br>"    
        }

        for (i = numUser-1; i >= numUserHalf; i--) { //fem numUser-1 pk l'invertit tingui una fila menys i el triangle final tingui punta
            for (j = 1; j <= i; j++) {
                message2 += "*"; 
            }
            message2 += "<br>"    
        }
        
        //meitat 2
        for (i = 1; i <= numUser; i++) { 
            for (j = 1; j <= i; j++) {
                message3 += "*"; 
            }
            message3 += "<br>"    
        }

        for (i = numUser -1; i >= 0; i--) { //fem numUser-1 pk l'invertit tingui una fila menys i el triangle final tingui punta
            for (j = numUserHalf; j >= 0; j--) {
                message4 += "*"; 
            }
            message4 += "<br>"    
        }



resultDiv.innerHTML = message3 + message4;
}