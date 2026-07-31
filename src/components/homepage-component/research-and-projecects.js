import React from 'react';

const research_config = [
    {
        name: 'Cissus Quadrangularis',
        summary: 'An important medicinal plant of the family Vitaceae, valued for centuries in Ayurvedic medicine.',
        image_url: 'images/researh1.jpeg',
        fileUrl: './upload/downloadbale-file-01.pdf',
        type: 'download',
        journal: 'Internal Research'
    },
    {
        name: 'Mucoadhesive Tablet',
        summary: 'Mucoadhesive tablet of Nifedipine fabricated to avoid first pass metabolism and improve bioavailability.',
        image_url: 'images/research2.jpg',
        fileUrl: './upload/downloadable-file-02.pdf',
        type: 'download',
        journal: 'Internal Research'
    },
    {
        name: 'Benzoyl Peroxide Gel',
        summary: 'Benzoyl peroxide (BPO) is a first-line topical treatment commonly used for acne vulgaris.',
        image_url: 'images/research3.jpeg',
        fileUrl: './upload/downloadable-file-03.pdf',
        type: 'download',
        journal: 'Internal Research'
    },
    {
        name: 'HPLC Determination of Levodopa',
        summary: 'Application of HPLC to the determination and validation of Levodopa in Mucuna Pruriens L.',
        image_url: 'images/research2.jpg',
        fileUrl: 'https://www.ijprs.com/article/application-of-high-performance-liquid-chromatography-to-the-determination-and-validation-of-levodopa-in-mucuna-pruriens-l/',
        type: 'link',
        journal: 'IJPRS'
    },
    {
        name: 'HPLC Method for Scopoletin',
        summary: 'Standardization of HPLC method of Scopoletin in different extracts of Convolvulus Pluricaulis.',
        image_url: 'images/researh1.jpeg',
        fileUrl: 'https://ijpsdronline.com/index.php/journal/article/view/235',
        type: 'link',
        journal: 'IJPSDR'
    },
    {
        name: 'RP-HPLC for Piperine',
        summary: 'Development and validation of Rapid RP-HPLC method for estimation of Piperine in Piper nigrum L.',
        image_url: 'images/research3.jpeg',
        fileUrl: 'https://www.florajournal.com/vol1issue4/35.html',
        type: 'link',
        journal: 'Flora Journal'
    }
];

const event_config = [
    {
        name: 'Herbal Extraction Projects',
        image_url: 'images/product-dev.jpg',
        link: '/events-news',
        summary: 'Conscious, sustainable and tailor-made extraction plant designs with integrated multi-disciplinary services.'
    },
    {
        name: 'Product Development',
        image_url: 'images/project-management.jpg',
        link: '/product-developement',
        summary: 'Well qualified and experienced team for end-to-end herbal product development and formulation.'
    },
    {
        name: 'Project Management',
        image_url: 'images/project-extraction.jpg',
        link: '/project-management',
        summary: 'Design Engineering and Project Management in totality or individually as per client requirements.'
    }
];

function ResearchAndEvents() {
    return (
        <div className="rp-section-wrapper">

            {/* ── RESEARCH PAPERS ── */}
            <div className="rp-block">
                <div className="rp-block-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    <h3>Published Research</h3>
                </div>
                <div className="rp-research-grid">
                    {research_config.map((item, i) => (
                        <div className="rp-research-card" key={i}>
                            <div className="rp-research-card-img">
                                <img src={item.image_url} alt={item.name} />
                                <span className="rp-research-badge">{item.journal}</span>
                            </div>
                            <div className="rp-research-card-body">
                                <h4>{item.name}</h4>
                                <p>{item.summary}</p>
                                <a
                                    href={item.fileUrl}
                                    download={item.type === 'download' ? true : undefined}
                                    target={item.type === 'link' ? '_blank' : undefined}
                                    rel={item.type === 'link' ? 'noreferrer' : undefined}
                                    className="rp-research-cta"
                                >
                                    {item.type === 'download' ? 'Download PDF' : 'Read Article'}
                                    {item.type === 'download' ? (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                    ) : (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                    )}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CONSULTANCY SERVICES ── */}
            <div className="rp-block">
                <div className="rp-block-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    <h3>Consultancy Services</h3>
                </div>
                <div className="rp-consult-grid">
                    {event_config.map((item, i) => (
                        <a href={item.link} className="rp-consult-card" key={i}>
                            <div className="rp-consult-card-img">
                                <img src={item.image_url} alt={item.name} />
                            </div>
                            <div className="rp-consult-card-body">
                                <h4>{item.name}</h4>
                                <p>{item.summary}</p>
                                <span className="rp-consult-cta">
                                    Learn More
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ResearchAndEvents;