// A $( document ).ready() block.
$( document ).ready(function() {
var solutionHereSectionStart = $(".solutionHere").offset().top;
var tempScrollLocation = 0;
var tempNumber = 0
var windowWidth = 0;
var windowHeight = 0;
    $(window).scroll(function() {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        $(".solutionHereImage").css("height",windowHeight);
        var scrollLocation = $(window).scrollTop();
        var solutionHereSection = $(".solutionHere").offset().top;
        var warmHandsSection = $(".warmHands").offset().top;

        //when solutionHere comes into the window animate the text in
        if (scrollLocation >= solutionHereSection-(windowWidth*0.105)) {
                $("#solutionHereText1").addClass("slideRight");
                $("#solutionHereText2").addClass("slideRight");
            }
        //when solutionHere reaches top of window fix it to top
        if(scrollLocation >= solutionHereSection && scrollLocation< solutionHereSection+(windowWidth*0.631)){
            $(".solutionHere").addClass("fixedTop");
        }
        //if scrolling back up remove fix top
        if(scrollLocation < solutionHereSectionStart){
            $(".solutionHere").removeClass("fixedTop");
        }
        //Infrared picture opacity and tempnumber reset
        if(scrollLocation < solutionHereSectionStart+(windowWidth*0.263)){
            $('#solutionHereInfrared').css('opacity', 0);
            tempNumber = 0;
        }
        //change infrared image opacity as user scrolls
        if(scrollLocation >= solutionHereSectionStart+(windowWidth*0.263)){
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
        if(scrollLocation > solutionHereSectionStart+(windowWidth*0.263) && scrollLocation < solutionHereSectionStart+(windowWidth*0.342)){
            $("#solutionHereAside").addClass("fadeIn");
            $("#solutionHereAsideScroll").addClass("fadeOut");
            $("#solutionHereAsideScroll").removeClass("fadeIn");
        }
        //fade in last image text, fade out first image text
        if(scrollLocation >= solutionHereSectionStart+(windowWidth*0.368)){
            $("#solutionHereAside").removeClass("fadeIn")
            $("#solutionHereAside").addClass("fadeOut");
            $("#solutionHereAsideScroll").addClass("fadeIn");
        }
        //remove fixed top when reaching next section
        if(scrollLocation >= warmHandsSection-(windowWidth*0.211)){
            $(".solutionHere").addClass("fadeOut");
            $(".solutionHere").removeClass("fadeIn");
        }
        else{
            $(".solutionHere").addClass("fadeIn");
            $(".solutionHere").removeClass("fadeOut");
        }
        //animate warmHandsSection content
        if(scrollLocation >= warmHandsSection+(windowWidth*0.315)){
            $("#warmHandsArticle").addClass("slideRight");
            $("#warmHandsFigure").addClass("slideRight");
        }
    });
});
