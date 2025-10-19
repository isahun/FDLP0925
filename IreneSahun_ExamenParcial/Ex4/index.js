"use strict"

/*
 Estàs desenvolupant un simulador de cursa de cotxes entre dos jugadors. 
 Ambdós cotxes tenen una quantitat de combustible i es mouen una distància aleatòria en cada torn.

Regles de l'Exercici
Tant el cotxe del jugador 1 com el del jugador 2 comencen amb una quantitat de combustible.
Ambdós comencen amb 100 unitats de combustible.
El cotxe del jugador 1 avança una distància aleatòria entre 1 i 10 unitats per torn.
El cotxe del jugador 2 avança una distància aleatòria entre 1 i 10 unitats per torn.
El joc continua fins que un dels dos cotxes es quedi sense combustible (≤ 0).

En cada torn
El programa ha de mostrar l'estat de la cursa en cada torn, incloent:
La distància recorreguda per cada cotxe.
El combustible restant després de cada torn.
El bucle while ha d'acabar quan algun dels dos cotxes tingui 0 o menys unitats de combustible.
Al final, s'ha de mostrar qui ha guanyat la cursa.

Exemple de sortida
Torn 1:
Jugador 1 avança 7 unitats. Combustible restant: 93.
Jugador 2 avança 5 unitats. Combustible restant: 95.

Torn 2:
Jugador 1 avança 3 unitats. Combustible restant: 90.
Jugador 2 avança 8 unitats. Combustible restant: 87.
...

Resultat1: El jugador 1 ha guanyat! o 
Resultat2: El jugador 2 ha guanyat!

*/

function cursaCotxes() {
    let combCar1 = 100;
    let combCar2 = 100;
    let message = "";
    const resultDiv = document.getElementById("result");
    const resultDiv2 = document.getElementById("result2");
    let resultat = "";
    let distCar1 = 0;
    let distCar2 = 0;
    let turnCounter = 0;

    
    while (combCar1 > 0 && combCar2 > 0){

        distCar1 = parseInt(Math.floor(Math.random()*10));
        distCar2 = parseInt(Math.floor(Math.random()*10));

        combCar1 = combCar1 - distCar1;
        combCar2 = combCar2 - distCar2;

        turnCounter ++

        message = `Torn ${turnCounter}: El jugador 1 avança ${distCar1} unitats. Combustible restant: ${combCar1}. <br>
        El jugador 2 avança ${distCar2} unitats. Combustible restant: ${combCar2}. <br>`;

        resultDiv2.innerHTML += message + "<br>";

    }

    if (combCar1 <= 0){
            resultat = "El jugador 1 ha guanyat!";
        } else if (combCar2 <= 0){
            resultat = "El jugador 2 ha guanyat!";
        }

            

    resultDiv.innerHTML = resultat;




    
    
}