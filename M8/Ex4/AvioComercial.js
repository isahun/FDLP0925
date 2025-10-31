"use strict"

class AvioComercial extends Avio {
    static extraCleanMins = 240;
    static mealCost = 10;
    static planeType = "Avió comercial"

    constructor (numPlane, brand, model, loadKg, lengthMt, numPass){
        super(numPlane, brand, model, loadKg, lengthMt)
        this._numPass = numPass
    }

    get numPass() { return parseInt(this._numPass) }

    planeCleanTime() {
        return this.cleanTime(this.lengthMt) + AvioComercial.extraCleanMins
    }

    calcMealCost() {
        return this.numPass * AvioComercial.mealCost
    }

    toString() {
        return `
        DADES DE L'AVIÓ
        
        Tipus: ${AvioComercial.planeType}
        ${super.toString()}
        Temps de neteja: ${this.planeCleanTime()} minuts.
        Preu total dels àpats: ${this.calcMealCost()} €.
        `
    }

}