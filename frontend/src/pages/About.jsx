import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles, Calculator, Compass, ShieldCheck, BookOpen, FileCheck2, Quote } from 'lucide-react'
import Testimonials from '../components/home/Testimonials'


const features = [
  { icon: Sparkles, title: 'Simple experience', text: 'Understand your tax information through a clean, easy-to-use digital experience.', tint: 'emerald' },
  { icon: Calculator, title: 'Tax calculation', text: 'Estimate your tax liability before moving ahead with your filing.', tint: 'indigo' },
  { icon: Compass, title: 'Guided filing', text: 'Follow a clear process instead of dealing with confusing tax terminology.', tint: 'emerald' },
  { icon: ShieldCheck, title: 'Privacy focused', text: 'Your financial information is handled responsibly throughout your journey.', tint: 'indigo' },
]

const journey = [
  { icon: BookOpen, title: 'Understand', text: 'See what your income, deductions and exemptions actually mean for your return.' },
  { icon: Calculator, title: 'Calculate', text: 'Get an estimate of your tax liability before you commit to anything.' },
  { icon: FileCheck2, title: 'File', text: 'Move through the ITR filing process with plain-language guidance at each step.' },
]

const stats = [
  { value: '50,000+', label: 'Returns estimated' },
  { value: '₹120Cr+', label: 'Refunds tracked' },
  { value: '4.8/5', label: 'Average rating' },
  { value: '<10 min', label: 'Average time to estimate' },
]

