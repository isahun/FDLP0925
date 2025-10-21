"use strict"

//ho embolcallem amb una funció 
function createUser() {

    //PAS 1: Catch values i validar
    const userName = document.getElementById("userName");
    
    //PAS 2: INSTANCIAR, CRIDAR EL CONSTRUCTOR
    const newUser = new User(userName, "12345678A", "1992", "ire@test.com") //hardcode

    console.log(newUser);//el mateix q toString a nivell info pero display mes incomode


    //2a PART: LLEGIM NOU USER
    console.log(newUser.toString()); //per llegir les dades del user en format preestablert a la classe, al file "user.js"

    //PAS 3, GUARDAR A DB

    
    //INSTÀNCIA
    const Marcelo = new User ("Marcelo", "87654321Z", "1600", null)
    console.log(Marcelo);
    console.log(Marcelo.toString());
}