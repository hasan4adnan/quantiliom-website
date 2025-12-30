import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useTransition } from '../contexts/TransitionContext'
import '../App.css'

function PageTransition() {
  const location = useLocation()
  const { isTransitioning, setIsTransitioning } = useTransition()
  const [progress, setProgress] = useState(0)
  const prevLocationRef = useRef(location.pathname)
  const isFirstRender = useRef(true)
  const progressIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isNavigatingBackRef = useRef(false)
  const navigationHistoryRef = useRef<string[]>([])

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      isNavigatingBackRef.current = true
      // Remove last item from history when going back
      if (navigationHistoryRef.current.length > 0) {
        navigationHistoryRef.current.pop()
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    // Skip transition on initial render
    if (isFirstRender.current) {
      isFirstRender.current = false
      prevLocationRef.current = location.pathname
      navigationHistoryRef.current = [location.pathname]
      setIsTransitioning(false)
      isNavigatingBackRef.current = false
      return
    }

    const currentPath = location.pathname
    
    // Check if this is a back navigation
    // If current path is in history and not the last item, it's a back navigation
    const isBackNavigation = isNavigatingBackRef.current || 
      (navigationHistoryRef.current.length > 0 && 
       navigationHistoryRef.current.includes(currentPath) &&
       navigationHistoryRef.current[navigationHistoryRef.current.length - 1] !== currentPath)
    
    if (currentPath !== prevLocationRef.current) {
      if (isBackNavigation) {
        // Just update the path without showing transition
        prevLocationRef.current = currentPath
        isNavigatingBackRef.current = false
        // Update history stack
        const index = navigationHistoryRef.current.indexOf(currentPath)
        if (index !== -1) {
          navigationHistoryRef.current = navigationHistoryRef.current.slice(0, index + 1)
        }
      } else {
        // Forward navigation - show transition
        // Clear any existing timers/intervals
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current)
          progressIntervalRef.current = null
        }
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current)
          transitionTimeoutRef.current = null
        }

        // Add to history
        navigationHistoryRef.current.push(currentPath)
        // Keep history limited to prevent memory issues
        if (navigationHistoryRef.current.length > 50) {
          navigationHistoryRef.current.shift()
        }

        // Reset and start transition
        setIsTransitioning(true)
        setProgress(0)
        prevLocationRef.current = currentPath
        
        // Animate progress bar from 0 to 100% over 1 second
        const startTime = Date.now()
        const duration = 1000 // 1 second
        
        progressIntervalRef.current = setInterval(() => {
          const elapsed = Date.now() - startTime
          const newProgress = Math.min((elapsed / duration) * 100, 100)
          setProgress(newProgress)
          
          if (newProgress >= 100) {
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current)
              progressIntervalRef.current = null
            }
          }
        }, 16) // ~60fps
        
        // Complete transition after exactly 1 second
        transitionTimeoutRef.current = setTimeout(() => {
          setIsTransitioning(false)
          setProgress(0)
          
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = null
          }
        }, duration)

        return () => {
          if (transitionTimeoutRef.current) {
            clearTimeout(transitionTimeoutRef.current)
            transitionTimeoutRef.current = null
          }
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = null
          }
        }
      }
    }
  }, [location.pathname, setIsTransitioning])

  if (!isTransitioning) return null

  return (
    <div className="page-transition-overlay">
      <div className="page-transition-content">
        <div className="page-transition-logo-container">
          <img 
            src="/quantiliom-logo.png" 
            alt="Quantiliom" 
            className="page-transition-logo"
          />
        </div>
        <div className="page-transition-progress-container">
          <div 
            className="page-transition-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default PageTransition

