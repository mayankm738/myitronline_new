const LABELS = {
  ok: 'Connected',
  error: 'Failed',
  loading: 'Checking…',
}

/**
 * Coloured pill for a service state. `tone` is 'ok' | 'error' | 'loading'.
 */
export default function StatusBadge({ tone, label }) {
  return <span className={`badge badge-${tone}`}>{label ?? LABELS[tone]}</span>
}
