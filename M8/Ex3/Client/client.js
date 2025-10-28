"use strict"
class Client {

    #userDNI;
    #userAge;
    #userNationality;
    #userFlights

    static count = 0;

//1. Constructor

constructor (userDNI, userAge, userNationality) {
    this.#userDNI = userDNI;
    this.#userAge = userAge;
    this.#userNationality = userNationality;
    this.#userFlights = [];
    this.id = ++Client.count;

}
//2. Getters i Setters

//getters
get userDNI() { return this.#userDNI }
get userAge() { return this.#userAge }
get userNationality() { return this.#userNationality }
get userFlights() { return this.#userFlights }

set userDNI(newUserDNI) { this.#userDNI = newUserDNI }
set userAge(newUserAge) { this.#userAge = newUserAge }
set userNationality(newUserNationality) {this.#userNationality = newUserNationality}
set userFlights(newUserFlights) { this.#userFlights = newUserFlights }


addClientFlight(userFlight) { //per afegir un vol i que quedi guardat dins de l'array de vols de cada instancia de client
    //traduït això fa newClient.addCliengFlight(newFlight)
    this.userFlights.push(userFlight); //el THIS es refereix a la instancia concreta d Client q ha cridat el mètode
    //Si tenim "this.userFlights", this === newClient, userFlights és l'array d vols dins de cada client, fins aquí associem VOL a CLIENT, falta la inversa:
    userFlight.client = this; //en aquesta línia, ".client" assigna una propietat al userFlight, 
    // en concret la propietat és la instància de client (this) q crida al mètode
}

toString() { //str. Aquí no posem ni # ni _
        return `
            ID d'usuari: ${this.id} 
            Edat: ${this.userAge}
            Nacionalitat: ${this.userNationality}
            
            Número de vols: ${this.userFlights.length}
            Vols associats: ${this.userFlights.join("<br>")}
            `
        }
}