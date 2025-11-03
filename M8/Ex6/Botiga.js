"use strict"

class Botiga {
    constructor() {
        this._productes = [];
        this._clients = [];
    }

    get productes() { return this._productes } //només x us extern, dins d la classe fem servir _
    get clients() { return this._clients }
    
// Afegeix un nou client a la botiga
    addClientToShop(newClient) {
        this._clients.push(newClient)
    }

// Afegeix un nou producte a l’inventari de la botiga
    addProductToShop(newProduct) {
        this._productes.push(newProduct)
    }

//Troba un client
    findClient (clientDni) {
       return this._clients.findIndex(client => client.dni === clientDni)
    }

// Elimina un client de la DDBB de la botiga
    removeClient(clientDni) {
        const index = this.findClient(clientDni)

        if (index !== -1) {
            this._clients.splice(index, 1)
        }
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