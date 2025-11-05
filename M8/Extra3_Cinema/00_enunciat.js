"use strict"

/* 
Ens demanen fer un programa orientat a objectes sobre un cinema (només d'una sala) que té un conjunt de seients (3 files per 5 columnes).

Del cinema ens interessa conèixer la pel·lícula que s'està reproduint i el preu de l'entrada al cinema.
De les pel·lícules ens interessa saber el títol, durada, edat mínima i director/a.
De l'espectador/a, ens interessa saber el seu nom, edat i els diners que té.
Els seients són etiquetats per una lletra (columna) i un número (fila), com es mostra a continuació. També haurem de saber si el seient està ocupat.

1A 1B 1C 1D 1E
2A 2B 2C 2D 2E
3A 3B 3C 3D 3E

Realitzarem una petita simulació, en el qual generarem entre 5 i 10 espectadors/es i els asseurem aleatòriament d'un en un (no podem on ja estigui ocupat).

Només es podrà asseure si tenen els suficients diners, hi ha espai lliure i té edat per a veure la pel·lícula, en cas que el seient estigui ocupat li busquem un lliure.

Les dades de l'espectador/a i la pel·lícula poden ser totalment aleatòries.

La simulació haurà d'anar mostrant els passos de càlcul, per exemple:

• Omplint la sala per a la pel·lícula “…” amb preu X € per a majors de X edat.
• Asseient a l'espectador Pedro, amb X anys i X diners.
• L'espectador/a no té suficients diners.
• Asseient a l'espectadora Ana, amb X anys i X diners.
• Asseguda en el seient 1C.
• Asseient a l'espectadora Silvia, amb X anys i X diners.
• L'espectadora no té suficient edat.
• Asseient a l'espectador Daniel, amb X anys i X diners.
• El seient 1C està ocupat, tractant de buscar un altre seient.
• Assegut en el seient 2B.
• …
• S'han gestionat tots els espectadors/es 

*/