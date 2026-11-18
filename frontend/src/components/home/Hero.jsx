import { useEffect, useState } from 'react'

const bg = '#F5F6FA'
const paper = '#FFFFFF'
const ink = '#12141C'
const inkSoft = 'rgba(18,20,28,0.70)'
const inkFaint = 'rgba(18,20,28,0.60)'
const line = 'rgba(18,20,28,0.10)'
const emerald = '#0E9D63'
const emeraldDeep = '#0A7F4F'
const emeraldText = '#0A7A4C'
const emeraldSoft = 'rgba(14,157,99,0.12)'
const indigo = '#4B5CE0'
const indigoSoft = 'rgba(75,92,224,0.10)'

const defaultStats = [
  { value: '4 steps', label: 'Guided filing' },
  { value: '2 regimes', label: 'Compared for you' },
  { value: '100%', label: 'Digital process' },
]

const perks = ['Free to start', 'Old vs new regime compared', 'Step-by-step guidance']

const steps = [
  { n: '01', title: 'Enter details', hint: 'Income and basics' },
  { n: '02', title: 'Check tax', hint: 'Compare regimes' },
  { n: '03', title: 'Review', hint: 'Double-check everything' },
  { n: '04', title: 'File ITR', hint: 'E-verify and track' },
]

const AUTOPLAY_MS = 6500

const Check = ({ size = 16, color = emeraldText }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill={emeraldSoft} />
    <path d="M4.7 8.3l2.2 2.2 4.4-4.6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function MockField({ label, value, children }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: inkFaint }}>{label}</p>
      <div className="mt-1.5 flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
        <span className="itr-mono text-sm font-medium" style={{ color: ink }}>{value}</span>
        {children}
      </div>
    </div>
  )
}

