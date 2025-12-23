import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light')
  }

  return (
    <div className="app">
      <nav className="navbar scrolled">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/quantiliom-logo.png" alt="Quantiliom" className="logo-img" />
          </Link>
          <div className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/team">Team</Link>
            <a href="/#about">About</a>
            <Link to="/contact" className="active">Contact</Link>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <section className="contact-page">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">GET IN TOUCH</div>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Discuss your software development needs with our team. We'll help you identify 
              the best solutions for your enterprise.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>B. Amsterdam<br />Amsterdam, Netherlands</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+31 (0) 20 XXX XXXX</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@quantiliom.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday<br />9:00 AM - 6:00 PM CET</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your inquiry. We will contact you shortly.')
              e.currentTarget.reset()
            }}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Company" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea rows={8} placeholder="Tell us about your project requirements..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>QUANTILIOM</h3>
              <p>Enterprise software solutions for the digital age.</p>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Quantiliom. Established 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact


