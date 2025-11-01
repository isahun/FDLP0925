"use strict"

class Hospital extends Edifici {

    //static vigiM2 = 1000 //el mateix que per defecte a Edifici, pro ho posem x claredat, pro no cal pk heredem getter
    static numApats = 3 //no cal this, fem getter i au
    static tipusEdifici = "Hospital"


    constructor (nom, numPlantes, superficieM2, numPacients) {
        super(nom, numPlantes, superficieM2)
        this._numPacients = parseInt(numPacients);
        //this._vigiM2 = Hospital.vigiM2; //sobreescrivim el valor x defecte d'Edifici, pro again no cal pk heredem getter d edifici
    }

    get numPacients () { return this._numPacients } //es redundant fer això? puc fer directament return hospital.racionsDies?
    get tipusEdifici () { return Hospital.tipusEdifici }
    get numApats() { return Hospital.numApats }

    set numPacients(newNumPacients) { this._numPacients = parseInt(newNumPacients) }

    calcCostVigiHospital() {
        return super.calcCostVigi()[1]
    }

    repartirDinar() {
        let numRacions = this.numPacients * this.numApats
        return `S'estan repartint ${numRacions} racions.`
    }

    toString() {
        return `Tipus d'edifici: ${this.tipusEdifici}
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiHospital()} €.
        Número de pacients: ${this.numPacients}
        Racions a repartir per dia : ${this.repartirDinar()}
        
        `
    }
}

