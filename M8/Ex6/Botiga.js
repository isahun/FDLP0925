"use strict"

class Botiga {
    constructor() {
        this._productes = [];
        this._clients = [];
    }

    get productes() { return this._productes }
    get clients() { return this._clients }
    

    addClientToShop(newClient) {
        this.clients.push(newClient)
    }

    addProductToShop(newProduct) {
        this.clients.push(newProduct)
    }
}