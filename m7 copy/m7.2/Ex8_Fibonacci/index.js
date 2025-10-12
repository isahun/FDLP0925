"use strict"

/* Cada número se calcula sumando los dos anteriores a él.
Si l’usuari/ària introdueix el 10, el resultat ha de ser:
0,1,1,2,3,5,8,13,21,34

Fibo:  Fn = Fn-1 + Fn-2
*/

function calcFibo() {
    const numUser = parseInt(document.getElementById("num").value)
    const resultDiv = document.getElementById("result")
    const err = "Introdueix un nombre"

    let preVal1 = 1; //valor prefixat de la posició 1 en començar successio (n-1)
    let preVal2 = 0; //valor prefixat de la posició 0 en començar successió (n-2)
    let newNum = 0; //el nou valor a cada iteració, és a dir la suma del seu n-1 + n-2
    let message = `${preVal2}, ${preVal1}, `; //x mantenir el 0 i l'1 a la llista tot i q no surtin del bucle

//VALIDACIONS
    if (isNaN(numUser)|| numUser <= 3) {
    resultDiv.innerHTML = err;
    return;
    }

//comencem el bucle en i=2, calcularà el num en posició 3 a partir del q tenim a les posicions 1 i 2 prefixades i q no podem obtenir dins del bucle (0,1)

    for (let i = 2; i < numUser; i ++){
        newNum = preVal1 + preVal2; //suma dels dos valors anteriors per obtenir el següent número de la sèrie
        preVal2 = preVal1; //desplacem el valor (n-1) per convertir-lo en el nou (n-2)
        preVal1 = newNum; //actualitzem preVal1 (n-1) amb el nou valor calculat, quan sumPre torni a entrar al bucle ho farà com a n-1
        
        if (i !== numUser-1) { //per evitar q surti una coma després de l'últim num
            message += newNum + ", "; 
                } else {
            message += newNum
        }
        
    }

    resultDiv.innerHTML = message;

}
