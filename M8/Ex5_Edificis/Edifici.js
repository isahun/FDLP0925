"use strict"

class Edifici {

    static superficieMinut = 5;
    static minsExtraPlanta = 0.5;
    static euroPerMin = 1;
    static diesMes = 30;
    static vigiCost = 1300;
    static vigiM2 = 1000; //comú a 2 de 3 subclasses, fer getter i nomes sobreescriure static a cinema

    constructor ( nom, numPlantes, superficieM2 ){
        this._nom = nom;
        this._numPlantes = parseInt(numPlantes);
        this._superficieM2 = parseInt(superficieM2);
        //this._vigiM2 = 1000; //valor x defecte, sobreescrit a cinema, x aixo no estatic, pero millor crear un getter q s'heredi mentre no se sobreescrigui
    }


    get nom() { return this._nom }
    get numPlantes() { return this._numPlantes } //els getters s'hereden? respost a classe si
    get superficieM2() { return this._superficieM2 }
    get vigiM2() { return Edifici.vigiM2 }

    netejar() {

    let tempsTotal = this.superficieM2 / Edifici.superficieMinut;

    if (this.numPlantes > 1) {
        tempsTotal += (this.numPlantes - 1) * Edifici.minsExtraPlanta;
    }

    let costMensual = tempsTotal * Edifici.euroPerMin * Edifici.diesMes;
    const arrEdifici = [tempsTotal, costMensual];

    return arrEdifici;
    }

    calcCostVigi() {
        let numVigi = Math.ceil(this.superficieM2 / this.vigiM2);
        let costVigiTotal = numVigi * Edifici.vigiCost;
        let arrCostVigi = [numVigi, costVigiTotal]
        return arrCostVigi;
    }

    toString() {
        return `
        Nom: ${this.nom}
        Plantes: ${this.numPlantes}
        Superfície (m2): ${this.superficieM2}
        Temps total de neteja: ${this.netejar()[0]} minuts.
        Cost mensual de neteja: ${this.netejar()[1]} €.
        Número de vigilants: ${this.calcCostVigi()[0]} persones.
        `
    }
    
}
