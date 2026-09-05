import { useState } from 'react'
import { ArrowLeft, Mail, LifeBuoy, Flag, Send, CheckCircle2 } from 'lucide-react'

// NOTE: this preview uses a plain <a> instead of react-router-dom's <Link>
// (not available in this sandbox). Swap the two `<a href="/">` tags back to
// `<Link to="/">` when you drop this into your app.

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  // Same theme as the original: light neutral bg, near-black ink,
  // emerald as the primary accent, indigo as a secondary accent.
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
  const indigoSoft = 'rgba(75,92,224,0.12)'

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const contacts = [
    { icon: Mail, label: 'General support', value: 'support@myitronline.com', tint: emerald, tintSoft: emeraldSoft },
    { icon: LifeBuoy, label: 'Filing help center', value: 'help.myitronline.com', tint: indigo, tintSoft: indigoSoft },
    { icon: Flag, label: 'Grievance officer', value: 'grievance@myitronline.com', tint: emerald, tintSoft: emeraldSoft },
  ]

  return (
    <main style={{ backgroundColor: bg, minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .cp-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .cp-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }

        .cp-field {
          background: ${bg};
          border: 1.5px solid transparent;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;
        }
        .cp-field:focus-visible {
          outline: none;
          background: ${paper};
          border-color: ${emerald};
          box-shadow: 0 0 0 4px ${emeraldSoft};
        }

        .cp-btn { transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease; }
        .cp-btn:hover { transform: translateY(-2px); box-shadow: 0 18px 32px -14px ${emerald}66; filter: brightness(1.04); }
        .cp-btn:active { transform: translateY(0); }
        .cp-btn:focus-visible, .cp-back:focus-visible, .cp-row:focus-visible {
          outline: 2px solid ${emerald};
          outline-offset: 3px;
        }

        .cp-row { transition: background-color 0.18s ease; }
        .cp-row:hover { background-color: ${paper}; }

        @keyframes cp-pop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); }
        }
        .cp-pop { animation: cp-pop 0.45s cubic-bezier(0.2, 0.8, 0.2, 1); }

        @media (prefers-reduced-motion: reduce) {
          .cp-btn, .cp-field, .cp-row, .cp-pop { animation: none; transition: none; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">

        {/* Hero card */}
        <div
          className="relative mt-2 overflow-hidden rounded-[2.25rem] px-7 py-12 sm:px-12 sm:py-16"
          style={{ background: `linear-gradient(135deg, ${emeraldDeep} 0%, ${emerald} 46%, ${indigo} 130%)` }}
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

          <div className="relative max-w-xl">
            <h1 className="cp-display text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl">
              How can we help?
            </h1>
            <p className="cp-sans mt-4 text-base leading-7" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Have a question about MyITRonline? Send us a message and our support team will get back to you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div
                className="cp-sans rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(6px)' }}
              >
                Replies within 1 business day
              </div>
              <div
                className="cp-sans rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(6px)' }}
              >
                Mon–Sat, 9am–7pm IST
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Left: contact directory */}
          <div>
            <h2 className="cp-display text-2xl font-medium" style={{ color: ink }}>Reach us directly</h2>
            <p className="cp-sans mt-3 max-w-sm text-sm leading-6" style={{ color: inkSoft }}>
              Prefer email, or need to escalate something? Use the details below.
            </p>

            <div className="mt-7 space-y-2">
              {contacts.map((row) => {
                const Icon = row.icon
                return (
                  <div
                    key={row.label}
                    tabIndex={0}
                    className="cp-row flex items-center gap-4 rounded-2xl px-4 py-3.5"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: row.tintSoft, color: row.tint }}
                    >
                      <Icon size={19} strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="cp-sans text-xs font-medium" style={{ color: inkFaint }}>{row.label}</p>
                      <p className="cp-sans truncate text-sm font-semibold" style={{ color: ink }}>{row.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="rounded-[1.75rem] p-7 sm:p-10"
            style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: '0 30px 60px -32px rgba(18,20,28,0.22)' }}
          >
            {submitted ? (
              <div className="py-10 text-center">
                <div
                  className="cp-pop mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: emeraldSoft, color: emerald }}
                >
                  <CheckCircle2 size={30} strokeWidth={2} />
                </div>
                <h2 className="cp-display mt-6 text-2xl font-medium" style={{ color: ink }}>Message received</h2>
                <p className="cp-sans mx-auto mt-3 max-w-sm text-sm leading-6" style={{ color: inkSoft }}>
                  Thank you for contacting us. We&apos;ll get back to you as soon as possible.
                </p>
                <a
                  href="/"
                  className="cp-sans cp-btn mt-7 inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: ink }}
                >
                  Back to home
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cp-sans space-y-5">
                <h2 className="cp-display text-2xl font-medium" style={{ color: ink }}>Send a message</h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Full name</label>
                    <input required type="text" placeholder="Your name" className="cp-field w-full rounded-xl px-4 py-3 text-sm" style={{ color: ink }} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Email address</label>
                    <input required type="email" placeholder="you@example.com" className="cp-field w-full rounded-xl px-4 py-3 text-sm" style={{ color: ink }} />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Subject</label>
                  <input required type="text" placeholder="What's this about?" className="cp-field w-full rounded-xl px-4 py-3 text-sm" style={{ color: ink }} />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Message</label>
                  <textarea required rows="5" placeholder="Write your message..." className="cp-field w-full resize-none rounded-xl px-4 py-3 text-sm" style={{ color: ink }} />
                </div>

                <button
                  type="submit"
                  className="cp-btn inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-white"
                  style={{ backgroundColor: emerald }}
                >
                  Send message
                  <Send size={16} strokeWidth={2.4} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}