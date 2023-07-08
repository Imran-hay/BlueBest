$(document).ready(function () {
    //hide hider and popup_box
    $("#hider").hide();
    $("#popup_box").hide();

    $("#contact-header").css("display","none");
    //on click show the hider div and the message
    $("#showpopup").click(function () {
        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");
        $("#contact-header").css("display","inline");
       
       /* $('.con').css("height","30vh");  */
    });
    //on click hide the message and the
    $("#buttonClose").click(function () {

        $("#hider").fadeOut("slow");
        $('#popup_box').fadeOut("slow");
        const x = document.getElementById("cbg");
        x.classList.remove("box");

        $("#contact-header").css("display","none");

        
      
       /*  $('.con').css("height","10vh"); */
    });

    });