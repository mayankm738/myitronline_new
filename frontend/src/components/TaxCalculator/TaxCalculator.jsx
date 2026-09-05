import { useMemo, useState } from 'react'

import TaxInput from './TaxInput'
import IncomeTaxCard from './IncomeTaxCard'
import TakeHomeCard from './TakeHomeCard'

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

  const tax = useMemo(
    () => calculateTax(income, regime),
    [income, regime],
  )

  return (
    <section
      id="calculator"
      className="bg-white px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Tax Calculator
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Know your tax before
            <span className="block text-blue-600">
              you file
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-500">
            Enter your annual income and get a quick estimate of
            your tax and take-home amount.
          </p>
        </div>

        {/* Calculator */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <TaxInput
            income={income}
            setIncome={setIncome}
            regime={regime}
            setRegime={setRegime}
          />

          <div className="space-y-6">
            <IncomeTaxCard
              income={income}
              tax={tax}
            />

            <TakeHomeCard
              income={income}
              tax={tax}
            />
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-slate-400">
          This calculator provides an estimated result for
          informational purposes. Your actual tax liability may
          vary based on deductions, exemptions and other factors.
        </p>
      </div>
    </section>
  )
}