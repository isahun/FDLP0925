"use strict"

class Taula {
    static preuHora = 15

    constructor(idTaula, longTaula) {
        this._idTaula = parseInt(idTaula);
        this._longTaula = parseFloat(longTaula);
        this._estatTaula = "disponible";
    }

    get idTaula() { return this._idTaula }
    get longTaula() { return this._longTaula }
    get estatTaula() { return this._estatTaula }

    set estatTaula(newEstatTaula) { this._estatTaula = newEstatTaula }

calcularPreu(numHores) {
    return numHores * Taula.preuHora;
  }

  toString(){
    return `ID taula: ${this.idTaula}
        Longitud de la taula: ${this.longTaula} metres.
        Estat de la taula: ${this.estatTaula}`
  }

}
