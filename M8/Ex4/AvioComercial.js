"use strict"

class AvioComercial extends Avio {
    static extraCleanMins = 240;
    static mealCost = 10;
    static planeType = "Avió comercial"

    constructor (numPlane, brand, model, loadKg, lengthMt, numPassCom){
        super(numPlane, brand, model, loadKg, lengthMt)
        this._numPassCom = numPassCom
    }

    //Si només accedim directament a AvioComercial.mealCost dins la classe, el getter és redundant.

    get numPassCom() { return parseInt(this._numPassCom) }
    get planeType() { return AvioComercial.planeType } //fem getter pk ho farem servir al script

    planeCleanTime() {
        return this.cleanTime(this.lengthMt) + AvioComercial.extraCleanMins
    }

    calcMealCost() {
        return this.numPassCom * AvioComercial.mealCost
    }

    toString() {
        return `
        DADES DE L'AVIÓ
        
        Tipus: ${this.planeType}
        ${super.toString()}
        Temps de neteja: ${this.planeCleanTime()} minuts.
        Preu total dels àpats: ${this.calcMealCost()} €.
        `
    }

}

