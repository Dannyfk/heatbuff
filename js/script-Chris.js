$(document).ready(function() {
    $(window).scroll(function() {
        var scrollLocation = $(window).scrollTop();
        var coldHandsSection = $(".coldHand").offset().top;
        // add a class when a certain point of the section is reached.
        // all of the if statements below does the same, but it does it on different points of the window.
        if (scrollLocation >= coldHandsSection-500){
            $(".mouse-container").addClass('fadeOutScroll')
                .css('opacity', '0');
        }
        if (scrollLocation >= coldHandsSection-350) {
            $("#first-par").addClass("fadeInUp")
                .css('opacity', '1');
        }
        if(scrollLocation >= coldHandsSection){
            $("#second-par").addClass("fadeInUp")
                .css('opacity', '1');
        }
    });
});