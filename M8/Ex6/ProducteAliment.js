"use strict"

class ProducteAliment extends Producte {
    constructor (idProducte, nomProducte, preuProducte, stockProducte, expTime) {
        super(idProducte, nomProducte, preuProducte, stockProducte);
        this._expDate = expTime;
    }

get expDate() { return this._expDate }


}