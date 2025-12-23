import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

interface ServiceData {
  id: number
  title: string
  items: string[]
  description: string
  whenNeeded: string
  benefits: string[]
}

// Professional landscape images for each service from Unsplash
const serviceImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', // Custom Software Development - code/development
  2: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80', // Web and Mobile - mobile devices
  3: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80', // Cloud Solutions - cloud/tech infrastructure
  4: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80', // Data Analytics - data visualization
  5: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80', // AI/ML - AI/technology
  6: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', // Enterprise Integration - network/connections
  7: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80', // Cybersecurity - security/lock
  8: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', // Consulting - architecture/planning
  9: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80', // QA Testing - testing/quality
  10: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80', // Low-Code - rapid development
  11: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80', // Automation - automation/robotics
  12: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80', // UI/UX Design - design/creative
  13: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80', // SaaS - cloud services
  14: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80', // Industry-Specific - business/industry
  15: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', // Legacy Modernization - transformation
  16: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80', // Maintenance - support/services
  17: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1920&q=80', // Training - education/learning
}

// Service icons mapping
const serviceIcons: Record<number, string> = {
  1: 'https://api.iconify.design/mdi:code-tags.svg',
  2: 'https://api.iconify.design/mdi:cellphone.svg',
  3: 'https://api.iconify.design/mdi:cloud.svg',
  4: 'https://api.iconify.design/mdi:chart-box.svg',
  5: 'https://api.iconify.design/mdi:robot.svg',
  6: 'https://api.iconify.design/mdi:link-variant.svg',
  7: 'https://api.iconify.design/mdi:shield-lock.svg',
  8: 'https://api.iconify.design/mdi:view-dashboard.svg',
  9: 'https://api.iconify.design/mdi:check-circle.svg',
  10: 'https://api.iconify.design/mdi:code-braces.svg',
  11: 'https://api.iconify.design/mdi:robot-industrial.svg',
  12: 'https://api.iconify.design/mdi:palette.svg',
  13: 'https://api.iconify.design/mdi:cloud-check.svg',
  14: 'https://api.iconify.design/mdi:briefcase.svg',
  15: 'https://api.iconify.design/mdi:refresh.svg',
  16: 'https://api.iconify.design/mdi:tools.svg',
  17: 'https://api.iconify.design/mdi:book-open-variant.svg',
}

