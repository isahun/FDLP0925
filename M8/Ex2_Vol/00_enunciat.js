"use strict"

/* 
Fes un programa que permeti donar d'alta, modificar, veure i eliminar vols. La classe vol ha de tenir els atributs: 
número de vol, distància (en km),  companyia, nombre de passatgers, nombre de motors. 
També haurà de contenir un constructor complet i els getters i setters necessaris. 
A més, ha de tenir un mètode calculaPetjadaCarboni() que ha de calcular el CO₂ emès per l'avió tenint en compte que cada motor allibera 0,1 tones de CO₂ cada 1000 km de distància.

Les funcionalitats del programa són les següents:

La funció crearVol() ha de rebre les dades per crear un vol i afegir-lo a un array de vols.

La funció donarDeBaixaVol() ha de rebre el número de vol a donar de baixa. 
Si el vol està dintre de l'array, l'eliminarem i mostrarem un missatge informatiu per pantalla, si no, avisarem per pantalla que el vol no es troba a la nostra aplicació.

La funció veureVol() ha de rebre el número de vol a mostrar. Si el vol està dintre de l'array, 
mostrarem tots els seus atributs i també cridarem al mètode calculaPetjadaCarboni(), si no, avisarem per pantalla que el vol no es troba a la nostra aplicació.

La funció modificarVol() ha de rebre el número de vol a modificar. Si el vol està dintre de l'array, demanarem quin atribut es vol modificar, 
farem la modificació pertinent i mostrarem un missatge informatiu per pantalla. Si no, avisarem per pantalla que el vol no es troba a la nostra aplicació.
 */