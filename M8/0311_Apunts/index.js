"use strict"

const juguetes = [
    "cotxe",
    "nina",
    "canicas",
    "cuerda",
    "paper",
    "legos"
]

const arrNums = [1,2,3,4,5,6,7]
console.log(arrNums)
//x veure q es un element compost i podem treure molta info

//map (arrow)

//arrNums.map((element) => { return element * element }) ES DESTRUCTIU //podem treure els parentesis d'element pk nomes te un parametre, i volem q ens torni element * element
//ara recorre un per un els elements de l'array i els multiplica x si mateix
//no estem guardant aquesta info, no l'estem emmagatzemant ara mateix
//element es una variable amb el nom q permeti rebre el valor (com q es una funcio q itera), q rebi el valor de cada valor de l'array

const newArrMap = arrNums.map((element) => { return element * element })
console.log(newArrMap);

//fa el mateix que map pero artesanal
const newArrMap2 = new type(arguments);
for (let i = 0; i < arrNums.length; i++) {
    const element = arrNums[i]
    newArrMap2.push(element * element) //si fem (element * [i]) multipliquem l'element per la posicio en q es troba a l'array
}
console.log(newArrMap2)

const newArrStrMap = juguetes.map( juguete => "producte:" + juguete )
console.log(newArrStrMap)

//filtre
const juguetesFilter = juguetes.filter( juguete => juguete === "cuerda" || juguete.length === 4 ) //nomes ens treu els valors q siguin o corda, o long de 4, filtrem array original
console.log(juguetesFilter)

//com fariem filtre artesanalment?
const juguetesFiltered = [];
for ( let i = 0; i < juguetes.length; i++ ) {
    const juguete = juguetes[i];
    if (juguete === "cuerda" || juguetes.length === 4) {
        juguetesFiltered.push(juguete)
    }
}

//foreach, no ens torna l'array, fa algo amb l'array, no modifica l'array original, NO TÉ VALOR DE RETORN, torna undefined. Si nomes necessitem q faci l'acció, fem un forEach
//vol dir per a cada, fa alguna cosa per a cada valor de l'array

arrNums.forEach( (num, index) => console.log(`El numero ${num} esta a la posició ${index} i el resultat per 2 és ${num * 2}`)) //x netejar input
inputs.forEach(input => input.value = "") //x netejar inputs sense bucle

//com fariem forEach artesanalment?
for (let index = 0; index < arrNums.length; index++) {
    const element = arrNums[index];
    console.log(`El numero ${element} esta a la posició ${index} i el resultat per 2 és ${element * 2}`)
}

//puta merda de les edats


//find, ens torna ELEMENT o UNDEFINED

const juguetesFind = juguetes.find(juguete => juguetes.length === 4) //es queda am el primer valor de 4 caracters k troba, o undefined si no ho troba
console.log("")
console.log(Array.isArray(juguetesFind)) //false, es un string

//modo artesanal, COM EL DE BUSCAR ELEMENTS find dni, etc, en aquet cas com q nomes necessitem el final no sera un bucle FOR, determinat, sino un DO WHILE indeterminat, pk no sabem quan ho trobara, i no cal q recorri tot l'array, nomes fins q ho trobi
let found = undefined; //aqui ja tenim undefined
let i = 0;

do {
    if (juguetes[i].length === 3) {
        found = juguetes[i]
    }

    i++
} while ( i < juguetes.length && found == undefined)

    //sort

    
    //const arrNums = [1,2,3,4,5,6,7]
    //console.log(arrNums)
    arrNums.sort( (a, b) => a - b ) //segons si es 1 o -1 sabra si un es mes gran q l'altre
    //si volem q ens compti al reves, fem b-a, ordre decreixent, descens

//some() i every() retornen BOOLEÀ

const sonPositivos = arrNums.every(num => num > 0)
console.log( "son positivos?", sonPositivos )
    
    //every() no es fa amb for, pk si preguntem si tots son negatius i un ja es positiu no cal arribar al final del bucle
    let isFound = false;

//artesanal every
    do {
        if (arrNums[i] < 0) {
            foundNegative = true;
        }
        i++
    } while (i < arrNums.length && foundNegative === false)

    //son positivos?
    console.log(foundNegative);
    let message = foundNegative ? "todos son negativos" : "todos son positivos";
    console.log("Son negativos?", message)

//FIND, FILTER, SOME, FINDINDEX practica, IMPORTANT X EXAMEN

const juguetes2 = [
    { id: 1, name : "coche" },
    { id: 2, name : "nina" },
    { id: 3, name : "canicas" },
    { id: 4, name : "cuerda" },
    { id: 5, name : "papel" }, 
]

const papel = juguetes2.find(element => element.name == "papel")

const mayores3 = juguetes2.filter( element => element.id > 3)
console.log(mayores3); // [{}, {}]
console.log(mayores3[0].name) //aixi accedim a la propietat nom de l'objecte amb index [0]

//ara per saber si hi ha algun objecte amb length === 4, fem servir SOME

const existeElemento = juguetes2.some(element => element.name.length === 4)
console.log(existeElemento);

//includes, same concept, dins d'aquest array s'inclou aquet valor?

//findIndex, per saber en quina posició es troba canica, per exemple
const posicioCanicas = juguetes2.findIndex(element => element.name === "canicas")
console.log(posicioCanicas)