export default function AboutPage() {
  const bg = '#F5F6FA'
  const paper = '#FFFFFF'
  const ink = '#12141C'
  const inkSoft = 'rgba(18,20,28,0.62)'
  const inkFaint = 'rgba(18,20,28,0.42)'
  const line = 'rgba(18,20,28,0.10)'
  const emerald = '#0E9D63'
  const emeraldDeep = '#087A4C'
  const emeraldSoft = 'rgba(14,157,99,0.10)'
  const indigo = '#4B5CE0'
  const indigoSoft = 'rgba(75,92,224,0.08)'

  const tint = (t) => (t === 'emerald' ? { fg: emerald, bg: emeraldSoft } : { fg: indigo, bg: indigoSoft })

  return (
    <main style={{ backgroundColor: paper, minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .ab-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .ab-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .ab-back { transition: gap 0.2s ease, color 0.2s ease; }
        .ab-back:hover { color: ${ink} !important; gap: 10px; }
        .ab-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .ab-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -10px rgba(18,20,28,0.3); }
        .ab-row { transition: background-color 0.18s ease; }
        .ab-row:hover { background-color: ${bg}; }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-9" style={{ backgroundColor: bg }}>
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: `${emerald}1A` }} />

        <div className="relative mx-auto max-w-6xl">

          <div className="mt-1 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="ab-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl" style={{ color: ink }}>
                Making tax filing simpler for everyone.
              </h1>

              <p className="ab-sans mt-6 max-w-xl text-lg leading-8" style={{ color: inkSoft }}>
                MyITRonline is built to give you a clearer digital experience for understanding taxes, estimating what you owe and moving through ITR filing without the confusion.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/register" className="ab-sans ab-cta inline-flex rounded-xl px-6 py-3.5 text-sm font-bold text-white" style={{ backgroundColor: emerald }}>
                  Get started
                </Link>
                <Link to="/contact" className="ab-sans inline-flex rounded-xl px-6 py-3.5 text-sm font-bold" style={{ border: `1px solid ${line}`, color: ink }}>
                  Talk to support
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6" style={{ borderColor: line }}>
                {['Plain-language guidance', 'Estimate before you file', 'Built for individual taxpayers'].map((t) => (
                  <p key={t} className="ab-sans text-sm font-semibold" style={{ color: ink }}>{t}</p>
                ))}
              </div>
            </div>

            {/* Product preview card */}
            <div className="relative">
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full blur-3xl" style={{ backgroundColor: `${indigo}1F` }} />
              <div
                className="relative rounded-[1.75rem] p-7 sm:p-8"
                style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 40px 70px -34px rgba(18,20,28,0.28)' }}
              >
                <div className="flex items-center justify-between">
                  <p className="ab-sans text-xs font-semibold" style={{ color: inkFaint }}>Your estimate</p>
                  <span className="ab-sans rounded-full px-3 py-1 text-[11px] font-semibold" style={{ backgroundColor: emeraldSoft, color: emeraldDeep }}>
                    FY 2025–26
                  </span>
                </div>

                <p className="ab-display mt-4 text-5xl font-medium" style={{ color: ink }}>₹18,240</p>
                <p className="ab-sans mt-1 text-sm" style={{ color: inkSoft }}>Estimated refund</p>

                <div className="mt-7 space-y-4">
                  {[
                    { label: 'Old regime', value: 62, amount: '₹1,04,200' },
                    { label: 'New regime', value: 41, amount: '₹86,960', highlight: true },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="ab-sans font-semibold" style={{ color: ink }}>{row.label}</span>
                        <span className="ab-sans font-semibold" style={{ color: row.highlight ? emerald : inkFaint }}>{row.amount}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full" style={{ backgroundColor: bg }}>
                        <div
                          className="h-2 rounded-full"
                          style={{ width: `${row.value}%`, backgroundColor: row.highlight ? emerald : indigo }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="ab-sans mt-6 text-xs leading-5" style={{ color: inkFaint }}>
                  A sample estimate — your actual numbers depend on your income, deductions and filing details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y px-5 py-12 sm:px-8 lg:px-12" style={{ borderColor: line }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="ab-display text-3xl font-medium sm:text-4xl" style={{ color: ink }}>{s.value}</p>
              <p className="ab-sans mt-1.5 text-sm" style={{ color: inkSoft }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 className="ab-display text-3xl font-medium sm:text-4xl" style={{ color: ink }}>
              Tax information shouldn&apos;t feel complicated.
            </h2>
            <p className="ab-sans mt-6 leading-8" style={{ color: inkSoft }}>
              Tax filing can feel overwhelming when information is scattered across complicated forms and unfamiliar terminology.
            </p>
            <p className="ab-sans mt-4 leading-8" style={{ color: inkSoft }}>
              MyITRonline brings the important parts of that experience together in one simple digital platform.
            </p>
          </div>

          <div
            className="rounded-3xl p-8 text-center"
            style={{ background: `linear-gradient(135deg, ${emeraldDeep}, ${indigo})` }}
          >
            <p className="ab-display text-6xl font-medium text-white">3</p>
            <p className="ab-sans mt-2 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.82)' }}>
              steps from confused to filed
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-10" style={{ backgroundColor: bg }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="ab-display text-3xl font-medium sm:text-4xl" style={{ color: ink }}>
            How MyITRonline helps.
          </h2>

          <div className="relative mt-14 grid gap-10 sm:grid-cols-3">
            <div className="absolute left-0 right-0 top-6 hidden h-px sm:block" style={{ backgroundColor: line }} />
            {journey.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative">
                  <div
                    className="relative flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: paper, border: `1.5px solid ${emerald}`, color: emerald }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <p className="ab-sans mt-5 text-xs font-semibold" style={{ color: inkFaint }}>
                    Step {i + 1}
                  </p>
                  <h3 className="ab-display mt-1 text-xl font-medium" style={{ color: ink }}>{step.title}</h3>
                  <p className="ab-sans mt-2 text-sm leading-6" style={{ color: inkSoft }}>{step.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="ab-display text-3xl font-medium sm:text-4xl" style={{ color: ink }}>
            What we focus on.
          </h2>

          <div className="mt-10 divide-y" style={{ borderColor: line }}>
            {features.map((feature) => {
              const Icon = feature.icon
              const c = tint(feature.tint)
              return (
                <div key={feature.title} className="ab-row flex flex-col gap-4 rounded-2xl px-4 py-6 sm:flex-row sm:items-center sm:gap-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: c.bg, color: c.fg }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="ab-display text-lg font-medium" style={{ color: ink }}>{feature.title}</h3>
                    <p className="ab-sans mt-1 text-sm leading-6" style={{ color: inkSoft }}>{feature.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


     <Testimonials/>

      {/* CTA */}
      <section className="px-5 py-8 sm:px-8 lg:px-12 lg:pb-10">
        <div
          className="mx-auto max-w-5xl rounded-3xl px-7 py-12 text-center sm:px-12"
          style={{ background: `linear-gradient(135deg, ${emerald}, ${indigo})` }}
        >
          <h2 className="ab-display text-3xl font-medium text-white">Ready to get started?</h2>
          <p className="ab-sans mx-auto mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Start by understanding your estimated tax, then explore your filing options.
          </p>
          <Link
            to="/"
            className="ab-sans ab-cta mt-7 inline-flex rounded-xl px-7 py-3.5 text-sm font-semibold"
            style={{ backgroundColor: '#FFFFFF', color: emerald }}
          >
            Calculate your tax
          </Link>
        </div>
      </section>
    </main>
  )
}