"use strict"

const botiga = new Botiga;

const resultDiv = document.getElementById("result")

function crearClient() {
    const nomClient = document.getElementById("nomClient").value;
    const dniClient = document.getElementById("dniClient").value;

    if (!nomClient || !dniClient || dniClient.length !== 9) return resultDiv.innerHTML = "Has d'introduir un nom i un DNI vàlid.";

    if (botiga.indexClient(dniClient) !== -1) return resultDiv.innerHTML = "Aquest client ja existeix.";

    const client = new Client(nomClient, dniClient);
    botiga.clients.push(client);
    resultDiv.innerHTML = "Client afegit correctament.";
    cleanInputs();
}

function afegirProducte() {
    const idProducte = document.getElementById("idProducte").value;
    const nomProducte = document.getElementById("nomProducte").value;
    const preuProducte = parseFloat(document.getElementById("preuProducte").value)
    const stockProducte = parseInt(document.getElementById("stockProducte").value)
    const anysGarantia = parseInt(document.getElementById("anysGarantia").value)
    const tallaRoba = document.getElementById("tallaRoba").value
    const mesosConserva = parseInt(document.getElementById("mesosConserva").value)
    const tipusProducte = parseInt(document.getElementById("tipusProducte").value)

    if (!idProducte || !nomProducte || !preuProducte || !stockProducte) return resultDiv.innerHTML = "Has d'introduir un nom i un DNI vàlid.";
    if (isNaN(preuProducte) || isNaN(stockProducte)) return resultDiv.innerHTML = "Has d'introduir valor numèrics."
    
    if (botiga.indexProducte(idProducte) !== -1) return resultDiv.innerHTML = "Aquest producte ja existeix.";
    let producte;

    switch (tipusProducte) {
        case 1: 
            producte = new ProducteElectronic(idProducte, nomProducte, preuProducte, stockProducte, anysGarantia)
            break;
        case 2:
            producte = new ProducteRoba(idProducte, nomProducte, preuProducte, stockProducte, tallaRoba)
            break;
        case 3: 
            producte = new ProducteAliment(idProducte, nomProducte, preuProducte, stockProducte, mesosConserva)
            break;
        case 0:
            resultDiv.innerHTML = "Has de triar una opció."
            break;
    }
    
    botiga.productes.push(producte)

    resultDiv.innerHTML = `Producte de tipus ${producte.tipusProducte} afegit amb èxit a l'inventari.`
    cleanInputs()
}

function treureProducteInventari() {
    const idProducte = parseInt(document.getElementById("idProducteRm").value);
    const err = "Has d'introduir un valor vàlid a tots els camps."

    if (!idProducte || isNaN(idProducte)) return err
    if (botiga.productes.length < 1) return resultDiv.innerHTML = "No hi ha productes guardats."

    let userConfirmation = confirm("Estàs segur que vols treure el producte de l'inventari?")
    if (userConfirmation !== true) {
        return resultDiv.innerHTML = "No s'ha tret el producte.";
    }
        cleanInputs()

    let message = botiga.esborrarProducteInventari(idProducte)

    resultDiv.innerHTML = message;

    cleanInputs()

}

function baixaClient() {
    const dniClient = parseInt(document.getElementById("dniClientRm").value);
    const err = "Has d'introduir un valor vàlid a tots els camps."

    if (!dniClient) return err
    if (botiga.clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    let clientPosicio = botiga.indexClient(dniClient);

    let userConfirmation = confirm("Estàs segur que vols donar de baixa el client?")
    if (userConfirmation !== true) {
        return resultDiv.innerHTML = "No s'ha completat la baixa.";
    }
        cleanInputs()

    let message = botiga.esborrarClientInventari(dniClient)

    resultDiv.innerHTML = message;

    cleanInputs()

}

function veureInventari() {
    if (botiga.productes.length < 1) return resultDiv.innerHTML = "No hi ha productes guardats."
    let message = ""

    for (let i = 0; i < botiga.productes.length; i++) {
        message += `<pre>${botiga.productes[i].toString()}</pre> \n`
    }

    resultDiv.innerHTML = message

    cleanInputs()
}

function veureClients() {
    if (botiga.clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."
    let message = ""

    for (let i = 0; i < botiga.clients.length; i++) {
        message += `<pre>${botiga.clients[i].toString()}</pre> \n`
    }

    resultDiv.innerHTML = message

    cleanInputs()
}

function comprarProducte() {

    const dniClientCompra = document.getElementById("dniClientCompra").value

    const tipusProducte = parseInt(document.getElementById("tipusProducteCompra").value)
    const unitatsProducte = parseInt(document.getElementById("unitatsProducte").value)

    const clientPosicio = botiga.indexClient(dniClientCompra)
    
    if (clientPosicio === -1) return resultDiv.innerHTML = "No hi ha cap client amb aquest DNI."
    
    const client = botiga.clients[clientPosicio]

    let i = 0;
    let producteTriat; //per guardar el prod q se li assignara al client, q es un objecte dins l'array taules
    let producteComprat = false;

    do {    //bucle do while per buscar la primera taula a l'array que compleixi les condicions i s'afegeixi a l'array de taules del client

        if (botiga.productes[i].tipusProducte === tipusProducte && botiga.productes[i].stockProducte !== 0) {
        producteComprat = true; //per indicar que ja n'hi ha una afegida i podem sortir d bucle
        producteTriat = botiga.productes[i]
        } else {
        i++
        }
    } while (i < botiga.productes.length && producteComprat == false) 

    let message = client.afegirProducteClient(producteTriat, unitatsProducte)

    resultDiv.innerHTML = message;

        cleanInputs()
}

function tornarProducteClient() {


    const dniClientRmProd = document.getElementById("dniClientRmProd").value
    const idProducteRmProd = parseInt(document.getElementById("idProducteRmProd").value) //parsejar pk a helper fem comparacio estricta L268
    const clientPosicio = botiga.indexClient(dniClientRmProd)
    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!dniClientRmProd || !idProducteRmProd || isNaN(idProducteRmProd)) return resultDiv.innerHTML = err;
    if (clientPosicio === -1) return resultDiv.innerHTML = "Aquest client no es troba a la base de dades."
    
    const client = botiga.clients[clientPosicio]

    if (client.productesClient.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    let userConfirmation = confirm("Estàs segur que vols tornar el producte?")
    if (userConfirmation !== true) {
        return resultDiv.innerHTML = "No s'ha tornat el producte.";
    }
        cleanInputs()

    let message = client.tornarProducteClient(idProducteRmProd)

    resultDiv.innerHTML = message;

    cleanInputs()
}

function veureProductesUnClient() {
    if (botiga.clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    const dniClientShow = document.getElementById("dniClientShow").value
    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!dniClientShow) return resultDiv.innerHTML = err;
    
    const clientPosicio = botiga.indexClient(dniClientShow)
    const client = botiga.clients[clientPosicio]

    if (botiga.clients[clientPosicio].productesClient.length == 0) return resultDiv.innerHTML = "Aquest client no té productes guardats." 

    resultDiv.innerHTML = `<pre>${client.toString()}</pre>`

    cleanInputs()
}

function veureProductesTotsClients() {
    if (botiga.clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    resultDiv.innerHTML = `<pre>${botiga.clients.toString()}</pre>`

}

function veureBotiga() {

    resultDiv.innerHTML = `<pre>${botiga.toString()}</pre>`

}