const serviceData: Record<number, ServiceData> = {
  1: {
    id: 1,
    title: 'Custom Software Development',
    items: [
      'Organization-specific web applications',
      'Desktop software solutions',
      'Business process automation',
      'Modernization of existing systems (Refactoring)'
    ],
    description: 'Custom software development involves creating tailored software solutions specifically designed to meet your organization\'s unique requirements and business processes. Unlike off-the-shelf software, custom solutions are built from the ground up to align perfectly with your workflows, integrate seamlessly with existing systems, and scale as your business grows.',
    whenNeeded: 'Custom software development is essential when your organization has unique business processes that cannot be adequately addressed by standard software solutions. It\'s needed when you require specific integrations, need to maintain competitive advantages through proprietary systems, or when existing solutions don\'t scale with your business needs.',
    benefits: [
      'Perfect alignment with your business processes',
      'Competitive advantage through proprietary solutions',
      'Seamless integration with existing systems',
      'Scalability tailored to your growth trajectory',
      'Full control over features and functionality'
    ]
  },
  2: {
    id: 2,
    title: 'Web and Mobile Application Development',
    items: [
      'Enterprise web applications',
      'SaaS-based platforms',
      'iOS mobile applications',
      'Android mobile applications',
      'Cross-platform mobile solutions'
    ],
    description: 'Web and mobile application development encompasses creating digital solutions that enable users to interact with your services across multiple platforms. From responsive web applications accessible on any device to native mobile apps optimized for iOS and Android, we deliver solutions that provide exceptional user experiences and drive engagement.',
    whenNeeded: 'Web and mobile applications are needed when you want to extend your services to customers or employees through digital channels. They\'re essential for businesses looking to improve accessibility, increase customer engagement, enable remote work capabilities, or create new revenue streams through digital platforms.',
    benefits: [
      'Increased accessibility and user reach',
      'Enhanced customer engagement',
      'Improved operational efficiency',
      'Real-time data access and synchronization',
      'Platform-specific optimizations for better performance'
    ]
  },
  3: {
    id: 3,
    title: 'Cloud Solutions and DevOps',
    items: [
      'Cloud migration (On-prem → Cloud)',
      'Cloud infrastructure design',
      'CI/CD pipeline establishment',
      'Containerization (Docker, Kubernetes)',
      'Infrastructure as Code (IaC)',
      'System monitoring and performance optimization'
    ],
    description: 'Cloud solutions and DevOps practices enable organizations to build, deploy, and scale applications more efficiently. By leveraging cloud infrastructure and implementing DevOps methodologies, businesses can achieve faster time-to-market, improved reliability, and reduced operational costs while maintaining high standards of security and performance.',
    whenNeeded: 'Cloud solutions and DevOps are needed when organizations want to modernize their infrastructure, improve deployment speed, reduce operational overhead, or scale applications dynamically. They\'re essential for businesses requiring high availability, rapid feature delivery, or cost-effective infrastructure management.',
    benefits: [
      'Reduced infrastructure costs',
      'Faster deployment cycles',
      'Improved scalability and flexibility',
      'Enhanced reliability and uptime',
      'Automated workflows reducing manual errors'
    ]
  },
  4: {
    id: 4,
    title: 'Data, Analytics, and Business Intelligence',
    items: [
      'Data warehouse design',
      'Dashboard and reporting systems',
      'Business Intelligence (BI) solutions',
      'Data integration and cleansing'
    ],
    description: 'Data, analytics, and business intelligence solutions transform raw data into actionable insights that drive informed decision-making. By designing robust data warehouses, creating intuitive dashboards, and implementing comprehensive BI solutions, organizations can unlock the value hidden in their data and gain competitive advantages.',
    whenNeeded: 'Data analytics and BI solutions are needed when organizations have large volumes of data but struggle to extract meaningful insights. They\'re essential for businesses requiring data-driven decision-making, regulatory compliance reporting, performance monitoring, or competitive analysis through data patterns.',
    benefits: [
      'Data-driven decision making',
      'Improved operational visibility',
      'Identification of business opportunities',
      'Enhanced regulatory compliance',
      'Real-time performance monitoring'
    ]
  },
  5: {
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
    ],
    description: 'Artificial Intelligence and Machine Learning solutions enable organizations to automate complex processes, gain predictive insights, and create intelligent systems that learn and adapt. From natural language processing to computer vision, AI/ML technologies can transform how businesses operate and interact with customers.',
    whenNeeded: 'AI/ML solutions are needed when organizations want to automate decision-making processes, predict future trends, enhance customer experiences through personalization, detect anomalies or fraud, or extract insights from unstructured data. They\'re essential for businesses seeking competitive advantages through intelligent automation.',
    benefits: [
      'Automated decision-making processes',
      'Predictive analytics capabilities',
      'Enhanced personalization',
      'Improved efficiency through automation',
      'Competitive advantage through intelligent systems'
    ]
  },
  6: {
    id: 6,
    title: 'Enterprise System Integration',
    items: [
      'API design and integration',
      'ERP system integration',
      'CRM system integration',
      'Payment and third-party service integrations',
      'Legacy system integration'
    ],
    description: 'Enterprise system integration connects disparate systems and applications to create a unified, efficient technology ecosystem. By designing robust APIs and integrating various systems, organizations can eliminate data silos, streamline workflows, and ensure seamless information flow across the entire enterprise.',
    whenNeeded: 'Enterprise system integration is needed when organizations use multiple software systems that don\'t communicate effectively, leading to data silos and inefficient processes. It\'s essential when businesses need to connect legacy systems with modern applications, integrate third-party services, or consolidate data from multiple sources.',
    benefits: [
      'Eliminated data silos',
      'Streamlined business processes',
      'Improved data accuracy and consistency',
      'Reduced manual data entry',
      'Enhanced system interoperability'
    ]
  },
  7: {
    id: 7,
    title: 'Cybersecurity and Software Security',
    items: [
      'Application security',
      'Penetration testing',
      'Identity and Access Management (IAM)',
      'Secure software architecture',
      'Data security solutions'
    ],
    description: 'Cybersecurity and software security services protect organizations from threats and vulnerabilities. Through comprehensive security assessments, secure architecture design, and robust access management, we help organizations safeguard their digital assets and maintain compliance with security standards.',
    whenNeeded: 'Cybersecurity services are needed when organizations handle sensitive data, operate in regulated industries, or face increasing security threats. They\'re essential for businesses requiring compliance with security standards, protecting customer data, or securing critical business systems.',
    benefits: [
      'Protection against security threats',
      'Regulatory compliance',
      'Customer trust and confidence',
      'Reduced risk of data breaches',
      'Secure software architecture'
    ]
  },
  8: {
    id: 8,
    title: 'Software Consulting and Architectural Design',
    items: [
      'System architecture design',
      'Technology stack consulting',
      'Scalability planning',
      'Monolith vs. Microservices consulting'
    ],
    description: 'Software consulting and architectural design services provide strategic guidance for building robust, scalable software systems. Our consultants help organizations make informed decisions about technology choices, system architecture, and development approaches that align with business goals and technical requirements.',
    whenNeeded: 'Software consulting is needed when organizations are planning new software projects, facing architectural challenges, or need guidance on technology decisions. It\'s essential for businesses requiring expert advice on scalability, technology selection, or architectural patterns before committing to development.',
    benefits: [
      'Informed technology decisions',
      'Optimized system architecture',
      'Reduced development risks',
      'Scalability planning',
      'Cost-effective solutions'
    ]
  },
  9: {
    id: 9,
    title: 'QA, Test Automation, and Quality Assurance',
    items: [
      'Manual testing processes',
      'Test automation',
      'Unit and integration testing',
      'Load and performance testing',
      'CI/CD test integration'
    ],
    description: 'Quality assurance and test automation ensure software reliability, performance, and user satisfaction. Through comprehensive testing strategies, automated test suites, and continuous integration practices, we help organizations deliver high-quality software that meets user expectations and performs reliably under various conditions.',
    whenNeeded: 'QA and test automation are needed when organizations want to ensure software quality, reduce bugs in production, or accelerate release cycles. They\'re essential for businesses requiring reliable software, regulatory compliance, or rapid feature delivery without compromising quality.',
    benefits: [
      'Reduced production bugs',
      'Faster release cycles',
      'Improved software reliability',
      'Cost savings through early bug detection',
      'Automated regression testing'
    ]
  },
  10: {
    id: 10,
    title: 'Low-Code / No-Code Solutions',
    items: [
      'Rapid application development',
      'Internal process applications',
      'Prototyping solutions'
    ],
    description: 'Low-code and no-code solutions enable rapid application development with minimal traditional programming. These platforms allow organizations to build applications quickly, empower non-technical users to create solutions, and accelerate time-to-market for internal tools and process automation.',
    whenNeeded: 'Low-code/no-code solutions are needed when organizations require rapid application development, need to empower business users to create solutions, or want to prototype applications quickly. They\'re ideal for internal tools, process automation, or applications with straightforward requirements.',
    benefits: [
      'Rapid application development',
      'Reduced development costs',
      'Empowered business users',
      'Faster time-to-market',
      'Easier maintenance and updates'
    ]
  },
  11: {
    id: 11,
    title: 'Business Process Automation (BPM & RPA)',
    items: [
      'RPA bot development',
      'Operational process automation',
      'Finance and accounting automation',
      'HR process automation'
    ],
    description: 'Business process automation uses technology to automate repetitive, rule-based tasks and workflows. Through RPA bots and BPM solutions, organizations can reduce manual effort, improve accuracy, and free employees to focus on higher-value activities while ensuring consistent process execution.',
    whenNeeded: 'Business process automation is needed when organizations have repetitive, time-consuming manual processes that can be automated. It\'s essential for businesses wanting to reduce operational costs, improve process accuracy, or scale operations without proportionally increasing headcount.',
    benefits: [
      'Reduced operational costs',
      'Improved process accuracy',
      'Increased operational efficiency',
      '24/7 process execution',
      'Employee focus on value-added tasks'
    ]
  },
  12: {
    id: 12,
    title: 'UI / UX and Digital Product Design',
    items: [
      'User Experience (UX) research',
      'UI design',
      'Wireframing and prototyping',
      'Design system development'
    ],
    description: 'UI/UX and digital product design services create intuitive, engaging user experiences that drive user satisfaction and business success. Through user research, thoughtful design, and comprehensive design systems, we help organizations create products that users love and that achieve business objectives.',
    whenNeeded: 'UI/UX design services are needed when organizations want to improve user satisfaction, increase conversion rates, or create products with exceptional user experiences. They\'re essential for businesses competing in user-centric markets or requiring intuitive interfaces for complex systems.',
    benefits: [
      'Improved user satisfaction',
      'Increased conversion rates',
      'Reduced user training needs',
      'Enhanced brand perception',
      'Competitive advantage through superior UX'
    ]
  },
  13: {
    id: 13,
    title: 'SaaS Product Development',
    items: [
      'Subscription-based software',
      'Multi-tenant architecture',
      'User and role management',
      'Licensing and payment systems'
    ],
    description: 'SaaS product development involves creating cloud-based software delivered as a service through subscription models. SaaS products require specialized architecture for multi-tenancy, subscription management, and scalable infrastructure to serve multiple customers efficiently.',
    whenNeeded: 'SaaS product development is needed when organizations want to offer software as a subscription service, reach broader markets through cloud delivery, or create recurring revenue streams. It\'s essential for businesses transitioning from traditional software models to service-based offerings.',
    benefits: [
      'Recurring revenue model',
      'Scalable business model',
      'Reduced customer acquisition costs',
      'Continuous customer relationships',
      'Automatic updates and maintenance'
    ]
  },
  14: {
    id: 14,
    title: 'Industry-Specific Software Solutions (Vertical Software)',
    items: [
      'FinTech software',
      'HealthTech solutions',
      'EdTech platforms',
      'Logistics and supply chain software',
      'Real Estate and CRM systems'
    ],
    description: 'Industry-specific software solutions are tailored to meet the unique requirements and regulations of specific industries. From FinTech compliance to healthcare data management, vertical software addresses industry-specific challenges and regulatory requirements that generic solutions cannot adequately address.',
    whenNeeded: 'Industry-specific solutions are needed when organizations operate in regulated industries, have industry-specific workflows, or require compliance with sector-specific regulations. They\'re essential for businesses needing specialized functionality that generic software cannot provide.',
    benefits: [
      'Industry-specific functionality',
      'Regulatory compliance',
      'Optimized workflows',
      'Competitive advantage',
      'Specialized expertise'
    ]
  },
  15: {
    id: 15,
    title: 'Legacy System Modernization',
    items: [
      'Legacy system analysis',
      'Code and architectural refactoring',
      'Monolith → Microservices transformation',
      'Performance and security enhancements'
    ],
    description: 'Legacy system modernization involves updating and transforming outdated systems to meet modern requirements. Through careful analysis, refactoring, and architectural transformation, organizations can extend the life of valuable systems while gaining modern capabilities and improved maintainability.',
    whenNeeded: 'Legacy system modernization is needed when existing systems become difficult to maintain, lack modern capabilities, or pose security risks. It\'s essential for organizations wanting to extend system life, improve performance, or integrate legacy systems with modern technologies.',
    benefits: [
      'Extended system lifespan',
      'Improved maintainability',
      'Enhanced security',
      'Modern capabilities',
      'Better integration possibilities'
    ]
  },
  16: {
    id: 16,
    title: 'Maintenance, Support, and Managed Services',
    items: [
      'Application maintenance services',
      'System monitoring and support',
      'SLA-based technical support',
      'Version and update management'
    ],
    description: 'Maintenance, support, and managed services ensure software systems continue to operate reliably and efficiently over time. Through proactive monitoring, regular updates, and responsive support, organizations can maintain system health, address issues quickly, and ensure continuous business operations.',
    whenNeeded: 'Maintenance and support services are needed when organizations want to ensure system reliability, require ongoing updates, or need expert support for software systems. They\'re essential for businesses requiring guaranteed uptime, regular feature updates, or technical expertise for system management.',
    benefits: [
      'Reduced downtime',
      'Proactive issue resolution',
      'Regular updates and improvements',
      'Expert technical support',
      'Predictable operational costs'
    ]
  },
  17: {
    id: 17,
    title: 'Technical Training and Documentation',
    items: [
      'Corporate software training',
      'Developer onboarding programs',
      'Technical documentation preparation',
      'API and system documentation'
    ],
    description: 'Technical training and documentation services ensure teams can effectively use and maintain software systems. Through comprehensive training programs and detailed documentation, organizations can accelerate onboarding, improve system adoption, and ensure knowledge transfer for long-term success.',
    whenNeeded: 'Technical training and documentation are needed when organizations deploy new systems, onboard new team members, or require knowledge transfer. They\'re essential for businesses wanting to maximize system adoption, reduce support burden, or ensure teams can effectively use and maintain systems.',
    benefits: [
      'Faster onboarding',
      'Improved system adoption',
      'Reduced support burden',
      'Knowledge preservation',
      'Enhanced team capabilities'
    ]
  }
}

