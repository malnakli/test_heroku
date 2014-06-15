$(window).load(function() {


    $(".clickme").click(function () {
        $("#book").fadeOut("slow", function () {
            // Animation complete.
        });
    });

});