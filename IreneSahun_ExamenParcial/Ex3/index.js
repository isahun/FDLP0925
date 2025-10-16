"use strict"

/*  <!--
Ajuda a l'àlien a envair la terra. Com?
Sol·licita a l'usuari un número. A partir d'aquest número construeix un mapa espacial (un quadrat) dins del qual has de crear un camí perquè l'Àlien arribi al tercer planeta al voltant del sol.

En l'html trobaràs un div amb id "route", aquest no ha de ser modificat, i dins trobaràs un div amb id "result" és on desplegaràs l'aplicació
Dins del JS trobaràs les "const" que has d'usar
S'adjunta un exemple d'un mapa espacial completat (de 9 línies)-->

<input type="number" placeholder="Introdueix un número" id="num">
    <button type="button" onclick="alienMap()">Fes clic</button>
    <p></p>
    <div id="result"></div>
    <scrip src="index.js"></script>
</body>*/

function alienMap() {

const numUser = parseInt(document.getElementById("num").value);
const char1 = "&nbsp; 👽 &nbsp;"
const char2 = "&nbsp; 🛸 &nbsp;"
const resultDiv = document.getElementById("result");
let message = "";
const err1 = "Introdueix un nombre";
const err3 = "El nombre ha de ser superior a 2";

//VALIDACIONS
if (isNaN(numUser) || numUser <= 0) {
    resultDiv.innerHTML = err1;
    return;
}
if (numUser < 2) {
    resultDiv.innerHTML = err3
    return;
}

//OPERACIONS
let i = 0
let j = 0

for (i = 0; i < numUser; i++) { //bucle exterior x files (pla horitz)
let fila = ""
    for (j = 0; j < numUser; j++) { //bucle interior x columns (pla vertic)
        if (i == j) { //si l'index d fila i columna és el mateix, es la diagonal
            fila += char1; 
        } else {
        fila += char2; 
        }
    }
    message += fila + "<br>";
}
resultDiv.innerHTML = message;
}

