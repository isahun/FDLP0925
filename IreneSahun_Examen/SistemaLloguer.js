"use strict"

class SistemaLloguer {
    constructor() {
        this._vehicles = [];
        this._clients = [];
    }

    get vehicles() { return this._vehicles } 
    get clients() { return this._clients }
    
    set vehicles(newVehicle) { this._vehicles = newVehicle }
    set clients(newClients) { this._clients = newClients }


    afegirClient(newClient){
        this.clients.push(newClient)
    }

    afegirVehicle(newVehicle) {
        this.vehicles.push(newVehicle);
    }

    indexClient(dniClient) { //index a l'array clients
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].dni === dniClient) return i;
        }
        return -1;
    }

    indexVehicle(idVehicle) { //index a l'array productes
        for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].idVehicle === idVehicle) return i;
            } 
            return -1;
    }

    vehiclesDisponibles() {
        const vehiclesDispo = []

        let i = 0
        for (i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].estatVehicle === "disponible"){
                vehiclesDispo.push(this.vehicles[i])
            }
        }
        return vehiclesDispo.join("<br>")
    }

    vehiclesLlogats() {
        const vehiclesOcupats = []

        let i = 0
        for (i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].estatVehicle === "llogat"){
                vehiclesOcupats.push(this.vehicles[i])
            }
        }
        return vehiclesOcupats.join("<br>")
    }

    buscaVehiclesTipus(tipusVehicle) {
        const bicicletes = []
        const patinets = []

        let i = 0
        for (i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].tipusVehicle === tipusVehicle) {
                if (tipusVehicle === "bicicleta") {
                    bicicletes.push(this.vehicles[i])
                } else if (tipusVehicle === "patinet") {
                    patinets.push(this.vehicles[i])
                }
            }
            }

        if (tipusVehicle === "bicicleta") return bicicletes.join("<br>")
        if (tipusVehicle === "patinet") return patinets.join("<br>")
    }

    clientMesLloguers() { //al seu historial, no actius
    if (clients.length === 0) return "No hi ha clients registrats.";

    let maximLloguers = 0; //la info q necessitem extreure del bucle, q se sobreescriurà amb cada iteració
    let nomClient = "" //same here

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].taulesLlogades.length > maximLloguers) {
            maximLloguers = clients[i].lloguersHistorial.length; 
            nomClient = clients[i].nomClient //pk dni es privat
        }
    }

    return `El client amb més lloguers és ${nomClient}.`

    }

    clientMesAntic() { 
    if (clients.length === 0) return "No hi ha clients registrats.";

    let nomClient = ""
    let anyAlta = 9999; //busquem la propietat (anyAlta) amb valor mes PETIT, per aixo la comparacio ha de començar en num gran

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].anyAlta < anyAlta) { 
            anyAlta = clients[i].anyAlta    
            nomClient = clients[i].nomClient
    }
}

    return `El client més antic és ${nomClient}, soci des de l'any ${anyAlta}.`

    }
    
    vehiclesLlogatsClientTotal(dniClient) {

        if (clients.length < 1) return "No hi ha clients guardats."

        const clientPosicio = indexClient(dniClient)
        const client = clients[clientPosicio]

        if (clients[clientPosicio].lloguersClient.length == 0) return "Aquest client no té vehicles llogats." 

        return `<pre>${client.mostrarLloguersHistoric()}</pre>`
    }

    vehiclesLlogatsClientActius(dniClient) {

        if (clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

        const clientPosicio = indexClient(dniClient)
        const client = clients[clientPosicio]

        if (clients[clientPosicio].lloguersClient.length == 0) return "Aquest client no té vehicles llogats." 

        return `<pre>${client.mostrarLloguersClient()}</pre>`
    }

    toString() {
        return `
        Clients guardats: ${this.clients.join("<br>")}
        Vehicles guardats: ${this.vehicles.join("<br>")}`
    }

}
