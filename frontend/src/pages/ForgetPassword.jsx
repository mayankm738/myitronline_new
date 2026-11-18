import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, KeyRound, LogIn, CheckCircle2 } from 'lucide-react'

export default function ForgetPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const bg = '#F5F6FA'
  const paper = '#FFFFFF'
  const ink = '#12141C'
  const inkSoft = 'rgba(18,20,28,0.62)'
  const inkFaint = 'rgba(18,20,28,0.42)'
  const line = 'rgba(18,20,28,0.10)'
  const emerald = '#0E9D63'
  const emeraldDeep = '#087A4C'
  const emeraldSoft = 'rgba(14,157,99,0.12)'
  const indigo = '#4B5CE0'

  const steps = [
    { icon: Mail, label: 'Verify your email', done: submitted },
    { icon: KeyRound, label: 'Set a new password', done: false },
    { icon: LogIn, label: 'Sign back in', done: false },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="grid min-h-screen lg:grid-cols-2" style={{ backgroundColor: paper }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .fp-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .fp-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .fp-field {
          background: ${bg};
          border: 1.5px solid transparent;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;
        }
        .fp-field:focus-visible {
          outline: none;
          background: ${paper};
          border-color: ${emerald};
          box-shadow: 0 0 0 4px ${emeraldSoft};
        }
        .fp-btn { transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease; }
        .fp-btn:hover { transform: translateY(-2px); box-shadow: 0 18px 32px -14px ${emerald}66; filter: brightness(1.04); }
        .fp-btn:focus-visible, .fp-link:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; }
        .fp-ghost { transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease; }
        .fp-ghost:hover { border-color: ${emerald}66; background-color: ${emeraldSoft}; color: ${emerald} !important; }
      `}</style>

      {/* Left: brand panel with the account-recovery sequence */}
      <div
        className="relative hidden overflow-hidden px-12 py-14 lg:flex lg:flex-col lg:justify-between xl:px-16"
        style={{ background: `linear-gradient(155deg, ${emeraldDeep} 0%, ${emerald} 45%, ${indigo} 140%)` }}
      >
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
        <div className="pointer-events-none absolute -bottom-28 -left-10 h-72 w-72 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

        <Link to="/" className="relative flex items-center gap-3">
          <div
            className="fp-display flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold text-white"
            style={{ backgroundColor: 'rgba(255,255,255,0.16)' }}
          >
            M
          </div>
          <span className="fp-display text-lg font-medium text-white">MyITRonline</span>
        </Link>

        <div className="relative max-w-sm">
          <h2 className="fp-display text-3xl font-medium leading-[1.15] text-white xl:text-4xl">
            We keep your filings, and your account, secure.
          </h2>
          <p className="fp-sans mt-4 text-sm leading-6" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Resetting your password only takes a minute — here&apos;s what happens next.
          </p>

          <ol className="relative mt-9 space-y-6">
            <div className="absolute bottom-4 left-4.75 top-4 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.22)' }} />
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <li key={step.label} className="relative flex items-center gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: step.done ? '#FFFFFF' : 'rgba(255,255,255,0.14)',
                      color: step.done ? emeraldDeep : 'rgba(255,255,255,0.9)',
                    }}
                  >
                    {step.done ? <CheckCircle2 size={18} strokeWidth={2.2} /> : <Icon size={17} strokeWidth={2} />}
                  </span>
                  <span className="fp-sans text-sm font-semibold text-white">{step.label}</span>
                </li>
              )
            })}
          </ol>
        </div>

        <p className="fp-sans relative text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Need help instead? Reach support from the Contact page.
        </p>
      </div>

      {/* Right: form */}
      <div className="flex items-center justify-center px-5 py-14 sm:px-8 lg:px-12" style={{ backgroundColor: paper }}>
        <div className="w-full max-w-sm">
          <Link to="/" className="mb-10 flex items-center gap-3 lg:hidden">
            <div
              className="fp-display flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold text-white"
              style={{ background: `linear-gradient(135deg, ${emerald}, ${indigo})` }}
            >
              M
            </div>
            <span className="fp-display text-lg font-medium" style={{ color: ink }}>MyITRonline</span>
          </Link>

          {!submitted ? (
            <>


              <h1 className="fp-display text-3xl font-medium leading-[1.1]" style={{ color: ink }}>
                Forgot your password?
              </h1>
              <p className="fp-sans mt-3 text-sm leading-6" style={{ color: inkSoft }}>
                Enter the email address associated with your account and we&apos;ll send you instructions to reset it.
              </p>

              <form onSubmit={handleSubmit} className="fp-sans mt-8 space-y-5">
                <div>
                  <label htmlFor="forgot-email" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>
                    Email address
                  </label>
                  <input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="fp-field w-full rounded-xl px-4 py-3.5 text-sm"
                    style={{ color: ink }}
                  />
                </div>

                <button
                  type="submit"
                  className="fp-btn w-full rounded-xl px-5 py-3.5 text-sm font-bold text-white"
                  style={{ backgroundColor: emerald }}
                >
                  Send reset link
                </button>
              </form>
              <Link
                to="/login"
                className="fp-sans fp-link w-full text-gray-700 hover:text-green-800 mb-8 mt-5 hidden items-center justify-center gap-1.5 rounded-sm text-sm font-semibold lg:inline-flex"

              >
                <ArrowLeft size={15} strokeWidth={2.25} />
                Back to login
              </Link>

            </>
          ) : (
            <>
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: emeraldSoft, color: emerald }}
              >
                <CheckCircle2 size={26} strokeWidth={2} />
              </div>
              <h1 className="fp-display mt-6 text-3xl font-medium leading-[1.1]" style={{ color: ink }}>
                Check your email
              </h1>
              <p className="fp-sans mt-3 text-sm leading-6" style={{ color: inkSoft }}>
                If an account exists for{' '}
                <span className="font-semibold" style={{ color: ink }}>{email}</span>, you&apos;ll receive
                instructions to reset your password shortly.
              </p>

            </>
          )}
        </div>
      </div>
    </main>
  )
}