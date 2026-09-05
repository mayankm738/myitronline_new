const benefits = [
  { icon: '🔒', title: 'Secure & Private', description: 'Your financial information is handled with security and privacy in mind.' },
  { icon: '⚡', title: 'Fast & Simple', description: 'A clean step-by-step experience helps you file without confusion.' },
  { icon: '💡', title: 'Easy to Understand', description: 'Clear explanations help you understand your tax, deductions and filing.' },
  { icon: '🤝', title: 'Expert Support', description: 'Get assistance whenever you need help understanding your filing.' },
]

export default function WhyUs() {
  const paper = "#FFFFFF"
  const bg = "#F5F6FA"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"
  const indigo = "#4B5CE0"

  return (
    <section id="why-us" className="px-5 py-20 lg:px-8 lg:py-28" style={{ backgroundColor: paper }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-benefit { transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
        .itr-benefit:hover { transform: translateY(-4px); border-color: ${emerald}55; box-shadow: 0 20px 40px -26px rgba(18,20,28,0.2); }
        .itr-benefit-icon { transition: background-color 0.2s ease; }
        .itr-benefit:hover .itr-benefit-icon { background-color: ${emerald}; }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ border: `1px solid ${line}`, color: inkSoft }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
              Why MyITRonline
            </span>

            <h2 className="itr-display mt-6 text-3xl font-medium tracking-tight sm:text-4xl" style={{ color: ink }}>
              Tax filing designed
              <span className="block" style={{ color: emerald }}>around you</span>
            </h2>

            <p className="itr-sans mt-5 max-w-xl text-lg leading-8" style={{ color: inkSoft }}>
              We believe filing your taxes shouldn&apos;t feel complicated. MyITRonline brings everything together in one simple, transparent experience.
            </p>

            <div className="itr-sans mt-9 flex max-w-lg items-stretch">
              {[
                { value: "100%", label: "Digital process" },
                { value: "Simple", label: "Step-by-step filing" },
                { value: "Secure", label: "Data-focused approach" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex-1 px-5 first:pl-0" style={{ borderLeft: i === 0 ? "none" : `1px dashed ${line}` }}>
                  <p className="itr-mono text-xl font-semibold" style={{ color: ink }}>{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide" style={{ color: inkFaint }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="itr-benefit group rounded-2xl p-6" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
                <div className="itr-benefit-icon flex h-12 w-12 items-center justify-center rounded-xl text-xl" style={{ backgroundColor: emeraldSoft }}>
                  {benefit.icon}
                </div>
                <h3 className="itr-display mt-5 text-lg font-medium" style={{ color: ink }}>{benefit.title}</h3>
                <p className="itr-sans mt-2 text-sm leading-6" style={{ color: inkSoft }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}