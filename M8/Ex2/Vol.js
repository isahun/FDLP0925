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

calcCarbonFootprint () { return (this._distanceKm / 1000) * 0.1 }

toString() { //str, no posem ni _ ni # pk ja fem servir getters
        return `
            DNI: ${this.flightNum} 
            Distància (km): ${this.distanceKm}
            Número de passatgers: ${this.numPassengers}
            Número motors: ${this.numMotors}
            Petjada de carboni: ${this.calcCarbonFootprint()}
            `
    }
}