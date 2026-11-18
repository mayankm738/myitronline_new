import { useMemo, useState } from 'react'

import TaxInput from './TaxInput'
import IncomeTaxCard from './IncomeTaxCard'
import TakeHomeCard from './TakeHomeCard'
import { theme } from './taxShared'

function calculateTax(income, regime) {
  if (!income || income <= 0) {
    return 0
  }

  // Simple frontend estimate for UI demonstration.
  // Replace this with your Laravel tax API when the backend calculation
  // is ready.

  let tax = 0

  if (regime === 'new') {
    if (income > 1500000) {
      tax = (income - 1500000) * 0.3 + 150000
    } else if (income > 1200000) {
      tax = (income - 1200000) * 0.2
    } else if (income > 900000) {
      tax = (income - 900000) * 0.15
    } else if (income > 600000) {
      tax = (income - 600000) * 0.1
    } else if (income > 300000) {
      tax = (income - 300000) * 0.05
    }
  } else {
    if (income > 1000000) {
      tax = (income - 1000000) * 0.3 + 112500
    } else if (income > 500000) {
      tax = (income - 500000) * 0.2 + 12500
    } else if (income > 250000) {
      tax = (income - 250000) * 0.05
    }
  }

  return Math.round(tax)
}

export default function TaxCalculator() {
  const [income, setIncome] = useState(1250000)
  const [regime, setRegime] = useState('new')

  const tax = useMemo(() => calculateTax(income, regime), [income, regime])

  const otherRegime = regime === 'new' ? 'old' : 'new'
  const otherTax = useMemo(() => calculateTax(income, otherRegime), [income, otherRegime])

  const { bg, paper, ink, inkSoft, inkFaint, line, emerald, emeraldDark } = theme

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28"
      style={{ backgroundColor: paper }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.06) 1px, transparent 1px); background-size: 24px 24px; }

        .itr-field { transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .itr-field:focus-within { border-color: ${emerald} !important; background-color: ${paper} !important; box-shadow: 0 0 0 4px rgba(14,157,99,0.14); }

        .itr-chip, .itr-regime, .itr-btn { transition: transform .2s ease, border-color .2s ease, background-color .2s ease, box-shadow .2s ease; }
        .itr-chip:hover { border-color: ${emerald} !important; transform: translateY(-1px); }
        .itr-chip:focus-visible, .itr-btn:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; }
        .itr-regime:hover { border-color: ${emerald}99 !important; }
        .itr-bar { transition: width .45s cubic-bezier(.2,.7,.2,1); }

        .itr-range { -webkit-appearance: none; appearance: none; height: 6px; border-radius: 999px; outline: none; cursor: pointer;
          background: linear-gradient(to right, ${emerald} var(--p, 0%), ${line} var(--p, 0%)); }
        .itr-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; height: 24px; width: 24px; border-radius: 50%;
          background: #fff; border: 3px solid ${emerald}; box-shadow: 0 4px 10px rgba(18,20,28,0.2); transition: transform .15s ease; }
        .itr-range::-moz-range-thumb { height: 20px; width: 20px; border-radius: 50%; background: #fff; border: 3px solid ${emerald}; box-shadow: 0 4px 10px rgba(18,20,28,0.2); }
        .itr-range:hover::-webkit-slider-thumb { transform: scale(1.1); }
        .itr-range:focus-visible::-webkit-slider-thumb { box-shadow: 0 0 0 5px rgba(14,157,99,0.25); }
        .itr-range:focus-visible::-moz-range-thumb { box-shadow: 0 0 0 5px rgba(14,157,99,0.25); }

        @media (prefers-reduced-motion: reduce) {
          .itr-field, .itr-chip, .itr-regime, .itr-btn, .itr-bar { transition: none !important; }
        }
      `}</style>

      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.1 }}
        aria-hidden="true"
      />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ border: `1px solid ${line}`, backgroundColor: bg, color: inkSoft }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            Tax Calculator
          </span>

          <h2
            id="calculator-heading"
            className="itr-display mt-3 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: ink }}
          >
            Know your tax before
            <span className="block" style={{ color: emeraldDark }}>
              you file
            </span>
          </h2>

          <p className="itr-sans mt-3 text-base leading-7 sm:text-lg sm:leading-8" style={{ color: inkSoft }}>
            Enter your annual income and get a quick estimate of your tax and take-home amount.
          </p>
        </div>

        {/* Calculator */}
        <div className="mx-auto mt-7 grid max-w-5xl items-start gap-6 lg:grid-cols-2">
          <TaxInput income={income} setIncome={setIncome} regime={regime} setRegime={setRegime} />

          <div className="space-y-6">
            <IncomeTaxCard income={income} tax={tax} otherTax={otherTax} otherRegime={otherRegime} />
            <TakeHomeCard income={income} tax={tax} />
          </div>
        </div>

        {/* Next step */}
        <div
          className="mx-auto mt-5 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 text-center sm:flex-row sm:text-left"
          style={{ backgroundColor: bg, border: `1px solid ${line}` }}
        >
          <p className="itr-sans text-sm leading-6" style={{ color: inkSoft }}>
            <span className="font-semibold" style={{ color: ink }}>
              Happy with the estimate?
            </span>{' '}
            File your return in a few guided steps.
          </p>
          <a
            href="#file"
            className="itr-btn itr-sans inline-flex shrink-0 items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: emeraldDark }}
          >
            Start filing
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p className="itr-sans mx-auto mt-5 max-w-2xl text-center text-xs leading-5" style={{ color: inkFaint }}>
          This calculator provides an estimated result for informational purposes. Your actual tax liability may vary
          based on deductions, exemptions and other factors.
        </p>
      </div>
    </section>
  )
}