function ip() {         //Aquí es declara una funció que permet recollir l'input de l'usuari. Passa com argument d'una altra funció el valor recollit, 
                        //per despres fer display del resultat de la 2a funció
    var p = false;      //Variable booleana que acollirà el valor boleà resultant de la segona funció a través del condicional de la primera
    var n = prompt("Escoge un número: ");   //Recollim valor de "n" de l'usuari
    if (n > 1) {        //Condició x poder passar "n" com a argument d la segona funció i poder guardar el valor a la variable "p": que "n" sigui més gran que 1
        p = ep(n);      //Assignem a la variable booleana "p" el resultat booleà de la segona funció amb "n" com a paràmetre, que també ha retornat "p"
    }
    alert(p);           //Display del valor de p, variable q recollia el resultat de la segona funció. 
                        //Es mostra false per defecte si el nombre introduït no ha entrat a la condició x ser argument de la segona (per ex n=1, n=0, etc)
}


function ep(n) {        //Aquí, si l'input de l'user (n) supera la validació de la primera funció, es passa com a argument de la funció ep() 
    let p = true;       //Variable amb doble funció: de control per sortir del bucle i de recollir el resultat del bucle de la segona funció
    let i = 2;          //Número pel qual la funció dividirà "n". El valor de "i" ha de ser inicialment 2 per capturar al bucle els valors NO primers, 
                        //és a dir divisibles entre 2 i amb mòdul 0.

    while (p && i < n) {    //Condicions x entrar al bucle que calcularà si n és primer: continua mentre p sigui true i "i" sigui menor que "n"
        if (n % i == 0) {   //Condició en la qual el residu de n / i és 0
            p = false;      //Si es compleix, per ex n=8 (per tant si "n" no és primer) "p" serà FALSE i ja no tornarà a entrar al bucle pk 
        }                   //no superarà la primera part d l'expressió lògica d la condició
                            //Si no es compleix (per exemple n=11), el bucle no troba cap divisor, quan entra al if la "p" MAI canvia a false, 
        i++;                //només s'incrementa la "i" (variable d control), torna a entrar al bucle fins que la "i" incrementa prou 
                            //com per trencar la condició d'entrada al bucle "i < n"
    }
    return p;               //retorna el valor de p, booleà: false si no és primer i true si ho és
}
