"use strict"
class Vol {

    #flightNum; // lunic q necessita privacitat really
    
//1. Constructor

constructor (flightNum, distanceKm, company, numPassengers, numMotors) {
    this.#flightNum = flightNum;
    this._distanceKm = distanceKm;
    this._company = company;
    this._numPassengers = numPassengers;
    this._numMotors = numMotors;
    this.km = 1000; //declarem aqui la constant dels km x tnes de carboni
    this.tons = 0.1 //declarem aquí la constant de les tones de carboni x la funcio, pro en breus ho treurem
}

//2. Getters i Setters
//getters
get flightNum() { return this.#flightNum }
get distanceKm() { return this._distanceKm }
get company() { return this._company }
get numPassengers() { return this._numPassengers }
get numMotors() { return this._numMotors }

//setters

set flightNum(newFlightNum) { this.#flightNum = newFlightNum }
set distanceKm(newDistanceKm) { this._distanceKm = newDistanceKm }
set company(newCompany) { this._company = newCompany }
set numPassengers(newNumPassengers) { this._numPassengers = newNumPassengers }
set numMotors(newNumMotors) { this._numMotors = newNumMotors }

calcCarbonFootprint () { return ((this._distanceKm / this.km) * this.tons) * this._numMotors }

toString() { //str, no posem ni _ ni # pk ja fem servir getters
        return `
            Número de vol: ${this.flightNum} 
            Distància (km): ${this.distanceKm}
            Número de passatgers: ${this.numPassengers}
            Número motors: ${this.numMotors}
            Petjada de carboni: ${this.calcCarbonFootprint()}
            `
    }
}