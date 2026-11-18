import { theme, formatINR } from './taxShared'

export default function IncomeTaxCard({ income, tax, otherTax, otherRegime }) {
  const { paper, ink, inkSoft, inkFaint, line, emerald, emeraldDark, emeraldSoft } = theme

  const hasIncome = income > 0
  const rate = hasIncome ? (tax / income) * 100 : 0
  const noTax = hasIncome && tax === 0

  return (
    <div
      className="rounded-3xl p-6 sm:p-8"
      style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 20px 50px -30px rgba(18,20,28,0.25)' }}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="itr-sans text-sm font-semibold" style={{ color: inkSoft }}>
          Estimated income tax
        </h3>
        {hasIncome && (
          <span
            className="itr-mono rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: emeraldSoft, color: emeraldDark }}
          >
            {rate.toFixed(1)}% effective rate
          </span>
        )}
      </div>

      <p aria-live="polite" className="itr-display mt-3 text-4xl font-medium tracking-tight sm:text-5xl" style={{ color: ink }}>
        {formatINR(tax)}
      </p>

      <p className="itr-sans mt-2 text-sm" style={{ color: inkSoft }}>
        {!hasIncome && 'Enter your income to see your estimate.'}
        {noTax && 'Good news: no income tax is payable on this income.'}
        {hasIncome && !noTax && `About ${formatINR(tax / 12)} a month over the year.`}
      </p>

      {hasIncome && (
        <div
          className="itr-sans mt-5 flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm"
          style={{ backgroundColor: theme.bg }}
        >
          <span style={{ color: inkSoft }}>
            Under the {otherRegime} regime
          </span>
          <span className="font-semibold" style={{ color: ink }}>
            {formatINR(otherTax)}
          </span>
        </div>
      )}

      {hasIncome && (
        <p className="itr-sans mt-2 text-xs leading-5" style={{ color: inkFaint }}>
          Comparison is before deductions such as 80C, which can lower old-regime tax.
        </p>
      )}
    </div>
  )
}