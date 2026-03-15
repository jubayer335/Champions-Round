import $, { speed } from 'jquery';
jQuery(function($){

    //nav
    $(window).on('scroll', function(){
        console.log($(window).scrollTop());

        if($(window).scrollTop() > 29){
            $('.header').addClass('bg-primary-bg');
            $('.header').addClass('pb-3');
        } else {
            $('.header').removeClass('bg-primary-bg');
            $('.header').removeClass('pb-3');
        };
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
   




});
 
 new WOW().init();