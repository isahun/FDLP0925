"use strict"
class Vol {

#flightNum; 

static tons = 0.5;
static count = 1;
static compensaCO2 = 5;

//1. Constructor

constructor (flightNum, company, distanceKm) {
    this.#flightNum = flightNum;
    this._company = company;
    this._distanceKm = distanceKm;    
    this._client = null; //de moment està buit pk no té cap client assignat
    this.id = Vol.count++ //metode de classe directament pk es static, de classe
}

//2. Getters i Setters
//getters
get flightNum() { return this.#flightNum }
get company() { return this._company }
get distanceKm() { return this._distanceKm }
get client() { return this._client }

set client(newClient) { this._client = newClient; }
set company(newCompany) { this._company = newCompany; }
set distanceKm(newDistanceKm) { this._distanceKm = newDistanceKm; }

calcCarbonFootprint () { //L’empremta de carboni i la compensació són valors derivats, no atributs fixos. Per tant, no cal guardar-los ni inicialitzar-los al constructor.
    return this.distanceKm * Vol.tons;    //les propietats estatiques citen directament la classe enlloc del this (k es exclusiu del contingut del constructor)
}

compensateCO2() {
    let clientFootprint = this.calcCarbonFootprint();
    return clientFootprint * Vol.compensaCO2;
}

toString() { //str, no posem ni _ ni # pk ja fem servir getters
        return `Número de vol: ${this.flightNum} 
            Distància (km): ${this.distanceKm}
            Companyia aèria: ${this.company}
            `
    }
}