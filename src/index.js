import $, { speed } from 'jquery';
jQuery(function($){

    //nav
    $(window).on('scroll', function(){
        console.log($(window).scrollTop());

        if($(window).scrollTop() >= 29){
            $('.header').addClass('bg-primary-bg pb-3');
            $('.get-button').fadeIn(1000);
        } else {
            $('.header').removeClass('bg-primary-bg pb-3');
            $('.get-button').removeClass('absolute');
            $('.get-button').fadeOut(1000);
           
        };
    });
    //scroll-triger
    $(window).trigger('scroll');
    //mobile-nav
    $('.toggle-menu .bar').on('click', function(){
       $('.offcanvas-menu').toggleClass('-translate-x-full');
       $('body').addClass('overflow-hidden');
    });
    $('.offcanvas-menu .offcanvas-top .close').on('click', function(){
        $('.offcanvas-menu').addClass('-translate-x-full');
        $('body').removeClass('overflow-hidden');
    });
    $('.offcanvas-menu .offcanvas-btm ul li').on('click', function(){
         let currentUl = $(this).children('ul');
         if (currentUl.length === 0) {
            return;
            };

        $(this).children('ul').slideToggle(500);
        $(this).siblings().children('ul').slideUp(500);
        $('.offcanvas-btm ul li a').not($('.offcanvas-btm ul li ul li a')).removeClass('font-circular-std');
        $('.offcanvas-btm ul li a').not($('.offcanvas-btm ul li ul li a')).addClass('font-carter');
        setTimeout(function () {
        if ($('.offcanvas-btm ul li ul:visible').length === 0) {
            $('.offcanvas-btm ul li a')
                .not($('.offcanvas-btm ul li ul li a'))
                .removeClass('font-carter')
                .addClass('font-circular-std');
        }
    }, 550);
    });

    //app section tab
    $('.tab-container .tab-items').each(function() {
        if ($(this).hasClass('tab-active')) {
            $(this).removeClass('border-transparent');
        };
    });
    
    $('.tab-container .tab-items').on('click', function() {
        $(this).addClass('tab-active');
        $('.tab-container .tab-items').each(function() {
        if ($(this).hasClass('tab-active')) {
                $(this).removeClass('border-transparent');
            };
        });
        $(this).siblings().removeClass('tab-active').addClass('border-transparent');
        
        let imgSrc = $(this).data('img');
              
        $('#app-img').attr('src', imgSrc);
       
    });
        

    let seenOn = $('.seen-on .seen-on-slider');

if (seenOn.length > 0) {

    $('.seen-on-slider').slick({
        dots: false,
        infinite: true,
        speed: 1200, // Fast but smooth
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0, // No pause between slides
        cssEase: 'linear', // Smooth continuous movement
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 2000, // Fast but smooth
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 0, // No pause between slides
                    cssEase: 'linear',
                }
            },
            {
                breakpoint: 950,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 2000, // Fast but smooth
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 0, // No pause between slides
                    cssEase: 'linear',
                }
            },
             {
                breakpoint: 600,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 2000, // Fast but smooth
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 0, // No pause between slides
                    cssEase: 'linear',
                }
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


};


let seenOn2 = $('.seen-on-slider-2');

if (seenOn2.length > 0) {

    $('.seen-on-slider-2').slick({
        dots: false,
        infinite: true,
        speed: 1200, // Fast but smooth
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0, // No pause between slides
        cssEase: 'linear', // Smooth continuous movement
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 2000, // Fast but smooth
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 0, // No pause between slides
                    cssEase: 'linear',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 2000, // Fast but smooth
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 0, // No pause between slides
                    cssEase: 'linear',
                }
            },
            {
                breakpoint: 400,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 2000, // Fast but smooth
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 0, // No pause between slides
                    cssEase: 'linear',
                }
            }
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


};
   
if (typeof WOW !== 'undefined') {
  new WOW().init();
};


});
 
 