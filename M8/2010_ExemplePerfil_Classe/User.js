"use strict"

class User {

    //PRIMER PART: Constructor
    constructor(userName, DNI, birthDate, email) {
        this._userName = userName;
        this._DNI = DNI;
        this._birthDate = birthDate;
        this._email = email;
    }

    //SEGONA PART: Getters i Setters - FILTRE
    get userName() { //inici de sessió
        return this._userName;
    }

    get DNI() { return this._DNI }
    get birthDate() { return this._birthDate }
    get email() { return this._email }

    toString() {

        return `
            Nom: ${this.userName}
            DNI: ${this.DNI}
            Email: ${this.email}
            Data de naixement: ${this.birthDate}
            `
    }
}