"use strict"

function validatePhrase (userPhrase) {
    return !isNaN(userPhrase) || (userPhrase.trim() == "") //nose pk no funciona .trim() com amb l'anterior
}

function compareArr(arrPhrase, arrPhraseRev) {
    let arePalindrom;
    for (let i = 0; i <= arrPhrase.length -1; i++) {
            if (arrPhrase[i] == arrPhraseRev[i]) {
            arePalindrom = true;
            } else if (arrPhrase[i] !== arrPhraseRev[i] || arrPhrase.length !== arrPhraseRev.length) {
                arePalindrom = false;
            }
        }
        return arePalindrom;
    }    
    

function isPalindrom() {

    const userPhrase = document.getElementById("userPhrase").value;
    const resultDiv = document.getElementById("result");
    const err = "Has d'introduir una frase o paraula."
    let message = "";

    if (validatePhrase(userPhrase)) {
        resultDiv.innerHTML = err
        return;
    }

    const arrPhrase = userPhrase.split("");
    const arrPhraseRev = arrPhrase.toReversed();

    (compareArr(arrPhrase, arrPhraseRev)) ? message = `La frase ${userPhrase} és un palíndrom.` : message = `La frase ${userPhrase} NO és un palíndrom.`;

    resultDiv.innerHTML = message;
}