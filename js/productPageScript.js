// A $( document ).ready() block.
$( document ).ready(function() {
    // adding click event handlers for the buttons
    $("#productFeatures").click(function(){
        displayContent("features");
    });
    $("#productSpecs").click(function(){
        displayContent("specs");
    });
    $("#productFAQ").click(function(){
        displayContent("FAQ");
    });
        displayFeatures();

    // adding click event handlers for the thumbnail pictures
    $("#thumbnail1").click(function(){
        showThumbnailSlides(1);
    });
    $("#thumbnail2").click(function(){
        showThumbnailSlides(2);
    });
    $("#thumbnail3").click(function(){
        showThumbnailSlides(3);
    });
    $("#thumbnail4").click(function(){
        showThumbnailSlides(4);
    });
    $("#thumbnail5").click(function(){
        showThumbnailSlides(5);
    });
    $("#thumbnail6").click(function(){
        showThumbnailSlides(6);
    });
});
    //function to display content based on input from buttonclick
    function displayContent(name){
       $("#productPageDynamicContent").empty();
       $(".tabButton").removeClass("activeTabButton");
        switch(name) {
            case "features":
                displayFeatures();
                break;
            case "specs":
                displaySpecs();
                break;
            case "FAQ":
                displayFAQ();
                break;
        }
    }

    //create an array of features and append it to the content article
    function displayFeatures(){
        $("#productFeatures").addClass("activeTabButton");
        $("#productPageDynamicContent").append("<h2>Features</h2>");
        var featureArray = ["Infrared no-burn technology (the product remains cold while your hands are warm!)", 
                            "Increased natural bloodflow", 
                            "Customizable angles – the product fits perfectly for anyone, no matter how you sit at your computer", 
                            "LED bar for a slick look, and ability to see keyboard in the dark"];

        var list = $("<ul></ul");
        for(var i = 0; i<featureArray.length; i++){
        var text = $("<li>"+featureArray[i]+"</li>");
        list.append(text);
        }
        $("#productPageDynamicContent").append(list);
    }

    //create an array of specs and append it to the content article
    function displaySpecs(){
        $("#productSpecs").addClass("activeTabButton");
        $("#productPageDynamicContent").append("<h2>Tech specs</h2>");
        var specsArray = [["Weight","0.7kg"], 
                          ["Size", "30cm x 10cm x 8cm"],
                          ["Watts", "50w"],
                          ["Volts", "Both 120v and 230v"], 
                          ["Power Outlet", "Comes with adapters for US, UK and EU."], 
                          ["Bulb lifetime", "5000 hours (same as any other infrared heater)"], 
                          ["Heat", "20&deg; -30&deg;C"]];
        
        var table = $("<table></table>");
        for(var i = 0; i<specsArray.length; i++){
            var tableRow = $("<tr></tr>");
            for(var y = 0; y<specsArray[i].length; y++){
                var tableData = $("<td>"+specsArray[i][y]+"</td>");
                tableRow.append(tableData);
        }
            table.append(tableRow);
        }
        $("#productPageDynamicContent").append(table);
    }

    //create an array of FAQs and append it to the content article
    function displayFAQ(){
        $("#productFAQ").addClass("activeTabButton");
        $("#productPageDynamicContent").append("<h2>FAQ</h2>");
        var FAQArray = [["Are infrared waves harmful to my skin / fingers?", "No. Every study we have been able to find says it’s completely harmless."],
                        ["Can I burn my hands on the Heatbuff, like on every other infrared heater?", "No. The product is fully touchable while in use"],
                        ["How do you make sure both of my hands are warm?", "We do this by using a customizable angle on the right “head”. It turns, so no matter how you sit, your hands will be warm."],
                        ["Will the Heatbuff come with adapters for US/EU?", "Yes. We will include adapters for your specific country"],
                        ["How many watts does the Heatbuff use?","We expect 50 watts"],
                        ["Will it burn / melt my keyboard or mouse?","No."],
                        ["Does it draw power from USB or regular power outlet?","Regular power outlet."]];
        
        var list = $("<ol></ol");
        for(var i = 0; i<FAQArray.length; i++){
        var listObject = $("<li></li>");
        for(var y = 0; y<FAQArray[i].length; y++){
            var text = $("<p>"+FAQArray[i][y]+"</p>");
            listObject.append(text);
        }
            list.append(listObject);
        }
        $("#productPageDynamicContent").append(list);
    }

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

/* Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
*/

// Thumbnailclick
function showThumbnailSlides(n) {
    showSlides(slideIndex = n);
  }

//display slide
function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block"; 

}
