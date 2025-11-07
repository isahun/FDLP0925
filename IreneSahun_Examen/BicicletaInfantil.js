"use strict"

class BicicletaInfantil extends Bicicleta {
    static descPreuBase = 0.2
    constructor(autonomiaVehicleKm) {
        super(autonomiaVehicleKm)
    }

    get descPreuBase() { return BicicletaInfantil.descPreuBase }

    calcularPreu(numHores) {
        return numHores * (VehicleElectric.preuHora - (VehicleElectric.preuHora * this.descPreuBase))
    }

    toString() {
        return `${super.toString()}
        Preu per hora: ${VehicleElectric.preuHora - (VehicleElectric.preuHora * this.descPreuBase)}
        Preu total: ${this.calcularPreu(numHores)}
        `
    }
}
