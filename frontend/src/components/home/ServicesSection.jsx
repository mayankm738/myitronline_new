const ArrowIcon = () => (
  <svg className="itr-arrow h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckIcon = () => (
  <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.14" />
    <path d="m6 10.2 2.6 2.6L14 7.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Clean, consistent SVG icons (emoji render differently on every OS)
const icons = {
  filing: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  ),
  calculator: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01" />
    </svg>
  ),
  saving: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
  expert: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </svg>
  ),
}

const services = [
  {
    icon: icons.filing,
    step: 'Step 1',
    title: 'Income Tax Filing',
    description: 'File your income tax return quickly with a simple, guided step-by-step process.',
    points: ['Guided, step-by-step flow', 'Save progress and resume anytime'],
    link: 'Start filing',
    href: '#file',
    featured: true,
  },
  {
    icon: icons.calculator,
    step: 'Step 2',
    title: 'Tax Calculator',
    description: 'Estimate your income tax and understand your deductions and savings before you file.',
    points: ['Compare old vs new regime', 'See your estimate instantly'],
    link: 'Calculate tax',
    href: '#calculator',
  },
  {
    icon: icons.saving,
    step: 'Step 3',
    title: 'Tax Saving',
    description: 'Discover eligible deductions and make smarter tax-saving decisions.',
    points: ['Find deductions you may qualify for', 'Plan investments with clarity'],
    link: 'Explore savings',
    href: '#tax-saving',
  },
  {
    icon: icons.expert,
    step: 'Support',
    title: 'Expert Assistance',
    description: 'Get professional guidance whenever you need help with your filing.',
    points: ['Ask questions before you file', 'Get help with complex cases'],
    link: 'Talk to an expert',
    href: '#expert',
  },
]

export default function ServicesSection() {
  const bg = '#F5F6FA'
  const paper = '#FFFFFF'
  const ink = '#12141C'
  const inkSoft = 'rgba(18,20,28,0.68)'
  const line = 'rgba(18,20,28,0.10)'
  const emerald = '#0E9D63'
  const emeraldDark = '#0A7A4C' 
  const emeraldSoft = 'rgba(14,157,99,0.12)'

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28"
      style={{ backgroundColor: bg }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }

        .itr-card { position: relative; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .itr-card:hover, .itr-card:focus-within { transform: translateY(-6px); border-color: ${emerald}66; box-shadow: 0 24px 48px -24px rgba(18,20,28,0.22); }
        .itr-card:focus-within { outline: 2px solid ${emerald}; outline-offset: 3px; }

        .itr-icon { transition: background-color .25s ease, color .25s ease, transform .25s ease; }
        .itr-card:hover .itr-icon, .itr-card:focus-within .itr-icon { background-color: ${emerald}; color: #fff; transform: scale(1.06); }

        /* Whole card is clickable via the link's stretched hit area */
        .itr-link::after { content: ''; position: absolute; inset: 0; border-radius: 1rem; }
        .itr-link:focus-visible { outline: none; }
        .itr-arrow { transition: transform .2s ease; }
        .itr-card:hover .itr-arrow, .itr-card:focus-within .itr-arrow { transform: translateX(4px); }
        .itr-card:hover .itr-link, .itr-card:focus-within .itr-link { color: ${emeraldDark}; }

        .itr-reveal { opacity: 0; transform: translateY(16px); animation: itr-in .6s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes itr-in { to { opacity: 1; transform: none; } }

        .itr-btn { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .itr-btn:hover { transform: translateY(-2px); }
        .itr-btn:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; }

        @media (prefers-reduced-motion: reduce) {
          .itr-reveal { animation: none; opacity: 1; transform: none; }
          .itr-card, .itr-icon, .itr-arrow, .itr-btn { transition: none !important; }
          .itr-card:hover, .itr-card:focus-within, .itr-btn:hover { transform: none; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute -left-40 -top-40 h-104 w-104 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.12 }}
        aria-hidden="true"
      />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            Our Services
          </span>

          <h2 id="services-heading" className="itr-display mt-2 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl" style={{ color: ink }}>
            Everything you need for
            <span className="block" style={{ color: emeraldDark }}>easier tax filing</span>
          </h2>

          <p className="itr-sans mt-3 text-base leading-7 sm:text-lg sm:leading-8" style={{ color: inkSoft }}>
            From calculating your tax to filing your return, MyITRonline makes the entire process simple and stress-free.
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="itr-reveal flex"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <article
                className="itr-card flex w-full flex-col rounded-2xl p-7"
                style={{
                  backgroundColor: paper,
                  border: `1px solid ${service.featured ? emerald + '66' : line}`,
                  boxShadow: service.featured
                    ? `0 20px 40px -24px ${emerald}66`
                    : '0 12px 30px -24px rgba(18,20,28,0.18)',
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="itr-icon flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: emeraldSoft, color: emeraldDark }}
                  >
                    {service.icon}
                  </div>
                  <span
                    className="itr-mono rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    style={
                      service.featured
                        ? { backgroundColor: emerald, color: '#fff' }
                        : { backgroundColor: bg, color: inkSoft }
                    }
                  >
                    {service.featured ? 'Start here' : service.step}
                  </span>
                </div>

                <h3 className="itr-display mt-6 text-xl font-medium" style={{ color: ink }}>
                  {service.title}
                </h3>

                <p className="itr-sans mt-3 text-sm leading-6" style={{ color: inkSoft }}>
                  {service.description}
                </p>

                <ul className="itr-sans mt-5 space-y-2.5 text-sm" style={{ color: ink }}>
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5" style={{ color: emeraldDark }}>
                      <CheckIcon />
                      <span style={{ color: inkSoft }}>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.href}
                  className="itr-sans itr-link mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold"
                  style={{ color: ink }}
                >
                  {service.link}
                  <ArrowIcon />
                </a>
              </article>
            </li>
          ))}
        </ul>

        {/* Bottom CTA: gives hesitant users a clear next action */}
        <div
          className="itr-reveal mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl p-7 text-center sm:p-8 md:flex-row md:text-left"
          style={{ backgroundColor: ink, animationDelay: '420ms' }}
        >
          <div>
            <p className="itr-display text-xl font-medium text-white sm:text-2xl">Not sure where to begin?</p>
            <p className="itr-sans mt-1.5 text-sm leading-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Estimate your tax first, then file when you&apos;re ready. Our experts are one click away.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#calculator"
              className="itr-btn itr-sans inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: emerald }}
            >
              Calculate my tax
              <ArrowIcon />
            </a>
            <a
              href="#expert"
              className="itr-btn itr-sans inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white"
              style={{ border: '1px solid rgba(255,255,255,0.28)' }}
            >
              Talk to an expert
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}