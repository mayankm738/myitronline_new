import { Link, useLocation } from 'react-router-dom'

// type: 'route'  -> a real page defined in AppRoutes, rendered as <Link> (client-side nav)
// type: 'hash'   -> a section on the homepage, always prefixed with '/' so it
//                   works no matter which page the footer is currently rendered on
const footerLinks = {
  Product: [
    { label: 'Tax Calculator', href: '/#calculator', type: 'hash' },
    { label: 'How It Works', href: '/#how-it-works', type: 'hash' },
    { label: 'Services', href: '/#services', type: 'hash' },
    { label: 'FAQ', href: '/#faq', type: 'hash' },
  ],

  Company: [
    // No dedicated routes exist for these two yet — pointing at homepage sections.
    // Add real routes later and flip these to type: 'route' if that changes.
    { label: 'Why MyITRonline', href: '/#why-us', type: 'hash' },
    { label: 'Testimonials', href: '/#testimonials', type: 'hash' },
    { label: 'About Us', href: '/about', type: 'route' },
    // No '/get-started' route exists — sending this to registration instead.
    { label: 'Get Started', href: '/register', type: 'route' },
  ],

  Support: [
    { label: 'Help Center', href: '/help', type: 'route' },
    { label: 'Contact Us', href: '/contact', type: 'route' },
    { label: 'Privacy Policy', href: '/privacy-policy', type: 'route' },
    { label: 'Terms And Conditions', href: '/terms-and-condition', type: 'route' },
  ],
}

const legalLinks = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-and-condition' },
  { label: 'Contact', href: '/contact' },
]

