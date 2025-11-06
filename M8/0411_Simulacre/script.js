"use strict"

const resultDiv = document.getElementById("result")

//const taulaFlex1 = new TaulaFlexible ("1", 4)
//const taulaRigida1 = new TaulaRigida ("2", 3)
//const taulaStandard1 = new TaulaStandard ("3", 2)

//taules.push(taulaFlex1, taulaRigida1, taulaStandard1)

//const newClient1 = new Client ("Anna", "1234", 2006)
//const newClient2 = new Client ("Marc", "5678", 2014)
//const newClient3 = new Client ("David", "1357", 2020)

//clients.push(newClient1, newClient2, newClient3)

function afegirTaulaFlexibleInventari() {

    const idTaula = parseInt(document.getElementById("idTaula").value)
    const longTaula = parseFloat(document.getElementById("longTaula").value)
    const err = "<small> Introdueix un valor numèric en ID i longitud. </small>"

    if (!idTaula || !longTaula || isNaN(idTaula) || isNaN(longTaula) || longTaula <= 0) return resultDiv.innerHTML = err;

    if (indexTaulaInventari(idTaula) !== -1) {
        resultDiv.innerHTML = `Ja existeix una taula amb aquest identificador.`
        return
    }

    const newFlexBoard = new TaulaFlexible (idTaula, longTaula)
    taules.push(newFlexBoard)

    resultDiv.innerHTML = `Has afegit la taula flexible amb identificador ${idTaula} a l'inventari correctament.`

    cleanInputs()

}

function afegirTaulaRigidaInventari() {

    const idTaula = parseInt(document.getElementById("idTaula").value)
    const longTaula = parseFloat(document.getElementById("longTaula").value)
    const err = "<small> Introdueix un valor numèric en ID i longitud. </small>"

    if (!idTaula || !longTaula || isNaN(idTaula) || isNaN(longTaula) || longTaula <= 0) return resultDiv.innerHTML = err;


    if (indexTaulaInventari(idTaula) !== -1) {
        resultDiv.innerHTML = `Ja existeix una taula amb aquest identificador.`
        return
    }

    const newRigidBoard = new TaulaRigida (idTaula, longTaula)
    taules.push(newRigidBoard)

    resultDiv.innerHTML = `Has afegit la taula rígida amb identificador ${idTaula} a l'inventari correctament.`

    cleanInputs()


}

function afegirTaulaStandardInventari() {

    const idTaula = parseInt(document.getElementById("idTaula").value)
    const longTaula = parseFloat(document.getElementById("longTaula").value)
    const err = "<small> Introdueix un valor numèric en ID i longitud. </small>"

    if (!idTaula || !longTaula || isNaN(idTaula) || isNaN(longTaula) || longTaula <= 0) return resultDiv.innerHTML = err;


    const newStandardBoard = new TaulaStandard(idTaula, longTaula)


    if (indexTaulaInventari(newStandardBoard.idTaula) !== -1) {
        resultDiv.innerHTML = `Ja existeix una taula amb aquest identificador.`
        return
    }

    taules.push(newStandardBoard)

    resultDiv.innerHTML = `Has afegit la taula standard amb identificador ${idTaula} a l'inventari correctament.`

    cleanInputs()


}

function mostraInventari() {
    if (taules.length < 1) return resultDiv.innerHTML = "No hi ha taules guardades."
    resultDiv.innerHTML = `<pre>${taules.toString()}</pre>`

    cleanInputs()
}

function registreClient() {
    const nomClient = document.getElementById("nomClient").value
    const dniClient = document.getElementById("dniClient").value
    const anyAlta = parseInt(document.getElementById("anyAlta").value)
    const err = "<small> Introdueix un valor vàlid o un any superior a 2000. </small>"

    if (!nomClient || !dniClient || !anyAlta || isNaN(anyAlta) || anyAlta < 2000) return resultDiv.innerHTML = err;

    if (indexClient(dniClient) !== -1) {
    resultDiv.innerHTML = `Ja existeix un client amb aquest DNI.`
    return
    }

    const newClient = new Client (nomClient, dniClient, anyAlta)
    clients.push(newClient)
    
    resultDiv.innerHTML = `Has registrat el client correctament!
    <pre> ${newClient.toString()} </pre>`;

    cleanInputs()

}

