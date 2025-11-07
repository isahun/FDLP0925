"use strict"

class VehicleElectric {
    static count = 1;
    static preuHora = 10;

    constructor(autonomiaVehicleKm) {
        this._idVehicle = ++ VehicleElectric.count;
        this._autonomiaVehicleKm = autonomiaVehicleKm;
        this._estatVehicle = "disponible";
 
        
    }

    get idVehicle() { return this._idVehicle }
    get autonomiaVehicleKm() { return this._autonomiaVehicleKm }
    get estatVehicle() { return this._estatVehicle}

    set estatVehicle(newEstatVehicle) { this._estatVehicle = newEstatVehicle}

    calcularPreu(numHores) {
        return numHores * VehicleElectric.preuHora;
}

    toString(){
        return `ID vehicle: ${this.idVehicle}
        Autonomia del vehicle en km: ${this.autonomiaVehicleKm} km.
        Estat del vehicle: ${this.estatVehicle}`
    }
}