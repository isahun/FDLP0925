"use strict"

class Edifici {

    static superficieMinut = 5;
    static minsExtraPlanta = 0.5;
    static euroPerMin = 1;
    static diesMes = 30;
    static vigiCost = 1300;

    constructor ( nom, numPlantes, superficieM2 ){
        this._nom = nom,
        this._numPlantes = numPlantes,
        this._superficieM2 = superficieM2

    }


    get nom() { return this._nom }
    get numPlantes() { return parseInt(this._numPlantes) }
    get superficieM2() { return parseInt(this._superficieM2) }

    netejar() {

    let tempsTotal = parseInt(this.superficieM2) / Edifici.superficieMinut;

    if (this.numPlantes > 1) {
        tempsTotal += parseInt(this._numPlantes - 1) * Edifici.minsExtraPlanta;
    }

    let costMensual = tempsTotal * Edifici.euroPerMin * Edifici.diesMes;
    
    let arrEdifici = [tempsTotal, costMensual];

    return arrEdifici

    }

    calcCostVigi() {


    }
    toString() {
        return `
        Temps total i cost mensual: ${this.netejar()}.`
    }

    
}
