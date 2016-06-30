// JavaScript Document
$(function() {
    $('.menu').slicknav();

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


    // Start choosen
        jQuery(".chosen").chosen().change(function(e){

            console.log(e);

        });
    // End choosen


});
//end read


