import { useEffect, useRef } from 'react'

export default function RulebookSection() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([])

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

    revealRefs.current.forEach((el) => {
      if (el) io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return (
    <section className="rulebook bg-[linear-gradient(#000,var(--ink-2))] border-t border-[rgba(224,20,30,.2)] border-b border-[rgba(224,20,30,.2)] relative p-[clamp(5rem,12vw,9rem)_clamp(1rem,5vw,4rem)]" id="rules">
      <div ref={(el) => (revealRefs.current[0] = el)} className="reveal opacity-0 translate-y-[40px] transition-all duration-1000">
        <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
          The Rulebook
        </span>
        <h2 className="font-display font-semibold text-[clamp(2.4rem,6vw,5rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
          No grey
          <br />
          <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">areas.</em>
          <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
            曖昧さは、許されない。
          </span>
        </h2>
        <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
          <span className="en block">Six questions, six settled rules — applied the same way in every game.</span>
          <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
            六つの問いと、六つの決まり。すべてのゲームで等しく適用される。
          </span>
        </p>
      </div>
      <div className="rb-grid grid grid-cols-3 gap-[1px] mt-[3.5rem] bg-[rgba(239,231,214,.08)] border border-[rgba(239,231,214,.08)]">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            ref={(el) => (revealRefs.current[i + 1] = el)}
            className="rq bg-[#070606] p-[2rem_1.8rem_2.2rem] transition-colors duration-400 hover:bg-[#120507] reveal opacity-0 translate-y-[40px] transition-all duration-1000"
            style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
          >
            <span className="n font-mono text-[.68rem] tracking-[.3em] text-red">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h4 className="font-display font-semibold text-[1.3rem] uppercase tracking-[.03em] my-[.9rem_0_.7rem]">
              {i === 0 && (
                <>
                  Who wins?
                  <span className="h4ja block mt-[.35rem] font-jp font-medium text-[.78rem] tracking-[.25em] text-red text-shadow-none text-transform-none">
                    勝つのは誰か？
                  </span>
                </>
              )}
              {i === 1 && (
                <>
                  Are games tied to suits?
                  <span className="h4ja block mt-[.35rem] font-jp font-medium text-[.78rem] tracking-[.25em] text-red text-shadow-none text-transform-none">
                    ゲームはスートに縛られるか？
                  </span>
                </>
              )}
              {i === 2 && (
                <>
                  Given or earned visa?
                  <span className="h4ja block mt-[.35rem] font-jp font-medium text-[.78rem] tracking-[.25em] text-red text-shadow-none text-transform-none">
                    ビザは与えられるか、勝ち取るか？
                  </span>
                </>
              )}
              {i === 3 && (
                <>
                  Can a team mix branches?
                  <span className="h4ja block mt-[.35rem] font-jp font-medium text-[.78rem] tracking-[.25em] text-red text-shadow-none text-transform-none">
                    学科の混成は可能か？
                  </span>
                </>
              )}
              {i === 4 && (
                <>
                  What does elimination cost?
                  <span className="h4ja block mt-[.35rem] font-jp font-medium text-[.78rem] tracking-[.25em] text-red text-shadow-none text-transform-none">
                    脱落の代償とは？
                  </span>
                </>
              )}
              {i === 5 && (
                <>
                  Most wins or most points?
                  <span className="h4ja block mt-[.35rem] font-jp font-medium text-[.78rem] tracking-[.25em] text-red text-shadow-none text-transform-none">
                    勝利数か、得点か？
                  </span>
                </>
              )}
            </h4>
            <p className="rqp text-ash font-light leading-[1.7]">
              {i === 0 && (
                <>
                  <span className="en block">Teams win games and earn visas.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    チームはゲームに勝ち、ビザを得る。
                  </span>
                  <span className="en block">The branch with the most points across all games wins Solutions.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    全ゲームを通じて最多得点の学科が、Solutionsを制する。
                  </span>
                </>
              )}
              {i === 1 && (
                <>
                  <span className="en block">No. Every game is an independent, named event open to all four branches.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    いいえ。すべてのゲームは四学科に開かれた、名前を持つ独立した戦いだ。
                  </span>
                </>
              )}
              {i === 2 && (
                <>
                  <span className="en block">Both.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    その両方だ。
                  </span>
                  <span className="en block">A buffer visa on entry lasts until Round 2 qualification; a top-three finish renews it.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    入場時の猶予ビザは第二ラウンド進出まで有効。三位以内で更新される。
                  </span>
                </>
              )}
              {i === 3 && (
                <>
                  <span className="en block">No. Solutions is branch versus branch, so every team is single-branch.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    いいえ。学科対学科の戦いゆえ、チームはすべて単一学科だ。
                  </span>
                </>
              )}
              {i === 4 && (
                <>
                  <span className="en block">Teams outside the top three score 0 and leave that game.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    三位以内に入れないチームは零点で、そのゲームを去る。
                  </span>
                  <span className="en block">Points their branch already earned stay.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    学科がすでに得た得点は残る。
                  </span>
                </>
              )}
              {i === 5 && (
                <>
                  <span className="en block">Points decide the winner.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    勝者を決めるのは、得点。
                  </span>
                  <span className="en block">The most 1st-place finishes breaks a tie.</span>
                  <span className="ja block font-jp font-normal text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                    同点の場合は、一位の回数で決着する。
                  </span>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
