$(document).ready(function() {

    $(function(){
        $('.chek-inner input').customInput();
    });

    $(".pol i").click(function () {
        $(this).toggleClass("activ");
        $(this).siblings('i').removeClass("activ");
    });

});