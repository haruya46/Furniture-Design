$(function(){
    $('.header-menu').click(function(){
        $('.nav-menu').show();
        $('#mask').show();
    
    });

    $('#mask').click(function(){
        $('.nav-menu').hide();
        $('#mask').hide();
    
    });


    
});