import { theme, formatINR } from './taxShared'

export default function TakeHomeCard({ income, tax }) {
  const { ink, emerald, amber } = theme

  const hasIncome = income > 0
  const takeHome = Math.max(income - tax, 0)
  const takePct = hasIncome ? (takeHome / income) * 100 : 100
  const taxPct = hasIncome ? 100 - takePct : 0

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-6 sm:p-8"
      style={{ backgroundColor: ink, boxShadow: '0 24px 50px -28px rgba(18,20,28,0.6)' }}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${emerald}, transparent 70%)`, opacity: 0.28 }}
        aria-hidden="true"
      />

      <div className="relative">
        <h3 className="itr-sans text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Your estimated take-home
        </h3>

        <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-3">
          <p aria-live="polite" className="itr-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {formatINR(takeHome)}
            <span className="itr-sans ml-2 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
              / year
            </span>
          </p>
        </div>

        <p className="itr-sans mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
          That is roughly{' '}
          <span className="font-semibold text-white">{formatINR(takeHome / 12)}</span> per month.
        </p>

        {/* Split bar */}
        <div
          className="mt-6 flex h-3 w-full overflow-hidden rounded-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
          role="img"
          aria-label={`${takePct.toFixed(0)}% take-home, ${taxPct.toFixed(0)}% tax`}
        >
          <div className="itr-bar h-full" style={{ width: `${takePct}%`, backgroundColor: emerald }} />
          <div className="itr-bar h-full" style={{ width: `${taxPct}%`, backgroundColor: amber }} />
        </div>

        <div className="itr-sans mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: emerald }} />
            Take-home {takePct.toFixed(0)}%
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: amber }} />
            Tax {taxPct.toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  )
}