/* Theme Name: Jobya - Responsive Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
*/

(function($) {
    'use strict';

    //owlCarousel
    $('#owl-testi').owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
    });

    //Javacript for video slider navigation
    const btns = document.querySelectorAll('.nav-btn');
    const slides = document.querySelectorAll('.video-slide');

    var sliderNav = function(manual) {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        btns[manual].classList.add('active');
        slides[manual].classList.add('active');
    };
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            sliderNav(i);
        });
    });
})(jQuery);