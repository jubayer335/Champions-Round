import $, { speed } from 'jquery';
jQuery(function($){

    //nav
    $(window).on('scroll', function(){
        console.log($(window).scrollTop());

        if($(window).scrollTop() >= 29){
            $('.header').addClass('bg-primary-bg pb-3');
            $('.get-button').fadeIn(1000);
            $('.offcanvas-menu').removeClass('wow fadeInDown')
            $('.header').removeClass('wow fadeInDown')
            $('.nav ul li .drop-down').addClass('top-8/10').removeClass('top-9/10');
        } else {
            $('.header').removeClass('bg-primary-bg pb-3');
            $('.get-button').removeClass('absolute');
            $('.get-button').fadeOut(1000);
            $('.offcanvas-menu').addClass('wow fadeInDown')
            $('.header').addClass('wow fadeInDown')
            $('.nav ul li .drop-down').removeClass('top-8/10').addClass('top-9/10');
        };
    });
    $('.nav > ul > li').on('mouseenter', function(){
        $(this).children('.drop-down').stop(true, true).fadeIn(200);
    })
    .on('mouseleave', function(){
        $(this).children('.drop-down').stop(true, true).fadeOut(200);
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
    $('.offcanvas-menu .offcanvas-btm ul li').on('click', function(e){
         e.stopPropagation();
         let currentUl = $(this).children('ul');
         if (currentUl.length === 0) {
            return;
            };
        $(this).find('.arrow').toggleClass('rotate-180');
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

    $('.header-content .logo').on('click', function () {
         window.location.href = 'index.html';
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

        $('.tab-container .tab-items').removeClass('tab-active').addClass('border-transparent');
        $(this).addClass('tab-active').removeClass('border-transparent');

        $(this).siblings().removeClass('tab-active').addClass('border-transparent');
        
        let imgSrc = $(this).data('img');
        console.log(imgSrc);
              
        $('#tab-img , #tab-img-2').attr('src', imgSrc);
       
    });

    //accordian
        $('.accordian-container .accordian-items').on('click', function(){
            if($(window).width() < 1024){
                    $(this).siblings().find('.toggle-text').slideUp(300);
            }else{
                $(this).siblings().find('.toggle-text').hide(300);
            };
         $(this).siblings().find('.absolute').addClass('rotate-90');
         setTimeout(() => {
            $(this).find('.toggle-text').slideToggle(300);
            $(this).find('.absolute').toggleClass('rotate-90');
         }, 310);
        });
    

        $('.tab-container .tab-items').removeClass('p-1 sm:pt-0').addClass('pt-4 xl:pt-6 pb-4.75 xl:pb-6.75 px-4.75 xl:px-5.75');
        $('.tab-container').removeClass('gap-10.5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14');

    

    

let seenOn = $('.seen-on .seen-on-slider');

if (seenOn.length > 0) {

    $('.seen-on-slider').slick({
        dots: false,
        infinite: true,
        speed: 3500, // Fast but smooth
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
                    speed: 1500, // Fast but smooth
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
                    speed: 1500, // Fast but smooth
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
 
 