import { useState, useEffect, useRef } from 'react'

export default function JoinSection() {
  const [selectedSuit, setSelectedSuit] = useState<string | null>(null)
  const [playerNumber, setPlayerNumber] = useState('')
  const myCardRef = useRef<HTMLDivElement>(null)

  const handleSuitSelect = (suit: string, branch: string) => {
    setSelectedSuit(suit)
    setPlayerNumber(`PLAYER ${String(Math.floor(Math.random() * 999) + 1).padStart(3, '0')}`)

    // Trigger deal animation
    if (myCardRef.current) {
      myCardRef.current.classList.remove('empty', 'dealt', 'black')
      if (suit === '♣' || suit === '♠') {
        myCardRef.current.classList.add('black')
      }
      void myCardRef.current.offsetWidth
      myCardRef.current.classList.add('dealt')
    }
  }

  return (
    <section className="join grid grid-cols-2 gap-[clamp(2rem,6vw,6rem)] items-center overflow-hidden relative p-[clamp(5rem,12vw,9rem)_clamp(1rem,5vw,4rem)]" id="join">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(122,10,16,.35),transparent_45%)] pointer-events-none" />
      <div className="reveal opacity-0 translate-y-[40px] transition-all duration-1000">
        <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
          Your Turn
        </span>
        <h2 className="font-display font-semibold text-[clamp(2.4rem,6vw,5rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
          Pick up your
          <br />
          <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">card.</em>
          <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
            君のカードを、手に取れ。
          </span>
        </h2>
        <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
          <span className="en block">Choose your branch.</span>
          <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
            学科を選べ。
          </span>
          <span className="en block">Your suit comes with it — and stays with you for the whole event.</span>
          <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
            スートはそれに従い、大会の最後まで君と共にある。
          </span>
        </p>
        <div className="picks grid grid-cols-2 gap-[.7rem] mt-[2rem] max-w-[520px]" role="group" aria-label="Choose your branch">
          <button
            className={`suit-btn flex items-center gap-[.8rem] p-[.95rem_1rem] border border-[rgba(239,231,214,.18)] bg-black/40 text-bone font-display text-[.74rem] tracking-[.14em] uppercase text-left cursor-pointer transition-all ${
              selectedSuit === '♣' ? 'border-red bg-[rgba(224,20,30,.12)] shadow-[0_0_24px_rgba(224,20,30,.25)]' : ''
            }`}
            data-suit="♣"
            data-branch="Computer Engineering"
            aria-pressed={selectedSuit === '♣'}
            onClick={() => handleSuitSelect('♣', 'Computer Engineering')}
          >
            <b className="text-[1.4rem] font-normal">♣</b>Computer Engg.
          </button>
          <button
            className={`suit-btn flex items-center gap-[.8rem] p-[.95rem_1rem] border border-[rgba(239,231,214,.18)] bg-black/40 text-bone font-display text-[.74rem] tracking-[.14em] uppercase text-left cursor-pointer transition-all red ${
              selectedSuit === '♥' ? 'border-red bg-[rgba(224,20,30,.12)] shadow-[0_0_24px_rgba(224,20,30,.25)]' : ''
            }`}
            data-suit="♥"
            data-branch="Information Technology"
            aria-pressed={selectedSuit === '♥'}
            onClick={() => handleSuitSelect('♥', 'Information Technology')}
          >
            <b className="text-[1.4rem] font-normal text-red">♥</b>Info. Technology
          </button>
          <button
            className={`suit-btn flex items-center gap-[.8rem] p-[.95rem_1rem] border border-[rgba(239,231,214,.18)] bg-black/40 text-bone font-display text-[.74rem] tracking-[.14em] uppercase text-left cursor-pointer transition-all red ${
              selectedSuit === '♦' ? 'border-red bg-[rgba(224,20,30,.12)] shadow-[0_0_24px_rgba(224,20,30,.25)]' : ''
            }`}
            data-suit="♦"
            data-branch="Electronics & Telecom"
            aria-pressed={selectedSuit === '♦'}
            onClick={() => handleSuitSelect('♦', 'Electronics & Telecom')}
          >
            <b className="text-[1.4rem] font-normal text-red">♦</b>ENTC
          </button>
          <button
            className={`suit-btn flex items-center gap-[.8rem] p-[.95rem_1rem] border border-[rgba(239,231,214,.18)] bg-black/40 text-bone font-display text-[.74rem] tracking-[.14em] uppercase text-left cursor-pointer transition-all ${
              selectedSuit === '♠' ? 'border-red bg-[rgba(224,20,30,.12)] shadow-[0_0_24px_rgba(224,20,30,.25)]' : ''
            }`}
            data-suit="♠"
            data-branch="Mechanical"
            aria-pressed={selectedSuit === '♠'}
            onClick={() => handleSuitSelect('♠', 'Mechanical')}
          >
            <b className="text-[1.4rem] font-normal">♠</b>Mechanical
          </button>
        </div>
        <a
          href="#"
          className="cta inline-flex items-center gap-[.9rem] mt-[2.4rem] p-[1rem_2.2rem] border border-red text-bone text-[.8rem] tracking-[.4em] uppercase relative overflow-hidden bg-black/40 transition-colors shadow-[0_0_30px_var(--red-glow)] hover:shadow-[0_0_30px_var(--red-glow)] cursor-pointer font-display"
          id="register"
        >
          <span className="suit text-red transition-colors hover:text-bone">♠</span> Register your team{' '}
          <span className="suit text-red transition-colors hover:text-bone">♥</span>
        </a>
      </div>
      <div className="my-card grid place-items-center min-h-[360px] perspective-[1200px] reveal opacity-0 translate-y-[40px] transition-all duration-1000">
        <div
          ref={myCardRef}
          className="idc empty relative w-[clamp(190px,20vw,240px)] aspect-[5/7.4] rounded-xl p-[.85rem] flex flex-col justify-between bg-[linear-gradient(160deg,#1c0507,#060606_65%)] border border-[rgba(224,20,30,.5)] shadow-[0_30px_60px_rgba(0,0,0,.6),0_0_30px_rgba(224,20,30,.12)] border-dashed border-[rgba(239,231,214,.2)] bg-transparent shadow-none"
          id="myCard"
        >
          <div className="top font-mono text-[.5rem] tracking-[.22em] text-ash flex justify-between">
            <span>SOLUTIONS</span>
            <span className="mc-s2">?</span>
          </div>
          <div className="s mc-s text-[clamp(2.8rem,4.6vw,4.2rem)] text-center leading-1 text-red shadow-[0_0_24px_var(--red-glow)]">
            {selectedSuit || '?'}
          </div>
          <div>
            <div className="no mc-no font-display font-semibold text-[1.2rem] tracking-[.08em] text-center">
              {playerNumber || 'PLAYER ———'}
            </div>
            <div className="br mc-br text-[.58rem] tracking-[.18em] uppercase text-ash text-center mt-[.2rem]">
              {selectedSuit
                ? (selectedSuit === '♣' && 'Computer Engineering') ||
                  (selectedSuit === '♥' && 'Information Technology') ||
                  (selectedSuit === '♦' && 'Electronics & Telecom') ||
                  (selectedSuit === '♠' && 'Mechanical')
                : 'Choose a branch'}
            </div>
          </div>
          <div className="ft font-mono text-[.46rem] tracking-[.22em] text-red border-t border-[rgba(224,20,30,.3)] pt-[.45rem] text-center">
            NON-TRANSFERABLE
          </div>
        </div>
      </div>
    </section>
  )
}
