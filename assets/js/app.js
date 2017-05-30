var target = 0;

var cargarPagina = function () {
    // Elementos con sus Eventos
    $(".control").click(cambioDeImagen);
    $(".previo").click(imgAnterior);
    $(".sig").click(imgSiguiente);   
};

var cambioDeImagen = function () {
    target=parseInt($(this).data("target"));
    mostrarImagen(target);    
};

var mostrarImagen = function (target) {
    $("div.activo").removeClass("activo");
    $("div[data-slide='" + target + "']").addClass("activo");
    $("button.seleccionado").removeClass("seleccionado");
    $("button[data-target='" + target + "']").addClass("seleccionado");
    
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


$(document).ready( cargarPagina );