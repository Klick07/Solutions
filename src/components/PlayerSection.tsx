import { useScrollytelling } from '../hooks/useScrollytelling'

export default function PlayerSection() {
  const { elementRef, currentStep } = useScrollytelling({
    steps: 3,
  })

  return (
    <section
      ref={elementRef}
      className="scrolly relative p-[clamp(5rem,12vw,9rem)_clamp(1rem,5vw,4rem)]"
      id="player"
      data-steps="3"
      style={{ height: '360vh', '--f': 'clamp(42px,5.2vw,76px)' }}
    >
      <div className="pin">
        <div className="chapter absolute top-[6.2rem] left-[clamp(1rem,5vw,4rem)] z-[5] font-mono text-[.66rem] tracking-[.4em] text-ash uppercase">
          <b className="text-red font-normal">03</b> — Players &amp; Teams
          <span className="cja font-jp tracking-[.3em] ml-[.9rem] pl-[.9rem] border-l border-[rgba(239,231,214,.2)]">
            選手とチーム
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
              The player
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              One student.
              <br />
              One <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">card.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                学生ひとりに、カード一枚。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">
                Every registered AIT student gets a player card showing their suit and a player number.
              </span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                登録したAITの学生全員に、スートとプレイヤー番号が記されたカードが渡される。
              </span>
              <span className="en block">Your branch sets the card — it can't be switched or traded.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                カードは学科で決まり、変更も交換もできない。
              </span>
            </p>
          </div>

          {/* Beat 1 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 1 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              The team
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Up to four.
              <br />
              One <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">suit.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                最大四人。スートはひとつ。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Players compete in teams of 1 to 4.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                プレイヤーは一〜四人のチームで戦う。
              </span>
              <span className="en block">Every member of a team carries the same suit.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                チーム全員が、同じスートを背負う。
              </span>
            </p>
          </div>

          {/* Beat 2 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 2 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              No mixing
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Mixed teams
              <br />
              don't <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">play.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                混成チームに、出場資格なし。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Solutions is branch versus branch, so a team can never mix suits.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                Solutionsは学科対学科の戦い。スートを混ぜたチームは認められない。
              </span>
            </p>
          </div>
        </div>

        {/* ID Cards */}
        <div className="stage2 squad relative h-[min(70vh,560px)]">
          <div
            className="idc c0 absolute left-1/2 top-1/2 w-[clamp(140px,14vw,196px)] aspect-[5/7.4] rounded-xl p-[.85rem] flex flex-col justify-between bg-[linear-gradient(160deg,#1c0507,#060606_65%)] border border-[rgba(224,20,30,.5)] shadow-[0_30px_60px_rgba(0,0,0,.6),0_0_30px_rgba(224,20,30,.12)]"
            style={{
              transform: `translate(-50%, -50%) translate(${currentStep === 0 ? '0px' : 'calc(var(--f) * -1.5)'}, ${currentStep === 0 ? '0px' : '0px'}) rotate(${currentStep === 0 ? '0deg' : '-10deg'}) scale(${currentStep === 0 ? '1.12' : '.92'})`,
              opacity: currentStep >= 0 ? '1' : '0',
              transition: 'transform .9s cubic-bezier(.2,.8,.2,1), opacity .6s',
            }}
          >
            <div className="top font-mono text-[.5rem] tracking-[.22em] text-ash flex justify-between">
              <span>SOLUTIONS</span>
              <span>♥</span>
            </div>
            <div className="s text-[clamp(2.8rem,4.6vw,4.2rem)] text-center leading-1 text-red shadow-[0_0_24px_var(--red-glow)]">
              ♥
            </div>
            <div>
              <div className="no font-display font-semibold text-[1.2rem] tracking-[.08em] text-center">PLAYER 027</div>
              <div className="br text-[.58rem] tracking-[.18em] uppercase text-ash text-center mt-[.2rem]">
                Information Technology
              </div>
            </div>
            <div className="ft font-mono text-[.46rem] tracking-[.22em] text-red border-t border-[rgba(224,20,30,.3)] pt-[.45rem] text-center">
              NON-TRANSFERABLE
            </div>
          </div>
          <div
            className="idc c1 absolute left-1/2 top-1/2 w-[clamp(140px,14vw,196px)] aspect-[5/7.4] rounded-xl p-[.85rem] flex flex-col justify-between bg-[linear-gradient(160deg,#1c0507,#060606_65%)] border border-[rgba(224,20,30,.5)] shadow-[0_30px_60px_rgba(0,0,0,.6),0_0_30px_rgba(224,20,30,.12)]"
            style={{
              transform: `translate(-50%, -50%) translate(${currentStep >= 1 ? 'calc(var(--f) * -.5)' : '0px'}, ${currentStep >= 1 ? '-8px' : '0px'}) rotate(${currentStep >= 1 ? '-3.5deg' : '0deg'}) scale(${currentStep >= 1 ? '.92' : '1'})`,
              opacity: currentStep >= 1 ? '1' : '0',
              transition: 'transform .9s cubic-bezier(.2,.8,.2,1), opacity .6s',
            }}
          >
            <div className="top font-mono text-[.5rem] tracking-[.22em] text-ash flex justify-between">
              <span>SOLUTIONS</span>
              <span>♥</span>
            </div>
            <div className="s text-[clamp(2.8rem,4.6vw,4.2rem)] text-center leading-1 text-red shadow-[0_0_24px_var(--red-glow)]">
              ♥
            </div>
            <div>
              <div className="no font-display font-semibold text-[1.2rem] tracking-[.08em] text-center">PLAYER 031</div>
              <div className="br text-[.58rem] tracking-[.18em] uppercase text-ash text-center mt-[.2rem]">
                Information Technology
              </div>
            </div>
            <div className="ft font-mono text-[.46rem] tracking-[.22em] text-red border-t border-[rgba(224,20,30,.3)] pt-[.45rem] text-center">
              NON-TRANSFERABLE
            </div>
          </div>
          <div
            className="idc c2 absolute left-1/2 top-1/2 w-[clamp(140px,14vw,196px)] aspect-[5/7.4] rounded-xl p-[.85rem] flex flex-col justify-between bg-[linear-gradient(160deg,#1c0507,#060606_65%)] border border-[rgba(224,20,30,.5)] shadow-[0_30px_60px_rgba(0,0,0,.6),0_0_30px_rgba(224,20,30,.12)]"
            style={{
              transform: `translate(-50%, -50%) translate(${currentStep >= 1 ? 'calc(var(--f) * .5)' : '0px'}, ${currentStep >= 1 ? '-8px' : '0px'}) rotate(${currentStep >= 1 ? '3.5deg' : '0deg'}) scale(${currentStep >= 1 ? '.92' : '1'})`,
              opacity: currentStep >= 1 ? '1' : '0',
              transition: 'transform .9s cubic-bezier(.2,.8,.2,1), opacity .6s',
            }}
          >
            <div className="top font-mono text-[.5rem] tracking-[.22em] text-ash flex justify-between">
              <span>SOLUTIONS</span>
              <span>♥</span>
            </div>
            <div className="s text-[clamp(2.8rem,4.6vw,4.2rem)] text-center leading-1 text-red shadow-[0_0_24px_var(--red-glow)]">
              ♥
            </div>
            <div>
              <div className="no font-display font-semibold text-[1.2rem] tracking-[.08em] text-center">PLAYER 044</div>
              <div className="br text-[.58rem] tracking-[.18em] uppercase text-ash text-center mt-[.2rem]">
                Information Technology
              </div>
            </div>
            <div className="ft font-mono text-[.46rem] tracking-[.22em] text-red border-t border-[rgba(224,20,30,.3)] pt-[.45rem] text-center">
              NON-TRANSFERABLE
            </div>
          </div>
          <div
            className="idc c3 absolute left-1/2 top-1/2 w-[clamp(140px,14vw,196px)] aspect-[5/7.4] rounded-xl p-[.85rem] flex flex-col justify-between bg-[linear-gradient(160deg,#1c0507,#060606_65%)] border border-[rgba(224,20,30,.5)] shadow-[0_30px_60px_rgba(0,0,0,.6),0_0_30px_rgba(224,20,30,.12)]"
            style={{
              transform: `translate(-50%, -50%) translate(${currentStep >= 1 ? 'calc(var(--f) * 1.5)' : '0px'}, ${currentStep >= 1 ? '0px' : '0px'}) rotate(${currentStep >= 1 ? '10deg' : '0deg'}) scale(${currentStep >= 1 ? '.92' : '1'})`,
              opacity: currentStep >= 1 ? '1' : '0',
              transition: 'transform .9s cubic-bezier(.2,.8,.2,1), opacity .6s',
            }}
          >
            <div className="top font-mono text-[.5rem] tracking-[.22em] text-ash flex justify-between">
              <span>SOLUTIONS</span>
              <span>♥</span>
            </div>
            <div className="s text-[clamp(2.8rem,4.6vw,4.2rem)] text-center leading-1 text-red shadow-[0_0_24px_var(--red-glow)]">
              ♥
            </div>
            <div>
              <div className="no font-display font-semibold text-[1.2rem] tracking-[.08em] text-center">PLAYER 058</div>
              <div className="br text-[.58rem] tracking-[.18em] uppercase text-ash text-center mt-[.2rem]">
                Information Technology
              </div>
            </div>
            <div className="ft font-mono text-[.46rem] tracking-[.22em] text-red border-t border-[rgba(224,20,30,.3)] pt-[.45rem] text-center">
              NON-TRANSFERABLE
            </div>
          </div>
          <div
            className="idc c4 black absolute left-1/2 top-1/2 w-[clamp(140px,14vw,196px)] aspect-[5/7.4] rounded-xl p-[.85rem] flex flex-col justify-between bg-[linear-gradient(160deg,#1c0507,#060606_65%)] border border-[rgba(224,20,30,.5)] shadow-[0_30px_60px_rgba(0,0,0,.6),0_0_30px_rgba(224,20,30,.12)]"
            style={{
              transform: `translate(-50%, -50%) translate(${currentStep === 2 ? 'calc(var(--f) * 2.9)' : 'calc(var(--f) * 6)'}, 0px) rotate(${currentStep === 2 ? '8deg' : '16deg'}) scale(${currentStep === 2 ? '.92' : '1'})`,
              opacity: currentStep === 2 ? '1' : '0',
              transition: 'transform .9s cubic-bezier(.2,.8,.2,1), opacity .6s',
            }}
          >
            <div className="top font-mono text-[.5rem] tracking-[.22em] text-ash flex justify-between">
              <span>SOLUTIONS</span>
              <span>♠</span>
            </div>
            <div className="s text-[clamp(2.8rem,4.6vw,4.2rem)] text-center leading-1 text-bone shadow-[0_0_18px_rgba(239,231,214,.25)]">
              ♠
            </div>
            <div>
              <div className="no font-display font-semibold text-[1.2rem] tracking-[.08em] text-center">PLAYER 112</div>
              <div className="br text-[.58rem] tracking-[.18em] uppercase text-ash text-center mt-[.2rem]">
                Mechanical
              </div>
            </div>
            <div className="ft font-mono text-[.46rem] tracking-[.22em] text-red border-t border-[rgba(224,20,30,.3)] pt-[.45rem] text-center">
              NON-TRANSFERABLE
            </div>
            <div className="xx absolute inset-0 opacity-0 transition-opacity duration-300" style={{ opacity: currentStep === 2 ? '1' : '0', transitionDelay: '1s' }}>
              <div className="absolute left-[-6%] right-[-6%] top-1/2 h-[4px] bg-red shadow-[0_0_14px_var(--red)] rotate-[56deg]" />
              <div className="absolute left-[-6%] right-[-6%] top-1/2 h-[4px] bg-red shadow-[0_0_14px_var(--red)] rotate-[-56deg]" />
            </div>
          </div>
          <div className="squad-tag t0 absolute left-1/2 bottom-[3%] -translate-x-1/2 font-mono text-[.66rem] tracking-[.3em] whitespace-nowrap text-ash" style={{ opacity: currentStep === 0 ? '1' : '0', transitionDelay: '.5s' }}>
            CARD SET BY BRANCH · <b className="text-red font-normal">LOCKED</b>
          </div>
          <div className="squad-tag t1 absolute left-1/2 bottom-[3%] -translate-x-1/2 font-mono text-[.66rem] tracking-[.3em] whitespace-nowrap text-ash" style={{ opacity: currentStep === 1 ? '1' : '0', transitionDelay: '.5s' }}>
            TEAM <b className="text-red font-normal">♥</b> · 4 / 4 PLAYERS
          </div>
          <div className="squad-tag t2 absolute left-1/2 bottom-[3%] -translate-x-1/2 font-mono text-[.66rem] tracking-[.3em] whitespace-nowrap text-red" style={{ opacity: currentStep === 2 ? '1' : '0', transitionDelay: '.5s' }}>
            MIXED-BRANCH TEAM · REJECTED
          </div>
        </div>
      </div>
    </section>
  )
}
