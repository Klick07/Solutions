import { useScrollytelling } from '../hooks/useScrollytelling'
import { useState, useEffect } from 'react'

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export default function LeaderboardSection() {
  const { elementRef, currentStep } = useScrollytelling({
    steps: 8,
    customBeatIndex: (step) => (step < 3 ? 0 : step < 7 ? 1 : 2),
  })

  const [colValues, setColValues] = useState({ '♣': 0, '♥': 0, '♦': 0, '♠': 0 })
  const [colFirsts, setColFirsts] = useState({ '♣': 0, '♥': 0, '♦': 0, '♠': 0 })

  useEffect(() => {
    const season = [
      ['♦', '♠', '♦'],
      ['♣', '♥', '♠'],
      ['♥', '♣', '♣'],
      ['♠', '♦', '♥'],
      ['♣', '♠', '♦'],
      ['♥', '♣', '♠'],
    ]
    const pts = [5, 3, 1]

    const g = Math.min(currentStep, season.length)
    const total: Record<string, number> = {}
    const firsts: Record<string, number> = {}

    season.slice(0, g).forEach((res) => {
      res.forEach((suit, k) => {
        total[suit] = (total[suit] || 0) + pts[k]
        if (k === 0) firsts[suit] = (firsts[suit] || 0) + 1
      })
    })

    // Animate values
    Object.keys(total).forEach((suit) => {
      const from = colValues[suit as keyof typeof colValues]
      const to = total[suit] || 0
      if (from !== to) {
        const t0 = performance.now()
        const run = (now: number) => {
          const k = Math.min(1, (now - t0) / 700)
          const eased = ease(k)
          setColValues((prev) => ({ ...prev, [suit]: Math.round(from + (to - from) * eased) }))
          if (k < 1) requestAnimationFrame(run)
        }
        requestAnimationFrame(run)
      }
    })

    setColFirsts(firsts)
  }, [currentStep])

  const bestValue = Math.max(...Object.values(colValues))

  return (
    <section
      ref={elementRef}
      className="scrolly relative p-[clamp(5rem,12vw,9rem)_clamp(1rem,5vw,4rem)]"
      id="standings"
      data-steps="8"
      style={{ height: '600vh' }}
    >
      <div className="pin">
        <div className="chapter absolute top-[6.2rem] left-[clamp(1rem,5vw,4rem)] z-[5] font-mono text-[.66rem] tracking-[.4em] text-ash uppercase">
          <b className="text-red font-normal">06</b> — The Leaderboard
          <span className="cja font-jp tracking-[.3em] ml-[.9rem] pl-[.9rem] border-l border-[rgba(239,231,214,.2)]">
            順位表
          </span>
        </div>
        <div className="rail absolute right-[clamp(.6rem,2vw,1.6rem)] top-1/2 -translate-y-1/2 flex flex-col gap-[.5rem] z-[5]">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <i
              key={i}
              className={`w-[2px] h-[22px] bg-[rgba(239,231,214,.15)] transition-all ${i <= currentStep ? 'bg-red shadow-[0_0_8px_var(--red)]' : ''}`}
            />
          ))}
        </div>
        <div className="beats relative min-h-[25rem] z-[2]">
          {/* Beat 0 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep < 3 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              Scoring
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Points rule
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">everything.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                得点が、すべてを支配する。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Every game pays its top three.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                各ゲームで報われるのは、上位三チームのみ。
              </span>
              <span className="en block">Those points add up to each branch's total.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                その得点が、各学科の合計となる。
              </span>
            </p>
            <div className="legend flex gap-[.6rem] mt-[1.4rem] flex-wrap">
              <span className="font-mono text-[.64rem] tracking-[.15em] p-[.5rem_.8rem] border border-red text-ash uppercase hot">
                1st <b className="text-bone font-normal">5</b>
              </span>
              <span className="font-mono text-[.64rem] tracking-[.15em] p-[.5rem_.8rem] border border-red text-ash uppercase hot">
                2nd <b className="text-bone font-normal">3</b>
              </span>
              <span className="font-mono text-[.64rem] tracking-[.15em] p-[.5rem_.8rem] border border-red text-ash uppercase hot">
                3rd <b className="text-bone font-normal">1</b>
              </span>
              <span className="font-mono text-[.64rem] tracking-[.15em] p-[.5rem_.8rem] border border-[rgba(239,231,214,.15)] text-ash uppercase">
                4th + <b className="text-bone font-normal">0</b>
              </span>
            </div>
          </div>

          {/* Beat 1 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep >= 3 && currentStep < 7 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              Game by game
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              The board
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">rises.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                順位表が、せり上がる。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Four suit columns climb after every game's results.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                ゲームの結果が出るたびに、四つのスートの柱が伸びていく。
              </span>
            </p>
            <p className="note mt-[1.4rem] font-mono text-[.68rem] tracking-[.2em] text-ash uppercase leading-[1.8]">
              Tied on points? The branch with <b className="text-red font-normal">more 1st-place finishes</b> wins.
              <span className="ja block font-jp font-normal text-[.95em] tracking-[.12em] mt-[.3rem] text-[rgba(239,231,214,.35)]">
                同点の場合は、一位の回数が多い学科の勝利。
              </span>
            </p>
          </div>

          {/* Beat 2 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep >= 7 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              The crown
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              The Ruling
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">Suit.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                支配のスート。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">When the last game ends, the branch with the most points is crowned the Ruling Suit — and wins Solutions.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                最後のゲームが終わるとき、最多得点の学科が「支配のスート」となり、Solutionsを制する。
              </span>
            </p>
            <p className="note mt-[1.4rem] font-mono text-[.68rem] tracking-[.2em] text-ash uppercase leading-[1.8]">
              Example season shown · the real board starts at <b className="text-red font-normal">zero</b>
              <span className="ja block font-jp font-normal text-[.95em] tracking-[.12em] mt-[.3rem] text-[rgba(239,231,214,.35)]">
                表示は一例。本番の順位表はゼロから始まる。
              </span>
            </p>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="stage2 lb flex flex-col justify-center" id="lb">
          <div className="lb-head flex justify-between gap-[1rem] flex-wrap font-mono text-[.64rem] tracking-[.25em] text-ash uppercase pb-[.9rem] border-b border-[rgba(239,231,214,.1)]">
            <span className="lb-game text-red">
              {currentStep === 7 ? 'Final standings' : currentStep === 0 ? 'Before game 1' : `After game ${Math.min(currentStep, 6)} of 6`}
            </span>
            <span className="lb-last">
              {currentStep === 0
                ? 'All suits at zero'
                : currentStep === 7
                ? 'Most points wins'
                : `Game ${Math.min(currentStep, 6)}: 1st ♦ · 2nd ♠ · 3rd ♦`}
            </span>
          </div>
          <div className="lb-cols grid grid-cols-4 gap-[clamp(.6rem,2vw,1.6rem)] h-[min(50vh,400px)] mt-[1.6rem]">
            {['♣', '♥', '♦', '♠'].map((suit) => (
              <div
                key={suit}
                className={`col flex flex-col items-center gap-[.5rem] min-w-0 transition-all duration-600 ${currentStep === 7 && colValues[suit] === bestValue ? 'lead' : ''} ${
                  currentStep === 7 ? 'opacity-30 grayscale' : ''
                }`}
                style={{
                  filter: currentStep === 7 && colValues[suit] !== bestValue ? 'grayscale(1)' : 'none',
                }}
              >
                <div className="crown font-mono text-[.52rem] tracking-[.2em] text-red text-center opacity-0 translate-y-[10px] transition-all duration-600 min-h-[2.2em]" style={{ opacity: currentStep === 7 && colValues[suit] === bestValue ? '1' : '0', transform: currentStep === 7 && colValues[suit] === bestValue ? 'none' : 'translateY(10px)', transitionDelay: '.3s' }}>
                  ♛ THE RULING SUIT
                </div>
                <div className="val font-display font-semibold text-[clamp(1.4rem,2.6vw,2.2rem)] leading-1">
                  {colValues[suit]}
                </div>
                <div className="firsts font-mono text-[.55rem] tracking-[.15em] text-ash">★ {colFirsts[suit]}</div>
                <div className="bar flex-1 w-full relative bg-[linear-gradient(rgba(239,231,214,.03),rgba(239,231,214,.06))] border border-[rgba(239,231,214,.06)] border-b-[rgba(239,231,214,.25)]">
                  <i
                    className="absolute left-0 right-0 bottom-0 h-0 bg-[linear-gradient(to_top,var(--red-deep),var(--red))] shadow-[0_0_24px_rgba(224,20,30,.35)] transition-all duration-[1s]"
                    style={{
                      height: `${(colValues[suit] / 20) * 100}%`,
                      boxShadow: currentStep === 7 && colValues[suit] === bestValue ? '0 0 50px rgba(224,20,30,.7)' : '0 0 24px rgba(224,20,30,.35)',
                    }}
                  />
                </div>
                <div className="lab text-center text-[.6rem] tracking-[.14em] uppercase text-ash leading-[1.4] min-h-[3.6em]">
                  <b className="block text-[1.5rem] font-normal tracking-0 text-bone" style={{ color: suit === '♥' || suit === '♦' ? 'var(--red)' : 'var(--bone)' }}>
                    {suit}
                  </b>
                  {suit === '♣' ? 'Computer' : suit === '♥' ? 'IT' : suit === '♦' ? 'ENTC' : 'Mechanical'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
