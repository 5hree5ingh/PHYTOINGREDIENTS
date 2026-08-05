import React, { useRef, useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const TARGET_URL = 'https://www.phytoingredients.com/brochure'

const GREEN_DARK  = '#0d2b16'
const GREEN_MID   = '#1a4d2e'
const GREEN_LIGHT = '#2e7d32'
const GOLD        = '#c8922a'
const GOLD_LIGHT  = '#e0a83a'

export default function BrochureQR() {
    const canvasRef       = useRef(null)
    const [copied, setCopied]   = useState(false)
    const [hovered, setHovered] = useState(null)

    /* ── Tint the QR canvas with a green→gold gradient after render ── */
    useEffect(() => {
        const applyGradient = () => {
            const wrapper = document.getElementById('qr-canvas-wrap')
            if (!wrapper) return
            const original = wrapper.querySelector('canvas')
            if (!original) return

            const w = original.width
            const h = original.height

            // Read original pixel data
            const tmp = document.createElement('canvas')
            tmp.width = w; tmp.height = h
            const tmpCtx = tmp.getContext('2d')
            tmpCtx.drawImage(original, 0, 0)
            const imgData = tmpCtx.getImageData(0, 0, w, h).data

            // Build gradient tinted version on original canvas
            const ctx = original.getContext('2d')

            // 1. Draw gradient on a temp canvas
            const gCanvas = document.createElement('canvas')
            gCanvas.width = w; gCanvas.height = h
            const gCtx = gCanvas.getContext('2d')
            const grad = gCtx.createLinearGradient(0, 0, w, h)
            grad.addColorStop(0,    '#1a4d2e')
            grad.addColorStop(0.4,  '#1e6b30')
            grad.addColorStop(0.75, '#2e7d32')
            grad.addColorStop(1,    '#c8922a')
            gCtx.fillStyle = grad
            gCtx.fillRect(0, 0, w, h)
            const gData = gCtx.getImageData(0, 0, w, h).data

            // 2. Build output: dark modules → gradient colour, light modules → white
            const out = ctx.createImageData(w, h)
            for (let i = 0; i < imgData.length; i += 4) {
                const isLight = imgData[i] > 180 && imgData[i+1] > 180 && imgData[i+2] > 180
                if (isLight) {
                    out.data[i]   = 255
                    out.data[i+1] = 255
                    out.data[i+2] = 255
                    out.data[i+3] = 255
                } else {
                    out.data[i]   = gData[i]
                    out.data[i+1] = gData[i+1]
                    out.data[i+2] = gData[i+2]
                    out.data[i+3] = 255
                }
            }
            ctx.putImageData(out, 0, 0)
        }

        // Give QRCodeCanvas time to render
        const t = setTimeout(applyGradient, 300)
        return () => clearTimeout(t)
    }, [])

    /* ── Download PNG with url strip ── */
    const handleDownload = () => {
        const qrCanvas = document.querySelector('#qr-canvas-wrap canvas')
        if (!qrCanvas) return

        const pad    = 36
        const strip  = 52
        const out    = document.createElement('canvas')
        out.width    = qrCanvas.width  + pad * 2
        out.height   = qrCanvas.height + pad * 2 + strip
        const ctx    = out.getContext('2d')

        // White background
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, out.width, out.height)

        // QR
        ctx.drawImage(qrCanvas, pad, pad)

        // Bottom green strip
        const grd = ctx.createLinearGradient(0, 0, out.width, 0)
        grd.addColorStop(0, '#1a4d2e')
        grd.addColorStop(1, '#2e7d32')
        ctx.fillStyle = grd
        ctx.roundRect(0, qrCanvas.height + pad * 2, out.width, strip, [0, 0, 12, 12])
        ctx.fill()

        // URL text
        ctx.fillStyle    = '#ffffff'
        ctx.font         = 'bold 14px Arial, sans-serif'
        ctx.textAlign    = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(
            'www.phytoingredients.com/brochure',
            out.width / 2,
            qrCanvas.height + pad * 2 + strip / 2
        )

        const a = document.createElement('a')
        a.download = 'PhytoIngredients-Brochure-QR.png'
        a.href     = out.toDataURL('image/png')
        a.click()
    }

    /* ── Copy URL ── */
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(TARGET_URL)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch { }
    }

    const btnBase = {
        display: 'flex', alignItems: 'center', gap: '8px',
        height: '42px', padding: '0 22px', borderRadius: '11px',
        border: 'none', cursor: 'pointer',
        fontFamily: "'Inter','Segoe UI',sans-serif",
        fontSize: '13px', fontWeight: '700', letterSpacing: '0.3px',
        transition: 'all 0.2s ease', textDecoration: 'none',
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                .qr-page {
                    min-height: 100vh; width: 100%;
                    background: ${GREEN_DARK};
                    display: flex; flex-direction: column;
                    align-items: center; justify-content: center;
                    padding: 40px 20px;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                    position: relative; overflow: hidden;
                }

                /* ambient glow */
                .qr-page::before {
                    content: '';
                    position: absolute; inset: 0; pointer-events: none;
                    background:
                        radial-gradient(ellipse 60% 50% at 20% 20%, rgba(46,125,50,0.18) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 45% at 80% 80%, rgba(200,146,42,0.13) 0%, transparent 70%);
                }

                /* card */
                .qr-card {
                    position: relative; z-index: 1;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 28px;
                    padding: 40px 40px 0;
                    display: flex; flex-direction: column; align-items: center;
                    backdrop-filter: blur(24px);
                    box-shadow:
                        0 0 0 1px rgba(200,146,42,0.1),
                        0 32px 80px rgba(0,0,0,0.65),
                        inset 0 1px 0 rgba(255,255,255,0.07);
                    max-width: 400px; width: 100%;
                    overflow: hidden;
                }
                .qr-card::before {
                    content: '';
                    position: absolute; top: 0; left: 50%; transform: translateX(-50%);
                    width: 55%; height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(200,146,42,0.55), transparent);
                }

                /* qr outer box */
                .qr-box {
                    position: relative;
                    background: #fff;
                    border-radius: 16px;
                    padding: 14px;
                    box-shadow:
                        0 0 0 1px rgba(200,146,42,0.28),
                        0 8px 40px rgba(0,0,0,0.45),
                        0 0 50px rgba(46,125,50,0.12);
                    margin-bottom: 18px;
                }

                /* corner accents */
                .corner { position: absolute; width: 18px; height: 18px; border-color: ${GOLD}; border-style: solid; }
                .corner-tl { top:-3px; left:-3px;  border-width:3px 0 0 3px; border-radius:5px 0 0 0; }
                .corner-tr { top:-3px; right:-3px; border-width:3px 3px 0 0; border-radius:0 5px 0 0; }
                .corner-bl { bottom:-3px; left:-3px;  border-width:0 0 3px 3px; border-radius:0 0 0 5px; }
                .corner-br { bottom:-3px; right:-3px; border-width:0 3px 3px 0; border-radius:0 0 5px 0; }

                /* center logo overlay */
                .qr-logo {
                    position: absolute; top:50%; left:50%;
                    transform: translate(-50%, -50%);
                    width: 50px; height: 50px; border-radius: 50%;
                    background: #fff;
                    border: 3px solid #fff;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                    display: flex; align-items: center; justify-content: center;
                    overflow: hidden;
                }
                .qr-logo img { width:44px; height:44px; object-fit:contain; padding:2px; }

                /* scan animation */
                @keyframes scan {
                    0%   { top:14px; opacity:1; }
                    90%  { opacity:1; }
                    100% { top:calc(100% - 18px); opacity:0; }
                }
                .scan-line {
                    position: absolute; left:14px; right:14px; height:2px;
                    background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
                    border-radius: 1px; pointer-events: none;
                    animation: scan 2.4s ease-in-out infinite;
                }

                /* url strip */
                .url-strip {
                    width: calc(100% + 80px); margin: 0 -40px;
                    padding: 15px 20px;
                    background: linear-gradient(135deg, ${GREEN_MID} 0%, #1e5c34 60%, rgba(200,146,42,0.2) 100%);
                    text-align: center;
                    border-top: 1px solid rgba(255,255,255,0.07);
                }
                .url-text {
                    font-size: 13px; font-weight: 700;
                    color: rgba(255,255,255,0.88); letter-spacing: 0.4px;
                }

                /* action buttons */
                .actions {
                    display: flex; gap: 10px; margin-top: 28px;
                    flex-wrap: wrap; justify-content: center;
                    position: relative; z-index: 1;
                }

                .btn-gold {
                    background: linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 100%);
                    color: ${GREEN_DARK};
                    box-shadow: 0 2px 16px rgba(200,146,42,0.4);
                }
                .btn-gold:hover {
                    box-shadow: 0 4px 24px rgba(200,146,42,0.65);
                    transform: translateY(-1px);
                }
                .btn-ghost {
                    background: rgba(255,255,255,0.07);
                    border: 1px solid rgba(255,255,255,0.12) !important;
                    color: rgba(255,255,255,0.8);
                }
                .btn-ghost:hover {
                    background: rgba(255,255,255,0.13);
                    color: #fff; transform: translateY(-1px);
                }
                .btn-ghost-copied {
                    background: rgba(46,125,50,0.2) !important;
                    border-color: rgba(46,125,50,0.4) !important;
                    color: #6fcf97 !important;
                }

                .footer-note {
                    margin-top: 22px; font-size: 11px;
                    color: rgba(255,255,255,0.18); text-align: center;
                    letter-spacing: 0.3px; position: relative; z-index: 1;
                }

                @keyframes fadeIn {
                    from { opacity:0; transform:translateY(16px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                .qr-card, .actions, .footer-note { animation: fadeIn 0.5s ease both; }
                .actions     { animation-delay: 0.15s; }
                .footer-note { animation-delay: 0.25s; }
            `}</style>

            <div className="qr-page">

                {/* ── Card ── */}
                <div className="qr-card">

                    {/* Brand header */}
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'6px', marginBottom:'28px' }}>
                        <div style={{
                            width:'58px', height:'58px', borderRadius:'16px',
                            background:`linear-gradient(135deg, ${GREEN_MID}, ${GREEN_LIGHT})`,
                            display:'flex', alignItems:'center', justifyContent:'center',
                            boxShadow:`0 4px 20px rgba(46,125,50,0.4), 0 0 0 1px rgba(200,146,42,0.2)`,
                            marginBottom:'6px', overflow:'hidden',
                        }}>
                            <img
                                src="/images/phyto-logo.png"
                                alt="PhytoIngredients"
                                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }}
                                style={{ width:'46px', height:'46px', objectFit:'contain', padding:'4px', filter:'brightness(0) invert(1)' }}
                            />
                            <span style={{ display:'none', fontSize:'28px' }}>🌿</span>
                        </div>
                        <div style={{ fontSize:'18px', fontWeight:'800', color:'#fff', letterSpacing:'0.2px' }}>
                            PhytoIngredients
                        </div>
                        <div style={{ fontSize:'10px', fontWeight:'500', color:'rgba(255,255,255,0.4)', letterSpacing:'1.5px', textTransform:'uppercase' }}>
                            Biopharma · Natural Health Care
                        </div>
                    </div>

                    {/* QR box */}
                    <div className="qr-box">
                        <span className="corner corner-tl" />
                        <span className="corner corner-tr" />
                        <span className="corner corner-bl" />
                        <span className="corner corner-br" />

                        <div id="qr-canvas-wrap">
                            <QRCodeCanvas
                                value={TARGET_URL}
                                size={240}
                                level="H"
                                includeMargin={false}
                                bgColor="#ffffff"
                                fgColor={GREEN_MID}
                                style={{ display:'block', borderRadius:'6px' }}
                            />
                        </div>

                        {/* scan animation */}
                        <div className="scan-line" />

                        {/* center logo */}
                        <div className="qr-logo">
                            <img
                                src="/images/phyto-logo.png"
                                alt="logo"
                                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                            />
                            <div style={{
                                display:'none', width:'44px', height:'44px', borderRadius:'50%',
                                background:`linear-gradient(135deg,${GREEN_MID},${GOLD})`,
                                alignItems:'center', justifyContent:'center', fontSize:'20px'
                            }}>🌿</div>
                        </div>
                    </div>

                    {/* Instruction */}
                    <div style={{ fontSize:'12px', fontWeight:'500', color:'rgba(255,255,255,0.35)', letterSpacing:'0.3px', marginBottom:'18px' }}>
                        Scan to view our digital brochure
                    </div>

                    {/* URL strip */}
                    <div className="url-strip">
                        <span className="url-text">🌐&nbsp;&nbsp;www.phytoingredients.com/brochure</span>
                    </div>
                </div>

                {/* ── Action buttons ── */}
                <div className="actions">
                    <button
                        className="btn-gold"
                        style={{ ...btnBase }}
                        onClick={handleDownload}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Download QR
                    </button>

                    <button
                        className={`btn-ghost${copied ? ' btn-ghost-copied' : ''}`}
                        style={{ ...btnBase, border: '1px solid rgba(255,255,255,0.12)' }}
                        onClick={handleCopy}
                    >
                        {copied
                            ? <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!</>
                            : <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy Link</>
                        }
                    </button>
                </div>

                <p className="footer-note">phytoingredients.com/brochure · Digital Brochure</p>
            </div>
        </>
    )
}
