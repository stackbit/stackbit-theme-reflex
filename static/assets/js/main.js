/*
	Reflex by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

    var $window = $(window);
    var $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    var locked = false;

    function lock() {

        if (locked) {
            return false;
        }

        locked = true;

        window.setTimeout(function() {
            locked = false;
        }, 350);

        return true;

    }

    function show() {
        if (lock()) {
            $('#menu').addClass('visible');
        }
    }

    function hide() {
        if (lock()) {
            $('#menu').removeClass('visible');
        }
    }

    function toggle() {
        if (lock()) {
            $('#menu').toggleClass('visible');
        }
    }

    $body
        .on('click', '#menu .inner', function(event) {
            event.stopPropagation();
        })
        .on('click', '#menu .inner a', function(event) {

            var href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

            // Hide.
            hide();

            // Redirect.
            window.setTimeout(function() {
                window.location.href = href;
            }, 250);

        });

    $body.on('click', '#menu', function(event) {

        event.stopPropagation();
        event.preventDefault();

        $(this).removeClass('visible');

    });

    $body
        .on('click', 'a[href="#menu"]', function(event) {

            event.stopPropagation();
            event.preventDefault();

            toggle();

        })
        .on('click', function(event) {

            // Hide.
            hide();

        })
        .on('keydown', function(event) {

            // Hide on escape.
            if (event.keyCode == 27) {
                hide();
            }

        });

})(jQuery);
