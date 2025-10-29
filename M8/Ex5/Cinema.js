"use strict"

class Cinema extends Edifici {

    static vigiM2 = 3000 //dubte, hem d posarles amb this, o no cal?

    constructor (nom, numPlantes, superficieM2) {
        super(nom, numPlantes, superficieM2)
        this._vigiM2 = Cinema.vigiM2;
        
    }

    calcCostVigiCinema() {
        return super.calcCostVigi()[1]
    }

    toString() {
        return `
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiCinema()} €.
        `
    }
}
