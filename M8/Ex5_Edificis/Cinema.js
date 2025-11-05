"use strict"

class Cinema extends Edifici {

    static vigiM2 = 3000 //valor propi de cinema
    static tipusEdifici = "Cinema"

    constructor (nom, numPlantes, superficieM2, numAssistents, capacitatMax, preuEntrada) {
        super(nom, numPlantes, superficieM2)
        this._numAssistents = parseInt(numAssistents);
        this._capacitatMax = parseInt(capacitatMax);
        this._preuEntrada = parseFloat(preuEntrada);
        
        //this._vigiM2 = Cinema.vigiM2; //sobreescrivim el valor x defecte d'Edifici, pro no cal si fem getter d static
        
    }

    get numAssistents() { return this._numAssistents }
    get capacitatMax() { return this._capacitatMax }
    get preuEntrada() { return this._preuEntrada }
    get tipusEdifici() { return Cinema.tipusEdifici } //opcional pro recomanat
    get vigiM2 () { return Cinema.vigiM2 }  //getter x reescriure el valor de vigiM2 de Edifici


    calcCostVigiCinema() {
        return super.calcCostVigi()[1].toFixed(2)
    }

    checkCapacity() {
        return (this.numAssistents <= this.capacitatMax)
    }

    projectarSessio() {
    return (this.numAssistents * this.preuEntrada).toFixed(2)
    }

    toString() {
        return `Tipus d'edifici: ${this.tipusEdifici}
        ${super.toString()}
        Cost mensual vigilància: ${this.calcCostVigiCinema()} €.
        Recaptació: S'han recaptat ${this.projectarSessio()} €.
        
        `
    }
}
