"use strict"

class GosCarrer extends Gos {

    constructor (especie, habitat, genero, raza, tamanyo, smell) {
        super(especie, habitat, genero, raza, tamanyo) //super smpre abans d this
        this._smell = smell || true //aixo es nou, es una manera d poder assignar valor, per assignar un valor per defecte al paràmetre per si ens oblidem d donarli un valor al paràmetre. Si arriba info x param smell, farem servir smell, pero si arriba algo falsey torna true? crec
    }


    sonido() {
        console.log("guau guau")
    }

    sumar() {
    return super.sumar() + 8 
}
} //aqui estem sobreescrivint, busquem un comportament unic, personalitzem les plantilles, 