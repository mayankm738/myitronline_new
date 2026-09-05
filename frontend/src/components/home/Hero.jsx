export default function Hero() {
  const bg = "#F5F6FA";
  const ink = "#12141C";
  const inkSoft = "rgba(18,20,28,0.64)";
  const inkFaint = "rgba(18,20,28,0.44)";
  const line = "rgba(18,20,28,0.10)";

  const paper = "#FFFFFF";
  const inkOnPaper = "#14171F";
  const inkOnPaperSoft = "rgba(20,23,31,0.62)";
  const inkOnPaperFaint = "rgba(20,23,31,0.42)";
  const lineOnPaper = "rgba(20,23,31,0.12)";

  const emerald = "#0E9D63";
  const emeraldSoft = "rgba(14,157,99,0.12)";
  const indigo = "#4B5CE0";
  const stamp = "#C43E1C";

  const lineItems = [
    { label: "Gross income (Form 16)", value: "\u20B9 18,40,000" },
    { label: "Deductions (80C + 80D)", value: "\u2212 \u20B9 2,10,000" },
    { label: "Taxable income", value: "\u20B9 16,30,000" },
  ];

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: bg }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

        .itr-dotgrid {
          background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        @keyframes itr-rise {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes itr-card-settle {
          0% { opacity: 0; transform: translateY(20px) rotate(0deg); }
          100% { opacity: 1; transform: translateY(0) rotate(-2.5deg); }
        }
        @keyframes itr-stamp-hit {
          0% { opacity: 0; transform: rotate(-14deg) scale(2.1); }
          55% { opacity: 0.95; transform: rotate(-14deg) scale(0.9); }
          75% { transform: rotate(-14deg) scale(1.06); }
          100% { opacity: 0.92; transform: rotate(-14deg) scale(1); }
        }
        @keyframes itr-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(14,157,99,0.5); }
          70% { box-shadow: 0 0 0 6px rgba(14,157,99,0); }
        }
        @keyframes itr-float {
          0%, 100% { transform: translateY(0px) rotate(-2.5deg); }
          50% { transform: translateY(-8px) rotate(-2.5deg); }
        }

        .itr-r1 { animation: itr-rise 0.6s ease-out 0.05s both; }
        .itr-r2 { animation: itr-rise 0.6s ease-out 0.16s both; }
        .itr-r3 { animation: itr-rise 0.6s ease-out 0.27s both; }
        .itr-r4 { animation: itr-rise 0.6s ease-out 0.38s both; }
        .itr-card-in { animation: itr-card-settle 0.7s cubic-bezier(.2,.8,.2,1) 0.25s both, itr-float 6s ease-in-out 1.4s infinite; }
        .itr-item-1 { animation: itr-rise 0.5s ease-out 0.75s both; }
        .itr-item-2 { animation: itr-rise 0.5s ease-out 0.9s both; }
        .itr-item-3 { animation: itr-rise 0.5s ease-out 1.05s both; }
        .itr-item-4 { animation: itr-rise 0.5s ease-out 1.2s both; }
        .itr-stamp-in { animation: itr-stamp-hit 0.55s cubic-bezier(.34,1.56,.64,1) 1.4s both; }
        .itr-live-dot { animation: itr-pulse 2.2s ease-out infinite; }

        .itr-cta-primary { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .itr-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -10px ${emerald}66; }
        .itr-cta-ghost { transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease; }
        .itr-cta-ghost:hover { background-color: ${emeraldSoft}; border-color: ${emerald}; transform: translateY(-2px); }

        .itr-focus:focus-visible { outline: 2px solid ${emerald}; outline-offset: 3px; border-radius: 10px; }

        @media (prefers-reduced-motion: reduce) {
          .itr-r1, .itr-r2, .itr-r3, .itr-r4, .itr-card-in, .itr-item-1, .itr-item-2, .itr-item-3, .itr-item-4, .itr-stamp-in, .itr-live-dot {
            animation: none;
          }
          .itr-cta-primary:hover, .itr-cta-ghost:hover { transform: none; }
        }
      `}</style>

      {/* decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -left-44 -top-36 h-128 w-lg rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${emerald}, transparent 70%)`, opacity: 0.14 }}
      />
      <div
        className="pointer-events-none absolute -bottom-56 -right-36 h-144 w-xl rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle at center, ${indigo}, transparent 70%)`, opacity: 0.12 }}
      />
      <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div
              className="itr-sans itr-mono itr-r1 mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
              style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}
            >
              <span className="itr-live-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
              AY 2026&ndash;27 &middot; filing window open
            </div>

            <h1
              className="itr-display itr-r2 max-w-xl text-5xl font-medium leading-[1.06] tracking-tight sm:text-6xl lg:text-[4rem]"
              style={{ color: ink }}
            >
              Your return,
              <br />
              <span style={{ color: emerald }}>filed</span> in minutes.
            </h1>

            <p className="itr-sans itr-r3 mt-7 max-w-lg text-lg leading-8" style={{ color: inkSoft }}>
              Upload your Form 16, answer a few quick questions, and we&apos;ll
              find every deduction you&apos;re owed &mdash; no queues, no
              paperwork, no jargon.
            </p>

            <div className="itr-r3 mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="itr-sans itr-cta-primary itr-focus inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold"
                style={{ backgroundColor: emerald, color: "#FFFFFF", boxShadow: `0 12px 24px -8px ${emerald}55` }}
              >
                File my return
                <span>&rarr;</span>
              </a>

              <a
                href="#calculator"
                className="itr-sans itr-cta-ghost itr-focus inline-flex items-center justify-center rounded-xl border px-6 py-3.5 text-base font-semibold"
                style={{ borderColor: line, color: ink, backgroundColor: paper }}
              >
                See a sample return
              </a>
            </div>

            <div className="itr-sans itr-r4 mt-12 flex max-w-lg items-stretch">
              {[
                { value: "50L+", label: "Returns filed" },
                { value: "4.8/5", label: "Average rating" },
                { value: "\u20B9120Cr+", label: "Refunds tracked" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex-1 px-5 first:pl-0"
                  style={{ borderLeft: i === 0 ? "none" : `1px dashed ${line}` }}
                >
                  <p className="itr-mono text-xl font-semibold" style={{ color: ink }}>{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide" style={{ color: inkFaint }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — stamped acknowledgement receipt */}
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="itr-card-in relative px-7 pb-8 pt-9"
              style={{ backgroundColor: paper, borderRadius: "18px", boxShadow: "0 40px 70px -25px rgba(18,20,28,0.22)", border: `1px solid ${lineOnPaper}` }}
            >
              {/* perforated top edge — matches page background to punch through */}
              <div className="pointer-events-none absolute -top-1.75 left-0 right-0 flex justify-between px-3">
                {Array.from({ length: 13 }).map((_, i) => (
                  <span key={i} className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: bg }} />
                ))}
              </div>

              <p className="itr-mono text-center text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: inkOnPaperFaint }}>
                ITR&ndash;V &middot; Acknowledgement
              </p>
              <p className="itr-mono mt-1 text-center text-[11px]" style={{ color: inkOnPaperFaint }}>
                Ref. IN17X9K204FY26
              </p>

              <div className="mt-5 border-t" style={{ borderStyle: "dashed", borderColor: lineOnPaper }} />

              <div className="itr-sans mt-5 space-y-4">
                {lineItems.map((item, i) => (
                  <div key={item.label} className={`itr-item-${i + 1} flex items-baseline justify-between gap-3 text-sm`}>
                    <span style={{ color: inkOnPaperSoft }}>{item.label}</span>
                    <span className="itr-mono shrink-0 font-medium" style={{ color: inkOnPaper }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t" style={{ borderStyle: "dashed", borderColor: lineOnPaper }} />

              <div className="itr-item-4 mt-5 flex items-baseline justify-between rounded-xl px-4 py-3.5" style={{ backgroundColor: emeraldSoft }}>
                <span className="itr-sans text-sm font-semibold" style={{ color: "#0A6B45" }}>Refund due</span>
                <span className="itr-mono text-lg font-semibold" style={{ color: emerald }}>&#8377;41,200</span>
              </div>

              {/* stamp */}
              <div
                className="itr-stamp-in pointer-events-none absolute -right-2 bottom-8 flex h-24 w-24 items-center justify-center rounded-full sm:-right-5"
                style={{ border: `2.5px solid ${stamp}`, mixBlendMode: "multiply" }}
              >
                <div className="flex h-19 w-19 items-center justify-center rounded-full" style={{ border: `1px solid ${stamp}` }}>
                  <div className="itr-mono text-center text-[10px] font-bold uppercase leading-tight tracking-wider" style={{ color: stamp }}>
                    e&ndash;verified
                    <br />&amp; filed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}