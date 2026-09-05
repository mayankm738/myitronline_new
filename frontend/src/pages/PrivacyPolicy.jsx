import { useEffect, useRef, useState } from 'react'
import { Info } from 'lucide-react'

const sections = [
  {
    number: '01',
    title: 'Information we collect',
    text: 'We may collect information that you provide when creating an account, using our services, contacting support or completing forms. The information collected should be limited to what is necessary for providing the relevant service.',
  },
  {
    number: '02',
    title: 'How we use information',
    text: 'Information may be used to provide and improve our services, process requests, maintain accounts, communicate with users and help protect the security of the platform.',
  },
  {
    number: '03',
    title: 'Financial information',
    text: 'Tax and financial information can be sensitive. Users should provide information only through the appropriate secure areas of the platform and should avoid sharing passwords, authentication codes or other credentials with anyone.',
  },
  {
    number: '04',
    title: 'Data security',
    text: 'We take reasonable measures designed to protect information from unauthorized access, alteration, disclosure or destruction. However, no online system can guarantee absolute security.',
  },
  {
    number: '05',
    title: 'Cookies and technologies',
    text: 'The platform may use cookies or similar technologies where necessary for functionality, preferences, security and improving the user experience.',
  },
  {
    number: '06',
    title: 'Third-party services',
    text: 'Some features may rely on third-party services. Where applicable, those services may process information according to their own terms and privacy policies.',
  },
  {
    number: '07',
    title: 'Your choices',
    text: 'Depending on the applicable law and the nature of the information, you may have rights regarding access, correction, deletion or other handling of your personal information.',
  },
  {
    number: '08',
    title: 'Contact',
    text: 'If you have questions about this Privacy Policy or how information is handled, please contact the support team through the Contact page.',
  },
]

export default function PrivacyPolicyPage() {
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
  const indigo = '#4B5CE0'
  const indigoSoft = 'rgba(75,92,224,0.08)'

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
            Privacy Policy
          </h1>
          <p className="lp-sans mt-4 text-sm" style={{ color: inkFaint }}>
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>
        </div>

        <div
          className="lp-sans mt-3 flex items-start gap-3 rounded-2xl px-5 py-4 text-sm leading-6"
          style={{ backgroundColor: indigoSoft, color: '#2B3A9E' }}
        >
          <Info size={18} strokeWidth={2} className="mt-0.5 shrink-0" />
          <p>
            This page provides general information about how MyITRonline may handle user information.
            Have the final policy reviewed for the laws and services applicable to your business before publishing it.
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