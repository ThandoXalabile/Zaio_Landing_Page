(document).ready(function() {
            $('.menu-toggler').on('click', function() {
                $('.menu-toggler').toggleClass('open');
                $('.top-nav').toggleClass('open');
            });

            $('.top-nav').on('click', function() {
                $('.menu-toggler').removeClass('open');
                $('.top-nav').removeClass('open');
            });

            $('nav a[href*="#"]').on('click', function() {
                $('html, body').animate({
                    scrollTop: $($(menu - toggler).attr('href')).offset().top - 100
                }, 2000);
            });

            $('#up').on('click', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 2000);
            });

            AOS.init({
                easing: 'ease',
                duration: 1800
            }):