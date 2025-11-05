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

    set nom(newName) { this._nom = newName}


    afegeixProducte(nouProducte, unitats){
        if(nouProducte.stockProducte >= unitats ){
            nouProducte.stockProducte -= unitats
            this._productesClient.push({producte: nouProducte, unitats})
            return `Producte afegit amb èxit!`
        //missatge de confirmació
        } else if ( nouProducte.stockProducte < unitats ) {
            return `No hi ha prou stock del producte. Queden un total de ${nouProducte.stockProducte} unitats.`
        }
    }

    buscaProducteClient(nouProducte) { //aqui me quedo 4/11 21.49

    }

    toString() {
        return `Nom del client: ${this.nom}
        Total de productes del client: ${this.productes.length}
        Llista de productes del client: ${this.productes.join("<br>")}`
    }
}
