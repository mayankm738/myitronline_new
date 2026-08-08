/**
 * One tile in the technology grid.
 */
export default function StackCard({ label, value, meta }) {
  return (
    <div className="card">
      <p className="card-label">{label}</p>
      <p className="card-value">{value}</p>
      {meta && <p className="card-meta">{meta}</p>}
    </div>
  )
}
