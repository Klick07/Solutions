import { useEffect, useRef, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isBursting, setIsBursting] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  const burst = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setIsBursting(true)
    const glyphs = '#%&$@!?/\\<>[]{}=+*^~ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ▓▒░█'
    let frames = 0

    const interval = setInterval(() => {
      const out = [...text]
        .map((ch) =>
          ch !== ' ' && Math.random() < 0.35
            ? glyphs[Math.floor(Math.random() * glyphs.length)]
            : ch
        )
        .join('')
      setDisplayText(out)
      frames++

      if (frames > 5) {
        clearInterval(interval)
        setDisplayText(text)
        setIsBursting(false)
      }
    }, 55)
  }

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    // Auto burst on hero text
    if (elementRef.current?.closest('.hero-title')) {
      const timer = setTimeout(() => {
        burst()
        const loopTimer = setInterval(burst, 10350)
        return () => clearInterval(loopTimer)
      }, 4200)
      return () => clearTimeout(timer)
    }
  }, [text])

  return (
    <span
      ref={elementRef}
      className={`gx ${isBursting ? 'burst' : ''} ${className}`}
      data-text={displayText}
      onMouseEnter={burst}
    >
      {displayText}
    </span>
  )
}
