"use strict"

const resultDiv = document.getElementById("result");

function createClient() {
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
    cleanInputs()
}

function showClients() {
    if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."
    resultDiv.innerHTML = `<pre>${clients.toString()}</pre>`
    cleanInputs()
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
    cleanInputs()

}

function createFlight() {
    const userFlightDNI = document.getElementById("userFlightDNI").value;
    const flightNum = document.getElementById("flightNum").value;
    const distanceKm = parseInt(document.getElementById("distanceKm").value);
    const flightCompany = document.getElementById("company").value;

    const err = "<small> Introdueix un valor vàlid. </small>"

    if (!userFlightDNI || !flightNum || !distanceKm || !flightCompany ) return resultDiv.innerHTML = err;

    let clientFlightPosition = null;

    if (checkDni(userFlightDNI)) {
    clientFlightPosition = findClient(userFlightDNI);
    } else {
        return `Introdueix un DNI vàlid.`
    }

    if (clientFlightPosition === -1) {
        return `Aquest DNI no es troba a la llista.`
    }

    const newFlight = new Vol (flightNum, flightCompany, distanceKm);
    
    clients[clientFlightPosition].addClientFlight(newFlight);

    resultDiv.innerHTML = `Vol assignat amb èxit al client amb DNI ${userFlightDNI}.`
    cleanInputs()
}

function calcAvAge() {
    //comprovem si l'array clients és buit
    if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."
    
    let ageAverage = null;
    let sum = null;
    let adultArr = [];

    for (let i = 0; i < clients.length ; i++) {
        if (clients[i].userAge > 18) {
            adultArr.push(clients[i]);
        }
    }
        for (let i = 0; i < adultArr.length; i++){
            sum += parseInt(adultArr[i].userAge);
        }

    ageAverage = sum / (adultArr.length);

    resultDiv.innerHTML = `La mitjana d'edat dels clients majors d'edat és ${ageAverage}.`
    cleanInputs()
}

function calcClientFootprint() {
    const userCarbonDNI = document.getElementById("userFlightDNI").value;
    //validem si array està buit o si l'input i el format del dni és vàlid
    if (clients.length < 1) {
        resultDiv.innerHTML = "No hi ha clients guardats.";
        return
    }
    
    if (!userCarbonDNI || !checkDni(userCarbonDNI)) {
        resultDiv.innerHTML = "Has d'introduir un DNI vàlid.";
        return
    }
    
    let clientFootprint = null;
    const clientPosition = findClient(clientPosition, clients, userCarbonDNI);
    //validem dni not matching
    if (clientPosition === -1) {
        resultDiv.innerHTML = "No hi ha cap usuari amb aquest DNI.";
        return 
    }

    const clientToCheck = clients[clientPosition];
    let sum = null;

    //missatge si el client no té vols guardats
    if (clientToCheck.userFlights.length == 0) {
        resultDiv.innerHTML = "Aquest client no té vols associats."
        return;
    }

    //recorrem array de vols
    for (let i = 0; i < clientToCheck.userFlights.length; i++){
        const clientFlight = clientToCheck.userFlights[i];
        sum += clientFlight.calcCarbonFootprint();
    }

    clientFootprint = sum / (clientToCheck.userFlights.length)

    resultDiv.innerHTML = `La petjada de carboni d'aquest client és ${clientFootprint.toFixed(2)}.`
    cleanInputs()
}

function calcAvFootprint() {
    if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    let footprintAv = null;
    let sum = null;
    const usersWithFlights = [];

    for (let i = 0; i < clients.length ; i++) {
        const clientToCheck = clients[i];

        for (let j = 0; j < clientToCheck.userFlights.length; j++) {
            const clientFlight = clientToCheck.userFlights[j]
        
            if (clientToCheck.userFlights.length !== 0) {
            sum += clientFlight.calcCarbonFootprint();
            usersWithFlights.push(clientToCheck)

            }
        }
    }

    footprintAv = sum / (usersWithFlights.length);

    resultDiv.innerHTML = `La mitjana de la petjada de carboni de tots els clients és ${footprintAv.toFixed(2)}.`
    cleanInputs()
}
