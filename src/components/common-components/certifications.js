import React, { useState } from 'react';
import '../../css-files/certifications.css';
import halalPdf from '../../documents/halal.pdf';
import msme from '../../documents/msme.pdf';
import isoPdf from '../../documents/iso.pdf';
import kosherPdf from '../../documents/kosher.pdf';
import haccpPdf from '../../documents/haccp.pdf';
import gmpPdf from '../../documents/gmp.pdf';
import fssaiPdf from '../../documents/FSSAI.pdf';

const certifications = [
    {
        id: 'iso',
        name: 'ISO 9001:2015',
        authority: 'International Organization for Standardization',
        description:
            'Internationally recognized standard ensuring consistent quality management systems, process excellence, and continuous improvement across all our operations.',
        image: '/images/iso-bg.png',
        pdf: isoPdf,
        color: '#1565C0',
        accent: 'rgba(21, 101, 192, 0.08)',
        badge: 'Quality Management',
    },
    {
        id: 'gmp',
        name: 'GMP Certified',
        authority: 'Good Manufacturing Practices',
        description:
            'Compliance with stringent Good Manufacturing Practices ensuring our herbal extracts and phytochemicals meet the highest standards of safety, quality, and efficacy.',
        image: '/images/gmp-bg.png',
        pdf: gmpPdf,
        color: '#2E7D32',
        accent: 'rgba(46, 125, 50, 0.08)',
        badge: 'Manufacturing Excellence',
    },
    {
        id: 'haccp',
        name: 'HACCP',
        authority: 'Hazard Analysis Critical Control Points',
        description:
            'A systematic preventive approach to food safety and pharmaceutical production, identifying physical, chemical, and biological hazards in production processes.',
        image: '/images/haccp-bg.png',
        pdf: haccpPdf,
        color: '#E65100',
        accent: 'rgba(230, 81, 0, 0.08)',
        badge: 'Safety & Control',
    },
    {
        id: 'halal',
        name: 'Halal Certified',
        authority: 'Halal Certification Authority',
        description:
            'Certified to meet Halal requirements, ensuring our products comply with Islamic dietary laws — opening our offerings to global markets demanding Halal-compliant ingredients.',
        image: '/images/halal-bg.png',
        pdf: halalPdf,
        color: '#00695C',
        accent: 'rgba(0, 105, 92, 0.08)',
        badge: 'Global Compliance',
    },
    {
        id: 'kosher',
        name: 'Kosher Certified',
        authority: 'Kosher Certification Authority',
        description:
            'Kosher certification affirms our products meet strict Jewish dietary laws, enabling access to international markets and demonstrating our commitment to diverse consumer needs.',
        image: '/images/kosher-bg.png',
        pdf: kosherPdf,
        color: '#4527A0',
        accent: 'rgba(69, 39, 160, 0.08)',
        badge: 'International Standards',
    },
    {
        id: 'msme',
        name: 'MSME Registered',
        authority: 'Ministry of Micro, Small & Medium Enterprises',
        description:
            "Registered under the Government of India's MSME scheme, recognizing our standing as a trusted, government-acknowledged manufacturing enterprise in the pharmaceutical sector.",
        image: '/images/msme-bg.png',
        pdf: msme,
        color: '#1A237E',
        accent: 'rgba(26, 35, 126, 0.08)',
        badge: 'Govt. Recognition',
    },
    {
        id: 'fssai',
        name: 'FSSAI Licensed',
        authority: 'Food Safety and Standards Authority of India',
        description:
            "Licensed by FSSAI — India's apex food regulatory body — confirming our adherence to national food safety regulations for herbal extracts, spray-dried powders, and nutraceutical ingredients.",
        image: '/images/FSSAI_logo.png',
        pdf: fssaiPdf,
        color: '#BF360C',
        accent: 'rgba(191, 54, 12, 0.08)',
        badge: 'Food Safety',
    },
    {
        id: 'spiceboard',
        name: 'Spices Board Certified',
        authority: 'Spices Board of India, Ministry of Commerce',
        description:
            'Certified by the Spices Board of India — a statutory body under the Government of India — affirming the quality, purity, and traceability of our spice-derived extracts and essential oils for domestic and export markets.',
        image: '/images/spice_boards_bharat.jpg',
        pdf: '/images/spice_boards_bharat.jpg',
        color: '#F57F17',
        accent: 'rgba(245, 127, 23, 0.08)',
        badge: 'Export Quality',
    },
];

function CertCard({ cert }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`cert-card ${hovered ? 'cert-card--hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ '--cert-color': cert.color, '--cert-accent': cert.accent }}
        >
            {/* Top accent line */}
            <div className="cert-card__topbar" />

            {/* Badge */}
            <span className="cert-card__badge">{cert.badge}</span>

            {/* Logo */}
            <div className="cert-card__logo-wrap">
                <img src={cert.image} alt={cert.name} className="cert-card__logo" />
            </div>

            {/* Text */}
            <div className="cert-card__body">
                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__authority">{cert.authority}</p>
                <p className="cert-card__desc">{cert.description}</p>
            </div>

            {/* CTA */}
            <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card__cta"
            >
                <span>View Certificate</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
            </a>
        </div>
    );
}

function Certifications() {
    return (
        <div className="cert-page">

            {/* ── HERO ── */}
            <div className="cert-hero">
                <div className="cert-hero__bg-overlay" />
                <div className="cert-hero__content">
                    <h1 className="cert-hero__title">
                        Our Certifications &<br />Accreditations
                    </h1>
                    <div className="cert-hero__divider" />
                    <p className="cert-hero__subtitle">
                        Every certificate is a promise — of purity, safety, and unwavering quality
                        delivered to markets across the globe.
                    </p>
                </div>
                {/* Decorative circles */}
                <div className="cert-hero__circle cert-hero__circle--1" />
                <div className="cert-hero__circle cert-hero__circle--2" />
            </div>

            {/* ── TRUST STRIP ── */}
            <div className="cert-trust-strip">
                <div className="cert-trust-item">
                    <span className="cert-trust-num">8</span>
                    <span className="cert-trust-label">Certifications</span>
                </div>
                <div className="cert-trust-divider" />
                <div className="cert-trust-item">
                    <span className="cert-trust-num">10+</span>
                    <span className="cert-trust-label">Countries Served</span>
                </div>
                <div className="cert-trust-divider" />
                <div className="cert-trust-item">
                    <span className="cert-trust-num">100%</span>
                    <span className="cert-trust-label">Quality Assured</span>
                </div>
                <div className="cert-trust-divider" />
                <div className="cert-trust-item">
                    <span className="cert-trust-num">GMP</span>
                    <span className="cert-trust-label">Compliant Facility</span>
                </div>
            </div>

            {/* ── CARDS GRID ── */}
            <div className="cert-grid-section">
                <div className="cert-grid">
                    {certifications.map((cert) => (
                        <CertCard key={cert.id} cert={cert} />
                    ))}
                </div>
            </div>

            {/* ── BOTTOM BANNER ── */}
            <div className="cert-bottom-banner">
                <div className="cert-bottom-banner__inner">
                    <div className="cert-bottom-banner__leaf">🌿</div>
                    <h2 className="cert-bottom-banner__title">
                        Quality Is Not Just a Standard — It's Our Identity
                    </h2>
                    <p className="cert-bottom-banner__sub">
                        From raw herb sourcing to final dispatch, every step at Phyto Ingredients
                        Biopharma is governed by internationally recognized protocols.
                    </p>
                    <a href="/contact-form" className="cert-bottom-banner__btn">
                        Request a Sample
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Certifications;
