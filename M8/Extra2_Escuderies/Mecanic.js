"use strict"

class Mecanic extends Empleat {
    static extraSouAntiguitat = 10000

    constructor (nom, primerCognom, edat, antiguitat, estudisMecanica) {
        super(nom, primerCognom, edat, antiguitat);
        this._estudisMecanica = estudisMecanica;
        this._nouSou;
        this._tipusEmpleat = "Mecanic";
        this._escuderia = "";  //buit pero amb setter pk li posarem en una funcio afegir pilot a escuderia.js

    }

    get escuderia() { return this._escuderia }
    get estudisMecanica() { return this._estudisMecanica }
    get nouSou() { return this._nouSou }
    get tipusEmpleat() { return this._tipusEmpleat }

    set estudisMecanica(newEstudisMecanica) { this._estudisMecanica = newEstudisMecanica}
    set escuderia(newEscuderia) { this._escuderia = newEscuderia}
    set nouSou(newSou) { this._nouSou = newSou }


    calcSou() {
        this._nouSou = this._sou + (Mecanic.extraSouAntiguitat * this._antiguitat)
        return this._nouSou;
    }

    conversioEstudis() {
        if (this._estudisMecanica == 0) {
            this._estudisMecanica = "Sí";
        }
        if (this._estudisMecanica == 1) {
            this._estudisMecanica = "No";
        }
    }

    toString() {
        return `DADES DE L'EMPLEAT

        Tipus de feina: ${this.tipusEmpleat}
        
        Nom i cognom: ${this.nom} ${this.primerCognom}
        Edat: ${this.edat} anys
        Escuderia: ${this.escuderia.nom}
        Antiguitat (anys): ${this.antiguitat} anys a l'escuderia
        Estudis superiors de mecànica: ${this.estudisMecanica}
        Sou mensual: ${this.calcSou()} €
        `
    }
}