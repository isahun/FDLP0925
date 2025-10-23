"use strict"

//Declarem resultDiv com a funció global per poder sobreescriure el resultat amb cada funció
const resultDiv = document.getElementById("result");

function findFlight(nVol) { //Ens tornarà una posició, un NUMERO. Entrelazado cuantico amb el num d vol q introduirà l'usuari

    //flightNum q busquem, dins flightsArr
    let flightPosition = -1 //partim de que no ho troba
    if (flightsArr.length < 1) return flightPosition

    let i = 0; //compte

    do {
        if(flightsArr[i].flightNum === nVol) {
            flightPosition = i;
        }
        i++
    } while (i < flightsArr.length && flightPosition == -1)

    return flightPosition; //la funció genera un nombre, l'index
}

function createFlight() {

//const client1 = new Client ("26374857J", "40", "Sueca", 6);
//const client2 = new Client ("84635243U", "32", "Irlandesa", 5);

const flightNum = document.getElementById("flightNum").value;
const distanceKm = parseInt(document.getElementById("distanceKm").value);
const flightCompany = document.getElementById("company").value;
const numPassengers = document.getElementById("numPassengers").value;
const numMotors = parseInt(document.getElementById("numMotors").value);

const err = '<small style="color:RedEyeReduction;"> Invalid values </small>';
const err2 = '<small style="color:RedEyeReduction;"> El vol ja existeix </small>';


if (!flightNum || !distanceKm || !flightCompany || !numPassengers || !numMotors) return resultDiv.innerHTML = err;
//podem fer !variable x les numeriques tambe

//comprovem si l'array no conté ja un element igual amb la funcio creada abans
if (findFlight(flightNum) !== -1 ) return resultDiv.innerHTML = err2;
//pedazo de validacio, ens hem assegurat que si ja existeix no es pugui crear, pero si no, si 

//instància
const newFlight = new Vol (flightNum, distanceKm, flightCompany, numPassengers, numMotors);

flightsArr.push(newFlight)

resultDiv.innerHTML = `<pre> ${newFlight.toString()} </pre>`;

}

function readAllFlights() {
    //recorrem array, i aquet cop el necessitem sencer, aixi q bucle FOR
    if (flightsArr.length < 1) return resultDiv.innerHTML = "No hi ha cap vol creat."
    let message = "";
    //bucle x recorrer cada element:
    for (let i = 0; i < flightsArr.length; i++) {
        const currentFlight = flightsArr[i];
        message += `<pre> ${currentFlight.toString()} </pre><br>`
    }
//un cop ja tenim tot el toString de tots els elements acumulat a la variable message, 
// com q hem tret resultdiv fora com a global: 

resultDiv.innerHTML = message;

}

function checkFlight() {
    if (flightsArr.length < 1) return resultDiv.innerHTML = "No hi ha vols guardats."
    
    //recollim input i validem
    const flightNum = document.getElementById("readFlight").value;
    if (!flightNum) return resultDiv.innerHTML = "Has d'introduir un número de vol vàlid."

    //buscar al array amb la funció
    const flightPosition = findFlight(flightNum)
    if (flightPosition == -1) return resultDiv.innerHTML = "Aquest vol no existeix.";

    resultDiv.innerHTML = `<pre>${flightsArr[flightPosition].toString()}</pre>`;
}

function removeFlight () {

//Aquesta funció busca dins de l’array clients un objecte Vol que tingui un DNI igual al que l’usuari escriu per prompt(). 
//comprovem si l'array és buit
    if (flightsArr.length < 1) return resultDiv.innerHTML = "No hi ha vols guardats."

    const flightNum = document.getElementById("removeFlight").value
    if (!flightNum) return resultDiv.innerHTML = "Has d'introduir un número de vol."

    const flightPosition = findFlight(flightNum);
    if (flightPosition == -1) return resultDiv.innerHTML = "Aquest vol no existeix."

    flightsArr.splice(flightPosition, 1);

    resultDiv.innerHTML = "S'ha eliminat el vol correctament."
}

function changeFlight() {
    if (flightsArr.length < 1) return resultDiv.innerHTML = "No hi ha vols guardats amb aquest número."

    const flightNum = document.getElementById("updateFlight").value;
    if (!flightNum) return resultDiv.innerHTML = "Has d'introduir un número de vol vàlid."

    const flightPosition = findFlight(flightNum);
    if (flightPosition == -1) return resultDiv.innerHTML = "Aquest vol no existeix."
            
    let setAttribute = parseInt(prompt("Quin atribut vols modificar? <br> 1. Distància KM <br> 2. Companyia <br> 3. Nombre de passatgers <br> 4. Nombre de motors"))
    const newValue = parseInt(prompt("Valor?"))
    //cridar als setters

            switch (setAttribute) { //no incloem el numero de vol pk no tenim pk canviar-ho, ens desajustaria l'aplicació pk massa coses depenen del num d vol
                case 1: flightsArr[flightPosition].distanceKm = newValue; break;
                case 2: flightsArr[flightPosition].flightCompany = newValue; break;
                case 3: flightsArr[flightPosition].numPassengers = newValue; break;
                case 4: flightsArr[flightPosition].numMotors = newValue; break;
            }

            resultDiv.innerHTML = ` Així queda el vol modificat: <pre>${flightsArr[flightPosition].toString()}</pre>`

}