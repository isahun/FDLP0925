"use strict"

class Hospital extends Edifici {

    static vigiM2 = 1000 //dubte, hem d posarles amb this, o no cal?
    static numApats = 3

    constructor (nom, numPlantes, superficieM2, numPacients) {
        super(nom, numPlantes, superficieM2)
        this._vigiM2 = Hospital.vigiM2;
        this._numPacients = numPacients;
        this._numApats = Hospital.numApats;
    }

    get numPacients () { return parseInt(this._numPacients)} //es redundant fer això? puc fer directament return hospital.racionsDies?
    set numPacients(newNumPacients) { this._numPacients = newNumPacients }


    calcCostVigiHospital() {
        return super.calcCostVigi()[1]
    }

    repartirDinar(numPacients) {
        return `S'estan repartint ${numPacients} racions.`
        
    }

    toString() {
        return `
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiHospital()} €.
        Número de pacients: ${this.numPacients}
        Racions a repartir: ${this.repartirDinar(this.numPacients)}
        `
    }
}

