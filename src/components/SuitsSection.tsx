import { useScrollytelling } from '../hooks/useScrollytelling'
import { useRef, useEffect } from 'react'

export default function SuitsSection() {
  const dealRef = useRef<HTMLDivElement>(null)
  const { elementRef, currentStep, progress, clamp, ease } = useScrollytelling({
    steps: 3,
    onProgress: (p) => {
      const deal = dealRef.current
      if (!deal) return

      const W = deal.clientWidth
      const H = deal.clientHeight
      const pcs = deal.querySelectorAll('.pc')
      const cw = pcs[0]?.offsetWidth || 0
      const ch = pcs[0]?.offsetHeight || 0
      const grid = W < 560
      const gap = Math.min(22, W * 0.03)

      pcs.forEach((c: any, i: number) => {
        const d = ease(clamp((p - 0.2 - i * 0.085) / 0.13))
        const tx = grid ? (i % 2 - 0.5) * (cw + gap) : (i - 1.5) * (cw + gap)
        const ty = grid ? (Math.floor(i / 2) - 0.5) * (ch + gap) : 0
        const flipT = clamp((d - 0.35) / 0.65)

        c.style.setProperty('--tx', `${i * 3 * (1 - d) + tx * d}px`)
        c.style.setProperty('--ty', `${-i * 3 * (1 - d) + ty * d}px`)
        c.style.setProperty('--rz', `${(i - 1.5) * 5 * (1 - d)}deg`)
        c.style.setProperty('--ry', `${180 - 180 * flipT}deg`)
        c.style.zIndex = d > 0.5 ? 10 + i : 4 - i

        const suitItems = document.querySelectorAll('.suit-list li')
        ;(suitItems[i] as HTMLElement)?.classList.toggle('lit', flipT > 0.5)
      })
    },
  })

  return (
    <section
      ref={elementRef}
      className="scrolly relative p-[clamp(5rem,12vw,9rem)_clamp(1rem,5vw,4rem)]"
      id="suits"
      data-steps="3"
      style={{ height: '400vh' }}
    >
      <div className="pin perspective-[1400px]">
        <div className="chapter absolute top-[6.2rem] left-[clamp(1rem,5vw,4rem)] z-[5] font-mono text-[.66rem] tracking-[.4em] text-ash uppercase">
          <b className="text-red font-normal">02</b> — The Four Suits
          <span className="cja font-jp tracking-[.3em] ml-[.9rem] pl-[.9rem] border-l border-[rgba(239,231,214,.2)]">
            四つのスート
          </span>
        </div>
        <div className="rail absolute right-[clamp(.6rem,2vw,1.6rem)] top-1/2 -translate-y-1/2 flex flex-col gap-[.5rem] z-[5]">
          {[0, 1, 2].map((i) => (
            <i
              key={i}
              className={`w-[2px] h-[22px] bg-[rgba(239,231,214,.15)] transition-all ${i <= currentStep ? 'bg-red shadow-[0_0_8px_var(--red)]' : ''}`}
            />
          ))}
        </div>
        <div className="beats relative min-h-[25rem] z-[2]">
          {/* Beat 0 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 0 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              Identity
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Every branch
              <br />
              is a <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">suit.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                すべての学科は、ひとつのスート。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">The deck is dealt once.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                カードが配られるのは、一度だけ。
              </span>
              <span className="en block">Your suit is your team's identity for the whole event.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                スートは、大会を通じてチームの証となる。
              </span>
            </p>
          </div>

          {/* Beat 1 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 1 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              The deal
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Four suits.
              <br />
              Four <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">branches.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                四つのスート、四つの学科。
              </span>
            </h2>
            <ul className="suit-list list-none mt-[1.6rem] grid gap-[.2rem]">
              <li className="grid grid-cols-[2rem_6.5rem_1fr] items-baseline py-[.7rem_0] border-b border-[rgba(239,231,214,.08)] text-[.82rem] tracking-[.2em] uppercase opacity-25 -translate-x-[10px] transition-all duration-500">
                <b className="text-[1.2rem] font-normal">♣</b>Clubs
                <span className="text-ash tracking-[.08em] font-light text-[1rem] text-shadow-none">
                  Computer Engineering
                  <i className="ja font-jp font-normal text-[.7rem] tracking-[.2em] text-[rgba(239,231,214,.35)]">
                    コンピュータ工学
                  </i>
                </span>
              </li>
              <li className="grid grid-cols-[2rem_6.5rem_1fr] items-baseline py-[.7rem_0] border-b border-[rgba(239,231,214,.08)] text-[.82rem] tracking-[.2em] uppercase opacity-25 -translate-x-[10px] transition-all duration-500 red">
                <b className="text-[1.2rem] font-normal text-red shadow-[0_0_12px_var(--red-glow)]">♥</b>Hearts
                <span className="text-ash tracking-[.08em] font-light text-[1rem] text-shadow-none">
                  Information Technology
                  <i className="ja font-jp font-normal text-[.7rem] tracking-[.2em] text-[rgba(239,231,214,.35)]">
                    情報技術
                  </i>
                </span>
              </li>
              <li className="grid grid-cols-[2rem_6.5rem_1fr] items-baseline py-[.7rem_0] border-b border-[rgba(239,231,214,.08)] text-[.82rem] tracking-[.2em] uppercase opacity-25 -translate-x-[10px] transition-all duration-500 red">
                <b className="text-[1.2rem] font-normal text-red shadow-[0_0_12px_var(--red-glow)]">♦</b>Diamonds
                <span className="text-ash tracking-[.08em] font-light text-[1rem] text-shadow-none">
                  Electronics &amp; Telecom (ENTC)
                  <i className="ja font-jp font-normal text-[.7rem] tracking-[.2em] text-[rgba(239,231,214,.35)]">
                    電子通信工学
                  </i>
                </span>
              </li>
              <li className="grid grid-cols-[2rem_6.5rem_1fr] items-baseline py-[.7rem_0] border-b border-[rgba(239,231,214,.08)] text-[.82rem] tracking-[.2em] uppercase opacity-25 -translate-x-[10px] transition-all duration-500">
                <b className="text-[1.2rem] font-normal">♠</b>Spades
                <span className="text-ash tracking-[.08em] font-light text-[1rem] text-shadow-none">
                  Mechanical
                  <i className="ja font-jp font-normal text-[.7rem] tracking-[.2em] text-[rgba(239,231,214,.35)]">
                    機械工学
                  </i>
                </span>
              </li>
            </ul>
          </div>

          {/* Beat 2 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 2 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              No home turf
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              A badge,
              <br />
              not a <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">game.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                スートは称号であり、ゲームではない。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Suits are identities only.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                スートは、アイデンティティにすぎない。
              </span>
              <span className="en block">Games aren't tied to any suit — every game is open to all four branches.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                ゲームはスートに縛られず、すべてのゲームが四学科すべてに開かれている。
              </span>
            </p>
          </div>
        </div>

        {/* Playing cards */}
        <div ref={dealRef} className="stage2 deal absolute right-0 top-1/2 -translate-y-1/2" id="deal">
          <div className="pc absolute left-1/2 top-[46%] w-[clamp(108px,12vw,172px)] aspect-[5/7.4]" style={{ transformStyle: 'preserve-3d', transform: 'translate(-50%, -50%)' }}>
            <div className="f absolute inset-0 rounded-xl backface-hidden overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,.6)] pc-front bg-bone text-[#111] flex flex-col justify-between p-[.6rem_.7rem]">
              <span className="ix font-display font-semibold text-[1rem] leading-[.95] text-center w-[1.2em]">C<br />♣</span>
              <div className="mid absolute inset-0 flex flex-col items-center justify-center gap-[.35rem] text-center p-0 [.9rem]">
                <span className="s text-[clamp(2.4rem,4.6vw,4.2rem)] leading-1">♣</span>
                <span className="bn font-display font-semibold uppercase text-[clamp(.62rem,.95vw,.85rem)] tracking-[.06em] leading-[1.2]">Computer Engineering</span>
                <span className="cd font-mono text-[.55rem] tracking-[.3em] text-[#7a716b]">CLUBS</span>
              </div>
              <span className="ix b font-display font-semibold text-[1rem] leading-[.95] text-center w-[1.2em] self-end rotate-180">C<br />♣</span>
            </div>
            <div className="f pc-back rotate-y-180 bg-[repeating-linear-gradient(45deg,#1a0204_0_6px,#2b0408_6px_12px)] border border-[rgba(224,20,30,.5)]">
              <div className="absolute inset-0 grid place-items-center font-blackletter text-[2.6rem] text-bone shadow-[0_0_16px_var(--red)]">S</div>
            </div>
          </div>
          <div className="pc red absolute left-1/2 top-[46%] w-[clamp(108px,12vw,172px)] aspect-[5/7.4]" style={{ transformStyle: 'preserve-3d', transform: 'translate(-50%, -50%)' }}>
            <div className="f absolute inset-0 rounded-xl backface-hidden overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,.6)] pc-front bg-bone text-[#111] flex flex-col justify-between p-[.6rem_.7rem]">
              <span className="ix font-display font-semibold text-[1rem] leading-[.95] text-center w-[1.2em] text-red">H<br />♥</span>
              <div className="mid absolute inset-0 flex flex-col items-center justify-center gap-[.35rem] text-center p-0 [.9rem]">
                <span className="s text-[clamp(2.4rem,4.6vw,4.2rem)] leading-1 text-red">♥</span>
                <span className="bn font-display font-semibold uppercase text-[clamp(.62rem,.95vw,.85rem)] tracking-[.06em] leading-[1.2]">Information Technology</span>
                <span className="cd font-mono text-[.55rem] tracking-[.3em] text-[#7a716b]">HEARTS</span>
              </div>
              <span className="ix b font-display font-semibold text-[1rem] leading-[.95] text-center w-[1.2em] self-end rotate-180 text-red">H<br />♥</span>
            </div>
            <div className="f pc-back rotate-y-180 bg-[repeating-linear-gradient(45deg,#1a0204_0_6px,#2b0408_6px_12px)] border border-[rgba(224,20,30,.5)]">
              <div className="absolute inset-0 grid place-items-center font-blackletter text-[2.6rem] text-bone shadow-[0_0_16px_var(--red)]">S</div>
            </div>
          </div>
          <div className="pc red absolute left-1/2 top-[46%] w-[clamp(108px,12vw,172px)] aspect-[5/7.4]" style={{ transformStyle: 'preserve-3d', transform: 'translate(-50%, -50%)' }}>
            <div className="f absolute inset-0 rounded-xl backface-hidden overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,.6)] pc-front bg-bone text-[#111] flex flex-col justify-between p-[.6rem_.7rem]">
              <span className="ix font-display font-semibold text-[1rem] leading-[.95] text-center w-[1.2em] text-red">D<br />♦</span>
              <div className="mid absolute inset-0 flex flex-col items-center justify-center gap-[.35rem] text-center p-0 [.9rem]">
                <span className="s text-[clamp(2.4rem,4.6vw,4.2rem)] leading-1 text-red">♦</span>
                <span className="bn font-display font-semibold uppercase text-[clamp(.62rem,.95vw,.85rem)] tracking-[.06em] leading-[1.2]">Electronics &amp; Telecom</span>
                <span className="cd font-mono text-[.55rem] tracking-[.3em] text-[#7a716b]">DIAMONDS</span>
              </div>
              <span className="ix b font-display font-semibold text-[1rem] leading-[.95] text-center w-[1.2em] self-end rotate-180 text-red">D<br />♦</span>
            </div>
            <div className="f pc-back rotate-y-180 bg-[repeating-linear-gradient(45deg,#1a0204_0_6px,#2b0408_6px_12px)] border border-[rgba(224,20,30,.5)]">
              <div className="absolute inset-0 grid place-items-center font-blackletter text-[2.6rem] text-bone shadow-[0_0_16px_var(--red)]">S</div>
            </div>
          </div>
          <div className="pc absolute left-1/2 top-[46%] w-[clamp(108px,12vw,172px)] aspect-[5/7.4]" style={{ transformStyle: 'preserve-3d', transform: 'translate(-50%, -50%)' }}>
            <div className="f absolute inset-0 rounded-xl backface-hidden overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,.6)] pc-front bg-bone text-[#111] flex flex-col justify-between p-[.6rem_.7rem]">
              <span className="ix font-display font-semibold text-[1rem] leading-[.95] text-center w-[1.2em]">S<br />♠</span>
              <div className="mid absolute inset-0 flex flex-col items-center justify-center gap-[.35rem] text-center p-0 [.9rem]">
                <span className="s text-[clamp(2.4rem,4.6vw,4.2rem)] leading-1">♠</span>
                <span className="bn font-display font-semibold uppercase text-[clamp(.62rem,.95vw,.85rem)] tracking-[.06em] leading-[1.2]">Mechanical</span>
                <span className="cd font-mono text-[.55rem] tracking-[.3em] text-[#7a716b]">SPADES</span>
              </div>
              <span className="ix b font-display font-semibold text-[1rem] leading-[.95] text-center w-[1.2em] self-end rotate-180">S<br />♠</span>
            </div>
            <div className="f pc-back rotate-y-180 bg-[repeating-linear-gradient(45deg,#1a0204_0_6px,#2b0408_6px_12px)] border border-[rgba(224,20,30,.5)]">
              <div className="absolute inset-0 grid place-items-center font-blackletter text-[2.6rem] text-bone shadow-[0_0_16px_var(--red)]">S</div>
            </div>
          </div>
          <div className="open-badge absolute left-1/2 bottom-[2%] -translate-x-1/2 translate-y-[20px] opacity-0 transition-all duration-700 whitespace-nowrap font-mono text-[.68rem] tracking-[.3em] p-[.8rem_1.2rem] border border-red bg-black/60 shadow-[0_0_24px_rgba(224,20,30,.3)]">
            EVERY GAME · OPEN TO <b className="text-red font-normal">♣ ♥ ♦ ♠</b>
          </div>
        </div>
      </div>
    </section>
  )
}
