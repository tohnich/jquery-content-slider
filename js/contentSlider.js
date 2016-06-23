/* --------------------------------------------------

Name: Tom Gobich
Date: June 22, 2016
Abstract: JQuery Content Slider Javascript

 --------------------------------------------------- */

$(document).ready(function () {

    // Set options
    var speed = 500;                // fade speed
    var autoSwitch = true;          // auto slider option
    var autoSwitch_speed = 4000     // Auto slider speed
    var slideInterval;

    // Add initial active class
    $('.slide').first().addClass('active');

    // Hide all slides
    $('.slide').hide();

    // Show first slide
    $('.active').show();

    // Next click handler
    $('#next').on( 'click', getNextSlide );

    // Prev click handler
    $('#prev').on( 'click', getPrevSlide );

    // Set slide change interval
    setSliderSwitchInterval( false );



    // -----------------------------------------------------------------
    // Name: getNextSlide
    // Abstract: Hides current slide and shows next slide for slider
    // -----------------------------------------------------------------
    function getNextSlide( autoSwitch, slideInterval ) {

        // Replace active class with oldActive on current slide
        $('.active').removeClass('active').addClass('oldActive');

        // Is slide with oldActive class the last-child (or slide)?
        if( $('.oldActive').is(':last-child') ) {

            // Yes, make first slide active
            $('.slide').first().addClass('active');

        } else {

            // No, make next slide active
            $('.oldActive').next().addClass('active');

        }

        // Remove oldActive from slide with oldActive
        $('.oldActive').removeClass('oldActive');

        // Fade out old slide
        $('.slide').fadeOut(speed);

        // Fade in active slide
        $('.active').fadeIn(speed);

        // Clear then set slide change interval
        setSliderSwitchInterval( true );

    }



    // -----------------------------------------------------------------
    // Name: getPrevSlide
    // Abstract: Hides current slide and shows previous slide for slider
    // -----------------------------------------------------------------
    function getPrevSlide( autoSwitch, slideInterval ) {

        // Replace active class with oldActive on currentSlide
        $('.active').removeClass('active').addClass('oldActive');

        // Is slide with oldActive class the first-child (or slide)?
        if( $('.oldActive').is(':first-child') ) {

            // Yes, make final slide active;
            $('.slide').last().addClass('active');

        } else {

            // No, make previous slide active
            $('.oldActive').prev().addClass('active');

        }

        // Remove oldActive from slide with oldActive
        $('.oldActive').removeClass('oldActive');

        // Fade out old slide
        $('.slide').fadeOut(speed);

        // Fade in active slide
        $('.active').fadeIn(speed);

        // Clear then set slide change interval
        setSliderSwitchInterval( true );

    }



    // -----------------------------------------------------------------
    // Name: setSliderSwitchInterval
    // Abstract: Set interval which slide automatically change
    // -----------------------------------------------------------------
    function setSliderSwitchInterval( resetInterval ) {

        // Should the interval be cleared?
        if( resetInterval == true ) {

            // Yes, clear interval
            clearInterval( slideInterval );

        }

        // Is autoSwitch true?
        if( autoSwitch == true ) {

            // Yes, set interval to change slides
            slideInterval = setInterval( getNextSlide, autoSwitch_speed );

        }

    }

});