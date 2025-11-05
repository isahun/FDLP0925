"use strict"


function isPrime() {        
    let isPrimeNum = false;      
    const numUser = prompt("Introdueix un número:");   
    if (numUser > 1) {        
        isPrimeNum = primeCalc(numUser);     
    }

    if (isPrimeNum) {
        alert(`Exacte! El número ${numUser} és primer!`);
            } else {
                    alert(`Ooh! El número ${numUser} NO és primer!`);
                }  
            }

function primeCalc(numUser) {        
    let isPrimeNum = true;       
    let i = 2;          

    while (isPrimeNum && i < numUser) {    
        if (numUser % i == 0) {
            isPrimeNum = false;     
        }                   
        i++;                
    }
    return isPrimeNum;               
}
