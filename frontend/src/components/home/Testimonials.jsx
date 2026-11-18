import { useCallback, useEffect, useRef, useState } from 'react'

const sampleTestimonials = [
  { name: 'Rahul Sharma', role: 'IT Professional', location: 'New Delhi', filed: 'ITR-1', time: '12 min', savings: '\u20B918,500', text: 'The entire tax filing process felt simple and easy. I could understand what I was doing at every step.' },
  { name: 'Priya Verma', role: 'Business Owner', location: 'Mumbai', filed: 'ITR-3', time: '18 min', savings: '\u20B932,400', text: 'The tax calculator helped me understand my estimated tax before filing. Everything was presented clearly.' },
  { name: 'Amit Kumar', role: 'Software Developer', location: 'Bengaluru', filed: 'ITR-1', time: '10 min', savings: '\u20B921,700', text: 'I liked how clean and straightforward everything was. It removed a lot of the confusion around filing.' },
  { name: 'Neha Singh', role: 'Freelancer', location: 'Pune', filed: 'ITR-3', time: '22 min', savings: '\u20B927,800', text: 'The step-by-step experience made filing much less stressful. I always knew what information I needed next.' },
  { name: 'Arjun Mehta', role: 'Salaried Professional', location: 'Gurugram', filed: 'ITR-1', time: '11 min', savings: '\u20B914,200', text: 'The interface is modern and easy to use. Being able to estimate my tax before filing was especially helpful.' },
  { name: 'Kavya Sharma', role: 'Marketing Professional', location: 'Hyderabad', filed: 'ITR-1', time: '13 min', savings: '\u20B916,900', text: 'A very clean experience. I could quickly understand my tax situation without complicated information.' },
]

const AUTOPLAY_MS = 8000

const bg = '#F5F6FA'
const paper = '#FFFFFF'
const ink = '#12141C'
const inkSoft = 'rgba(18,20,28,0.68)'
const inkFaint = 'rgba(18,20,28,0.60)'
const line = 'rgba(18,20,28,0.10)'
const emerald = '#0E9D63'
const emeraldDark = '#0A7A4C'
const emeraldSoft = 'rgba(14,157,99,0.10)'
const indigo = '#4B5CE0'
const amber = '#C88A11'

const initialsOf = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

const Avatar = ({ item, size = 44, radius = 'rounded-xl', text = 'text-sm' }) => (
  <div
    className={`itr-display flex shrink-0 items-center justify-center font-semibold text-white ${radius} ${text}`}
    style={{ width: size, height: size, background: `linear-gradient(135deg, ${emerald}, ${indigo})` }}
    aria-hidden="true"
  >
    {item.initials || initialsOf(item.name)}
  </div>
)

