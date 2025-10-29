"use strict"

//extenem d'una classe més antiga, més genèrica, a una per sota jeràrquicament
class Gos extends Animal {

    //properties
    
    //build object:  li passem el k necessita el constructor d Animal, de la classe mare, ho haurem d passar com parametres, i a mes coses q siguin personals d'aquesta classe

    constructor (especie, habitat, genero, raza, tamanyo) {
        super(especie, habitat, genero) //aqui connectem amb la mare, i que espera de mare? 3 param, dons els posem
        this._raza = raza; //aquí connectem amb l'ara i aquí, i amb lo de dalt connectem amb el "passat", amb la classe mare
        this._tamanyo = tamanyo;
    }

sumar() {
    return super.sumar() + 4 
}

}