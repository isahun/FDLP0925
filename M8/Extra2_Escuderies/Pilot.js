"use strict"

class Pilot extends Empleat {

    static extraSouAntiguitat = 10000
    static extraSouPerillositat = 50000

    constructor(nom, primerCognom, edat, antiguitat, alcada, pes) {
        super(nom, primerCognom, edat, antiguitat)
        this._alcada = alcada;
        this._pes = pes;
        this._nouSou;
        this._tipusEmpleat = "Pilot"
        this._escuderia = ""; //buit pero amb setter pk li posarem en una funcio afegir pilot a escuderia
    }

    get alcada() { return this._alcada }
    get pes() { return this._pes }
    get sou() { return this._sou }
    get tipusEmpleat() { return this._tipusEmpleat }
    get escuderia() { return this._escuderia }
    get nouSou() { return this._nouSou }


    set alcada(newAlcada) { this._alcada = newAlcada }
    set pes(newPes) { this._pes = newPes }
    set escuderia(newEscuderia) { this._escuderia = newEscuderia}
    set nouSou(newSou) { this._nouSou = newSou }

    calcSou() {
        this._nouSou = this._sou + (Pilot.extraSouAntiguitat * this._antiguitat) + Pilot.extraSouPerillositat
        return this._nouSou;
    }

    toString() {
        return `DADES DE L'EMPLEAT

        Tipus de feina: ${this.tipusEmpleat}
        
        Nom i cognom: ${this.nom} ${this.primerCognom}
        Edat: ${this.edat} anys
        Pes: ${this.pes} kg
        Alçada: ${this.alcada} cm
        Escuderia: ${this.escuderia.nom}
        Antiguitat (anys): ${this.antiguitat} anys a l'escuderia
        Sou mensual: ${this.calcSou()} €
        `
    }
}