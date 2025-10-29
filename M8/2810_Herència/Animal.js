"use strict"

class Animal {

    #genero

    constructor(especie, habitat, genero) {
        this._especie = especie,
        this._habitat = habitat,
        this.#genero = genero
    }

get genero() {return this.#genero} //posem un getter a l'ancestre per poder obtenir desd script, de manera q en eliminar el underscore tenim el getter, no la propietat

sonido(){
    console.log("fa soroll");
}

toString() {//a genero si hi ha getter, als dos d dal no, mala praxis. hem posat tostring al mes antic, x ferli un metode tb tostring a gato de la calle (mirar js)
    return `
        Especie: ${this._especie}
        Hábitat: ${this._habitat}
        Gènere: ${this.genero} 
    `
}

sumar() {
    return 2 + 2 
}
}