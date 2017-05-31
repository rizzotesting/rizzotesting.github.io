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

        $("#v1").click(function () {
            $("#showcase").attr('src', "https://www.youtube.com/embed/l_2D_9q123A?autoplay=1");
        });

        $("#v2").click(function () {
            $("#showcase").attr('src', "https://www.youtube.com/embed/9vpJOsTdXW4?autoplay=1");
        });

        $("#v3").click(function () {
            $("#showcase").attr('src', "https://www.youtube.com/embed/-xJKFgJlh50?autoplay=1");
        });

        $("#v4").click(function () {
            $("#showcase").attr('src', "https://www.youtube.com/embed/9NizHS4dBqM?autoplay=1");
        });

        $("#v5").click(function () {
            $("#showcase").attr('src', "https://www.youtube.com/embed/YjY6yJBZElM?autoplay=1");
        });

        $("#vdefault").click(function () {
            $("#showcase").attr('src', "https://player.vimeo.com/video/147391753?title=0&byline=0&portrait=0&quality=1080p&loop=1&autoplay=1&background=1");
        });
});