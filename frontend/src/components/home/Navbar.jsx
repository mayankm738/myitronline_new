import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why MyITR', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filedToday, setFiledToday] = useState(12842);

  const bg = "#F5F6FA";
  const ink = "#12141C";
  const inkSoft = "rgba(18,20,28,0.64)";
  const inkFaint = "rgba(18,20,28,0.44)";
  const line = "rgba(18,20,28,0.10)";
  const pillBg = "rgba(255,255,255,0.75)";
  const emerald = "#0E9D63";
  const indigo = "#4B5CE0";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setFiledToday((n) => n + Math.floor(Math.random() * 3) + 1);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-variant-numeric: tabular-nums; }

        .itr-pill { transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }

        .itr-navlink { position: relative; padding-bottom: 3px; transition: color 0.2s ease; }
        .itr-navlink::after {
          content: '';
          position: absolute;
          left: 50%; bottom: 0;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: ${emerald};
          transform: translateX(-50%) scale(0);
          transition: transform 0.2s ease;
        }
        .itr-navlink:hover { color: ${ink} !important; }
        .itr-navlink:hover::after, .itr-navlink:focus-visible::after { transform: translateX(-50%) scale(1); }

        .itr-focus:focus-visible { outline: 2px solid ${emerald}; outline-offset: 2px; border-radius: 8px; }

        .itr-cta-primary { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .itr-cta-primary:hover { transform: translateY(-1px); box-shadow: 0 10px 22px -8px ${emerald}77; }

        .itr-login-btn { transition: opacity 0.2s ease; text-decoration: none; }
        .itr-login-btn:hover { opacity: 0.65; }

        @keyframes itr-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(14,157,99,0.55); }
          70% { box-shadow: 0 0 0 5px rgba(14,157,99,0); }
        }
        .itr-live-dot { animation: itr-pulse 2s ease-out infinite; }

        @keyframes itr-tick {
          0% { opacity: 0.4; transform: translateY(2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .itr-tick { animation: itr-tick 0.3s ease-out; }

        @keyframes itr-panel-in {
          0% { opacity: 0; transform: translateY(-10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .itr-mobile-panel { animation: itr-panel-in 0.22s cubic-bezier(.2,.8,.2,1) both; transform-origin: top center; }

        @media (prefers-reduced-motion: reduce) {
          .itr-mobile-panel, .itr-live-dot, .itr-tick { animation: none; }
          .itr-cta-primary:hover { transform: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 pt-4 lg:px-6">
        <div
          className="itr-pill relative flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5"
          style={{
            backgroundColor: pillBg,
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: `1px solid ${scrolled ? 'rgba(18,20,28,0.14)' : line}`,
            boxShadow: scrolled
              ? '0 20px 40px -22px rgba(18,20,28,0.28)'
              : '0 12px 30px -22px rgba(18,20,28,0.18)',
          }}
        >
          {/* top accent hairline inside the pill */}
          <div
            className="pointer-events-none absolute inset-x-6 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${emerald}66, ${indigo}66, transparent)` }}
          />

          {/* Logo */}
          <Link to="/" className="itr-focus flex shrink-0 items-center gap-2">
            <div
              className="itr-display flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold"
              style={{ background: `linear-gradient(135deg, ${emerald}, ${indigo})`, color: "#FFFFFF" }}
            >
              M
            </div>
            <div className="hidden items-baseline gap-1.5 sm:flex">
              <span className="itr-display text-base font-medium tracking-tight" style={{ color: ink }}>MyITR</span>
              <span className="itr-mono text-[9px] font-semibold uppercase tracking-widest" style={{ color: emerald }}>online</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="itr-sans itr-navlink itr-focus text-sm font-medium"
                style={{ color: inkSoft }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Live filing counter — desktop only */}
          <div
            key={filedToday}
            className="itr-tick itr-mono hidden shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs xl:flex"
            style={{ backgroundColor: 'rgba(14,157,99,0.10)', border: `1px solid rgba(14,157,99,0.25)` }}
          >
            <span className="itr-live-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            <span style={{ color: emerald }} className="font-semibold">{filedToday.toLocaleString('en-IN')}</span>
            <span style={{ color: inkFaint }} className="itr-sans">filed today</span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            <Link
              to="/login"
              className="itr-sans itr-login-btn itr-focus rounded-lg px-3.5 py-2 text-sm font-semibold"
              style={{ color: ink }}
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="itr-sans itr-cta-primary itr-focus rounded-xl px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: emerald, color: "#FFFFFF", textDecoration: "none" }}
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="itr-focus flex h-9 w-9 shrink-0 items-center justify-center rounded-lg lg:hidden"
            style={{ border: `1px solid ${line}` }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="relative h-4 w-5">
              <span
                className="absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-200"
                style={{ backgroundColor: ink, top: menuOpen ? '7px' : '0px', transform: menuOpen ? 'rotate(45deg)' : 'none' }}
              />
              <span
                className="absolute left-0 top-[7px] block h-0.5 w-5 rounded-full transition-opacity duration-150"
                style={{ backgroundColor: ink, opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-200"
                style={{ backgroundColor: ink, top: menuOpen ? '7px' : '14px', transform: menuOpen ? 'rotate(-45deg)' : 'none' }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation — floating panel below the pill */}
        {menuOpen && (
          <div
            className="itr-mobile-panel mt-2 overflow-hidden rounded-2xl lg:hidden"
            style={{
              backgroundColor: pillBg,
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: `1px solid ${line}`,
              boxShadow: '0 20px 40px -22px rgba(18,20,28,0.28)',
            }}
          >
            <div
              className="itr-mono flex items-center gap-2 px-5 py-3 text-xs"
              style={{ borderBottom: `1px solid ${line}` }}
            >
              <span className="itr-live-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
              <span style={{ color: emerald }} className="font-semibold">{filedToday.toLocaleString('en-IN')}</span>
              <span style={{ color: inkFaint }} className="itr-sans">returns filed today</span>
            </div>

            <nav className="flex flex-col gap-1 px-3 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="itr-sans itr-focus rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-black/[0.04]"
                  style={{ color: inkSoft }}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 flex gap-2 px-1 pt-3" style={{ borderTop: `1px solid ${line}` }}>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="itr-sans itr-focus flex-1 rounded-lg px-4 py-2.5 text-center text-sm font-semibold"
                  style={{ border: `1px solid ${line}`, color: ink, textDecoration: "none" }}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="itr-sans itr-focus flex-1 rounded-lg px-4 py-2.5 text-center text-sm font-semibold"
                  style={{ backgroundColor: emerald, color: "#FFFFFF", textDecoration: "none" }}
                >
                  Get started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}