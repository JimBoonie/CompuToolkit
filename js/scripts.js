(function () {
    button_toggle = [false]

    $("#options-1").hide();

    $( "#button-1" ).click(function() {
        if(button_toggle[0]) {
            $("#options-1").animate({height:"0%"},500);
            $("#options-1").removeClass("do-show");
            button_toggle[0] = false;
        }
        else {
            $("#options-1").show();
            $("#options-1").addClass("do-show");
            $("#options-1").animate({height:"30%"},500);
            button_toggle[0] = true;
        }

    });

})();
