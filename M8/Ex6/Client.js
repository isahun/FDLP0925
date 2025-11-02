"use strict"

class Client {
    #dni;

    constructor(nom, dni) {
        this._nom = nom;
        this.#dni = dni;
        this._productes = []
    }

    get nom() { return this._nom }
    get productes() { return this._productes}


    addProduct(clientProduct){

        this.productes.push(clientProduct)
        //missatge d confirmació

    }
}