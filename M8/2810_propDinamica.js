"use strict"


const pers = {
    firstName: "pepe",
    ID: 123,
    age: 23
}

pers["firstName"]
pers["ID"]

let property = "ID"
pers[property]

const arrKeysPers = ["firstName", "ID", "age"] //Object.Keys(pers) //Object.values(pers)

for (let index = 0; index <arrKeysPers.length; index ++) {
    const property = arrKeysPers[index]
    console.log(property)
    console.log(pers[property]); // "pepe", 123, 23
    pers.ID //posem en pràctica
} 
//si no coneixem la propietat d'avantma va be fer això
//amb auqet for loop estem assignant la variable property i agafant les keys d cada posició
//a sota fem servir les keys x accedir als valors dels objectes

