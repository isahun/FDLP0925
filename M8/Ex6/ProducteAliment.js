"use strict"

class ProducteAliment extends Producte {
    static tipusProducte = "Aliment";

    constructor (idProducte, nomProducte, preuProducte, stockProducte, expTime) {
        super(idProducte, nomProducte, preuProducte, stockProducte);
        this._expTime = expTime;
        this._stockProducte = stockProducte--
    }

    get expDate() { return this._expDate }



toString() {
        return `Tipus de producte: ${tipusProducte}
        ${super.toString()}
        Temps de conserva (mesos): ${this.expDate} mesos.
        `
}

}