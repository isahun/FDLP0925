"use strict"

class Client {
    #dni;

    constructor(nom, dni) {
        this._nom = nom;
        this.#dni = dni;
        this._productesClient = []
    }

    get nom() { return this._nom }
    get productes() { return this._productesClient}

    afegeixProducte(nouProducte, unitats){
        if(nouProducte.stockProducte >= unitats ){
            nouProducte.stockProducte -= unitats;
            this._productesClient.push({producte: nouProducte, unitats})
            nouProducte.client = this; //això només funcionarà si a la classe Producte hi ha un atribut _client i el seu setter, si no, aquesta línia no fa res.
        //missatge de confirmació
        }
    }

    

    eliminarProducte(idProducte) {
    let index = this.trobarProducte(idProducte)
    
    if (index !== -1) {
            this._clients.splice(index, 1)
        }
}


    toString() {
        return `Nom del client: ${this.nom}
        Total de productes del client: ${this.productes.length}
        Llista de productes del client: ${this.productes.join("<br>")}`
    }
    
}