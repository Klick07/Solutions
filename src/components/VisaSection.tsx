import { useScrollytelling } from '../hooks/useScrollytelling'
import GlitchText from './GlitchText'

export default function VisaSection() {
  const { elementRef, currentStep } = useScrollytelling({
    steps: 3,
    onStep: (step) => {
      // Update visa document fields based on step
      const statusEl = elementRef.current?.querySelector('[data-status]')
      const validEl = elementRef.current?.querySelector('[data-valid]')

      if (statusEl) {
        const statuses = ['Buffer · Active', 'Renewed', 'Expired']
        statusEl.textContent = statuses[step]
      }
      if (validEl) {
        const valids = ['Round 1 games', 'Round 2 entry', '—']
        validEl.textContent = valids[step]
      }
    },
  })

  return (
    <section
      ref={elementRef}
      className="scrolly relative p-[clamp(5rem,12vw,9rem)_clamp(1rem,5vw,4rem)]"
      id="visas"
      data-steps="3"
      style={{ height: '360vh' }}
    >
      <div className="pin">
        <div className="chapter absolute top-[6.2rem] left-[clamp(1rem,5vw,4rem)] z-[5] font-mono text-[.66rem] tracking-[.4em] text-ash uppercase">
          <b className="text-red font-normal">04</b> — The Visa
          <span className="cja font-jp tracking-[.3em] ml-[.9rem] pl-[.9rem] border-l border-[rgba(239,231,214,.2)]">
            ビザ
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
              On entry
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Your buffer
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">visa.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                猶予のビザ。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Every team gets a buffer visa at registration and check-in.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                全チームは、登録とチェックインの時に猶予ビザを受け取る。
              </span>
              <span className="en block">It gets you into Round 1 games, and lasts until you qualify for Round 2.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                このビザで第一ラウンドに参加でき、第二ラウンド進出が決まるまで有効だ。
              </span>
            </p>
          </div>

          {/* Beat 1 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 1 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              Top three
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Renew it.
              <br />
              Move <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">on.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                更新し、先へ進め。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Finish 1st, 2nd or 3rd in any Round 1 game and your visa is renewed.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                第一ラウンドのいずれかのゲームで三位以内に入れば、ビザは更新される。
              </span>
              <span className="en block">That renewal is your ticket into Round 2.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                その更新こそが、第二ラウンドへの切符だ。
              </span>
            </p>
          </div>

          {/* Beat 2 */}
          <div className={`beat absolute inset-0 left-0 right-0 top-auto bottom-auto opacity-0 translate-y-[30px] blur-[6px] transition-all duration-700 pointer-events-none ${currentStep === 2 ? 'on opacity-100 translate-y-0 blur-0 pointer-events-auto' : ''}`}>
            <span className="eyebrow font-mono text-[.72rem] tracking-[.4em] text-red uppercase flex items-center gap-[1rem] before:content-[''] before:w-[40px] before:h-[1px] before:bg-red before:shadow-[0_0_8px_var(--red)]">
              Fall short
            </span>
            <h2 className="font-display font-semibold text-[clamp(2.1rem,4.6vw,4rem)] uppercase tracking-[.02em] leading-[.95] my-[1.2rem_0_1.5rem]">
              Game
              <br />
              <em className="font-blackletter font-normal text-red shadow-[0_0_24px_rgba(224,20,30,.4)]">over.</em>
              <span className="h2ja block mt-[.9rem] font-jp font-medium text-[clamp(.78rem,1.05vw,.95rem)] tracking-[.38em] leading-[1.6] text-ash text-shadow-none before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-red before:vertical-align-middle before:mr-[.8rem] before:shadow-[0_0_6px_var(--red)]">
                ゲームオーバー。
              </span>
            </h2>
            <p className="lede max-w-[560px] text-ash font-light text-[1.1rem] leading-[1.75] tracking-[.02em]">
              <span className="en block">Finish outside the top three and you're eliminated from that game.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                三位以内に入れなければ、そのゲームから脱落する。
              </span>
              <span className="en block">Never earn a renewal, and your buffer visa expires when Round 1 ends.</span>
              <span className="ja block font-jp font-normal font-medium tracking-[.14em] text-[.74em] my-[.2rem_0_.85rem] pl-[.85rem] border-l border-[rgba(224,20,30,.55)]">
                一度も更新できなければ、第一ラウンド終了とともに猶予ビザは失効する。
              </span>
            </p>
          </div>
        </div>

        {/* Visa Document */}
        <div className="stage2 visa-wrap flex flex-col justify-center">
          <div
            className="vdoc relative w-[min(100%,440px)] mx-auto aspect-[1.45] bg-[linear-gradient(135deg,#efe7d6,#d6ccb8)] text-[#1a1414] rounded-xl p-[1.1rem_1.3rem] shadow-[0_40px_80px_rgba(0,0,0,.6)] overflow-hidden transition-all duration-900"
            style={{
              filter: currentStep === 2 ? 'grayscale(1) brightness(.5)' : 'none',
              transform: currentStep === 2 ? 'rotate(-2.5deg) translateY(8px)' : 'none',
            }}
          >
            <div className="vd-head flex justify-between font-mono text-[.62rem] tracking-[.28em] border-b border-[rgba(0,0,0,.2)] pb-[.55rem] text-red-deep">
              <span>HOMELAND VISA</span>
              <span>祖国査証</span>
            </div>
            <div className="vd-body flex gap-[1.1rem] mt-[.9rem] items-center relative">
              <div className="vd-suit w-[30%] aspect-[.8] border border-[rgba(0,0,0,.25)] grid place-items-center text-[clamp(2.4rem,4.6vw,3.8rem)] text-red bg-white/35 flex-none">
                ♦
              </div>
              <dl className="grid grid-cols-[auto_1fr] gap-[.35rem_.8rem]">
                <dt className="font-mono text-[.52rem] tracking-[.2em] text-[#7a716b] uppercase self-center">Team</dt>
                <dd className="font-display font-semibold uppercase tracking-[.04em] text-[.82rem]">ENTC · T-07</dd>
                <dt className="font-mono text-[.52rem] tracking-[.2em] text-[#7a716b] uppercase self-center">Players</dt>
                <dd className="font-display font-semibold uppercase tracking-[.04em] text-[.82rem]">4</dd>
                <dt className="font-mono text-[.52rem] tracking-[.2em] text-[#7a716b] uppercase self-center">Status</dt>
                <dd className="font-display font-semibold uppercase tracking-[.04em] text-[.82rem]" data-status="Buffer · Active">
                  Buffer · Active
                </dd>
                <dt className="font-mono text-[.52rem] tracking-[.2em] text-[#7a716b] uppercase self-center">Valid for</dt>
                <dd className="font-display font-semibold uppercase tracking-[.04em] text-[.82rem]" data-valid="Round 1 games">
                  Round 1 games
                </dd>
              </dl>
            </div>
            <div className="vd-mrz absolute left-[1.3rem] right-[1.3rem] bottom-[.9rem] font-mono text-[.6rem] tracking-[.1em] text-[#5a514b] whitespace-nowrap overflow-hidden">
              V&lt;HML&lt;SOLUTIONS&lt;&lt;ENTC&lt;T07&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
            </div>
            <div
              className="stamp s-buffer absolute z-[2] font-display font-semibold text-[clamp(1.1rem,2.2vw,1.6rem)] tracking-[.1em] border-[3px_solid_currentColor] p-[.25rem_.75rem] leading-[1.05] text-center rounded-xl opacity-0 transition-all duration-200 mix-blend-multiply"
              style={{
                color: '#24427e',
                right: '7%',
                top: '30%',
                transform: `rotate(-9deg) ${currentStep >= 0 ? 'scale(1)' : 'scale(2.4)'}`,
                opacity: currentStep >= 0 ? '.92' : '0',
              }}
            >
              BUFFER<small className="block font-mono text-[.46rem] tracking-[.2em] font-normal">CHECK-IN</small>
            </div>
            <div
              className="stamp s-renew absolute z-[2] font-display font-semibold text-[clamp(1.1rem,2.2vw,1.6rem)] tracking-[.1em] border-[3px_solid_currentColor] p-[.25rem_.75rem] leading-[1.05] text-center rounded-xl opacity-0 transition-all duration-200 mix-blend-multiply"
              style={{
                color: 'var(--red)',
                right: '14%',
                top: '54%',
                transform: `rotate(7deg) ${currentStep >= 1 ? 'scale(1)' : 'scale(2.4)'}`,
                opacity: currentStep >= 1 ? '.92' : '0',
                transitionDelay: '.35s',
              }}
            >
              RENEWED<small className="block font-mono text-[.46rem] tracking-[.2em] font-normal">TOP 3 · ROUND 1</small>
            </div>
            <div
              className="stamp s-expired absolute z-[2] font-display font-semibold text-[clamp(1.6rem,3.2vw,2.3rem)] tracking-[.1em] border-[3px_solid_currentColor] p-[.25rem_.75rem] leading-[1.05] text-center rounded-xl opacity-0 transition-all duration-200 mix-blend-multiply"
              style={{
                color: '#111',
                left: '18%',
                top: '36%',
                transform: `rotate(-14deg) ${currentStep >= 2 ? 'scale(1)' : 'scale(2.4)'}`,
                opacity: currentStep >= 2 ? '.92' : '0',
                transitionDelay: '.35s',
              }}
            >
              EXPIRED<small className="block font-mono text-[.46rem] tracking-[.2em] font-normal">ROUND 1 ENDED</small>
            </div>
          </div>
          <div className="track relative h-[2px] bg-[rgba(239,231,214,.15)] my-[3rem_auto_2.4rem] w-[min(86%,400px)]">
            <div
              className="track-fill absolute left-0 top-0 h-full bg-red shadow-[0_0_10px_var(--red)] transition-all duration-1000"
              style={{
                width: currentStep === 0 ? '50%' : currentStep === 1 ? '100%' : '50%',
                background: currentStep === 2 ? '#555' : 'var(--red)',
                boxShadow: currentStep === 2 ? 'none' : '0 0 10px var(--red)',
              }}
            />
            <i className="node n0 absolute top-1/2 w-[12px] h-[12px] -m-[6px_0_0_-6px] rounded-full bg-[#111] border border-[rgba(239,231,214,.4)] transition-all duration-400" style={{ left: '0%', background: currentStep >= 0 ? 'var(--red)' : '#111', borderColor: currentStep >= 0 ? 'var(--red)' : 'rgba(239,231,214,.4)', boxShadow: currentStep >= 0 ? '0 0 12px var(--red)' : 'none' }}>
              <span className="absolute top-[1.3rem] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[.58rem] tracking-[.2em] text-ash uppercase">Check-in</span>
            </i>
            <i className="node n1 absolute top-1/2 w-[12px] h-[12px] -m-[6px_0_0_-6px] rounded-full bg-[#111] border border-[rgba(239,231,214,.4)] transition-all duration-400" style={{ left: '50%', background: currentStep >= 1 ? 'var(--red)' : '#111', borderColor: currentStep >= 1 ? 'var(--red)' : 'rgba(239,231,214,.4)', boxShadow: currentStep >= 1 ? '0 0 12px var(--red)' : 'none' }}>
              <span className="absolute top-[1.3rem] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[.58rem] tracking-[.2em] text-ash uppercase">Round 1</span>
            </i>
            <i className="node n2 absolute top-1/2 w-[12px] h-[12px] -m-[6px_0_0_-6px] rounded-full bg-[#111] border border-[rgba(239,231,214,.4)] transition-all duration-400" style={{ left: '100%', background: currentStep >= 2 ? 'var(--red)' : '#111', borderColor: currentStep >= 2 ? 'var(--red)' : 'rgba(239,231,214,.4)', boxShadow: currentStep >= 2 ? '0 0 12px var(--red)' : 'none' }}>
              <span className="absolute top-[1.3rem] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[.58rem] tracking-[.2em] text-ash uppercase" style={{ textDecoration: currentStep === 2 ? 'line-through' : 'none', color: currentStep === 2 ? 'var(--red)' : 'var(--ash)' }}>Round 2</span>
            </i>
          </div>
          <div
            className="gameover gx absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-[3] font-display font-semibold text-[clamp(2.6rem,6vw,5rem)] tracking-[.12em] text-red shadow-[0_0_30px_var(--red-glow)] whitespace-nowrap opacity-0 transition-all duration-300 pointer-events-none"
            data-text="GAME OVER"
            style={{
              opacity: currentStep === 2 ? '1' : '0',
              transform: currentStep === 2 ? 'none' : 'scale(1.3)',
              transitionDelay: '.8s',
            }}
          >
            <GlitchText text="GAME OVER" />
          </div>
        </div>
      </div>
    </section>
  )
}
