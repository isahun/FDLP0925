"use strict"

class GatCarrer extends Gat {

    constructor(especie, habitat, genero, bigote, colorOjos, pulgas) {
        super(especie, habitat, genero, bigote, colorOjos)
        this._pulgas = pulgas;
    }

    toString() { //volem que gatcarrer, retutilitze el toString d Animal
        return `
        ${super.toString()}
        
        Pulgas: ${this.pulgas}`
    }
}