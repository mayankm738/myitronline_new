import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { icon: '🚀', title: 'Getting Started', description: 'Create your account and learn the basics of MyITRonline.', articles: 6 },
  { icon: '🧮', title: 'Tax Calculator', description: 'Understand your estimated tax and explore your options.', articles: 8 },
  { icon: '📋', title: 'ITR Filing', description: 'Everything you need to know about filing your ITR.', articles: 12 },
  { icon: '👤', title: 'Account & Login', description: 'Manage your account, password and profile settings.', articles: 7 },
  { icon: '🔐', title: 'Security & Privacy', description: 'Learn how we help keep your information protected.', articles: 5 },
  { icon: '💳', title: 'Payments', description: 'Plans, payments, billing and other payment questions.', articles: 6 },
]

const popularArticles = [
  'How do I create a MyITRonline account?',
  'How can I calculate my estimated tax?',
  'How do I know which ITR to file?',
  'I forgot my password. What should I do?',
  'How can I update my account information?',
  'How can I contact support?',
]

const faqs = [
  { question: 'How do I get started?', answer: 'Create an account and follow the guided process. You can start by using the tax calculator to understand your estimated tax situation.' },
  { question: 'I forgot my password. How can I reset it?', answer: 'Go to the Login page and select "Forgot password?". Enter your registered email address and follow the reset instructions.' },
  { question: 'Can I use the tax calculator before creating an account?', answer: 'This depends on how the calculator is configured in your application. You can decide whether it should be available publicly or only to logged-in users.' },
  { question: 'How can I contact support?', answer: 'You can use the Contact page to send your question or support request to the MyITRonline team.' },
]

