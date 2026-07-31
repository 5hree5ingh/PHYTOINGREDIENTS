import React from 'react';
import '../../css-files/about-us.css';

function AboutUsComponent() {
    return (
        <div className="about-page">
            {/* ── HERO BANNER ── */}
            <div className="about-hero">
                <div className="about-hero-overlay" />
                <img
                    src="/images/bg-1.jpg"
                    alt="About Us"
                    className="about-hero-bg"
                />
                <div className="about-hero-content">
                    <h1 className="about-hero-title">Our Story & Commitment</h1>
                    <p className="about-hero-subtitle">
                        Pioneering natural ingredient solutions through scientific precision and ethical values
                    </p>
                </div>
            </div>

            {/* ── INTRO SECTION (GRID) ── */}
            <div className="about-intro-section">
                <div className="about-grid">
                    <div className="about-intro-left">
                        <h2 className="about-section-heading">Who We Are</h2>
                        <div className="about-accent-line" />
                        <p className="about-body-text highlighted">
                            Phyto Ingredients Biopharma Pvt. Ltd. has been established by young, enthusiastic, 
                            and experienced professionals with sound expertise in the field of research, 
                            development, and manufacturing of quality Active Pharmaceutical Ingredients and Standardized Herbal Extracts.
                        </p>
                        <p className="about-body-text">
                            We constantly exercise critical thinking to maintain professional competence for excelling the quality of our products. 
                            Phyto Ingredients Biopharma will always embrace the highest standard of character to serve and promote quality of life 
                            through high-performance, quality products.
                        </p>
                        <p className="about-body-text">
                            Starting as a producer and supplier of essential oils, dried herbs, and herbal extracts of various herbs & active pharmaceuticals, 
                            our aim is to be a leading manufacturer of herbal-based end products, world-class herbal cosmetics, food supplements, 
                            essential oils, extracts, and GMP-certified herbal medicines.
                        </p>
                    </div>
                    <div className="about-intro-right">
                        <div className="about-stats-card">
                            <div className="about-stats-bg-leaf">🌿</div>
                            <h3 className="about-stats-card-title">Phyto Ingredients</h3>
                            <p className="about-stats-card-subtitle">At a Glance</p>
                            <div className="about-stat-row">
                                <span className="about-stat-num">100%</span>
                                <span className="about-stat-label">Purity & Standardized Quality</span>
                            </div>
                            <div className="about-stat-row">
                                <span className="about-stat-num">GMP</span>
                                <span className="about-stat-label">Certified Manufacturing Standards</span>
                            </div>
                            <div className="about-stat-row">
                                <span className="about-stat-num">B2B</span>
                                <span className="about-stat-label">Global Supply & Partnership</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MISSION & VISION (CARDS) ── */}
            <div className="about-mission-vision-section">
                <div className="about-cards-grid">
                    {/* Mission Card */}
                    <div className="about-mv-card">
                        <div className="about-mv-icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                                <circle cx="12" cy="12" r="6"/>
                                <circle cx="12" cy="12" r="2"/>
                            </svg>
                        </div>
                        <h3 className="about-mv-title">Our Mission</h3>
                        <p className="about-mv-text">
                            At Phyto Ingredients Biopharma Pvt. Ltd., we utilize mother nature by leveraging our extensive experience with crucial medicinal plants. 
                            Our primary mission is to explore, produce, and provide natural products manufactured using world-class technologies, 
                            strictly adhering to regulatory compliance and international quality standards.
                        </p>
                        <p className="about-mv-text">
                            We aim to provide consumers with highly affordable, technologically advanced, and high-quality formulations and natural products that offer tangible benefits. 
                            We guarantee the profitability and competitive edge of our partners throughout our collaboration.
                        </p>
                        <p className="about-mv-text">
                            Ultimately, we strive to contribute our best share in serving humanity and creating a healthier world grounded in the highest ethical values and integrity.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="about-mv-card">
                        <div className="about-mv-icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        </div>
                        <h3 className="about-mv-title">Our Vision</h3>
                        <p className="about-mv-text">
                            We aim to become the most reliable and renowned global name in supplying herbal extracts, active pharmaceutical ingredients, 
                            bulk drugs, raw herbs, herbal formulations, organic raw herbs, pharmaceutical chemicals, and essential oils.
                        </p>
                        <p className="about-mv-text">
                            Additionally, we strive to offer premier consultancy and guidance in plant & equipment designing, biopharmaceuticals process development, and scale-up operations.
                        </p>
                        <p className="about-mv-text">
                            We aspire to offer 100 percent satisfaction to our esteemed clientele at all levels, continually creating innovative, revolutionary products to be recognized as world leaders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsComponent;