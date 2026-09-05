import { Link } from 'react-router-dom'

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

export default function Footer() {
  const inkBg = '#12141C'
  const textOnDark = '#F5F6FA'
  const textOnDarkSoft = 'rgba(245,246,250,0.62)'
  const textOnDarkFaint = 'rgba(245,246,250,0.42)'
  const lineOnDark = 'rgba(245,246,250,0.12)'
  const emerald = '#17C77E'
  const indigo = '#6E7CF2'

  return (
    <footer
      style={{
        backgroundColor: inkBg,
        color: textOnDark,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

        .itr-display {
          font-family: 'Fraunces', ui-serif, Georgia, serif;
          font-optical-sizing: auto;
        }

        .itr-sans {
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
        }

        .itr-mono {
          font-family: 'IBM Plex Mono', ui-monospace, monospace;
        }

        .itr-flink {
          transition: color 0.2s ease;
        }

        .itr-flink:hover {
          color: #17C77E !important;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand Section */}
          <div className="max-w-sm">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div
                className="itr-display flex h-11 w-11 items-center justify-center rounded-xl text-lg font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${emerald}, ${indigo})`,
                  color: '#0B0F1A',
                }}
              >
                M
              </div>

              <div>
                <p className="itr-display text-lg font-medium">
                  MyITRonline
                </p>

                <p
                  className="itr-mono text-[10px] uppercase tracking-widest"
                  style={{ color: textOnDarkFaint }}
                >
                  Simple. Clear. Digital.
                </p>
              </div>
            </Link>

            <p
              className="itr-sans mt-6 text-sm leading-7"
              style={{ color: textOnDarkSoft }}
            >
              A simpler digital experience for understanding your
              taxes and managing your income tax filing.
            </p>

            {/* Security Badge */}
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-3"
              style={{
                border: `1px solid ${lineOnDark}`,
                backgroundColor: 'rgba(245,246,250,0.04)',
              }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-sm"
                style={{
                  backgroundColor: `${emerald}1A`,
                  color: emerald,
                }}
              >
                &#10003;
              </span>

              <div>
                <p
                  className="itr-sans text-xs font-semibold"
                  style={{ color: textOnDark }}
                >
                  Secure experience
                </p>

                <p
                  className="itr-mono text-[10px]"
                  style={{ color: textOnDarkFaint }}
                >
                  Built with privacy in mind
                </p>
              </div>
            </div>
          </div>

          {/* Footer Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>

              <h3
                className="itr-mono text-sm font-bold uppercase tracking-widest"
                style={{ color: textOnDark }}
              >
                {title}
              </h3>

              <ul className="mt-2 space-y-2">

                {links.map((link) => (
                  <li key={link.label}>

                    {link.type === 'route' ? (
                      <Link
                        to={link.href}
                        className="itr-sans itr-flink text-sm"
                        style={{ color: textOnDarkSoft }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      // 'hash' links use <Link> too (not a plain <a>) so navigating
                      // there from another page is a client-side transition, not a
                      // full reload. Scrolling to the section on arrival still needs
                      // a small effect on the homepage that reacts to location.hash.
                      <Link
                        to={link.href}
                        className="itr-sans itr-flink text-sm"
                        style={{ color: textOnDarkSoft }}
                      >
                        {link.label}
                      </Link>
                    )}

                  </li>
                ))}

              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div
          className="my-12 h-px"
          style={{ backgroundColor: lineOnDark }}
        />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p
            className="itr-sans text-sm"
            style={{ color: textOnDarkFaint }}
          >
            &copy; {new Date().getFullYear()} MyITRonline.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              to="/privacy-policy"
              className="itr-sans itr-flink text-xs"
              style={{ color: textOnDarkFaint }}
            >
              Privacy
            </Link>

            <Link
              to="/terms-and-condition"
              className="itr-sans itr-flink text-xs"
              style={{ color: textOnDarkFaint }}
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="itr-sans itr-flink text-xs"
              style={{ color: textOnDarkFaint }}
            >
              Contact
            </Link>

          </div>
        </div>

      </div>
    </footer>
  )
}