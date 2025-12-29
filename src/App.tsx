import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import About from './pages/About'
import ServiceDetail from './pages/ServiceDetail'
import PageTransition from './components/PageTransition'
import { TransitionProvider, useTransition } from './contexts/TransitionContext'
import React from 'react'

interface ServiceCategory {
  id: number
  title: string
  items: string[]
}

function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showAllServices, setShowAllServices] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
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

  const displayedServices = showAllServices ? services : services.slice(0, 6)

  // Industry icons mapping - using CDN URLs from Iconify
  const industryIcons: Record<string, string> = {
    'Financial Services': 'https://api.iconify.design/mdi:bank.svg',
    'Healthcare': 'https://api.iconify.design/mdi:medical-bag.svg',
    'E-Commerce': 'https://api.iconify.design/mdi:shopping.svg',
    'Manufacturing': 'https://api.iconify.design/mdi:factory.svg',
    'Education': 'https://api.iconify.design/mdi:school.svg',
    'Logistics': 'https://api.iconify.design/mdi:truck-delivery.svg',
    'Real Estate': 'https://api.iconify.design/mdi:office-building.svg',
    'Energy & Utilities': 'https://api.iconify.design/mdi:lightning-bolt.svg',
  }

  // Service icons mapping - using CDN URLs from Iconify
  const serviceIcons: Record<number, string> = {
    1: 'https://api.iconify.design/mdi:code-tags.svg', // Custom Software Development
    2: 'https://api.iconify.design/mdi:cellphone.svg', // Web and Mobile Application Development
    3: 'https://api.iconify.design/mdi:cloud.svg', // Cloud Solutions and DevOps
    4: 'https://api.iconify.design/mdi:chart-box.svg', // Data, Analytics, and Business Intelligence
    5: 'https://api.iconify.design/mdi:robot.svg', // Artificial Intelligence and Machine Learning
    6: 'https://api.iconify.design/mdi:link-variant.svg', // Enterprise System Integration
    7: 'https://api.iconify.design/mdi:shield-lock.svg', // Cybersecurity and Software Security
    8: 'https://api.iconify.design/mdi:view-dashboard.svg', // Software Consulting and Architectural Design
    9: 'https://api.iconify.design/mdi:check-circle.svg', // QA, Test Automation, and Quality Assurance
    10: 'https://api.iconify.design/mdi:code-braces.svg', // Low-Code / No-Code Solutions
    11: 'https://api.iconify.design/mdi:robot-industrial.svg', // Business Process Automation
    12: 'https://api.iconify.design/mdi:palette.svg', // UI / UX and Digital Product Design
    13: 'https://api.iconify.design/mdi:cloud-check.svg', // SaaS Product Development
    14: 'https://api.iconify.design/mdi:briefcase.svg', // Industry-Specific Software Solutions
    15: 'https://api.iconify.design/mdi:refresh.svg', // Legacy System Modernization
    16: 'https://api.iconify.design/mdi:tools.svg', // Maintenance, Support, and Managed Services
    17: 'https://api.iconify.design/mdi:book-open-variant.svg', // Technical Training and Documentation
  }

  // Technology logo mapping - using CDN URLs with transparent backgrounds
  const techLogos: Record<string, string> = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazonaws.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'Google Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'iOS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    'Android': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Scikit-learn': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/scikitlearn.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'Oracle Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Elasticsearch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
    'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'Cypress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg',
    'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
    'JUnit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'TestNG': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Mocha': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
    'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'Playwright': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg',
    'Puppeteer': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/puppeteer.svg',
    'OWASP': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/owasp.svg',
    'SSL/TLS': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/letsencrypt.svg',
    'OAuth': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
    'JWT': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/jsonwebtokens.svg',
    'Penetration Testing': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg',
    'Burp Suite': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/portswigger.svg',
    'Nessus': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
    'Metasploit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg',
    'Wireshark': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/wireshark.svg',
    'SOC 2': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trustpilot.svg',
  }

  // Technologies that need dark mode inversion (black icons)
  const darkModeInvert = ['SSL/TLS', 'OWASP', 'JWT', 'iOS', 'AWS', 'Oracle Cloud', 'Burp Suite', 'SOC 2', 'Puppeteer', 'Scikit-learn', 'Wireshark', 'Nessus']

  // Helper function to render tech item (logo or text)
  const renderTechItem = (techName: string) => {
    const logoPath = techLogos[techName]
    if (logoPath) {
      const needsInvert = darkModeInvert.includes(techName)
      return (
        <div className="tech-item" key={techName}>
          <img 
            src={logoPath} 
            alt={techName} 
            className={`tech-logo ${needsInvert ? 'tech-logo-invert' : ''}`}
            loading="lazy"
          />
          <span className="tech-name">{techName}</span>
        </div>
      )
    }
    return (
      <div className="tech-text" key={techName}>{techName}</div>
    )
  }

  // Technology categories with their tech stacks
  const techCategories = [
    {
      title: 'Frontend Development',
      techs: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      techs: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'PHP']
    },
    {
      title: 'Cloud & DevOps',
      techs: ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud', 'Docker', 'Kubernetes']
    },
    {
      title: 'Mobile Development',
      techs: ['React Native', 'Flutter', 'iOS', 'Android', 'Swift', 'Kotlin']
    },
    {
      title: 'Data & AI',
      techs: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Database Solutions',
      techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase']
    },
    {
      title: 'Testing & QA',
      techs: ['Jest', 'Cypress', 'Selenium', 'JUnit', 'TestNG', 'Mocha', 'Postman', 'Playwright', 'Puppeteer']
    },
    {
      title: 'Security & Compliance',
      techs: ['OWASP', 'SSL/TLS', 'OAuth', 'JWT', 'Penetration Testing', 'Burp Suite', 'Nessus', 'Metasploit', 'Wireshark', 'SOC 2']
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <img src="/quantiliom-logo.png" alt="Quantiliom" className="logo-img" />
          </div>
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
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
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">ENTERPRISE SOFTWARE SOLUTIONS</div>
          <h1 className="hero-title">
            Delivering Excellence in<br />
            Software Development
          </h1>
          <p className="hero-subtitle">
            Quantiliom provides comprehensive software solutions for enterprises seeking 
            to transform their digital infrastructure. We combine technical expertise with 
            strategic insight to deliver scalable, secure, and innovative software systems 
            that drive business growth.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">500+</div>
              <div className="hero-stat-label">Projects Delivered</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">200+</div>
              <div className="hero-stat-label">Enterprise Clients</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">17</div>
              <div className="hero-stat-label">Service Categories</div>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Explore Services</Link>
            <Link to="/contact" className="btn btn-secondary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">OUR CAPABILITIES</div>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              We offer a complete range of software development and consulting services 
              tailored to enterprise needs.
            </p>
          </div>
          
          <div className="services-grid-square">
            {displayedServices.map((service) => (
              <div key={service.id} className="service-card-square">
                <div className="service-card-header">
                  <div className="service-icon">
                    <img 
                      src={serviceIcons[service.id]} 
                      alt={service.title} 
                      className="service-icon-img"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                </div>
                <div className="service-card-items">
                  {service.items.slice(0, 3).map((item, index) => (
                    <div key={index} className="service-card-item">• {item}</div>
                  ))}
                  {service.items.length > 3 && (
                    <div className="service-card-more">+{service.items.length - 3} more</div>
                  )}
                </div>
                <Link to={`/services/${service.id}`} className="service-card-link">Learn More →</Link>
              </div>
            ))}
          </div>

          {!showAllServices && (
            <div className="services-show-more">
              <button className="btn btn-secondary" onClick={() => setShowAllServices(true)}>
                Show More Services
              </button>
            </div>
          )}

          {showAllServices && (
            <div className="services-show-more">
              <Link to="/services" className="btn btn-primary">
                View All Services in Detail →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">WHY QUANTILIOM</div>
            <h2 className="section-title">Why Choose Quantiliom</h2>
            <p className="section-subtitle">
              We combine technical excellence with business acumen to deliver solutions that drive real results
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-item-header">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Expert Team</h3>
              </div>
              <p>Our developers are experts in the latest technologies and best practices, bringing years of experience to every project.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3>Agile Methodology</h3>
              </div>
              <p>We work in sprints, ensuring rapid delivery, continuous improvement, and flexibility to adapt to changing requirements.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <h3>Scalable Solutions</h3>
              </div>
              <p>Build for today, scale for tomorrow with architecture that grows with your business needs and user base.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3>24/7 Support</h3>
              </div>
              <p>Round-the-clock assistance to keep your systems running smoothly, with dedicated support teams ready to help.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                  </svg>
                </div>
                <h3>Security First</h3>
              </div>
              <p>Enterprise-grade security measures built into every solution, ensuring your data and systems are protected.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Proven Track Record</h3>
              </div>
              <p>500+ successful projects delivered across various industries, demonstrating our ability to deliver results.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Quality Assurance</h3>
              </div>
              <p>Rigorous testing and quality control processes ensure every solution meets the highest standards before delivery.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item-header">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    <line x1="9" y1="11" x2="9" y2="17"/>
                    <line x1="12" y1="14" x2="12" y2="17"/>
                    <line x1="15" y1="11" x2="15" y2="17"/>
                  </svg>
                </div>
                <h3>Client-Centric Approach</h3>
              </div>
              <p>We prioritize understanding your business needs and work closely with you to ensure solutions align with your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="technology-stack">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">TECHNOLOGIES</div>
            <h2 className="section-title">Our Technology Expertise</h2>
            <p className="section-subtitle">
              We work with cutting-edge technologies and frameworks to build modern, scalable solutions
            </p>
          </div>
          <div className="tech-categories">
            {techCategories.map((category) => (
              <div 
                key={category.title} 
                className={`tech-category ${category.techs.length > 6 ? 'scrollable' : ''}`}
              >
                <h3>{category.title}</h3>
                <div className="tech-tags">
                  {category.techs.map((tech) => renderTechItem(tech))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">INDUSTRIES</div>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              We deliver software solutions across diverse industries, understanding unique sector requirements
            </p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">
                  <img 
                    src={industryIcons['Financial Services']} 
                    alt="Financial Services" 
                    className="industry-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3>Financial Services</h3>
              </div>
              <p>Secure, compliant solutions for banking, insurance, and fintech companies</p>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">
                  <img 
                    src={industryIcons['Healthcare']} 
                    alt="Healthcare" 
                    className="industry-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3>Healthcare</h3>
              </div>
              <p>HIPAA-compliant systems for hospitals, clinics, and healthtech platforms</p>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">
                  <img 
                    src={industryIcons['E-Commerce']} 
                    alt="E-Commerce" 
                    className="industry-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3>E-Commerce</h3>
              </div>
              <p>Scalable platforms for online retail, marketplaces, and digital commerce</p>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">
                  <img 
                    src={industryIcons['Manufacturing']} 
                    alt="Manufacturing" 
                    className="industry-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3>Manufacturing</h3>
              </div>
              <p>IoT integration, supply chain management, and industrial automation</p>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">
                  <img 
                    src={industryIcons['Education']} 
                    alt="Education" 
                    className="industry-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3>Education</h3>
              </div>
              <p>Learning management systems and educational technology platforms</p>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">
                  <img 
                    src={industryIcons['Logistics']} 
                    alt="Logistics" 
                    className="industry-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3>Logistics</h3>
              </div>
              <p>Transportation management, warehouse systems, and supply chain optimization</p>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">
                  <img 
                    src={industryIcons['Real Estate']} 
                    alt="Real Estate" 
                    className="industry-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3>Real Estate</h3>
              </div>
              <p>Property management systems, CRM platforms, and real estate technology solutions</p>
            </div>
            <div className="industry-card">
              <div className="industry-card-header">
                <div className="industry-icon">
                  <img 
                    src={industryIcons['Energy & Utilities']} 
                    alt="Energy & Utilities" 
                    className="industry-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3>Energy & Utilities</h3>
              </div>
              <p>Smart grid systems, energy management platforms, and utility infrastructure solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-badge">ABOUT US</div>
              <h2 className="section-title">Quantiliom</h2>
              <p className="about-description">
                Quantiliom is a leading software solutions company specializing in enterprise-grade 
                software development, cloud infrastructure, and digital transformation services. 
                Our team of experienced engineers, architects, and consultants work collaboratively 
                with organizations to deliver robust, scalable, and secure software systems.
              </p>
              <p className="about-description">
                We understand that every enterprise has unique challenges and requirements. Our 
                approach combines deep technical expertise with strategic business insight, ensuring 
                that our solutions not only meet technical specifications but also drive measurable 
                business value. From initial consultation through deployment and ongoing support, 
                we partner with our clients to ensure long-term success.
              </p>
              <div className="about-cta-inline">
                <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">GET IN TOUCH</div>
            <h2 className="section-title">Schedule a Consultation</h2>
            <p className="section-subtitle">
              Discuss your software development needs with our team. We'll help you identify 
              the best solutions for your enterprise.
            </p>
          </div>
          <div className="contact-preview">
            <div className="contact-info-grid">
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
            </div>
            <div className="contact-cta">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">FIND US</div>
            <h2 className="section-title">Our Location</h2>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4769617833737!2d4.9041!3d52.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3b87bc671%3A0x3d0b8a1d8b8b8b8b!2sB.%20Amsterdam%2C%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1234567890123!5m2!1sen!2snl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Quantiliom Location - B. Amsterdam, Amsterdam, Netherlands"
            ></iframe>
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
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About Us</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/quantiliom" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://x.com/quantiliom" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </div>
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

function PageWrapper({ children }: { children: React.ReactNode }) {
  const { isTransitioning } = useTransition()
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (!isTransitioning) {
      // Wait a tiny bit then show page with animation
      const timer = setTimeout(() => {
        setShouldRender(true)
        document.body.classList.add('page-enter')
        
        // Remove class after animation completes
        setTimeout(() => {
          document.body.classList.remove('page-enter')
        }, 600)
      }, 50)
      
      return () => {
        clearTimeout(timer)
        setShouldRender(false)
        document.body.classList.remove('page-enter')
      }
    } else {
      // Hide page during transition
      setShouldRender(false)
    }
  }, [isTransitioning])
  
  return (
    <div style={{ opacity: shouldRender ? 1 : 0, transition: 'opacity 0.3s' }}>
      {children}
    </div>
  )
}

function AppContent() {
  return (
    <>
      <PageTransition />
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/services/:id" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <TransitionProvider>
        <AppContent />
      </TransitionProvider>
    </Router>
  )
}

export default App
