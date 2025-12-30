import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'quantiliom-theme'
const COOKIE_CONSENT_KEY = 'quantiliom-cookie-consent'

// Get system preference
const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Get initial theme with priority: saved preference > system preference > default
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'
  
  // Check for saved preference first
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }
  
  // Fall back to system preference
  return getSystemTheme()
}

// Set theme attribute on document before render (called from main.tsx)
export const setThemeBeforeRender = (): Theme => {
  const theme = getInitialTheme()
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      return getInitialTheme()
    } catch (e) {
      return 'dark'
    }
  })

  useEffect(() => {
    // Ensure theme is set on mount
    try {
      document.documentElement.setAttribute('data-theme', theme)
    } catch (e) {
      // Ignore errors
    }
  }, [theme])

  // Listen for system theme changes (only if no saved preference)
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
      if (savedTheme) return // Don't listen if user has saved preference

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? 'dark' : 'light'
        setThemeState(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
      }

      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleChange)
        return () => mediaQuery.removeListener(handleChange)
      }
    } catch (e) {
      // Ignore errors
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    try {
      document.documentElement.setAttribute('data-theme', newTheme)
      // Save to localStorage (only after cookie consent)
      const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted'
      if (hasConsent) {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme)
      }
    } catch (e) {
      // localStorage might be disabled
      console.warn('Failed to save theme preference:', e)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

