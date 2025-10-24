"use strict"

const miCoche = new Car ("Toyota", 1990, 3000); //el this del cotxe és toyota x name, 1990 x year i 3000 x price 
//Vol dir QUIEN me contiene

//construirCoches() //DONA UNDEFINED si mirem x consola
console.log(miCoche._price);

const bici = new Car ("Quechua", 2009, 400); //aqui el this de la bici es diferent, canvia segons l'objecte i el paràmetre
console.log(bici._name);

this._ruedas = ruedas; //en posar aquesta construccio surten 3 puntets a la linia 5
    //q ens diuen q aquesta constructor function podria convertirse en una declaracio d classe.
    //es com una habitacio, tem en una habi on nomes veiem ruedas i motor

