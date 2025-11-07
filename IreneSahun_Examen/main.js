"use strict"

const resultDiv = document.getElementById("result")
const sistemaLloguer = new SistemaLloguer

function registrarVehicle() {

    const autonomiaVehicleKm = parseInt(document.getElementById("autonomiaVehicle").value)
    const tipusVehicle = parseInt(document.getElementById("tipusVehicle"))
    let vehicleRegistrat;

    const err = "<small> Introdueix un valor numèric superior a 0. </small>"

    if (!autonomiaVehicleKm || autonomiaVehicleKm <= 0) return resultDiv.innerHTML = err;

    switch(tipusVehicle) {
        case 0: 
            vehicleRegistrat = new BicicletaCiutat (autonomiaVehicleKm)
            sistemaLloguer.afegirVehicle(vehicleRegistrat)
            break;
        case 1: 
            vehicleRegistrat = new BicicletaInfantil (autonomiaVehicleKm)
            sistemaLloguer.afegirVehicle(vehicleRegistrat)
            break;
        case 2:
            vehicleRegistrat = new PatinetLleuger (autonomiaVehicleKm)
            sistemaLloguer.afegirVehicle(vehicleRegistrat)
            break;
        case 3: 
            vehicleRegistrat = new PatinetPotent (autonomiaVehicleKm)
            sistemaLloguer.afegirVehicle(vehicleRegistrat)
            break;
    }

    
    resultDiv.innerHTML = `Has afegit correctament el vehicle a l'inventari.`

    cleanInputs()

}

function registrarClient() {
    const nomClient = document.getElementById("nomClient").value
    const dniClient = document.getElementById("dniClient").value
    const anyAlta = parseInt(document.getElementById("anyAlta").value)
    const err = "<small> Introdueix un valor vàlid o un any superior a 2000. </small>"

    if (!nomClient || !dniClient || !anyAlta || isNaN(anyAlta) || anyAlta < 2000) return resultDiv.innerHTML = err;

    if (sistemaLloguer.indexClient(dniClient) !== -1) {
    resultDiv.innerHTML = `Ja existeix un client amb aquest DNI.`
    return
    }

    const newClient = new Client (nomClient, dniClient, anyAlta)
    sistemaLloguer.afegirClient(newClient)
    
    resultDiv.innerHTML = `Has registrat el client correctament!
    <pre> ${newClient.toString()} </pre>`;

    cleanInputs()
}

function llogarVehicle() {

    if (sistemaLloguer.vehicles.length === 0) return resultDiv.innerHTML = "No hi ha vehicles a l'inventari."

    const dniClientLloga = document.getElementById("dniClientLloga").value
    const numHores = parseFloat(document.getElementById("numHores").value)
    const tipusVehicleLloga = document.getElementById("tipusVehicleLloga").value
    const err = "<small> Introdueix un valor vàlid o un temps superior a 0.5 hores. </small>"

    
    if (!dniClientLloga || !numHores || !tipusVehicleLloga || isNaN(numHores) || numHores < 0.5 ) return resultDiv.innerHTML = err;

    const clientPosicio = sistemaLloguer.indexClient(dniClientLloga)
    
    if (clientPosicio === -1) return resultDiv.innerHTML = "No hi ha cap client amb aquest DNI."

    let i = 0;
    let message = 0;
    let vehicleLlogat = false;
    let vehicleTriat;

    do {    
        if (sistemaLloguer.vehicles[i].tipusVehicle === tipusVehicleLloga && sistemaLloguer.vehicles[i].estatVehicle === "disponible") {
        vehicleLlogat = true; 
        vehicleTriat = sistemaLloguer.vehicles[i]
        } else {
        i++
        }
    } while (i < sistemaLloguer.vehicles.length && vehicleLlogat == false) 


    if (vehicleLlogat === true) {
        message = `<pre> ${sistemaLloguer.clients[clientPosicio].llogarVehicle(vehicleTriat, numHores)} </pre>.`
    } else {
        message = `No hi ha vehicles disponibles.`
    }

    resultDiv.innerHTML = message;

        cleanInputs()

}

function tornarVehicle() {

    if (sistemaLloguer.clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    const dniClientRm = document.getElementById("dniClientRm").value
    const idVehicleRm = parseInt(document.getElementById("idVehicleRm").value) 
    const clientPosicio = sistemaLloguer.indexClient(dniClientRm)

    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!dniClientRm || !idVehicleRm || isNaN(idVehicleRm)) return resultDiv.innerHTML = err;
    if (clientPosicio === -1) return resultDiv.innerHTML = "Aquest client no es troba a la base de dades."

    const client = sistemaLloguer.clients[clientPosicio];

    let userConfirmation = confirm("Estàs segur que vols tornar el vehicle?")
    if (userConfirmation !== true) {
        return resultDiv.innerHTML = "No s'ha tornat el vehicle.";
    }
        cleanInputs()

    let message = client.tornarVehicle(dniClientRm, idVehicleRm)

    resultDiv.innerHTML = message;

    cleanInputs()
}

function veureVehiclesLlogatsClient() {

     if (sistemaLloguer.clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    const dniClientShow = document.getElementById("dniClientShow").value
    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!dniClientShow) return resultDiv.innerHTML = err;
    
    const clientPosicio = sistemaLloguer.indexClient(dniClientShow)
    const client = sistemaLloguer.clients[clientPosicio]

    if (sistemaLloguer.clients[clientPosicio].lloguersClient.length == 0) return resultDiv.innerHTML = "Aquest client no té vehicles guardats." 

    let message = `<pre>${client.mostrarLloguersActius()}</pre>`

    resultDiv.innerHTML = message;

    cleanInputs()
}

function veureVehiclesLlogatsHistoric() {

     if (sistemaLloguer.clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    const dniClientShow = document.getElementById("dniClientShowH").value
    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!dniClientShow) return resultDiv.innerHTML = err;
    
    const clientPosicio = sistemaLloguer.indexClient(dniClientShow)
    const client = sistemaLloguer.clients[clientPosicio]

    if (sistemaLloguer.clients[clientPosicio].lloguersClient.length == 0) return resultDiv.innerHTML = "Aquest client no té vehicles guardats." 

    let message = `<pre>${client.mostrarLloguersHistoric()}</pre>`

    resultDiv.innerHTML = message;

    cleanInputs()
}

function clientMesAntic() {
    let message = sistemaLloguer.clientMesAntic()
    resultDiv.innerHTML = message;
}

function clientMesLloguers() {
    let message = sistemaLloguer.clientMesLloguers()
    resultDiv.innerHTML = message;
}

function veureVehiclesDispo() {

    let message = sistemaLloguer.vehiclesDisponibles()
    resultDiv.innerHTML = `<pre> ${message} </pre>`
}

function veureVehiclesLlogats() {

    let message = sistemaLloguer.vehiclesLlogats()
    resultDiv.innerHTML = `<pre> ${message} </pre>`
}

function buscaClient() {
    
}