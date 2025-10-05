"use strict"

//Demana a l'usuari/ària un número entre 0 i 99 i mostra'l escrit en lletres (pots fer-ho en català o castellà).
//Exemple: 56 (cinquanta-sis) o 56 (cincuenta y seis)

//TO DO 
//HTML
    //input nombre, botó, div, script 
//JS 
    //variables
    //validacions
    //operacions (condicional?)
    //display

    function toLetters() {
        const numUser = parseInt(document.getElementById("num").value);
        const resultDiv = document.getElementById("result");
        let message = "";
        const numUserDesenes = parseInt(numUser/10); //desenes
        const numUserUnitats = numUser%10; //unitats
        const err1 = "Introdueix un nombre entre 0 i 99";

        let zeroTxt = "Zero";
        let oneTxt = "U";
        let twoTxt = "Dos";
        let threeTxt = "Tres";
        let fourTxt = "Quatre";
        let fiveTxt = "Cinc";
        let sixTxt = "Sis";
        let sevenTxt = "Set";
        let eightTxt = "Vuit";
        let nineTxt = "Nou";
        
        let twentyTxt = "Vint";
        let thrityTxt = "Trenta";
        let fortyTxt = "Quaranta";
        let fiftyTxt = "Cinquanta";
        let sixtyTxt = "Seixanta";
        let seventyTxt = "Setanta";
        let eightyTxt = "Vuitanta";
        let ninetyTxt = "Noranta";




        //validem
        if (numUser < 0 || numUser > 99) {
            resultDiv.innerHTML = err1;
            return;
        } 
        
        
        if (numUser < 10) {
                switch (numUserUnitats) {
                    case 0:
                        message = zeroTxt;
                        break;

                    case 1:
                        message = oneTxt;
                        break;

                    case 2:
                        message = twoTxt;
                        break;

                    case 3:
                        message = threeTxt;
                        break;

                    case 4:
                        message = fourTxt;
                        break;

                    case 5:
                        message = fiveTxt;
                        break;

                    case 6:
                        message = sixTxt;
                        break;

                    case 7:
                        message = sevenTxt;
                        break;

                    case 8:
                        message = eightTxt;
                        break;

                    case 9:
                        message = nineTxt;
                        break;
                }

        } else if (numUser > 9 && numUser < 20) {

        switch (numUser) {
            
            case 10:
                message = "Deu";
                break;
            case 11:
                message = "Onze";
                break;
            case 12:
                message = "Dotze";
                break;
            case 13:
                message = "Tretze";
                break;
            case 14:
                message = "Catorze";
                break;
            case 15:
                message = "Quinze";
                break;
            case 16:
                message = "Setze";
                    break;
            case 17:
                message = "Disset";
                break;
            case 18:
                message = "Divuit";
                break;
            case 19:
                message = "Dinou";
                break;
        }

                } else {

                    switch (numUserDesenes) {
                        case 2:
                            message = twentyTxt;
                            break;
                        case 3:
                            message = thrityTxt;
                            break;
                        case 4:
                            message = fortyTxt;
                            break;
                        case 5:
                            message = fiftyTxt;
                            break;
                        case 6:
                            message = sixtyTxt;
                            break;
                        case 7:
                            message = seventyTxt;
                            break;
                        case 8:
                            message = eightyTxt;
                            break;
                        case 9:
                            message = ninetyTxt;
                            break;
                    }
                }
                

                if (numUserUnitats !== 0) {
                    if (numUser > 20 && numUser < 30) {
                        message += "-i-";} else { message += " ";
                            
                        }
                    
                    switch(numUserUnitats) {
                        case 1:
                            message += oneTxt;
                            break;
                        case 2:
                            message += twoTxt;
                            break;
                        case 3:
                            message += threeTxt;
                            break;
                        case 4:
                            message += fourTxt;
                            break;
                        case 5:
                            message += fiveTxt;
                            break;
                        case 6:
                            message += sixTxt;
                            break;
                        case 7:
                            message += sevenTxt;
                            break;
                        case 8:
                            message += eightTxt;
                            break;
                        case 9:
                            message += nineTxt;
                            break;                                                          
                    }
                }

        resultDiv.innerHTML = `El nombre ${numUser} s'escriu ${message}.`
        
        }