function llogarTaulaFlexibleClient() {

    if (taules.length === 0) return resultDiv.innerHTML = "No hi ha taules a l'inventari."

    const dniClientLloga = document.getElementById("dniClientLloga").value
    const numHores = parseFloat(document.getElementById("numHores").value)
    const dataReserva = document.getElementById("dataReserva").value
    const err = "<small> Introdueix un valor vàlid o un temps superior a 0.5 hores. </small>"

    if (!dniClientLloga || !numHores || !dataReserva || isNaN(numHores) || numHores < 0.5 ) return resultDiv.innerHTML = err;

    const clientPosicio = indexClient(dniClientLloga)
    
    if (clientPosicio === -1) return resultDiv.innerHTML = "No hi ha cap client amb aquest DNI."
    let i = 0;
    let taulaLlogada = false;
    let taulaTriada; //per guardar la taula q se li assignara al client, q es un objecte dins l'array taules

    do {    //bucle do while per buscar la primera taula a l'array que compleixi les condicions i s'afegeixi a l'array de taules del client

        if (taules[i].tipusTaula === "Flexible" && taules[i].estatTaula === "disponible") {
        //clients[clientPosicio].taulesLlogades.push(taules[i]) //fora pk ja fa push el metode d la classe
        //taules[i].estatTaula = "Llogada"; //a la funcio es canvia el valor
        taulaLlogada = true; //per indicar que ja n'hi ha una afegida i podem sortir d bucle
        taulaTriada = taules[i]
        } else {
        i++
        }
    } while (i < taules.length && taulaLlogada == false) 

    if (taulaLlogada === true) {
        resultDiv.innerHTML = `<pre> Has llogat la taula flexible correctament!
        Data de la reserva: ${dataReserva} 
        Dades de la taula: ${clients[clientPosicio].llogarTaula(taulaTriada, numHores)} </pre>.`
    } else {
        resultDiv.innerHTML = `No hi ha taules flexibles disponibles.`
    }
        cleanInputs()

    
}

function llogarTaulaRigidaClient() {
    
    if (taules.length === 0) return resultDiv.innerHTML = "No hi ha taules a l'inventari."

    const dniClientLloga = document.getElementById("dniClientLloga").value
    const numHores = parseFloat(document.getElementById("numHores").value)
    const dataReserva = document.getElementById("dataReserva").value
    const err = "<small> Introdueix un valor vàlid o un temps superior a 0.5 hores. </small>"

    if (!dniClientLloga || !numHores || !dataReserva || isNaN(numHores) || numHores < 0.5 ) return resultDiv.innerHTML = err;

    const clientPosicio = indexClient(dniClientLloga)
    
    if (clientPosicio === -1) return resultDiv.innerHTML = "No hi ha cap client amb aquest DNI."
    
    let i = 0;
    let taulaLlogada = false;
    let taulaTriada; //per guardar la taula q se li assignara al client, q es un objecte dins l'array taules

    do {    //bucle do while per buscar la primera taula a l'array que compleixi les condicions i s'afegeixi a l'array de taules del client

        if (taules[i].tipusTaula === "Rigida" && taules[i].estatTaula === "disponible") {
        //clients[clientPosicio].taulesLlogades.push(taules[i]) // mirar comment flex
        //taules[i].estatTaula = "Llogada";
        taulaLlogada = true; //per indicar que ja n'hi ha una afegida i podem sortir d bucle
        taulaTriada = taules[i] //aixo hem guardat a la linia 178
        } else {
        i++
        }
    } while (i < taules.length && taulaLlogada == false) 

    if (taulaLlogada === true) {
        clients[clientPosicio].llogarTaula(taulaTriada, numHores)
        resultDiv.innerHTML = `<pre> Has llogat la taula rígida correctament!
        Data de la reserva: ${dataReserva} 
        Dades de la taula: ${clients[clientPosicio].llogarTaula(taulaTriada, numHores)} </pre>.`
    } else {
        resultDiv.innerHTML = `No hi ha taules rígides disponibles.`
    }
        cleanInputs()

}

