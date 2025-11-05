"use script"


//////// RESULTDIV ////////////
const resultDiv = document.getElementById("result");

/////////////// HARDCODE D'ESCUDERIES I COTXES  /////////////////

const Escuderia1 = new Escuderia ("Renault", 100000000, "Francesa")
const Escuderia2 = new Escuderia ("McLaren", 500000000, "Anglesa")
const Escuderia3 = new Escuderia ("Ferrari", 650000000, "Italiana")

escuderies.push(Escuderia1, Escuderia2, Escuderia3)

const Cotxe1 = new Cotxe (700, 340, "blau", 2000000)
const Cotxe2 = new Cotxe (810, 335, "blanc", 3500000)
const Cotxe3 = new Cotxe (770, 380, "blau", 3000000)
const Cotxe4 = new Cotxe (750, 375, "blanc", 4500000)
const Cotxe5 = new Cotxe (825, 380, "blau", 6000000)
const Cotxe6 = new Cotxe (800, 375, "blanc", 5500000)

escuderies[0].cotxes.push(Cotxe1, Cotxe4)
escuderies[1].cotxes.push(Cotxe3, Cotxe5)
escuderies[2].cotxes.push(Cotxe2, Cotxe6)

////FUNCIONS I CRIDA A MÈTODES DE CLASSE


function altaPilot() {
    const nomPilot = document.getElementById("nomPilot").value;
    const cognomPilot = document.getElementById("cognomPilot").value;
    const edatPilot = parseInt(document.getElementById("edatPilot").value);
    const antiguitatPilot = parseInt(document.getElementById("antiguitatPilot").value);
    const alcadaPilot = parseInt(document.getElementById("alcadaPilot").value);
    const pesPilot = parseFloat(document.getElementById("pesPilot").value);
    const escuderiaTriada = parseInt(document.getElementById("escuderiaPilot").value);

    const err = "Has d'introduir un valor vàlid a tots els camps."
    const err2 = "Has d'introduir un nombre en edat, antiguitat, alçada i pes."

    if (!nomPilot || !cognomPilot || !edatPilot || !antiguitatPilot || !alcadaPilot || !pesPilot) return err
    if (isNaN(edatPilot) || isNaN(antiguitatPilot) || isNaN(alcadaPilot) || isNaN(pesPilot)) return err2

    const pilot = new Pilot(nomPilot, cognomPilot, edatPilot, antiguitatPilot, alcadaPilot, pesPilot)

    switch(escuderiaTriada) {
        case 0: 
            escuderies[0].afegirPilot(pilot);
            break;
        case 1:
            escuderies[1].afegirPilot(pilot);
            break;
        case 2:
            escuderies[2].afegirPilot(pilot)
            break;
    }

    resultDiv.innerHTML = `Has afegit amb èxit el pilot ${pilot.nomPilot} ${pilot.cognomPilot}. 
    Aquestes són les seves dades:
    <pre>${pilot.toString()}</pre>
    `
}

function altaMecanic() {
    const nomMecanic = document.getElementById("nomMecanic").value;
    const cognomMecanic = document.getElementById("cognomMecanic").value;
    const edatMecanic = parseInt(document.getElementById("edatMecanic").value);
    const antiguitatMecanic = parseInt(document.getElementById("antiguitatMecanic").value);
    const estudisMecanic = parseInt(document.getElementById("estudisMecanic").value);
    const escuderiaTriada = parseInt(document.getElementById("escuderiaMecanic").value);

    const err = "Has d'introduir un valor vàlid a tots els camps."
    const err2 = "Has d'introduir un nombre en edat, antiguitat, alçada i pes."

    if (!nomMecanic || !cognomMecanic || !edatMecanic || !antiguitatMecanic || !estudisMecanic) return err
    if (isNaN(edatMecanic) || isNaN(antiguitatMecanic)) return err2

    const mecanic = new Mecanic(nomMecanic, cognomMecanic, edatMecanic, antiguitatMecanic, estudisMecanic)

    switch(escuderiaTriada) {
        case 0: 
            escuderies[0].afegirMecanic(mecanic);
            break;
        case 1:
            escuderies[1].afegirMecanic(mecanic);
            break;
        case 2:
            escuderies[2].afegirMecanic(mecanic);
            break;
    }

    resultDiv.innerHTML = `Has afegit amb èxit el mecànic ${mecanic.nomPilot} ${mecanic.cognomPilot}. 
    Aquestes són les seves dades:
    <pre>${mecanic.toString()}</pre>
    `
}

