export default function IncomeTaxCard({ income, tax }) {
  const taxRate = income > 0 ? ((tax / income) * 100).toFixed(1) : '0.0'

  const paper = "#FFFFFF"
  const bg = "#F5F6FA"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"

  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 12px 30px -24px rgba(18,20,28,0.18)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
      `}</style>

      <div className="flex items-start justify-between">
        <div>
          <p className="itr-sans text-sm font-medium" style={{ color: inkSoft }}>Estimated income tax</p>
          <h3 className="itr-mono mt-2 text-3xl font-bold" style={{ color: ink }}>&#8377;{tax.toLocaleString('en-IN')}</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl text-xl" style={{ backgroundColor: emeraldSoft, color: emerald }}>&#8377;</div>
      </div>

      <div className="mt-7">
        <div className="itr-sans mb-2 flex justify-between text-sm">
          <span style={{ color: inkSoft }}>Effective tax rate</span>
          <span className="itr-mono font-bold" style={{ color: emerald }}>{taxRate}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full" style={{ backgroundColor: line }}>
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(Number(taxRate), 100)}%`, backgroundColor: emerald }} />
        </div>
      </div>

      <div className="mt-6 rounded-xl p-4" style={{ backgroundColor: bg }}>
        <p className="itr-mono text-xs" style={{ color: inkFaint }}>Annual income</p>
        <p className="itr-mono mt-1 font-bold" style={{ color: ink }}>&#8377;{income.toLocaleString('en-IN')}</p>
      </div>
    </div>
  )
}