$(document).ready(
    function(){

    	$("#overlay").hide();
    	$(".overlay-about").hide();
    	$(".overlay-event").hide();

        $(".close").click(function () {
            $("#overlay").hide();
            $(".overlay-about").hide();
            $(".overlay-event").hide();
        });

        $("#about").click(function () {
            $("#overlay").show();
            $(".overlay-about").show();
            $(".overlay-event").hide();
        });

        $("#event").click(function () {
            $("#overlay").show();
            $(".overlay-about").hide();
            $(".overlay-event").show();
        });
});