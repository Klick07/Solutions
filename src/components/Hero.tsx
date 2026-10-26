import { useEffect, useRef, useState } from 'react'
import GlitchText from './GlitchText'

export default function Hero() {
  const boardRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [cells, setCells] = useState<JSX.Element[]>([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Create checkerboard
    const cellElements: JSX.Element[] = []
    for (let r = 0; r < 14; r++) {
      for (let c = 0; c < 14; c++) {
        const isRed = (r + c) % 2 === 0
        cellElements.push(
          <span
            key={`${r}-${c}`}
            className={isRed ? 'r' : ''}
            style={{
              border: '1px solid rgba(224,20,30,.5)',
              boxShadow: 'inset 0 0 18px rgba(224,20,30,.12)',
            }}
          />
        )
      }
    }
    setCells(cellElements)

    // Random cell flash
    if (!reduce) {
      const interval = setInterval(() => {
        const redCells = document.querySelectorAll('#board .r')
        const cell = redCells[Math.floor(Math.random() * redCells.length)]
        if (cell) {
          cell.classList.remove('flash')
          void cell.offsetWidth
          cell.classList.add('flash')
        }
      }, 700)

      return () => clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    // Parallax on board
    const handleScroll = () => {
      if (wrapRef.current) {
        wrapRef.current.style.setProperty('--py', `${window.scrollY * 0.25}px`)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="hero relative h-[100vh] min-h-[640px] overflow-hidden grid place-items-center"
      style={{ perspective: '1100px' }}
      id="top"
    >
      {/* Vignette */}
      <div className="absolute inset-0 z-[3] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,.75)_70%,#000_100%)]" />

      {/* Checkerboard */}
      <div
        ref={wrapRef}
        className="board-wrap absolute inset-[-30%_-20%]"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(52deg) rotateZ(-14deg)' }}
      >
        <div
          ref={boardRef}
          id="board"
          className="board absolute inset-0 grid grid-cols-[repeat(14,1fr)] grid-rows-[repeat(14,1fr)]"
          style={{
            background:
              'radial-gradient(circle at 30% 40%, rgba(255,255,255,.05), transparent 40%), repeating-linear-gradient(37deg, rgba(255,255,255,.025) 0 2px, transparent 2px 9px), #0a0a0a',
          }}
        >
          {cells}
        </div>
      </div>

      {/* Lasers SVG */}
      <svg
        className="lasers absolute inset-0 z-[2] pointer-events-none"
        id="lasers"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Lines will be added by JS */}
      </svg>

      {/* Corner suits */}
      <span className="corner tl absolute z-[5] text-[2.2rem] text-bone opacity-[.9] top-[6.5rem] left-[clamp(1rem,4vw,3rem)]" aria-hidden="true">
        ♦
      </span>
      <span className="corner bl absolute z-[5] text-[2.2rem] text-bone opacity-[.9] bottom-[2rem] left-[clamp(1rem,4vw,3rem)]" aria-hidden="true">
        ♣
      </span>
      <span
        className="corner br absolute z-[5] text-[2.2rem] text-red opacity-[.9] bottom-[2rem] right-[clamp(1rem,4vw,3rem)] shadow-[0_0_14px_var(--red-glow)]"
        aria-hidden="true"
      >
        ♥
      </span>

      {/* Hero title */}
      <div className="hero-title relative z-[4] text-center p-0 1rem">
        <div className="jp font-jp font-medium text-[clamp(1.1rem,2.6vw,2rem)] tracking-[.45em] mb-[-.6rem] opacity-0 animate-rise" style={{ animationDelay: '3s' }}>
          祖国のソリューション
        </div>
        <h1
          className="font-blackletter font-normal text-[clamp(3.4rem,13.5vw,11.5rem)] leading-[1.05] text-bone shadow-[0_10px_40px_rgba(0,0,0,.9),0_0_2px_rgba(0,0,0,.8)] opacity-0 animate-rise relative"
          style={{ animationDelay: '3.2s' }}
          aria-label="Solutions"
        >
          <GlitchText text="Solutions" aria-hidden={true} />
        </h1>
        <div
          className="sub font-blackletter text-[clamp(1.6rem,4vw,3rem)] mt-[-.6rem] opacity-0 animate-rise"
          style={{ animationDelay: '3.5s' }}
          aria-label="in Homeland"
        >
          <GlitchText text="in Homeland" aria-hidden={true} />
        </div>
        <p className="tag mt-[2.2rem] text-[.8rem] tracking-[.55em] uppercase text-ash opacity-0 animate-rise" style={{ animationDelay: '3.8s' }}>
          Play the game &nbsp;·&nbsp; Extend your visa &nbsp;·&nbsp; Survive
        </p>
        <a
          href="#flip"
          className="cta inline-flex items-center gap-[.9rem] mt-[2.4rem] p-[1rem_2.2rem] border border-red text-bone text-[.8rem] tracking-[.4em] uppercase relative overflow-hidden bg-black/40 opacity-0 animate-rise transition-colors shadow-[0_0_30px_var(--red-glow)] hover:shadow-[0_0_30px_var(--red-glow)] cursor-pointer font-display"
          style={{ animationDelay: '4.1s' }}
        >
          <span className="suit text-red transition-colors hover:text-bone">♠</span> Enter the Arena{' '}
          <span className="suit text-red transition-colors hover:text-bone">♥</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="scroll absolute bottom-[2rem] left-1/2 -translate-x-1/2 z-[5] font-mono text-[.65rem] tracking-[.4em] text-ash flex flex-col items-center gap-[.8rem]">
        SCROLL
      </div>
    </header>
  )
}
