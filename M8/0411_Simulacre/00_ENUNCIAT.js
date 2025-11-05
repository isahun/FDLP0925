"use strict"

/* Una escola d'esports aquàtics vol desenvolupar un petit sistema per gestionar el lloguer de taules de paddle surf.

El sistema ha d'utilitzar classes, herència i pertinença (composició).


Classes de taules
Es demana crear una classe que representi una taula genèrica. Cada taula tindrà:

ID
longitud
precioHora preu de lloguer per hora.
estado "disponible" o "llogada".
A partir d'aquesta classe crear diferents classes derivades

Tabla Flexible: representa taules més estables. El seu preu de lloguer té un suplement del 10% sobre el preu base.
Tabla Rigida: representa taules més tècniques i ràpides. El seu preu de lloguer té un descompte del 5% sobre el preu base.
Tabla Standard: representa taules més fàcils d'utilitzar. El seu preu ha de ser competitiu en el mercat (buscar a internet).
S'ha d'implementar un mètode que calculi el lloguer de les diferents taules

calcularPrecio(horas): retorna el preu total del lloguer segons el nombre d'hores.
calcularPrecio(horas): les classes derivades han de calcular segons el suplement o descompte
Classe Cliente i pertinença
Crea una classe Cliente que representi una persona que pot llogar taules. Ha de contenir:

nombre
dni
any d'inici a l'aplicació
tablasAlquiladas
La classe Cliente ha d'incloure, com a mínim, els següents mètodes: (amb o sense paràmetres)

alquilarTabla():
* Comprova que la taula estigui en estat "disponible".
* Calcula el preu total utilitzant tabla.calcularPrecio(horas).
* Canvia l'estat de la taula a "alquilada".
* Afegeix la taula llogada a la llista de taules
* Retorna un missatge indicant el client, la taula, les hores i el preu total.
devolverTabla():
* Cerca dins de tablasAlquiladas la taula amb aquest codi.
* Si la troba, canvia el seu estat a "disponible"
* Retorna un missatge indicant que la taula ha estat retornada (o un missatge d'error si no es troba).
mostrarTablasAlquiladas(): retorna un text o estructura que llisti les taules que el client té o ha tingut llogades.
Tasques
Crear diverses taules de diferents tipus (flexible, rígida, etc.).
Crear dos o tres clients diferents.
Fer que alguns clients lloguin una o diverses taules.
Mostrar les taules llogades per cada client.
Fer servir o provar els diferents mètodes de les diferents classes
Trobar el client amb el nombre més gran de lloguers
Trobar el client amb més antiguitat a la plataforma

Important
No es podran utilitzar els mètodes d'iteració dels arrays*/