"use strict"

class Escuderia {

    constructor (nom, pressupost, nacionalitat) {
        this._nom = nom;
        this._pressupost = pressupost;
        this._nacionalitat = nacionalitat;
        this._cotxes = []
        this._treballadors = []
        this._pilots = []
        this._mecanics = []
    }

    get nom() { return this._nom }
    get pressupost() { return this._pressupost }
    get nacionalitat() { return this._nacionalitat }
    get cotxes() { return this._cotxes}
    get treballadors () { return this._treballadors }
    get pilots() { return this._pilots }
    get mecanics() { return this._mecanics }

    afegirPilot(pilot) {
        this.treballadors.push(pilot)
        //this.pilots.push(pilot) //mirar si ho deixo o no
        pilot.escuderia = this; //connectem amb pilot, assignem valor a escuderia del pilot
    }

    afegirMecanic(mecanic) {
        this.treballadors.push(mecanic)
        //this.mecanics.push(mecanic) //mirar si ho deixo o no, si ho deixo cal treure el bucle a mostrar
        mecanic.escuderia = this; //connectem amb mecanic, assignem valor a escuderia del mecanic

    }

    indexPilot(nom, primerCognom) {
        let pilotPosicio = -1
        if (this.treballadors.length < 1) return `No hi ha treballadors guardats.`

        let i = 0;
        do {
            if (this.treballadors[i].nom === nom && this.treballadors[i].primerCognom === primerCognom) {
                pilotPosicio = i;
            }
            i++
        } while (i < this.treballadors.length && pilotPosicio == -1)

        return pilotPosicio
    }

    indexMecanic(nom, primerCognom) {
        let mecanicPosicio = -1
        if (this.treballadors.length < 1) return "No hi ha treballadors guardats."

        let i = 0;
        do {
            if (this.treballadors[i].nom === nom && this.treballadors[i].primerCognom === primerCognom) {
                mecanicPosicio = i;
            }
            i++
        } while (i < this.treballadors.length && mecanicPosicio == -1)

        return mecanicPosicio
    }

    indexCotxe(id) {
        let cotxePosicio = -1
        if (this.cotxes.length < 1) return "No hi ha cotxes guardats."

        let i = 0;
        do {
            if (this.cotxes[i].id === id) {
                cotxePosicio = i;
            }
            i++
        } while (i < this.cotxes.length && cotxePosicio == -1)

        return cotxePosicio
    }

    mostrarPilots() { //torna array nou de pilots

        for (let i = 0; i < this.treballadors.length; i++) {
            if (this.treballadors[i].tipusEmpleat === "Pilot") {
                this.pilots.push(this.treballadors[i])
            }
        }

        return this.pilots
    }

    mostrarMecanics() {

        for (let i = 0; i < this.treballadors.length; i++) {
            if (this.treballadors[i].tipusEmpleat === "Mecanic") {
                this.mecanics.push(this.treballadors[i])
            }
        }

        return this.mecanics
    }

    mostrarCotxes() {
        return this.cotxes.toString()
    }

    esborrarPilot(nom, primerCognom) {
        
    const pilotPosicio = indexPilot(nom, primerCognom)

    if (pilotPosicio === -1) return `El pilot no treballa a l'escuderia.`

    this.treballadors.splice(pilotPosicio, 1)

    }

    esborrarMecanic(nom, primerCognom) {
        
    const mecanicPosicio = this.indexMecanic(nom, primerCognom)

    if (mecanicPosicio === -1) return `El mecànic no treballa a l'escuderia.`

    this.treballadors.splice(mecanicPosicio, 1)

    }

    toString() {
        return `DADES DE L'ESCUDERIA
        
        Nom: ${this.nom}
        Pressupost: ${this.pressupost}
        Nacionalitat: ${this.nacionalitat}

        Cotxes a l'inventari: 
        ${this.cotxes.join("<br>")}

        Nombre de treballadors en plantilla: 
        ${this.treballadors.length}

        Pilots: 
        ${this.mostrarPilots().join("<br>")}

        Mecanics: 
        ${this.mostrarMecanics("<br>")}
        `
    }
}