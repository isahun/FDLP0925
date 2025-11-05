"use strict"

class Cotxe {
    static count = 1

    constructor (potencia, velocitatMax, color, preuMercat) {
        this._potencia = potencia;
        this._velocitatMax = velocitatMax;
        this._color = color;
        this._preuMercat = preuMercat;
        this._id = Cotxe.count++
    }

    get potencia() { return this._potencia }
    get velocitatMax() { return this._velocitatMax }
    get color() { return this._color }
    get preuMercat() { return this._preuMercat }
    get id() { return this._id }

    toString() {
        return `DADES DEL COTXE ${this.id}
        
        Potència: ${this.potencia} cv.
        Velocitat màxima: ${this.velocitatMax} km/h.
        Color: ${this.color}
        Preu segons mercat: ${this.preuMercat} €.
        
        `
    }
}