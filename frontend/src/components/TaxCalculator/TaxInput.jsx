import { theme, incomeInWords, MAX_INCOME, SLIDER_MAX } from './taxShared'

const quickPicks = [500000, 1000000, 1500000, 2500000]

const regimes = [
  { value: 'new', title: 'New regime', hint: 'Lower rates, fewer deductions' },
  { value: 'old', title: 'Old regime', hint: 'Higher rates, deductions allowed' },
]

export default function TaxInput({ income, setIncome, regime, setRegime }) {
  const { paper, ink, inkSoft, inkFaint, line, emerald, emeraldDark, emeraldSoft } = theme

  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '')
    setIncome(digits ? Math.min(Number(digits), MAX_INCOME) : 0)
  }

  const sliderValue = Math.min(income || 0, SLIDER_MAX)
  const sliderPct = (sliderValue / SLIDER_MAX) * 100
  const words = incomeInWords(income)

  return (
    <div
      className="rounded-3xl p-6 sm:p-8"
      style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 20px 50px -30px rgba(18,20,28,0.25)' }}
    >
      {/* Income */}
      <label htmlFor="annual-income" className="itr-sans block text-sm font-semibold" style={{ color: ink }}>
        Annual income
      </label>

      <div
        className="itr-field mt-3 flex items-center gap-2 rounded-2xl px-4 py-3"
        style={{ border: `1.5px solid ${line}`, backgroundColor: theme.bg }}
      >
        <span className="itr-display text-3xl font-medium" style={{ color: inkFaint }} aria-hidden="true">
          ₹
        </span>
        <input
          id="annual-income"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="0"
          value={income ? income.toLocaleString('en-IN') : ''}
          onChange={handleChange}
          aria-describedby="income-words"
          className="itr-display w-full bg-transparent text-3xl font-medium tracking-tight outline-none placeholder:opacity-40"
          style={{ color: ink }}
        />
      </div>

      <p id="income-words" aria-live="polite" className="itr-sans mt-2 min-h-[20px] text-sm" style={{ color: emeraldDark }}>
        {words ? `₹ ${words}` : 'Enter your yearly income to get started'}
      </p>

      {/* Slider */}
      <div className="mt-6">
        <input
          type="range"
          min={0}
          max={SLIDER_MAX}
          step={10000}
          value={sliderValue}
          onChange={(e) => setIncome(Number(e.target.value))}
          aria-label="Adjust annual income"
          className="itr-range w-full"
          style={{ '--p': `${sliderPct}%` }}
        />
        <div className="itr-sans mt-2 flex justify-between text-xs" style={{ color: inkFaint }}>
          <span>₹0</span>
          <span>₹50L+</span>
        </div>
      </div>

      {/* Quick picks */}
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Quick income amounts">
        {quickPicks.map((amount) => {
          const active = income === amount
          return (
            <button
              key={amount}
              type="button"
              onClick={() => setIncome(amount)}
              aria-pressed={active}
              className="itr-chip itr-sans rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                border: `1px solid ${active ? emerald : line}`,
                backgroundColor: active ? emeraldSoft : paper,
                color: active ? emeraldDark : inkSoft,
              }}
            >
              ₹{amount / 100000}L
            </button>
          )
        })}
      </div>

      {/* Regime */}
      <fieldset className="mt-8">
        <legend className="itr-sans text-sm font-semibold" style={{ color: ink }}>
          Tax regime
        </legend>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {regimes.map((r) => {
            const active = regime === r.value
            return (
              <label key={r.value} className="relative block cursor-pointer">
                <input
                  type="radio"
                  name="regime"
                  value={r.value}
                  checked={active}
                  onChange={() => setRegime(r.value)}
                  className="peer sr-only"
                />
                <span
                  className="itr-regime block rounded-2xl p-4 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2"
                  style={{
                    border: `1.5px solid ${active ? emerald : line}`,
                    backgroundColor: active ? emeraldSoft : paper,
                    outlineColor: emerald,
                  }}
                >
                  <span className="flex items-center justify-between">
                    <span className="itr-sans text-sm font-semibold" style={{ color: ink }}>
                      {r.title}
                    </span>
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full"
                      style={{ border: `1.5px solid ${active ? emerald : line}`, backgroundColor: active ? emerald : 'transparent' }}
                      aria-hidden="true"
                    >
                      {active && (
                        <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                          <path d="m5 10.5 3.2 3.2L15 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </span>
                  <span className="itr-sans mt-1 block text-xs leading-5" style={{ color: inkSoft }}>
                    {r.hint}
                  </span>
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>
    </div>
  )
}