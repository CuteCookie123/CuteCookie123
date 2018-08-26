$(document).ready(function() {
   $("#more").click(function () {
       $(this).toggleClass("active");
       $(".view-more").fadeToggle();
   });
    $("#follow").click(function () {
        $(this).hide();
        $("#no-follow").fadeIn();
        $("#more").addClass("green");
    });
    $("#no-follow").click(function () {
        $(this).hide();
        $("#follow").fadeIn();
        $("#more").addClass("active").removeClass("green");
        $(".view-more").fadeIn();
    });
    $("#share").click(function () {

        $(".share-bg").fadeIn();
        $(".share").slideDown();
    });
    $(".share-bg").click(function () {
        $(this).fadeOut();
        $(".share").slideUp();
        $(".special_focus").fadeOut();
    });
    $(".glyphicon-star-empty").click(function () {
        $(this).toggle();
        $("#no-special").toggle();
        $(".share-bg").fadeIn();
        $(".special_focus").fadeIn();
    });
    $(".glyphicon-star").click(function () {
        $(this).toggle();
        $(".glyphicon-star-empty").toggle();
    });
    $(".special_focus").click(function () {
        $(this).fadeOut();
        $(".share-bg").fadeOut();
    });
});