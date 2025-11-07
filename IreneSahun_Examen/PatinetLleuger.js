"use strict"

class PatinetLleuger extends Patinet {
    static extraPreuBase = 0.1
    constructor(autonomiaVehicleKm) {
        super(autonomiaVehicleKm)
    }

    get extraPreuBase() { return PatinetLleuger.extraPreuBase }

    calcularPreu(numHores) {
        return numHores * (VehicleElectric.preuHora + (VehicleElectric.preuHora * this.extraPreuBase))
    }

    toString() {
        return `${super.toString()}
        Preu per hora: ${VehicleElectric.preuHora + (VehicleElectric.preuHora * this.extraPreuBase)}
        Preu total: ${this.calcularPreu(numHores)}
        `
    }
}
