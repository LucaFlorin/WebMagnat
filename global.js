$(document).ready(function(){
    $('.icon_inner2').click(function(){
        $('.search_section').toggleClass('search_section_active');
    });

    $('.burger').click(function(){
        $('.sidenav').toggleClass('sidenav_active');
    });


    $('.burger_menu').click(function(){  
        $(this).toggleClass('burger_menu_active');
        $('.line1').toggleClass('line1_active');
        $('.line2').toggleClass('line2_active');
        $('.line3').toggleClass('line3_active');
        $('.sidenav').toggleClass('sidenav_active');
    });



    $('.close_btn').click(function(){  
        $('.burger_menu').toggleClass('burger_menu_active');
        $('.line1').toggleClass('line1_active');
        $('.line2').toggleClass('line2_active');
        $('.line3').toggleClass('line3_active');
        $('.sidenav').toggleClass('sidenav_active');
    });
    
})