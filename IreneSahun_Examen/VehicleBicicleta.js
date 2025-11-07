"use strict"

class Bicicleta extends VehicleElectric {
    static tipusVehicle = "bicicleta"
    constructor(idVehicle, autonomiaVehicleKm) {
        super(idVehicle, autonomiaVehicleKm)
    }

    get tipusVehicle() { return Bicicleta.tipusVehicle }
    
    
    toString() {
        return `Dades del vehicle
        ${super.toString()}
        Tipus de vehicle: ${this.tipusVehicle}
        `
    }
}