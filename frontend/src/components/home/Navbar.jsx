import { useState, useEffect, useRef } from 'react';
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
  const [active, setActive] = useState('');
  const progressRef = useRef(null);

  const bg = '#F5F6FA';
  const ink = '#12141C';
  const inkSoft = 'rgba(18,20,28,0.64)';
  const inkFaint = 'rgba(18,20,28,0.44)';
  const line = 'rgba(18,20,28,0.10)';
  const pillBg = 'rgba(255,255,255,0.78)';
  const emerald = '#0E9D63';
  const emeraldDeep = '#0A7F4F';
  const indigo = '#4B5CE0';

  /* scroll state + reading-progress line (updated via ref, no re-render) */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  /* scroll-spy: highlight the link of the section currently in view */
  useEffect(() => {
    const targets = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!targets.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  /* demo ticker */
  useEffect(() => {
    const id = setInterval(() => {
      setFiledToday((n) => n + Math.floor(Math.random() * 3) + 1);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  /* mobile menu: Esc to close, close when resizing to desktop, lock body scroll */
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-50 transition-[background] duration-300"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
        background: scrolled
          ? `linear-gradient(180deg, ${bg} 0%, ${bg}F2 55%, ${bg}00 100%)`
          : bg,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-variant-numeric: tabular-nums; }

        .itr-pill { transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, padding 0.3s ease; }

        .itr-navlink {
          position: relative;
          transition: color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        }
        .itr-navlink:hover { color: ${ink} !important; background-color: rgba(18,20,28,0.045); }
        .itr-navlink[data-active="true"] {
          color: ${ink} !important;
          background-color: #FFFFFF;
          box-shadow: 0 1px 2px rgba(18,20,28,0.06), 0 0 0 1px rgba(18,20,28,0.06);
        }
        .itr-navlink .itr-navdot {
          position: absolute; left: 50%; bottom: 3px;
          width: 4px; height: 4px; border-radius: 50%;
          background: ${emerald};
          transform: translateX(-50%) scale(0);
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1);
        }
        .itr-navlink[data-active="true"] .itr-navdot { transform: translateX(-50%) scale(1); }

        .itr-focus:focus-visible { outline: 2px solid ${emerald}; outline-offset: 2px; border-radius: 10px; }

        .itr-cta-primary {
          position: relative; overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .itr-cta-primary::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: translateX(-120%) skewX(-20deg);
          animation: itr-shine 5s ease-in-out 2s infinite;
        }
        .itr-cta-primary:hover { transform: translateY(-1px); box-shadow: 0 12px 24px -8px ${emerald}88; background-color: ${emeraldDeep}; }
        .itr-cta-primary:active { transform: translateY(0); }
        .itr-cta-primary .itr-arrow { display: inline-block; transition: transform 0.2s ease; }
        .itr-cta-primary:hover .itr-arrow { transform: translateX(3px); }

        .itr-login-btn { transition: background-color 0.2s ease; text-decoration: none; }
        .itr-login-btn:hover { background-color: rgba(18,20,28,0.05); }

        .itr-logo-mark { transition: transform 0.3s cubic-bezier(.34,1.56,.64,1); }
        .itr-logo:hover .itr-logo-mark { transform: rotate(-8deg) scale(1.06); }

        @keyframes itr-shine {
          0% { transform: translateX(-120%) skewX(-20deg); }
          55%, 100% { transform: translateX(280%) skewX(-20deg); }
        }
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
        .itr-mobile-panel { animation: itr-panel-in 0.24s cubic-bezier(.2,.8,.2,1) both; transform-origin: top center; }

        @keyframes itr-fade { from { opacity: 0; } to { opacity: 1; } }
        .itr-backdrop { animation: itr-fade 0.25s ease both; }

        @keyframes itr-item-in {
          0% { opacity: 0; transform: translateX(-8px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .itr-m-item { animation: itr-item-in 0.35s cubic-bezier(.2,.8,.2,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .itr-mobile-panel, .itr-live-dot, .itr-tick, .itr-backdrop, .itr-m-item, .itr-cta-primary::after { animation: none !important; }
          .itr-cta-primary:hover, .itr-logo:hover .itr-logo-mark { transform: none; }
        }
      `}</style>

      {/* skip link for keyboard users */}
      <a
        href="#main"
        className="itr-sans itr-focus absolute left-4 top-2 z-60 -translate-y-20 rounded-lg px-3 py-2 text-sm font-semibold focus:translate-y-0"
        style={{ backgroundColor: ink, color: '#fff' }}
      >
        Skip to content
      </a>

      {/* dim backdrop behind the mobile menu */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
          className="itr-backdrop fixed inset-0 -z-10 cursor-default lg:hidden"
          style={{ backgroundColor: 'rgba(18,20,28,0.22)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }}
        />
      )}

      <div className={`mx-auto max-w-7xl px-3 transition-[padding] duration-300 min-[400px]:px-4 lg:px-6 2xl:max-w-360 ${scrolled ? 'pt-2.5' : 'pt-4'}`}>
        <div
          className={`itr-pill relative flex items-center justify-between gap-2 rounded-2xl pl-3 pr-2.5 sm:gap-3 sm:pl-4 lg:gap-2 lg:pr-3 xl:gap-3 ${scrolled ? 'py-2' : 'py-2.5'}`}
          style={{
            backgroundColor: pillBg,
            backdropFilter: 'blur(18px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
            border: `1px solid ${scrolled ? 'rgba(18,20,28,0.14)' : line}`,
            boxShadow: scrolled
              ? '0 22px 40px -22px rgba(18,20,28,0.3), 0 1px 0 rgba(255,255,255,0.8) inset'
              : '0 12px 30px -22px rgba(18,20,28,0.18), 0 1px 0 rgba(255,255,255,0.8) inset',
          }}
        >
          {/* top accent hairline */}
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${emerald}77, ${indigo}77, transparent)` }}
          />

          {/* reading-progress line along the bottom edge */}
          <div className="pointer-events-none absolute inset-x-4 bottom-0 h-0.5 overflow-hidden rounded-full" aria-hidden="true">
            <div
              ref={progressRef}
              className="h-full origin-left"
              style={{
                background: `linear-gradient(90deg, ${emerald}, ${indigo})`,
                transform: 'scaleX(0)',
                opacity: scrolled ? 0.9 : 0,
                transition: 'opacity 0.3s ease',
              }}
            />
          </div>

          {/* Logo */}
          <Link to="/" className="itr-logo itr-focus flex shrink-0 items-center gap-2.5" aria-label="MyITR home">
            <div
              className="itr-logo-mark itr-display relative flex h-9 w-9 items-center justify-center rounded-xl text-[15px] font-semibold"
              style={{
                background: `linear-gradient(135deg, ${emerald}, ${indigo})`,
                color: '#FFFFFF',
                boxShadow: `0 6px 14px -6px ${emerald}aa, inset 0 1px 0 rgba(255,255,255,0.3)`,
              }}
            >
              M
            </div>
            <div className="hidden items-baseline gap-1.5 min-[380px]:flex">
              <span className="itr-display text-[17px] font-semibold tracking-tight" style={{ color: ink }}>MyITR</span>
              <span className="itr-mono hidden text-[9px] font-semibold uppercase tracking-widest sm:inline lg:hidden xl:inline" style={{ color: emerald }}>online</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-active={active === link.href}
                aria-current={active === link.href ? 'location' : undefined}
                className="itr-sans itr-navlink itr-focus rounded-lg px-2.5 py-1.5 text-[13px] font-medium whitespace-nowrap xl:px-3.5 xl:text-sm"
                style={{ color: inkSoft }}
              >
                {link.label}
                <span className="itr-navdot" />
              </a>
            ))}
          </nav>

          {/* Live filing counter — wide desktop only */}
          <div
            key={filedToday}
            className="itr-tick itr-mono hidden shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs 2xl:flex"
            style={{ backgroundColor: 'rgba(14,157,99,0.10)', border: '1px solid rgba(14,157,99,0.25)' }}
          >
            <span className="itr-live-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
            <span style={{ color: emerald }} className="font-semibold">{filedToday.toLocaleString('en-IN')}</span>
            <span style={{ color: inkFaint }} className="itr-sans">filed today</span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            <Link
              to="/login"
              className="itr-sans itr-login-btn itr-focus rounded-lg px-3 py-2 text-[13px] font-semibold xl:px-3.5 xl:text-sm"
              style={{ color: ink }}
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="itr-sans itr-cta-primary itr-focus inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-[13px] font-semibold xl:px-4 xl:text-sm"
              style={{
                backgroundColor: emerald,
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: `0 8px 18px -8px ${emerald}99, inset 0 1px 0 rgba(255,255,255,0.22)`,
              }}
            >
              Get started
              <span className="itr-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Mobile / tablet right cluster */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
            <Link
              to="/login"
              className="itr-sans itr-login-btn itr-focus hidden rounded-lg px-3 py-2 text-[13px] font-semibold md:inline-flex"
              style={{ color: ink }}
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="itr-sans itr-cta-primary itr-focus hidden items-center rounded-xl px-3.5 py-2 text-[13px] font-semibold min-[400px]:inline-flex"
              style={{
                backgroundColor: emerald,
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: `0 8px 16px -8px ${emerald}99, inset 0 1px 0 rgba(255,255,255,0.22)`,
              }}
            >
              Get started
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="itr-focus flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-black/4"
              style={{ border: `1px solid ${line}`, backgroundColor: menuOpen ? '#FFFFFF' : 'transparent' }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative h-4 w-5">
                <span
                  className="absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-200"
                  style={{ backgroundColor: ink, top: menuOpen ? '7px' : '0px', transform: menuOpen ? 'rotate(45deg)' : 'none' }}
                />
                <span
                  className="absolute left-0 top-1.75 block h-0.5 w-5 rounded-full transition-all duration-150"
                  style={{ backgroundColor: ink, opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0.3)' : 'none' }}
                />
                <span
                  className="absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-200"
                  style={{ backgroundColor: ink, top: menuOpen ? '7px' : '14px', transform: menuOpen ? 'rotate(-45deg)' : 'none' }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation — floating panel below the pill */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="itr-mobile-panel mt-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain rounded-2xl md:ml-auto md:max-w-sm lg:hidden"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(22px)',
              WebkitBackdropFilter: 'blur(22px)',
              border: `1px solid ${line}`,
              boxShadow: '0 30px 60px -24px rgba(18,20,28,0.38)',
            }}
          >
            <div
              className="itr-mono flex items-center gap-2 px-5 py-3 text-xs"
              style={{ borderBottom: `1px solid ${line}`, backgroundColor: 'rgba(14,157,99,0.05)' }}
            >
              <span className="itr-live-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
              <span key={filedToday} className="itr-tick font-semibold" style={{ color: emerald }}>
                {filedToday.toLocaleString('en-IN')}
              </span>
              <span style={{ color: inkFaint }} className="itr-sans">returns filed today</span>
            </div>

            <nav className="flex flex-col gap-0.5 px-2.5 py-2.5" aria-label="Mobile">
              {navLinks.map((link, i) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="itr-sans itr-m-item itr-focus group flex items-center justify-between rounded-xl px-3 py-3.5 text-[15px] font-medium transition-colors hover:bg-black/4"
                    style={{
                      color: isActive ? ink : inkSoft,
                      backgroundColor: isActive ? 'rgba(14,157,99,0.08)' : undefined,
                      animationDelay: `${60 + i * 45}ms`,
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="itr-mono text-[11px] font-semibold" style={{ color: isActive ? emerald : inkFaint }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </span>
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      style={{ color: isActive ? emerald : inkFaint }}
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </a>
                );
              })}

              <div
                className="itr-m-item mt-2 flex gap-2 px-1 pt-3"
                style={{ borderTop: `1px solid ${line}`, animationDelay: `${60 + navLinks.length * 45}ms` }}
              >
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="itr-sans itr-focus flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-black/4"
                  style={{ border: `1px solid ${line}`, color: ink, textDecoration: 'none', backgroundColor: '#fff' }}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="itr-sans itr-cta-primary itr-focus flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold"
                  style={{
                    backgroundColor: emerald,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    boxShadow: `0 10px 20px -10px ${emerald}aa, inset 0 1px 0 rgba(255,255,255,0.22)`,
                  }}
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