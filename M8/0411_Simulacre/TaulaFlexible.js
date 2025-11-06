"use strict"

class TaulaFlexible extends Taula {
    static extraPreuHora = 0.1
    static tipusTaula = "Flexible"

    constructor(idTaula, longTaula) {
        super(idTaula, longTaula)
        this._preuHora = Taula.preuHora + (Taula.preuHora * TaulaFlexible.extraPreuHora) //juanca diu millor metode
    }

    get preuHora() { return this._preuHora }
    get tipusTaula() { return TaulaFlexible.tipusTaula }

    calcularPreu(numHores) {
        return numHores * this.preuHora
    }

    toString() {
        return `Dades de la taula

        Tipus de taula: ${this.tipusTaula}
        ${super.toString()}
        Preu per hora: ${this.preuHora}
        `
    }
}