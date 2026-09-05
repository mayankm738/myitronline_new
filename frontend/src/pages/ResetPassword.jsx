import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const email = searchParams.get('email')

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [success, setSuccess] = useState(false)

  const bg = "#F5F6FA"
  const paper = "#FFFFFF"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"
  const indigo = "#4B5CE0"

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    console.log({ token, email, password, confirmPassword })
    setSuccess(true)
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-10" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-input { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .itr-input:focus { outline: none; border-color: ${emerald} !important; box-shadow: 0 0 0 4px ${emeraldSoft}; }
        .itr-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .itr-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -10px ${emerald}55; }
      `}</style>

      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-3">
          <div className="itr-display flex h-11 w-11 items-center justify-center rounded-xl font-semibold" style={{ background: `linear-gradient(135deg, ${emerald}, ${indigo})`, color: "#FFFFFF" }}>M</div>
          <span className="itr-display text-lg font-medium" style={{ color: ink }}>MyITRonline</span>
        </Link>

        <div className="rounded-3xl p-7 sm:p-9" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 24px 48px -30px rgba(18,20,28,0.22)" }}>
          {!success ? (
            <>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl" style={{ backgroundColor: emeraldSoft }}>&#128273;</div>
              <h1 className="itr-display mt-6 text-2xl font-medium" style={{ color: ink }}>Create a new password</h1>
              <p className="itr-sans mt-2 text-sm leading-6" style={{ color: inkSoft }}>Choose a strong password for your MyITRonline account.</p>

              <form onSubmit={handleSubmit} className="itr-sans mt-7 space-y-5">
                <div>
                  <label htmlFor="new-password" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>New password</label>
                  <div className="relative">
                    <input id="new-password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" required minLength={8} className="itr-input w-full rounded-xl px-4 py-3.5 pr-20 text-sm" style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }} />
                    <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-semibold" style={{ color: inkFaint }}>{showPassword ? 'Hide' : 'Show'}</button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirm-new-password" className="mb-2 block text-sm font-semibold" style={{ color: ink }}>Confirm new password</label>
                  <input id="confirm-new-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" required minLength={8} className="itr-input w-full rounded-xl px-4 py-3.5 text-sm" style={{ border: `1px solid ${line}`, backgroundColor: bg, color: ink }} />
                </div>

                <div className="rounded-xl p-4" style={{ backgroundColor: bg, border: `1px solid ${line}` }}>
                  <p className="itr-mono text-xs font-bold uppercase tracking-wide" style={{ color: inkSoft }}>Password requirements</p>
                  <ul className="itr-sans mt-2 space-y-1 text-xs" style={{ color: inkFaint }}>
                    <li>&bull; At least 8 characters</li>
                    <li>&bull; Use a combination of letters and numbers</li>
                    <li>&bull; Avoid easily guessed passwords</li>
                  </ul>
                </div>

                <button type="submit" className="itr-cta w-full rounded-xl px-5 py-3.5 text-sm font-bold" style={{ backgroundColor: emerald, color: "#FFFFFF" }}>Reset Password</button>
              </form>
            </>
          ) : (
            <>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl" style={{ backgroundColor: emeraldSoft, color: emerald }}>&#10003;</div>
              <h1 className="itr-display mt-6 text-2xl font-medium" style={{ color: ink }}>Password updated</h1>
              <p className="itr-sans mt-3 text-sm leading-6" style={{ color: inkSoft }}>Your password has been updated successfully. You can now sign in with your new password.</p>
              <Link to="/login" className="itr-sans itr-cta mt-7 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold" style={{ backgroundColor: emerald, color: "#FFFFFF" }}>Continue to Login</Link>
            </>
          )}
        </div>
      </div>
    </main>
  )
}