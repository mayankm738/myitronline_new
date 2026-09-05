import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const bg = "#F5F6FA"
  const paper = "#FFFFFF"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"
  const indigo = "#4B5CE0"

  const inkBg = "#12141C"
  const textOnDark = "#F5F6FA"
  const textOnDarkSoft = "rgba(245,246,250,0.66)"
  const textOnDarkFaint = "rgba(245,246,250,0.42)"
  const lineOnDark = "rgba(245,246,250,0.14)"
  const darkEmerald = "#17C77E"

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ email, password })
  }

  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }
        .itr-dotgrid-dark { background-image: radial-gradient(rgba(245,246,250,0.06) 1px, transparent 1px); background-size: 24px 24px; }
        .itr-input { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .itr-input:focus { outline: none; border-color: ${emerald} !important; box-shadow: 0 0 0 4px ${emeraldSoft}; }
        .itr-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .itr-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -10px ${emerald}55; }
        .itr-ghost { transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease; }
        .itr-ghost:hover { border-color: ${emerald}66; background-color: ${emeraldSoft}; color: ${emerald} !important; }
      `}</style>

      <div className="pointer-events-none absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.12 }} />
      <div className="pointer-events-none absolute -right-40 bottom-[-150px] h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: `radial-gradient(circle at center, ${indigo}, transparent 70%)`, opacity: 0.1 }} />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid overflow-hidden rounded-[2rem] lg:grid-cols-2" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 40px 80px -40px rgba(18,20,28,0.28)" }}>

          {/* Left branding panel */}
          <div className="relative hidden overflow-hidden p-12 lg:flex lg:flex-col lg:justify-between" style={{ backgroundColor: inkBg }}>
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: `${darkEmerald}22` }} />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: `${indigo}22` }} />
            <div className="itr-dotgrid-dark pointer-events-none absolute inset-0" />

            <div className="relative flex items-center gap-3">
              <div className="itr-display flex h-10 w-10 items-center justify-center rounded-xl font-semibold" style={{ background: `linear-gradient(135deg, ${darkEmerald}, ${indigo})`, color: inkBg }}>M</div>
              <div>
                <p className="itr-display text-base font-medium" style={{ color: textOnDark }}>MyITRonline</p>
                <p className="itr-mono text-[9px] uppercase tracking-widest" style={{ color: textOnDarkFaint }}>Simple. Clear. Digital.</p>
              </div>
            </div>

            <div className="relative">
              <span className="itr-mono inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider" style={{ border: `1px solid ${lineOnDark}`, color: textOnDarkSoft }}>
                Welcome back
              </span>
              <h1 className="itr-display mt-6 text-3xl font-medium leading-tight xl:text-4xl" style={{ color: textOnDark }}>
                Your taxes,
                <span className="block" style={{ color: darkEmerald }}>made simpler.</span>
              </h1>
              <p className="itr-sans mt-5 text-base leading-7" style={{ color: textOnDarkSoft }}>
                Sign in to continue managing your tax filing journey with MyITRonline.
              </p>
            </div>

            <div className="itr-sans relative flex items-stretch">
              {[["50L+", "Returns filed"], ["4.8/5", "Rating"], ["24/7", "Support"]].map(([value, label], i) => (
                <div key={label} className="flex-1 px-5 first:pl-0" style={{ borderLeft: i === 0 ? "none" : `1px dashed ${lineOnDark}` }}>
                  <p className="itr-mono text-lg font-semibold" style={{ color: textOnDark }}>{value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide" style={{ color: textOnDarkFaint }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right form panel */}
          <div className="p-7 sm:p-10 lg:p-12">
            <Link to="/" className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="itr-display flex h-10 w-10 items-center justify-center rounded-xl font-semibold" style={{ background: `linear-gradient(135deg, ${emerald}, ${indigo})`, color: "#FFFFFF" }}>M</div>
              <span className="itr-display text-lg font-medium" style={{ color: ink }}>MyITRonline</span>
            </Link>

            <h2 className="itr-display text-3xl font-medium" style={{ color: ink }}>Sign in</h2>
            <p className="itr-sans mt-2 text-sm" style={{ color: inkSoft }}>Enter your details to access your account.</p>

            <form onSubmit={handleSubmit} className="itr-sans mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Email address</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="itr-input w-full rounded-xl px-4 py-3.5 text-sm" style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }} />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-semibold" style={{ color: ink }}>Password</label>
                  <Link to="/forgot-password" className="text-xs font-semibold" style={{ color: emerald }}>Forgot password?</Link>
                </div>
                <div className="relative">
                  <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required className="itr-input w-full rounded-xl px-4 py-3.5 pr-20 text-sm" style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }} />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold" style={{ color: inkFaint }}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>
              </div>

              <button type="submit" className="itr-cta w-full rounded-xl px-5 py-3.5 text-sm font-bold" style={{ backgroundColor: emerald, color: "#FFFFFF" }}>Sign in</button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1" style={{ backgroundColor: line }} />
              <span className="itr-mono text-xs" style={{ color: inkFaint }}>New to MyITRonline?</span>
              <div className="h-px flex-1" style={{ backgroundColor: line }} />
            </div>

            <Link to="/register" className="itr-sans itr-ghost flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold" style={{ border: `1px solid ${line}`, color: ink }}>
              Create an account
            </Link>

            <p className="itr-sans mt-6 text-center text-xs leading-5" style={{ color: inkFaint }}>
              By continuing, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}