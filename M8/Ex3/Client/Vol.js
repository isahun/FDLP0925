"use strict"
class Vol {

#flightNum; 

static tons = 0.5;
static count = 1;

//1. Constructor

constructor (flightNum, distanceKm, company) {
    this.#flightNum = flightNum;
    this._distanceKm = distanceKm;
    this._company = company;
    this._client = null; //de moment està buit pk no té cap client assignat
    this.id = Vol.count++ //metode de classe directament pk es static, de classe
    //this.id serà l'identificador de la instància, el comptador cada cop q es creï una

}

//2. Getters i Setters
//getters
get flightNum() { return this.#flightNum }
get distanceKm() { return this._distanceKm }
get company() { return this._company }
get client() { return this._client }

set client(newClient) { this._client = newClient; }


calcCarbonFootprint () { 
    return parseFloat((this.distanceKm * Vol.tons))
    //les propietats estatiques citen directament la classe enlloc del this (k es exclusiu del contingu del constructor)
}


toString() { //str, no posem ni _ ni # pk ja fem servir getters
        return `
            Número de vol: ${this.flightNum} 
            Distància (km): ${this.distanceKm}
            Companyia aèria: ${this.company}
            `
    }
}