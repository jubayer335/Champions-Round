import $, { speed } from 'jquery';
jQuery(function($){

    let seenOn = $('.seen-on .seen-on-slider');

if (seenOn.length > 0) {

    $('.seen-on-slider').slick({
        dots: false,
        infinite: true,
        speed: 1200, // Fast but smooth
        slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 0, // No pause between slides
                    cssEase: 'linear',
                }
            },
            {
                breakpoint: 725,
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
   




});
 
 new WOW().init();