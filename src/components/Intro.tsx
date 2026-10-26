import { useEffect, useState } from 'react'

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setIsVisible(false)
      return
    }

    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3800)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="intro" aria-hidden="true">
      <div>
        <div className="jk-stage">
          <div className="jk">
            <div className="jk-face jk-front">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="jk-face jk-back">S</div>
          </div>
        </div>
        <div className="jp font-jp">ゲーム開始</div>
        <div className="count font-mono">GAME START</div>
        <div className="bar">
          <i></i>
        </div>
      </div>
    </div>
  )
}
