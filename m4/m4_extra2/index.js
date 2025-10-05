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
        } else {


        switch (numUserDesenes) {
            case 0:
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
            break;
            
            case 1:
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
            break;

            case 2:
                    switch (numUserUnitats) {
                        case 0:
                            message = twentyTxt;
                            break;
                        case 1:
                            message = twentyTxt + "-i-" + oneTxt;
                            break;
                        case 2:
                            message = twentyTxt + "-i-" + twoTxtTxt;
                            break;
                        case 3:
                            message = twentyTxt + "-i-" + threeTxt;
                            break;
                        case 4:
                            message = twentyTxt + "-i-" + fourTxt;
                            break;
                        case 5:
                            message = twentyTxt + "-i-" + fiveTxtTxt;
                            break;
                        case 6:
                            message = twentyTxt + "-i-" + sixTxt;
                            break;
                        case 7:
                            message = twentyTxt + "-i-" + sevenTxt;
                            break;
                        case 8:
                            message = twentyTxt + "-i-" + eightTxt;
                            break;
                        case 9:
                            message = twentyTxt + "-i-" + nineTxt;
                            break;  
                    }
            break;
                
            case 3:
                switch (numUserUnitats) {
                    case 0:
                        message = thrityTxt;
                        break;
                    case 1:
                        message = thrityTxt + "-" + oneTxt;
                        break;
                    case 2:
                        message = thrityTxt + "-" + twoTxtTxt;
                        break;
                    case 3:
                        message = thrityTxt + "-" + threeTxt;
                        break;
                    case 4:
                        message = thrityTxt + "-" + fourTxt;
                        break;
                    case 5:
                        message = thrityTxt + "-" + fiveTxtTxt;
                        break;
                    case 6:
                        message = thrityTxt + "-" + sixTxt;
                        break;
                    case 7:
                        message = thrityTxt + "-" + sevenTxt;
                        break;
                    case 8:
                        message = thrityTxt + "-" + eightTxt;
                        break;
                    case 9:
                        message = thrityTxt + "-" + nineTxt;
                        break;  
                    }
            break;

            case 4: 
                switch (numUserUnitats) {
                    case 0:
                        message = fortyTxt;
                        break;
                    case 1:
                        message = fortyTxt + "-" + oneTxt;
                        break;
                    case 2:
                        message = fortyTxt + "-" + twoTxtTxt;
                        break;
                    case 3:
                        message = fortyTxt + "-" + threeTxt;
                        break;
                    case 4:
                        message = fortyTxt + "-" + fourTxt;
                        break;
                    case 5:
                        message = fortyTxt + "-" + fiveTxtTxt;
                        break;
                    case 6:
                        message = fortyTxt + "-" + sixTxt;
                        break;
                    case 7:
                        message = fortyTxt + "-" + sevenTxt;
                        break;
                    case 8:
                        message = fortyTxt + "-" + eightTxt;
                        break;
                    case 9:
                        message = fortyTxt + "-" + nineTxt;
                        break;  
                        }
            break;

            case 5: 
                switch (numUserUnitats) {
                    case 0:
                        message = fiftyTxt;
                        break;
                    case 1:
                        message = fiftyTxt + "-" + oneTxt;
                        break;
                    case 2:
                        message = fiftyTxt + "-" + twoTxtTxt;
                        break;
                    case 3:
                        message = fiftyTxt + "-" + threeTxt;
                    break;
                case 4:
                        message = fiftyTxt + "-" + fourTxt;
                        break;
                    case 5:
                        message = fiftyTxt + "-" + fiveTxtTxt;
                        break;
                    case 6:
                        message = fiftyTxt + "-" + sixTxt;
                        break;
                    case 7:
                        message = fiftyTxt + "-" + sevenTxt;
                        break;
                    case 8:
                        message = fiftyTxt + "-" + eightTxt;
                        break;
                    case 9:
                        message = fiftyTxt + "-" + nineTxt;
                        break;  
                    }
            break;
                
            case 6: 
                switch (numUserUnitats) {
                    case 0:
                        message = sixtyTxt;
                        break;
                    case 1:
                        message = sixtyTxt + "-" + oneTxt;
                        break;
                    case 2:
                        message = sixtyTxt + "-" + twoTxtTxt;
                        break;
                    case 3:
                        message = sixtyTxt + "-" + threeTxt;
                        break;
                    case 4:
                        message = sixtyTxt + "-" + fourTxt;
                        break;
                    case 5:
                        message = sixtyTxt + "-" + fiveTxtTxt;
                        break;
                    case 6:
                        message = sixtyTxt + "-" + sixTxt;
                        break;
                    case 7:
                        message = sixtyTxt + "-" + sevenTxt;
                        break;
                    case 8:
                        message = sixtyTxt + "-" + eightTxt;
                        break;
                    case 9:
                        message = sixtyTxt + "-" + nineTxt;
                        break;
                    }
            break;
                
            case 7:
                switch (numUserUnitats) {
                    case 0:
                        message = seventyTxt;
                        break;
                    case 1:
                        message = seventyTxt + "-" + oneTxt;
                        break;
                    case 2:
                        message = seventyTxt + "-" + twoTxtTxt;
                        break;
                    case 3:
                        message = seventyTxt + "-" + threeTxt;
                        break;
                    case 4:
                        message = seventyTxt + "-" + fourTxt;
                        break;
                    case 5:
                        message = seventyTxt + "-" + fiveTxtTxt;
                        break;
                    case 6:
                        message = seventyTxt + "-" + sixTxt;
                        break;
                    case 7:
                        message = seventyTxt + "-" + sevenTxt;
                        break;
                    case 8:
                        message = seventyTxt + "-" + eightTxt;
                        break;
                    case 9:
                        message = seventyTxt + "-" + nineTxt;
                        break;  
                    }
            break;

            case 8:
                switch (numUserUnitats) {
                    case 0:
                        message = eightyTxt;
                        break;
                    case 1:
                        message = eightyTxt + "-" + oneTxt;
                        break;
                    case 2:
                        message = eightyTxt + "-" + twoTxtTxt;
                        break;
                    case 3:
                        message = eightyTxt + "-" + threeTxt;
                        break;
                    case 4:
                        message = eightyTxt + "-" + fourTxt;
                        break;
                    case 5:
                        message = eightyTxt + "-" + fiveTxtTxt;
                        break;
                    case 6:
                        message = eightyTxt + "-" + sixTxt;
                        break;
                    case 7:
                        message = eightyTxt + "-" + sevenTxt;
                        break;
                    case 8:
                        message = eightyTxt + "-" + eightTxt;
                        break;
                    case 9:
                        message = eightyTxt + "-" + nineTxt;
                        break;  
                    }
            break;

            case 9:
                switch (numUserUnitats) {
                    case 0:
                        message = ninetyTxt;
                        break;
                    case 1:
                        message = ninetyTxt + "-" + oneTxt;
                        break;
                    case 2:
                        message = ninetyTxt + "-" + twoTxtTxt;
                        break;
                    case 3:
                        message = ninetyTxt + "-" + threeTxt;
                        break;
                    case 4:
                        message = ninetyTxt + "-" + fourTxt;
                        break;
                    case 5:
                        message = ninetyTxt + "-" + fiveTxtTxt;
                        break;
                    case 6:
                        message = ninetyTxt + "-" + sixTxt;
                        break;
                    case 7:
                        message = ninetyTxt + "-" + sevenTxt;
                        break;
                    case 8:
                        message = ninetyTxt + "-" + eightTxt;
                        break;
                    case 9:
                        message = ninetyTxt + "-" + nineTxt;
                        break;  
                    }
            break;
                }

        resultDiv.innerHTML = `El nombre ${numUser} s'escriu ${message}.`
        
        }

    }
