"use strict"

class Avioneta extends Avio {
    static helixKm = 1000;
    static planeType = "Avioneta"

    constructor (numPlane, brand, model, loadKg, lengthMt, numHelix){
        super(numPlane, brand, model, loadKg, lengthMt)
        this._numHelix = numHelix
    }

    get numHelix() { return this._numHelix }
    get planeType() { return Avioneta.planeType } //fem getter pk ho farem servir al toString, tot i q si nomes es fa servir a la classe propia no cal

    aircraftCleanTime() {
        return ( this.cleanTime() / this.cleanDivi ) //this.cleanDivi pk hem creat getter a la classe
    }

    calcDistance() {
        return this.numHelix * Avioneta.helixKm
    }

    toString() {
        return `
        DADES DE L'AVIÓ
        Tipus: ${this.planeType}
        ${super.toString()}
        Temps de neteja: ${this.aircraftCleanTime()} minuts.
        Distància: ${this.calcDistance()} quilòmetres.
        `
    } 

}