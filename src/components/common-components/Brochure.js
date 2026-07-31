import React, { useState, useEffect, useRef } from 'react'

/* ─── Brand palette (PhytoIngredients) ─── */
const BRAND = {
    primary: '#1a4d2e',
    secondary: '#c8922a',
    gradient: 'linear-gradient(135deg, #1a4d2e 0%, #2e7d32 60%, #c8922a 100%)',
    dark: '#0f2a18',
}

/* ─── 12 brochure pages ─── */
const TOTAL = 12
const PAGES = Array.from({ length: TOTAL }, (_, i) => ({
    number: i + 1,
    src: `/images/Brochure_images/${i + 1}.png`,
    alt: `PhytoIngredients Brochure – Page ${i + 1}`,
}))

const toolBtn = {
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.35)',
    color: 'white',
    padding: '7px 13px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: 1,
    transition: 'background 0.2s, transform 0.15s',
    whiteSpace: 'nowrap',
}

export default function Brochure() {
    const [zoom, setZoom] = useState(100)
    const [currentPage, setCurrentPage] = useState(1)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [loadedPages, setLoadedPages] = useState({})
    const pageRefs = useRef([])

    const zoomIn  = () => setZoom(z => Math.min(z + 10, 200))
    const zoomOut = () => setZoom(z => Math.max(z - 10, 40))
    const resetZoom = () => setZoom(100)

    useEffect(() => {
        const onScroll = () => {
            setShowScrollTop(window.scrollY > 300)
            pageRefs.current.forEach((ref, i) => {
                if (!ref) return
                const rect = ref.getBoundingClientRect()
                if (rect.top <= 130 && rect.bottom > 130) setCurrentPage(i + 1)
            })
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    const goToPage = (n) => {
        const el = pageRefs.current[n - 1]
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 110
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const A4_PX_HEIGHT = 297 * 3.7795
    const scaleOffset = zoom !== 100 ? `${(zoom / 100 - 1) * A4_PX_HEIGHT}px` : '0'

    return (
        <div style={{
            minHeight: '100vh', width: '100%',
            background: 'linear-gradient(180deg, #0f2a18 0%, #1a3520 100%)',
            display: 'flex', flexDirection: 'column',
            fontFamily: "'Inter','Segoe UI',sans-serif",
        }}>

            {/* ── STICKY TOOLBAR ── */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 200,
                background: BRAND.gradient,
                boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 20px', gap: '12px', flexWrap: 'wrap',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button onClick={() => window.history.back()} style={toolBtn}>← Back</button>
                    <div>
                        <div style={{ color: 'white', fontWeight: '800', fontSize: '15px', letterSpacing: '0.4px' }}>
                            PhytoIngredients — Company Brochure
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px' }}>
                            {TOTAL} Pages · Digital Edition
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button onClick={() => goToPage(Math.max(1, currentPage - 1))} style={toolBtn} title="Previous page">‹</button>
                    <div style={{
                        color: 'white', fontSize: '13px', fontWeight: '700',
                        minWidth: '90px', textAlign: 'center',
                        background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '6px 10px',
                    }}>
                        Page {currentPage} / {TOTAL}
                    </div>
                    <button onClick={() => goToPage(Math.min(TOTAL, currentPage + 1))} style={toolBtn} title="Next page">›</button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <button onClick={zoomOut}   style={toolBtn} title="Zoom out">−</button>
                    <button onClick={resetZoom} style={{ ...toolBtn, minWidth: '58px', fontWeight: '800', background: 'rgba(0,0,0,0.2)' }} title="Reset zoom">{zoom}%</button>
                    <button onClick={zoomIn}    style={toolBtn} title="Zoom in">+</button>
                    <div style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.3)', margin: '0 4px' }} />
                    <a href="/PhytoIngredients_Brochure.pdf" download="PhytoIngredients_Brochure.pdf" style={{ textDecoration: 'none' }}>
                        <button style={{
                            ...toolBtn, border: 'none',
                            background: 'rgba(255,255,255,0.96)',
                            color: BRAND.primary, fontWeight: '800', padding: '8px 16px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
                        }}>
                            ⬇ Download PDF
                        </button>
                    </a>
                </div>
            </div>

            {/* ── PAGE JUMP BAR ── */}
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                gap: '5px', padding: '9px 12px 7px',
                background: 'rgba(0,0,0,0.35)',
                flexWrap: 'wrap',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', marginRight: '4px', letterSpacing: '1px', textTransform: 'uppercase' }}>Jump:</span>
                {PAGES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        style={{
                            padding: '3px 11px', borderRadius: '20px', border: 'none',
                            cursor: 'pointer', fontSize: '11px', fontWeight: '700',
                            background: currentPage === i + 1
                                ? BRAND.gradient
                                : 'rgba(255,255,255,0.1)',
                            color: 'white', transition: 'all 0.2s',
                            boxShadow: currentPage === i + 1 ? '0 2px 8px rgba(200,146,42,0.4)' : 'none',
                        }}
                    >{i + 1}</button>
                ))}
            </div>

            {/* ── PAGES ── */}
            <div style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', padding: '32px 20px 80px', gap: '0',
            }}>
                {PAGES.map((page, i) => (
                    <div
                        key={page.number}
                        ref={el => pageRefs.current[i] = el}
                        style={{ marginBottom: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div style={{
                            color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: '700',
                            letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px',
                        }}>
                            Page {page.number} of {TOTAL}
                        </div>

                        <div style={{
                            transform: `scale(${zoom / 100})`,
                            transformOrigin: 'top center',
                            transition: 'transform 0.25s ease',
                            marginBottom: zoom !== 100 ? scaleOffset : '0',
                        }}>
                            <div style={{
                                width: '210mm', height: '297mm',
                                background: 'transparent',
                                boxShadow: '0 12px 60px rgba(0,0,0,0.55)',
                                borderRadius: '2px', position: 'relative', overflow: 'hidden',
                            }}>
                                {!loadedPages[page.number] && (
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(110deg,#e8f5e9 30%,#f1f8e9 50%,#e8f5e9 70%)',
                                        backgroundSize: '200% 100%',
                                        animation: 'shimmer 1.5s infinite',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <div style={{ color: '#2e7d32', fontSize: '14px', fontWeight: '600', opacity: 0.6 }}>
                                            Loading page {page.number}...
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

            {/* ── SCROLL TO TOP ── */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop} title="Scroll to top"
                    style={{
                        position: 'fixed', bottom: '32px', right: '32px', zIndex: 300,
                        width: '50px', height: '50px', borderRadius: '50%', border: 'none',
                        background: BRAND.gradient,
                        color: 'white', fontSize: '22px', cursor: 'pointer',
                        boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'transform 0.2s',
                    }}
                >↑</button>
            )}

            <style>{`
                @keyframes shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </div>
    )
}
