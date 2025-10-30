"use strict"

class Cinema extends Edifici {

    static vigiM2 = 3000 //dubte, hem d posarles amb this, o no cal?
    static tipusEdifici = "Cinema"

    constructor (nom, numPlantes, superficieM2, numAssistents, capacitatMax, preuEntrada) {
        super(nom, numPlantes, superficieM2)
        this._vigiM2 = Cinema.vigiM2;
        this._numAssistents = numAssistents;
        this._capacitatMax = capacitatMax;
        this._preuEntrada = preuEntrada;
        this._tipusEdifici = Cinema.tipusEdifici;
        
    }

    get numAssistents() { return parseInt(this._numAssistents) }
    get capacitatMax() { return parseInt(this._capacitatMax) }
    get preuEntrada() { return parseFloat(this._preuEntrada) }

    calcCostVigiCinema() {
        return super.calcCostVigi()[1]
    }

    checkCapacity(numAssistents, capacitatMax) {
        return (numAssistents <= capacitatMax)
    }

    projectarSessio(numAssistents, preuEntrada) {
    if (this.checkCapacity == false) return 
    return (numAssistents * preuEntrada)
    }

    toString() {
        return `
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiCinema().toFixed(2)} €.
        Recaptació: S'han recaptat ${this.projectarSessio(this.numAssistents, this.preuEntrada)} €.
        `
    }
}
