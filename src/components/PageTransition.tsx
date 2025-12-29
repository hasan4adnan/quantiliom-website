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


  useEffect(() => {
    // Skip transition on initial render
    if (isFirstRender.current) {
      isFirstRender.current = false
      prevLocationRef.current = location.pathname
      setIsTransitioning(false)
      return
    }

    // Always trigger transition when pathname changes
    const currentPath = location.pathname
    if (currentPath !== prevLocationRef.current) {
      // Clear any existing timers/intervals
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
        transitionTimeoutRef.current = null
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

