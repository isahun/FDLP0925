"use strict"

function createUser() {
    const userName = document.getElementById("userName").value;
    const pass = document.getElementById("pass").value;
    const email = document.getElementById("email").value;
    const phoneNum = document.getElementById("tel").value;
    const resultDiv = document.getElementById("result");
    const err = "Introdueix un valor vàlid."
    
    if (!userName || !pass || !email || !phoneNum) return resultDiv.innerHTML = err;
    //Validem a través de negar la variable en la condició,
    //per que doni error si inclou TOTS els falsy: VALIDACIÓ MÉS ROBUSTA

    //Error si value = undefined, null, NaN, "", 0. 
    // Per molt que un text sigui NaN en el sentit que no és un valor numèric, 
    //no és error NaN, perquè NaN només surt quan intentes fer una 
    //operació amb nombres i falla, no quan s'escriu text.

    //En el futur farem catch values (recollir inputs) i validarem en un arxiu js separat.

    //INSTÀNCIA DE CLASSE (abans l'hem de crear en un altre file .js)
    const newUser = new User (userName, pass, email, phoneNum)
    console.log(newUser);
    resultDiv.innerHTML = `<pre> ${newUser.toString()} </pre>` 
    //resultDiv.innerHTML = newUser //sense cridar el metode hem pogut comunicar-nos amb el mon exterior

    //GUARDAR DADES
    users.push(newUser);
    console.log(users); //array al file DDBB.js on emmagatzemem els usuaris q es van creant

    //Mentre la pàgina no es refresqui un cop fet el goLive estarem construint una cosa q sobreviu, 
    //que recorda, que persisteix al botó, a cada clic guardem un nou user

    console.log(newUser._userName); //getters x accedir a la propietat nom de newUser
    console.log(newUser.pass); //getter x accedir a la propietat pass, d'àmbit privat, ho llegeix 



}