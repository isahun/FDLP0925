"use strict"

class Hotel extends Edifici {

    static extraVigi = 500
    static vigiM2 = 1000 //dubte, hem d posarles amb this, o no cal?

    constructor (nom, numPlantes, superficieM2) {
        super(nom, numPlantes, superficieM2)
        this._vigiM2 = Hotel.vigiM2;
    }

    calcCostVigiHotel() {
        return super.calcCostVigi()[1] + (super.calcCostVigi()[0] * Hotel.extraVigi)
}

    toString() {
        return `
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiHotel()} €.
        `
    }
}

