import { useLocation } from 'react-router-dom'

interface StructuredDataProps {
  type?: 'home' | 'page'
  pageTitle?: string
  breadcrumbs?: Array<{ name: string; url: string }>
}

export default function StructuredData({ type = 'page', pageTitle, breadcrumbs }: StructuredDataProps) {
  const location = useLocation()
  const baseUrl = 'https://quantiliom.com'
  const currentUrl = `${baseUrl}${location.pathname}`

  // Organization Schema (always included)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Quantiliom',
    url: baseUrl,
    logo: `${baseUrl}/quantiliom-logo.png`,
    description: 'Quantiliom - Innovative software solutions for the digital age. Custom development, cloud solutions, and expert consulting.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amsterdam',
      addressCountry: 'NL',
      streetAddress: 'B. Amsterdam'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-20-XXX-XXXX',
      contactType: 'Customer Service',
      email: 'info@quantiliom.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://www.linkedin.com/company/quantiliom',
      'https://x.com/quantiliom'
    ]
  }

  // WebSite Schema with SearchAction (for homepage)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Quantiliom',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/services?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  // BreadcrumbList Schema
  const getBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) {
      // Default breadcrumbs based on path
      const pathParts = location.pathname.split('/').filter(Boolean)
      const defaultBreadcrumbs = [
        { name: 'Home', url: baseUrl }
      ]
      
      if (pathParts.length > 0) {
        if (pathParts[0] === 'services') {
          defaultBreadcrumbs.push({ name: 'Services', url: `${baseUrl}/services` })
          if (pathParts[1]) {
            defaultBreadcrumbs.push({ name: 'Service Details', url: currentUrl })
          }
        } else {
          const pageName = pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1)
          defaultBreadcrumbs.push({ name: pageName, url: currentUrl })
        }
      }
      
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: defaultBreadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      }
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    }
  }

  // Page-specific schema
  const getPageSchema = () => {
    if (type === 'home') {
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${baseUrl}/#webpage`,
        url: baseUrl,
        name: 'Quantiliom - Innovative Software Solutions',
        description: 'Quantiliom provides comprehensive software solutions for enterprises seeking to transform their digital infrastructure.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': `${baseUrl}/#website`
        }
      }
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${currentUrl}#webpage`,
      url: currentUrl,
      name: pageTitle || 'Quantiliom',
      description: 'Quantiliom - Innovative software solutions for the digital age.',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': `${baseUrl}/#website`
      }
    }
  }

  const schemas = [
    organizationSchema,
    type === 'home' ? websiteSchema : null,
    getPageSchema(),
    location.pathname !== '/' ? getBreadcrumbSchema() : null
  ].filter(Boolean)

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </>
  )
}

