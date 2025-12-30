import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

const defaultSEO = {
  title: 'Quantiliom - Innovative Software Solutions',
  description: 'Quantiliom - Innovative software solutions for the digital age. Custom development, cloud solutions, and expert consulting.',
  canonical: 'https://quantiliom.com',
  ogImage: 'https://quantiliom.com/quantiliom-logo.png'
}

export default function SEO({ title, description, canonical, ogImage }: SEOProps) {
  const location = useLocation()
  
  useEffect(() => {
    // Update document title
    const fullTitle = title ? `${title} | Quantiliom` : defaultSEO.title
    document.title = fullTitle

    // Update or create meta description
    const metaDescription = description || defaultSEO.description
    let metaDescTag = document.querySelector('meta[name="description"]')
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta')
      metaDescTag.setAttribute('name', 'description')
      document.head.appendChild(metaDescTag)
    }
    metaDescTag.setAttribute('content', metaDescription)

    // Update canonical URL
    const canonicalUrl = canonical || `${defaultSEO.canonical}${location.pathname}`
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.setAttribute('href', canonicalUrl)

    // Update Open Graph tags
    const ogTitle = title ? `${title} | Quantiliom` : defaultSEO.title
    const ogDesc = description || defaultSEO.description
    const ogUrl = `${defaultSEO.canonical}${location.pathname}`
    const ogImg = ogImage || defaultSEO.ogImage

    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    updateOGTag('og:title', ogTitle)
    updateOGTag('og:description', ogDesc)
    updateOGTag('og:url', ogUrl)
    updateOGTag('og:image', ogImg)

    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    updateTwitterTag('twitter:title', ogTitle)
    updateTwitterTag('twitter:description', ogDesc)
    updateTwitterTag('twitter:url', ogUrl)
    updateTwitterTag('twitter:image', ogImg)
  }, [title, description, canonical, ogImage, location.pathname])

  return null
}