function Panel({ index }) {
  if (index === 0) {
    return (
      <div>
        <h3 className="itr-display text-xl font-medium" style={{ color: ink }}>Your details</h3>
        <p className="mt-1 text-sm" style={{ color: inkSoft }}>We use these to prepare your return.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <MockField label="Full name" value="Sample User" />
          <MockField label="PAN" value="ABCDE1234F" />
        </div>
        <div className="mt-4">
          <MockField label="Annual salary (Form 16)" value={'\u20B9 18,40,000'}>
            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: emeraldSoft, color: emeraldText }}>
              <Check size={12} /> Form 16 uploaded
            </span>
          </MockField>
        </div>
      </div>
    )
  }

  if (index === 1) {
    const tiles = [
      { name: 'New regime', amount: '\u20B9 1,85,000', best: true },
      { name: 'Old regime', amount: '\u20B9 1,98,500', best: false },
    ]
    return (
      <div>
        <h3 className="itr-display text-xl font-medium" style={{ color: ink }}>Compare your tax</h3>
        <p className="mt-1 text-sm" style={{ color: inkSoft }}>See both regimes side by side before you choose.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {tiles.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-4"
              style={{ backgroundColor: t.best ? emeraldSoft : bg, border: `1.5px solid ${t.best ? emerald : line}` }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold" style={{ color: ink }}>{t.name}</p>
                {t.best && (
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ backgroundColor: emeraldDeep, color: '#fff' }}>
                    Lower in this example
                  </span>
                )}
              </div>
              <p className="itr-mono mt-3 text-2xl font-semibold" style={{ color: t.best ? emeraldText : ink }}>{t.amount}</p>
              <p className="mt-1 text-[11px]" style={{ color: inkFaint }}>Estimated tax</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs" style={{ color: inkFaint }}>Deductions applied: 80C {'\u20B9'}1,50,000 &middot; 80D {'\u20B9'}60,000</p>
      </div>
    )
  }

  if (index === 2) {
    const rows = ['Personal information', 'Income details', 'Deductions (80C, 80D)', 'Bank account for refund']
    return (
      <div>
        <h3 className="itr-display text-xl font-medium" style={{ color: ink }}>Review your return</h3>
        <p className="mt-1 text-sm" style={{ color: inkSoft }}>One last look before you file.</p>
        <ul className="mt-5 space-y-2.5" role="list">
          {rows.map((r) => (
            <li key={r} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
              <span className="font-medium" style={{ color: ink }}>{r}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: emeraldText }}>
                <Check /> Looks good
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const timeline = ['Submitted', 'E-verified', 'Processed']
  return (
    <div>
      <h3 className="itr-display text-xl font-medium" style={{ color: ink }}>File and track</h3>
      <p className="mt-1 text-sm" style={{ color: inkSoft }}>Submit, e-verify, then follow your return&apos;s status.</p>

      <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
        <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: inkFaint }}>E-verify with</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {['Aadhaar OTP', 'Net banking'].map((m, i) => (
            <span
              key={m}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold"
              style={{ border: `1.5px solid ${i === 0 ? emerald : line}`, backgroundColor: i === 0 ? emeraldSoft : paper, color: i === 0 ? emeraldText : inkSoft }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1" aria-hidden="true">
        {timeline.map((t, i) => (
          <div key={t} className="flex flex-1 items-center gap-1">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: i === 0 ? emeraldDeep : indigoSoft, color: i === 0 ? '#fff' : indigo }}>
                {i + 1}
              </span>
              <span className="text-xs font-semibold" style={{ color: ink }}>{t}</span>
            </div>
            {i < timeline.length - 1 && <span className="mx-1 h-px flex-1" style={{ backgroundColor: line }} />}
          </div>
        ))}
      </div>

      <div className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white sm:w-auto" style={{ backgroundColor: emeraldDeep }} aria-hidden="true">
        Submit return <span>&rarr;</span>
      </div>
    </div>
  )
}

export default function HeroTour({ badge = 'Income tax filing, made simple', stats = defaultStats, socialProof = null }) {
  const [step, setStep] = useState(0)
  const [auto, setAuto] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (!window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  const playing = auto && !hovered && !focused && !reduced

  useEffect(() => {
    if (!playing) return
    const t = setTimeout(() => setStep((s) => (s + 1) % steps.length), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [playing, step])

  const choose = (i) => {
    setAuto(false) 
    setStep(i)
  }

  const onTabKeyDown = (e) => {
    const move = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    if (!move) return
    e.preventDefault()
    const next = (step + move + steps.length) % steps.length
    choose(next)
    document.getElementById(`tour-tab-${next}`)?.focus()
  }

  return (
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: bg }} aria-labelledby="hero-heading">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px;
          -webkit-mask-image: radial-gradient(ellipse 75% 60% at 50% 30%, #000 30%, transparent 100%); mask-image: radial-gradient(ellipse 75% 60% at 50% 30%, #000 30%, transparent 100%); }

        @keyframes itr-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes itr-swap { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes itr-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(14,157,99,.5); } 70% { box-shadow: 0 0 0 7px rgba(14,157,99,0); } }
        .itr-r1 { animation: itr-rise .7s ease-out .05s both; }
        .itr-r2 { animation: itr-rise .7s ease-out .15s both; }
        .itr-r3 { animation: itr-rise .7s ease-out .27s both; }
        .itr-r4 { animation: itr-rise .7s ease-out .39s both; }
        .itr-r5 { animation: itr-rise .8s cubic-bezier(.2,.7,.2,1) .5s both; }
        .itr-swap { animation: itr-swap .4s ease; }
        .itr-live-dot { animation: itr-pulse 2.2s ease-out infinite; }

        .itr-cta-primary { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .itr-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 32px -10px ${emerald}88; background-color: #086B42; }
        .itr-cta-primary .itr-arrow { display: inline-block; transition: transform .2s ease; }
        .itr-cta-primary:hover .itr-arrow { transform: translateX(4px); }
        .itr-cta-ghost { transition: background-color .2s ease, border-color .2s ease, transform .2s ease; }
        .itr-cta-ghost:hover { background-color: ${emeraldSoft}; border-color: ${emerald}; transform: translateY(-2px); }
        .itr-focus:focus-visible, .itr-tab:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; border-radius: 12px; }

        .itr-tab { transition: background-color .2s ease, border-color .2s ease; border: 1px solid transparent; }
        .itr-tab:hover { background-color: rgba(255,255,255,.8); }
        .itr-tab[aria-selected='true'] { background-color: ${paper}; border-color: ${emerald}66; box-shadow: 0 12px 24px -18px rgba(18,20,28,.3); }
        .itr-tabs { scrollbar-width: none; }
        .itr-tabs::-webkit-scrollbar { display: none; }

        @media (prefers-reduced-motion: reduce) {
          .itr-r1, .itr-r2, .itr-r3, .itr-r4, .itr-r5, .itr-swap, .itr-live-dot { animation: none !important; }
          .itr-cta-primary, .itr-cta-ghost, .itr-tab, .itr-cta-primary .itr-arrow { transition: none; }
          .itr-cta-primary:hover, .itr-cta-ghost:hover { transform: none; }
        }
      `}</style>

      <div className="pointer-events-none absolute -left-44 -top-40 h-128 w-lg rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${emerald}, transparent 70%)`, opacity: 0.16 }} aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-40 h-120 w-120 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${indigo}, transparent 70%)`, opacity: 0.13 }} aria-hidden="true" />
      <div className="itr-dotgrid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-14 lg:pt-14">
        {/* Copy */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="itr-mono itr-r1 inline-flex items-center gap-2.5 rounded-full py-1.5 pl-3 pr-4 text-[11px] font-semibold uppercase tracking-wider"
            style={{ border: `1px solid ${line}`, backgroundColor: 'rgba(255,255,255,0.85)', color: inkSoft, backdropFilter: 'blur(8px)' }}
          >
            <span className="itr-live-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} aria-hidden="true" />
            {badge}
          </div>

          <h1
            id="hero-heading"
            className="itr-display itr-r2 mt-6 font-medium leading-[1.06] tracking-tight"
            style={{ color: ink, fontSize: 'clamp(2.4rem, 1.2rem + 5vw, 4.6rem)' }}
          >
            File your income tax return{' '}
            <span style={{ backgroundImage: `linear-gradient(transparent 62%, rgba(14,157,99,0.24) 62%)`, color: emeraldText }}>
              <span className="italic">in minutes</span>
            </span>
          </h1>

          <p className="itr-sans itr-r3 mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8" style={{ color: inkSoft }}>
            Upload your Form 16, answer a few quick questions, and we&apos;ll help you find the deductions you may qualify
            for &mdash; no queues, no paperwork, no jargon.
          </p>

          <div className="itr-r4 mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="itr-sans itr-cta-primary itr-focus inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-4 text-base font-semibold text-white"
              style={{ backgroundColor: emeraldDeep, boxShadow: `0 14px 28px -10px ${emerald}88, inset 0 1px 0 rgba(255,255,255,0.22)` }}
            >
              File my return
              <span className="itr-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#calculator"
              className="itr-sans itr-cta-ghost itr-focus inline-flex items-center justify-center rounded-xl border px-7 py-4 text-base font-semibold"
              style={{ borderColor: line, color: ink, backgroundColor: paper }}
            >
              Estimate my tax
            </a>
          </div>

          <ul className="itr-sans itr-r4 mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2" style={{ color: inkSoft }} role="list">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-1.5 text-[13px] font-medium">
                <Check size={15} />
                {perk}
              </li>
            ))}
          </ul>

          {socialProof && (
            <div className="itr-sans itr-r4 mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              {socialProof.avatars?.length > 0 && (
                <div className="flex -space-x-2.5" aria-hidden="true">
                  {socialProof.avatars.map((a) => (
                    <span key={a.initials} className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-semibold text-white" style={{ backgroundColor: a.color || indigo, border: `2.5px solid ${bg}` }}>
                      {a.initials}
                    </span>
                  ))}
                </div>
              )}
              <div className="text-left">
                {socialProof.rating && (
                  <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${socialProof.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M8 1.2l2 4.3 4.7.6-3.4 3.2.9 4.7L8 11.7 3.8 14l.9-4.7L1.3 6.1 6 5.5z" fill={i < Math.round(socialProof.rating) ? '#F2A71B' : 'none'} stroke="#F2A71B" strokeWidth="1" />
                      </svg>
                    ))}
                  </div>
                )}
                <p className="text-[13px]" style={{ color: inkSoft }}>{socialProof.text}</p>
              </div>
            </div>
          )}
        </div>

        {/* Product tour */}
        <div
          className="itr-r5 mx-auto mt-14 max-w-5xl sm:mt-16"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false)
          }}
        >
          <div
            className="overflow-hidden rounded-[1.75rem]"
            style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 50px 90px -40px rgba(18,20,28,0.35), 0 2px 6px rgba(18,20,28,0.05)' }}
          >
            {/* window bar */}
            <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: `1px solid ${line}`, backgroundColor: 'rgba(245,246,250,0.8)' }}>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'rgba(18,20,28,0.14)' }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'rgba(18,20,28,0.14)' }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'rgba(18,20,28,0.14)' }} />
              </div>
              <span className="itr-mono mx-auto rounded-full px-4 py-1 text-[11px] font-medium" style={{ backgroundColor: paper, border: `1px solid ${line}`, color: inkFaint }}>
                myitronline.com
              </span>
              <span className="itr-sans hidden rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide sm:inline-block" style={{ backgroundColor: indigoSoft, color: indigo }}>
                Sample preview
              </span>
            </div>

            <div className="grid lg:grid-cols-[230px_1fr]">
              {/* steps */}
              <div
                role="tablist"
                aria-label="Filing steps preview"
                aria-orientation="vertical"
                onKeyDown={onTabKeyDown}
                className="itr-tabs flex gap-2 overflow-x-auto p-3 lg:flex-col lg:overflow-visible lg:p-4"
                style={{ backgroundColor: bg, borderRight: `1px solid ${line}` }}
              >
                {steps.map((s, i) => {
                  const active = i === step
                  return (
                    <button
                      key={s.n}
                      id={`tour-tab-${i}`}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-controls="tour-panel"
                      tabIndex={active ? 0 : -1}
                      onClick={() => choose(i)}
                      className="itr-tab itr-sans flex shrink-0 items-center gap-3 rounded-xl px-3.5 py-3 text-left"
                    >
                      <span
                        className="itr-mono flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                        style={{ backgroundColor: active ? emeraldDeep : 'rgba(18,20,28,0.07)', color: active ? '#fff' : inkSoft }}
                      >
                        {s.n}
                      </span>
                      <span className="min-w-0">
                        <span className="block whitespace-nowrap text-sm font-bold" style={{ color: ink }}>{s.title}</span>
                        <span className="hidden text-xs lg:block" style={{ color: inkFaint }}>{s.hint}</span>
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* panel */}
              <div
                id="tour-panel"
                role="tabpanel"
                aria-labelledby={`tour-tab-${step}`}
                aria-live={playing ? 'off' : 'polite'}
                className="itr-sans min-h-85 p-5 sm:p-8"
              >
                <div key={step} className="itr-swap">
                  <Panel index={step} />
                </div>
              </div>
            </div>
          </div>

          <p className="itr-sans mt-4 text-center text-xs" style={{ color: inkFaint }}>
            Illustrative preview of the filing flow. Names and figures are examples only.
          </p>
        </div>

        {/* Stats */}
        {stats?.length > 0 && (
          <dl
            className="itr-sans mx-auto mt-10 grid max-w-2xl grid-cols-3 rounded-2xl py-4"
            style={{ backgroundColor: 'rgba(255,255,255,0.7)', border: `1px solid ${line}`, backdropFilter: 'blur(8px)' }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="px-3 text-center sm:px-5" style={{ borderLeft: i === 0 ? 'none' : `1px dashed ${line}` }}>
                <dd className="itr-mono text-base font-semibold sm:text-xl" style={{ color: ink }}>{stat.value}</dd>
                <dt className="mt-1 text-[10px] uppercase tracking-wide sm:text-[11px]" style={{ color: inkFaint }}>{stat.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}