import Link from "next/link";

const projects = [
  {
    title: "Campaign Platform",
    type: "Live site",
    summary:
      "A political campaign website built to communicate clearly, move quickly, and still feel intentional instead of disposable.",
  },
  {
    title: "Identity System Experiments",
    type: "Brand study",
    summary:
      "A growing set of logo, type, and composition studies shaping the Split Brain Creative visual language.",
  },
  {
    title: "Motion and Interface Studies",
    type: "Creative direction",
    summary:
      "Internal visual experiments focused on depth, pacing, and atmosphere without sacrificing usability.",
  },
];

export default function WorkPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-5 text-sm uppercase tracking-[0.24em] text-white/70">
        <Link href="/">Split Brain Creative</Link>
        <div className="flex gap-5">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <section className="py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-white/55">Work</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.06em] text-[var(--bone)] sm:text-7xl">
          Selected work, experiments, and early proof of direction.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          We are intentionally starting lean here. The point is to show range, taste, and the kind
          of visual decisions we want to keep sharpening as the studio grows.
        </p>
      </section>

      <section className="grid gap-5 pb-16">
        {projects.map((project, index) => (
          <article key={project.title} className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[0.25fr_0.75fr] lg:p-8">
            <div className="text-xs uppercase tracking-[0.26em] text-white/45">0{index + 1}</div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">{project.type}</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[var(--bone)] sm:text-4xl">{project.title}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
