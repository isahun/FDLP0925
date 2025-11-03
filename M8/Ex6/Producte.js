"use strict"

class Product {
    constructor(idProducte, nomProducte, preuProducte, stockProducte) {
        this._idProducte = idProducte;
        this._nomProducte = nomProducte;
        this._preuProducte = preuProducte;
        this._stockProducte = stockProducte;
        this._client = [];
    }

    get idProducte() { return this._idProducte }
    get nomProducte() { return this._nomProducte }
    get preuProducte() { return this._preuProducte }
    get stockProducte() { return this._stockProducte }

    set stockProducte(newStockValue) { this._stockProducte = newStockValue }


    toString() {
        return `ID producte: ${this.idProducte}
                Nom del producte: ${this.nomProducte}
                Preu del producte: ${this.preuProducte}`
    }

}