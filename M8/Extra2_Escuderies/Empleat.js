"use strict"

class Empleat {

    static souBase = 50000 //no fem getter

    constructor (nom, primerCognom, edat, antiguitat) {
        this._nom = nom;
        this._primerCognom = primerCognom;
        this._edat = edat;
        this._antiguitat = antiguitat;
        this._sou = 0; //si posem lo static seria redundant
    }

    get nom() { return this._nom }
    get primerCognom() { return this._primerCognom }
    get edat() { return this._edat }
    get antiguitat() { return this._antiguitat }
    get sou() { return this._sou }

    set nom(newName) { this._nom = newName }
    set primerCognom(newPrimerCognom) { this._primerCognom = newPrimerCognom }
    set edat(newEdat) { this._edat = newEdat }
    set antiguitat(newAntiguitat) { this._antiguitat = newAntiguitat }



}