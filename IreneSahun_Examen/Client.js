"use strict"

class Client {
    #dniClient

    constructor (nomClient, dniClient, anyAlta) {
        this._nomClient = nomClient;
        this.#dniClient = dniClient;
        this._anyAlta = anyAlta;
        this._lloguersClient = [];
        this._lloguersHistorial = [];
    }

    get nomClient() { return this._nomClient }
    get dniClient() { return this.#dniClient }
    get anyAlta() { return this._anyAlta }
    get lloguersClient() { return this._lloguersClient }
    get lloguersHistorial() { return this._lloguersHistorial }

    llogarVehicle(nouVehicle, numHores) {

        const preuClient = nouVehicle.calcularPreu(numHores);
        nouVehicle.estatVehicle = "llogat";
        this._lloguersClient.push(nouVehicle)
        this._lloguersHistorial.push(nouVehicle)

        return `El client ${this.nomClient} ha llogat el vehicle de tipus ${nouVehicle.tipusVehicle} amb ID ${nouVehicle.idVehicle} per ${numHores} hores.
        El preu total és ${preuClient} €.`
    }

    tornarVehicle (dniClient, idVehicle) {
        
        const vehiclePosicio = indexTaulaClient(dniClient, idVehicle)

        if (vehiclePosicio === -1) return `El client no té llogat aquest vehicle.`

        this.lloguersClient[vehiclePosicio].estatVehicle = "disponible"

        this._lloguersClient.splice(vehiclePosicio, 1)

        return `Vehicle etornat amb èxit.`
    
    }

    mostrarLloguersHistoric() {
        if (this.lloguersHistorial.length < 1) return `No hi ha vehicles guardats.`
        return this.lloguersHistorial.join("<br>")
    }
    
    mostrarLloguersActius() {
        if (this.lloguersClient.length < 1) return `No hi ha vehicles guardats.`
        return this.lloguersClient.join("<br>")
    }

//mostrar dades i taules llogades
    toString() {
        return `DADES DEL CLIENT

        Nom client: ${this.nomClient}
        Data alta a l'app: ${this.anyAlta}
        Número de vehicles llogats actius: ${this.lloguersClient.length}
        Vehicles llogats actius: ${this.mostrarLloguersActius()}
        Número total històric de lloguers: ${this.lloguersHistorial.length}
        `
    }

}