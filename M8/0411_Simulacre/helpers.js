"use strict"

function cleanInputs() { //sempre netegem input al final
    const inputs = document.querySelectorAll("input") //consulta tots els inputs, crea un array d inputs
    
    //loop x limpiar values
    for (let i = 0; i < inputs.length; i++){
        const input = inputs[i];
        input.value = ""
    }

    
}

function indexTaulaClient(dniClient, idTaula) { 
    //busquem id dins de l'array 
    let taulaPosicio = -1 
    let clientPosicio = indexClient(dniClient)
    const client = clients[clientPosicio]

    if (client.taulesLlogades.length < 1) return taulaPosicio

    let i = 0; //compte

    do {
        if(client.taulesLlogades[i].idTaula === idTaula) {
            taulaPosicio = i;
        }
        i++
    } while (i < client.taulesLlogades.length && taulaPosicio == -1)

    return taulaPosicio; //la funció genera un nombre, l'index
}

function indexClient(dniClient) { 
    //busquem id dins de l'array 
    let clientPosicio = -1 
    if (clients.length < 1) return clientPosicio

    let i = 0; //compte

    do {
        if(clients[i].dniClient === dniClient) {
            clientPosicio = i;
        }
        i++
    } while (i < clients.length && clientPosicio == -1)

    return clientPosicio; //la funció genera un nombre, l'index
}

function indexTaulaInventari(idTaula) { 
    //busquem id dins de l'array 
    let taulaPosicio = -1 
    if (taules.length < 1) return taulaPosicio

    let i = 0; //compte

    do {
        if(taules[i].idTaula === idTaula) {
            taulaPosicio = i;
        }
        i++
    } while (i < taules.length && taulaPosicio == -1)

    return taulaPosicio; //la funció genera un nombre, l'index
}
