'use client'

import { useEffect, useRef, useState } from 'react'

const EASING = 'cubic-bezier(0.23, 1, 0.32, 1)'

export default function ScrollReveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  threshold = 0.01,
  rootMargin = '0px 0px -8% 0px',
  style,
  ...props
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('has-scroll-reveal')

    const element = elementRef.current
    if (!element) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.unobserve(element)
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  const revealStyle = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-easing': EASING,
    ...style,
  }

  return (
    <Component
      ref={elementRef}
      className={`scrollReveal ${isVisible ? 'scrollRevealVisible' : ''} ${className}`.trim()}
      style={revealStyle}
      {...props}
    >
      {children}
    </Component>
  )
}
