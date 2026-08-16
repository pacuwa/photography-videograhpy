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
    body: 'Hand-bound linen albums and silver-gelatin prints from our darkroom partners in Porto, for clients who want the work to outlast the hard drive.',
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
        Grain &amp; Glass
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
        <Frame tint={['#3a2c22', '#0d0a08']} className="w-full h-full" angle={160} />
      </div>
      <div
        className="absolute top-0 right-0 w-[1px] h-full bg-[var(--line)] hidden md:block"
        style={{ left: '62%' }}
      />
      <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24 pt-40">
        <div className="max-w-5xl">
          <p className="animate-rise text-xs uppercase tracking-[0.3em] text-[var(--copper-bright)] mb-6">
            Photography &amp; film studio — est. 2016
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
              planned. Weddings, brand films, and portraits shot the same honest way since 2016.
            </p>
            <a
              href="#work"
              className="shrink-0 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[var(--ink)] border-b border-[var(--copper)] pb-1 hover:text-[var(--copper-bright)] transition-colors w-max"
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
          Four kinds of work, all shot by the same two-person crew, all delivered by people who
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

function Studio() {
  return (
    <section id="studio" className="px-6 md:px-10 py-28 md:py-36 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="font-display italic text-4xl md:text-5xl mb-8">The studio</h2>
          <p className="text-[var(--ink-dim)] leading-relaxed mb-5">
            Grain &amp; Glass started in a one-bedroom apartment in Porto in 2016, when Odalys
            Ferreira got tired of handing wedding clients a gallery of two hundred nearly-identical
            posed shots. The studio now runs four full-time shooters and takes on roughly forty
            projects a year — deliberately capped so every frame still gets a human edit.
          </p>
          <p className="text-[var(--ink-dim)] leading-relaxed">
            We shoot on a mix of digital and film, favor available light over strobes, and would
            rather deliver three hundred honest frames than nine hundred safe ones.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:pt-2">
          <Stat value="212" label="Weddings shot since 2016" />
          <Stat value="38" label="Countries we've worked in" />
          <Stat value="4" label="Full-time shooters on staff" />
          <Stat value="9yrs" label="Average client retention for return sittings" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-[var(--line)] pt-4">
      <div className="font-display italic text-4xl text-[var(--copper-bright)]">{value}</div>
      <p className="text-[var(--ink-dim)] text-sm mt-2 leading-snug">{label}</p>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "They talked us out of a shot list on the first call. I fought it for about a week and then let it go — the gallery they delivered was the only wedding album either of us has ever looked at twice.",
    name: 'Bettina Okonkwo-Reyes',
    role: 'Client, Low Tide Vows',
  },
  {
    quote:
      "We've hired production companies that charged three times as much and delivered something that felt like a car commercial. Grain & Glass gave our machinists a film they actually recognized themselves in.",
    name: 'Warrick Thresher',
    role: 'Owner, Thresher Supply Co.',
  },
  {
    quote:
      'Anouk is notoriously difficult to photograph — she told me so herself before the sitting. Thirty-five minutes of light and they still found the frame that ended up on the album sleeve.',
    name: 'Iben Solberg',
    role: 'Label manager, Corvid Recordings',
  },
]

function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36 bg-[var(--ground-raised)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl mb-14">In their words</h2>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 px-6 md:px-10 snap-x">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[85vw] sm:w-[420px] border border-[var(--line)] rounded-sm p-8 bg-[var(--ground)]"
          >
            <p className="font-display italic text-xl md:text-2xl leading-snug text-[var(--ink)] mb-6">
              "{t.quote}"
            </p>
            <p className="text-sm uppercase tracking-[0.12em] text-[var(--copper-bright)]">
              {t.name}
            </p>
            <p className="text-xs text-[var(--ink-dim)] mt-1">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-36 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display italic text-4xl md:text-5xl mb-8">
            Tell us what you're
            <br />
            trying to capture.
          </h2>
          <p className="text-[var(--ink-dim)] leading-relaxed mb-10 max-w-sm">
            We answer inquiries within two business days and take on roughly forty projects a
            year, so dates book out six to nine months ahead — especially for weddings between
            May and October.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-t border-[var(--line)] py-3">
              <span className="text-[var(--ink-dim)] uppercase tracking-[0.12em]">Studio</span>
              <span>Rua das Flores 112, Porto, Portugal</span>
            </div>
            <div className="flex justify-between border-t border-[var(--line)] py-3">
              <span className="text-[var(--ink-dim)] uppercase tracking-[0.12em]">Email</span>
              <span>hello@grainandglass.studio</span>
            </div>
            <div className="flex justify-between border-t border-b border-[var(--line)] py-3">
              <span className="text-[var(--ink-dim)] uppercase tracking-[0.12em]">Phone</span>
              <span>+351 22 019 4477</span>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-[var(--line)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-dim)] uppercase tracking-[0.12em]">
      <span>© {new Date().getFullYear()} Grain &amp; Glass Studio</span>
      <div className="flex gap-6">
        <a href="#top" className="hover:text-[var(--copper-bright)] transition-colors">
          Back to top
        </a>
        <a href="#" className="hover:text-[var(--copper-bright)] transition-colors">
          Instagram
        </a>
        <a href="#" className="hover:text-[var(--copper-bright)] transition-colors">
          Vimeo
        </a>
      </div>
    </footer>
  )
}
