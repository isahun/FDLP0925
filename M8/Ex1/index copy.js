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


resultDiv.innerHTML = `<pre> ${newClient.toString()} </pre>`;

}

function update1Client() {
    const primerClient = clients[0] //hard code
    const newNationality = "br"

    if (newNationality == "" || newNationality.length > 3)  return{//exemples

    }
    }
