import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FlipSection from './components/FlipSection'
import SuitsSection from './components/SuitsSection'
import PlayerSection from './components/PlayerSection'
import VisaSection from './components/VisaSection'
import GameSection from './components/GameSection'
import LeaderboardSection from './components/LeaderboardSection'
import RulebookSection from './components/RulebookSection'
import JoinSection from './components/JoinSection'
import QuoteSection from './components/QuoteSection'
import Footer from './components/Footer'
import Reticle from './components/Reticle'

function App() {
  const [visaTime, setVisaTime] = useState('03:00:00:00')

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let end = Date.now() + 3 * 864e5
    const pad = (n: number) => String(n).padStart(2, '0')

    const tick = () => {
      let t = Math.max(0, end - Date.now())
      const d = Math.floor(t / 864e5)
      t %= 864e5
      const h = Math.floor(t / 36e5)
      t %= 36e5
      const m = Math.floor(t / 6e4)
      const s = Math.floor(t % 6e4 / 1e3)
      setVisaTime(`${pad(d)}:${pad(h)}:${pad(m)}:${pad(s)}`)
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Intro />
      <Reticle />
      <Navigation visaTime={visaTime} />
      <Hero />
      <FlipSection />
      <SuitsSection />
      <PlayerSection />
      <VisaSection />
      <GameSection />
      <LeaderboardSection />
      <RulebookSection />
      <JoinSection />
      <QuoteSection />
      <Footer />
    </>
  )
}

export default App
