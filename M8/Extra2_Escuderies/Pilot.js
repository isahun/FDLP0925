"use strict"

class Pilot extends Empleat {

    static extraSouAntiguitat = 10000
    static extraSouPerillositat = 50000

    constructor(nom, primerCognom, edat, antiguitat, alcada, pes) {
        super(nom, primerCognom, edat, antiguitat)
        this._alcada = alcada;
        this._pes = pes;
        this._sou = null;
        this._tipusEmpleat = "Pilot"
        this._escuderia = ""; //buit pero amb setter pk li posarem en una funcio afegir pilot a escuderia
    }

    get alcada() { return this._alcada }
    get pes() { return this._pes }
    get sou() { return this._sou }
    get tipusEmpleat() { return this._tipusEmpleat }
    get escuderia() { return this._escuderia }


    set alcada(newAlcada) { this._alcada = newAlcada }
    set pes(newPes) { this._pes = newPes }
    set escuderia(newEscuderia) { this._escuderia = newEscuderia}


    calcSou() {
        this.sou = Empleat.souBase + (Pilot.extraSouAntiguitat * this._antiguitat) + Pilot.extraSouPerillositat
        return this.sou
    }

    toString() {
        return `DADES DE L'EMPLEAT ${this.nom} ${this.primerCognom}

        Tipus de feina: ${this.tipusEmpleat}
        
        Nom i cognom: ${this.nom} ${this.primerCognom}
        Edat: ${this.edat} anys
        Pes: ${this.pes} kg
        Alçada: ${this.alcada} cm
        Escuderia: ${this.escuderia}
        Antiguitat (anys): ${this.antiguitat} anys a l'escuderia
        Sou mensual: ${this.sou} €
        `
    }
}