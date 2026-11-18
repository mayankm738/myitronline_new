import { useState } from 'react'

const faqs = [
  { question: 'What is MyITRonline?', answer: 'MyITRonline is a digital tax-filing platform designed to make income tax calculation and ITR filing simpler, clearer and easier to understand.' },
  { question: 'Can I calculate my estimated income tax?', answer: 'Yes. You can use the tax calculator to enter your income details and get an estimated view of your tax liability.' },
  { question: 'Which ITR should I file?', answer: 'The appropriate ITR depends on factors such as your income source, salary, business or profession, investments and other financial details. MyITRonline can help you understand the filing process.' },
  { question: 'Is my financial information secure?', answer: 'Your financial information should always be handled with appropriate security and privacy measures. Avoid sharing sensitive information unnecessarily and review the platform\u2019s privacy and security policies before filing.' },
  { question: 'How long does ITR filing take?', answer: 'The time required depends on your income sources and the information needed for your return. A simple salaried return can generally be completed faster than one involving business or multiple income sources.' },
  { question: 'Can I revise my tax return later?', answer: 'Depending on the applicable income-tax rules and filing status, a return may be eligible for revision. Always check the current rules and applicable deadlines before making changes.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const toggleFAQ = (index) => setOpenIndex((current) => (current === index ? -1 : index))

  const bg = "#F5F6FA"
  const paper = "#FFFFFF"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.10)"

  return (
    <section id="faq" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-12" style={{ backgroundColor: paper }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .itr-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -10px ${emerald}55; }
      `}</style>

      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ border: `1px solid ${line}`, color: inkSoft }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            FAQ
          </span>

          <h2 className="itr-display mt-6 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl" style={{ color: ink }}>
            Frequently asked
            <span className="block" style={{ color: emerald }}>questions</span>
          </h2>

          <p className="itr-sans mt-5 text-lg leading-8" style={{ color: inkSoft }}>
            Everything you need to know before getting started with your tax filing.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl transition-all duration-300" style={{ backgroundColor: isOpen ? emeraldSoft : bg, border: `1px solid ${isOpen ? emerald + '44' : line}` }}>
                <button type="button" onClick={() => toggleFAQ(index)} className="itr-sans flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7" aria-expanded={isOpen}>
                  <span className="text-base font-bold sm:text-lg" style={{ color: ink }}>{faq.question}</span>
                  <span className="itr-mono flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm transition-all duration-300" style={{ backgroundColor: isOpen ? emerald : "#fff", color: isOpen ? "#fff" : inkFaint, border: isOpen ? "none" : `1px solid ${line}`, transform: isOpen ? "rotate(180deg)" : "none" }}>
                    &darr;
                  </span>
                </button>

                <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <div className="border-t px-6 pb-6 pt-5 sm:px-7" style={{ borderStyle: "dashed", borderColor: emerald + '33' }}>
                      <p className="itr-sans max-w-3xl text-sm leading-7 sm:text-base" style={{ color: inkSoft }}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-3xl p-7 text-center sm:p-9" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl text-xl" style={{ backgroundColor: emeraldSoft, color: emerald }}>&#128172;</div>
          <h3 className="itr-display mt-4 text-xl font-medium" style={{ color: ink }}>Still have questions?</h3>
          <p className="itr-sans mx-auto mt-2 max-w-lg text-sm leading-6" style={{ color: inkSoft }}>Get the information you need before starting your tax filing journey.</p>
          <a href="#contact" className="itr-sans itr-cta mt-5 inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold" style={{ backgroundColor: emerald, color: "#FFFFFF" }}>
            Contact Support
            <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}