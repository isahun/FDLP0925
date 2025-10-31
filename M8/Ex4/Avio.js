"use strict"

class Avio {
    static cleanMins = 10;
    static cleanDivi = 2;

    constructor (numPlane, brand, model, loadKg, lengthMt) {
        this._numPlane = numPlane,
        this._brand = brand,
        this._model = model,
        this._loadKg = loadKg,
        this._lengthMt = lengthMt
    }

    get numPlane() { return this._numPlane }
    get brand() { return this._brand }
    get model() { return this._model }
    get loadKg() { return parseFloat(this._loadKg) }
    get lengthMt() { return parseFloat(this._lengthMt) }

    cleanTime() {
        return this.lengthMt * Avio.cleanMins
    }

    calcCombustible() {
        return this.lengthMt * this.loadKg
    }

    toString() {
        return `Identificador: ${this.numPlane}
        Marca: ${this.brand}
        Model: ${this.model}
        Càrrega màxima (kg): ${this.loadKg} quilos.
        Llargada (m): ${this.lengthMt} metres.
        Combustible necessari: ${this.calcCombustible()} litres.`
    }
}