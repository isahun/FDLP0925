"use strict"

function createFlight() {

//const client1 = new Client ("26374857J", "40", "Sueca", 6);
//const client2 = new Client ("84635243U", "32", "Irlandesa", 5);

const flightNum = document.getElementById("flightNum").value;
const distanceKm = parseInt(document.getElementById("distanceKm").value);
const flightCompany = document.getElementById("company").value;
const numPassengers = document.getElementById("numPassengers").value;
const numMotors = parseInt(document.getElementById("numMotors").value);
const resultDiv = document.getElementById("result");
const err = '<small style="color:RedEyeReduction;"> Invalid values </small>';

if (!flightNum || !distanceKm || !numPassengers || !numMotors) return resultDiv.innerHTML = err;
//podem fer !variable x les numeriques tambe

//instància
const newFlight = new Vol (flightNum, distanceKm, flightCompany, numPassengers, numMotors);

flightsArr.push(newFlight)

resultDiv.innerHTML = `<pre> ${newFlight.toString()} </pre>`;

}

function removeFlight () {

//Aquesta funció busca dins de l’array clients un objecte Vol que tingui un DNI igual al que l’usuari escriu per prompt(). 
//comprovem si l'array és buit
    if (flightsArr.length < 1) return document.getElementById("result").innerHTML = "No hi ha vols guardats."

    const flightFilter = prompt("Escrigui el seu número de vol");

    let i = 0; //comptador d bucle, posicio actual dins array
    let position = -1; //aqui guardarem la posicio on trobem el client, si en trobem un a clients[2], position = 2

    do { //bucle x recorrer tot l'array, client x client
        console.log(flightsArr[i]) //cada objecte

        if (flightsArr[i].flightNum == flightFilter){
            position = i; //si hi ha coincidencia, actualitzem la variable de posició
        }

        i++ //augmentem i per passar al seguent client, i continua fins arribar al final de l'array
    } while ( i < flightsArr.length && position == -1) //fins que la i sigui mes gran q el maxim d posicions d l'array o no es trobi
    //si mostra -1 vol dir q no hi ha cap client amb aquet DNI
        console.log(position, "posició"); //ens torna la posició

        if (position != -1) {
            flightsArr.splice(i, 1);
            return document.getElementById("result").innerHTML = "S'ha eliminat el vol correctament."
        } else {
            return document.getElementById("result").innerHTML = "No existeix aquest vol en la teva base de dades";
        } //Missatges diferents si s’ha trobat o no

}

function checkFlight() {

    if (flightsArr.length < 1) return document.getElementById("result").innerHTML = "No hi ha vols guardats amb aquest número."

    const flightFilter = prompt("Escrigui el seu número de vol");

    let i = 0; //comptador d bucle, posicio actual dins array
    let position = -1; //aqui guardarem la posicio on trobem el client

    do { //bucle x recorrer tot l'array, client x client

        if (flightsArr[i].flightNum == flightFilter){
            position = i; //si hi ha coincidencia, actualitzem la variable de posició
        }

        i++ //augmentem i per passar al seguent client, i continua fins arribar al final de l'array
    } while ( i < flightsArr.length && position == -1) //fins que la i sigui mes gran q el maxim d posicions d l'array o no es trobi
    //si mostra -1 vol dir q no hi ha cap client amb aquet DNI
        console.log(position, "posició"); //ens torna la posició

        if (position != -1) {
            return document.getElementById("result").innerHTML = toString()
        } else {
            return document.getElementById("result").innerHTML = "No existeix aquest vol en la teva base de dades";
        } //Missatges diferents si s’ha trobat o no

}

function changeFlight() {
    if (flightsArr.length < 1) return document.getElementById("result").innerHTML = "No hi ha vols guardats amb aquest número."

    const flightFilter = prompt("Escrigui el seu número de vol");

    let i = 0; //comptador d bucle, posicio actual dins array
    let position = -1; //aqui guardarem la posicio on trobem el client

    do { //bucle x recorrer tot l'array, client x client

        if (flightsArr[i].flightNum == flightFilter){
            position = i; //si hi ha coincidencia, actualitzem la variable de posició
        }

        i++ //augmentem i per passar al seguent client, i continua fins arribar al final de l'array
    } while ( i < flightsArr.length && position == -1) //fins que la i sigui mes gran q el maxim d posicions d l'array o no es trobi
    //si mostra -1 vol dir q no hi ha cap client amb aquet DNI
        console.log(position, "posició"); //ens torna la posició

        if (position != -1) {
            return document.getElementById("result").innerHTML = toString()
        } else {
            return document.getElementById("result").innerHTML = "No existeix aquest vol en la teva base de dades";
        } //Missatges diferents si s’ha trobat o no

}