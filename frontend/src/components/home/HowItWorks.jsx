import { useEffect, useRef, useState } from 'react'

const iconProps = {
  viewBox: '0 0 24 24',
  className: 'h-7 w-7',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const icons = {
  details: (
    <svg {...iconProps}>
      <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17z" />
      <path d="m14.5 7.5 3 3" />
    </svg>
  ),
  tax: (
    <svg {...iconProps}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01" />
    </svg>
  ),
  review: (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2M8.5 11l1.7 1.7 3.3-3.4" />
    </svg>
  ),
  file: (
    <svg {...iconProps}>
      <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  ),
}

const steps = [
  {
    number: '01',
    title: 'Enter your details',
    description: 'Provide your income and basic information through a simple, guided process.',
    tip: 'Keep PAN and Aadhaar handy',
    icon: icons.details,
  },
  {
    number: '02',
    title: 'Check your tax',
    description: 'Get an estimated view of your tax, deductions and possible savings before you file.',
    tip: 'Compare old vs new regime',
    icon: icons.tax,
  },
  {
    number: '03',
    title: 'Review your return',
    description: 'Review your information carefully and make sure everything is ready for submission.',
    tip: 'Cross-check with your AIS',
    icon: icons.review,
  },
  {
    number: '04',
    title: 'File your ITR',
    description: 'Complete your filing with a smooth digital experience and track your return.',
    tip: 'E-verify to complete filing',
    icon: icons.file,
  },
]

const checklist = [
  'PAN and Aadhaar',
  'Form 16 from your employer',
  'Bank account details',
  'Interest certificates and investment proofs',
  'AIS / Form 26AS statement',
]

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

export default function HowItWorks() {
  const bg = '#F5F6FA'
  const paper = '#FFFFFF'
  const ink = '#12141C'
  const inkSoft = 'rgba(18,20,28,0.68)'
  const inkFaint = 'rgba(18,20,28,0.60)'
  const line = 'rgba(18,20,28,0.10)'
  const emerald = '#0E9D63'
  const emeraldDark = '#0A7A4C' // text-safe on white
  const emeraldSoft = 'rgba(14,157,99,0.12)'
  const indigo = '#4B5CE0'

  // Reveal the steps (and fill the connector line) when scrolled into view
  const stepsRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = stepsRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      style={{ backgroundColor: bg }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }

        .itr-node { transition: transform .3s ease, background-color .3s ease, color .3s ease, border-color .3s ease; }
        .itr-card { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .itr-step:hover .itr-card, .itr-step:focus-within .itr-card { transform: translateY(-6px); border-color: ${emerald}66; box-shadow: 0 24px 48px -24px rgba(18,20,28,0.22); }
        .itr-step:hover .itr-node, .itr-step:focus-within .itr-node { background-color: ${emerald}; color: #fff; border-color: ${emerald}; transform: scale(1.06); }

        .itr-btn { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .itr-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -12px ${emerald}88; }
        .itr-btn:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; }
        .itr-arrow { transition: transform .2s ease; }
        .itr-btn:hover .itr-arrow { transform: translateX(4px); }

        .itr-reveal { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1); }
        .itr-in .itr-reveal { opacity: 1; transform: none; }

        .itr-fill { transform: scaleX(0); transform-origin: left; transition: transform 1.2s cubic-bezier(.2,.7,.2,1) .25s; }
        .itr-in .itr-fill { transform: scaleX(1); }
        .itr-fill-v { transform: scaleY(0); transform-origin: top; transition: transform .6s ease; }
        .itr-in .itr-fill-v { transform: scaleY(1); }

        @media (prefers-reduced-motion: reduce) {
          .itr-reveal { opacity: 1; transform: none; transition: none; }
          .itr-fill, .itr-fill-v { transform: none; transition: none; }
          .itr-node, .itr-card, .itr-btn, .itr-arrow { transition: none !important; }
          .itr-step:hover .itr-card, .itr-step:focus-within .itr-card, .itr-btn:hover { transform: none; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute -left-40 -top-40 h-104 w-104 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.1 }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -bottom-37.5 h-104 w-104 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${indigo}, transparent 70%)`, opacity: 0.1 }}
        aria-hidden="true"
      />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            How It Works
          </span>

          <h2 id="how-heading" className="itr-display mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl" style={{ color: ink }}>
            Tax filing made
            <span className="block" style={{ color: emeraldDark }}>simple and stress-free</span>
          </h2>

          <p className="itr-sans mx-auto mt-3 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8" style={{ color: inkSoft }}>
            From entering your details to completing your return, MyITRonline helps you move through every step with confidence.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className={`relative mt-14 lg:mt-16 ${visible ? 'itr-in' : ''}`}>
          {/* Desktop connector: dashed track + animated fill */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8.75 hidden lg:block" aria-hidden="true">
            <div className="h-px w-full" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${line} 0 8px, transparent 8px 16px)` }} />
            <div className="itr-fill absolute left-0 -top-px h-0.75 w-full rounded-full" style={{ background: `linear-gradient(90deg, ${emerald}, ${indigo})` }} />
          </div>

          <ol className="grid gap-0 lg:grid-cols-4 lg:gap-6" role="list">
            {steps.map((step, index) => {
              const last = index === steps.length - 1
              return (
                <li
                  key={step.number}
                  className="itr-step itr-reveal flex gap-4 lg:block"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Node + mobile vertical connector */}
                  <div className="flex flex-col items-center lg:items-center">
                    <div
                      className="itr-node relative z-10 flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl"
                      style={{ backgroundColor: paper, border: `1px solid ${line}`, color: emeraldDark, boxShadow: '0 10px 30px -20px rgba(18,20,28,0.25)' }}
                    >
                      {step.icon}
                      <span
                        className="itr-mono absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold"
                        style={{ border: `2px solid ${bg}`, backgroundColor: emeraldDark, color: '#fff' }}
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>
                    </div>
                    {!last && (
                      <div className="relative my-2 w-0.5 flex-1 overflow-hidden lg:hidden" style={{ backgroundColor: line, minHeight: 24 }} aria-hidden="true">
                        <div className="itr-fill-v absolute inset-0" style={{ background: `linear-gradient(180deg, ${emerald}, ${indigo})`, transitionDelay: `${index * 120 + 200}ms` }} />
                      </div>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`min-w-0 flex-1 lg:mt-6 ${last ? '' : 'pb-6 lg:pb-0'}`}>
                    <article
                      className="itr-card flex h-full flex-col rounded-2xl p-6"
                      style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 12px 30px -24px rgba(18,20,28,0.18)' }}
                    >
                      <span className="itr-mono text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: emeraldDark }}>
                        Step {step.number}
                      </span>

                      <h3 className="itr-display mt-3 text-xl font-medium" style={{ color: ink }}>
                        {step.title}
                      </h3>

                      <p className="itr-sans mt-3 text-sm leading-6" style={{ color: inkSoft }}>
                        {step.description}
                      </p>

                      <p
                        className="itr-sans mt-5 inline-flex items-start gap-2 self-start rounded-xl px-3 py-2 text-xs font-medium leading-5 lg:mt-auto"
                        style={{ backgroundColor: emeraldSoft, color: emeraldDark }}
                      >
                        <CheckIcon />
                        <span>{step.tip}</span>
                      </p>
                    </article>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Prepare + CTA */}
        <div
          className="relative mt-14 overflow-hidden rounded-3xl"
          style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 20px 40px -30px rgba(18,20,28,0.2)' }}
        >
          <div className="absolute left-0 top-0 h-full w-1" style={{ background: `linear-gradient(180deg, ${emerald}, ${indigo})` }} aria-hidden="true" />

          <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:px-10">
            <div>
              <h3 className="itr-display text-xl font-medium sm:text-2xl" style={{ color: ink }}>
                Ready to get started?
              </h3>
              <p className="itr-sans mt-2 text-sm leading-6" style={{ color: inkSoft }}>
                Calculate your estimated tax first, then file when you&apos;re ready. It only takes a minute to see where you stand.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#calculator"
                  className="itr-btn itr-sans inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white"
                  style={{ backgroundColor: emeraldDark }}
                >
                  Calculate your tax
                  <ArrowIcon />
                </a>
                <a
                  href="#file"
                  className="itr-btn itr-sans inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold"
                  style={{ border: `1px solid ${line}`, color: ink, backgroundColor: paper }}
                >
                  Start filing
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-5" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
              <p className="itr-sans text-sm font-semibold" style={{ color: ink }}>
                Keep these handy
              </p>
              <ul className="itr-sans mt-3 space-y-2.5 text-sm" role="list">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5" style={{ color: emeraldDark }}>
                    <CheckIcon />
                    <span style={{ color: inkSoft }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="itr-sans mt-3 text-xs leading-5" style={{ color: inkFaint }}>
                What you need depends on your income sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}