function baixaPilot() {
    const nomPilot = document.getElementById("nomPilotRm").value;
    const cognomPilot = document.getElementById("cognomPilotRm").value; 
    const err = "Has d'introduir un valor vàlid a tots els camps."

    if (!nomPilot || !cognomPilot) return err


    let i = 0;
    let j = 0;
    let escuderia = null;

    for (i = 0; i < escuderies.length; i++) {
        if (escuderies[i].treballadors.length !== 0) {
            for (j = 0; j < escuderies[i].treballadors.length; j++) {
                if (escuderies[i].treballadors[j].nom === nomPilot && escuderies[i].treballadors[j].primerCognom === cognomPilot){
                    escuderia = escuderies[i]
                }
            }
        }
    }

    if (escuderia === null || escuderia.indexPilot(nomPilot, cognomPilot) === -1) return resultDiv.innerHTML = "El pilot no existeix en cap escuderia.";


    escuderia.esborrarPilot(nomPilot, cognomPilot)

    resultDiv.innerHTML = "El pilot s'ha esborrat amb èxit."
        
}

function baixaMecanic() {
    const nomMecanic = document.getElementById("nomMecanicRm").value;
    const cognomMecanic = document.getElementById("cognomMecanicRm").value; 
    const err = "Has d'introduir un valor vàlid a tots els camps."

    if (!nomMecanic || !cognomMecanic) return err

    let i = 0;
    let j = 0;
    let escuderia = null;

    for (i = 0; i < escuderies.length; i++) {
        if (escuderies[i].treballadors.length !== 0) {
            for (j = 0; j < escuderies[i].treballadors.length; j++) {
                if (escuderies[i].treballadors[j].nom === nomMecanic && escuderies[i].treballadors[j].primerCognom === cognomMecanic){
                    escuderia = escuderies[i]
                }
            }
        }
    }

    if (escuderia === null || escuderia.indexMecanic(nomMecanic, cognomMecanic) === -1) return resultDiv.innerHTML = "El mecànic no existeix en cap escuderia.";
    escuderia.esborrarMecanic(nomMecanic, cognomMecanic);

    resultDiv.innerHTML = "El mecànic s'ha esborrat amb èxit."

        
}

function veureEscuderia() {
    const nomEscuderia = document.getElementById("nomEscuderiaV").value
    let escuderiaPosition = -1

    if (escuderies.length < 1) return resultDiv.innerHTML = "No hi ha escuderies guardades."

    let i = 0;

    do {
        if(escuderies[i].nom === nomEscuderia || escuderies[i].nom.toLowerCase() === nomEscuderia) {
            escuderiaPosition = i;
        }
        i++
    } while (i < escuderies.length && escuderiaPosition === -1)

    let escuderia = escuderies[escuderiaPosition]

    return resultDiv.innerHTML = `<pre>${escuderia.toString()}</pre>`
}

function veurePilots() {

    let i = 0;
    let message = ""

    for (i = 0; i < escuderies.length; i++) {
        message += `<pre>${escuderies[i].mostrarPilots()}</pre> \n`
    }

    resultDiv.innerHTML = message
}

function veureMecanics() {

    let i = 0;
    let message = ""

    for (i = 0; i < escuderies.length; i++) {
        message += `<pre>${escuderies[i].mostrarMecanics()}</pre> \n`
    }

    resultDiv.innerHTML = message
}

