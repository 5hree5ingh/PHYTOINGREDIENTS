import React from 'react';
import '../../css-files/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            menuList: [
                { list_value: 'Home', link: '/' },
                { list_value: 'About Us', link: '/about-us' },
                { list_value: 'Our Certifications', link: '/#/contact-form' },
                { list_value: 'Infrastructure', link: '/infrastructure' },
                { list_value: 'Contact Us', link: '/contact-form' },
                { list_value: 'Careers', link: '/careers' }
            ],
            productList: [
                { content: 'Essential Oils', link: '/essential-oil' },
                { content: 'Cosmeceutical Ingredients', link: '/cosmoceutical-herbal-products' },
                { content: 'Standardized Herbal Extracts', link: '/standardized-herbal-extracts' },
                { content: 'Phytochemicals', link: '/phytochemical' },
                { content: 'Oleoresines', link: '/oleoresines' },
                { content: 'Spray Dried Fruits and Vegetable Powders', link: '/spray-dried-fruits-and-vegetable-powders' }
            ]
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        // Run once on mount in case page loads already scrolled
        this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrolled = window.scrollY > 40;
        if (scrolled !== this.state.scrolled) {
            this.setState({ scrolled });
        }
    }

    render() {
        const { scrolled } = this.state;
        return (
            <div className={`header-main-div${scrolled ? ' scrolled' : ''}`}>
                <div className="lower-header">

                    {/* Logo */}
                    <div className="logo-container">
                        <a href='/'>
                            <img
                                src="/images/image.png"
                                alt="Phyto Ingredients"
                                className="logo-img"
                            />
                        </a>
                    </div>

                    {/* Nav Menu */}
                    <div className="header-menu-list-container">
                        <div className="menu-list-item">
                            <a href="/">Home</a>
                        </div>
                        <div className="menu-list-item">
                            <a href="/about-us">About Us</a>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Products &amp; Services</button>
                            <div className="dropdown-content">
                                {this.state.productList.map((value, i) => (
                                    <a key={i} href={value.link}>{value.content}</a>
                                ))}
                            </div>
                        </div>
                        <div className="menu-list-item">
                            <a href="/#/contact-form">Our Certifications</a>
                        </div>
                        <div className="menu-list-item">
                            <a href="/infrastructure">Infrastructure</a>
                        </div>
                        <div className="menu-list-item">
                            <a href="/contact-form">Contact Us</a>
                        </div>
                        <div className="menu-list-item">
                            <a href="/careers" style={{ color: '#2d7a2d', fontWeight: '700' }}>Careers</a>
                        </div>
                        {/* Mobile hamburger */}
                        <img src="/images/menu.png" alt="menu" id="menu-image" />
                        <div className="menu-dropdown">
                            {this.state.menuList.map((value, i) => (
                                <a key={i} href={value.link}>{value.list_value}</a>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="nav-social-icons">
                        <a href="https://www.facebook.com/Phyto-Ingredients-Biopharma-Private-Limited-103242694379030/" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/phyto-ingredients-biopharma-private-limited" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
