"use strict"

const resultDiv = document.getElementById("result");

function createHospital() {
    const nom = document.getElementById("hospitalName").value;
    const numPlantes = document.getElementById("hospitalFloors").value;
    const superficieM2 = document.getElementById("hospitalSurface").value;
    const numPacients = document.getElementById("numPatients")

    const err = "Has d'introduir un valor vàlid."

    if (!nom || !numPlantes || !superficieM2 || !numPacients ) return resultDiv.innerHTML = err;

    if (findBuilding(nom) !== -1) {
        resultDiv.innerHTML = `Ja existeix un edifici amb aquest nom.`
        return
    }

    const newHospital = new Hospital (nom, numPlantes, superficieM2, numPacients);

    arrBuildings.push(newHospital);

    resultDiv.innerHTML = `Enhorabona! Has afegit un nou edifici: \n <pre>${newHospital.toString()}</pre> `

}