"use strict"

const resultDiv = document.getElementById("result")

function crearClient() {
    const nomClient = document.getElementById("nomClient").value
    const dniClient = document.getElementById("dniClient").value

    if ( !nomClient || !dniClient ) return resultDiv.innerHTML = "Introdueix un valor vàlid"

        if (trobarClient(dniClient) !== -1) {
        resultDiv.innerHTML = "Ja existeix un client amb aquest DNI."
        return
        }

        const newClient = new Client ("Mark", "1234");
        Botiga.afegirClient(newClient)
        console.log(Botiga.toString())

}

    
function eliminarProducte(idProducte) {
    let index = this.trobarProducte(idProducte)
    if (index !== -1) {
            this.productes.splice(index, 1)
        }
    }