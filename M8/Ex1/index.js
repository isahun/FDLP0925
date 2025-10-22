"use strict"

function createClient() {

//const client1 = new Client ("26374857J", "40", "Sueca", 6);
//const client2 = new Client ("84635243U", "32", "Irlandesa", 5);

const dniUser = document.getElementById("dni").value;
const ageUser = parseInt(document.getElementById("age").value);
const nationality = document.getElementById("nationality").value;
const flightsNum = parseInt(document.getElementById("flightsNum").value);
const resultDiv = document.getElementById("result");
//const result2Div = document.getElementById("result2");
const err = "<small> Introdueix un valor vàlid. </small>"

if (!dniUser || !nationality || !ageUser || !flightsNum) return resultDiv.innerHTML = err;
//podem fer !variable x les numeriques tambe

//instància
const newClient = new Client (dniUser, ageUser, nationality, flightsNum);

clients.push(newClient)

//newClient.dni = "26374857J";
//newClient.edat = 37;
//newClient.nacionalitat = "Holandesa";
//newClient.volsAgafats = 10;


resultDiv.innerHTML = `<pre> ${newClient.toString()} </pre>`;

//result2Div.innerHTML = `Nou DNI: ${newClient.dni} <br> Nova edat: ${newClient.edat} <br> Nova nacionalitat: ${newClient.nacionalitat} <br> 
//Nous vols agafats: ${newClient.volsAgafats} <br> Nova petjada de carboni: ${newClient.carbonFootprint()}`

}

function updateClient1() { //funció x actualitzar client 1 amb setter
    const primerClient = clients[0]; //HARD CODE assignem valor de index 0 de l'array a una constant x fer el canvi millor
    const newNationality = "Swiss" 

    if (newNationality == "" || newNationality.length > 3) return document.getElementById("result").innerHTML = "Nacionalitat incorrecta";
    
    primerClient.nationality = newNationality;

    console.log(primerClient);
}

function calcPetjadaClient() {
    if (clients.length < 1) return document.getElementById("result").innerHTML = "No hi ha clients guardats."
    
    const primerClient = clients[0];
    const petjadaClient1 = primerClient.carbonFootprint() //num
    document.getElementById("result").innerHTML = `L'emprempta de carboni d'aquest client és ${petjadaClient1}`
}