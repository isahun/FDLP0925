"use strict"

class Avioneta extends Avio {
    static helixKm = 1000;
    static planeType = "Avioneta"

    constructor (numPlane, brand, model, loadKg, lengthMt, numHelix){
        super(numPlane, brand, model, loadKg, lengthMt)
        this._numHelix = numHelix
        this._cleanDivi = Avio.cleanDivi
    }

    get numHelix() { return parseInt(this._numHelix) }
    get cleanDivi() { return parseInt(this._cleanDivi) }

    aircraftCleanTime() {
        return ( this.cleanTime() / this.cleanDivi )
    }

    calcDistance() {
        return this.numHelix * Avioneta.helixKm
    }

    toString() {
        return `
        DADES DE L'AVIÓ
        Tipus: ${Avioneta.planeType}
        ${super.toString()}
        Temps de neteja: ${this.aircraftCleanTime()} minuts.
        Distància: ${this.calcDistance()} quilòmetres.
        `
    } 

}