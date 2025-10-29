"use strict"

class Edifici {

    static superficieMinut = 5;
    static minsExtraPlanta = 0.5;
    static euroPerMin = 1;
    static diesMes = 30;
    static vigiCost = 1300;
    static vigiM2 = 1000;

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
        tempsTotal += parseInt(this.numPlantes - 1) * Edifici.minsExtraPlanta;
    }

    let costMensual = tempsTotal * Edifici.euroPerMin * Edifici.diesMes;
    let arrEdifici = [tempsTotal, costMensual];

    return arrEdifici;
    }

    calcCostVigi(vigiM2) {
        let numVigi = Math.ceil(parseInt(this.superficieM2) / vigiM2);
        let costVigiTotal = numVigi * vigiCost;
        return costVigiTotal;
    }

    toString() {
        return `
        Nom: ${this.nom}
        Plantes: ${this.numPlantes}
        Superfície (m2): ${this.superficieM2}
        Temps total de neteja: ${this.netejar()[0]} minuts.
        Cost mensual de neteja: ${this.netejar()[1]} €.
        Cost mensual vigilància: ${this.calcCostVigi(vigiM2)} €.

        `
    }

    
}
