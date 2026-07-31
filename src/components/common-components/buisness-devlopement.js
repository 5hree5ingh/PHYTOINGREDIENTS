import React, { useState, useEffect, useCallback } from 'react';
import '../../css-files/infrastructure.css';

const facilityImages = [
    {
        src: '/images/Fact/Factory_images/extraction_plant.png',
        name: 'Extraction Plant',
        desc: 'State-of-the-art multi-stage herbal extraction facility'
    },
    {
        src: '/images/Fact/Factory_images/extraction_plant2.png',
        name: 'Extraction Plant II',
        desc: 'Advanced solvent extraction and concentration systems'
    },
    {
        src: '/images/Fact/Factory_images/rotary_extractor.png',
        name: 'Rotary Extractor',
        desc: 'High-efficiency rotary extraction equipment'
    },
    {
        src: '/images/Fact/Factory_images/vaccum_tray_dryer.png',
        name: 'Vacuum Tray Dryer',
        desc: 'Precision vacuum drying for superior product quality'
    },
    {
        src: '/images/Fact/Factory_images/boiler.png',
        name: 'Boiler Unit',
        desc: 'Industrial-grade steam generation system'
    },
    {
        src: '/images/Fact/Factory_images/boiler2.png',
        name: 'Boiler Unit II',
        desc: 'Auxiliary steam supply for extraction processes'
    },
    {
        src: '/images/Fact/Factory_images/boiler3.png',
        name: 'Boiler Unit III',
        desc: 'Dedicated utility boiler for continuous operations'
    },
    {
        src: '/images/Fact/Factory_images/raw_material_storage.png',
        name: 'Raw Material Storage',
        desc: 'Temperature-controlled raw herb storage facility'
    },
    {
        src: '/images/Fact/Factory_images/finish_good_storage.png',
        name: 'Finished Goods Storage',
        desc: 'GMP-compliant finished product warehousing'
    },
];

/* ── Lightbox component ── */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
    const item = images[index];

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onNext, onPrev]);

    return (
        <div className="lb-backdrop" onClick={onClose}>
            {/* Close */}
            <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>

            {/* Prev */}
            <button
                className="lb-nav lb-nav--prev"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous"
            >
                ‹
            </button>

            {/* Image box */}
            <div className="lb-box" onClick={(e) => e.stopPropagation()}>
                <img src={item.src} alt={item.name} className="lb-img" />
                <div className="lb-caption">
                    <strong>{item.name}</strong>
                    <span>{item.desc}</span>
                    <span className="lb-counter">{index + 1} / {images.length}</span>
                </div>
            </div>

            {/* Next */}
            <button
                className="lb-nav lb-nav--next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next"
            >
                ›
            </button>
        </div>
    );
}

function Infrastructure() {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (i) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = useCallback(() =>
        setLightboxIndex((i) => (i - 1 + facilityImages.length) % facilityImages.length),
        []
    );
    const nextImage = useCallback(() =>
        setLightboxIndex((i) => (i + 1) % facilityImages.length),
        []
    );

    return (
        <div className="infra-page">

            {/* Hero Banner */}
            <div className="infra-hero">
                <div className="infra-hero-overlay" />
                <img
                    src="/images/bg-1.jpg"
                    alt="Infrastructure"
                    className="infra-hero-bg"
                />
                <div className="infra-hero-content">
                    <h1 className="infra-hero-title">World-Class Infrastructure</h1>
                    <p className="infra-hero-subtitle">
                        GMP-certified manufacturing plant built for precision, purity, and scale
                    </p>
                </div>
            </div>

            {/* Stats Strip */}
            <div className="infra-stats">
                <div className="infra-stat">
                    <span className="infra-stat-value">GMP</span>
                    <span className="infra-stat-label">Certified</span>
                </div>
                <div className="infra-stat">
                    <span className="infra-stat-value">ISO</span>
                    <span className="infra-stat-label">9001:2015</span>
                </div>
                <div className="infra-stat">
                    <span className="infra-stat-value">500+</span>
                    <span className="infra-stat-label">Products</span>
                </div>
                <div className="infra-stat">
                    <span className="infra-stat-value">10+</span>
                    <span className="infra-stat-label">Years of Excellence</span>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="infra-gallery-section">
                <h2 className="infra-section-title">Our Manufacturing Facility</h2>
                <p className="infra-section-desc">
                    Explore our cutting-edge infrastructure designed for producing the highest quality
                    herbal extracts, phytochemicals, and essential oils.
                </p>

                <div className="infra-gallery-grid">
                    {facilityImages.map((item, i) => (
                        <div
                            className="infra-gallery-card"
                            key={i}
                            onClick={() => openLightbox(i)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
                            aria-label={`View ${item.name}`}
                        >
                            <div className="infra-card-img-wrap">
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    className="infra-card-img"
                                    loading="lazy"
                                />
                                <div className="infra-card-overlay">
                                    <div className="infra-card-overlay-inner">
                                        <span className="infra-card-icon">🔍</span>
                                        <h3 className="infra-card-name">{item.name}</h3>
                                        <p className="infra-card-desc">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <Lightbox
                    images={facilityImages}
                    index={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}

        </div>
    );
}

export default Infrastructure;