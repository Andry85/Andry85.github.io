// JavaScript Document
$(function() {

   $('.menu').slicknav();


    $(".owl-demo").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });
    

    

     // Start choosen
        jQuery(".select-outer select").chosen().change(function(e){
            console.log(e);
        });
    // End choosen

    

    $(".comment__replay").click(function(event) {
        event.preventDefault();
        $(this).parents("div.comment__text").find(".add__comment").toggle();
    });



     $(".cloze,.popap-shadow").click(function() {
        $(".popap-outer").hide();
    });

    $(document).keyup(function(event){
        if (event.keyCode == 27) {
            $(".popap-outer").hide();
        }
    });

    $(".card__link").click(function(event) {
        event.preventDefault();
        $("#card").show();
    });

     $("#edit__profile").click(function(event) {
        event.preventDefault();
        $("#card").hide();
        $("#card__edit").show();
    });

     $("#searchMenu__toogle").click(function() {
        $(this).next("ul").toggle();
        $(this).toggleClass("activ");
        $(this).children(".searchArrow").toggleClass("activ");
    });


    $('.searchMenu__sub').find('a').click(function(e) {
        e.preventDefault();
        var str = $(this).children('span').text();
        $('#searchMenu__toogle b').html(str);
        var strok = $(this).children('i').attr("class");
        $('#searchMenu__toogle i').attr("class", strok);
        $(this).parents(".searchMenu").find(".searchArrow").removeClass("activ");
        $(this).parents(".searchMenu").find(".searchMenu__toogle").removeClass("activ");
        $('.searchMenu__sub').hide();
         
    });

    $(".btn__login").click(function() {
        $(this).next(".form__user").toggle();
        $(this).toggleClass("btn__login__activ");
    });
    
    
    
    $(".share-link").click(function(event) {
        event.preventDefault();
        $(this).next(".share-inner").toggle();
    });
    
    $(".full").click(function(event) {
        event.preventDefault();
        $(this).parents("body").toggleClass("FullScreenMode");  
        
         if ($(this).children("i").text() == "Full screen") {
                $(this).children("i").text("Small screen");
        }
        else {
             $(this).children("i").text("Full screen");
        }
       
    });
    


     $(".carusel-cloze").click(function() {
        $(".carusel-outer").hide();
    });

    $(document).keyup(function(event){
        if (event.keyCode == 27) {
            $(".carusel-outer").hide();
        }
    });
    
    
    $("#add_new_employee").click(function(event) {
        event.preventDefault();
        $("#new_employee").show();
    });
    
    
   





});
//end read


