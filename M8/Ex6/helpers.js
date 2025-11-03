"use strict"

function trobarClient (clientDni) {
       return this._clients.findIndex(client => client.dni === clientDni)
    }

function trobarProducte(idProducte) {
        return this._productesClient.findIndex(producte => producte.idProducte === idProducte)
    }