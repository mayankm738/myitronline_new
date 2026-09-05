export default function TakeHomeCard({ income, tax }) {
  const takeHome = Math.max(income - tax, 0)
  const monthly = Math.round(takeHome / 12)

  const inkBg = "#12141C"
  const textOnDark = "#F5F6FA"
  const textOnDarkSoft = "rgba(245,246,250,0.6)"
  const textOnDarkFaint = "rgba(245,246,250,0.42)"
  const emerald = "#17C77E"

  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: inkBg, color: textOnDark, boxShadow: "0 24px 48px -28px rgba(18,20,28,0.5)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
      `}</style>

      <p className="itr-sans text-sm font-medium" style={{ color: textOnDarkFaint }}>Estimated take-home</p>
      <h3 className="itr-mono mt-2 text-3xl font-bold">&#8377;{takeHome.toLocaleString('en-IN')}</h3>
      <p className="itr-sans mt-1 text-sm" style={{ color: textOnDarkFaint }}>After estimated income tax</p>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(245,246,250,0.08)" }}>
          <p className="itr-mono text-xs" style={{ color: textOnDarkFaint }}>Monthly</p>
          <p className="itr-mono mt-1 font-bold">&#8377;{monthly.toLocaleString('en-IN')}</p>
        </div>

        <div className="rounded-xl p-4" style={{ backgroundColor: `${emerald}1F` }}>
          <p className="itr-mono text-xs" style={{ color: emerald }}>Savings potential</p>
          <p className="itr-sans mt-1 font-bold" style={{ color: emerald }}>Explore &rarr;</p>
        </div>
      </div>
    </div>
  )
}