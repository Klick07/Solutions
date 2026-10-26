export default function Footer() {
  return (
    <footer className="py-[3rem_clamp(1rem,5vw,4rem)] border-t border-[rgba(239,231,214,.08)] flex justify-between items-center gap-[1.5rem] flex-wrap text-[.72rem] tracking-[.3em] text-ash uppercase">
      <div className="suits text-bone tracking-[.6em] text-[1rem]">
        ♠ <span className="r text-red">♦</span> ♣ <span className="r text-red">♥</span>
      </div>
      <div>Solutions in Homeland · AIT Pune · Technical Board</div>
      <a href="#top">Back to start ↑</a>
    </footer>
  )
}
