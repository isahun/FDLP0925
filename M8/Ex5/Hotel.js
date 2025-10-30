"use strict"

class Hotel extends Edifici {

    static extraVigi = 500;
    static vigiM2 = 1000; //dubte, hem d posarles amb this, o no cal?
    static souNeteja = 1000;
    static habPersona = 20;
    static tipusEdifici = "Hotel"

    constructor (nom, numPlantes, superficieM2, numHab) {
        super(nom, numPlantes, superficieM2) //sempre ha d'anar primer l'extensió ancestral, el fonament de l'hotel
        this._vigiM2 = Hotel.vigiM2; //provar a borrar pk crec q es redundant
        this._habPersona = Hotel.habPersona;  //provar a borrar pk crec q es redundant
        this._numHab = numHab;
        this._tipusEdifici = Hotel.tipusEdifici;

    }

    get numHab() { return parseInt(this._numHab) } 


    set numHab(newNumHab) { this._numHab = parseInt(newNumHab) } //parse int por doquier, potser tb redundant xD

    calcCostVigiHotel() {
        return super.calcCostVigi()[1] + (super.calcCostVigi()[0] * Hotel.extraVigi)
}

calcPersonalNeteja(numHab) {
    let quantPersonal = numHab / Hotel.habPersona;
    let souTotal = quantPersonal * Hotel.souNeteja;
    let arrPersonalNeteja = [quantPersonal, souTotal]

    return arrPersonalNeteja;
}

    toString() {
        return `
        Tipus d'edifici: ${this.tipusEdifici}
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiHotel()} €.
        Número d'habitacions: ${this.numHab}
        Personal necessari: ${this.calcPersonalNeteja(this.numHab)[0]}
        Salari mensual del personal (total): ${this.calcPersonalNeteja(this.numHab)[1]}
        `
    }
}

