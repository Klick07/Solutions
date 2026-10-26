import { useEffect, useRef, useState } from 'react'

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

interface UseScrollytellingOptions {
  steps: number
  onStep?: (step: number) => void
  onProgress?: (progress: number) => void
  customBeatIndex?: (step: number) => number
}

export function useScrollytelling({
  steps,
  onStep,
  onProgress,
  customBeatIndex,
}: UseScrollytellingOptions) {
  const elementRef = useRef<HTMLElement>(null)
  const [currentStep, setCurrentStep] = useState(-1)
  const [progress, setProgress] = useState(0)
  const lastStepRef = useRef(-1)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const r = element.getBoundingClientRect()
      if (r.bottom < -window.innerHeight || r.top > window.innerHeight * 2) return

      const p = clamp(-r.top / (r.height - window.innerHeight))
      const step = Math.min(steps - 1, Math.floor(p * steps))

      setProgress(p)

      if (step !== lastStepRef.current) {
        lastStepRef.current = step
        setCurrentStep(step)
        onStep?.(step)
      }

      onProgress?.(p)
    }

    const handleResize = () => {
      lastStepRef.current = -1
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [steps, onStep, onProgress])

  const getBeatIndex = (step: number) => {
    return customBeatIndex ? customBeatIndex(step) : step
  }

  return { elementRef, currentStep, progress, getBeatIndex, clamp, ease }
}