function veurePilotsEscuderia() {
    const nomEscuderia = document.getElementById("nomEscuderiaPilots").value
    let escuderiaPosition = -1
    let escuderia;

    if (escuderies.length < 1) return resultDiv.innerHTML = "No hi ha escuderies guardades."

    let i = 0;

    do {
        if(escuderies[i].nom === nomEscuderia || escuderies[i].nom.toLowerCase() === nomEscuderia) {
            escuderiaPosition = i;
            escuderia = escuderies[i]
        }
        i++
    } while (i < escuderies.length && escuderiaPosition === -1)

    if (escuderia === null || escuderiaPosition === -1) return resultDiv.innerHTML = "El pilot no existeix en cap escuderia.";

    return resultDiv.innerHTML = `<pre>${escuderia.mostrarPilots().join("<br>")}</pre>`
}

function veureMecanicsEscuderia() {
    const nomEscuderia = document.getElementById("nomEscuderiaMecanics").value
    let escuderiaPosition = -1

    if (escuderies.length < 1) return resultDiv.innerHTML = "No hi ha escuderies guardades."

    let i = 0;
    let escuderia;

    do {
        if(escuderies[i].nom === nomEscuderia || escuderies[i].nom.toLowerCase() === nomEscuderia) {
            escuderiaPosition = i;
            escuderia = escuderies[i]
        }
        i++
    } while (i < escuderies.length && escuderiaPosition === -1)

    if (escuderia === null || escuderiaPosition === -1) return resultDiv.innerHTML = "El mecànic no existeix en cap escuderia.";

    return resultDiv.innerHTML = `<pre>${escuderia.mostrarMecanics().join("<br>")}</pre>`
}

function veureUnPilot() {
    const nomPilot = document.getElementById("nomPilotV").value;
    const cognomPilot = document.getElementById("cognomPilotV").value; 

    let i = 0;
    let j = 0;
    let escuderia = null;
    let pilot = null;

    for (i = 0; i < escuderies.length; i++) {
        if (escuderies[i].treballadors.length !== 0) {
            for (j = 0; j < escuderies[i].treballadors.length; j++) {
                if (escuderies[i].treballadors[j].nom === nomPilot && escuderies[i].treballadors[j].primerCognom === cognomPilot){
                    escuderia = escuderies[i]
                    pilot = escuderies[i].treballadors[j]
                }
            }
        }
    }

    if (escuderia === null || escuderia.indexPilot(nomPilot, cognomPilot) === -1) return resultDiv.innerHTML = "El pilot no existeix en cap escuderia.";

    resultDiv.innerHTML = `<pre>${pilot.toString()}</pre>`
}

function veureUnMecanic() {
    const nomMecanic = document.getElementById("nomMecanicV").value;
    const cognomMecanic = document.getElementById("cognomMecanicV").value; 

    let i = 0;
    let j = 0;
    let escuderia = null;
    let mecanic = null;

    for (i = 0; i < escuderies.length; i++) {
        if (escuderies[i].treballadors.length !== 0) {
            for (j = 0; j < escuderies[i].treballadors.length; j++) {
                if (escuderies[i].treballadors[j].nom === nomMecanic && escuderies[i].treballadors[j].primerCognom === cognomMecanic){
                    escuderia = escuderies[i]
                    mecanic = escuderies[i].treballadors[j]
                }
            }
        }
    }

    if (escuderia === null || escuderia.indexMecanic(nomMecanic, cognomMecanic) === -1) return resultDiv.innerHTML = "El mecànic no existeix en cap escuderia.";

    resultDiv.innerHTML = `<pre>${mecanic.toString()}</pre>`
}

function veureCotxes() {
    const escuderia = document.getElementById("escuderiaCotxes").value;

    resultDiv.innerHTML = `<pre>${escuderia.mostrarCotxes()}</pre>`
}


