function TrustPoint({ children, emerald, emeraldSoft, inkSoft }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: emeraldSoft, color: emerald }}>&#10003;</span>
      <span className="itr-sans text-xs font-semibold" style={{ color: inkSoft }}>{children}</span>
    </div>
  )
}

export default function FinalCTA() {
  const bg = "#F5F6FA"
  const paper = "#FFFFFF"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"
  const indigo = "#4B5CE0"
  const stamp = "#C43E1C"

  return (
    <section id="get-started" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-cta-primary { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .itr-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 32px -12px ${emerald}66; }
        .itr-cta-ghost { transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease; }
        .itr-cta-ghost:hover { transform: translateY(-2px); border-color: ${emerald}; background-color: ${emeraldSoft}; }
        @keyframes itr-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .itr-badge-float { animation: itr-float 5s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full blur-[110px]" style={{ backgroundColor: `${emerald}1A` }} />
        <div className="absolute right-[-180px] bottom-[-180px] h-[420px] w-[420px] rounded-full blur-[110px]" style={{ backgroundColor: `${indigo}1A` }} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem]" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 30px 80px -30px rgba(18,20,28,0.2)" }}>
          <div className="absolute left-0 right-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${emerald}, ${indigo})` }} />

          <div className="relative grid items-center gap-12 px-7 py-12 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-14">
            <div>
              <div className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ border: `1px solid ${line}`, color: inkSoft }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
                Get Started Today
              </div>

              <h2 className="itr-display mt-6 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl" style={{ color: ink }}>
                Your taxes don&apos;t have to
                <span className="block" style={{ color: emerald }}>feel complicated.</span>
              </h2>

              <p className="itr-sans mt-5 max-w-xl text-sm leading-7 sm:text-base" style={{ color: inkSoft }}>
                Calculate your estimated tax, understand your options, and take the next step with a clear, simple digital experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                <TrustPoint emerald={emerald} emeraldSoft={emeraldSoft} inkSoft={inkSoft}>Easy to use</TrustPoint>
                <TrustPoint emerald={emerald} emeraldSoft={emeraldSoft} inkSoft={inkSoft}>Digital process</TrustPoint>
                <TrustPoint emerald={emerald} emeraldSoft={emeraldSoft} inkSoft={inkSoft}>Clear guidance</TrustPoint>
                <TrustPoint emerald={emerald} emeraldSoft={emeraldSoft} inkSoft={inkSoft}>Simple experience</TrustPoint>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#calculator" className="itr-sans itr-cta-primary group inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold" style={{ backgroundColor: emerald, color: "#FFFFFF" }}>
                  Calculate Your Tax
                  <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
                <a href="#how-it-works" className="itr-sans itr-cta-ghost group inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: ink }}>
                  See How It Works
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: `${emerald}1A` }} />

              <div className="relative">
                <div className="rounded-3xl p-5" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 24px 60px -30px rgba(18,20,28,0.25)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="itr-mono text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: inkFaint }}>Tax overview</p>
                      <p className="itr-display mt-1 text-sm font-medium" style={{ color: ink }}>Your estimated result</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: emeraldSoft, color: emerald }}>&#8377;</div>
                  </div>

                  <div className="mt-6 rounded-2xl p-4" style={{ backgroundColor: bg }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="itr-mono text-[10px] font-medium" style={{ color: inkFaint }}>Estimated tax</p>
                        <p className="itr-mono mt-1 text-2xl font-bold tracking-tight" style={{ color: ink }}>&#8377;24,800</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm" style={{ backgroundColor: emeraldSoft, color: emerald }}>&rarr;</div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <span className="itr-mono text-[10px] font-semibold" style={{ color: inkFaint }}>Filing progress</span>
                      <span className="itr-mono text-[10px] font-bold" style={{ color: emerald }}>Ready</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full" style={{ backgroundColor: line }}>
                      <div className="h-full w-[82%] rounded-full" style={{ background: `linear-gradient(90deg, ${emerald}, ${indigo})` }} />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <div className="rounded-xl p-3" style={{ border: `1px solid ${line}`, backgroundColor: paper }}>
                      <p className="itr-mono text-[9px] font-semibold uppercase tracking-wider" style={{ color: inkFaint }}>Return</p>
                      <p className="itr-mono mt-1 text-xs font-bold" style={{ color: ink }}>ITR-1</p>
                    </div>
                    <div className="rounded-xl p-3" style={{ backgroundColor: emeraldSoft }}>
                      <p className="itr-mono text-[9px] font-semibold uppercase tracking-wider" style={{ color: emerald }}>Potential saving</p>
                      <p className="itr-mono mt-1 text-xs font-bold" style={{ color: emerald }}>&#8377;18,500</p>
                    </div>
                  </div>
                </div>

                <div className="itr-badge-float absolute -left-5 top-8 flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 16px 30px -20px rgba(18,20,28,0.28)" }}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: emeraldSoft, color: emerald }}>&#10003;</span>
                  <div>
                    <p className="itr-mono text-[9px] font-bold" style={{ color: ink }}>Simple process</p>
                    <p className="text-[8px]" style={{ color: inkFaint }}>Built for clarity</p>
                  </div>
                </div>

                <div className="itr-badge-float absolute -bottom-5 -right-4 flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ backgroundColor: paper, border: `1px solid ${stamp}44`, boxShadow: "0 16px 30px -20px rgba(18,20,28,0.28)", animationDelay: "1.5s" }}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full text-xs" style={{ backgroundColor: `${stamp}14`, color: stamp }}>&#9889;</span>
                  <div>
                    <p className="itr-mono text-[9px] font-bold" style={{ color: ink }}>Quick & simple</p>
                    <p className="text-[8px]" style={{ color: inkFaint }}>Digital experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: emeraldSoft, color: emerald }}>&#10003;</span>
            <span className="itr-sans text-xs font-medium" style={{ color: inkSoft }}>Simple digital experience</span>
          </div>
          <span className="hidden h-4 w-px sm:block" style={{ backgroundColor: line }} />
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: `${indigo}1A`, color: indigo }}>&#10003;</span>
            <span className="itr-sans text-xs font-medium" style={{ color: inkSoft }}>Clear tax guidance</span>
          </div>
          <span className="hidden h-4 w-px sm:block" style={{ backgroundColor: line }} />
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: `${stamp}14`, color: stamp }}>&#10003;</span>
            <span className="itr-sans text-xs font-medium" style={{ color: inkSoft }}>Start in minutes</span>
          </div>
        </div>
      </div>
    </section>
  )
}