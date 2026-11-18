import { useEffect, useRef, useState } from 'react'
import { Mail, LifeBuoy, Flag, Send, CheckCircle2, ChevronDown, Loader2, AlertCircle, ArrowUpRight } from 'lucide-react'

const bg = '#F7F8FB'
const paper = '#FFFFFF'
const ink = '#12141C'
const inkSoft = 'rgba(18,20,28,0.68)'
const inkFaint = 'rgba(18,20,28,0.60)'
const line = 'rgba(18,20,28,0.10)'
const emerald = '#0E9D63'
const emeraldDeep = '#087A4C' // AA contrast with white text
const emeraldSoft = 'rgba(14,157,99,0.10)'
const indigo = '#4B5CE0'
const indigoSoft = 'rgba(75,92,224,0.10)'
const danger = '#B42318'

const MAX_MESSAGE = 1000
const DRAFT_KEY = 'myitr-contact-draft'

const topics = ['Filing help', 'Account & login', 'Tax questions', 'Feedback', 'Other']

const contacts = [
  {
    icon: Mail,
    label: 'General support',
    value: 'support@myitronline.com',
    note: 'Questions about your account or filing',
    href: 'mailto:support@myitronline.com',
    external: false,
    tint: emeraldDeep,
    tintSoft: emeraldSoft,
  },
  {
    icon: LifeBuoy,
    label: 'Help center',
    value: 'help.myitronline.com',
    note: 'Guides and answers, any time',
    href: 'https://help.myitronline.com',
    external: true,
    tint: indigo,
    tintSoft: indigoSoft,
  },
  {
    icon: Flag,
    label: 'Grievance officer',
    value: 'grievance@myitronline.com',
    note: 'To escalate a complaint',
    href: 'mailto:grievance@myitronline.com',
    external: false,
    tint: emeraldDeep,
    tintSoft: emeraldSoft,
  },
]

const initialForm = { name: '', email: '', topic: '', message: '' }
const fieldIds = { name: 'cp-name', email: 'cp-email', topic: 'cp-topic', message: 'cp-message' }

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Please enter your name.'
  if (!f.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Enter a valid email, like you@example.com.'
  if (!f.topic) e.topic = 'Choose the topic that fits best.'
  if (f.message.trim().length < 10) e.message = 'Please write at least a few words (10 characters).'
  return e
}

