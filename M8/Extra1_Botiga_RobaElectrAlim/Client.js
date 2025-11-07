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
    get productesClient() { return this._productesClient }

    set nom(newName) { this._nom = newName}


afegirProducteClient(nouProducte, unitats) {
    if(nouProducte.stockProducte >= unitats ){
        nouProducte.stockProducte -= unitats
        this._productesClient.push({producte: nouProducte, unitats})
        return `Producte afegit amb èxit!`
    //missatge de confirmació
    } else if ( nouProducte.stockProducte < unitats ) {
        return `No hi ha prou stock del producte. Queden un total de ${nouProducte.stockProducte} unitats.`
    }
}

indexProducteClient(idProducte) { //index a l'array d productes del client
    for (let i = 0; i < this.productesClient.length; i++) {
        if (this.productesClient[i].producte.idProducte === idProducte) return i;
        } 
        return -1;
}

tornarProducteClient(idProducte) {
    const productePosicio = this.indexProducteClient(idProducte) //posar this als metodes propis
    
    if (productePosicio === -1) return `El client no ha comprat el producte.`

    const producte = this.productesClient[productePosicio]
    producte.producte.stockProducte += 1 //tornem items d'un en un, si n'hem comprat 2 fem l'operacio

    this.productesClient.splice(productePosicio, 1)
    return `Producte retornat amb èxit!`
}

toString() {
    return `Nom del client: ${this.nom}
    Total de productes del client: ${this.productes.length}
    Llista de productes del client: ${this.productes.join("<br>")}`
    }
}
