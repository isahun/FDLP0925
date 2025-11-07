"use strict"

class PatinetPotent extends Patinet {
    static extraPreuBase = 0.25
    constructor(autonomiaVehicleKm) {
        super(autonomiaVehicleKm)
    }

    get extraPreuBase() { return PatinetPotent.extraPreuBase }

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