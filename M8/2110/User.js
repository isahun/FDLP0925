"use strict"

class User {

    //no repeticions
    //encapsulat
    //abstracció
    //seguretat

    //1.construir
    //2. manipular

    constructor(userName, pass, email, phoneNum) {
        this._userName = userName;
        this._pass = pass;
        this._email = email;
        this._phoneNum = phoneNum;
    }

    //3. G


    toString() {
        return `
            name: ${this._userName}
            email: ${this._email}
            phone: ${this._phoneNum}
            
        `
    }
}

//CRUD
    //create - instància
    //read - getter
    //update - setter
    //delete - de DB
