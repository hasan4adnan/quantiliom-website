import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// Team icons mapping - using CDN URLs from Iconify
const teamIcons: Record<string, string> = {
  'Engineering Team': 'https://api.iconify.design/mdi:code-tags.svg',
  'Architecture Team': 'https://api.iconify.design/mdi:view-dashboard.svg',
  'Design Team': 'https://api.iconify.design/mdi:palette.svg',
  'Consulting Team': 'https://api.iconify.design/mdi:briefcase.svg',
  'DevOps Team': 'https://api.iconify.design/mdi:cloud.svg',
  'QA Team': 'https://api.iconify.design/mdi:check-circle.svg',
}

function Team() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="app">
      <nav className="navbar scrolled">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/quantiliom-logo.png" alt="Quantiliom" className="logo-img" />
          </Link>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/team" className="active" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
            <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        <div className={`nav-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      </nav>

      <section className="team-page">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">OUR TEAM</div>
            <h2 className="section-title">Meet the Experts</h2>
            <p className="section-subtitle">
              Our team consists of experienced software engineers, architects, designers, 
              and consultants dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-icon">
                <img 
                  src={teamIcons['Engineering Team']} 
                  alt="Engineering Team" 
                  className="team-member-icon-img"
                  loading="lazy"
                />
              </div>
              <h3>Engineering Team</h3>
              <p className="team-role">Software Engineers & Developers</p>
              <p className="team-description">
                Our engineering team brings years of experience in building scalable, 
                secure, and high-performance software solutions across various technologies 
                and platforms.
              </p>
            </div>
            <div className="team-member">
              <div className="team-member-icon">
                <img 
                  src={teamIcons['Architecture Team']} 
                  alt="Architecture Team" 
                  className="team-member-icon-img"
                  loading="lazy"
                />
              </div>
              <h3>Architecture Team</h3>
              <p className="team-role">Solution Architects & Technical Leads</p>
              <p className="team-description">
                Our architects design robust system architectures, ensuring scalability, 
                maintainability, and alignment with business objectives.
              </p>
            </div>
            <div className="team-member">
              <div className="team-member-icon">
                <img 
                  src={teamIcons['Design Team']} 
                  alt="Design Team" 
                  className="team-member-icon-img"
                  loading="lazy"
                />
              </div>
              <h3>Design Team</h3>
              <p className="team-role">UI/UX Designers & Product Designers</p>
              <p className="team-description">
                Our design team creates intuitive, user-centered interfaces that enhance 
                user experience and drive engagement.
              </p>
            </div>
            <div className="team-member">
              <div className="team-member-icon">
                <img 
                  src={teamIcons['Consulting Team']} 
                  alt="Consulting Team" 
                  className="team-member-icon-img"
                  loading="lazy"
                />
              </div>
              <h3>Consulting Team</h3>
              <p className="team-role">Business Analysts & Consultants</p>
              <p className="team-description">
                Our consultants bridge the gap between business needs and technical 
                solutions, ensuring projects deliver measurable value.
              </p>
            </div>
            <div className="team-member">
              <div className="team-member-icon">
                <img 
                  src={teamIcons['DevOps Team']} 
                  alt="DevOps Team" 
                  className="team-member-icon-img"
                  loading="lazy"
                />
              </div>
              <h3>DevOps Team</h3>
              <p className="team-role">DevOps Engineers & Cloud Specialists</p>
              <p className="team-description">
                Our DevOps team ensures reliable deployments, scalable infrastructure, 
                and continuous integration for seamless operations.
              </p>
            </div>
            <div className="team-member">
              <div className="team-member-icon">
                <img 
                  src={teamIcons['QA Team']} 
                  alt="QA Team" 
                  className="team-member-icon-img"
                  loading="lazy"
                />
              </div>
              <h3>QA Team</h3>
              <p className="team-role">Quality Assurance Engineers</p>
              <p className="team-description">
                Our QA team ensures the highest quality standards through comprehensive 
                testing strategies and automated testing frameworks.
              </p>
            </div>
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
            <p>&copy; 2025 Quantiliom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Team


