import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import projects from '@/data/portfolio'
import { Frame } from '@/components/Frame'
import { ContactForm } from '@/components/ContactForm'

export const Route = createFileRoute('/')({ 
  component: Home,
})

const services = [
  {
    n: '01',
    title: 'Weddings & Elopements',
    body: 'Full-day, two-camera coverage built around your actual timeline, not a shot list borrowed from a magazine. Delivered as a graded gallery in six weeks, film in twelve.',
  },
  {
    n: '02',
    title: 'Documentary & Brand Film',
    body: 'Short films for founders, restaurants, and makers who want the unglamorous truth of the work, not a highlight reel. Two to four shoot days, cut on-site with the client present.',
  },
  {
    n: '03',
    title: 'Editorial Portraiture',
    body: 'Sittings for musicians, chefs, and small teams who need portraits with a point of view. Location scouted around your actual light, not a rented studio.',
  },
  {
    n: '04',
    title: 'Prints & Archival Books',
    body: 'Hand-bound linen albums and silver-gelatin prints from our darkroom partners, for clients who want the work to outlast the hard drive.',
  },
]

const words = [
  'WEDDINGS',
  'DOCUMENTARY',
  'BRAND FILM',
  'ELOPEMENTS',
  'EDITORIAL',
  'ARCHIVAL PRINT',
]

function Home() {
  const [filter, setFilter] = useState<'All' | 'Photography' | 'Videography'>('All')
  const visible = projects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work filter={filter} setFilter={setFilter} visible={visible} />
      <Studio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference">
      <a href="#top" className="font-display italic text-lg tracking-tight text-[var(--ink)]">
        Classic Photo Studio
      </a>
      <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.16em] text-[var(--ink)]">
        <a href="#services" className="hover:text-[var(--copper-bright)] transition-colors">
          Services
        </a>
        <a href="#work" className="hover:text-[var(--copper-bright)] transition-colors">
          Work
        </a>
        <a href="#studio" className="hover:text-[var(--copper-bright)] transition-colors">
          Studio
        </a>
        <a
          href="#contact"
          className="border border-current px-4 py-2 hover:text-[var(--copper-bright)] transition-colors"
        >
          Inquire
        </a>
      </nav>
      <a href="#contact" className="md:hidden text-xs uppercase tracking-[0.16em] text-[var(--ink)]">
        Inquire
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Frame tint={["#3a2c22", "#0d0a08"]} className="w-full h-full" angle={160} />
      </div>
      <div
        className="absolute top-0 right-0 w-[1px] h-full bg-[var(--line)] hidden md:block"
        style={{ left: '62%' }}
      />
      <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24 pt-40">
        <div className="max-w-5xl">
          <p className="animate-rise text-xs uppercase tracking-[0.3em] text-[var(--copper-bright)] mb-6">
            Photography & film studio
          </p>
          <h1
            className="animate-rise font-display italic font-light text-[13vw] md:text-[6.4vw] leading-[0.95] text-[var(--ink)]"
            style={{ animationDelay: '0.1s' }}
          >
            We photograph what
            <br />
            actually happened.
          </h1>
          <div
            className="animate-rise flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10 md:mt-14"
            style={{ animationDelay: '0.25s' }}
          >
            <p className="max-w-md text-[var(--ink-dim)] leading-relaxed">
              Two cameras, no direction to "act natural," and a bias toward the moment nobody
              planned. Weddings, brand films, and portraits shot the same honest way.
            </p>
            <a
              href="#work"
              className="shrink-0 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[var(--ink)] border-b border-[var(--copper)] pb-1 hover:text-[var(--copper-bright)] transition-colors"
            >
              See the work ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const line = [...words, ...words]
  return (
    <div className="border-y border-[var(--line)] py-4 overflow-hidden bg-[var(--ground-raised)]">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {line.map((w, i) => (
          <span
            key={i}
            className="mx-6 text-sm tracking-[0.2em] text-[var(--ink-dim)] flex items-center gap-6"
          >
            {w}
            <span className="text-[var(--copper)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-28 md:py-36 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <h2 className="font-display italic text-4xl md:text-5xl">What we shoot</h2>
        <p className="max-w-sm text-[var(--ink-dim)] text-sm leading-relaxed">
          Four kinds of work, all shot by our professional crew, all delivered by people who
          were on set — never outsourced to an editing house.
        </p>
      </div>
      <div>
        {services.map((s, i) => (
          <div
            key={s.n}
            className={`grid md:grid-cols-[100px_1fr_1fr] gap-4 md:gap-10 py-9 border-t border-[var(--line)] ${
              i === services.length - 1 ? 'border-b' : ''
            } ${i % 2 === 1 ? 'md:pl-16' : ''}`}
          >
            <span className="font-display italic text-[var(--copper)] text-xl">{s.n}</span>
            <h3 className="text-2xl md:text-3xl font-display">{s.title}</h3>
            <p className="text-[var(--ink-dim)] leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Work({
  filter,
  setFilter,
  visible,
}: {
  filter: 'All' | 'Photography' | 'Videography'
  setFilter: (f: 'All' | 'Photography' | 'Videography') => void
  visible: Array<(typeof projects)[number]>
}) {
  const tabs: Array<'All' | 'Photography' | 'Videography'> = [
    'All',
    'Photography',
    'Videography',
  ]
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-36 bg-[var(--ground-raised)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <h2 className="font-display italic text-4xl md:text-5xl">Selected work</h2>
          <div className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] rounded-sm border transition-colors ${
                  filter === t
                    ? 'border-[var(--copper)] text-[var(--copper-bright)]'
                    : 'border-[var(--line)] text-[var(--ink-dim)] hover:border-[var(--ink-dim)]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-6 gap-5">
          {visible.map((p, i) => {
            const span =
              i % 5 === 0 ? 'md:col-span-4' : i % 5 === 3 ? 'md:col-span-6' : 'md:col-span-2'
            return (
              <Link
                key={p.id}
                to="/work/$projectId"
                params={{ projectId: p.id }}
                className={`group relative block ${span}`}
              >
                <Frame tint={p.tint} className="w-full aspect-[4/5] rounded-sm">
                  <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                    <span className="self-start text-[10px] uppercase tracking-[0.18em] bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full text-[var(--ink)]">
                      {p.category}
                    </span>
                    <div className="translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-display italic text-2xl md:text-3xl text-[var(--ink)]">
                        {p.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-dim)] mt-1">
                        {p.location} — {p.year}
                      </p>
                    </div>
                  </div>
                </Frame>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
