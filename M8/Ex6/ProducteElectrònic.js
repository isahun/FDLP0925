"use strict"

class ProducteElectronic extends Producte {
    constructor (idProducte, nomProducte, preuProducte, stockProducte, yearsWarranty) {
        super(idProducte, nomProducte, preuProducte, stockProducte);
        this._yearsWarranty = yearsWarranty;
    }

    get yearsWarranty() { return this._yearsWarranty }

}