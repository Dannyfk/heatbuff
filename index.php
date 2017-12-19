
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="author" content="name">
        <meta name="description" content="description here">
        <meta name="keywords" content="keywords,here">
        <link rel="stylesheet" href="css/Landing-Page-Chris.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/landingpageDanny.css">
        <link rel="stylesheet" type="text/css" href="css/includeStyle.css">
        <script src="js/jquery-3.2.1.min.js"></script>
        <title>Envavo</title>
    </head>
    <body>
        <?php
        include "includes/nav.inc.php";
        ?>
        <header class="mainHeader">
            <h1>Heatbuff</h1>
            <div class="backgroundImage"></div>
            <h3>No more cold hands</h3>
            <div class='mouse-container'>
                <div class='mouse'>
                    <span class='scroll-down'></span>
                </div>
            </div>
        </header>
        <section class="coldHand">
            <h2> Ever been too cold? </h2>
            <ul>
                <li id="first-par">probably you wrapped yourself in the blankets,<br> put the heater up but still made typo after typo.</li>
                <li id="second-par">It is because the problem is not the temperature... <br>But in your bloodflow.</li>
            </ul>
        </section>
        <section class="solutionHere">
            <img class="solutionHereImage" src="image/hands_background.jpg" alt="Solution is here image">
            <aside id="solutionHereAside">
                <h2>The solution is here</h2>
                <p id="solutionHereText1">Unlike the other heaters, we use infrared waves technoligy</p>
                <p id="solutionHereText2">Heatbuff naturally increases your bloodflow fast and your body temperature is back to normal</p>
            </aside>
            <aside id="solutionHereAsideScroll">
                <h2>Heatbuff - warms your hands, but nothing else</h2>
                <p>Infrared waves warms up only your body. You don't have to worry about your equipment</p>
            </aside>
            <img class="solutionHereImage" id="solutionHereInfrared" src="image/hands_infrared.jpg" alt="Solution is here image">
        </section>
        <section class="solutionHereScroll"></section>
        <section class="warmHands">
            <article id="warmHandsArticle">
                <h2>Warm hands, fast</h2>
                <p>Heatbuff warms your hands twice as fast compared to traditional heaters</p>
            </article>
            <figure id="warmHandsFigure">
                <img src="image/Heatbuff-Infrared-test.gif" alt="Heating gif">
            </figure>
        </section>
        <section class="customAngles">
            <figure>
                <img src="image/Heatbuff_Alone_gif.gif" alt="Angles gif">
            </figure>
            <article id="customAnglesText">
                <h2>Custom angles</h2>
                <p>No matter how you use the computer, you can always use Heatbuff</p>
            </article>
        </section>
        <section class="easySetup">
            <article id="easySetupText">
                <h2>Easy Setup</h2>
                <p>Place behind your keyboard, plug it in and start feeling warmness</p>
            </article>
            <figure>
                <img src="image/Custom_angles.png" alt="Angles gif">
            </figure>
        </section>
        <script src="js/jquery-3.2.1.min.js"></script>
        <section class="callToAction">
            <h2>Read more about the product</h2>
            <a href="productPage.php"><button>Envavo Heatbuff</button></a>
        </section>

        <?php 
        include "includes/footer.inc.php";
        ?>
        <script src="js/script-Chris.js"></script>
        <script src="js/landingpageScriptDanny.js"></script>
    </body>
</html>