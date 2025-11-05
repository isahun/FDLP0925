"use strict"

class Mecanic extends Empleat {
    static extraSouAntiguitat = 10000

    constructor (nom, primerCognom, edat, antiguitat, estudisMecanica) {
        super(nom, primerCognom, edat, antiguitat);
        this._estudisMecanica = estudisMecanica;
        this._sou = null;
        this._tipusEmpleat = "Mecanic";
        this._escuderia = "";  //buit pero amb setter pk li posarem en una funcio afegir pilot a escuderia

    }

    get estudisMecanica() { return this._estudisMecanica }
    get sou() { return this._sou }
    get tipusEmpleat() { return this._tipusEmpleat }
    get escuderia() { return this._escuderia }

    set estudisMecanica(newEstudisMecanica) { this._estudisMecanica = newEstudisMecanica}
    set escuderia(newEscuderia) { this._escuderia = newEscuderia}


    calcSou() {
        this.sou = Empleat.souBase + (Mecanic.extraSouAntiguitat * this._antiguitat)
        return this.sou
    }

    toString() {
        return `DADES DE L'EMPLEAT ${this.nom} ${this.primerCognom}

        Tipus de feina: ${this.tipusEmpleat}
        
        Nom i cognom: ${this.nom} ${this.primerCognom}
        Edat: ${this.edat} anys
        Escuderia: ${this.escuderia}
        Antiguitat (anys): ${this.antiguitat} anys a l'escuderia
        Estudis superiors de mecànica: ${this.estudisMecanica}
        Sou mensual: ${this.sou} €
        `
    }
}