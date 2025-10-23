"use strict"
class Vol {

    #flightNum; // lunic q necessita privacitat really
//statics (una altra tipus de propietat, com public, privada)

static km = 1000;//PROPIETATS ESTÀTIQUES, les definim a la classe, 
// no al constructor, aixi hem d copiar menys cops i gastem menys espai en memòria
static tons = 0.1;
static count = 1;

//1. Constructor

constructor (flightNum, distanceKm, company, numPassengers, numMotors) {
    this.#flightNum = flightNum;
    this._distanceKm = distanceKm;
    this._company = company;
    this._numPassengers = numPassengers;
    this._numMotors = numMotors;
    this.id = Vol.count++ //metode de classe directament pk es static, de classe
    //this.id serà l'identificador de la instància, el comptador cada cop q es creï una

    //El count va incrementant, com q pertany a la classe no es perd, 
    //i abans d’incrementar presta el seu valor al canto esquerre

    //Si enlloc de this.id = Vol.count ++ fos this.id = ++Vol.count, hauriem de començar el count a 0, pk primer incrementa
    //this.km = 1000; //declarem aqui la constant dels km x tnes de carboni
    //this.tons = 0.1 //declarem aquí la constant de les tones de carboni x la funcio, pro en breus ho treurem
}

//2. Getters i Setters
//getters
get flightNum() { return this.#flightNum }
get distanceKm() { return this._distanceKm }
get company() { return this._company }
get numPassengers() { return this._numPassengers }
get numMotors() { return this._numMotors }

//setters
set flightNum(newFlightNum) { this.#flightNum = newFlightNum } //es igual el nom q posem aqui, importa l'ordre d'arribada, entrelazado cuantico
set distanceKm(newDistanceKm) { this._distanceKm = newDistanceKm }
set company(newCompany) { this._company = newCompany }
set numPassengers(newNumPassengers) { this._numPassengers = newNumPassengers }
set numMotors(newNumMotors) { this._numMotors = newNumMotors }

calcCarbonFootprint () { 
    return ((this._distanceKm / Vol.km) * Vol.tons) * this.numMotors  
    //les propietats estatiques citen directament la classe enlloc del this (k es exclusiu del contingu del constructor)
}

toString() { //str, no posem ni _ ni # pk ja fem servir getters
        return `
            Número de vol: ${this.flightNum} 
            Distància (km): ${this.distanceKm}
            Companyia aèria: ${this.company}
            Número de passatgers: ${this.numPassengers}
            Número motors: ${this.numMotors}
            Petjada de carboni: ${this.calcCarbonFootprint()}
            `
    }
}