"use strict"

function createClient() {

//const client1 = new Client ("26374857J", "40", "Sueca", 6);
//const client2 = new Client ("84635243U", "32", "Irlandesa", 5);

const dniUser = document.getElementById("dni").value;
const ageUser = parseInt(document.getElementById("age").value);
const nationality = document.getElementById("nationality").value;
const flightsNum = parseInt(document.getElementById("flightsNum").value);
const resultDiv = document.getElementById("result");
const result2Div = document.getElementById("result2");
const err = "Introdueix un valor vàlid."

if (!dniUser || !nationality || isNaN(ageUser) || isNaN(flightsNum)) return resultDiv.innerHTML = err;
//podem fer !variable x les numeriques tambe

//instància
const newClient = new Client (dniUser, ageUser, nationality, flightsNum);

newClient.dni = "26374857J";
newClient.edat = 37;
newClient.nacionalitat = "Holandesa";
newClient.volsAgafats = 10;


resultDiv.innerHTML = `<pre> ${newClient.toString()} </pre>`;

result2Div.innerHTML = `Nou DNI: ${newClient.dni} <br> Nova edat: ${newClient.edat} <br> Nova nacionalitat: ${newClient.nacionalitat} <br> 
Nous vols agafats: ${newClient.volsAgafats} <br> Nova petjada de carboni: ${newClient.carbonFootprint()}`

}