function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const serviceId = id ? parseInt(id, 10) : 0
  const service = serviceData[serviceId]
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  if (!service) {
    return (
      <div className="app">
        <div className="container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
          <h2>Service not found</h2>
          <Link to="/services">Back to Services</Link>
        </div>
      </div>
    )
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

      {/* Hero Section with Image */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-image">
          <img src={serviceImages[service.id]} alt={service.title} loading="eager" />
          <div className="service-detail-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="service-detail-hero-content">
            <Link to="/services" className="service-detail-back-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Services
            </Link>
            <div className="service-detail-hero-header">
              <h1 className="service-detail-hero-title">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-detail-page">
        <div className="container">
          {/* Overview Section */}
          <div className="service-detail-section service-detail-overview">
            <div className="service-detail-section-header">
              <h2 className="service-detail-section-title">Overview</h2>
            </div>
            <div className="service-detail-section-content">
              <p className="service-description">{service.description}</p>
            </div>
          </div>

          {/* When It's Needed Section */}
          <div className="service-detail-section service-detail-when-needed">
            <div className="service-detail-section-header">
              <h2 className="service-detail-section-title">When It's Needed</h2>
            </div>
            <div className="service-detail-section-content">
              <p className="service-when-needed">{service.whenNeeded}</p>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="service-detail-section service-detail-benefits">
            <div className="service-detail-section-header">
              <h2 className="service-detail-section-title">Key Benefits</h2>
            </div>
            <div className="service-benefits-grid">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="service-benefit-card">
                  <div className="service-benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="service-benefit-text">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="service-detail-section service-detail-offerings">
            <div className="service-detail-section-header">
              <h2 className="service-detail-section-title">What We Offer</h2>
            </div>
            <div className="service-offerings-grid">
              {service.items.map((item, index) => (
                <div key={index} className="service-offering-item">
                  <div className="service-offering-bullet"></div>
                  <span className="service-offering-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="service-detail-cta-section">
            <div className="service-detail-cta-content">
              <h3 className="service-detail-cta-title">Ready to Get Started?</h3>
              <p className="service-detail-cta-description">
                Let's discuss how {service.title.toLowerCase()} can transform your business.
              </p>
              <div className="service-detail-cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Schedule a Consultation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link to="/services" className="btn btn-secondary btn-large">
                  Explore Other Services
                </Link>
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

export default ServiceDetail


