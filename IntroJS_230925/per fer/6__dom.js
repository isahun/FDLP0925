// DOM: Document Object Model 
// Def: Nos permite almacenar, cambiar, añadir y borarr cualquier elemento del documento HTML 
// ------------------------------------------------------------------
window.onload = function() { // espera a que cargue todos los elementos del DOM
    // Almacenamos en una variable un elemento (imagen) con id = "logo" 
    var logo = document.getElementById("logo");
    // alert(logo); // objeto imagen HTML
    logo.style.border = "1px solid red";
    // ----------------------------------------------- 
    // Almacenamos en una variable, varios elementos (imagenes) con class="imagen"
    var imagenes = document.getElementsByClassName("imagen");
    // alert(imagenes); // colección de imágenes
    imagenes[1].style.border = "1px solid red"; 
} 

