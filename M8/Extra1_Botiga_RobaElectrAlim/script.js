"use strict"

const botiga = new Botiga;

const resultDiv = document.getElementById("result")

function crearClient() {
    const nom = document.getElementById("nomClient").value;
    const dni = document.getElementById("dniClient").value;

    if (!nom || !dni || dni.length !== 9) {
        resultDiv.innerHTML = "Has d'introduir un nom i un DNI vàlid.";
        return;
    }

    if (findClient(dni) !== -1) {
        resultDiv.innerHTML = "Aquest client ja existeix.";
        return;
    }

    const client = new Client(nom, dni);
    botiga.clients.push(client);
    resultDiv.innerHTML = "Client afegit correctament.";
    cleanInputs();
}
