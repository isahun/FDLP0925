"use strict"

class Hotel extends Edifici {

    static extraVigi = 500
    static vigiM2 = 1000

    constructor (nom, numPlantes, superficieM2, vigiM2) {
        super(nom, numPlantes, superficieM2, vigiM2)
    }


    toString() {
        return `
        ${super.toString()}
        `
    }
}

