// JavaScript Document

$(function() {

    $('.menu').slicknav();


     $('.services-list li:nth-child(3n+1)').css('marginLeft','0');  

    $('.count').counterUp({

        delay: 10,

        time: 1000

    });



    $(".tab-cols").hover(

        function () {

            $(this).parent(".tab-row").addClass("active");

            $(this).parent(".tab-row").siblings().removeClass("active");

        }

    );



    if ($('#check-agree').is(':checked'))

    {

        $('.acordion').show();

    }

    else {

        $('.acordion').hide();

    };





    $( "#check-agree" ).change(function() {

        var $input = $(this);

        if ($input.prop("checked"))

        {

            $('#acordion').slideDown();

        }

        else {

            $('#acordion').slideUp();

        }

    }).change();





   






});

//end read





