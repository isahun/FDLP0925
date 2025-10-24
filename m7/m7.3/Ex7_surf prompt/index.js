"use strict"

function catchUserOption() {
    const userOption = parseInt(prompt("Tria un número del menú: \n1. Calcula el material de la taula \n2. Calcula la previsió d'onades \n3. Calcula el cost de la reserva \n4. Surt del programa"));
    return userOption //num
    }

function catchUserValue(userValue, message) {
    userValue = prompt(message)
    return userValue
}

function calcBoardMaterial(userExperience) {
    if (userExperience ===true) userExperience = "Taula de fibra";
    if (userExperience === false) userExperience = "Taula d'escuma'";

    return userExperience; //rep booleà, retorna string
}

function printForecast(waveHeight) {
    if (!waveHeight) return "Has d'introduir un valor vàlid."
    const waveThreshold = 2;
    if(waveHeight > waveThreshold) {
        return "Onades grans."
    } else {
        return "Onades petites" //return string
    }
}

function calcBookingCost(bookingCostMins, bookingCostBoard) {

    if (!bookingCostMins) return "Has d'introduir un valor vàlid."
    
    const minsThreshold = 60;
    const cost = (bookingCostMins / minsThreshold); 
    let message = "";

    if (bookingCostBoard === true) {
        message = cost * 35;
    } else if (bookingCostBoard === false){
        message = cost * 20;
    }

    return message; //return number
}

function navigateMenu() {

    let userOption = 4;

    do {

        let userOption = catchUserOption();
        let userExperience = null;
        let waveHeight = null;
        let bookingCostMins = null;
        let bookingCostBoard = null;
        let exitMessage = "";
        let boardType = "";
        let forecast = "";
        let totalCost = null;
        let messCostMins = "Introdueix el nombre de minuts de la sessió reservada: Ex. 60";
        let messHeight = "Introdueix l'alçada de l'onada en metres. Ex: 2"


        while (!userOption || userOption <= 0 || userOption > 4) {
            alert("Ep! Has d'introduir un nombre entre 1 i 4!");
            userOption = catchUserOption();
        }

        switch (userOption) {
            case 1:
                userExperience = confirm("Tens experiència? Sí: OK / No: Cancel·lar"); //booleà
                boardType = calcBoardMaterial(userExperience);
                alert (boardType);
                break;

            case 2:
                waveHeight = parseFloat(catchUserValue(waveHeight, messHeight)); //num                
                forecast = printForecast(waveHeight);
                alert (forecast);
                break;

            case 3:
                bookingCostMins = parseFloat(catchUserValue(bookingCostMins, messCostMins));
                if (!bookingCostMins || bookingCostMins < 30) {
                    alert("Has d'escriure un número de minuts. Mínim 30 minuts.")
                    bookingCostMins = parseInt(catchUserValue(bookingCostMins, messCostMins));
                } 
            
                bookingCostBoard = confirm("Tria el teu tipus de taula. Escuma: OK / Fibra: Cancel·lar");
                totalCost = `El cost de la teva reserva és de ${calcBookingCost(bookingCostMins, bookingCostBoard)} €.`
                alert (totalCost);
                break;

            case 4:
                exitMessage = alert("Fins aviat!");
                break;
        }
} while (userOption !== 4)

}

