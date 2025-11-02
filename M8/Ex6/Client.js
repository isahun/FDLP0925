"use strict"

class Client {
    #dni;

    constructor(nom, dni, productes) {
        this._nom = nom;
        this.#dni = dni;
        this._productes = productes
    }

    get nom() { return this._nom }
    get productes() { return this._productes}


    addProduct(clientProduct){

    }
}