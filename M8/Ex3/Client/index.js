"use strict"

const resultDiv = document.getElementById("result");


function createClient() {
//CREAR VALIDACIO X SI INTENEM INTRODUIR DOS USERS AMB EL MATEIX DNI

    const userDNI = document.getElementById("userDNI").value;
    const userAge = parseInt(document.getElementById("userAge").value);
    const userNationality = document.getElementById("userNationality").value;
    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!userDNI || userDNI.length !== 9|| !userNationality || !userAge ) return resultDiv.innerHTML = err;
    //podem fer !variable x les numeriques tambe
    if (findClient(userDNI) !== -1) return `Ja existeix un client amb aquest DNI.`

    const newClient = new Client (userDNI, userAge, userNationality); //instanciem la classe client
    clients.push(newClient) //i guardem a l'array el nou objecte client

    resultDiv.innerHTML = `<pre> ${newClient.toString()} </pre>`;

}

function showClients() {
    if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."
    resultDiv.innerHTML = `<pre>${clients.toString()}</pre>`
}

function removeClient () {

//comprovem si l'array clients és buit
    if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    const rmUserDNI = document.getElementById("rmUserDNI").value
    if (!rmUserDNI || rmUserDNI.length !== 9) return resultDiv.innerHTML = "Has d'introduir un DNI vàlid."

    const clientPosition = findClient(rmUserDNI);
    if (clientPosition == -1) return resultDiv.innerHTML = "Aquest client no existeix."

    let userConfirmation = confirm("Estàs segur que vols eliminar el client?")
    if (userConfirmation === true) {
        clients.splice(clientPosition, 1);
        resultDiv.innerHTML = "S'ha eliminat el client correctament.";
    } else {
        return null;
    }

}

function createFlight() {
    const userFlightDNI = document.getElementById("userFlightDNI").value;
    const flightNum = document.getElementById("flightNum").value;
    const distanceKm = parseInt(document.getElementById("distanceKm").value);
    const flightCompany = document.getElementById("company").value;

    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!userFlightDNI || !flightNum || !distanceKm || !flightCompany ) return resultDiv.innerHTML = err;

    let clientFlightPosition = findClient(userFlightDNI);

    if (clientFlightPosition === -1) {
        return `Aquest DNI no es troba a la llista.`
    }

    const newFlight = new Vol (flightNum, flightCompany, distanceKm);
    
    clients[clientFlightPosition].addClientFlight(newFlight);

    return `Vol assignat amb èxit al client amb DNI ${userFlightDNI}.`
}

function calcUserAvAge() { 
    let ageAverage = null;
    let sum = null;
    let adultArr = [];

    for (let i = 0; i < clients.length ; i++) {
        if (clients[i].userAge > 18) {
            adultArr.push(clients[i]);
        }
    }

        for (let i = 0; i < adultArr.length; i++){
            sum += adultArr[i].userAge;
        }
    ageAverage = sum / (adultArr.length -1);

    resultDiv.innerHTML = `La mitjana d'edat dels clients majors d'edat és ${ageAverage}.`
}

function calcClientFootprint() {
    const userCarbonDNI = document.getElementById("userFlightDNI").value;
    if (clients.length < 1) return document.getElementById("result").innerHTML = "No hi ha clients guardats."
    
    if (!userCarbonDNI || userCarbonDNI.length !== 9) return resultDiv.innerHTML = "Has d'introduir un DNI vàlid."
    
    const clientPosition = findClient(userCarbonDNI);
    const clientFootprint = clients[clientPosition].calcPetjadaClient()

    document.getElementById("result").innerHTML = `L'emprempta de carboni d'aquest client és ${clientFootprint}`
}

function calcAvFootprint() {

    let footprintAv = null;
    let sum = null;

    for (let i = 0; i < clients.length ; i++) {

        let clientFootprint = clients[i].calcCarbonFootprint();
        sum += clientFootprint
        
    }
    footprintAv = sum / (clients.length -1);

    resultDiv.innerHTML = `La mitjana de la petjada de carboni de tots els clients és ${footprintAv.toFixed(2)}`
}
