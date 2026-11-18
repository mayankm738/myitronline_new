import { useEffect, useRef, useState } from 'react'

const iconProps = {
  viewBox: '0 0 24 24',
  className: 'h-6 w-6',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const icons = {
  secure: (
    <svg {...iconProps}>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2.5" />
    </svg>
  ),
  fast: (
    <svg {...iconProps}>
      <path d="M13 3 5 13.5h6L10 21l8-10.5h-6z" />
    </svg>
  ),
  clear: (
    <svg {...iconProps}>
      <path d="M9.5 18h5M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.2 1.1 2V16h5v-.2c0-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z" />
    </svg>
  ),
  support: (
    <svg {...iconProps}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 1.5-2 2-5 2" />
    </svg>
  ),
}

const benefits = [
  { icon: icons.secure, title: 'Secure & Private', description: 'Your financial information is handled with security and privacy in mind.' },
  { icon: icons.fast, title: 'Fast & Simple', description: 'A clean step-by-step experience helps you file without confusion.' },
  { icon: icons.clear, title: 'Easy to Understand', description: 'Clear explanations help you understand your tax, deductions and filing.' },
  { icon: icons.support, title: 'Expert Support', description: 'Get assistance whenever you need help understanding your filing.' },
]

const stats = [
  { value: '100%', label: 'Digital process' },
  { value: 'Simple', label: 'Step-by-step filing' },
  { value: 'Secure', label: 'Data-focused approach' },
]

const ArrowIcon = () => (
  <svg className="itr-arrow h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function WhyUs() {
  const paper = '#FFFFFF'
  const bg = '#F5F6FA'
  const ink = '#12141C'
  const inkSoft = 'rgba(18,20,28,0.68)'
  const inkFaint = 'rgba(18,20,28,0.60)'
  const line = 'rgba(18,20,28,0.10)'
  const emerald = '#0E9D63'
  const emeraldDark = '#0A7A4C' // text-safe on white
  const emeraldSoft = 'rgba(14,157,99,0.12)'
  const indigo = '#4B5CE0'

  // Fade the section in once it scrolls into view
  const rootRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = rootRef.current
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
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28"
      style={{ backgroundColor: paper }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.06) 1px, transparent 1px); background-size: 24px 24px; }

        .itr-benefit { position: relative; transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .itr-benefit::before { content: ''; position: absolute; left: 24px; right: 24px; top: 0; height: 3px; border-radius: 0 0 4px 4px;
          background: linear-gradient(90deg, ${emerald}, ${indigo}); transform: scaleX(0); transform-origin: left; transition: transform .35s ease; }
        .itr-benefit:hover, .itr-benefit:focus-within { transform: translateY(-5px); border-color: ${emerald}55; background-color: ${paper}; box-shadow: 0 24px 44px -26px rgba(18,20,28,0.24); }
        .itr-benefit:hover::before, .itr-benefit:focus-within::before { transform: scaleX(1); }
        .itr-benefit-icon { transition: background-color .25s ease, color .25s ease, transform .25s ease; }
        .itr-benefit:hover .itr-benefit-icon, .itr-benefit:focus-within .itr-benefit-icon { background-color: ${emerald}; color: #fff; transform: scale(1.06); }

        .itr-btn { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .itr-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -12px ${emerald}88; }
        .itr-btn:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; }
        .itr-arrow { transition: transform .2s ease; }
        .itr-btn:hover .itr-arrow { transform: translateX(4px); }

        .itr-reveal { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1); }
        .itr-in .itr-reveal { opacity: 1; transform: none; }

        @media (prefers-reduced-motion: reduce) {
          .itr-reveal { opacity: 1; transform: none; transition: none; }
          .itr-benefit, .itr-benefit-icon, .itr-btn, .itr-arrow, .itr-benefit::before { transition: none !important; }
          .itr-benefit:hover, .itr-benefit:focus-within, .itr-btn:hover { transform: none; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.08 }}
        aria-hidden="true"
      />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div ref={rootRef} className={`relative mx-auto max-w-7xl ${visible ? 'itr-in' : ''}`}>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: message */}
          <div className="itr-reveal">
            <span
              className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
              style={{ border: `1px solid ${line}`, backgroundColor: bg, color: inkSoft }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
              Why MyITRonline
            </span>

            <h2
              id="why-heading"
              className="itr-display mt-6 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: ink }}
            >
              Tax filing designed
              <span className="block" style={{ color: emeraldDark }}>around you</span>
            </h2>

            <p className="itr-sans mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8" style={{ color: inkSoft }}>
              We believe filing your taxes shouldn&apos;t feel complicated. MyITRonline brings everything together in one simple, transparent experience.
            </p>

            {/* Stats */}
            <dl className="itr-sans mt-9 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl px-4 py-4"
                  style={{ backgroundColor: bg, border: `1px solid ${line}` }}
                >
                  <dt className="text-[11px] font-medium uppercase leading-4 tracking-wide" style={{ color: inkFaint }}>
                    {stat.label}
                  </dt>
                  <dd className="itr-display mt-1.5 text-xl font-medium sm:text-2xl" style={{ color: ink }}>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#calculator"
                className="itr-btn itr-sans inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white"
                style={{ backgroundColor: emeraldDark }}
              >
                Calculate your tax
                <ArrowIcon />
              </a>
              <a
                href="#expert"
                className="itr-btn itr-sans inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold"
                style={{ border: `1px solid ${line}`, color: ink, backgroundColor: paper }}
              >
                Talk to an expert
              </a>
            </div>
          </div>

          {/* Right: benefits */}
          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {benefits.map((benefit, index) => (
              <li
                key={benefit.title}
                className="itr-reveal flex"
                style={{ transitionDelay: `${index * 110 + 150}ms` }}
              >
                <article
                  className="itr-benefit w-full rounded-2xl p-6"
                  style={{ backgroundColor: bg, border: `1px solid ${line}` }}
                >
                  <div
                    className="itr-benefit-icon flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: emeraldSoft, color: emeraldDark }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="itr-display mt-5 text-lg font-medium" style={{ color: ink }}>
                    {benefit.title}
                  </h3>
                  <p className="itr-sans mt-2 text-sm leading-6" style={{ color: inkSoft }}>
                    {benefit.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}