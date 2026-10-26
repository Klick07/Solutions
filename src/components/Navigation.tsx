import GlitchText from './GlitchText'

interface NavigationProps {
  visaTime: string
}

export default function Navigation({ visaTime }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-[1.2rem_clamp(1rem,4vw,3rem)] bg-gradient-to-b from-black/85 to-transparent">
      <a href="#top" className="logo font-blackletter text-[1.7rem] text-bone leading-none">
        <GlitchText text="Solutions" />
        <small className="font-display text-[.6rem] tracking-[.35em] text-red block mt-[.2rem] uppercase">
          in Homeland
        </small>
      </a>
      <ul className="flex gap-[1.6rem] list-none">
        <li>
          <a href="#flip" className="text-[.78rem] tracking-[.3em] uppercase text-ash transition-colors hover:text-bone relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-full after:bg-red after:transform after:scale-x-0 after:transition-transform after:shadow-[0_0_8px_var(--red)] hover:after:scale-x-100">
            The Flip
          </a>
        </li>
        <li>
          <a href="#suits" className="text-[.78rem] tracking-[.3em] uppercase text-ash transition-colors hover:text-bone relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-full after:bg-red after:transform after:scale-x-0 after:transition-transform after:shadow-[0_0_8px_var(--red)] hover:after:scale-x-100">
            Suits
          </a>
        </li>
        <li>
          <a href="#visas" className="text-[.78rem] tracking-[.3em] uppercase text-ash transition-colors hover:text-bone relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-full after:bg-red after:transform after:scale-x-0 after:transition-transform after:shadow-[0_0_8px_var(--red)] hover:after:scale-x-100">
            Visa
          </a>
        </li>
        <li>
          <a href="#game" className="text-[.78rem] tracking-[.3em] uppercase text-ash transition-colors hover:text-bone relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-full after:bg-red after:transform after:scale-x-0 after:transition-transform after:shadow-[0_0_8px_var(--red)] hover:after:scale-x-100">
            Games
          </a>
        </li>
        <li>
          <a href="#standings" className="text-[.78rem] tracking-[.3em] uppercase text-ash transition-colors hover:text-bone relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-full after:bg-red after:transform after:scale-x-0 after:transition-transform after:shadow-[0_0_8px_var(--red)] hover:after:scale-x-100">
            Leaderboard
          </a>
        </li>
        <li>
          <a href="#join" className="text-[.78rem] tracking-[.3em] uppercase text-ash transition-colors hover:text-bone relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[1px] after:w-full after:bg-red after:transform after:scale-x-0 after:transition-transform after:shadow-[0_0_8px_var(--red)] hover:after:scale-x-100">
            Join
          </a>
        </li>
      </ul>
      <div
        className="visa font-mono text-[.72rem] tracking-[.15em] text-red border border-[rgba(224,20,30,.55)] p-[.5rem_.8rem] shadow-[0_0_8px_var(--red-glow)] whitespace-nowrap"
        title="Your remaining visa"
      >
        VISA <b className="text-bone font-normal">{visaTime}</b>
      </div>
    </nav>
  )
}
