import { useEffect, useRef, useState } from 'react'
import { AlertTriangle } from 'lucide-react'

const sections = [
  {
    number: '01',
    title: 'Acceptance of terms',
    text: 'By accessing or using MyITRonline, you agree to comply with the applicable terms governing your use of the platform. If you do not agree with these terms, you should not use the service.',
  },
  {
    number: '02',
    title: 'Use of the platform',
    text: 'You agree to provide accurate information when using the platform and to use the services only for lawful purposes.',
  },
  {
    number: '03',
    title: 'User accounts',
    text: 'You are responsible for maintaining the confidentiality of your account credentials and for activity carried out through your account. Do not share passwords or authentication credentials with others.',
  },
  {
    number: '04',
    title: 'Tax information',
    text: 'Information, calculators and guidance provided through the platform may be intended for general informational purposes. Tax outcomes depend on individual circumstances and applicable law. Users should verify important tax decisions using appropriate official or professional sources.',
  },
  {
    number: '05',
    title: 'Accuracy of information',
    text: 'Users are responsible for reviewing information entered into the platform before submitting any tax-related information or return.',
  },
  {
    number: '06',
    title: 'Availability',
    text: 'We may update, modify, suspend or discontinue parts of the platform from time to time for maintenance, improvements, security or other operational reasons.',
  },
  {
    number: '07',
    title: 'Prohibited activities',
    text: 'You must not misuse the platform, attempt unauthorized access, interfere with its operation or use it for unlawful activities.',
  },
  {
    number: '08',
    title: 'Changes to these terms',
    text: 'These terms may be updated from time to time. Continued use of the platform after applicable changes may constitute acceptance of the updated terms.',
  },
  {
    number: '09',
    title: 'Contact',
    text: 'Questions about these terms can be submitted through the Contact page.',
  },
]

export default function TermsPage() {
  const [activeId, setActiveId] = useState(sections[0].number)
  const sectionRefs = useRef({})

  const bg = '#F5F6FA'
  const paper = '#FFFFFF'
  const ink = '#12141C'
  const inkSoft = 'rgba(18,20,28,0.62)'
  const inkFaint = 'rgba(18,20,28,0.42)'
  const line = 'rgba(18,20,28,0.10)'
  const emerald = '#0E9D63'
  const emeraldSoft = 'rgba(14,157,99,0.10)'
  const amberSoft = 'rgba(180,120,10,0.10)'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.dataset.number)
        })
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    )
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main style={{ backgroundColor: bg, minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .lp-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .lp-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .lp-back:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; }
        .lp-toc-link { transition: color 0.15s ease, background-color 0.15s ease; }
        .lp-toc-link:focus-visible { outline: 2px solid ${emerald}; outline-offset: 2px; }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">


        {/* Header */}
        <div className="mt-1 max-w-2xl">
          <h1 className=" text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl" style={{ color: ink }}>
            Terms &amp; Conditions
          </h1>
          <p className="lp-sans mt-4 text-sm" style={{ color: inkFaint }}>
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>
        </div>

        <div
          className="lp-sans mt-3 flex items-start gap-3 rounded-2xl px-5 py-4 text-sm leading-6"
          style={{ backgroundColor: amberSoft, color: '#8A5A0A' }}
        >
          <AlertTriangle size={18} strokeWidth={2} className="mt-0.5 shrink-0" />
          <p>
            This is a starting template and should be reviewed by a qualified legal professional before
            being used as the final terms for a live tax service.
          </p>
        </div>

        {/* Body */}
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-14">
          {/* Table of contents */}
          <nav className="hidden lg:block lg:sticky lg:top-10 lg:self-start" aria-label="Sections">
            <p className="lp-sans mb-3 text-xs font-semibold" style={{ color: inkFaint }}>On this page</p>
            <ul className="space-y-0.5">
              {sections.map((s) => (
                <li key={s.number}>
                  <a
                    href={`#section-${s.number}`}
                    className="lp-toc-link lp-sans flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm"
                    style={{
                      color: activeId === s.number ? emerald : inkSoft,
                      backgroundColor: activeId === s.number ? emeraldSoft : 'transparent',
                      fontWeight: activeId === s.number ? 600 : 500,
                    }}
                  >
                    <span className="lp-sans text-xs" style={{ color: inkFaint }}>{s.number}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div
            className="rounded-[1.75rem] p-7 sm:p-10 lg:p-12"
            style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 30px 60px -34px rgba(18,20,28,0.16)' }}
          >
            <div className="space-y-11">
              {sections.map((s) => (
                <section
                  key={s.number}
                  id={`section-${s.number}`}
                  data-number={s.number}
                  ref={(el) => (sectionRefs.current[s.number] = el)}
                  className="scroll-mt-28"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="lp-sans text-xs font-bold" style={{ color: emerald }}>{s.number}</span>
                    <h2 className="lp-display text-xl font-medium" style={{ color: ink }}>{s.title}</h2>
                  </div>
                  <p className="lp-sans mt-3 text-sm leading-7 sm:text-base" style={{ color: inkSoft }}>
                    {s.text}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}