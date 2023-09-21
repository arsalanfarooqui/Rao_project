/* Theme Name: Jobya - Responsive Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main JS file of the template
*/

function menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
}

(function($) {
    'use strict';
    // Logout
    var signout = $('#logout');
    signout.on('click', function() {
        localStorage.removeItem('token');
        window.location.href = '/login.html';
    });
    // console.log(signout)

    // Loader
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(330).fadeOut('slow');
        $('body').delay(350).css({
            overflow: 'visible',
        });
    });

    // Selectize
    $('#select-category, #select-lang,#select-country').selectize({
        create: true,
        sortField: {
            field: 'text',
            direction: 'asc',
        },
        dropdownParent: 'body',
    });

    // Checkbox all select
    $('#customCheckAll').click(function() {
        $('.all-select').prop('checked', $(this).prop('checked'));
    });

    // Nice Select
    $('.nice-select').niceSelect();

    // Back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 3000);
        return false;
    });
    // Restriction for employer
    if (window.location.pathname !== '/login.html') {
        var employerpages = [
            '/employerdashboard.html',
            '/cvs.html',
            '/posted-jobs.html',
            '/post-a-job.html',
            '/posted-jobs-details.html',
        ];
        employerpages = employerpages.map((item) => '/employerdashboard' + item);
        if (localStorage.getItem('usertype') === 'employer' && !employerpages.includes(window.location.pathname)) {
            window.location.href = '/employerdashboard/employerdashboard.html';
        }
    }

    //Restriction for JobSeeker
    // if (window.location.pathname !== '/login.html') {
    //     var jobseekerpages = [
    //         '/about.html',
    //         '/contact.html',
    //         '/upload-resume.html',
    //         '/userdashboard.html',
    //         '/jobs-details.html',
    //     ];
    //     jobseekerpages = jobseekerpages.map((item) => '/userdashboard' + item);
    //     if (localStorage.getItem('usertype') === 'jobseeker' && !jobseekerpages.includes(window.location.pathname)) {
    //         window.location.href = '/userdashboard.html';
    //     }
    // }
})(jQuery);