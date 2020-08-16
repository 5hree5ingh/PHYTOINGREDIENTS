import React from 'react';

class HomepageCarosusel extends React.Component{
    render(){
        return(
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <img src="/images/mobile-fresh.jpg" alt="mobile-fresh" className="mobile-homepage"/>
            <div class="carousel-inner">
                <div class="carousel-item active container-slider">
                    <img src="images/s1.jpg" alt="First slide" height="100%"></img>
                    <div className="content-slider">
                        <h1>STANDARDISED HERBAL EXTRACT</h1>
                        <p>Producer, supplier & Exporter of Standardised Herbal Extracts, Aqueous Herbal Extracts, Cosmoceutical Ingredients.</p>
                    </div>
                </div>
                <div class="carousel-item container-slider">
                    <img src="images/s2.jpg" alt="Second slide" height="100%"></img>
                    <div className="content-slider">
                        <h1>PHYTOCHEMICALS (API)</h1>
                        <p>Manufacturer, supplier and Exporter of Quality Phytochemicals (API) which comply the international pharmacopoeia specification and standards.</p>
                    </div>
                </div>
                <div class="carousel-item container-slider">
                    <img src="images/s3.jpg" alt="Third slide"></img>
                    <div className="content-slider">
                        <h1>ESSENTIAL OIL AND OLEORESINE</h1>
                        <p>Reliable and regular  supplier of essential and oleoresine.</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
    </div>
        )
    }
}

export default HomepageCarosusel;