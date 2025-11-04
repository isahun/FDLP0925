"use strict"

class TaulaRigida extends Taula {
    static descomptePreuHora = 0.05
    static tipusTaula = "Rigida"

    constructor(idTaula, longTaula) {
        super(idTaula, longTaula)
        this._preuHora = Taula.preuHora - (Taula.preuHora * TaulaRigida.descomptePreuHora)
    }

    get preuHora() { return this._preuHora }
    get tipusTaula() { return TaulaRigida.tipusTaula }

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