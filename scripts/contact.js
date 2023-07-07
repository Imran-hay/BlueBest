$(document).ready(function () {
    //hide hider and popup_box
    $("#hider").hide();
    $("#popup_box").hide();

    //on click show the hider div and the message
    $("#showpopup").click(function () {
        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");
       /* $('.con').css("height","30vh");  */
    });
    //on click hide the message and the
    $("#buttonClose").click(function () {

        $("#hider").fadeOut("slow");
        $('#popup_box').fadeOut("slow");
       /*  $('.con').css("height","10vh"); */
    });

    });