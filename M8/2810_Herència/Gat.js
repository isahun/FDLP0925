"use strict"

class Gat extends Animal {

    constructor (especie, habitat, genero, bigote, colorOjos) {
        super(especie, habitat, genero) //aqui connectem amb la mare, i que espera de mare? 3 param, dons els posem
        this._bigote = bigote; //aquí connectem amb l'ara i aquí, i amb lo de dalt connectem amb el "passat", amb la classe mare
        this._colorOjos = colorOjos;
    }

    toString() {//amb aixo del super portem el resultat del tostring del metode superior a la classe derivada, a partir d'aqui podem incloure la info d aquesta classe, la present, gat
        return `
        ${super.toString()}
        Bigotis: ${this._bigote}
        Color d'ulls: ${this._colorOjos}
        `
    }
}

//si intentem accedir a una propietat privada desde la classe, nO PODEM accedir desd fora d animal snse un getter
