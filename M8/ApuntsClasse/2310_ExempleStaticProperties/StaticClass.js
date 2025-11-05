"use strict"

class StaticClass {
    // Propietat estàtica
    static saludarTexto = "Hola classe";

    // Mètode estàtic
    static saludar() {
        // Aquí podem fer servir 'this' per referir-nos a la classe mateixa
        console.log(this.saludarTexto); // imprimeix: Hola classe
    }
}

// Accedim directament a la propietat i al mètode sense instància
console.log(StaticClass.saludarTexto); // "Hola classe"
StaticClass.saludar();                  // "Hola classe"

/*
Això sí que és una classe sense constructor. Només té propietats i mètodes estàtics, així que:
    No hi ha cap constructor() definit, i de fet no el necessites perquè no crearàs instàncies amb new StaticClass().
    Tot el que hi ha a dins amb static pertany a la classe mateixa, no a objectes que poguessis crear.
    Si intentessis fer const obj = new StaticClass(); obj.saludarTexto… no funcionaria, perquè saludarTexto no és de la instància, és de la classe.

En resum: aquesta classe és com un contenidor d’eines globals dins del context de la classe, sense instàncies.
*/