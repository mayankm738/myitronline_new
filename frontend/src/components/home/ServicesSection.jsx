const services = [
  {
    icon: '📄',
    title: 'Income Tax Filing',
    description: 'File your income tax return quickly with a simple, guided step-by-step process.',
    link: 'Start filing',
  },
  {
    icon: '🧮',
    title: 'Tax Calculator',
    description: 'Estimate your income tax and understand your deductions and savings before you file.',
    link: 'Calculate tax',
  },
  {
    icon: '💰',
    title: 'Tax Saving',
    description: 'Discover eligible deductions and make smarter tax-saving decisions.',
    link: 'Explore savings',
  },
  {
    icon: '👨\u200d💼',
    title: 'Expert Assistance',
    description: 'Get professional guidance whenever you need help with your filing.',
    link: 'Talk to an expert',
  },
]

export default function ServicesSection() {
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
    <section id="services" className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }
        .itr-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .itr-card:hover { transform: translateY(-6px); border-color: ${emerald}55; box-shadow: 0 24px 48px -24px rgba(18,20,28,0.22); }
        .itr-icon { transition: background-color 0.25s ease, transform 0.25s ease; }
        .itr-card:hover .itr-icon { background-color: ${emerald}; transform: scale(1.06); }
        .itr-link { transition: gap 0.2s ease, color 0.2s ease; }
        .itr-card:hover .itr-link { color: ${emerald}; }
      `}</style>

      <div className="pointer-events-none absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.12 }} />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            Our Services
          </span>

          <h2 className="itr-display mt-6 text-3xl font-medium tracking-tight sm:text-4xl" style={{ color: ink }}>
            Everything you need for
            <span className="block" style={{ color: emerald }}>easier tax filing</span>
          </h2>

          <p className="itr-sans mt-5 text-lg leading-8" style={{ color: inkSoft }}>
            From calculating your tax to filing your return, MyITRonline makes the entire process simple and stress-free.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="itr-card group rounded-2xl p-7" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 12px 30px -24px rgba(18,20,28,0.18)" }}>
              <div className="itr-icon flex h-14 w-14 items-center justify-center rounded-2xl text-2xl" style={{ backgroundColor: emeraldSoft }}>
                {service.icon}
              </div>

              <h3 className="itr-display mt-6 text-xl font-medium" style={{ color: ink }}>{service.title}</h3>

              <p className="itr-sans mt-3 min-h-[72px] text-sm leading-6" style={{ color: inkSoft }}>{service.description}</p>

              <button type="button" className="itr-sans itr-link mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: ink }}>
                {service.link}
                <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}