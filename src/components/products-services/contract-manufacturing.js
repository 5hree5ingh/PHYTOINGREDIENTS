import React, { useState } from 'react';
import '../../css-files/contactUs.css';

function Contactus() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        }
    };

    const resetForm = () => {
        setStatus('idle');
        setErrorMessage('');
    };

    return (
        <div className="contact-us-container">
            {/* Banner */}
            <div className="contact-us-heading" style={{ height: '120px', position: 'relative' }}>
                <img src="images/hbg1.jpg" alt="contact us" width="100%" height="100%" />
                <h2
                    className="contact-us"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white',
                        margin: 0,
                    }}
                >
                    Contact Us
                </h2>
            </div>

            <div className="contact-us-content">
                {/* Form Section */}
                <div className="contact-us-form-wrapper">
                    {status === 'success' ? (
                        <div className="form-success-state">
                            <div className="success-icon-wrapper">
                                <svg className="success-checkmark" viewBox="0 0 52 52">
                                    <circle className="success-circle" cx="26" cy="26" r="25" fill="none" />
                                    <path className="success-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                </svg>
                            </div>
                            <h3 className="success-title">Message Sent Successfully!</h3>
                            <p className="success-text">
                                Thank you for reaching out. Our team will get back to you within <strong>24 hours</strong>.
                            </p>
                            <p className="success-text-sub">
                                A confirmation email has been sent to <strong>{formData.email || 'your email'}</strong>.
                            </p>
                            <button className="submit-button success-reset-btn" onClick={resetForm} type="button">
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form-modern" id="lead-capture-form">
                            <div className="form-header">
                                <h3 className="form-title">Get in Touch</h3>
                                <p className="form-subtitle">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            {/* Error Banner */}
                            {status === 'error' && (
                                <div className="form-error-banner">
                                    <span className="error-icon">⚠️</span>
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <div className="form-grid">
                                {/* Name */}
                                <div className="form-group">
                                    <label htmlFor="lead-name" className="form-label">
                                        <i className="fa fa-user"></i> Full Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lead-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="form-input"
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="lead-email" className="form-label">
                                        <i className="fa fa-envelope"></i> Email Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="lead-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="form-input"
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="form-group">
                                    <label htmlFor="lead-phone" className="form-label">
                                        <i className="fa fa-phone"></i> Phone Number <span className="required">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="lead-phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        required
                                        className="form-input"
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                {/* Company */}
                                <div className="form-group">
                                    <label htmlFor="lead-company" className="form-label">
                                        <i className="fa fa-building"></i> Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lead-company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Enter your company name"
                                        className="form-input"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="form-group full-width">
                                <label htmlFor="lead-message" className="form-label">
                                    <i className="fa fa-comment"></i> Message / Inquiry
                                </label>
                                <textarea
                                    id="lead-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements, product interests, or any questions..."
                                    rows="5"
                                    className="form-textarea"
                                    disabled={status === 'loading'}
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <div className="form-submit-row">
                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={status === 'loading'}
                                    id="lead-submit-btn"
                                >
                                    {status === 'loading' ? (
                                        <span className="btn-loading">
                                            <span className="spinner"></span>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span>
                                            Send Message <span className="btn-arrow">→</span>
                                        </span>
                                    )}
                                </button>
                                <p className="form-privacy-note">
                                    🔒 Your information is secure and will never be shared.
                                </p>
                            </div>
                        </form>
                    )}
                </div>

                {/* Company Details Side Panel */}
                <div className="company-details">
                    <h2 style={{ textAlign: 'left', fontSize: '19px', fontWeight: 'bold' }}>
                        Phyto Ingredients Biopharma Pvt. Ltd
                    </h2>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <i className="fa fa-location-arrow"></i>{' '}
                            <strong style={{ fontSize: '13px' }}>Regd. Office - INDIA : </strong>
                            Khasara No. 587, Akbarpuruood,<br />
                            Behind Shree Cement, Lakshar Road, Lakshar<br />
                            Haridwar, Uttarakhand, India-247663
                        </li>
                    </ul>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <i className="fa fa-location-arrow"></i>{' '}
                            <strong style={{ fontSize: '13px' }}>Corr. Office - GERMANY : </strong>
                            Mutterstadter strasse 58,<br />
                            68219, Mannheim, Germany
                        </li>
                    </ul>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <strong style={{ fontSize: '15px' }}>Sales inquiry: </strong>
                        </li>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <i className="fa fa-envelope"></i>{' '}
                            <strong style={{ fontSize: '13px' }}>Email : </strong>
                            vipul.phytoingredients@gmail.com,<br />
                            vipul@phytoingredients.com
                        </li>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <i className="fa fa-phone"></i>{' '}
                            <strong style={{ fontSize: '13px' }}>Mobile no. : </strong> +91-8130000846
                        </li>
                    </ul>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <strong style={{ fontSize: '15px' }}>Purchase inquiry: </strong>
                        </li>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <i className="fa fa-envelope"></i>{' '}
                            <strong style={{ fontSize: '13px' }}>Email : </strong>
                            phytoingredients@gmail.com,<br />
                            info@phytoingredients.com
                        </li>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <i className="fa fa-phone"></i>{' '}
                            <strong style={{ fontSize: '13px' }}>Mobile no. : </strong> +91-8840804180
                        </li>
                    </ul>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <strong style={{ fontSize: '15px' }}>Export inquiry: </strong>
                        </li>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <i className="fa fa-envelope"></i>{' '}
                            <strong style={{ fontSize: '13px' }}>Email : </strong>
                            export@phytoingredients.com
                        </li>
                        <li style={{ fontSize: '14px', textAlign: 'justify' }}>
                            <i className="fa fa-phone"></i>{' '}
                            <strong style={{ fontSize: '13px' }}>Mobile no. : </strong> +49-176-22293400
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
