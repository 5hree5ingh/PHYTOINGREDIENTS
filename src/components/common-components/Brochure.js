import React, { useState, useEffect, useRef } from 'react'

const TOTAL = 12
const PAGES = Array.from({ length: TOTAL }, (_, i) => ({
    number: i + 1,
    src: `/images/Brochure_images/${i + 1}.png`,
    alt: `PhytoIngredients Brochure – Page ${i + 1}`,
}))

const TOOLBAR_H_DESKTOP = 68
const TOOLBAR_H_MOBILE  = 52
const JUMPBAR_H = 36

/* ── SVG Icons ── */
const IconBack = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 5l-7 7 7 7"/>
    </svg>
)
const IconChevLeft = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6"/>
    </svg>
)
const IconChevRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6"/>
    </svg>
)
const IconZoomOut = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
)
const IconZoomIn = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
)
const IconDownload = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
)

export default function Brochure() {
    const [zoom, setZoom]                   = useState(100)
    const [currentPage, setCurrentPage]     = useState(1)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [loadedPages, setLoadedPages]     = useState({})
    const [hoveredBtn, setHoveredBtn]       = useState(null)
    const [isMobile, setIsMobile]           = useState(window.innerWidth <= 640)
    const pageRefs = useRef([])

    // Track viewport size for responsive behaviour
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 640)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const TOOLBAR_H = isMobile ? TOOLBAR_H_MOBILE : TOOLBAR_H_DESKTOP
    const TOP_OFFSET = TOOLBAR_H + JUMPBAR_H

    const zoomIn    = () => setZoom(z => Math.min(z + 10, 200))
    const zoomOut   = () => setZoom(z => Math.max(z - 10, 40))
    const resetZoom = () => setZoom(100)

    useEffect(() => {
        const onScroll = () => {
            setShowScrollTop(window.scrollY > 300)
            pageRefs.current.forEach((ref, i) => {
                if (!ref) return
                const rect = ref.getBoundingClientRect()
                if (rect.top <= TOP_OFFSET + 20 && rect.bottom > TOP_OFFSET + 20) setCurrentPage(i + 1)
            })
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [TOP_OFFSET])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    const goToPage = (n) => {
        const el = pageRefs.current[n - 1]
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - TOP_OFFSET - 12
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const A4_PX_HEIGHT = 297 * 3.7795
    const scaleOffset  = zoom !== 100 ? `${(zoom / 100 - 1) * A4_PX_HEIGHT}px` : '0'
    const progress     = Math.round(((currentPage - 1) / (TOTAL - 1)) * 100)

    /* ── Reusable hover-aware icon button ── */
    const IconBtn = ({ id, onClick, title, children, style = {} }) => (
        <button
            onClick={onClick}
            title={title}
            onMouseEnter={() => setHoveredBtn(id)}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: isMobile ? '30px' : '34px',
                height: isMobile ? '30px' : '34px',
                borderRadius: '8px', border: 'none',
                cursor: 'pointer', transition: 'all 0.18s ease',
                background: hoveredBtn === id
                    ? 'rgba(255,255,255,0.18)'
                    : 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.9)',
                boxShadow: hoveredBtn === id ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                transform: hoveredBtn === id ? 'translateY(-1px)' : 'none',
                flexShrink: 0,
                ...style,
            }}
        >{children}</button>
    )

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

                * { box-sizing: border-box; }

                .brochure-root {
                    min-height: 100vh; width: 100%;
                    background: #0d1f12;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                    overflow-x: hidden;
                }

                /* ── Main toolbar ── */
                .brochure-toolbar {
                    position: fixed; top: 0; left: 0; right: 0;
                    height: ${TOOLBAR_H}px;
                    z-index: 500;
                    background: rgba(8, 20, 11, 0.95);
                    backdrop-filter: blur(20px) saturate(180%);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                    display: flex; align-items: center; justify-content: space-between;
                    padding: 0 10px; gap: 6px;
                    box-shadow: 0 1px 0 rgba(200,146,42,0.25), 0 4px 32px rgba(0,0,0,0.6);
                }
                .brochure-toolbar::after {
                    content: '';
                    position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
                    background: linear-gradient(90deg, transparent 0%, rgba(200,146,42,0.5) 30%, rgba(46,125,50,0.5) 70%, transparent 100%);
                }

                /* ── Jump bar ── */
                .brochure-jumpbar {
                    position: fixed; top: ${TOOLBAR_H}px; left: 0; right: 0;
                    height: ${JUMPBAR_H}px;
                    z-index: 499;
                    background: rgba(6, 16, 9, 0.98);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    display: flex; align-items: center; justify-content: flex-start;
                    gap: 4px; padding: 0 10px;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                }
                .brochure-jumpbar::-webkit-scrollbar { display: none; }

                .jump-btn {
                    flex-shrink: 0;
                    min-width: 26px; height: 22px;
                    padding: 0 7px; border-radius: 5px; border: none;
                    cursor: pointer; font-size: 11px; font-weight: 700;
                    font-family: 'Inter', sans-serif;
                    color: rgba(255,255,255,0.55);
                    background: rgba(255,255,255,0.06);
                    transition: all 0.18s ease;
                    touch-action: manipulation;
                }
                .jump-btn:hover, .jump-btn:active { background: rgba(255,255,255,0.14); color: white; }
                .jump-btn.active {
                    background: linear-gradient(135deg, #1a5c2a 0%, #2e7d32 100%);
                    color: #fff;
                    box-shadow: 0 0 0 1px rgba(200,146,42,0.45), 0 2px 8px rgba(26,77,46,0.6);
                }

                /* ── Logo area ── */
                .toolbar-logo-name {
                    font-size: 13px; font-weight: 800;
                    color: #fff; letter-spacing: 0.2px; line-height: 1.2;
                    white-space: nowrap;
                }
                .toolbar-logo-sub {
                    font-size: 9px; font-weight: 500;
                    color: rgba(255,255,255,0.45); letter-spacing: 0.8px;
                    text-transform: uppercase; margin-top: 1px;
                    white-space: nowrap;
                }

                /* ── Page indicator ── */
                .page-pill {
                    display: flex; align-items: center; gap: 4px;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px; padding: 4px 10px;
                }
                .page-fraction {
                    font-size: 12px; font-weight: 700; color: #fff;
                    min-width: 40px; text-align: center; letter-spacing: 0.3px;
                    white-space: nowrap;
                }
                .page-of { color: rgba(255,255,255,0.35); font-size: 11px; }

                /* ── Zoom control ── */
                .zoom-display {
                    min-width: 44px; height: 30px; padding: 0 8px;
                    border-radius: 7px; border: 1px solid rgba(255,255,255,0.12);
                    background: rgba(255,255,255,0.05);
                    color: rgba(255,255,255,0.9); font-size: 11px; font-weight: 700;
                    cursor: pointer; text-align: center;
                    font-family: 'Inter', sans-serif; letter-spacing: 0.5px;
                    transition: all 0.18s; flex-shrink: 0;
                }
                .zoom-display:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.22); }

                /* ── Download button ── */
                .download-btn {
                    display: flex; align-items: center; gap: 6px;
                    height: 32px; padding: 0 14px;
                    border-radius: 8px; border: none; cursor: pointer;
                    background: linear-gradient(135deg, #c8922a 0%, #e0a83a 100%);
                    color: #0d1f12; font-size: 12px; font-weight: 800;
                    font-family: 'Inter', sans-serif; letter-spacing: 0.3px;
                    box-shadow: 0 2px 12px rgba(200,146,42,0.4);
                    transition: all 0.2s ease;
                    white-space: nowrap; flex-shrink: 0;
                    touch-action: manipulation;
                }
                .download-btn:hover {
                    background: linear-gradient(135deg, #d9a030 0%, #f0b840 100%);
                    box-shadow: 0 4px 20px rgba(200,146,42,0.6);
                    transform: translateY(-1px);
                }

                /* ── Divider ── */
                .toolbar-divider {
                    width: 1px; height: 24px;
                    background: rgba(255,255,255,0.1);
                    flex-shrink: 0;
                }

                /* ── Back button ── */
                .back-btn {
                    display: flex; align-items: center; gap: 5px;
                    height: 30px; padding: 0 10px;
                    border-radius: 7px; border: 1px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.06);
                    color: rgba(255,255,255,0.75); font-size: 11px; font-weight: 600;
                    font-family: 'Inter', sans-serif; cursor: pointer;
                    transition: all 0.18s; white-space: nowrap; flex-shrink: 0;
                    touch-action: manipulation;
                }
                .back-btn:hover {
                    background: rgba(255,255,255,0.12);
                    color: #fff; border-color: rgba(255,255,255,0.2);
                }

                /* ── Progress bar ── */
                .progress-track {
                    position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
                    background: rgba(255,255,255,0.06);
                }
                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #1a5c2a, #c8922a);
                    transition: width 0.4s ease;
                }

                /* ── Page content ── */
                .brochure-pages {
                    padding: 20px 12px 80px;
                    display: flex; flex-direction: column; align-items: center;
                    width: 100%;
                }

                /* ── A4 page card ── */
                .page-a4-wrapper {
                    width: 210mm;
                    height: 297mm;
                    background: transparent;
                    box-shadow: 0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
                    border-radius: 2px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                }

                @keyframes shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .scroll-top-btn {
                    position: fixed; bottom: 28px; right: 20px; z-index: 600;
                    width: 42px; height: 42px; border-radius: 12px;
                    background: rgba(8,20,11,0.9);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(200,146,42,0.35);
                    color: #c8922a; cursor: pointer;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,146,42,0.1);
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.2s;
                    animation: fadeUp 0.25s ease;
                    touch-action: manipulation;
                }
                .scroll-top-btn:hover {
                    background: rgba(200,146,42,0.15);
                    box-shadow: 0 6px 28px rgba(200,146,42,0.35);
                    transform: translateY(-2px);
                }

                /* ══════════════════════════════
                   MOBILE  ≤ 640px
                   ══════════════════════════════ */
                @media (max-width: 640px) {
                    /* Pages fill viewport width, keep A4 ratio */
                    .page-a4-wrapper {
                        width: calc(100vw - 24px) !important;
                        height: auto !important;
                        aspect-ratio: 210 / 297;
                    }
                    /* Disable JS scale transform on mobile */
                    .page-scale-wrapper {
                        transform: none !important;
                        margin-bottom: 0 !important;
                    }
                    /* Hide zoom group */
                    .zoom-group { display: none !important; }
                    /* Hide back text */
                    .back-btn-text { display: none; }
                    /* Hide logo sub */
                    .toolbar-logo-sub { display: none; }
                    /* Download: icon only */
                    .download-btn-text { display: none; }
                    .download-btn {
                        padding: 0;
                        width: 30px; height: 30px;
                        border-radius: 8px;
                        justify-content: center;
                    }
                    .brochure-pages { padding: 14px 8px 80px; }
                }

                /* ══════════════════════════════
                   TABLET  641px – 900px
                   ══════════════════════════════ */
                @media (min-width: 641px) and (max-width: 900px) {
                    .page-a4-wrapper {
                        width: calc(100vw - 48px) !important;
                        max-width: 580px;
                        height: auto !important;
                        aspect-ratio: 210 / 297;
                    }
                    .page-scale-wrapper {
                        transform: none !important;
                        margin-bottom: 0 !important;
                    }
                    .zoom-group { display: none !important; }
                    .download-btn-text { display: none; }
                    .download-btn {
                        padding: 0;
                        width: 32px; height: 32px;
                        border-radius: 8px;
                        justify-content: center;
                    }
                }
            `}</style>

            <div className="brochure-root">

                {/* ══════════ FIXED PREMIUM TOOLBAR ══════════ */}
                <div className="brochure-toolbar">

                    {/* LEFT – back + logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                        <button className="back-btn" onClick={() => window.history.back()}>
                            <IconBack />
                            <span className="back-btn-text">Back</span>
                        </button>
                        <div className="toolbar-divider" />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                            <img
                                src="/images/phyto-logo.png"
                                alt="PhytoIngredients"
                                onError={e => { e.target.style.display = 'none' }}
                                style={{ height: '28px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
                            />
                            <div>
                                <div className="toolbar-logo-name">PhytoIngredients</div>
                                <div className="toolbar-logo-sub">Company Brochure</div>
                            </div>
                        </div>
                    </div>

                    {/* CENTRE – page nav */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                        <IconBtn id="prev" onClick={() => goToPage(Math.max(1, currentPage - 1))} title="Previous page">
                            <IconChevLeft />
                        </IconBtn>

                        <div className="page-pill">
                            <span className="page-fraction">
                                <span style={{ color: '#fff' }}>{currentPage}</span>
                                <span className="page-of"> / {TOTAL}</span>
                            </span>
                        </div>

                        <IconBtn id="next" onClick={() => goToPage(Math.min(TOTAL, currentPage + 1))} title="Next page">
                            <IconChevRight />
                        </IconBtn>
                    </div>

                    {/* RIGHT – zoom (desktop only) + download */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
                        <div className="zoom-group" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <IconBtn id="zout" onClick={zoomOut} title="Zoom out"><IconZoomOut /></IconBtn>
                            <button className="zoom-display" onClick={resetZoom} title="Reset zoom">{zoom}%</button>
                            <IconBtn id="zin" onClick={zoomIn} title="Zoom in"><IconZoomIn /></IconBtn>
                            <div className="toolbar-divider" style={{ margin: '0 4px' }} />
                        </div>

                        <a href="/PhytoIngredients_Brochure.pdf" download="PhytoIngredients_Brochure.pdf" style={{ textDecoration: 'none' }}>
                            <button className="download-btn">
                                <IconDownload />
                                <span className="download-btn-text">Download PDF</span>
                            </button>
                        </a>
                    </div>

                    {/* Reading progress bar */}
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                </div>

                {/* ══════════ FIXED JUMP BAR ══════════ */}
                <div className="brochure-jumpbar">
                    {PAGES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i + 1)}
                            className={`jump-btn${currentPage === i + 1 ? ' active' : ''}`}
                        >{i + 1}</button>
                    ))}
                </div>

                {/* ══════════ SPACER ══════════ */}
                <div style={{ height: `${TOP_OFFSET}px` }} />

                {/* ══════════ PAGES ══════════ */}
                <div className="brochure-pages">
                    {PAGES.map((page, i) => (
                        <div
                            key={page.number}
                            ref={el => pageRefs.current[i] = el}
                            style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
                        >
                            <div style={{
                                color: 'rgba(255,255,255,0.25)', fontSize: '10px', fontWeight: '600',
                                letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px',
                            }}>
                                Page {page.number} of {TOTAL}
                            </div>

                            {/* page-scale-wrapper: zoom on desktop, disabled via CSS on mobile */}
                            <div
                                className="page-scale-wrapper"
                                style={{
                                    transform: `scale(${zoom / 100})`,
                                    transformOrigin: 'top center',
                                    transition: 'transform 0.25s ease',
                                    marginBottom: zoom !== 100 ? scaleOffset : '0',
                                }}
                            >
                                {/* page-a4-wrapper: fixed A4 on desktop, fluid via CSS on mobile */}
                                <div className="page-a4-wrapper">
                                    {!loadedPages[page.number] && (
                                        <div style={{
                                            position: 'absolute', inset: 0,
                                            background: 'linear-gradient(110deg,#0d2a14 30%,#1a3d1a 50%,#0d2a14 70%)',
                                            backgroundSize: '200% 100%',
                                            animation: 'shimmer 1.5s infinite',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <div style={{ color: '#4caf50', fontSize: '12px', fontWeight: '600', opacity: 0.5 }}>
                                                Loading…
                                            </div>
                                        </div>
                                    )}
                                    <img
                                        src={page.src}
                                        alt={page.alt}
                                        onLoad={() => setLoadedPages(prev => ({ ...prev, [page.number]: true }))}
                                        style={{
                                            width: '100%', height: '100%',
                                            objectFit: 'fill', display: 'block',
                                            position: 'absolute', inset: 0,
                                            opacity: loadedPages[page.number] ? 1 : 0,
                                            transition: 'opacity 0.4s ease',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ══════════ SCROLL TO TOP ══════════ */}
                {showScrollTop && (
                    <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 19V5M5 12l7-7 7 7"/>
                        </svg>
                    </button>
                )}
            </div>
        </>
    )
}
