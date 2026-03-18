import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-5 text-sm uppercase tracking-[0.24em] text-white/70">
        <Link href="/">Split Brain Creative</Link>
        <div className="flex gap-5">
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <section className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/55">About</p>
          <h1 className="mt-5 text-5xl font-medium leading-[0.96] tracking-[-0.06em] text-[var(--bone)] sm:text-7xl">
            A small studio with a sharper point of view.
          </h1>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
          <p>
            Split Brain Creative is a studio built around brand identity, web design, creative
            direction, and art direction. We want the work to feel authored — not assembled.
          </p>
          <p>
            The studio is small on purpose. That means direct thinking, fewer layers between idea and
            execution, and a better chance of making something that still feels alive by the time it launches.
          </p>
          <p>
            We are interested in artists, small businesses, political work when it fits, and anyone else who
            wants design with mood, clarity, and a little bit of danger left in it.
          </p>
        </div>
      </section>
    </main>
  );
}
