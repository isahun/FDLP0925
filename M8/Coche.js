"use strict"

//class Coche

function construirCoches(ruedas,motor) {
    //propietats default, no cal delararles
    //mètodes

    console.log(this);
    
    this._ruedas = ruedas; //en posar aquesta construccio surten 3 puntets a la linia 5
    //q ens diuen q aquesta constructor function podria convertirse en una declaracio d classe.
    //es com una habitacio, tem en una habi on nomes veiem ruedas i motor
}

const miCoche = new construirCoches(4, "2500"); //el this del cotxe son 4, vol dir QUIEN me contiene
//construirCoches() //DONA UNDEFINED si mirem x consola
console.log(miCoche._ruedas);

const bici = new construirCoches(2, null); //aqui el this de la bici es 2, el this canvia segons l'objecte i el paràmetre
console.log(bici._ruedas);

