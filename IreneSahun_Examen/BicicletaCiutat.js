"use strict"

class BicicletaCiutat extends Bicicleta {
    static extraPreuBase = 0.05
    constructor(autonomiaVehicleKm) {
        super(autonomiaVehicleKm)
    }

    get extraPreuBase() { return BicicletaCiutat.extraPreuBase }

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
