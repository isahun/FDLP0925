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

trobaClient(dniClient) { //index a l'array clients
    for (let i = 0; i < this.clients.length; i++) {
        if (this.clients[i].dni === dniClient) return i
    }
    return -1;
}

trobaProducte(idProducte) { //index a l'array clients
    for (let i = 0; i < this.productes.length; i++) {
        if (this.productes[i].idProducte === idProducte) return i;
    }
    return -1;
}

comprarItem(dniClient, idProducte, unitats) {
    const clientPosicio = this.trobaClient(dniClient)
    if (clientPosicio === -1) return `Client no trobat.`

    const client = this.clients[clientPosicio]

    const productePosicio = this.trobaProducte(idProducte)
    if (productePosicio === -1) return `Producte no trobat.`
    
    const producte = this.productes[productePosicio]

    return client.afegeixProducte(producte, unitats)
}

veureClients() {
    if (this.clients.length < 1) return resultDiv.innerHTML = "No hi ha clients guardats."

    return `<pre>${this.clients.toString()}</pre>`
}


//Total de clients i total de productes
toString() {
    return `Llista de clients de la botiga: ${this.clients.join("<br>")}
    Inventari de productes: ${this.productes.join("<br>")}`
}

}
/*
toString() amb join("<br>")
Això funcionarà només si els elements de clients i productes tenen un toString() definit (i tu en tens un a Producte, molt bé).
Però Client encara no té un toString(), per tant et mostrarà [object Object].
Ho pots deixar així ara, però recorda: quan facis toString() a Client, ja funcionarà perfectament.
També, com a bones praxís, millor no fer servir <br> dins toString() si el mostraràs per consola (fes servir \n):

return `Llista de clients de la botiga:\n${this._clients.join("\n")}
Inventari de productes:\n${this._productes.join("\n")}`;
*/