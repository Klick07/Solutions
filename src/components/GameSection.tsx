import { useScrollytelling } from '../hooks/useScrollytelling'

export default function GameSection() {
  const { elementRef, currentStep } = useScrollytelling({
    steps: 4,
  })

  return (
    <section
      ref={elementRef}
      className="scrolly relative p-[clamp(5rem,12vw,9rem)_clamp(1rem,5vw,4rem)]"
      id="game"
      data-steps="4"
      style={{ height: '460vh' }}
    >
      <div className="pin">
        <div className="chapter absolute top-[6.2rem] left-[clamp(1rem,5vw,4rem)] z-[5] font-mono text-[.66rem] tracking-[.4em] text-ash uppercase">
          <b className="text-red font-normal">05</b> — One Game
          <span className="cja font-jp tracking-[.3em] ml-[.9rem] pl-[.9rem] border-l border-[rgba(239,231,214,.2)]">
            ひつのゲーム
          </span>
        </div>
        <div className="rail absolute right-[clamp(.6rem,2vw,1.6rem)] top-1/2 -translate-y-1/2 flex flex-col gap-[.5rem] z-[5]">
          {[0, 1, 2, 3].map((i) => (
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
              Round 1
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Ten teams
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">enter.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                十のチームが、参戦する。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Every game is an independent, named event.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                すべてのゲームは、名前を持つ独立した戦い。
              </span>
              <span className="en block">Any branch can enter — say 3 Spades teams, 4 Diamonds, 1 Hearts and 2 Clubs.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                どの学科も参加できる。たとえばスペード三、ダイヤ四、ハート一、クラブ二チーム。
              </span>
            </p>
          </div>

          {/* Beat 1 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 1 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              The game
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              They play.
              <br />
              They <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">rank.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                戦い、順位が決まる。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Every team is ranked by how it finishes.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                各チームは、その結果によって順位づけられる。
              </span>
              <span className="en block">Only one thing matters: are you in the top three?</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                重要なのはただひとつ。三位以内に入れるか。
              </span>
            </p>
          </div>

          {/* Beat 2 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 2 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              The cut
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Three move
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">on.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                先へ進めるのは、三チーム。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">1st, 2nd and 3rd — from one branch or several — score points and renew their visa.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                一位・二位・三位は、同じ学科でも異なる学科でも、得点を獲得しビザを更新する。
              </span>
              <span className="en block">The other seven score 0 and leave that game.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                残る七チームは零点で、そのゲームを去る。
              </span>
            </p>
          </div>

          {/* Beat 3 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 3 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              Points go home
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Scored for
              <br />
              the <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">branch.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                得点は、学科のために。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Points add to each team's branch total.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                得点は、各チームの学科の合計に加算される。
              </span>
              <span className="en block">Points a branch has already earned stay, even when its teams are eliminated later.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                一度獲得した得点は、後にチームが脱落しても消えない。
              </span>
            </p>
          </div>
        </div>

        {/* Arena with tally */}
        <div className="stage2 arena relative" id="arena">
          <div
            className="tally absolute right-0 top-1/2 w-[38%] transition-all duration-700"
            style={{
              transform: currentStep >= 3 ? 'translate(0, -50%)' : 'translate(30px, -50%)',
              opacity: currentStep >= 3 ? '1' : '0',
            }}
          >
            <h5 className="font-mono text-[.58rem] tracking-[.3em] text-ash font-normal mb-[1rem]">
              BRANCH TOTAL · THIS GAME
            </h5>
            <div className="row grid grid-cols-[1.2rem_1fr_1.8rem] items-center gap-[.6rem] my-[.9rem_0]">
              <b className="font-normal text-[1.05rem] text-red">♦</b>
              <div className="bar h-[6px] bg-[rgba(239,231,214,.08)] relative">
                <i className="absolute inset-0 left-0 bg-red shadow-[0_0_8px_var(--red)] transition-all duration-1000" style={{ width: currentStep >= 3 ? '100%' : '0%', transitionDelay: '.5s' }} data-v="6" />
              </div>
              <span className="val font-mono text-[.8rem] text-right">+6</span>
            </div>
            <div className="row grid grid-cols-[1.2rem_1fr_1.8rem] items-center gap-[.6rem] my-[.9rem_0]">
              <b className="font-normal text-[1.05rem]">♣</b>
              <div className="bar h-[6px] bg-[rgba(239,231,214,.08)] relative">
                <i className="absolute inset-0 left-0 bg-red shadow-[0_0_8px_var(--red)] transition-all duration-1000" style={{ width: currentStep >= 3 ? '50%' : '0%', transitionDelay: '.5s' }} data-v="3" />
              </div>
              <span className="val font-mono text-[.8rem] text-right">+3</span>
            </div>
            <div className="row grid grid-cols-[1.2rem_1fr_1.8rem] items-center gap-[.6rem] my-[.9rem_0]">
              <b className="font-normal text-[1.05rem]">♠</b>
              <div className="bar h-[6px] bg-[rgba(239,231,214,.08)] relative">
                <i className="absolute inset-0 left-0 bg-red shadow-[0_0_8px_var(--red)] transition-all duration-1000" style={{ width: currentStep >= 3 ? '0%' : '0%', transitionDelay: '.5s' }} data-v="0" />
              </div>
              <span className="val font-mono text-[.8rem] text-right">0</span>
            </div>
            <div className="row grid grid-cols-[1.2rem_1fr_1.8rem] items-center gap-[.6rem] my-[.9rem_0]">
              <b className="font-normal text-[1.05rem] text-red">♥</b>
              <div className="bar h-[6px] bg-[rgba(239,231,214,.08)] relative">
                <i className="absolute inset-0 left-0 bg-red shadow-[0_0_8px_var(--red)] transition-all duration-1000" style={{ width: currentStep >= 3 ? '0%' : '0%', transitionDelay: '.5s' }} data-v="0" />
              </div>
              <span className="val font-mono text-[.8rem] text-right">0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
