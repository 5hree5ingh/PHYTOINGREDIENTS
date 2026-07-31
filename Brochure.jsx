import React, { useState, useEffect, useRef } from 'react'

function Brochure() {
    const [zoom, setZoom] = useState(120)
    const [currentPage, setCurrentPage] = useState(1)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const totalPages = 4
    const pageRefs = useRef([])

    const zoomIn = () => setZoom(z => Math.min(z + 10, 200))
    const zoomOut = () => setZoom(z => Math.max(z - 10, 50))
    const resetZoom = () => setZoom(100)

    useEffect(() => {
        const onScroll = () => {
            setShowScrollTop(window.scrollY > 300)
            // detect current page
            pageRefs.current.forEach((ref, i) => {
                if (!ref) return
                const rect = ref.getBoundingClientRect()
                if (rect.top <= 120 && rect.bottom > 120) setCurrentPage(i + 1)
            })
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    const goToPage = (n) => {
        const el = pageRefs.current[n - 1]
        if (el) {
            const TOOLBAR_OFFSET = 100 // sticky toolbar (~52px) + page-jump bar (~38px) + a little breathing room
            const top = el.getBoundingClientRect().top + window.scrollY - TOOLBAR_OFFSET
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <div style={{ minHeight: '100vh', width: '100%', background: '#3a3a3a', display: 'flex', flexDirection: 'column' }}>

            {/* ── STICKY TOOLBAR ── */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 100,
                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 20px', gap: '12px', flexWrap: 'wrap'
            }}>
                {/* Left: back + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button onClick={() => window.history.back()} style={toolBtn}>
                        ← Back
                    </button>
                    <div>
                        <div style={{ color: 'white', fontWeight: '800', fontSize: '15px', letterSpacing: '0.3px' }}>
                            Planttech Engineering — Brochure
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>
                            4 Pages · A4 Format
                        </div>
                    </div>
                </div>

                {/* Centre: page navigation */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button onClick={() => goToPage(Math.max(1, currentPage - 1))} style={toolBtn} title="Previous page">‹</button>
                    <div style={{ color: 'white', fontSize: '13px', fontWeight: '700', minWidth: '80px', textAlign: 'center' }}>
                        Page {currentPage} / {totalPages}
                    </div>
                    <button onClick={() => goToPage(Math.min(totalPages, currentPage + 1))} style={toolBtn} title="Next page">›</button>
                </div>

                {/* Right: zoom + download */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button onClick={zoomOut} style={toolBtn} title="Zoom out">−</button>
                    <button onClick={resetZoom} style={{ ...toolBtn, minWidth: '58px', fontWeight: '700' }} title="Reset zoom">
                        {zoom}%
                    </button>
                    <button onClick={zoomIn} style={toolBtn} title="Zoom in">+</button>

                    <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.3)', margin: '0 4px' }} />

                    <a
                        href="/PLANTTECH.pdf"
                        download="PLANTTECH.pdf"
                        style={{ textDecoration: 'none' }}
                    >
                        <button style={{ ...toolBtn, background: 'rgba(255,255,255,0.95)', color: '#1e3a8a', fontWeight: '800', padding: '8px 16px' }}>
                            ⬇ Download PDF
                        </button>
                    </a>
                </div>
            </div>

            {/* ── PAGE JUMP BAR ── */}
            <div style={{
                display: 'flex', justifyContent: 'center', gap: '8px', padding: '10px 0 4px',
                background: '#2d2d2d'
            }}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => goToPage(i + 1)} style={{
                        padding: '4px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer',
                        fontSize: '12px', fontWeight: '700',
                        background: currentPage === i + 1
                            ? 'linear-gradient(135deg,#1e3a8a,#059669)'
                            : 'rgba(255,255,255,0.12)',
                        color: 'white',
                        transition: 'all 0.2s'
                    }}>
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* ── PAGES AREA ── */}
            <div style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '28px 20px 60px', gap: '0', overflowX: 'hidden'
            }}>

                {/* PAGE 1 WRAPPER */}
                <div ref={el => pageRefs.current[0] = el} style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Page 1 of 4</div>
                    <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center', transition: 'transform 0.25s ease', marginBottom: zoom !== 100 ? `${(zoom / 100 - 1) * 297 * 3.7785}px` : '0' }}>
                        {/* A4 Container - 210mm x 297mm */}
                        <div style={{
                            width: '210mm',
                            height: '297mm',
                            background: 'white',
                            boxShadow: '0 10px 50px rgba(0,0,0,0.4)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Header Section with Gradient */}
                            <div style={{
                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                padding: '42px 35px',
                                textAlign: 'center',
                                color: 'white',
                                position: 'relative',
                                flexShrink: 0
                            }}>
                                {/* Company Logo */}
                                <div style={{
                                    marginBottom: '22px'
                                }}>
                                    <img src="/PLANT_TECH_LOGO.png" alt="Planttech Logo" style={{
                                        height: '82px',
                                        width: 'auto',
                                        filter: 'brightness(0) invert(1)'
                                    }} />
                                </div>

                                {/* Company Name */}
                                <h1 style={{
                                    fontSize: '43px',
                                    fontWeight: '800',
                                    margin: '0 0 16px 0',
                                    letterSpacing: '-0.5px',
                                    lineHeight: '1.2'
                                }}>
                                    Planttech Engineering Pvt. Ltd.
                                </h1>

                                {/* Subtitle */}
                                <p style={{
                                    fontSize: '16.5px',
                                    fontWeight: '500',
                                    margin: '0 0 18px 0',
                                    lineHeight: '1.5'
                                }}>
                                    Engineering Excellence for Herbal, Nutraceutical, Pharma & Chemical Industries
                                </p>



                                {/* Certification Badge */}
                                <div style={{
                                    display: 'inline-block',
                                    padding: '13px 30px',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    border: '2px solid rgba(255, 255, 255, 0.4)',
                                    borderRadius: '25px',
                                    fontSize: '14.5px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>
                                    ISO 9001:2015, MSME Certified Company
                                </div>
                            </div>

                            {/* Hero Image Section */}
                            <div style={{
                                flex: 1,
                                minHeight: '410px',
                                background: 'linear-gradient(rgba(30, 58, 138, 0.1), rgba(5, 150, 105, 0.1)), url("/hero-plant.jpg") center center / cover no-repeat',
                                position: 'relative'
                            }}>
                                {/* Overlay gradient for better text visibility if needed */}
                            </div>

                            {/* Sectors We Serve Section */}
                            <div style={{
                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                padding: '38px 35px',
                                color: 'white',
                                textAlign: 'center',
                                flexShrink: 0
                            }}>
                                <h2 style={{
                                    fontSize: '33px',
                                    fontWeight: '800',
                                    margin: '0 0 9px 0',
                                    letterSpacing: '1px'
                                }}>
                                    SECTORS WE SERVE
                                </h2>

                                {/* Decorative underline */}
                                <div style={{
                                    width: '85px',
                                    height: '4px',
                                    background: 'white',
                                    margin: '0 auto 26px auto'
                                }}></div>

                                {/* Sectors List */}
                                <div style={{
                                    fontSize: '13.5px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    lineHeight: '2.1'
                                }}>
                                    <p style={{ margin: '0 0 9px 0' }}>
                                        HERBAL EXTRACTION • PHARMACEUTICALS • AGRO CHEMICAL • CHEMICALS
                                    </p>
                                    <p style={{ margin: '0 0 9px 0' }}>
                                        PAINTING INDUSTRIES • DAIRY • REFINERY • POWER • CEMENT
                                    </p>
                                    <p style={{ margin: '0 0 23px 0' }}>
                                        SUGAR MILL • STEEL • OIL AND GAS • FOOD AND BEVERAGE
                                    </p>

                                    {/* Website URL */}
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        padding: '11px 22px',
                                        borderRadius: '8px',
                                        display: 'inline-block',
                                        fontSize: '14.5px',
                                        fontWeight: '700',
                                        letterSpacing: '0.5px'
                                    }}>
                                        🌐 www.planttech.co.in
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* END PAGE 1 WRAPPER */}

                {/* PAGE 2 WRAPPER */}
                <div ref={el => pageRefs.current[1] = el} style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Page 2 of 4</div>
                    <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center', transition: 'transform 0.25s ease', marginBottom: zoom !== 100 ? `${(zoom / 100 - 1) * 297 * 3.7785}px` : '0' }}>
                        <div style={{
                            width: '210mm',
                            minHeight: '297mm',
                            background: 'white',
                            boxShadow: '0 10px 50px rgba(0,0,0,0.4)',
                            padding: '40px 30px'
                        }}>
                            {/* Header */}
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: '800',
                                textAlign: 'center',
                                marginBottom: '10px',
                                color: '#1e3a8a',
                                letterSpacing: '-0.5px'
                            }}>
                                Our Specialized Equipment
                            </h2>

                            {/* Decorative underline */}
                            <div style={{
                                width: '80px',
                                height: '4px',
                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                margin: '0 auto 35px auto'
                            }}></div>

                            {/* Equipment Grid - 4 columns x 4 rows */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '15px',
                                marginBottom: '40px'
                            }}>
                                {[
                                    { name: 'Reaction Vessel', img: '/brochure-reaction-vessel.png' },
                                    { name: 'Rotary Extractor', img: '/brochure-rotatory-extractor.png' },
                                    { name: 'Condenser/Heat Exchanger', img: '/brochure-heat-exchanger.png' },
                                    { name: 'Distillation Column', img: '/brochure-distillation-column.png' },
                                    { name: 'Ribbon Blender', img: '/brochure-ribbon-blender.png' },
                                    { name: 'Octagonal Blender', img: '/brochure-octagonal-blender.png' },
                                    { name: 'Storage Tanks', img: '/brochure-storage-tanks.png' },
                                    { name: 'Limpet Reactor', img: '/brochure-limpet-reactor.png' },
                                    { name: 'Evaporator', img: '/brochure-evaporator.png' },
                                    { name: 'CIP System', img: '/brochure-pneumatic-conveying.png' },
                                    { name: 'Agitator Nutsche Filter', img: '/brochure-agitator-filter.png' },
                                    { name: 'Powder Liquid Mixing', img: '/brochure-powder-mixing.png' },
                                    { name: 'Screw Conveyor', img: '/brochure-screw-conveyor.png' },
                                    { name: 'Belt Conveyor', img: '/brochure-belt-conveyor.jpg' },
                                    { name: 'Wet Scrubber', img: '/brochure-wet-scrubber.png' },
                                    { name: 'Vacuum Tray Dryer', img: '/brochure-vacuum-dryer.png' }
                                ].map((equipment, index) => (
                                    <div key={index} style={{
                                        background: 'white',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        border: '1px solid #e5e7eb'
                                    }}>
                                        {/* Equipment Image */}
                                        <div style={{
                                            height: '100px',
                                            background: `#f9fafb url('${equipment.img}') center center / contain no-repeat`,
                                            borderBottom: '1px solid #e5e7eb'
                                        }}></div>

                                        {/* Equipment Name with Gradient */}
                                        <div style={{
                                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                            padding: '10px',
                                            textAlign: 'center'
                                        }}>
                                            <h4 style={{
                                                fontSize: '11px',
                                                fontWeight: '700',
                                                color: 'white',
                                                margin: 0,
                                                lineHeight: '1.3'
                                            }}>
                                                {equipment.name}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Product List Section */}
                            <div style={{
                                background: '#f0f9ff',
                                borderRadius: '12px',
                                padding: '30px',
                                border: '2px solid #bfdbfe'
                            }}>
                                <h3 style={{
                                    fontSize: '28px',
                                    fontWeight: '800',
                                    textAlign: 'center',
                                    marginBottom: '8px',
                                    color: '#0c7490',
                                    letterSpacing: '0.5px'
                                }}>
                                    PRODUCT LIST
                                </h3>

                                {/* Decorative underline */}
                                <div style={{
                                    width: '60px',
                                    height: '3px',
                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                    margin: '0 auto 25px auto'
                                }}></div>

                                {/* 3-Column List */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '20px 30px',
                                    fontSize: '13px',
                                    color: '#374151'
                                }}>
                                    <div style={{ lineHeight: '2' }}>
                                        <div>✓ Rotary Extractor</div>
                                        <div>✓ Reaction Vessel</div>
                                        <div>✓ Pressure Vessel</div>
                                        <div>✓ Condenser</div>
                                        <div>✓ Distillation Column</div>
                                        <div>✓ Ribbon Blender</div>
                                        <div>✓ Agitated Thin Film Evaporator</div>
                                    </div>
                                    <div style={{ lineHeight: '2' }}>
                                        <div>✓ Octagonal Blender</div>
                                        <div>✓ Condenser</div>
                                        <div>✓ Storage Tanks</div>
                                        <div>✓ Limpet Reactor</div>
                                        <div>✓ Mass Mixer</div>
                                        <div>✓ Agitator Nutsche Filter</div>
                                        <div>✓ Falling Film Evaporator</div>
                                    </div>
                                    <div style={{ lineHeight: '2' }}>
                                        <div>✓ Powder, Liquid Mixing</div>
                                        <div>✓ Screw Conveyor</div>
                                        <div>✓ Belt Conveyor</div>
                                        <div>✓ Wet Scrubber</div>
                                        <div>✓ Vacuum Tray Dryer</div>
                                        <div>✓ Rising Film Evaporator</div>
                                        <div>✓ And many more...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* END PAGE 2 WRAPPER */}

                {/* PAGE 3 WRAPPER */}
                <div ref={el => pageRefs.current[2] = el} style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Page 3 of 4</div>
                    <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center', transition: 'transform 0.25s ease', marginBottom: zoom !== 100 ? `${(zoom / 100 - 1) * 297 * 3.7785}px` : '0' }}>
                        <div style={{
                            width: '210mm',
                            height: '297mm',
                            background: 'white',
                            boxShadow: '0 10px 50px rgba(0,0,0,0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Hero Section with Gradient Background */}
                            <div style={{
                                background: 'linear-gradient(135deg, #1e3a8a 0%, #0c7490 50%, #059669 100%)',
                                padding: '38px 40px',
                                color: 'white',
                                position: 'relative',
                                flexShrink: 0
                            }}>
                                <h2 style={{
                                    fontSize: '39px',
                                    fontWeight: '900',
                                    margin: '0 0 13px 0',
                                    letterSpacing: '-1px',
                                    textAlign: 'center'
                                }}>
                                    About Planttech Engineering
                                </h2>

                                <div style={{
                                    width: '95px',
                                    height: '4px',
                                    background: 'white',
                                    margin: '0 auto 22px auto'
                                }}></div>

                                <p style={{
                                    fontSize: '14.5px',
                                    lineHeight: '1.75',
                                    textAlign: 'center',
                                    margin: '0 0 27px 0',
                                    opacity: '0.95',
                                    maxWidth: '88%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}>
                                    Planttech Engineering Pvt. Ltd. is a trusted manufacturer of state-of-the-art process machinery serving the herbal, nutraceutical, pharmaceutical, and chemical industries. Based in Haridwar, Uttarakhand, at the foothills of the Himalayas, we deliver innovative, reliable, and customer-focused engineering solutions for plant setups worldwide.
                                </p>

                                {/* Company Stats */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '26px',
                                    marginTop: '23px'
                                }}>
                                    {[
                                        { number: 'ISO 9001:2015', label: 'Certified' },
                                        { number: 'MSME', label: 'Registered' },
                                        { number: 'Haridwar', label: 'Based In' }
                                    ].map((stat, index) => (
                                        <div key={index} style={{
                                            textAlign: 'center',
                                            padding: '21px',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            borderRadius: '12px',
                                            backdropFilter: 'blur(10px)'
                                        }}>
                                            <div style={{
                                                fontSize: '19px',
                                                fontWeight: '800',
                                                marginBottom: '5px'
                                            }}>
                                                {stat.number}
                                            </div>
                                            <div style={{
                                                fontSize: '13px',
                                                opacity: '0.9',
                                                fontWeight: '500'
                                            }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Section */}
                            <div style={{
                                padding: '38px 40px',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}>
                                {/* Why Choose Us Section */}
                                <h3 style={{
                                    fontSize: '29px',
                                    fontWeight: '800',
                                    textAlign: 'center',
                                    marginBottom: '11px',
                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Why Choose Us
                                </h3>

                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '13.5px',
                                    color: '#6b7280',
                                    marginBottom: '29px'
                                }}>
                                    Comprehensive solutions for your industrial needs
                                </p>

                                {/* Features Grid - 3 columns */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '17px',
                                    marginBottom: '29px'
                                }}>
                                    {[
                                        { title: 'Industry Experts', desc: 'Product & machinery specialists' },
                                        { title: 'Zero Charges', desc: 'No consultancy fees' },
                                        { title: 'End-to-End', desc: 'Complete support & delivery' },
                                        { title: 'Installation', desc: 'Onsite commissioning team' },
                                        { title: 'Sales Guarantee', desc: 'For herbal extracts' },
                                        { title: 'Lab Setup', desc: 'Chemical & microbial labs' },
                                        { title: 'Raw Materials', desc: 'Sourcing & selection guidance' },
                                        { title: 'Custom Solutions', desc: 'Tailored to your needs' },
                                        { title: 'Worldwide', desc: 'Global plant setups' }
                                    ].map((feature, index) => (
                                        <div key={index} style={{
                                            textAlign: 'center',
                                            padding: '17px 13px',
                                            background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
                                            borderRadius: '12px',
                                            border: '2px solid #e0f2fe',
                                            transition: 'transform 0.3s ease'
                                        }}>
                                            <div style={{
                                                width: '46px',
                                                height: '46px',
                                                margin: '0 auto 11px auto',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '21px',
                                                fontWeight: 'bold',
                                                boxShadow: '0 4px 12px rgba(30, 58, 138, 0.25)'
                                            }}>
                                                ✓
                                            </div>
                                            <div style={{
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: '#1e3a8a',
                                                marginBottom: '4px'
                                            }}>
                                                {feature.title}
                                            </div>
                                            <div style={{
                                                fontSize: '10px',
                                                color: '#6b7280',
                                                lineHeight: '1.4'
                                            }}>
                                                {feature.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom CTA Section */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                    padding: '24px',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    color: 'white',
                                    boxShadow: '0 8px 24px rgba(30, 58, 138, 0.3)'
                                }}>
                                    <div style={{
                                        fontSize: '23px',
                                        fontWeight: '800',
                                        margin: '0'
                                    }}>
                                        Engineering Excellence Since Inception
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* END PAGE 3 WRAPPER */}

                {/* PAGE 4 WRAPPER */}
                <div ref={el => pageRefs.current[3] = el} style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Page 4 of 4</div>
                    <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center', transition: 'transform 0.25s ease', marginBottom: zoom !== 100 ? `${(zoom / 100 - 1) * 297 * 3.7785}px` : '0' }}>
                        <div style={{
                            width: '210mm',
                            height: '297mm',
                            background: 'white',
                            boxShadow: '0 10px 50px rgba(0,0,0,0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Turnkey Projects Header */}
                            <div style={{
                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                padding: '22px 30px',
                                textAlign: 'center',
                                color: 'white',
                                flexShrink: 0
                            }}>
                                <h2 style={{
                                    fontSize: '32px',
                                    fontWeight: '800',
                                    margin: '0 0 6px 0',
                                    letterSpacing: '1px'
                                }}>
                                    TURNKEY PROJECTS
                                </h2>
                                <div style={{
                                    width: '70px',
                                    height: '3px',
                                    background: 'white',
                                    margin: '0 auto 8px auto'
                                }}></div>
                                <p style={{
                                    fontSize: '13px',
                                    margin: 0,
                                    opacity: 0.9,
                                    fontWeight: '500'
                                }}>
                                    Complete End-to-End Solutions for Industrial Plants
                                </p>
                            </div>

                            {/* Turnkey Projects Content */}
                            <div style={{
                                padding: '16px 28px 16px 28px',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}>
                                {/* Top Section: List + 2x2 images */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1.5fr',
                                    gap: '18px',
                                    marginBottom: '14px',
                                    flex: 1,
                                    minHeight: 0
                                }}>
                                    {/* Project List - Card Style */}
                                    <div style={{
                                        background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
                                        padding: '18px 18px',
                                        borderRadius: '10px',
                                        border: '1px solid #bfdbfe',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <h3 style={{
                                            fontSize: '13px',
                                            fontWeight: '800',
                                            color: '#1e3a8a',
                                            margin: '0 0 10px 0',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            Our Capabilities
                                        </h3>
                                        {[
                                            'Herbal Extraction Plant',
                                            'Essential Oil Extraction Plant',
                                            'Solvent Recovery Plant',
                                            'Dairy Plant',
                                            'Wet Scrubber',
                                            'Dust Extraction System',
                                            'Ash Handling System',
                                            'Used Oil Recycling Plant'
                                        ].map((project, idx) => (
                                            <div key={idx} style={{
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                color: '#1f2937',
                                                padding: '8px 0',
                                                borderBottom: idx < 7 ? '1px solid rgba(30,58,138,0.1)' : 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            }}>
                                                <span style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '10px',
                                                    fontWeight: '900',
                                                    flexShrink: 0
                                                }}>✓</span>
                                                {project}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Top 2x2 Project Images */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: '10px'
                                    }}>
                                        {[
                                            { name: 'Herbal Extraction Plant ', img: '/herbal_extraction_plant.png' },
                                            { name: 'Essential Oil Extraction Plant', img: '/oil_extraction_plant.png' },
                                            { name: 'Solvent Recovery Plant', img: '/solvent_recovery_plant.png' },
                                            { name: 'Dairy Plant', img: '/Dairy_plant.png' }
                                        ].map((project, idx) => (
                                            <div key={idx} style={{
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
                                                border: '1px solid #e5e7eb',
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}>
                                                <div style={{
                                                    flex: 1,
                                                    minHeight: '80px',
                                                    background: `linear-gradient(180deg, rgba(30,58,138,0.03) 0%, rgba(5,150,105,0.03) 100%), #f8fafc url('${project.img}') center center / cover no-repeat`
                                                }}></div>
                                                <div style={{
                                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                                    padding: '6px 8px',
                                                    textAlign: 'center',
                                                    flexShrink: 0
                                                }}>
                                                    <h4 style={{
                                                        fontSize: '9px',
                                                        fontWeight: '700',
                                                        color: 'white',
                                                        margin: 0,
                                                        letterSpacing: '0.3px'
                                                    }}>
                                                        {project.name}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Row: 4 project images */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: '10px',
                                    marginTop: '14px'
                                }}>
                                    {[
                                        { name: 'Wet Scrubber', img: '/brochure-wet-scrubber.png' },
                                        { name: 'Dust Extraction System', img: '/Dust_extraction.png' },
                                        { name: 'Ash Handling System', img: '/Ash_handler.png' },
                                        { name: 'Used Oil Recycling Plant', img: '/oil.png' }
                                    ].map((project, idx) => (
                                        <div key={idx} style={{
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
                                            border: '1px solid #e5e7eb'
                                        }}>
                                            <div style={{
                                                height: '100px',
                                                background: `linear-gradient(180deg, rgba(30,58,138,0.03) 0%, rgba(5,150,105,0.03) 100%), #f8fafc url('${project.img}') center center / contain no-repeat`
                                            }}></div>
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                                padding: '6px 8px',
                                                textAlign: 'center'
                                            }}>
                                                <h4 style={{
                                                    fontSize: '9px',
                                                    fontWeight: '700',
                                                    color: 'white',
                                                    margin: 0,
                                                    letterSpacing: '0.3px'
                                                }}>
                                                    {project.name}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Footer - Premium Gradient Section */}
                            <div style={{
                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                padding: '22px 28px 0 28px',
                                color: 'white',
                                position: 'relative',
                                flexShrink: 0
                            }}>


                                {/* Logo + Company Name */}
                                <div style={{
                                    textAlign: 'center',
                                    marginBottom: '16px',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    <img src="/PLANT_TECH_LOGO.png" alt="Planttech Logo" style={{
                                        height: '45px',
                                        width: 'auto',
                                        marginBottom: '8px',
                                        filter: 'brightness(0) invert(1)',
                                        opacity: 0.95
                                    }} />
                                    <h2 style={{
                                        fontSize: '20px',
                                        fontWeight: '800',
                                        margin: '0 0 6px 0',
                                        letterSpacing: '0.5px'
                                    }}>
                                        PLANTTECH ENGINEERING PVT. LTD.
                                    </h2>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '4px 14px',
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        borderRadius: '20px',
                                        fontSize: '10px',
                                        fontWeight: '600',
                                        letterSpacing: '0.5px'
                                    }}>
                                        ISO 9001:2015  •  MSME Certified Company
                                    </div>
                                </div>

                                {/* Address Cards - 2 column */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '12px',
                                    marginBottom: '12px',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.12)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '12px 14px',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            margin: '0 0 5px 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <span style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '5px',
                                                background: 'rgba(255,255,255,0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '10px'
                                            }}>🏢</span>
                                            Corporate Office
                                        </h4>
                                        <p style={{
                                            fontSize: '10px',
                                            lineHeight: '1.5',
                                            margin: 0,
                                            opacity: 0.9,
                                            fontWeight: '500'
                                        }}>
                                            Khasara No. 587, Akbarpuruood<br />
                                            Behind Shree Cement<br />
                                            Laksar Road<br />
                                            Lakshar, Haridwar<br />
                                            Uttarakhand, India - 247663
                                        </p>
                                    </div>
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.12)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '12px 14px',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            margin: '0 0 5px 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <span style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '5px',
                                                background: 'rgba(255,255,255,0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '10px'
                                            }}>🏭</span>
                                            Manufacturing Unit
                                        </h4>
                                        <p style={{
                                            fontSize: '10px',
                                            lineHeight: '1.5',
                                            margin: 0,
                                            opacity: 0.9,
                                            fontWeight: '500'
                                        }}>
                                            Plot no 1-11, Mini Industrial Estate<br />
                                            Pipli, Haridwar, Laksar Road<br />
                                            Laksar, Haridwar, Uttarakhand - 247663
                                        </p>
                                    </div>
                                </div>

                                {/* Email + Phone Row */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '12px',
                                    marginBottom: '14px',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.12)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '10px 14px',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            margin: '0 0 4px 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <span style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '5px',
                                                background: 'rgba(255,255,255,0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '10px'
                                            }}>✉</span>
                                            Email Us
                                        </h4>
                                        <p style={{
                                            fontSize: '10px',
                                            lineHeight: '1.6',
                                            margin: 0,
                                            opacity: 0.9,
                                            fontWeight: '500'
                                        }}>
                                            info@planttech.co.in | sales@planttech.co.in<br />
                                            planttechengineeringpvtltd@gmail.com
                                        </p>
                                    </div>
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.12)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '10px 14px',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            margin: '0 0 4px 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <span style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '5px',
                                                background: 'rgba(255,255,255,0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '10px'
                                            }}>📞</span>
                                            Sales Enquiry
                                        </h4>
                                        <p style={{
                                            fontSize: '11px',
                                            lineHeight: '1.6',
                                            margin: 0,
                                            opacity: 0.9,
                                            fontWeight: '600'
                                        }}>
                                            +91-8130000846 <br />
                                            +91-8840804180 <br />
                                            +91-7503322415
                                        </p>
                                    </div>
                                </div>

                                {/* Website Footer Strip */}
                                <div style={{
                                    margin: '0 -28px',
                                    padding: '10px',
                                    background: 'rgba(0, 0, 0, 0.2)',
                                    textAlign: 'center',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    <span style={{
                                        fontSize: '13px',
                                        fontWeight: '700',
                                        letterSpacing: '1px'
                                    }}>
                                        🌐  www.planttech.co.in
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {showScrollTop ? (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed', bottom: '32px', right: '32px', zIndex: 200,
                        width: '48px', height: '48px', borderRadius: '50%', border: 'none',
                        background: 'linear-gradient(135deg,#1e3a8a,#059669)',
                        color: 'white', fontSize: '20px', cursor: 'pointer',
                        boxShadow: '0 4px 18px rgba(0,0,0,0.35)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'transform 0.2s'
                    }}
                    title="Scroll to top"
                >
                    ↑
                </button>
            ) : null}

        </div>
    )
}

const toolBtn = {
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    padding: '7px 13px',
    borderRadius: '7px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: 1,
    transition: 'background 0.2s',
}

export default Brochure
