"use strict"

function trobarTaula(taulesLlogades, idTaula) { 
    //busquem id dins de l'array 
    let taulaPosicio = -1 
    if (taulesLlogades.length < 1) return taulaPosicio

    let i = 0; //compte

    do {
        if(taulesLlogades[i].idTaula === idTaula) {
            taulaPosicio = i;
        }
        i++
    } while (i < taulesLlogades.length && taulaPosicio == -1)

    return taulaPosicio; //la funció genera un nombre, l'index
}
