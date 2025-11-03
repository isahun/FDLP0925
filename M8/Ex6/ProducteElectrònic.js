"use strict"

class ProducteElectronic extends Producte {
    static tipusProducte = "Electrònic";

    constructor (idProducte, nomProducte, preuProducte, stockProducte, yearsWarranty) {
        super(idProducte, nomProducte, preuProducte, stockProducte);
        this._yearsWarranty = yearsWarranty;
    }

    get yearsWarranty() { return this._yearsWarranty }

    toString() {
        return `Tipus de producte: ${tipusProducte}
        ${super.toString()}
        Anys de garantia del producte electrònic: ${this.yearsWarranty} anys.`
    }
}