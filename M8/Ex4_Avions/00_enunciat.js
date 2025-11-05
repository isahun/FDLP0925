"use strict"

/* Fes un programa que contingui la classe Avió i les classes derivades Avió Comercial, Avioneta i Jet privat.

Has de programar les opcions:

Donar d'alta avió.
Eliminar avió.
Mostrar avió (quan mostrem un avió, mostrem totes les seves dades i també cridem als mètodes propis d'aquest avió en concret).
No s'instanciarà cap objecte de la classe Avió, sinó que només s'instanciaran objectes de les classes derivades.

Els atributs comuns a totes les classes seran el número de avió, la marca, model, càrrega (en kg) i llargària (en metres).

S'ha de crear un mètode a la classe adient que permeti calcular els minuts necessaris per netejar l'avió. 
Per netejar un avió comercial s'ha de multiplicar el llarg de l'avió per 10 minuts i afegir un plus de 240 minuts per la part de fora. 
Per netejar una avioneta s'ha de multiplicar el llarg de l'avioneta per 10 minuts i dividir-ho entre 2. 
Finalment, per netejar un jet s'ha de multiplicar el llarg del jet per 10 minuts, dividir-ho entre 2 i afegir un plus de 15 minuts.

També s'ha de crear un mètode a la classe adient que calculi el combustible necessari. 
Per aquest càlcul s'ha de multiplicar la longitud de l'avió per la càrrega (el resultat seran els litres de combustible necessaris).

L'avió comercial té un nombre de persones dintre i el mètode calcularCostMenjar() ha de calcular el cost total del menjar 
en funció d'aquestes persones, tenint en compte que el menjar de cada persona costa 10 €.

L'avioneta pot recórrer una distància en concret en funció del nombre d'hèlixs que tingui. 
El mètode calcularDistancia() ens ajudarà a fer aquest càlcul tenint en compte que per cada hèlix podem recórrer 1.000 km.

El jet privat té un nombre de persones dintre i el mètode calcularCostReserva() ha de calcular 
el cost de la reserva del jet tenint en compte que per cada persona es paguen 1.000 €. El nombre màxim de passatgers és de 10.

*/