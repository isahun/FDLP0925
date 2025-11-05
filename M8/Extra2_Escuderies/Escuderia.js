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
    }

    afegirMecanic(mecanic) {
        this.treballadors.push(mecanic)
        //this.mecanics.push(mecanic) //mirar si ho deixo o no, si ho deixo cal treure el bucle a mostrar
    }

    mostrarPilots() {

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