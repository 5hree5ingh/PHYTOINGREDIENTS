import React from 'react';
import '../../css-files/careers.css';

const jobs = [
  {
    id: 1,
    title: 'Sales Executive',
    dept: 'Sales & Business Development',
    location: 'Laksar, Haridwar, Uttarakhand',
    type: 'Full-time',
    experience: 'Experienced',
    qualification: 'Graduate / MBA (Marketing) preferred',
    responsibilities: [
      'Generate leads and close sales for herbal extracts, phytochemicals, and essential oils across pharma, nutraceutical, and cosmetic segments.',
      'Visit prospective clients (B2B) — pharma manufacturers, nutraceutical brands, cosmetic companies, and bulk buyers.',
      'Maintain client relationships, handle enquiries, and ensure repeat orders.',
      'Coordinate with production and dispatch teams for timely delivery.',
      'Prepare sales reports and maintain CRM data.',
    ],
    skills: [
      'Knowledge of herbal extract / pharma / nutraceutical industry',
      'Strong communication and negotiation skills',
      'Willingness to travel for client visits',
      'Proficiency in MS Excel and basic CRM tools',
    ],
    preferred: 'Candidates with existing contacts in pharma/nutraceutical companies will be preferred.',
  },
  {
    id: 2,
    title: 'Sales Manager',
    dept: 'Sales & Business Development',
    location: 'Laksar, Haridwar, Uttarakhand',
    type: 'Full-time',
    experience: 'Experienced',
    qualification: 'MBA (Marketing) or equivalent with 5+ years in B2B sales',
    responsibilities: [
      'Lead and manage the sales team — set targets, review performance, and drive revenue growth.',
      'Develop business strategy for herbal extracts, standardized extracts, and API product lines.',
      'Identify new markets and distribution channels across India and international markets.',
      'Build and maintain relationships with key accounts — pharma companies, exporters, and distributors.',
      'Handle pricing, quotations, contracts, and negotiations for large orders.',
    ],
    skills: [
      'Proven track record in B2B sales within pharma / herbal / nutraceutical industry',
      'Team leadership and target-driven mindset',
      'Strong understanding of herbal raw materials and extract markets',
      'Excellent presentation and client management skills',
    ],
    preferred: 'Candidates with experience in herbal extract or API sales will be given priority.',
  },
  {
    id: 3,
    title: 'Sales Incharge',
    dept: 'Sales & Business Development',
    location: 'Laksar, Haridwar, Uttarakhand',
    type: 'Full-time',
    experience: 'Experienced',
    qualification: 'Graduate / MBA preferred with 3+ years in sales operations',
    responsibilities: [
      'Supervise day-to-day sales operations — order processing, dispatch coordination, and customer follow-ups.',
      'Manage the sales pipeline and ensure timely conversion of leads to orders.',
      'Track inventory levels and coordinate with production to meet delivery schedules.',
      'Handle customer complaints, quality feedback, and after-sales support.',
      'Prepare weekly and monthly sales reports for management review.',
    ],
    skills: [
      'Experience in sales operations in manufacturing or pharma sector',
      'Strong organizational and multitasking abilities',
      'Good command over MS Office and Tally/ERP systems',
      'Understanding of herbal extracts or pharmaceutical product lines',
    ],
    preferred: 'Candidates based in Haridwar, Roorkee, or nearby areas preferred.',
  },
  {
    id: 4,
    title: 'Design Engineer — AutoCAD',
    dept: 'Engineering & Technical',
    location: 'Laksar, Haridwar, Uttarakhand',
    type: 'Full-time',
    experience: 'Fresher / Experienced',
    qualification: 'B.Tech / Diploma in Mechanical / Chemical Engineering',
    responsibilities: [
      'Prepare 2D and 3D plant layouts, equipment drawings, and P&ID diagrams for herbal extraction plants.',
      'Design process equipment — extraction vessels, reactors, distillation columns, and drying systems.',
      'Coordinate with project and fabrication teams for accurate design execution.',
      'Prepare BOQ (Bill of Quantities), material lists, and GA drawings.',
      'Review and update existing designs as per client requirements.',
    ],
    skills: [
      'Proficiency in AutoCAD (2D mandatory, 3D preferred)',
      'Knowledge of SolidWorks or similar CAD software is a plus',
      'Understanding of herbal extraction or chemical process plant design',
      'Basic knowledge of piping, instrumentation, and equipment sizing',
    ],
    preferred: 'Freshers with strong AutoCAD skills are welcome. Experience in pharma or chemical plant design will be an advantage.',
  },
  {
    id: 5,
    title: 'Quality Control Executive',
    dept: 'Quality Assurance (Chemist)',
    location: 'Laksar, Haridwar, Uttarakhand',
    type: 'Full-time',
    experience: 'Fresher / Experienced',
    qualification: 'B.Sc / M.Sc (Chemistry / Biochemistry / Microbiology) or B.Pharm',
    responsibilities: [
      'Perform quality testing of incoming raw herbs, in-process materials, and finished herbal extracts.',
      'Operate and maintain analytical instruments — HPLC, UV-Vis, Karl Fischer, Moisture Analyzer.',
      'Conduct chemical assays, heavy metal testing, microbial load testing, and solvent residue analysis.',
      'Prepare and maintain batch records, COA (Certificate of Analysis), and test reports.',
      'Ensure compliance with GMP, FSSAI, and other regulatory standards.',
    ],
    skills: [
      'Hands-on experience with HPLC, GC, UV-Vis, and wet chemistry methods',
      'Knowledge of pharmacopoeia standards (IP, BP, USP)',
      'Understanding of GMP documentation and quality systems',
      'Familiarity with herbal monographs and phytochemical analysis',
    ],
    preferred: 'Candidates with QC experience in herbal extract, pharmaceutical, or nutraceutical manufacturing will be preferred.',
  },
  {
    id: 6,
    title: 'Accountant',
    dept: 'Finance & Accounts',
    location: 'Laksar, Haridwar, Uttarakhand',
    type: 'Full-time',
    experience: 'Experienced (2–5 years)',
    qualification: 'B.Com / M.Com / MBA (Finance) or equivalent',
    responsibilities: [
      'Maintain day-to-day accounting and bookkeeping records in Tally ERP / Tally Prime.',
      'Record purchase, sales, journal, and payment entries accurately.',
      'Prepare GST invoices, e-way bills, and e-invoices.',
      'Handle GST, TDS, and other statutory compliance filings.',
      'Perform bank reconciliation, cash book management, and vendor payments.',
      'Prepare monthly MIS reports, financial statements, and management reports.',
      'Coordinate with CA, auditors, banks, and government authorities.',
    ],
    skills: [
      'Proficiency in Tally ERP / Tally Prime (mandatory)',
      'Knowledge of GST, TDS, and accounting principles',
      'Strong MS Excel skills — VLOOKUP, Pivot Tables, MIS reporting',
      'Inventory and manufacturing accounting knowledge',
    ],
    preferred: 'Experience in manufacturing, pharmaceutical, or nutraceutical industry preferred. Candidates from Laksar, Haridwar, Roorkee, or nearby areas encouraged to apply.',
  },
];

