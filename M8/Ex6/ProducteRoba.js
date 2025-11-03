"use strict"

class ProducteRoba extends Producte {
    static tipusProducte = "Roba";

    constructor (idProducte, nomProducte, preuProducte, stockProducte, tallaProducte) {
        super(idProducte, nomProducte, preuProducte, stockProducte);
        this._tallaProducte = tallaProducte;
    }

    get tallaProducte() { return this._tallaProducte }

    toString() {
        return `Tipus de producte: ${tipusProducte}
        ${super.toString()}
        Talla del producte: ${this.tallaProducte}.
        `
}
}