"use strict"

class Botiga {
    constructor() {
        this._productes = [];
        this._clients = [];
    }

    get productes() { return this._productes } //només x us extern, dins d la classe fem servir _
    get clients() { return this._clients }
    
    set productes(newProducts) { this._productes = newProducts}
    set clients(newClients) { this._clients = newClients}

afegirClient(newClient){
    this.clients.push(newClient)
}

afegirProducte(newProduct) {
    this._productes.push(newProduct);
}

indexClient(dniClient) { //index a l'array clients
    for (let i = 0; i < this.clients.length; i++) {
        if (this.clients[i].dni === dniClient) return i;
    }
    return -1;
}

indexProducte(idProducte) { //index a l'array productes
    for (let i = 0; i < this.productes.length; i++) {
        if (this.productes[i].idProducte === idProducte) return i;
        } 
        return -1;
}

veureClients() {
    if (this.clients.length < 1) return "No hi ha clients guardats."

    return `<pre>${this.clients.toString()}</pre>`
}

veureInventari() {
    if (this.productes.length < 1) return "No hi ha productes guardats a l'inventari."

    return `<pre>${this.productes.toString()}</pre>`
}

esborrarProducteInventari(idProducte) {
        
    const productePosicio = this.indexProducte(idProducte) //posar this als metodes propis

    if (productePosicio === -1) return "El producte no és a l'inventari."
    
    this.productes.splice(productePosicio, 1)

    return "S'ha eliminat el producte amb èxit."

}

esborrarClientInventari(dniClient) {
        
    const clientPosicio = this.indexClient(dniClient) //posar this als metodes propis

    if (clientPosicio === -1) return `El client no és a la base de dades.`

    this.clients.splice(clientPosicio, 1)

    return "S'ha donat de baixa el client amb èxit."

}

//Total de clients i total de productes
toString() {
    return `Llista de clients de la botiga:"<br>"${this.clients.join("<br>")}
    Inventari de productes:"<br>"${this.productes.join("<br>")}`
}

}

/*
toString() amb join("<br>")
Això funcionarà només si els elements de clients i productes tenen un toString() definit (n'hi ha un). Si no, mostrarà [object Object] */
