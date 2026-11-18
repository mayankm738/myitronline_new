export const theme = {
  bg: '#F5F6FA',
  paper: '#FFFFFF',
  ink: '#12141C',
  inkSoft: 'rgba(18,20,28,0.68)',
  inkFaint: 'rgba(18,20,28,0.60)',
  line: 'rgba(18,20,28,0.10)',
  emerald: '#0E9D63',
  emeraldDark: '#0A7A4C',
  emeraldSoft: 'rgba(14,157,99,0.12)',
  amber: '#E8A33D',
}

// Slider covers up to ₹50 lakh; the text field accepts up to ₹10 crore.
export const SLIDER_MAX = 5000000
export const MAX_INCOME = 100000000

// Indian digit grouping: 12,50,000
export const formatINR = (n) => '₹' + Math.round(n || 0).toLocaleString('en-IN')

// 1250000 -> "12 Lakh 50 Thousand"
export function incomeInWords(n) {
  if (!n || n <= 0) return ''
  const crore = Math.floor(n / 10000000)
  const lakh = Math.floor((n % 10000000) / 100000)
  const thousand = Math.floor((n % 100000) / 1000)
  const rest = n % 1000
  const parts = []
  if (crore) parts.push(`${crore} Crore`)
  if (lakh) parts.push(`${lakh} Lakh`)
  if (thousand) parts.push(`${thousand} Thousand`)
  if (rest && !parts.length) parts.push(String(rest))
  return parts.join(' ')
}