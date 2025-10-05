"use strict"

function selectGenre() {

    let genreSelected = parseInt(document.getElementById("generoPeli").value);

    switch (genreSelected) {
        case 1 :
            console.log("lo que el viento se llevó");
            break;
        case 2 :
            console.log("yo yo mismo e irene");
            break;
        case 3 :
            console.log("el exorcista");
            break;
        case 4 :
            console.log("kill bill");
            break;
        case 5 :
            console.log("el castillo ambulante");
            break;
    }
}