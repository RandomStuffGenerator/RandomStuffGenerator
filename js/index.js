$(document).ready(function() {
    $(".hover").on("touchstart touchend", function(e) {
        $(this).toggleClass("hover_effect");
    });
});