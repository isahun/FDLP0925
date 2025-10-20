"use strict"

const animal =  {
    name : "lassie",
    tipo : "perro"
}
const animal2 =  {
    name : "parrotpirat",
    tipo : "loro"
}
const animal3 =  {
    name : "dumbo",
    tipo : "elefante"
}

//enlloc d fer aixo d dalt  q es super tedioso fem lo de sota, un CONSTRUCTOR, pero a un fitxer nou de js 
//mirar "Animal.js"

//Desconfiarem sempre del q arribi de l'exterior. Un cop dins, manipulem la info de l'exterior generant una copia,
//un àlies, amb lo de this._"alies", de manera que no farem servir en el futur la info del mon exterior, sino 
//la que s'inclou al THIS argument, al this statement.

//ara fem servir la classse q es diu animal (Animal.js) per:

const perroLassie = new Animal("lassie", "perro"); //per crear un obj a partir del motlle Animal i dels paràmetrers q hi hem indicat
const copito = new Animal ("copito", "gorila");
const hormigaAtomica = new Animal ("hormiga", "Hormiga atómica")

console.log(perroLassie)

let userName = new String ("pepe"); //aixo q vem dir q no s'utilitzava pk ja sap el tipus sense especificar-li
//amb boolean i strings no es fa servir, pero same shit que lo del constructor

//i si ara fem el mateix amb la resta d'animals?
console.log(copito); //cridem a les propietats, a sota cridem al metode toString()
console.log(hormigaAtomica.toString()); //ara passem a donar un metode per imprimir, treure info cap a fora, 
// el metode toString() el toString() amb arrays ens passava a string el result d un array, i en aquet cas tb transorma l'objecte a string
//Si vulguessim treure la info d cadascun dels users d una llista de noms, o d'usuaris, toString() a cada objecte i bucle for
console.log(hormigaAtomica._name);
console.log()

//hi ha classes, les q no busquen construir, q no tenen constructor

//amb aixo entenem q les propietats d'una classe es poden llegir O modificar
animal3.tipo = "paquidermo" //setter
console.log(animal3) //getter 
animal3.tipo = "ave";
console.log(animal3)

console.log("check confirm: " + hormigaAtomica.tipo) //GETTER: creant un getter, ho posem en un console.log x tenir output
//desde la classe hem creat una lògica que li pregunta a l'usuari si pot accedir, i només si hi pot accedir
//podrà llegir el missatge tipo.hormiga. Si al confirm posem no, no es podra llegir

hormigaAtomica.tipo = "gato"; //només ens permetrà fer aquesta modificació si tenim els permisos indicats, pero no s'apliquen pk no podem accedir
console.log("check confirm: " + hormigaAtomica.tipo) //un altre GETTER, podem llegir, pero modificar en funcio de que contestem al confirm
//llavors qualsevol persona podria venir i canviar el nom d un user o un animal? posi (anem a animal.js)

