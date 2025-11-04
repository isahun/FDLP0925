"use strict"

class TaulaStandard extends Taula {

    static tipusTaula = "Standard"


    constructor(idTaula, longTaula) {
        super(idTaula, longTaula)
        this._preuHora = Taula.preuHora;
    }

    get preuHora() { return this._preuHora }
    get tipusTaula() { return TaulaStandard.tipusTaula }

    toString() {
        return `Dades de la taula
        
        Tipus de taula: ${this.tipusTaula}
        ${super.toString()}
        Preu per hora: ${this.preuHora}
        `
    }



}