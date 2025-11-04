"use strict"

function trobarClient (clientDni) {
       return Botiga.clients.findIndex(client => client.dni === clientDni)
    }

function trobarProducte(idProducte) {
        return Client.productesClient.findIndex(producte => producte.idProducte === idProducte)
    }

    