function FieldError({ id, children }) {
  if (!children) return null
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium" style={{ color: danger }}>
      <AlertCircle size={13} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [touched, setTouched] = useState({})
  const [attempted, setAttempted] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const headingRef = useRef(null)
  const draftLoaded = useRef(false)

  const errors = validate(form)
  const showError = (key) => ((touched[key] || attempted) && errors[key] ? errors[key] : '')

  const fieldProps = (key) => ({
    id: fieldIds[key],
    value: form[key],
    onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value })),
    onBlur: () => setTouched((t) => ({ ...t, [key]: true })),
    'aria-invalid': showError(key) ? 'true' : undefined,
    'aria-describedby': showError(key) ? `${fieldIds[key]}-error` : undefined,
    className: 'cp-field w-full rounded-xl px-4 py-3.5 text-[15px]',
    style: { color: ink },
  })

  // Restore an unsent draft (e.g. after visiting the help center and coming back)
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(DRAFT_KEY)
      if (saved) setForm({ ...initialForm, ...JSON.parse(saved) })
    } catch {
      /* storage unavailable: start with an empty form */
    }
    draftLoaded.current = true
  }, [])

  // Save the draft as the person types
  useEffect(() => {
    if (!draftLoaded.current || status === 'sent') return
    try {
      const hasContent = Object.values(form).some((v) => v)
      if (hasContent) sessionStorage.setItem(DRAFT_KEY, JSON.stringify(form))
      else sessionStorage.removeItem(DRAFT_KEY)
    } catch {
      /* ignore */
    }
  }, [form, status])

  // Move focus to the confirmation so screen-reader and keyboard users notice it
  useEffect(() => {
    if (status === 'sent') headingRef.current?.focus()
  }, [status])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return
    setAttempted(true)

    const firstInvalid = Object.keys(fieldIds).find((key) => errors[key])
    if (firstInvalid) {
      document.getElementById(fieldIds[firstInvalid])?.focus()
      return
    }

    setStatus('sending')
    setError('')
    try {
      // TODO: replace this simulated delay with your real API call, e.g.
      // await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      await new Promise((resolve) => setTimeout(resolve, 900))
      try {
        sessionStorage.removeItem(DRAFT_KEY)
      } catch {
        /* ignore */
      }
      setStatus('sent')
    } catch {
      setStatus('error')
      setError('Something went wrong while sending your message. Please try again or email us directly.')
    }
  }

  const reset = () => {
    setForm(initialForm)
    setTouched({})
    setAttempted(false)
    setStatus('idle')
    setError('')
  }

  return (
    <main className="relative overflow-hidden" style={{ backgroundColor: bg, minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .cp-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .cp-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .cp-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .cp-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.06) 1px, transparent 1px); background-size: 24px 24px; }

        .cp-field { background: ${paper}; border: 1.5px solid ${line}; transition: border-color .18s ease, box-shadow .18s ease; }
        .cp-field::placeholder { color: rgba(18,20,28,0.42); }
        .cp-field:hover { border-color: rgba(18,20,28,0.22); }
        .cp-field[aria-invalid='true'] { border-color: ${danger}; }
        .cp-field:focus-visible { outline: none; border-color: ${emerald}; box-shadow: 0 0 0 4px rgba(14,157,99,0.14); }
        select.cp-field { appearance: none; -webkit-appearance: none; padding-right: 2.75rem; cursor: pointer; }

        .cp-card { transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
        .cp-icon { background: var(--tint-soft); color: var(--tint); transition: background-color .22s ease, color .22s ease, transform .22s ease; }
        .cp-card:hover, .cp-card:focus-visible { transform: translateY(-4px); border-color: rgba(14,157,99,0.45); box-shadow: 0 24px 44px -28px rgba(18,20,28,0.28); }
        .cp-card:hover .cp-icon, .cp-card:focus-visible .cp-icon { background: var(--tint); color: #fff; transform: scale(1.06); }
        .cp-card:hover .cp-go, .cp-card:focus-visible .cp-go { transform: translate(2px, -2px); color: ${emeraldDeep}; }
        .cp-go { transition: transform .2s ease, color .2s ease; }

        .cp-btn { transition: transform .18s ease, box-shadow .18s ease, filter .18s ease; }
        .cp-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 18px 32px -14px rgba(14,157,99,0.55); filter: brightness(1.05); }
        .cp-btn:disabled { opacity: .75; cursor: not-allowed; }
        .cp-btn:focus-visible, .cp-card:focus-visible, .cp-textlink:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; border-radius: 6px; }
        .cp-textlink { background-image: linear-gradient(${emerald}, ${emerald}); background-size: 100% 1.5px; background-position: 0 100%; background-repeat: no-repeat; transition: background-size .2s ease; }
        .cp-textlink:hover { background-size: 100% 3px; }

        @keyframes cp-rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .cp-rise { opacity: 0; animation: cp-rise .65s cubic-bezier(.2,.7,.2,1) forwards; }
        @keyframes cp-pop { 0% { transform: scale(.6); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: scale(1); } }
        .cp-pop { animation: cp-pop .45s cubic-bezier(.2,.8,.2,1); }
        @keyframes cp-spin { to { transform: rotate(360deg); } }
        .cp-spin { animation: cp-spin .9s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .cp-btn, .cp-field, .cp-card, .cp-go, .cp-icon, .cp-textlink { transition: none; }
          .cp-rise { animation: none; opacity: 1; }
          .cp-pop { animation: none; }
          .cp-spin { animation-duration: 2.5s; }
          .cp-card:hover, .cp-card:focus-visible, .cp-btn:hover:not(:disabled) { transform: none; }
        }
      `}</style>

      {/* Soft top wash + faint dot grid */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-115"
        style={{ background: 'radial-gradient(60% 100% at 50% 0%, rgba(14,157,99,0.11), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="cp-dotgrid pointer-events-none absolute inset-x-0 top-0 h-130 opacity-60"
        style={{ WebkitMaskImage: 'linear-gradient(#000, transparent)', maskImage: 'linear-gradient(#000, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Heading */}
        <header className="cp-rise mx-auto max-w-2xl text-center">
          <span
            className="cp-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} aria-hidden="true" />
            Contact us
          </span>

          <h1 className="cp-display mt-6 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl" style={{ color: ink }}>
            How can we <span style={{ color: emeraldDeep }}>help?</span>
          </h1>
          <p className="cp-sans mx-auto mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8" style={{ color: inkSoft }}>
            Have a question about MyITRonline? Send us a message and our support team will get back to you.
          </p>
          <p
            className="cp-sans mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full px-5 py-2 text-sm font-medium"
            style={{ color: inkSoft, backgroundColor: paper, border: `1px solid ${line}` }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: emerald }} aria-hidden="true" />
              Replies within 1 business day
            </span>
            <span aria-hidden="true" style={{ color: line }}>|</span>
            <span>Mon–Sat, 9am–7pm IST</span>
          </p>
        </header>

        {/* Contact options */}
        <ul className="mt-12 grid gap-4 md:grid-cols-3" role="list">
          {contacts.map((row, i) => {
            const Icon = row.icon
            return (
              <li key={row.label} className="cp-rise" style={{ animationDelay: `${120 + i * 90}ms` }}>
                <a
                  href={row.href}
                  {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="cp-card cp-sans relative block h-full rounded-2xl p-6"
                  style={{
                    backgroundColor: paper,
                    border: `1px solid ${line}`,
                    boxShadow: '0 12px 30px -26px rgba(18,20,28,0.2)',
                    '--tint': row.tint,
                    '--tint-soft': row.tintSoft,
                  }}
                >
                  <span className="flex items-start justify-between">
                    <span className="cp-icon flex h-11 w-11 items-center justify-center rounded-xl">
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <ArrowUpRight size={18} className="cp-go" style={{ color: inkFaint }} aria-hidden="true" />
                  </span>
                  <span className="mt-5 block text-sm font-bold" style={{ color: ink }}>{row.label}</span>
                  <span className="mt-1 block truncate text-sm font-semibold" style={{ color: row.tint }}>{row.value}</span>
                  <span className="mt-2 block text-xs leading-5" style={{ color: inkFaint }}>{row.note}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Form */}
        <div
          className="cp-rise relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.75rem] p-6 sm:p-10"
          style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 30px 60px -36px rgba(18,20,28,0.28)', animationDelay: '420ms' }}
        >
          <div className="absolute inset-x-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${emerald}, ${indigo})` }} aria-hidden="true" />

          {status === 'sent' ? (
            <div className="py-6" role="status">
              <div className="text-center">
                <div className="cp-pop mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: emeraldSoft, color: emeraldDeep }}>
                  <CheckCircle2 size={30} strokeWidth={2} aria-hidden="true" />
                </div>
                <h2 ref={headingRef} tabIndex={-1} className="cp-display mt-6 text-2xl font-medium outline-none sm:text-3xl" style={{ color: ink }}>
                  Message received
                </h2>
                <p className="cp-sans mx-auto mt-3 max-w-md text-sm leading-6" style={{ color: inkSoft }}>
                  Thank you for contacting us{form.topic ? ` about “${form.topic.toLowerCase()}”` : ''}. We&apos;ll reply to{' '}
                  <span className="font-semibold" style={{ color: ink }}>{form.email}</span> as soon as possible.
                </p>
              </div>

              <ol className="cp-sans mx-auto mt-8 max-w-md space-y-4" role="list">
                {[
                  'Our support team reads your message.',
                  'We reply to your email within 1 business day.',
                  'Not seeing our reply? Check your spam folder.',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3.5 text-sm leading-6" style={{ color: inkSoft }}>
                    <span
                      className="cp-mono mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                      style={{ backgroundColor: emeraldSoft, color: emeraldDeep }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/" className="cp-sans cp-btn inline-flex justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white" style={{ backgroundColor: ink }}>
                  Back to home
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="cp-sans cp-btn inline-flex justify-center rounded-xl px-6 py-3 text-sm font-semibold"
                  style={{ border: `1px solid ${line}`, color: ink, backgroundColor: paper }}
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="cp-sans" aria-busy={status === 'sending'}>
              <h2 className="cp-display text-2xl font-medium" style={{ color: ink }}>Send us a message</h2>
              <p className="mt-1.5 text-sm" style={{ color: inkSoft }}>All fields are required.</p>

              <div className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cp-name" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Full name</label>
                    <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
                    <FieldError id="cp-name-error">{showError('name')}</FieldError>
                  </div>
                  <div>
                    <label htmlFor="cp-email" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Email address</label>
                    <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
                    <FieldError id="cp-email-error">{showError('email')}</FieldError>
                  </div>
                </div>

                <div>
                  <label htmlFor="cp-topic" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>What do you need help with?</label>
                  <div className="relative">
                    <select {...fieldProps('topic')} style={{ color: form.topic ? ink : 'rgba(18,20,28,0.42)' }}>
                      <option value="" disabled>Choose a topic</option>
                      {topics.map((topic) => (
                        <option key={topic} value={topic} style={{ color: ink }}>{topic}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" style={{ color: inkFaint }} aria-hidden="true" />
                  </div>
                  <FieldError id="cp-topic-error">{showError('topic')}</FieldError>
                </div>

                <div>
                  <label htmlFor="cp-message" className="mb-2 flex items-baseline justify-between text-sm font-semibold" style={{ color: ink }}>
                    <span>Message</span>
                    <span className="text-xs font-medium" style={{ color: inkFaint }}>{form.message.length}/{MAX_MESSAGE}</span>
                  </label>
                  <textarea rows={5} maxLength={MAX_MESSAGE} placeholder="Tell us a little about your question..." {...fieldProps('message')} className="cp-field w-full resize-none rounded-xl px-4 py-3.5 text-[15px]" />
                  <FieldError id="cp-message-error">{showError('message')}</FieldError>
                </div>

                {status === 'error' && (
                  <div role="alert" className="flex items-start gap-3 rounded-xl px-4 py-3 text-sm" style={{ backgroundColor: 'rgba(180,35,24,0.08)', color: danger }}>
                    <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <p>{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="cp-btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold text-white"
                  style={{ backgroundColor: emeraldDeep }}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} strokeWidth={2.4} className="cp-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={16} strokeWidth={2.4} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-5" style={{ color: inkFaint }}>
                  For your safety, please don&apos;t include your password, OTP, PAN or Aadhaar number.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Self-serve nudge */}
        {status !== 'sent' && (
          <p className="cp-sans cp-rise mt-8 text-center text-sm" style={{ color: inkSoft, animationDelay: '520ms' }}>
            Looking for a quick answer?{' '}
            <a
              href="https://help.myitronline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cp-textlink font-semibold"
              style={{ color: emeraldDeep }}
            >
              Browse the help center
            </a>
          </p>
        )}
      </div>
    </main>
  )
}