"use strict"

class Hospital extends Edifici {

    static vigiM2 = 1000 //dubte, hem d posarles amb this, o no cal?

    constructor (nom, numPlantes, superficieM2) {
        super(nom, numPlantes, superficieM2)
        this._vigiM2 = Hospital.vigiM2;
        
    }

    calcCostVigiHospital() {
        return super.calcCostVigi()[1]
    }

    toString() {
        return `
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiHospital()} €.
        `
    }
}
