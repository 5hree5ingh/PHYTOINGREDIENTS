import React, { Component } from 'react';
import '../../css-files/summit-popup.css';

const summits = [
  {
    id: 1,
    event: 'Fi India 2026',
    tagline: 'Food Ingredients & Health Ingredients Exhibition',
    location: 'BEC, Goregaon, Mumbai',
    date: '26th – 28th August, 2026',
    booth: 'Hall No. 4-A56',
    image: '/images/mumbai-expo.png',
  },
];

class SummitPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isClosing: false,
      activeSlide: 0,
    };
    this.autoRotateInterval = null;
    this.showTimer = null;
  }

  componentDidMount() {
    // Only show once per browser session
    if (sessionStorage.getItem('summitPopupShown')) return;

    this.showTimer = setTimeout(() => {
      this.setState({ isVisible: true });
      if (summits.length > 1) {
        this.startAutoRotate();
      }
      sessionStorage.setItem('summitPopupShown', 'true');
    }, 1800);
  }

  componentWillUnmount() {
    clearTimeout(this.showTimer);
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  startAutoRotate = () => {
    this.autoRotateInterval = setInterval(() => {
      this.setState((prev) => ({
        activeSlide: (prev.activeSlide + 1) % summits.length,
      }));
    }, 5000);
  };

  handleClose = () => {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
    this.setState({ isClosing: true });
    setTimeout(() => this.setState({ isVisible: false }), 450);
  };

  goToSlide = (index) => {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
    this.setState({ activeSlide: index });
    this.startAutoRotate();
  };

  render() {
    const { isVisible, isClosing, activeSlide } = this.state;
    if (!isVisible) return null;

    const summit = summits[activeSlide];

    return (
      <div
        className={`summit-overlay ${isClosing ? 'summit-closing' : ''}`}
        onClick={this.handleClose}
      >
        <div
          className={`summit-card ${isClosing ? 'summit-closing' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="summit-close-btn"
            onClick={this.handleClose}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* IMAGE SECTION — full visibility */}
          <div className="summit-image-section">
            <img src={summit.image} alt={summit.location} className="summit-venue-img" />
            <div className="summit-image-overlay" />
            {/* Badge floats on top of the image */}
            <div className="summit-badge">
              <span className="summit-badge-leaf">🌿</span>
              <span>WE ARE EXHIBITING AT</span>
            </div>
          </div>

          {/* CONTENT SECTION — clean white */}
          <div className="summit-content">
            {/* Logo */}
            <div className="summit-logo-area">
              <img
                src="/images/phyto-logo.png"
                alt="Phyto Ingredients"
                className="summit-logo-img"
              />
            </div>

            {/* Event info */}
            <h2 className="summit-event-name" key={summit.id}>
              {summit.event}
            </h2>
            <p className="summit-event-tagline" key={summit.id + '-t'}>
              {summit.tagline}
            </p>

            {/* Details */}
            <div className="summit-details">
              <div className="summit-detail">
                <span className="summit-detail-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>{summit.location}</span>
              </div>
              <div className="summit-detail">
                <span className="summit-detail-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span>{summit.date}</span>
              </div>
            </div>

            {/* Booth CTA */}
            <div className="summit-booth">
              <span className="summit-booth-text">{summit.booth}</span>
            </div>

            {/* Footer row */}
            <div className="summit-footer-row">
              <p className="summit-website">www.phytoingredients.co.in</p>
              {summits.length > 1 && (
                <div className="summit-dots">
                  {summits.map((_, i) => (
                    <button
                      key={i}
                      className={`summit-dot ${i === activeSlide ? 'active' : ''}`}
                      onClick={() => this.goToSlide(i)}
                      aria-label={`Summit ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummitPopup;
