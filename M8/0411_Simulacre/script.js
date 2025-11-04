"use strict"

const resultDiv = document.getElementById("result")

const taulaFlex1 = new TaulaFlexible ("1", 4)
const taulaRigida1 = new TaulaRigida ("2", 3)
const taulaStandard1 = new TaulaStandard ("3", 2)

taules.push(taulaFlex1, taulaRigida1, taulaStandard1)

const newClient1 = new Client ("Anna", "1234", 2006)
const newClient2 = new Client ("Marc", "5678", 2014)
const newClient3 = new Client ("David", "1357", 2020)

clients.push(newClient1, newClient2, newClient3)

function llogarTaulaClient() {
    const numHores = 3;
    let taula = taulaFlex1;

    return resultDiv.innerHTML = newClient1.llogarTaula(taula, numHores)
}

function tornarTaulaClient() {
    let taula = taulaFlex1;

    let tornarTaula = newClient1.tornarTaula(taula.idTaula)

    return resultDiv.innerHTML = tornarTaula

}

function mostrarTaulesClient() {

    if (newClient1.taulesLlogades.length == 0) return resultDiv.innerHTML = "Aquest client no té taules guardades." 

    return resultDiv.innerHTML = `<pre>${newClient1.mostrarTaulesLlogades()}</pre>`

}

function clientMesLloguers() {
    if (clients.length === 0) return resultDiv.innerHTML = "No hi ha clients registrats.";

    const maximLloguers = 0;
    let message = ""

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].taulesLlogades.length > maximLloguers) {
            maximLloguers = clients[i].taulesLlogades.length;
            message = clients[i].nomClient //pk dni es privat
        }
    }

    resultDiv.innerHTML = `El client amb més lloguers és ${message}.`
}

function clientMesAntic() {

    let message = ""
    let anyAlta = 0;

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].anyAlta > anyAlta) {
            anyAlta = clients[i].anyAlta
            message = clients[i].nomClient
    }
}
    resultDiv.innerHTML = `El client més antic és ${message}, soci des de ${anyAlta}`

}