export default function TaxInput({ income, setIncome, regime, setRegime }) {
  const paper = "#FFFFFF"
  const bg = "#F5F6FA"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"

  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 12px 30px -24px rgba(18,20,28,0.18)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-input-field { transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease; }
        .itr-input-field:focus { outline: none; border-color: ${emerald} !important; background-color: #fff; box-shadow: 0 0 0 4px ${emeraldSoft}; }
        .itr-regime { transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease; }
      `}</style>

      <h3 className="itr-sans text-xl font-bold" style={{ color: ink }}>Enter your income</h3>
      <p className="itr-sans mt-1 text-sm" style={{ color: inkSoft }}>Get an instant estimate of your income tax.</p>

      <div className="mt-6">
        <label htmlFor="income" className="itr-sans mb-2 block text-sm font-semibold" style={{ color: ink }}>Annual income</label>
        <div className="relative">
          <span className="itr-mono absolute left-4 top-1/2 -translate-y-1/2 font-semibold" style={{ color: inkSoft }}>&#8377;</span>
          <input
            id="income"
            type="number"
            min="0"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="itr-input-field itr-mono w-full rounded-xl py-3.5 pl-9 pr-4 text-lg font-semibold"
            style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }}
            placeholder="Enter annual income"
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="itr-sans mb-3 text-sm font-semibold" style={{ color: ink }}>Tax regime</p>
        <div className="grid grid-cols-2 gap-3">
          {['new', 'old'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegime(r)}
              className="itr-sans itr-regime rounded-xl px-4 py-3 text-sm font-semibold"
              style={regime === r
                ? { border: `1px solid ${emerald}`, backgroundColor: emerald, color: "#FFFFFF", boxShadow: `0 10px 22px -12px ${emerald}88` }
                : { border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
            >
              {r === 'new' ? 'New Regime' : 'Old Regime'}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}