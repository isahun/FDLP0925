"use strict"


function trobaClient(dniClient) {
    for (let i = 0; i < botiga.clients.length; i++) {
        if (botiga.clients[i].dni === dniClient) return i;
    }
    return -1;
}

function trobaProducte(idProducte) {
    for (let i = 0; i < botiga.productes.length; i++) {
        if (botiga.productes[i].idProducte === idProducte) return i;
    }
    return -1;
}

function cleanInputs() {
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}