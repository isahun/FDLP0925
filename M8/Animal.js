"use strict"

//CADA CLASSE HA DE TENIR LA SEVA PAG DE JS INDEPENDENT

class Animal { //plantilla buida q només cobrarà sentit quan li afegim els valors

    constructor(name, tipo) { 
        this._name = name; //el lado derecho del = és el q vindrà del mon exterior, 
        // i agafarem la info i crearem un clon, que sera l'unic q farem servir dins del constructor i tot plegat
        //d la mateixa manera:
        this._tipo = tipo;

    }


//el que ve als parèntesis és el q vindrà de l'exterior què fem per utilitzar les dades exteriors dins 
// d'un concepte propi o exterior:
    //Amb la paraula THIS, fa referència a DINS  dla classe animal, i concretament a l'animal que s'està creant al moment.

////enlloc d crear un per un cada objecte Animal, q es super tedioso (veure index.js), 
// creem un CONSTRUCTOR, pero a un fitxer nou de js, mirar "Animal.js"

//Desconfiarem sempre del q arribi de l'exterior. Un cop dins, manipulem la info de l'exterior generant una copia,
//un àlies, amb lo de this._"alies", de manera que no farem servir en el futur la info del mon exterior, sino 
//la que s'inclou al THIS argument, al this statement.

//GETTERS & SETTERS (mètode DINS de la classe) aqui entendrem pk fem ._ 
//El guió baix serveix x diferenciar els parametrers dels getters i els setters

//amb aixo d index.js entenem q les propietats d'una classe es poden llegir O modificar
/*animal3.tipo = "paquidermo"
console.log(animal3) //llavors qualsevol persona podria venir i canviar el nom d un user o un animal? posi
animal3.tipo = "ave";
console.log(animal3)*/ 

//aqui neixen els getters i setters, son metodes reservats x posar camp d seguretat:
get tipo(){
    let confirmUser = confirm("Puedes acceder?") //amb aixo posem capa extra d seguretat, anem a index.js a provar

    if (confirmUser === true) { //amb aixo li posem una capa extra de seguretat a l'animal
    return this._tipo
}
}

set tipo(newTipo){
    this._tipo = newTipo;
}

//toString()//un altre metode dins de la classe
//metode q tenen tots els objectes i q ara farem servir x desenv un missatge de dins a fora
toString() { //el q fara aquesta funcio, x obvi q sembli, és passar-ho a string
    return `
        name : ${this._name},
        tipo : ${this._tipo}
    `
}

//mirar exemple W3SCHOOLS audi ford
}