function llogarTaulaStandardClient() {

    if (taules.length === 0) return resultDiv.innerHTML = "No hi ha taules a l'inventari."

    const dniClientLloga = document.getElementById("dniClientLloga").value
    const numHores = parseFloat(document.getElementById("numHores").value)
    const dataReserva = document.getElementById("dataReserva").value
    const err = "<small> Introdueix un valor vàlid o un temps superior a 0.5 hores. </small>"

    if (!dniClientLloga || !numHores || !dataReserva || isNaN(numHores) || numHores < 0.5 ) return resultDiv.innerHTML = err;

    const clientPosicio = indexClient(dniClientLloga)
    
    if (clientPosicio === -1) return resultDiv.innerHTML = "No hi ha cap client amb aquest DNI."
    
    let i = 0;
    let taulaLlogada = false;
    let taulaTriada; //per guardar la taula q se li assignara al client, q es un objecte dins l'array taules

    do {    //bucle do while per buscar la primera taula a l'array que compleixi les condicions i s'afegeixi a l'array de taules del client

        if (taules[i].tipusTaula === "Standard" && taules[i].estatTaula === "disponible") {
        //clients[clientPosicio].taulesLlogades.push(taules[i])
        //taules[i].estatTaula = "Llogada";
        taulaLlogada = true; //per indicar que ja n'hi ha una afegida i podem sortir d bucle
        taulaTriada = taules[i]
        } else {
        i++
        }
    } while (i < taules.length && taulaLlogada == false) 

    if (taulaLlogada === true) {
        resultDiv.innerHTML = `<pre> Has llogat la taula standard correctament!
        Data de la reserva: ${dataReserva} 
        Dades de la taula: ${clients[clientPosicio].llogarTaula(taulaTriada, numHores)} </pre>.`
    } else {
        resultDiv.innerHTML = `No hi ha taules flexibles disponibles.`
    }
        cleanInputs()

    
}

function tornarTaulaClient() {

    if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    const dniClientRm = document.getElementById("dniClientRm").value
    const idTaulaRm = parseInt(document.getElementById("idTaulaRm").value) //parsejar pk a helper fem comparacio estricta L268
    const clientPosicio = indexClient(dniClientRm)

    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!dniClientRm || !idTaulaRm || isNaN(idTaulaRm)) return resultDiv.innerHTML = err;
    if (clientPosicio === -1) return resultDiv.innerHTML = "Aquest client no es troba a la base de dades."

    const client = clients[clientPosicio]

    let userConfirmation = confirm("Estàs segur que vols tornar la taula?")
    if (userConfirmation !== true) {
        return resultDiv.innerHTML = "No s'ha tornat la taula.";
    }
        cleanInputs()

    let message = client.tornarTaula(dniClientRm, idTaulaRm)

    resultDiv.innerHTML = message;

    cleanInputs()

}

function mostrarClients() {
    if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."
    resultDiv.innerHTML = `<pre>${clients.toString()}</pre>`

    cleanInputs()
}

function mostrarTaulesClient() {

    if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    const dniClientShow = document.getElementById("dniClientShow").value
    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!dniClientShow) return resultDiv.innerHTML = err;
    
    const clientPosicio = indexClient(dniClientShow)
    const client = clients[clientPosicio]

    if (clients[clientPosicio].taulesLlogades.length == 0) return resultDiv.innerHTML = "Aquest client no té taules guardades." 

    resultDiv.innerHTML = `<pre>${client.mostrarTaulesLlogades()}</pre>`

    cleanInputs()
}

function clientMesLloguers() { //busquem el valor (length) mes gran de l'array de cada client dins l'array d clients
    if (clients.length === 0) return resultDiv.innerHTML = "No hi ha clients registrats.";

    let maximLloguers = 0; //la info q necessitem extreure del bucle, q se sobreescriurà amb cada iteració
    let nomClient = "" //same here

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].taulesLlogades.length > maximLloguers) {
            maximLloguers = clients[i].taulesLlogades.length; //se sobreescriu de manera q si es troba un length superior a maximLloguers, se substitueix x aquet
            nomClient = clients[i].nomClient //pk dni es privat
        }
    }

    resultDiv.innerHTML = `El client amb més lloguers és ${nomClient}.`

    cleanInputs()
}

function clientMesAntic() { 

    let nomClient = ""
    let anyAlta = 3000; //busquem la propietat (anyAlta) amb valor mes PETIT, per aixo la comparacio ha de començar en num gran

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].anyAlta < anyAlta) { //mentre l'any nou sigui més petit que anyAlta (iniciat a 3000), substituirà el valor actual, aixi ens quedem am el mes petit
            anyAlta = clients[i].anyAlta    //substituim el valor a cada volta x comparar entre ells
            nomClient = clients[i].nomClient
    }
}
    resultDiv.innerHTML = `El client més antic és ${nomClient}, soci des de l'any ${anyAlta}.`

    cleanInputs()
}