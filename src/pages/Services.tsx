import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

interface ServiceCategory {
  id: number
  title: string
  items: string[]
}

const services: ServiceCategory[] = [
  {
    id: 1,
    title: 'Custom Software Development',
    items: [
      'Organization-specific web applications',
      'Desktop software solutions',
      'Business process automation',
      'Modernization of existing systems (Refactoring)'
    ]
  },
  {
    id: 2,
    title: 'Web and Mobile Application Development',
    items: [
      'Enterprise web applications',
      'SaaS-based platforms',
      'iOS mobile applications',
      'Android mobile applications',
      'Cross-platform mobile solutions'
    ]
  },
  {
    id: 3,
    title: 'Cloud Solutions and DevOps',
    items: [
      'Cloud migration (On-prem → Cloud)',
      'Cloud infrastructure design',
      'CI/CD pipeline establishment',
      'Containerization (Docker, Kubernetes)',
      'Infrastructure as Code (IaC)',
      'System monitoring and performance optimization'
    ]
  },
  {
    id: 4,
    title: 'Data, Analytics, and Business Intelligence',
    items: [
      'Data warehouse design',
      'Dashboard and reporting systems',
      'Business Intelligence (BI) solutions',
      'Data integration and cleansing'
    ]
  },
  {
    id: 5,
    title: 'Artificial Intelligence and Machine Learning (AI / ML)',
    items: [
      'Machine learning models (Prediction, Classification)',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Generative AI solutions',
      'Recommendation systems',
      'Anomaly and fraud detection',
      'AI integration (Ready-made models & API usage)',
      'MLOps (Model deployment, monitoring, versioning)'
    ]
  },
  {
    id: 6,
    title: 'Enterprise System Integration',
    items: [
      'API design and integration',
      'ERP system integration',
      'CRM system integration',
      'Payment and third-party service integrations',
      'Legacy system integration'
    ]
  },
  {
    id: 7,
    title: 'Cybersecurity and Software Security',
    items: [
      'Application security',
      'Penetration testing',
      'Identity and Access Management (IAM)',
      'Secure software architecture',
      'Data security solutions'
    ]
  },
  {
    id: 8,
    title: 'Software Consulting and Architectural Design',
    items: [
      'System architecture design',
      'Technology stack consulting',
      'Scalability planning',
      'Monolith vs. Microservices consulting'
    ]
  },
  {
    id: 9,
    title: 'QA, Test Automation, and Quality Assurance',
    items: [
      'Manual testing processes',
      'Test automation',
      'Unit and integration testing',
      'Load and performance testing',
      'CI/CD test integration'
    ]
  },
  {
    id: 10,
    title: 'Low-Code / No-Code Solutions',
    items: [
      'Rapid application development',
      'Internal process applications',
      'Prototyping solutions'
    ]
  },
  {
    id: 11,
    title: 'Business Process Automation (BPM & RPA)',
    items: [
      'RPA bot development',
      'Operational process automation',
      'Finance and accounting automation',
      'HR process automation'
    ]
  },
  {
    id: 12,
    title: 'UI / UX and Digital Product Design',
    items: [
      'User Experience (UX) research',
      'UI design',
      'Wireframing and prototyping',
      'Design system development'
    ]
  },
  {
    id: 13,
    title: 'SaaS Product Development',
    items: [
      'Subscription-based software',
      'Multi-tenant architecture',
      'User and role management',
      'Licensing and payment systems'
    ]
  },
  {
    id: 14,
    title: 'Industry-Specific Software Solutions (Vertical Software)',
    items: [
      'FinTech software',
      'HealthTech solutions',
      'EdTech platforms',
      'Logistics and supply chain software',
      'Real Estate and CRM systems'
    ]
  },
  {
    id: 15,
    title: 'Legacy System Modernization',
    items: [
      'Legacy system analysis',
      'Code and architectural refactoring',
      'Monolith → Microservices transformation',
      'Performance and security enhancements'
    ]
  },
  {
    id: 16,
    title: 'Maintenance, Support, and Managed Services',
    items: [
      'Application maintenance services',
      'System monitoring and support',
      'SLA-based technical support',
      'Version and update management'
    ]
  },
  {
    id: 17,
    title: 'Technical Training and Documentation',
    items: [
      'Corporate software training',
      'Developer onboarding programs',
      'Technical documentation preparation',
      'API and system documentation'
    ]
  }
]

function Services() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light')
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar scrolled">
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-text">QUANTILIOM</span>
          </Link>
          <div className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/services" className="active">Services</Link>
            <Link to="/team">Team</Link>
            <a href="/#about">About</a>
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

      {/* Services Section */}
      <section className="services services-page">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">OUR CAPABILITIES</div>
            <h2 className="section-title">Comprehensive Software Solutions</h2>
            <p className="section-subtitle">
              We offer a complete range of software development and consulting services 
              tailored to enterprise needs. From custom development to AI/ML solutions, 
              our expertise spans the entire software lifecycle.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-category ${expandedCategory === service.id ? 'expanded' : ''}`}
                onClick={() => setExpandedCategory(expandedCategory === service.id ? null : service.id)}
              >
                <div className="service-category-header">
                  <h3 className="service-category-title">{service.title}</h3>
                  <div className="service-category-toggle">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className={expandedCategory === service.id ? 'rotated' : ''}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="service-category-content">
                  <ul className="service-items">
                    {service.items.map((item, index) => (
                      <li key={index}>
                        <Link to={`/services/${service.id}`}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>QUANTILIOM</h3>
              <p>Enterprise software solutions for the digital age.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services">Custom Development</Link></li>
                <li><Link to="/services">Cloud Solutions</Link></li>
                <li><Link to="/services">AI/ML Services</Link></li>
                <li><Link to="/services">Consulting</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#contact">Contact</a></li>
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

export default Services