const Stars = ({ rating }) => (
  <div className="flex gap-0.5" role="img" aria-label={`Rated ${rating} out of 5`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <svg key={n} viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
        <path
          d="m10 1.8 2.4 5 5.4.7-4 3.8 1 5.4L10 14l-4.8 2.7 1-5.4-4-3.8 5.4-.7z"
          fill={n <= Math.round(rating) ? amber : 'none'}
          stroke={amber}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ))}
  </div>
)

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
    <path d={dir === 'left' ? 'm12.5 4.5-5.5 5.5 5.5 5.5' : 'm7.5 4.5 5.5 5.5-5.5 5.5'} stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="itr-arrow h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Testimonials({ items = sampleTestimonials, summary }) {
  const total = items.length
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  const barRef = useRef(null)
  const elapsed = useRef(0)
  const tabRefs = useRef([])
  const swipeStart = useRef(null)

  // Respect the "reduce motion" system setting: no autoplay at all
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  const playing = !reduced && !userPaused && !hovered && !focused && total > 1

  const goTo = useCallback(
    (index) => {
      elapsed.current = 0
      setCurrent((((index % total) + total) % total) || 0)
    },
    [total],
  )

  // Autoplay with a progress bar that pauses and resumes exactly where it left off
  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    const id = setInterval(() => {
      const now = performance.now()
      elapsed.current += now - last
      last = now
      if (barRef.current) barRef.current.style.transform = `scaleX(${Math.min(elapsed.current / AUTOPLAY_MS, 1)})`
      if (elapsed.current >= AUTOPLAY_MS) {
        elapsed.current = 0
        setCurrent((c) => (c + 1) % total)
      }
    }, 80)
    return () => clearInterval(id)
  }, [playing, total])

  // New slide: restart the progress bar
  useEffect(() => {
    elapsed.current = 0
    if (barRef.current) barRef.current.style.transform = 'scaleX(0)'
  }, [current])

  if (!total) return null

  const item = items[current]

  const onTabKeyDown = (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
    let next = null
    if (step) next = (current + step + total) % total
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = total - 1
    if (next === null) return
    e.preventDefault()
    goTo(next)
    tabRefs.current[next]?.focus()
  }

  const onPointerDown = (e) => {
    swipeStart.current = e.clientX
  }
  const onPointerUp = (e) => {
    if (swipeStart.current == null) return
    const delta = e.clientX - swipeStart.current
    swipeStart.current = null
    if (Math.abs(delta) > 50) goTo(current + (delta < 0 ? 1 : -1))
  }

  const showDevBanner = items === sampleTestimonials && Boolean(import.meta.env?.DEV)
  const hasSavings = items.some((t) => t.savings)
  const hasChips = item.filed || item.time

  return (
    <section
      id="testimonials"
      aria-labelledby="stories-heading"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-10"
      style={{ backgroundColor: bg }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }

        .itr-nav-btn { transition: transform .2s ease, border-color .2s ease, background-color .2s ease, color .2s ease; }
        .itr-nav-btn:hover { background-color: ${emeraldDark}; border-color: ${emeraldDark}; color: #fff; }
        .itr-nav-btn:focus-visible, .itr-tab:focus-visible, .itr-cta:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; }
        .itr-cta { transition: transform .2s ease, box-shadow .2s ease; }
        .itr-cta:hover { transform: translateY(-2px); }
        .itr-arrow { transition: transform .2s ease; }
        .itr-cta:hover .itr-arrow { transform: translateX(4px); }

        .itr-tab { transition: background-color .25s ease, border-color .25s ease, box-shadow .25s ease; border: 1px solid transparent; }
        .itr-tab:hover { background-color: rgba(255,255,255,0.7); }
        .itr-tab[aria-selected='true'] { background-color: ${paper}; border-color: ${emerald}55; box-shadow: 0 16px 32px -22px rgba(18,20,28,0.25); }

        .itr-list { scrollbar-width: none; scroll-snap-type: x mandatory; }
        .itr-list::-webkit-scrollbar { display: none; }

        @keyframes itr-fade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .itr-fade { animation: itr-fade .5s cubic-bezier(.2,.7,.2,1); }

        @media (prefers-reduced-motion: reduce) {
          .itr-fade { animation: none; }
          .itr-nav-btn, .itr-cta, .itr-arrow, .itr-tab { transition: none; }
          .itr-cta:hover { transform: none; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute -left-40 -top-40 h-104 w-104 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${indigo}, transparent 70%)`, opacity: 0.1 }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -bottom-37.5 h-104 w-104 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.1 }}
        aria-hidden="true"
      />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            Customer Stories
          </span>

          <h2 id="stories-heading" className="itr-display mt-6 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl" style={{ color: ink }}>
            Loved by people who want
            <span className="block" style={{ color: emeraldDark }}>simpler taxes</span>
          </h2>

          <p className="itr-sans mx-auto mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8" style={{ color: inkSoft }}>
            See what people say about filing with MyITRonline.
          </p>

          {/* Overall score: shown only when you pass a real summary */}
          {summary?.rating && (
            <div
              className="itr-sans mt-6 inline-flex items-center gap-3 rounded-full px-5 py-2.5"
              style={{ backgroundColor: paper, border: `1px solid ${line}` }}
            >
              <Stars rating={summary.rating} />
              <span className="h-4 w-px" style={{ backgroundColor: line }} aria-hidden="true" />
              <span className="text-xs font-semibold" style={{ color: inkSoft }}>
                {summary.rating}/5{summary.count ? ` from ${summary.count} reviews` : ''}
              </span>
            </div>
          )}

          {showDevBanner && (
            <p className="itr-mono mx-auto mt-5 max-w-md rounded-lg px-3 py-2 text-[11px] font-semibold" style={{ backgroundColor: 'rgba(200,138,17,0.14)', color: '#8A5E0A' }}>
              DEV ONLY: sample reviews. Replace with real, consented customer reviews before launch.
            </p>
          )}
        </div>

        {/* Stage */}
        <div
          className="mt-12 grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-8"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false)
          }}
        >
          {/* Featured quote */}
          <div
            className="relative overflow-hidden rounded-4xl"
            style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 30px 60px -34px rgba(18,20,28,0.28)', touchAction: 'pan-y' }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <div className="absolute left-0 top-0 h-full w-1" style={{ background: `linear-gradient(180deg, ${emerald}, ${indigo})` }} aria-hidden="true" />

            <div
              role="tabpanel"
              id="story-panel"
              aria-labelledby={`story-tab-${current}`}
              aria-live={playing ? 'off' : 'polite'}
              className="flex h-full flex-col p-7 sm:p-10"
            >
              <div key={current} className="itr-fade flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: emeraldSoft, color: emeraldDark }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                      <path d="M9.5 6C6.5 7 4 9.8 4 13.5V18h6v-6H7c0-2 1-3.4 3.2-4.2zM19.5 6c-3 1-5.5 3.8-5.5 7.5V18h6v-6h-3c0-2 1-3.4 3.2-4.2z" />
                    </svg>
                  </span>
                  {item.rating ? <Stars rating={item.rating} /> : null}
                </div>

                <blockquote className="itr-display mt-7 flex-1 text-2xl font-medium leading-[1.35] tracking-tight sm:text-[1.75rem]" style={{ color: ink }}>
                  {item.text}
                </blockquote>

                <div className="itr-sans mt-8 flex items-center gap-4">
                  <Avatar item={item} size={52} radius="rounded-2xl" text="text-base" />
                  <div className="min-w-0">
                    <p className="truncate text-base font-bold" style={{ color: ink }}>
                      {item.name}
                    </p>
                    <p className="mt-0.5 truncate text-sm" style={{ color: inkFaint }}>
                      {item.role}
                      {item.location ? <span aria-hidden="true"> · </span> : null}
                      {item.location}
                    </p>
                  </div>
                  {item.verified && (
                    <span className="itr-mono ml-auto shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold" style={{ backgroundColor: emeraldSoft, color: emeraldDark }}>
                      Verified
                    </span>
                  )}
                </div>

                {(hasChips || item.savings) && (
                  <div className="itr-sans mt-6 flex flex-wrap items-center gap-2 border-t pt-5" style={{ borderStyle: 'dashed', borderColor: line }}>
                    {item.filed && (
                      <span className="itr-mono rounded-lg px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: bg, border: `1px solid ${line}`, color: inkSoft }}>
                        Filed {item.filed}
                      </span>
                    )}
                    {item.time && (
                      <span className="itr-mono rounded-lg px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: bg, border: `1px solid ${line}`, color: inkSoft }}>
                        Took {item.time}
                      </span>
                    )}
                    {item.savings && (
                      <span className="itr-mono rounded-lg px-3 py-1.5 text-xs font-semibold" style={{ backgroundColor: emeraldSoft, color: emeraldDark }}>
                        Estimated savings {item.savings}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Controls */}
              {total > 1 && (
                <div className="itr-sans mt-7 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => goTo(current - 1)}
                      className="itr-nav-btn flex h-11 w-11 items-center justify-center rounded-full"
                      style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
                      aria-label="Previous testimonial"
                    >
                      <Chevron dir="left" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(current + 1)}
                      className="itr-nav-btn flex h-11 w-11 items-center justify-center rounded-full"
                      style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
                      aria-label="Next testimonial"
                    >
                      <Chevron dir="right" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="itr-mono text-xs font-semibold" style={{ color: inkFaint }} aria-hidden="true">
                      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                    {!reduced && (
                      <button
                        type="button"
                        onClick={() => setUserPaused((p) => !p)}
                        className="itr-nav-btn inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-xs font-semibold"
                        style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
                        aria-label={userPaused ? 'Resume automatic rotation' : 'Pause automatic rotation'}
                      >
                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                          {userPaused ? <path d="M6 4.5v11l9-5.5z" /> : <path d="M5.5 4h3.5v12H5.5zM11 4h3.5v12H11z" />}
                        </svg>
                        {userPaused ? 'Play' : 'Pause'}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* People list: vertical on desktop, swipeable row on mobile */}
          <div
            role="tablist"
            aria-label="Choose a customer story"
            aria-orientation="vertical"
            onKeyDown={onTabKeyDown}
            className="itr-list -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:justify-between lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {items.map((person, index) => {
              const active = index === current
              return (
                <button
                  key={person.name}
                  ref={(el) => (tabRefs.current[index] = el)}
                  type="button"
                  role="tab"
                  id={`story-tab-${index}`}
                  aria-selected={active}
                  aria-controls="story-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => goTo(index)}
                  className="itr-tab itr-sans relative flex w-[230px] shrink-0 snap-start items-center gap-3.5 overflow-hidden rounded-2xl px-4 py-3.5 text-left lg:w-auto lg:shrink"
                >
                  <Avatar item={person} size={42} radius="rounded-xl" text="text-sm" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold" style={{ color: ink }}>
                      {person.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs" style={{ color: inkFaint }}>
                      {person.role}
                      {person.location ? ` · ${person.location}` : ''}
                    </span>
                  </span>

                  {active && !reduced && total > 1 && (
                    <span className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden" style={{ backgroundColor: line }} aria-hidden="true">
                      <span ref={barRef} className="block h-full origin-left" style={{ backgroundColor: emerald, transform: 'scaleX(0)' }} />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#calculator"
            className="itr-cta itr-sans inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white"
            style={{ backgroundColor: emeraldDark }}
          >
            Calculate your tax
            <ArrowIcon />
          </a>
          <a
            href="#how-it-works"
            className="itr-cta itr-sans inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold"
            style={{ border: `1px solid ${line}`, backgroundColor: paper, color: ink }}
          >
            See how it works
          </a>
        </div>

        {hasSavings && (
          <p className="itr-sans mx-auto mt-8 max-w-xl text-center text-xs leading-5" style={{ color: inkFaint }}>
            Savings figures are individual examples. Your results will vary based on your income, deductions and regime.
          </p>
        )}
      </div>
    </section>
  )
}