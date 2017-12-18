// A $( document ).ready() block.
$( document ).ready(function() {
var solutionHereSectionStart = $(".solutionHere").offset().top;
var tempScrollLocation = 0;
var tempNumber = 0
var windowWidth = 0;
    $(window).scroll(function() {
        windowWidth = $(window).width();
        console.log(windowWidth);
        var scrollLocation = $(window).scrollTop();
        var solutionHereSection = $(".solutionHere").offset().top;
        var warmHandsSection = $(".warmHands").offset().top;

        //when solutionHere comes into the window animate the text in
        if (scrollLocation >= solutionHereSection-200) {
                $("#solutionHereText1").addClass("slideRight");
                $("#solutionHereText2").addClass("slideRight");
            }
        //when solutionHere reaches top of window fix it to top
        if(scrollLocation >= solutionHereSection && scrollLocation< solutionHereSection+1200){
            $(".solutionHere").addClass("fixedTop");
        }
        //if scrolling back up remove fix top
        if(scrollLocation < solutionHereSectionStart){
            $(".solutionHere").removeClass("fixedTop");
        }
        //Infrared picture opacity and tempnumber reset
        if(scrollLocation < solutionHereSectionStart+500){
            $('#solutionHereInfrared').css('opacity', 0);
            tempNumber = 0;
        }
        //change infrared image opacity as user scrolls
        if(scrollLocation >= solutionHereSectionStart+500){
            if(scrollLocation > tempScrollLocation){
                tempNumber ++;
            }
            else {
                tempNumber --;
            }
            tempScrollLocation = scrollLocation;
            var number = tempNumber /10;
            $('#solutionHereInfrared').css('opacity', number);
        }
        //fade in first image text, fade out last image text
        if(scrollLocation > solutionHereSectionStart+500 && scrollLocation < solutionHereSectionStart+650){
            $("#solutionHereAside").addClass("fadeIn");
            $("#solutionHereAsideScroll").addClass("fadeOut");
            $("#solutionHereAsideScroll").removeClass("fadeIn");
        }
        //fade in last image text, fade out first image text
        if(scrollLocation >= solutionHereSectionStart+700){
            $("#solutionHereAside").removeClass("fadeIn")
            $("#solutionHereAside").addClass("fadeOut");
            $("#solutionHereAsideScroll").addClass("fadeIn");
        }
        //remove fixed top when reaching next section
        if(scrollLocation >= warmHandsSection+400){
            $(".solutionHere").removeClass("fixedTop");
            //$("#warmHandsArticle").addClass("slideRight");
            //$("#warmHandsFigure").addClass("slideRight");
        }
        //animate warmHandsSection content
       /* if(scrollLocation >= warmHandsSection+600){
            $("#warmHandsArticle").addClass("slideRight");
            $("#warmHandsFigure").addClass("slideRight");
        }*/
    });
});
