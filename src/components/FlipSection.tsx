import { useScrollytelling } from '../hooks/useScrollytelling'

export default function FlipSection() {
  const { elementRef, currentStep, progress, getBeatIndex, clamp, ease } = useScrollytelling({
    steps: 3,
    onProgress: (p) => {
      const d = ease(clamp((p - 0.22) / 0.45))
      elementRef.current?.style.setProperty('--d', d.toFixed(4))

      const l = clamp((p - 0.05) / 0.4)
      const lines = elementRef.current?.querySelectorAll('svg.x line')
      lines?.forEach((ln, i) => {
        ;(ln as SVGLineElement).style.strokeDashoffset = (1 - clamp(l * 1.3 - i * 0.1)).toFixed(3)
      })
    },
  })

  return (
    <section
      ref={elementRef}
      className="scrolly flip relative p-[clamp(5rem,12vw,9rem)_clamp(1rem,5vw,4rem)]"
      id="flip"
      data-steps="3"
      style={{ height: '320vh', '--dw': '28%' }}
    >
      <div className="pin grid grid-cols-1 items-end pb-[12vh] bg-black">
        <div className="bg absolute inset-0 bg-[url(/assets/tokyo.jpg)] bg-center bg-cover grayscale contrast-[1.15] brightness-[calc(.4-var(--d,0)*.15)] scale-[calc(1.2-var(--p,0)*.08)]" />
        <div
          className="diamond absolute inset-0 bg-[url(/assets/tokyo.jpg)] bg-center bg-cover scale-[calc(1.2-var(--p,0)*.08)] contrast-[1.1] saturate-[1.15]"
          style={{
            clipPath: `polygon(50% calc(50% - var(--d, 0) * 47%), calc(50% + var(--d, 0) * var(--dw)) 50%, 50% calc(50% + var(--d, 0) * 47%), calc(50% - var(--d, 0) * var(--dw)) 50%)`,
          }}
        />
        <svg className="x absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line pathLength="1" x1="10" y1="-10" x2="80" y2="110" vectorEffect="non-scaling-stroke" />
          <line pathLength="1" x1="90" y1="-10" x2="20" y2="110" vectorEffect="non-scaling-stroke" />
          <line pathLength="1" x1="38" y1="-10" x2="100" y2="96" vectorEffect="non-scaling-stroke" />
          <line pathLength="1" x1="62" y1="-10" x2="0" y2="96" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="shade absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.92)_0%,rgba(0,0,0,.5)_40%,transparent_70%),linear-gradient(to_right,rgba(0,0,0,.6),transparent_60%)]" />
        <div className="chapter absolute top-[6.2rem] left-[clamp(1rem,5vw,4rem)] z-[5] font-mono text-[.66rem] tracking-[.4em] text-ash uppercase">
          <b className="text-red font-normal">01</b> — The Flip
          <span className="cja font-jp tracking-[.3em] ml-[.9rem] pl-[.9rem] border-l border-[rgba(239,231,214,.2)]">
            反転
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
        <div className="beats relative min-h-[17rem] max-w-[540px] z-[2]">
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${getBeatIndex(currentStep) === 0 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              Borderland
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Trapped far
              <br />
              from <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">home.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                故郷から遠く、囚われて。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">
                In the show, players wake up in an empty Tokyo and play deadly games just to survive.
              </span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                劇中、プレイヤーは無人の東京で目覚め、生き残るためだけに命がけのゲームに挑む。
              </span>
            </p>
          </div>
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${getBeatIndex(currentStep) === 1 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              Homeland
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              You're already
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">home.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                ここは、すでに故郷。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Solutions flips the story.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                Solutionsは、その物語を反転させる。
              </span>
              <span className="en block">
                Nobody here plays to escape — you play to prove which branch rules the homeland.
              </span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                ここでは誰も逃げるために戦わない。どの学科が祖国を支配するかを証明するために戦うのだ。
              </span>
            </p>
          </div>
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${getBeatIndex(currentStep) === 2 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              AIT Pune
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Branch versus
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">branch.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                学科対学科。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Four branches. A series of games.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                四つの学科。連続するゲーム。
              </span>
              <span className="en block">
                The top three teams in every game score for their branch — and the branch with the most points wins Solutions.
              </span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                各ゲームの上位三チームが学科に得点をもたらし、最多得点の学科がSolutionsを制する。
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
