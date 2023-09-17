import React, { useEffect } from "react";

const Portfolio = () => {
    return (
        <section class="main-section paddind" id="Portfolio">
            <div class="container">
                <h2>Portfolio</h2>
                <h6>Fresh portfolio of designs that will keep you wanting more.</h6>
                <div class="portfolioFilter">
                    <ul class="Portfolio-nav wow fadeIn delay-02s">
                        <li><a href="#" data-filter="*" class="current" >All</a></li>
                        <li><a href="#" data-filter=".branding" >Web Applications</a></li>
                        <li><a href="#" data-filter=".webdesign" >Mobile Applications</a></li>

                    </ul>
                </div>

            </div>
            <div class="portfolioContainer wow fadeInUp delay-04s">
                <div class=" Portfolio-box printdesign">
                    <a href="#"><img src="img/Portfolio-pic1.jpg" alt="" /></a>
                    <h3>Foto Album</h3>
                    <p>Print Design</p>
                </div>
                <div class="Portfolio-box webdesign">
                    <a href="#"><img src="img/Portfolio-pic2.jpg" alt="" /></a>
                    <h3>Luca Theme</h3>
                    <p>Web Design</p>
                </div>
                <div class=" Portfolio-box branding">
                    <a href="#"><img src="img/Portfolio-pic3.jpg" alt="" /></a>
                    <h3>Uni Sans</h3>
                    <p>Branding</p>
                </div>
                <div class=" Portfolio-box photography" >
                    <a href="#"><img src="img/Portfolio-pic4.jpg" alt="" /></a>
                    <h3>Vinyl Record</h3>
                    <p>Photography</p>
                </div>
                <div class=" Portfolio-box branding">
                    <a href="#"><img src="img/Portfolio-pic5.jpg" alt="" /></a>
                    <h3>Hipster</h3>
                    <p>Branding</p>
                </div>
                <div class=" Portfolio-box photography">
                    <a href="#"><img src="img/Portfolio-pic6.jpg" alt="" /></a>
                    <h3>Windmills</h3>
                    <p>Photography</p>
                </div>
            </div>
        </section>
    )
}
export default Portfolio;