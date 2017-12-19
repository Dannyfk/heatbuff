<?php
    include "includes/head.inc.php";
    include "includes/nav.inc.php";
?>
    <section class="videoSection">
        <video src="movie/heatbuffMovie.mp4" type="video/mp4" controls>
    </section>
    <section class="productPageSection">
        <aside class="productImages slideshow-container">
        <figure class="mySlides fade">
            <img src="image/gallery/Heatbuff-Front_preview.jpg" alt="Heatbuff">
        </figure>
        <figure class="mySlides fade">
            <img src="image/gallery/Heatbuff-Perspective-product-image-180x180.jpg" alt="Heatbuff">
        </figure>
        <figure class="mySlides fade">
            <img src="image/gallery/Heatbuff-close-up2-product-image-180x180.jpg" alt="Heatbuff">
        </figure>
        <figure class="mySlides fade">
            <img src="image/gallery/Heatbuff-infrared-product-image-180x180.jpg" alt="Heatbuff">
        </figure>
        <figure class="mySlides fade">
            <img src="image/gallery/Heatbuff_6-180x180.jpg" alt="Heatbuff">
        </figure>
        <figure class="mySlides fade">
            <img src="image/gallery/Heatbuff_5-180x180.jpg" alt="Heatbuff">
        </figure>
        <section id="thumbnails">
            <img id="thumbnail1" src="image/gallery/Heatbuff-Front_preview.jpg" alt="Heatbuff">
            <img id="thumbnail2" src="image/gallery/Heatbuff-Perspective-product-image-180x180.jpg" alt="Heatbuff">
            <img id="thumbnail3" src="image/gallery/Heatbuff-close-up2-product-image-180x180.jpg" alt="Heatbuff">
            <img id="thumbnail4" src="image/gallery/Heatbuff-infrared-product-image-180x180.jpg" alt="Heatbuff">
            <img id="thumbnail5" src="image/gallery/Heatbuff_6-180x180.jpg" alt="Heatbuff">
            <img id="thumbnail6" src="image/gallery/Heatbuff_5-180x180.jpg" alt="Heatbuff">
        </section>
        </aside>
        <section class="productPageContent">
        <h2>Envavo Heatbuff</h2>
        <p id="price">$139.00</p>
            <button class="tabButton activeTabButton" id="productFeatures">Heatbuff Features</button>
            <button class="tabButton" id="productSpecs">Tech specs</button>
            <button class="tabButton" id="productFAQ">FAQ</button>
            <article id="productPageDynamicContent">
                
            </article>
            <hr>
            <p>Are you a company looking for a bundle deal? Contact us on Phone: +45 28 40 60 51  or<br>  Email: hi(at)envavo.com and let us make a deal together</p>
            <a href="https://envavo.com/shop/"><button id="saleButton">Get your Heatbuff</button></a>
        </section>
    </section>


<?php
    include "includes/footer.inc.php";
?>
<script src="js/productPageScript.js"></script>
</body>
</html>