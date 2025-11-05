"use strict"

class Avio {
    static cleanMins = 10;
    static cleanDivi = 2;

    constructor (numPlane, brand, model, loadKg, lengthMt) {
        this._numPlane = numPlane;
        this._brand = brand;
        this._model = model;
        this._loadKg = parseFloat(loadKg);
        this._lengthMt = parseFloat(lengthMt);
    }

    get numPlane() { return this._numPlane }
    get brand() { return this._brand }
    get model() { return this._model }
    get loadKg() { return this._loadKg }
    get lengthMt() { return this._lengthMt }
    get cleanDivi() { return Avio.cleanDivi }
    get cleanMins() { return Avio.cleanMins }

    cleanTime() {
        return this.lengthMt * this.cleanMins //podem fer servir el this pk hem fet getter, si no fem Avio.cleanMins
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