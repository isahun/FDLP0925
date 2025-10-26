"use strict"
class Client {

    #userDNI;
    #userAge;
    #userNationality;

    static count = 1;

//1. Constructor

constructor (userDNI, userAge, userNationality) {
    this.#userDNI = userDNI;
    this.#userAge = userAge;
    this.#userNationality = userNationality;
    this._userFlights = [];
    this.id = Client.count ++;

}
//2. Getters i Setters

//getters
get userDNI() { return this.#userDNI }
get userAge() { return this.#userAge }
get userNationality() { return this.#userNationality }
get userFlights() { return this._userFlights }

set userFlights(newUserFlights) { 
    this._userFlights = newUserFlights 
}

addClientFlight(userFlight) {
    this.userFlights.push(userFlight);
    userFlight.client = this;
}

toString() { //str. Aquí no posem ni # ni _
        return `
            ID d'usuari: ${this.id} 
            Edat: ${this.userAge}
            Nacionalitat: ${this.userNationality}
            Vols associats: ${this.userFlights}
            `
    }
}