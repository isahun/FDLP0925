"use strict"

class Mecanic extends Empleat {
    static extraSouAntiguitat = 10000

    constructor (nom, primerCognom, edat, antiguitat, estudisMecanica) {
        super(nom, primerCognom, edat, antiguitat);
        this._estudisMecanica = estudisMecanica;
        this._sou = null;
        this._tipusEmpleat = "Mecanic"
    }

    get estudisMecanica() { return this._estudisMecanica }
    get sou() { return this._sou }
    get tipusEmpleat() { return this._tipusEmpleat }

    set estudisMecanica(newEstudisMecanica) { this._estudisMecanica = newEstudisMecanica}

    calcSou() {
        this.sou = Empleat.souBase + (Mecanic.extraSouAntiguitat * this._antiguitat)
        return this.sou
    }

    toString() {
        return `DADES DE L'EMPLEAT ${this.nom} ${this.primerCognom}

        Tipus de feina: ${this.tipusEmpleat}
        
        Nom i cognom: ${this.nom} ${this.primerCognom}
        Edat: ${this.edat} anys
        Antiguitat (anys): ${this.antiguitat} anys a l'escuderia
        Estudis superiors de mecànica: ${this.estudisMecanica}
        Sou mensual: ${this.sou} €
        `
    }
}