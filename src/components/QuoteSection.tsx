import { useEffect, useRef } from 'react'

export default function QuoteSection() {
  const quoteRef = useRef<HTMLDivElement>(null)
  const citeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (quoteRef.current) io.observe(quoteRef.current)
    if (citeRef.current) io.observe(citeRef.current)

    return () => io.disconnect()
  }, [])

  return (
    <section className="quote text-center py-[clamp(6rem,14vw,11rem)] bg-[radial-gradient(ellipse_at_center,rgba(122,10,16,.35),transparent_60%)]">
      <blockquote
        ref={quoteRef}
        className="reveal opacity-0 translate-y-[40px] transition-all duration-1000 font-blackletter text-[clamp(2rem,5.4vw,4.6rem)] leading-[1.2] max-w-[1100px] mx-auto"
      >
        In Borderland, you play to <span className="text-red shadow-[0_0_30px_var(--red-glow)]">survive.</span>
        <i className="qja block font-jp font-normal text-[clamp(.85rem,1.4vw,1.15rem)] tracking-[.4em] text-ash my-[.6rem_0_1.8rem] leading-[1.6]">
          今際の国では、生き残るために戦う。
        </i>
        In Homeland, you play to <span className="text-red shadow-[0_0_30px_var(--red-glow)]">rule.</span>
        <i className="qja block font-jp font-normal text-[clamp(.85rem,1.4vw,1.15rem)] tracking-[.4em] text-ash my-[.6rem_0_1.8rem] leading-[1.6]">
          祖国では、支配するために戦う。
        </i>
      </blockquote>
      <cite
        ref={citeRef}
        className="reveal opacity-0 translate-y-[40px] transition-all duration-1000 block mt-[2rem] font-normal font-jp tracking-[.5em] text-ash text-[.9rem]"
      >
        祖国へようこそ
      </cite>
    </section>
  )
}
