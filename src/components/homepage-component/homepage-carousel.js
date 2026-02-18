import React from 'react';

class HomepageCarousel extends React.Component {
    render() {
        return (
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <img
                    src="images/bg-1.jpg"
                    alt="Phyto Ingredients Lab"
                    className="hero-bg-image"
                />
                <div className="hero-content">
                    <h1 className="hero-title">Nature's Precision,<br />Scientifically Perfected</h1>
                    <p className="hero-subtitle">
                        Producer, Supplier &amp; Exporter of Standardised Herbal Extracts,<br />
                        Phytochemicals &amp; Cosmoceutical Ingredients
                    </p>
                    <div className="hero-buttons">
                        <a href="/about-us" className="hero-btn hero-btn-primary">Discover More</a>
                        <a href="/contact-form" className="hero-btn hero-btn-outline">Contact Us</a>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <div className="hero-scroll-dot"></div>
                </div>
            </div>
        );
    }
}

export default HomepageCarousel;