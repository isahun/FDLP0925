"use strict"


//2910 HERÈNCIA DE CLASSES (as opposed to pertenència de classe)

//vehicle
    //aeris
        //helicopter
        //avió
    //terrestre
        //moto
        //cotxe
        //bici

//generem una relació d'herència pk hi ha una jerarquia, a partir d'aquest concepte

const animal = new Animal ("bird", "jungle", "male");
console.log(animal); //fins aqui el que ja sabem, comprovem q tot va b am aixo


const newPerro = new Gos ("canis lupus", "doméstico", "female", "caniche", "small")
console.log(newPerro)
console.log(newPerro._especie)
console.log(newPerro.genero) //no cal _ pk tenim getter a la classe ancestral
console.log(newPerro._raza) //ara ja hi pot accedir
//ara podem accedir a qualsevol de les propietats

const newCat = new Gat ("felino", "Egipto", "male", true, "heteroctromático")
console.log(newCat);
console.log(newCat.genero); //sense setters no hi podem accedir
console.log(newCat.toString()) //PER VEURE COM S'HEREDA EL TO STRING

const smellyDog = new GosCarrer("canino", "callejero", "male", "perro callejero", "medium", "si") //si l'ultim valor fos un null enlloc de si, seria falsey, llavors donaria true enlloc d smell
//el nom de la constant, smellyDog, no apareix al console log, el pc enten q volem veure el costat dret de l'igual, i passa del nickname, es mes per nosaltres q pel pc
console.log(smellyDog)
console.log(smellyDog.genero)
smellyDog.sonido()
//Perro de la calle de d un prototip q es diu perro , el cual alhora ve d'un prototip q es diu animal.

const smellyCat = new GatCarrer ("felino", "callejero", "female", false, "gris", true);
console.log(smellyCat)
smellyCat.sonido() //tot i q esta a animal el metode, hi podem accedir desd la classe smelly cat
console.log(smellyCat.toString()) //en cas q no vulguem SOBREESCRIURE sino REUTILITZAR

//Els mètodes s'hereden de pares a fills, i de fills a néts, l'herència no se salta generacions. Si no troba res q estigui sobreescrivint el mètode agafara l'original, el d la classe ancestral ( crec)