// SVG Icons
const IconLocation = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconUser = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconChevron = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

class Careers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedId: null,
    };
  }

  toggleExpand = (id) => {
    this.setState((prev) => ({
      expandedId: prev.expandedId === id ? null : id,
    }));
  };

  render() {
    const email = 'phytoingredients@gmail.com';
    const whatsapp = '918840804180';
    const { expandedId } = this.state;

    return (
      <div className="careers-page">

        {/* Hero */}
        <section className="careers-hero">
          <div className="careers-hero-inner">
            <div className="careers-hero-eyebrow">
              <span className="careers-hero-line" />
              <span className="careers-hero-label">Current Openings</span>
            </div>
            <h1>
              Build something<br /><em>that matters.</em>
            </h1>
            <p className="careers-hero-desc">
              Phyto Ingredients Biopharma is growing. We manufacture high-quality
              herbal extracts, phytochemicals, and essential oils for global pharma
              and nutraceutical markets. We're looking for professionals who take
              their work seriously.
            </p>
            <button
              className="careers-hero-btn"
              onClick={() => {
                const element = document.getElementById('open-positions-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Opportunities <IconArrow />
            </button>
          </div>
        </section>

        {/* Positions */}
        <section className="careers-positions" id="open-positions-section">
          <div className="careers-section-header">
            <div>
              <div className="careers-section-label">Phyto Ingredients Biopharma</div>
              <h2 className="careers-section-title">Open Positions</h2>
            </div>
            <span className="careers-open-count">{jobs.length} positions available</span>
          </div>

          <div className="careers-list">
            {jobs.map((job) => {
              const isOpen = expandedId === job.id;
              return (
                <div className={`career-row ${isOpen ? 'expanded' : ''}`} key={job.id}>
                  {/* Summary row */}
                  <div className="career-row-summary" onClick={() => this.toggleExpand(job.id)}>
                    <div className="career-row-left">
                      <div className="career-row-dept">{job.dept}</div>
                      <h3 className="career-row-title">{job.title}</h3>
                      <div className="career-row-tags">
                        <span className="career-tag"><IconLocation /> {job.location}</span>
                        <span className="career-tag"><IconBriefcase /> {job.type}</span>
                        <span className="career-tag"><IconUser /> {job.experience}</span>
                      </div>
                    </div>
                    <div className="career-row-toggle">
                      <IconChevron open={isOpen} />
                    </div>
                  </div>

                  {/* Expandable detail */}
                  <div className={`career-detail-panel ${isOpen ? 'open' : ''}`}>
                    <div className="career-detail-inner">
                      {/* Qualification */}
                      <div className="career-detail-block">
                        <h4>Qualification</h4>
                        <p>{job.qualification}</p>
                      </div>

                      {/* Responsibilities */}
                      <div className="career-detail-block">
                        <h4>Responsibilities</h4>
                        <ul>
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="career-detail-block">
                        <h4>Required Skills</h4>
                        <ul>
                          {job.skills.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Preferred */}
                      {job.preferred && (
                        <div className="career-detail-block">
                          <h4>Preferred Candidates</h4>
                          <p>{job.preferred}</p>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="career-detail-actions">
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Application+%E2%80%94+${encodeURIComponent(job.title)}&body=Dear+Hiring+Team,%0A%0AI+am+writing+to+apply+for+the+position+of+${encodeURIComponent(job.title)}+at+Phyto+Ingredients+Biopharma.%0A%0APlease+find+my+resume+attached.%0A%0ARegards`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="career-btn career-btn-primary"
                        >
                          Apply via Email <IconArrow />
                        </a>
                        <a
                          href={`https://wa.me/${whatsapp}?text=Hello, I am interested in the ${job.title} position at Phyto Ingredients Biopharma. I would like to apply.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="career-btn career-btn-ghost"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="careers-bottom">
          <div className="careers-bottom-text">
            <h3>Not the right role?</h3>
            <p>
              Send your resume directly. We review every application<br />
              and reach out when a suitable position opens.
            </p>
          </div>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Career+Enquiry+%E2%80%94+Phyto+Ingredients`}
            target="_blank"
            rel="noopener noreferrer"
            className="careers-bottom-email"
          >
            <IconMail />
            {email}
          </a>
        </div>

      </div>
    );
  }
}

export default Careers;
