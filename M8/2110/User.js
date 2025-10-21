"use strict"

class User {

    //CLASS PROPERTIES
    //privada, publica (js default), estatica
    //no repeticions
    //encapsulat
    //abstracció
    //seguretat

    //ABANS D TOT hem de dir-li aquí que és d'àmbit privat, si nó la tracta com a public by default
    #pass; 
    #email;
    #userName;
    #phoneNum;
    
    //1. Construir

    constructor(userName, pass, email, phoneNum) {
        this.#userName = userName; 
        this.#pass = pass; //aquí també incloem la sintaxi per propietats privades
        this.#email = email;
        this.#phoneNum = phoneNum;
    }

    //2. Manipular: GETTERS VS SETTERS
    //Getter, validacions opcionals
    get userName() { return this._userName }; //validacions opcionals
    //Setter, validacions quasi obligatòries
    set userName(newUserName) { this.#userName = newUserName }; //sense validació
    //set userName(newUserName) { //amb validacions al setter
      //  if (newUserName.length > 2) {
        //    this._userName = newUserName;
        //}
    //}

    get pass() { return this.#pass } //amb això li estem donant una doble capa de protecció
    get email() { return this.#email }
    get phoneNum() { return this.#phoneNum }



    toString() {
        return `
            name: ${this.userName} //treiem la barra baixa perq js llegeix adalt si es public o no
            email: ${this.email}
            phone: ${this.phoneNum}
            
        `
    }
}

//CRUD
    //create - instància
    //read - getter
    //update - setter
    //delete - de DB
