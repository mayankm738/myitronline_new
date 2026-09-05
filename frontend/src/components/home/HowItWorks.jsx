const steps = [
  { number: '01', title: 'Enter your details', description: 'Provide your income and basic information through a simple, guided process.', icon: '📝' },
  { number: '02', title: 'Check your tax', description: 'Get an estimated view of your tax, deductions and possible savings before you file.', icon: '🧮' },
  { number: '03', title: 'Review your return', description: 'Review your information carefully and make sure everything is ready for submission.', icon: '🔍' },
  { number: '04', title: 'File your ITR', description: 'Complete your filing with a smooth digital experience and track your return.', icon: '✅' },
]

export default function HowItWorks() {
  const bg = "#F5F6FA"
  const paper = "#FFFFFF"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"
  const indigo = "#4B5CE0"

  return (
    <section id="how-it-works" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }
        .itr-step { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .itr-step:hover { transform: translateY(-6px); border-color: ${emerald}55; box-shadow: 0 24px 48px -24px rgba(18,20,28,0.22); }
        .itr-ring { transition: transform 0.25s ease, border-color 0.25s ease; }
        .itr-step:hover .itr-ring { transform: translateY(-2px); border-color: ${emerald}66; }
        .itr-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .itr-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -10px ${emerald}55; }
      `}</style>

      <div className="pointer-events-none absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.1 }} />
      <div className="pointer-events-none absolute -right-40 bottom-[-150px] h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${indigo}, transparent 70%)`, opacity: 0.1 }} />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            How It Works
          </span>

          <h2 className="itr-display mt-6 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl" style={{ color: ink }}>
            Tax filing made
            <span className="block" style={{ color: emerald }}>simple and stress-free</span>
          </h2>

          <p className="itr-sans mx-auto mt-5 max-w-2xl text-lg leading-8" style={{ color: inkSoft }}>
            From entering your details to completing your return, MyITRonline helps you move through every step with confidence.
          </p>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div className="absolute left-[12%] right-[12%] top-[43px] hidden lg:block">
            <div className="h-px w-full" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${line} 0 8px, transparent 8px 16px)` }} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative">
                <div className="relative z-10 flex items-center justify-center">
                  <div className="itr-ring relative flex h-[86px] w-[86px] items-center justify-center rounded-[1.6rem]" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 10px 30px -20px rgba(18,20,28,0.18)" }}>
                    <span className="text-3xl transition duration-300 group-hover:scale-110">{step.icon}</span>
                    <span className="itr-mono absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold" style={{ border: `2px solid ${paper}`, backgroundColor: emerald, color: "#FFFFFF" }}>
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="itr-step mt-5 flex min-h-[230px] flex-col rounded-2xl p-6" style={{ backgroundColor: paper, border: `1px solid ${line}` }}>
                  <div className="flex items-center justify-between">
                    <span className="itr-mono text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: emerald }}>Step {step.number}</span>
                    <span className="h-1.5 w-1.5 rounded-full transition" style={{ backgroundColor: line }} />
                  </div>

                  <h3 className="itr-display mt-4 text-lg font-medium" style={{ color: ink }}>{step.title}</h3>
                  <p className="itr-sans mt-3 text-sm leading-6" style={{ color: inkSoft }}>{step.description}</p>

                  <div className="mt-auto pt-6">
                    <div className="h-1 overflow-hidden rounded-full" style={{ backgroundColor: line }}>
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(index + 1) * 25}%`, background: `linear-gradient(90deg, ${emerald}, ${indigo})` }} />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="itr-mono text-[10px] font-medium" style={{ color: inkFaint }}>{index + 1} of 4</span>
                      {index === 3 && <span className="itr-mono text-[10px] font-bold" style={{ color: emerald }}>Ready &#10003;</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 20px 40px -30px rgba(18,20,28,0.2)" }}>
          <div className="absolute left-0 top-0 h-full w-1" style={{ background: `linear-gradient(180deg, ${emerald}, ${indigo})` }} />
          <div className="flex flex-col gap-6 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:px-9">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl" style={{ backgroundColor: emeraldSoft, color: emerald }}>&rarr;</div>
            <div className="flex-1">
              <h3 className="itr-display text-lg font-medium sm:text-xl" style={{ color: ink }}>Ready to get started?</h3>
              <p className="itr-sans mt-1 text-sm leading-6" style={{ color: inkSoft }}>Calculate your estimated tax before starting your filing.</p>
            </div>
            <a href="#calculator" className="itr-sans itr-cta group inline-flex shrink-0 items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold" style={{ backgroundColor: emerald, color: "#FFFFFF" }}>
              Calculate Your Tax
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}