import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-5 text-sm uppercase tracking-[0.24em] text-white/70">
        <Link href="/">Split Brain Creative</Link>
        <div className="flex gap-5">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
        </div>
      </div>

      <section className="py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-white/55">Contact</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.06em] text-[var(--bone)] sm:text-7xl">
          Tell us what you’re building.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          If you need identity work, a website, or a stronger creative point of view, send us a note.
          We are especially interested in projects that want something more human than template-first design.
        </p>
        <a
          href="mailto:info@splitbraincreative.com"
          className="mt-10 inline-flex rounded-full border border-white/15 bg-white px-6 py-4 text-sm font-medium uppercase tracking-[0.22em] text-black transition hover:bg-[var(--bone)]"
        >
          info@splitbraincreative.com
        </a>
      </section>
    </main>
  );
}
