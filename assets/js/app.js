var target = 0;

var cargarPagina = function () {
    // Elementos
    var botones = document.querySelectorAll(".control");
    var anterior = document.querySelector(".previo");
    var siguiente = document.querySelector(".sig");

    //Eventos
    botones.forEach(function(boton){
        boton.addEventListener("click", cambioDeImagen);
    });
    anterior.addEventListener("click", imgAnterior);
    siguiente.addEventListener("click", imgSiguiente);
};

var cambioDeImagen = function () {
    var target = parseInt(this.dataset.target);
    mostrarImagen(target);    
};

var mostrarImagen = function (target) {
    var ultimaSlide = document.querySelector("div.activo");
    var slide = document.querySelector("div[data-slide='" + target + "']");
    ultimaSlide.classList.remove("activo");
    slide.classList.add("activo");
};

var imgAnterior = function (e) {
    e.preventDefault();
    target = target - 1;
    target = (target < 0) ? 3 : target;
    mostrarImagen(target);
};

var imgSiguiente = function (e) {
    e.preventDefault();
    target = target + 1;
    target = (target > 3) ? 0 : target;
    mostrarImagen(target);mostrarImagen(target);
};

window.addEventListener("load", cargarPagina);