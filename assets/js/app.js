
$(document).ready(function(){
	console.log("Hola! jQuery");
});

$(document).ready(function(){
	$("img").hide();
    $("#img0").show();
    $("#dot0").click(function(){
        $("img").hide();
        $("#img0").show();
    });
    $("#dot1").click(function(){
        $("img").hide();
        $("#img1").show();
    });
    $("#dot2").click(function(){
        $("img").hide();
        $("#img2").show();
    });
    $("#dot3").click(function(){
        $("img").hide();
        $("#img3").show();
    });
    $("#dot4").click(function(){
        $("img").hide();
        $("#img4").show();
    });
});