export default function HelpCenterPage() {
  const [search, setSearch] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const bg = "#F5F6FA"
  const paper = "#FFFFFF"
  const ink = "#12141C"
  const inkSoft = "rgba(18,20,28,0.64)"
  const inkFaint = "rgba(18,20,28,0.44)"
  const line = "rgba(18,20,28,0.10)"
  const emerald = "#0E9D63"
  const emeraldSoft = "rgba(14,157,99,0.12)"
  const indigo = "#4B5CE0"

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return popularArticles
    return popularArticles.filter((article) => article.toLowerCase().includes(query))
  }, [search])

  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: bg, color: ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        .itr-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .itr-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .itr-mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .itr-dotgrid { background-image: radial-gradient(rgba(18,20,28,0.07) 1px, transparent 1px); background-size: 24px 24px; }
        .itr-back { transition: gap 0.2s ease, color 0.2s ease; }
        .itr-back:hover { color: ${ink} !important; }
        .itr-catbtn { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .itr-catbtn:hover { transform: translateY(-6px); border-color: ${emerald}55; box-shadow: 0 24px 48px -24px rgba(18,20,28,0.22); }
        .itr-artrow { transition: background-color 0.2s ease; }
        .itr-artrow:hover { background-color: ${emeraldSoft}; }
        .itr-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .itr-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 28px -10px ${emerald}55; }
        .itr-search:focus-within { border-color: ${emerald}77 !important; box-shadow: 0 0 0 4px ${emeraldSoft}; }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ backgroundColor: `${emerald}1A` }} />
          <div className="absolute right-[-150px] top-[80px] h-[24rem] w-[24rem] rounded-full blur-3xl" style={{ backgroundColor: `${indigo}1A` }} />
        </div>
        <div className="itr-dotgrid pointer-events-none absolute inset-0 opacity-50" />

        <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-8 sm:px-8 lg:px-12 lg:pb-36">
          <div className="flex items-center justify-between">
            <Link to="/" className="itr-sans itr-back group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}>
              <span className="transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
              Back to Home
            </Link>

            <div className="itr-mono hidden items-center gap-2 text-xs font-medium sm:flex" style={{ color: inkFaint }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: emerald }} />
              Support Center
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">
            <div className="itr-mono inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider" style={{ border: `1px solid ${line}`, backgroundColor: paper, color: inkSoft }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: emerald }} />
              MyITRonline Help Center
            </div>

            <h1 className="itr-display mt-7 text-4xl font-medium tracking-tight sm:text-5xl lg:text-7xl" style={{ color: ink }}>
              How can we
              <span className="block" style={{ color: emerald }}>help you today?</span>
            </h1>

            <p className="itr-sans mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg" style={{ color: inkSoft }}>
              Find simple answers, useful guides and everything you need to confidently manage your tax journey.
            </p>

            <div className="mx-auto mt-10 max-w-3xl">
              <div className="itr-search relative flex items-center rounded-2xl p-2 transition" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 20px 40px -28px rgba(18,20,28,0.2)" }}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg" style={{ backgroundColor: bg, color: inkFaint }}>&#128269;</div>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search articles, guides or questions..."
                  className="itr-sans h-12 flex-1 bg-transparent px-3 text-sm outline-none"
                  style={{ color: ink }}
                />
                {search && (
                  <button type="button" onClick={() => setSearch('')} className="itr-sans mr-2 rounded-lg px-3 py-2 text-xs font-semibold transition" style={{ color: inkFaint }}>
                    Clear
                  </button>
                )}
                <div className="itr-sans hidden rounded-xl px-4 py-3 text-xs font-bold sm:block" style={{ backgroundColor: emerald, color: "#FFFFFF" }}>
                  Search
                </div>
              </div>

              <div className="itr-sans mt-4 flex flex-wrap justify-center gap-2 text-xs" style={{ color: inkFaint }}>
                <span>Popular:</span>
                <button onClick={() => setSearch('tax')} className="transition" style={{ color: emerald }}>tax calculator</button>
                <span>&bull;</span>
                <button onClick={() => setSearch('password')} className="transition" style={{ color: emerald }}>password</button>
                <span>&bull;</span>
                <button onClick={() => setSearch('ITR')} className="transition" style={{ color: emerald }}>ITR filing</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="relative z-10 -mt-8 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl sm:grid-cols-3" style={{ backgroundColor: paper, border: `1px solid ${line}`, boxShadow: "0 24px 48px -30px rgba(18,20,28,0.25)" }}>
          {[["40+", "Helpful articles"], ["6", "Help categories"], ["24/7", "Self-service support"]].map(([value, label], i) => (
            <div key={label} className="px-6 py-6 text-center" style={i < 2 ? { borderRight: `1px dashed ${line}` } : {}}>
              <p className="itr-mono text-2xl font-bold" style={{ color: i === 2 ? emerald : ink }}>{value}</p>
              <p className="itr-sans mt-1 text-xs font-medium" style={{ color: inkFaint }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="itr-mono text-xs font-bold uppercase tracking-widest" style={{ color: emerald }}>Browse by topic</span>
              <h2 className="itr-display mt-3 text-3xl font-medium tracking-tight" style={{ color: ink }}>Find the right help</h2>
            </div>
            <p className="itr-sans max-w-md text-sm leading-6" style={{ color: inkSoft }}>
              Explore our knowledge base and find answers organized around the things you use most.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <button key={category.title} type="button" className="itr-catbtn group relative overflow-hidden rounded-3xl p-6 text-left" style={{ backgroundColor: paper, border: `1px solid ${line}` }}>
                <div className="relative flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition duration-300" style={{ backgroundColor: emeraldSoft }}>{category.icon}</div>
                  <span className="itr-mono rounded-full px-3 py-1.5 text-[11px] font-bold" style={{ backgroundColor: bg, color: inkFaint }}>{category.articles} articles</span>
                </div>

                <h3 className="itr-display relative mt-7 text-lg font-medium" style={{ color: ink }}>{category.title}</h3>
                <p className="itr-sans relative mt-2 text-sm leading-6" style={{ color: inkSoft }}>{category.description}</p>

                <div className="relative mt-6 flex items-center justify-between">
                  <span className="itr-sans text-sm font-semibold" style={{ color: emerald }}>Explore articles</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm transition duration-300 group-hover:translate-x-1" style={{ backgroundColor: bg, color: inkFaint }}>&rarr;</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular articles */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24" style={{ backgroundColor: paper, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="itr-mono text-xs font-bold uppercase tracking-widest" style={{ color: emerald }}>Knowledge base</span>
              <h2 className="itr-display mt-3 text-3xl font-medium tracking-tight" style={{ color: ink }}>Popular articles</h2>
            </div>
            <p className="itr-mono text-sm" style={{ color: inkFaint }}>{filteredArticles.length} helpful result{filteredArticles.length !== 1 ? 's' : ''}</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl" style={{ border: `1px solid ${line}` }}>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <button key={article} type="button" className="itr-artrow group flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7" style={index !== filteredArticles.length - 1 ? { borderBottom: `1px solid ${line}` } : {}}>
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="itr-mono flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold" style={{ backgroundColor: bg, color: inkFaint }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="itr-sans truncate text-sm font-semibold sm:text-base" style={{ color: ink }}>{article}</span>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition group-hover:translate-x-1" style={{ border: `1px solid ${line}`, color: inkFaint }}>&rarr;</span>
                </button>
              ))
            ) : (
              <div className="px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl" style={{ backgroundColor: bg }}>&#128269;</div>
                <h3 className="itr-display mt-5 font-medium" style={{ color: ink }}>No articles found</h3>
                <p className="itr-sans mt-2 text-sm" style={{ color: inkSoft }}>Try searching with a different keyword.</p>
                <button type="button" onClick={() => setSearch('')} className="itr-sans mt-5 text-sm font-semibold" style={{ color: emerald }}>Clear search</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="itr-mono text-xs font-bold uppercase tracking-widest" style={{ color: emerald }}>Quick answers</span>
            <h2 className="itr-display mt-3 text-3xl font-medium tracking-tight" style={{ color: ink }}>Frequently asked questions</h2>
            <p className="itr-sans mx-auto mt-4 max-w-xl text-sm leading-6" style={{ color: inkSoft }}>Can&apos;t find the answer you&apos;re looking for? Check the most common questions below.</p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className="overflow-hidden rounded-2xl transition-all duration-300" style={{ backgroundColor: isOpen ? emeraldSoft : paper, border: `1px solid ${isOpen ? emerald + '44' : line}` }}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} className="itr-sans flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6">
                    <span className="text-sm font-bold" style={{ color: ink }}>{faq.question}</span>
                    <span className="itr-mono flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm transition-all duration-300" style={{ backgroundColor: isOpen ? emerald : bg, color: isOpen ? "#fff" : inkFaint, transform: isOpen ? "rotate(180deg)" : "none" }}>&darr;</span>
                  </button>
                  <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <div className="border-t px-5 pb-6 pt-5 sm:px-6" style={{ borderStyle: "dashed", borderColor: emerald + '33' }}>
                        <p className="itr-sans text-sm leading-7" style={{ color: inkSoft }}>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-7 py-14 text-center sm:px-12 sm:py-16" style={{ background: `linear-gradient(135deg, ${emerald}, ${indigo})` }}>
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl" style={{ backgroundColor: "rgba(255,255,255,0.16)" }}>&#128172;</div>
            <h2 className="itr-display mt-6 text-3xl font-medium text-white">Still need some help?</h2>
            <p className="itr-sans mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Our support team is ready to help you with your questions and guide you in the right direction.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="itr-sans itr-cta inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold" style={{ backgroundColor: "#FFFFFF", color: emerald }}>
                Contact Support<span className="ml-2">&rarr;</span>
              </Link>
              <Link to="/" className="itr-sans inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold text-white" style={{ border: "1px solid rgba(255,255,255,0.35)" }}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}