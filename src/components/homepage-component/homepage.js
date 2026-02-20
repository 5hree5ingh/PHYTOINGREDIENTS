import React from 'react';
import '../../css-files/homepage.css';
import HomeCarousel from './homepage-carousel';
import ResearchAndEvent from './research-and-projecects';
import OurPopularProducts from './popular-products';
import halalPdf from '../../documents/halal.pdf';
import msme from '../../documents/msme.pdf';
import isoPdf from '../../documents/iso.pdf';
import kosherPdf from '../../documents/kosher.pdf';
import haccpPdf from '../../documents/haccp.pdf';
import gmpPdf from '../../documents/gmp.pdf';
import fssaiPdf from '../../documents/FSSAI.pdf';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coreProducts: [
                {
                    link: '/essential-oil',
                    title: 'Essential Oils',
                    image: 'images/product3.jpg',
                    description: 'Pure, natural essential oils extracted from premium botanical sources.'
                },
                {
                    link: '/oleoresines',
                    title: 'Oleoresins',
                    image: 'images/herbal-7.jpg',
                    description: 'High-quality oleoresins with consistent potency and purity.'
                },
                {
                    link: '/standardized-herbal-extracts',
                    title: 'Herbal Extracts',
                    image: 'images/product4.jpg',
                    description: 'Standardized herbal extracts meeting international pharmacopoeia standards.'
                },
                {
                    link: '/phytochemical',
                    title: "Phytochemicals",
                    image: 'images/product1.jpg',
                    description: 'Active phytochemical compounds for pharmaceutical applications.'
                },
                {
                    link: '/cosmoceutical-herbal-products',
                    title: 'Cosmoceutical Ingredients',
                    image: 'images/herbal-4.jpeg',
                    description: 'Premium cosmoceutical herbal ingredients for beauty and wellness.'
                },
                {
                    link: '/contact-form',
                    title: 'Contract Manufacturing',
                    image: 'images/producr2.jpg',
                    description: 'Custom manufacturing solutions tailored to your specifications.'
                }
            ],
            stats: [
                { value: '500+', label: 'Products' },
                { value: '10+', label: 'Years Experience' },
                { value: '10+', label: 'Countries Served' },
                { value: '100%', label: 'Quality Assured' }
            ]
        };
    }

    render() {
        return (
            <div className="homepage-wrapper">
                {/* Hero Section */}
                <HomeCarousel />

                {/* Stats Bar */}
                <div className="stats-bar">
                    {this.state.stats.map((stat, i) => (
                        <div className="stat-item" key={i}>
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* About Section */}
                <div className="about-section">
                    <div className="about-content">
                        <div className="section-tag">Who We Are</div>
                        <h2 className="section-title">Pioneering Natural Ingredient Solutions</h2>
                        <div className="section-divider"></div>
                        <p className="about-text">
                            Phyto Ingredients Biopharma Pvt. Ltd. has been established by young, enthusiastic
                            experienced professionals having sound experience in the field of research,
                            development &amp; manufacturing of quality Active Pharmaceutical Ingredients and
                            Standardized Herbal Extracts. We constantly exercise critical thinking to maintain
                            professional competence for excelling the quality of our products.
                        </p>
                        <a href="/about-us" className="read-more-btn">Read More <span>→</span></a>
                    </div>
                    <div className="about-image">
                        <img src="images/herbal-5.jpeg" alt="About Phyto Ingredients" />
                        <div className="about-image-badge">
                            <span className="badge-icon">🌿</span>
                            <span className="badge-text">100% Natural</span>
                        </div>
                    </div>
                </div>

                {/* Core Products Section */}
                <div className="core-products-section">
                    <div className="section-tag center">Our Products</div>
                    <h2 className="section-title center">OUR CORE PRODUCTS</h2>
                    <div className="section-divider center"></div>
                    <div className="products-grid">
                        {this.state.coreProducts.map((product, i) => (
                            <div className="product-card" key={i}>
                                <div className="product-card-image">
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-card-overlay">
                                        <a href={product.link} className="product-overlay-btn">View Details</a>
                                    </div>
                                </div>
                                <div className="product-card-body">
                                    <h3 className="product-card-title">{product.title}</h3>
                                    <p className="product-card-desc">{product.description}</p>
                                    <a href={product.link} className="product-view-btn">View Details</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="certifications-section" id="/testnow">
                    <div className="section-tag center">Trust &amp; Quality</div>
                    <h2 className="section-title center">OUR CERTIFICATIONS</h2>
                    <div className="section-divider center"></div>
                    <div className="certifications-grid">
                        <a href={isoPdf} target="blank" className="cert-item">
                            <img src="images/iso-bg.png" alt="ISO Certification" />
                        </a>
                        <a href={kosherPdf} target="blank" className="cert-item">
                            <img src="images/kosher-bg.png" alt="Kosher Certification" />
                        </a>
                        <a href={msme} target="blank" className="cert-item">
                            <img src="images/msme-bg.png" alt="MSME Certification" />
                        </a>
                        <a href={halalPdf} target="blank" className="cert-item">
                            <img src="images/halal-bg.png" alt="Halal Certification" />
                        </a>
                        <a href={gmpPdf} target="blank" className="cert-item">
                            <img src="images/gmp-bg.png" alt="GMP Certification" />
                        </a>
                        <a href={haccpPdf} target="blank" className="cert-item">
                            <img src="images/haccp-bg.png" alt="HACCP Certification" />
                        </a>
                        <a href={fssaiPdf} target="blank" className="cert-item">
                            <img src="images/FSSAI_logo.png" alt="FSSAI Certification" />
                        </a>
                    </div>
                </div>

                {/* Research & Projects Section */}
                <div className="research-section">
                    <div className="section-tag center">Innovation</div>
                    <h2 className="section-title center">OUR RESEARCH &amp; PROJECTS</h2>
                    <div className="section-divider center"></div>
                    <ResearchAndEvent />
                </div>

                {/* Popular Products Section */}
                <div className="popular-section">
                    <div className="section-tag center">Bestsellers</div>
                    <h2 className="section-title center">OUR POPULAR PRODUCTS</h2>
                    <div className="section-divider center"></div>
                    <div className="popular-carousel-wrapper">
                        <OurPopularProducts />
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;