import { useEffect, useRef, useState } from 'react'

export default function Reticle() {
  const ref = useRef<HTMLDivElement>(null)
  const [isHot, setIsHot] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const handleMouseEnter = () => setIsHot(true)
    const handleMouseLeave = () => setIsHot(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reticle ${isHot ? 'hot' : ''}`}
      aria-hidden="true"
    />
  )
}
