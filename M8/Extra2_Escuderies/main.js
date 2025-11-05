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
    const nomPilot = document.getElementById("nomPilot");
    const cognomPilot = document.getElementById("cognomPilot");
    const edatPilot = parseInt(document.getElementById("edatPilot"));
    const antiguitatPilot = parseInt(document.getElementById("antiguitatPilot"));
    const alcadaPilot = parseInt(document.getElementById("alcadaPilot"));
    const pesPilot = parseFloat(document.getElementById("pesPilot"));
    const escuderiaTriada = parseInt(document.getElementById("escuderiaPilot"))

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
    const nomMecanic = document.getElementById("nomMecanic");
    const cognomMecanic = document.getElementById("cognomMecanic");
    const edatMecanic = parseInt(document.getElementById("edatMecanic"));
    const antiguitatMecanic = parseInt(document.getElementById("antiguitatMecanic"));
    const estudisMecanic = parseInt(document.getElementById("estudisMecanic"));
    const escuderiaTriada = parseInt(document.getElementById("escuderiaMecanic"))

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


