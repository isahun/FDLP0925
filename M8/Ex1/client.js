"use strict"


class Client {

    #dni;
    _edat;
    _nacionalitat;
    _volsAgafats;

constructor (dni, edat, nacionalitat, volsAgafats) {
    this.#dni = dni;
    this._edat = edat;
    this._nacionalitat = nacionalitat;
    this._volsAgafats = volsAgafats;

}

get dni() {
    let confirmUser = confirm("Ets l'usuari?")
    if (confirmUser === true) {
        return this.#dni
    }
}


//atributs
/*

//get
//set no els fem x falta d temps

//general [ingresar()] [retirar()]

//propis
toString();{
    return "Compte num. " + this.id + " amb saldo " + this.saldo; + " euros.";
}

} 

A més del constructor, la classe Client ha de disposar dels següents mètodes:

mètodes que permetin consultar i modificar cadascun dels atributs.
un mètode que calcula la petjada de carboni (multiplicant els viatges per 0,5 tones de CO₂).
un mètode que retornarà una descripció completa del client (toString()).
*/
}