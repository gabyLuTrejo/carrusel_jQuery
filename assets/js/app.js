
$(document).ready(function(){
	console.log("Hola! jQuery");
});

var indice = 0;

$(document).ready(function(){
	$("#dot0").addClass("active");
    $("#dot0").click(function(){
        $("img").hide();
        $("#img0").show();
        $(".dot").removeClass("active");
        $("#dot0").addClass("active");
        return indice = 0;
    });
    $("#dot1").click(function(){
        $("img").hide();
        $("#img1").show();
        $(".dot").removeClass("active");
        $("#dot1").addClass("active");
        return indice = 1;
    });
    $("#dot2").click(function(){
        $("img").hide();
        $("#img2").show();
        $(".dot").removeClass("active");
        $("#dot2").addClass("active");
        return indice = 2;
    });
    $("#dot3").click(function(){
        $("img").hide();
        $("#img3").show();
        $(".dot").removeClass("active");
        $("#dot3").addClass("active");
        return indice = 3;
    });
    $("#dot4").click(function(){
        $("img").hide();
        $("#img4").show();
        $(".dot").removeClass("active");
        $("#dot4").addClass("active");
        return indice = 4;
    });
});



$(document).ready(function(){
	// Flecha siguiente
	$("#sig").click(function(){
		var siguiente = $("#carruselSecc").children();
		var dots = $("section").children(".dot");
		$("img").hide();
    	$("#img" + indice).next().show();
        $(".dot").removeClass("active");
        indice++;
        $("#dot" + indice).addClass("active");
    });
});