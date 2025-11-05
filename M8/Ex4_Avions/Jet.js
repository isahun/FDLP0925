"use strict"

class JetPrivat extends Avio {
    static extraCleanMins = 15;
    static passPrice = 1000;
    static maxPass = 10;
    static planeType = "Jet privat"

    constructor (numPlane, brand, model, loadKg, lengthMt, numPassJet){
        super(numPlane, brand, model, loadKg, lengthMt)
        this._numPassJet = parseInt(numPassJet)
        //this._cleanDivi = Avio.cleanDivi no cal pk hereda getter de main class, x aixo tampoc cal el getter
    }

    get numPassJet() { return this._numPassJet }
    get planeType() { return JetPrivat.planeType } //fem getter pk ho farem servir al script
    get maxPass() { return JetPrivat.maxPass }  //fem getter pk ho farem servir al script


    jetCleanTime() {
        return ( this.cleanTime(this.lengthMt) / this.cleanDivi ) + JetPrivat.extraCleanMins
    }

    calcBookingCost() {
        return this.numPassJet * JetPrivat.passPrice
    }

    toString() {
        return `
        DADES DE L'AVIÓ
        Tipus: ${this.planeType}
        ${super.toString()}
        Temps de neteja: ${this.jetCleanTime()} minuts.
        `
    } 
}