const ArrowIcon = () => (
  <svg className="itr-arrow h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Footer() {
  const { pathname } = useLocation()

  const inkBg = '#12141C'
  const textOnDark = '#F5F6FA'
  const textOnDarkSoft = 'rgba(245,246,250,0.74)'
  const textOnDarkFaint = 'rgba(245,246,250,0.58)'
  const lineOnDark = 'rgba(245,246,250,0.12)'
  const emerald = '#17C77E'
  const indigo = '#6E7CF2'

  const scrollToTop = () => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <footer style={{ backgroundColor: inkBg, color: textOnDark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .itr-flink { position: relative; display: inline-block; padding: 3px 0; transition: color .2s ease, transform .2s ease; }
        .itr-flink::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: ${emerald}; transform: scaleX(0); transform-origin: left; transition: transform .25s ease; }
        .itr-flink:hover, .itr-flink[aria-current='page'] { color: ${emerald} !important; }
        .itr-flink:hover::after, .itr-flink[aria-current='page']::after { transform: scaleX(1); }

        .itr-flink:focus-visible, .itr-fbtn:focus-visible, .itr-brand:focus-visible {
          outline: 2px solid ${emerald}; outline-offset: 3px; border-radius: 6px;
        }

        .itr-fbtn { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease, border-color .2s ease; }
        .itr-fbtn:hover { transform: translateY(-2px); }
        .itr-fbtn-primary:hover { box-shadow: 0 16px 30px -14px ${emerald}aa; }
        .itr-fbtn-ghost:hover { border-color: ${emerald}; background-color: rgba(23,199,126,0.08); }
        .itr-arrow { transition: transform .2s ease; }
        .itr-fbtn:hover .itr-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .itr-flink, .itr-flink::after, .itr-fbtn, .itr-arrow { transition: none; }
          .itr-fbtn:hover { transform: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-12">
        {/* Call to action */}
        <div
          className="relative overflow-hidden rounded-3xl px-7 py-9 sm:px-10"
          style={{ border: `1px solid ${lineOnDark}`, background: 'linear-gradient(135deg, rgba(23,199,126,0.12), rgba(110,124,242,0.10))' }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${emerald}, transparent 70%)`, opacity: 0.18 }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="itr-display text-2xl font-medium leading-tight sm:text-3xl">Know your tax before you file.</p>
              <p className="itr-sans mt-2 text-sm leading-6" style={{ color: textOnDarkSoft }}>
                Get a quick estimate in a minute, then file your return in a few guided steps.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                to="/#calculator"
                className="itr-fbtn itr-fbtn-primary itr-sans inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
                style={{ backgroundColor: emerald, color: '#0B0F1A' }}
              >
                Calculate your tax
                <ArrowIcon />
              </Link>
              <Link
                to="/register"
                className="itr-fbtn itr-fbtn-ghost itr-sans inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold"
                style={{ border: `1px solid ${lineOnDark}`, color: textOnDark }}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="itr-brand inline-flex items-center gap-3" aria-label="MyITRonline home">
              <div
                className="itr-display flex h-11 w-11 items-center justify-center rounded-xl text-lg font-semibold"
                style={{ background: `linear-gradient(135deg, ${emerald}, ${indigo})`, color: '#0B0F1A' }}
                aria-hidden="true"
              >
                M
              </div>
              <div>
                <p className="itr-display text-lg font-medium">MyITRonline</p>
                <p className="itr-mono text-[10px] uppercase tracking-widest" style={{ color: textOnDarkFaint }}>
                  Simple. Clear. Digital.
                </p>
              </div>
            </Link>

            <p className="itr-sans mt-6 text-sm leading-7" style={{ color: textOnDarkSoft }}>
              A simpler digital experience for understanding your taxes and managing your income tax filing.
            </p>

            <div
              className="mt-6 inline-flex items-center gap-3 rounded-xl px-4 py-3"
              style={{ border: `1px solid ${lineOnDark}`, backgroundColor: 'rgba(245,246,250,0.04)' }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: `${emerald}1A`, color: emerald }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                  <path d="m5 10.5 3.2 3.2L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="itr-sans text-xs font-semibold" style={{ color: textOnDark }}>Secure experience</p>
                <p className="itr-mono text-[10px]" style={{ color: textOnDarkFaint }}>Built with privacy in mind</p>
              </div>
            </div>

            {/* Quick contact */}
            <div className="itr-sans mt-6 space-y-1.5 text-sm">
              <a
                href="mailto:support@myitronline.com"
                className="itr-flink font-semibold"
                style={{ color: textOnDark }}
              >
                support@myitronline.com
              </a>
              <p className="text-xs" style={{ color: textOnDarkFaint }}>Mon–Sat, 9am–7pm IST</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <nav key={title} aria-label={title}>
                <h3 className="itr-mono text-xs font-semibold uppercase tracking-widest" style={{ color: textOnDark }}>
                  {title}
                </h3>

                <ul className="mt-4 space-y-1.5" role="list">
                  {links.map((link) => {
                    // 'hash' links use <Link> too (not a plain <a>) so navigating
                    // there from another page is a client-side transition, not a
                    // full reload. Scrolling to the section on arrival still needs
                    // a small effect on the homepage that reacts to location.hash.
                    const current = link.type === 'route' && pathname === link.href
                    return (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          aria-current={current ? 'page' : undefined}
                          className="itr-sans itr-flink text-sm"
                          style={{ color: textOnDarkSoft }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px" style={{ backgroundColor: lineOnDark }} />

        {/* Disclaimer */}
        <p className="itr-sans max-w-3xl text-xs leading-5" style={{ color: textOnDarkFaint }}>
          Tax calculations on this site are estimates for informational purposes only. Your actual tax liability may vary
          based on deductions, exemptions and other factors.
        </p>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="itr-sans text-sm" style={{ color: textOnDarkFaint }}>
            &copy; {new Date().getFullYear()} MyITRonline. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className="itr-sans itr-flink text-xs"
                  style={{ color: textOnDarkFaint }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={scrollToTop}
              className="itr-fbtn itr-fbtn-ghost itr-sans inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
              style={{ border: `1px solid ${lineOnDark}`, color: textOnDarkSoft }}
            >
              Back to top
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M10 16V4m0 0L5 9m5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}