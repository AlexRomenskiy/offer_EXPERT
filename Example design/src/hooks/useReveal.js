import { useEffect } from 'react'

export default function useReveal(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal-on-scroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [containerRef])
}