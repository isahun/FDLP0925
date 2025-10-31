"use strict"

class JetPrivat extends Avio {
    static extraCleanMins = 15;
    static passPrice = 1000;
    static maxPass = 10;
    static planeType = "Jet privat"

    constructor (numPlane, brand, model, loadKg, lengthMt, numPass){
        super(numPlane, brand, model, loadKg, lengthMt)
        this._numPass = numPass
        this._cleanDivi = Avio.cleanDivi
    }

    get numPass() { return parseInt(this._numPass) }
    get cleanDivi() { return parseInt(this._cleanDivi) }

    jetCleanTime() {
        return ( this.cleanTime(this.lengthMt) / this.cleanDivi ) + JetPrivat.extraCleanMins
    }

    calcBookingCost() {
        return this.numPass * AvioComercial.passPrice
    }

    toString() {
        return `
        DADES DE L'AVIÓ
        Tipus: ${JetPrivat.planeType}
        ${super.toString()}
        Temps de neteja: ${this.jetCleanTime()} minuts.
        `
    } //no posem el temps total d reserva a tostring pk li hem d posar logica al script

}