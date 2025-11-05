"use strict"

const resultDiv = document.getElementById("result");

function createHospital() {
    const nom = document.getElementById("hospitalName").value;
    const numPlantes = document.getElementById("hospitalFloors").value;
    const superficieM2 = document.getElementById("hospitalSurface").value;
    const numPacients = document.getElementById("numPatients").value;
    const err = "Has d'introduir un valor vàlid."

    if (!nom || !numPlantes || !superficieM2 || !numPacients ) return resultDiv.innerHTML = err;
    if (findBuilding(nom) !== -1) {
        resultDiv.innerHTML = `Ja existeix un edifici amb aquest nom.`
        return
    }

    const newHospital = new Hospital (nom, numPlantes, superficieM2, numPacients);
    arrBuildings.push(newHospital);

    resultDiv.innerHTML = `Enhorabona! Has afegit un nou edifici: \n <pre>${newHospital.toString()}</pre> `

    cleanInputs()
}

function createCinema() {
    const nom = document.getElementById("cinemaName").value;
    const numPlantes = document.getElementById("cinemaFloors").value;
    const superficieM2 = document.getElementById("cinemaSurface").value;
    const numAssistents = document.getElementById("cinemaClients").value;
    const capacitatMax = document.getElementById("maxCapacity").value;
    const preuEntrada = document.getElementById("ticketPrice").value;
    const err = "Has d'introduir un valor vàlid."

    if (!nom || !numPlantes || !superficieM2 || !numAssistents || !capacitatMax || !preuEntrada ) return resultDiv.innerHTML = err;
    if (findBuilding(nom) !== -1) {
        resultDiv.innerHTML = `Ja existeix un edifici amb aquest nom.`
        return
    }

    const newCinema = new Cinema (nom, numPlantes, superficieM2, numAssistents, capacitatMax, preuEntrada);
    arrBuildings.push(newCinema);

    if (newCinema.checkCapacity() === true) {
    resultDiv.innerHTML = `Enhorabona! Has afegit un nou edifici: \n <pre>${newCinema.toString()}</pre> `
    cleanInputs()
    
    } else {
        resultDiv.innerHTML = `Aforament superat, no hi pot haver més de ${capacitatMax} espectadors.`
    }

}

function createHotel() {
    const nom = document.getElementById("hotelName").value;
    const numPlantes = document.getElementById("hotelFloors").value;
    const superficieM2 = document.getElementById("hotelSurface").value;
    const numHab = document.getElementById("roomNumber").value;

    const err = "Has d'introduir un valor vàlid."

    if (!nom || !numPlantes || !superficieM2 || !numHab) return resultDiv.innerHTML = err;

    if (findBuilding(nom) !== -1) {
        resultDiv.innerHTML = `Ja existeix un edifici amb aquest nom.`
        return
    }

    const newHotel = new Hotel (nom, numPlantes, superficieM2, numHab);

    arrBuildings.push(newHotel);

    resultDiv.innerHTML = `Enhorabona! Has afegit un nou edifici: \n <pre>${newHotel.toString()}</pre> `
    
    cleanInputs()
}

function showBuildings() {
    if (arrBuildings.length < 1) return resultDiv.innerHTML = "No hi ha edificis guardats."
    
    resultDiv.innerHTML = `<pre>${arrBuildings.toString()}</pre>`

    cleanInputs()
}

function removeBuilding () {
    if (arrBuildings.length < 1) return resultDiv.innerHTML = "No hi ha edificis guardats."

    const rmBuilding = document.getElementById("rmBuildingName").value
    if (!rmBuilding ) return resultDiv.innerHTML = "Has d'introduir un nom vàlid."

    const buildingPosition = findBuilding(rmBuilding);
    if (buildingPosition == -1) return resultDiv.innerHTML = "Aquest edifici no existeix."

    let userConfirmation = confirm("Estàs segur que vols eliminar l'edifici?")
    if (userConfirmation === true) {
        arrBuildings.splice(buildingPosition, 1);
        resultDiv.innerHTML = "S'ha eliminat l'edifici correctament.";
    } else {
        return null;
    }
    cleanInputs()
}