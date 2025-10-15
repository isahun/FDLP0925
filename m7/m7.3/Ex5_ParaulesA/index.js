"use strict"

/*<!--Donat un array de paraules introduïdes per l’usuari/ària. Digues el nombre de paraules que contenen la lletra ‘a’ i mostra-les per pantalla.
-->
<p>Introdueix paraules:</p>
<input type="text" placeholder="Introdueix una paraula" id="wordUser">
<p></p>
<button type="button" onclick="wordsWithA()">Fes clic</button>
<p></p>
<div id="result"></div>
<script src="index.js"></script>*/

function validateWord(userWord) {
    return userWord.trim() == "" || !isNaN(userWord) 
}

function namesArray () {
        const userWord = document.getElementById("userWord").value;
        const userWordArr = [];

        userWordArr.push(userWord);
}

/*function wordsWithA() {
    const userWord = document.getElementById("userWord").value;
    const resultDiv = document.getElementById("result");
    const userWordArr = [];
    const userAWordArr = [];
    
    const err = "Has d'introduir una paraula."

    let message = "";

if (validateWord(userWord)) return resultDiv.innerHTML = err;

let firstChar = userWord.charAt(0).toLowerCase();

userWordArr.push(userWord);

if (firstChar == "a") {
userAWordArr.push(userWord);
}

resultDiv.innerHTML = `Hi ha ${userAWordArr.length} paraules amb A a la teva llista: ${userAWordArr.join("<br>")}`

}*/


