import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })

  const bg = "#F5F6FA"
  const paper = "#FFFFFF"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"
  const indigo = "#4B5CE0"

  const perks = [
    "Estimate your tax before you file",
    "Guided step-by-step filing",
    "Track deductions and refunds",
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }
        .itr-dotgrid-light { background-image: radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px); background-size: 22px 22px; }
        .itr-input { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .itr-input:focus { outline: none; border-color: ${emerald} !important; box-shadow: 0 0 0 4px ${emeraldSoft}; }
        .itr-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .itr-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -10px ${emerald}55; }
      `}</style>

      <div className="pointer-events-none absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${indigo}, transparent 70%)`, opacity: 0.1 }} />
      <div className="pointer-events-none absolute -right-40 bottom-[-150px] h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.12 }} />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid overflow-hidden rounded-[2rem] lg:grid-cols-2" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 40px 80px -40px rgba(18,20,28,0.28)" }}>

          {/* Left branding panel — gradient, distinct from Login's dark panel */}
          <div className="relative hidden overflow-hidden p-12 lg:flex lg:flex-col lg:justify-between" style={{ background: `linear-gradient(150deg, ${emerald}, ${indigo})` }}>
            <div className="itr-dotgrid-light pointer-events-none absolute inset-0 opacity-70" />

            <div className="relative flex items-center gap-3">
              <div className="itr-display flex h-10 w-10 items-center justify-center rounded-xl font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.16)", color: "#FFFFFF" }}>M</div>
              <div>
                <p className="itr-display text-base font-medium text-white">MyITRonline</p>
                <p className="itr-mono text-[9px] uppercase tracking-widest text-white/70">Simple. Clear. Digital.</p>
              </div>
            </div>

            <div className="relative">
              <span className="itr-mono inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }}>
                Get Started
              </span>
              <h1 className="itr-display mt-6 text-3xl font-medium leading-tight text-white xl:text-4xl">
                Start your simpler
                <span className="block">tax journey.</span>
              </h1>
              <p className="itr-sans mt-5 text-base leading-7 text-white/85">
                Create your free account and get an estimate in minutes &mdash; no paperwork, no jargon.
              </p>
            </div>

            <ul className="itr-sans relative space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>&#10003;</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Right form panel */}
          <div className="p-7 sm:p-10 lg:p-12">
            <Link to="/" className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="itr-display flex h-10 w-10 items-center justify-center rounded-xl font-semibold" style={{ background: `linear-gradient(135deg, ${emerald}, ${indigo})`, color: "#FFFFFF" }}>M</div>
              <span className="itr-display text-lg font-medium" style={{ color: ink }}>MyITRonline</span>
            </Link>

            <h2 className="itr-display text-3xl font-medium" style={{ color: ink }}>Create your account</h2>
            <p className="itr-sans mt-2 text-sm" style={{ color: inkSoft }}>Start your simpler tax filing journey.</p>

            <form onSubmit={handleSubmit} className="itr-sans mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Full name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" required className="itr-input w-full rounded-xl px-4 py-3.5 text-sm" style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }} />
              </div>

              <div>
                <label htmlFor="register-email" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Email address</label>
                <input id="register-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required className="itr-input w-full rounded-xl px-4 py-3.5 text-sm" style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }} />
              </div>

              <div>
                <label htmlFor="register-password" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Password</label>
                <div className="relative">
                  <input id="register-password" name="password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={handleChange} placeholder="Create a password" required minLength={8} className="itr-input w-full rounded-xl px-4 py-3.5 pr-20 text-sm" style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }} />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-semibold" style={{ color: inkFaint }}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>
                <p className="itr-mono mt-2 text-xs" style={{ color: inkFaint }}>Use at least 8 characters.</p>
              </div>

              <div>
                <label htmlFor="confirm-password" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Confirm password</label>
                <input id="confirm-password" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm your password" required className="itr-input w-full rounded-xl px-4 py-3.5 text-sm" style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }} />
              </div>

              <button type="submit" className="itr-cta w-full rounded-xl px-5 py-3.5 text-sm font-bold" style={{ backgroundColor: emerald, color: "#FFFFFF" }}>Create Account</button>
            </form>

            <div className="mt-7 border-t pt-6 text-center" style={{ borderColor: line }}>
              <p className="itr-sans text-sm" style={{ color: inkSoft }}>Already have an account?</p>
              <Link to="/login" className="itr-sans mt-2 inline-block text-sm font-bold" style={{ color: emerald }}>Sign in</Link>
            </div>

            <p className="itr-sans mt-6 text-center text-xs leading-5" style={{ color: inkFaint }}>
              By creating an account, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}