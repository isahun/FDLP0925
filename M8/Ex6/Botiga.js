"use strict"

class Botiga {
    constructor() {
        this._productes = [];
        this._clients = [];
    }

    get productes() { return this._productes }
    get clients() { return this._clients }
    

    addClient(newClient) {
        this.clients.push(newClient)
    }

    addProduct(newProduct) {
        this.clients.push(newProduct)
    }
}