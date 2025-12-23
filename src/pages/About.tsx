import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function About() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

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
          <div className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/team">Team</Link>
            <Link to="/about" className="active">About</Link>
            <Link to="/contact">Contact</Link>
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

      <section className="about-page">
        <div className="container">
          <div className="about-hero">
            <div className="section-badge">ABOUT QUANTILIOM</div>
            <h1 className="about-main-title">Transforming Businesses Through Innovative Software Solutions</h1>
            <p className="about-hero-text">
              Established in 2023, Quantiliom is a leading software solutions company based in Amsterdam, 
              Netherlands. We specialize in delivering enterprise-grade software development, cloud infrastructure, 
              and digital transformation services that drive measurable business value.
            </p>
          </div>

          <div className="about-content-section">
            <div className="about-text-block">
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower organizations with cutting-edge software solutions that transform 
                their digital infrastructure and drive sustainable growth. We combine deep technical expertise 
                with strategic business insight to deliver solutions that not only meet technical specifications 
                but also create competitive advantages and operational efficiencies.
              </p>
            </div>

            <div className="about-text-block">
              <h2>Our Vision</h2>
              <p>
                We envision a future where every organization has access to world-class software solutions 
                that enable them to innovate, scale, and compete effectively in the digital economy. Through 
                our commitment to excellence, innovation, and partnership, we aim to be the trusted technology 
                partner for enterprises seeking to transform their digital capabilities.
              </p>
            </div>

            <div className="about-values-section">
              <h2>Our Core Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Excellence</h3>
                  <p>
                    We maintain the highest standards in code quality, architecture design, and project delivery. 
                    Every solution we build is crafted with attention to detail and a commitment to best practices.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Innovation</h3>
                  <p>
                    We leverage cutting-edge technologies and methodologies to solve complex challenges. Our team 
                    stays ahead of industry trends to deliver solutions that are both current and future-proof.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Partnership</h3>
                  <p>
                    We build long-term relationships based on trust, transparency, and mutual success. We view 
                    our clients as partners and invest in understanding their unique challenges and goals.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Integrity</h3>
                  <p>
                    We conduct business with honesty, transparency, and ethical practices. Our clients trust us 
                    with their most critical systems, and we honor that trust through responsible development.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Agility</h3>
                  <p>
                    We adapt quickly to changing requirements and market conditions. Our agile methodologies ensure 
                    we can respond to evolving needs while maintaining quality and meeting deadlines.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Results-Driven</h3>
                  <p>
                    We focus on delivering measurable business value. Every project is designed to achieve specific 
                    outcomes that drive growth, efficiency, and competitive advantage for our clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-approach-section">
              <h2>Our Approach</h2>
              <div className="approach-steps">
                <div className="approach-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h3>Discovery & Analysis</h3>
                    <p>
                      We begin by thoroughly understanding your business objectives, technical requirements, and 
                      existing infrastructure. Through comprehensive analysis, we identify opportunities and 
                      challenges to inform our solution design.
                    </p>
                  </div>
                </div>
                <div className="approach-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h3>Strategic Planning</h3>
                    <p>
                      We develop a detailed roadmap that aligns technical solutions with business goals. Our 
                      planning process considers scalability, security, maintainability, and long-term viability.
                    </p>
                  </div>
                </div>
                <div className="approach-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h3>Agile Development</h3>
                    <p>
                      We employ agile methodologies to deliver solutions incrementally, allowing for continuous 
                      feedback and adaptation. This approach ensures we stay aligned with your evolving needs 
                      while maintaining quality standards.
                    </p>
                  </div>
                </div>
                <div className="approach-step">
                  <div className="step-number">04</div>
                  <div className="step-content">
                    <h3>Quality Assurance</h3>
                    <p>
                      Rigorous testing and quality assurance processes ensure that every solution meets our high 
                      standards for performance, security, and reliability before deployment.
                    </p>
                  </div>
                </div>
                <div className="approach-step">
                  <div className="step-number">05</div>
                  <div className="step-content">
                    <h3>Deployment & Support</h3>
                    <p>
                      We manage smooth deployments and provide ongoing support to ensure your systems continue to 
                      operate optimally. Our support services include monitoring, maintenance, and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-stats-section">
              <h2>Our Impact</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Delivered</div>
                  <p>Successfully completed projects across various industries and technologies</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Enterprise Clients</div>
                  <p>Trusted by leading organizations worldwide</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">17</div>
                  <div className="stat-label">Service Categories</div>
                  <p>Comprehensive range of software solutions and services</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Team Members</div>
                  <p>Experienced professionals dedicated to excellence</p>
                </div>
              </div>
            </div>

            <div className="about-cta-section">
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Partner with Quantiliom to leverage cutting-edge software solutions that drive growth and innovation. 
                Let's discuss how we can help you achieve your digital transformation goals.
              </p>
              <div className="about-cta-buttons">
                <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                <Link to="/services" className="btn btn-secondary">Explore Our Services</Link>
              </div>
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
                <li><Link to="/about">About</Link></li>
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

export default About


