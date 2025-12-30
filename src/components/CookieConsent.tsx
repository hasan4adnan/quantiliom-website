import { useState, useEffect } from 'react'
import '../App.css'

const COOKIE_CONSENT_KEY = 'quantiliom-cookie-consent'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Check if consent has been given
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Small delay to ensure smooth page load
      const timer = setTimeout(() => {
        setShow(true)
        document.body.classList.add('cookie-banner-visible')
      }, 1000)
      return () => {
        clearTimeout(timer)
        document.body.classList.remove('cookie-banner-visible')
      }
    }
    return () => {
      document.body.classList.remove('cookie-banner-visible')
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setShow(false)
    document.body.classList.remove('cookie-banner-visible')
    // Save current theme preference now that consent is given
    const currentTheme = document.documentElement.getAttribute('data-theme')
    if (currentTheme) {
      localStorage.setItem('quantiliom-theme', currentTheme)
    }
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setShow(false)
    document.body.classList.remove('cookie-banner-visible')
    // Clear theme preference if rejected
    localStorage.removeItem('quantiliom-theme')
  }

  if (!show) return null

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-container">
        <div className="cookie-consent-content">
          <div className="cookie-consent-text-wrapper">
            <p className="cookie-consent-text">
              We use cookies to store your theme preference and improve your experience on our website. 
              By continuing to use this site, you consent to our use of cookies.
            </p>
            <a href="/contact" className="cookie-consent-link">
              Learn more about our Privacy Policy
            </a>
          </div>
          <div className="cookie-consent-actions">
            <button 
              className="cookie-consent-button cookie-consent-button-reject" 
              onClick={handleReject}
            >
              Reject
            </button>
            <a 
              href="/contact" 
              className="cookie-consent-button cookie-consent-button-terms"
            >
              Privacy Policy
            </a>
            <button 
              className="cookie-consent-button cookie-consent-button-accept" 
              onClick={handleAccept}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

