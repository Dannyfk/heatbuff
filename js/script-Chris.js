$(document).ready(function() {
    $(window).scroll(function() {
        var scrollLocation = $(window).scrollTop();
        var coldHandsSection = $(".coldHand").offset().top;
        if (scrollLocation >= coldHandsSection-350) {
            $("#first-par").addClass("fadeInUp")
                .css('opacity', '1');
        }
        if(scrollLocation >= coldHandsSection-100){
            $("#second-par").addClass("fadeInUp")
                .css('opacity', '1');
        }
    });
    // Side section indicator navigator
    $('body').on('section-reached', function(){
    var section_title = $('body').sectionScroll.activeSection.data('section-title');

})
    $('body').sectionScroll(); 
    
});