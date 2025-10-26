"use strict"
class Client {

    #dni;
    #edat;
    #nacionalitat;
    #volsAgafats;

//1. Constructor

constructor (dni, edat, nacionalitat, volsAgafats) {
    this.#dni = dni;
    this.#edat = edat;
    this.#nacionalitat = nacionalitat;
    this._volsAgafats = [];
    this.tons = 0.5

}
//2. Getters i Setters

//getters
get dni() { return this.#dni }
get edat() { return this.#edat }
get nacionalitat() { return this.#nacionalitat }
get volsAgafats() { return this.#volsAgafats }

//setters
set dni(newDNI) {
    if (newDNI.length == 9){
        this.#dni = newDNI;
    }
}

set edat(newEdat) { 
    if (newEdat > 0 && newEdat < 120) {
        this.#edat = newEdat;
    }
}

set nacionalitat(newNacionalitat) { this.#nacionalitat = newNacionalitat }
set volsAgafats(newVolsAgafats) { this.#volsAgafats = newVolsAgafats }
    
carbonFootprint () { return this.volsAgafats * this.tons }

toString() { //str. Aquí no posem ni # ni _
        return `
            DNI: ${this.dni} 
            Edat: ${this.edat}
            Nacionalitat: ${this.nacionalitat}
            Vols agafats: ${this.volsAgafats}
            Petjada de carboni: ${this.carbonFootprint()}
            `
    }
}