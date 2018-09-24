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


    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        if($(window).scrollTop() > 90) {
            $(".secondary_header").addClass("secondary_header_active");
        }
        else{
            $(".secondary_header").removeClass("secondary_header_active"); 
        }




        if(wScroll > $('.product_section').offset().top - 50){
            $('.product_box').each(function(i){
                setTimeout(function(){
                    $('.product_box').eq(i).addClass('product_box_active');
                }, 150 * (i + 1));
            });

            
        }


        if(wScroll > $('.recomended_products').offset().top - 50){
            $('.product_box_scroll').each(function(i){
                setTimeout(function(){
                    $('.product_box_scroll').eq(i).addClass('product_box_active');
                }, 150 * (i + 1));
            });

            
        }
    });
    
});