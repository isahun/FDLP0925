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
    //Enlloc de treure la petjada d’un client, podem fer q nomes ens la tregui dels clients q tenen dni tal:

    if (clients.length < 1) return document.getElementById("result").innerHTML = "No hi ha clients guardats."
    
    const primerClient = clients[0];
    const petjadaClient1 = primerClient.carbonFootprint() //num
    document.getElementById("result").innerHTML = `L'emprempta de carboni d'aquest client és ${petjadaClient1}`
}

//buscar un client en concret

function findObject() { //Aquesta funció busca dins de l’array clients un objecte Client 
//que tingui un DNI igual al que l’usuari escriu per prompt(). 
//“Busca quin client té aquest DNI i digue’m en quina posició de l’array està.”
    //comprovem si l'array és buit
    if (clients.length < 1) return document.getElementById("result").innerHTML = "No hi ha clients guardats."

    const dniFiltre = prompt("Escrigui el seu DNI");

    let i = 0; //comptador d bucle, posicio actual dins array
    let position = -1; //aqui guardarem la posicio on trobem el client, si en trobem un a clients[2], position = 2

    do { //bucle x recorrer tot l'array, client x client
        console.log(clients[i]) //cada objecte

        if (clients[i].dni == dniFiltre){
            position = i; //si hi ha coincidencia, actualitzem la variable de posició
        }

        i++ //augmentem i per passar al seguent client, i continua fins arribar al final de l'array
    } while ( i < clients.length && position == -1) //fins que la i sigui mes gran q el maxim d posicions d l'array o no es trobi
    //si mostra -1 vol dir q no hi ha cap client amb aquet DNI
        console.log(position, "posició"); //ens torna la posició

        if (position != -1) {
            console.log("Eureka", clients[position]);
        } else { //Aqui ens imprimira l’objecte amb l’if posicio != i el console log Eureka
            console.log("No existeix en la teva base de dades");
        } //Missatges diferents si s’ha trobat o no

}

findObject()

