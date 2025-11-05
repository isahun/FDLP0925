"use strict"

class Hotel extends Edifici {

    static extraVigi = 500;
    //static vigiM2 = 1000; no cal posar-lo pk ja esta al static de la classe mare, i hereda el getter
    static souNeteja = 1000;
    static habPersona = 20; //no cal posar a constructor pk no canvia
    static tipusEdifici = "Hotel";

    constructor (nom, numPlantes, superficieM2, numHab) {
        super(nom, numPlantes, superficieM2) //sempre ha d'anar primer l'extensió ancestral, el fonament de l'hotel
        this._numHab = parseInt(numHab);
        //this._vigiM2 = Hotel.vigiM2; //sobreescrivim el valor x defecte d'Edifici, pro no cal pk heredem static i getter d edifici

    }

    get numHab() { return this._numHab }
    get tipusEdifici() { return Hotel.tipusEdifici } //opcional pro recomanat

    set numHab(newNumHab) { this._numHab = parseInt(newNumHab) } //parseint al setter, pk el nou valor tb sigui numInt

    calcCostVigiHotel() {
        return super.calcCostVigi()[1] + (super.calcCostVigi()[0] * Hotel.extraVigi);
}

calcPersonalNeteja() {
    let quantPersonal = Math.ceil(this.numHab / Hotel.habPersona);
    let souTotal = quantPersonal * Hotel.souNeteja;

    return [quantPersonal, souTotal];
}

    toString() {
        return `Tipus d'edifici: ${this.tipusEdifici}
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiHotel()} €.
        Número d'habitacions: ${this.numHab}
        Personal necessari: ${this.calcPersonalNeteja()[0]}
        Salari mensual del personal (total): ${this.calcPersonalNeteja()[1]}
        
        `
    }
}

