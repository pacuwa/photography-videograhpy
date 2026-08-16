import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import projects from '@/data/portfolio'
import { Frame } from '@/components/Frame'

export const Route = createFileRoute('/work/$projectId')({
  component: ProjectPage,
  loader: async ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId)
    if (!project) throw notFound()
    const index = projects.indexOf(project)
    const next = projects[(index + 1) % projects.length]
    return { project, next }
  },
})

function ProjectPage() {
  const { project, next } = Route.useLoaderData()

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference">
        <Link to="/" className="font-display italic text-lg tracking-tight text-[var(--ink)]">
          Grain &amp; Glass
        </Link>
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.16em] text-[var(--ink)] hover:text-[var(--copper-bright)] transition-colors"
        >
          ← All work
        </Link>
      </header>

      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <Frame tint={project.tint} className="w-full h-full" angle={150}>
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 z-10">
            <span className="inline-block text-[10px] uppercase tracking-[0.18em] bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full text-[var(--ink)] mb-4">
              {project.category} — {project.year}
            </span>
            <h1 className="font-display italic text-[10vw] md:text-6xl leading-[0.95] text-[var(--ink)] max-w-3xl">
              {project.title}
            </h1>
          </div>
        </Frame>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
          <div className="space-y-6 text-sm">
            <Field label="Client" value={project.client} />
            <Field label="Location" value={project.location} />
            <Field label="Year" value={String(project.year)} />
            <Field label="Category" value={project.category} />
            <div>
              <span className="block text-xs uppercase tracking-[0.14em] text-[var(--ink-dim)] mb-2">
                Credits
              </span>
              <ul className="space-y-1">
                {project.credits.map((c) => (
                  <li key={c.role} className="flex justify-between gap-4">
                    <span className="text-[var(--ink-dim)]">{c.role}</span>
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-display italic text-2xl md:text-3xl leading-snug mb-6 text-[var(--copper-bright)]">
              {project.summary}
            </p>
            <p className="text-[var(--ink-dim)] leading-relaxed">{project.story}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-6 md:px-10 py-16">
        <Link
          to="/work/$projectId"
          params={{ projectId: next.id }}
          className="group flex items-center justify-between max-w-5xl mx-auto"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--ink-dim)]">
              Next project
            </span>
            <h3 className="font-display italic text-3xl md:text-5xl mt-2 group-hover:text-[var(--copper-bright)] transition-colors">
              {next.title}
            </h3>
          </div>
          <span className="text-3xl text-[var(--copper)] group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[var(--line)] pt-3">
      <span className="block text-xs uppercase tracking-[0.14em] text-[var(--ink-dim)] mb-1">
        {label}
      </span>
      <span>{value}</span>
    </div>
  )
}
