"use strict"

class Hospital extends Edifici {

    static vigiM2 = 1000 //dubte, hem d posarles amb this, o no cal?
    static numApats = 3
    static tipusEdifici = "Hospital"


    constructor (nom, numPlantes, superficieM2, numPacients) {
        super(nom, numPlantes, superficieM2)
        this._vigiM2 = Hospital.vigiM2;
        this._numPacients = numPacients;
        this._numApats = Hospital.numApats;
        this._tipusEdifici = Hospital.tipusEdifici;

    }

    get numPacients () { return parseInt(this._numPacients)} //es redundant fer això? puc fer directament return hospital.racionsDies?
    get tipusEdifici (){ return Hospital.tipusEdifici }
    get numApats() { return Hospital.numApats }
    set numPacients(newNumPacients) { this._numPacients = newNumPacients }


    calcCostVigiHospital() {
        return super.calcCostVigi()[1]
    }

    repartirDinar(numPacients) {
        let numRacions = numPacients * this.numApats
        return `S'estan repartint ${numRacions} racions.`
    }

    toString() {
        return `
        Tipus d'edifici: ${this.tipusEdifici}
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiHospital()} €.
        Número de pacients: ${this.numPacients}
        Racions a repartir per dia : ${this.repartirDinar(this.numPacients)}
        `
    }
}

