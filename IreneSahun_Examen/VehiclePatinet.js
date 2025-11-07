"use strict"

class Patinet extends VehicleElectric {
    static tipusVehicle = "patinet"
    constructor(idVehicle, autonomiaVehicleKm) {
        super(idVehicle, autonomiaVehicleKm)
    }

    get tipusVehicle() { return Patinet.tipusVehicle }
    
    toString() {
        return `Dades del vehicle
        ${super.toString()}
        Tipus de vehicle: ${this.tipusVehicle}
        `
    }
}