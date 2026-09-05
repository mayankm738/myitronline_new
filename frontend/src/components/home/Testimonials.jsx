import { useEffect, useState } from 'react'

const testimonials = [
  { name: 'Rahul Sharma', role: 'IT Professional', initials: 'RS', location: 'New Delhi', filed: 'ITR-1', time: '12 min', savings: '\u20B918,500', text: 'The entire tax filing process felt simple and easy. I could understand what I was doing at every step.' },
  { name: 'Priya Verma', role: 'Business Owner', initials: 'PV', location: 'Mumbai', filed: 'ITR-3', time: '18 min', savings: '\u20B932,400', text: 'The tax calculator helped me understand my estimated tax before filing. Everything was presented clearly.' },
  { name: 'Amit Kumar', role: 'Software Developer', initials: 'AK', location: 'Bengaluru', filed: 'ITR-1', time: '10 min', savings: '\u20B921,700', text: 'I liked how clean and straightforward everything was. It removed a lot of the confusion around filing.' },
  { name: 'Neha Singh', role: 'Freelancer', initials: 'NS', location: 'Pune', filed: 'ITR-3', time: '22 min', savings: '\u20B927,800', text: 'The step-by-step experience made filing much less stressful. I always knew what information I needed next.' },
  { name: 'Arjun Mehta', role: 'Salaried Professional', initials: 'AM', location: 'Gurugram', filed: 'ITR-1', time: '11 min', savings: '\u20B914,200', text: 'The interface is modern and easy to use. Being able to estimate my tax before filing was especially helpful.' },
  { name: 'Kavya Sharma', role: 'Marketing Professional', initials: 'KS', location: 'Hyderabad', filed: 'ITR-1', time: '13 min', savings: '\u20B916,900', text: 'A very clean experience. I could quickly understand my tax situation without complicated information.' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const total = testimonials.length

  const bg = "#F5F6FA"
  const paper = "#FFFFFF"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.10)"
  const indigo = "#4B5CE0"
  const stamp = "#C43E1C"
  const amber = "#C88A11"

  const goTo = (index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((index + total) % total)
    setTimeout(() => setIsAnimating(false), 550)
  }

  const nextSlide = () => goTo(current + 1)
  const previousSlide = () => goTo(current - 1)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % total), 3500)
    return () => clearInterval(timer)
  }, [paused, total])

  const getPosition = (index) => {
    let difference = index - current
    if (difference > total / 2) difference -= total
    if (difference < -total / 2) difference += total
    return difference
  }

  return (
    <section id="testimonials" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-28" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }
        .itr-nav-btn { transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease; }
        .itr-nav-btn:hover { background-color: ${emerald}; border-color: ${emerald}; color: #fff; }
      `}</style>

      <div className="pointer-events-none absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${indigo}, transparent 70%)`, opacity: 0.1 }} />
      <div className="pointer-events-none absolute -right-40 bottom-[-150px] h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.1 }} />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            Customer Stories
          </span>

          <h2 className="itr-display mt-6 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl" style={{ color: ink }}>
            Loved by people who want
            <span className="block" style={{ color: emerald }}>simpler taxes</span>
          </h2>

          <p className="itr-sans mx-auto mt-5 max-w-xl text-lg leading-8" style={{ color: inkSoft }}>
            Real experiences from people who used MyITRonline to make tax filing simpler.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="itr-mono flex items-center gap-3 rounded-full px-5 py-2.5" style={{ backgroundColor: paper, border: `1px solid ${line}` }}>
            <div className="flex gap-0.5 text-xs" style={{ color: amber }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div className="h-4 w-px" style={{ backgroundColor: line }} />
            <span className="itr-sans text-xs font-semibold" style={{ color: inkSoft }}>4.9/5 customer experience</span>
          </div>
        </div>

        <div className="relative mt-14" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="relative hidden h-[430px] items-center justify-center overflow-hidden md:flex">
            <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-32" style={{ background: `linear-gradient(90deg, ${bg}, transparent)` }} />
            <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-32" style={{ background: `linear-gradient(270deg, ${bg}, transparent)` }} />

            {testimonials.map((testimonial, index) => {
              const position = getPosition(index)
              if (Math.abs(position) > 2) return null
              const isCenter = position === 0

              return (
                <div
                  key={testimonial.name}
                  className="absolute left-1/2 top-1/2 w-[360px]"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${position * 390}px) scale(${isCenter ? 1 : 0.88})`,
                    opacity: Math.abs(position) === 2 ? 0.18 : isCenter ? 1 : 0.5,
                    zIndex: isCenter ? 20 : 10 - Math.abs(position),
                    transition: 'transform 650ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease',
                  }}
                >
                  <TestimonialCard testimonial={testimonial} featured={isCenter} tokens={{ paper, ink, inkSoft, inkFaint, line, emerald, emeraldSoft, indigo, stamp, amber, bg }} />
                </div>
              )
            })}
          </div>

          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[current]} featured tokens={{ paper, ink, inkSoft, inkFaint, line, emerald, emeraldSoft, indigo, stamp, amber, bg }} />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button type="button" onClick={previousSlide} className="itr-nav-btn flex h-10 w-10 items-center justify-center rounded-full text-sm" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }} aria-label="Previous testimonial">&larr;</button>

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${testimonial.name}'s testimonial`}
                className="transition-all duration-500"
                style={index === current
                  ? { height: '6px', width: '32px', borderRadius: '9999px', backgroundColor: emerald }
                  : { height: '6px', width: '6px', borderRadius: '9999px', backgroundColor: line }}
              />
            ))}
          </div>

          <button type="button" onClick={nextSlide} className="itr-nav-btn flex h-10 w-10 items-center justify-center rounded-full text-sm" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }} aria-label="Next testimonial">&rarr;</button>
        </div>

        <div className="mt-12 text-center">
          <a href="#calculator" className="itr-sans itr-nav-btn group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}>
            See how MyITRonline works
            <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, featured, tokens }) {
  const { paper, ink, inkSoft, inkFaint, line, emerald, emeraldSoft, stamp, amber, bg } = tokens

  return (
    <article
      className="relative overflow-hidden rounded-[1.75rem] transition-all duration-500"
      style={{
        backgroundColor: paper,
        border: `1px solid ${featured ? emerald + '33' : line}`,
        boxShadow: featured ? '0 30px 60px -30px rgba(18,20,28,0.28)' : '0 16px 32px -24px rgba(18,20,28,0.16)',
      }}
    >
      <div className="itr-sans relative p-6">
        <div className="flex items-center gap-3">
          <div className="itr-display flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-semibold text-white" style={{ background: `linear-gradient(135deg, ${emerald}, ${tokens.indigo})` }}>
            {testimonial.initials}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-sm font-bold" style={{ color: ink }}>{testimonial.name}</p>
              <span className="flex h-4 w-4 items-center justify-center rounded-full text-[8px]" style={{ backgroundColor: emeraldSoft, color: emerald }}>&#10003;</span>
            </div>
            <p className="mt-0.5 truncate text-[11px]" style={{ color: inkFaint }}>
              {testimonial.role}<span className="mx-1.5">&bull;</span>{testimonial.location}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-0.5 text-xs" style={{ color: amber }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <span className="itr-mono rounded-full px-2.5 py-1 text-[9px] font-semibold" style={{ backgroundColor: bg, color: inkFaint }}>Verified</span>
        </div>

        <div className="relative mt-5 min-h-[108px]">
          <span className="itr-display absolute -left-1 -top-5 text-5xl leading-none" style={{ color: `${emerald}22` }}>&ldquo;</span>
          <p className="relative pl-2 text-sm leading-7" style={{ color: featured ? inkSoft : inkFaint }}>{testimonial.text}</p>
        </div>

        <div className="my-5 border-t" style={{ borderStyle: "dashed", borderColor: line }} />

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl px-3 py-2.5" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
            <p className="itr-mono text-[9px] font-bold uppercase tracking-wider" style={{ color: inkFaint }}>Return</p>
            <p className="itr-mono mt-1 text-xs font-bold" style={{ color: ink }}>{testimonial.filed}</p>
          </div>
          <div className="rounded-xl px-3 py-2.5" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
            <p className="itr-mono text-[9px] font-bold uppercase tracking-wider" style={{ color: inkFaint }}>Time</p>
            <p className="itr-mono mt-1 text-xs font-bold" style={{ color: ink }}>{testimonial.time}</p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between rounded-xl px-3.5 py-3" style={{ backgroundColor: emeraldSoft }}>
          <div>
            <p className="itr-mono text-[9px] font-bold uppercase tracking-wider" style={{ color: emerald }}>Estimated savings</p>
            <p className="itr-mono mt-0.5 text-sm font-bold" style={{ color: ink }}>{testimonial.savings}</p>
          </div>
          <span className="itr-mono rounded-full px-2 py-1 text-[8px] font-black" style={{ border: `1px solid ${stamp}55`, color: stamp }}>SAVED &#10003;</span>
        </div>
      </div>
    </article>
  )
}