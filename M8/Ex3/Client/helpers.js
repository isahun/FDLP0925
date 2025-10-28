"use strict"
//posem les validacions separades, x si cal fer modificacions son molt mes locals

function validateNumber(num) {
    return !num
}//funció pura, només comprova si existeix el valor de la variable num, retorna booleà
//no necessitem particularment funcions q tornin booleans, el q necessitem a cada escenari

function checkDni (dni) {
    return dni.length == 9 // booleà, una altra validació separada x aplicar a main(index)
}//recomanat fer validació d DNI x separat pk es un valor molt sensible

function findClient(clientPosition, clients, rmUserDNI) { //Ens tornarà una posició, un NUMERO. Entrelazado cuantico amb el num d vol q introduirà l'usuari

    //busquem DNI, dins de l'array clients
    let clientPosition = -1 //partim de que no ho troba, i com q es do while executara el codi i x tant augmentara abans de trencar bucle
    if (clients.length < 1) return clientPosition

    let i = 0; //compte

    do {
        if(clients[i].userDNI === rmUserDNI) {
            clientPosition = i;
        }
        i++
    } while (i < clients.length && clientPosition == -1)

    return clientPosition; //la funció genera un nombre, l'index
}

function cleanInputs() { //sempre netegem input al final
    const inputs = document.querySelectorAll("input") //consulta tots els inputs, crea un array d inputs
    
    //loop x limpiar values
    for (let i = 0; i < inputs.length; i++){
        const input = inputs[i];
        input.value = ""
    }
}