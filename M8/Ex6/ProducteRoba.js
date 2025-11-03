"use strict"

class ProducteRoba extends Producte {
    constructor (idProducte, nomProducte, preuProducte, stockProducte, sizeProducte) {
        super(idProducte, nomProducte, preuProducte, stockProducte);
        this._sizeProducte = sizeProducte;
    }

    get yearsWarranty() { return this._yearsWarranty }

}