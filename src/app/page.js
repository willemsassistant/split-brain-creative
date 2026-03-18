import Link from "next/link";

const featuredProjects = [
  {
    name: "Campaign Platform",
    category: "Web design / front-end system",
    note: "A live political campaign site built with clarity, speed, and a cleaner visual hierarchy than the category usually gets.",
  },
  {
    name: "Studio Identity in Progress",
    category: "Brand direction / internal build",
    note: "An evolving identity system exploring skull-adjacent forms, dark editorial contrast, and a more human counterpoint to template culture.",
  },
  {
    name: "Selected Experiments",
    category: "Creative direction / design studies",
    note: "Visual systems and motion explorations used to test how far atmosphere can go without losing clarity.",
  },
];

const services = [
  "Brand identity",
  "Web design",
  "Creative direction",
  "Art direction",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 py-5 text-sm uppercase tracking-[0.24em] text-white/70">
          <Link href="/" className="text-white">Split Brain Creative</Link>
          <nav className="flex items-center gap-5 sm:gap-8">
            <Link href="/work" className="transition hover:text-white">Work</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">
              Brand identity / web design / creative direction / art direction
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] text-[var(--bone)] sm:text-7xl lg:text-[7.4rem]">
              Real design by real people for brands that need more than a template.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Split Brain Creative is a small studio making brand systems and websites with
              mood, clarity, and actual taste. We build work that feels considered, human,
              and alive — not overprocessed into sameness.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@splitbraincreative.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-black transition hover:scale-[1.01] hover:bg-[var(--bone)]"
              >
                Contact us
              </a>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-white/85 transition hover:border-white/30 hover:text-white"
              >
                View selected work
              </Link>
            </div>
          </div>

          <div className="relative min-h-[28rem] rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-200/20" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[38%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,221,234,0.95),rgba(111,77,255,0.28)_45%,transparent_72%)] blur-[1px]" />
            <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute left-10 top-10 max-w-[11rem] rounded-2xl border border-white/10 bg-black/20 p-4 text-xs uppercase tracking-[0.24em] text-white/65">
              small studio<br />serious taste
            </div>
            <div className="absolute bottom-10 right-10 max-w-[12rem] rounded-2xl border border-white/10 bg-black/20 p-4 text-xs uppercase tracking-[0.24em] text-white/65">
              dark, rich, editorial<br />not corporate
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">Manifesto</p>
          </div>
          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.05em] text-[var(--bone)] sm:text-5xl">
              We make design that feels human on purpose.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Split Brain Creative exists for people who want something more deliberate than
              drag-and-drop sameness. We care about identity, tension, atmosphere, and the kind
              of visual decisions that make work memorable before anyone explains why it works.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 lg:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/55">Selected work</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-[var(--bone)] sm:text-5xl">
                Teasers for the kind of work we want to keep doing.
              </h2>
            </div>
            <Link href="/work" className="hidden text-sm uppercase tracking-[0.22em] text-white/65 transition hover:text-white lg:block">
              See all
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-white/55">{project.category}</p>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em] text-[var(--bone)]">
                  {project.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{project.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">What we do</p>
            <h2 className="mt-4 max-w-lg text-3xl font-medium tracking-[-0.05em] text-[var(--bone)] sm:text-5xl">
              Strategy and visual work with a pulse.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-lg text-white/85">
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">About</p>
          </div>
          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.05em] text-[var(--bone)] sm:text-5xl">
              A small studio with real opinions about design.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              We are building Split Brain Creative as a studio for identity, websites, and visual
              direction that doesn’t flatten every client into the same safe shape. Small by choice,
              collaborative by default, and focused on work that feels authored.
            </p>
            <Link href="/about" className="mt-8 inline-flex text-sm uppercase tracking-[0.22em] text-white/70 transition hover:text-white">
              More about the studio →
            </Link>
          </div>
        </section>

        <section className="mb-16 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-xs uppercase tracking-[0.28em] text-white/55">Contact</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.05em] text-[var(--bone)] sm:text-5xl">
                If you want something with an actual point of view, let’s talk.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Tell us what you’re building, what it needs to do, and how weird or clean you want it to get.
              </p>
            </div>
            <a
              href="mailto:info@splitbraincreative.com"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white px-6 py-4 text-sm font-medium uppercase tracking-[0.22em] text-black transition hover:bg-[var(--bone)] sm:w-auto"
            >
              info@splitbraincreative.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
