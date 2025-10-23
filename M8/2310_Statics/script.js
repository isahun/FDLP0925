"use strict"

const newInstance = new StaticClass() //mala manera

console.log(StaticClass.saludo) //com q saludo esta posat com "static", ens mostra "hola classe" sense generar una instancia, nomes accedint al nom de la classe, podem obtenir "saludar"

StaticClass.saludar() //cridem al metode sense instancia

