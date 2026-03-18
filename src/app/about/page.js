import MotionSection from "../components/MotionSection";
import SiteNav from "../components/SiteNav";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--background)] pt-20">
      <div className="pointer-events-none fixed inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.55)_100%)]" />

      <SiteNav fixed />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <MotionSection className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">About</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.88] tracking-[-0.07em] text-[var(--bone)] sm:text-7xl lg:text-[6.5rem]">
              A small studio with a sharper point of view.
            </h1>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              Split Brain Creative is a studio built around brand identity, web design,
              creative direction, and art direction. We want the work to feel authored —
              not assembled.
            </p>
            <p>
              The studio is small on purpose. That means direct thinking, fewer layers
              between idea and execution, and a better chance of making something that still
              feels alive by the time it launches.
            </p>
            <p>
              We are interested in artists, small businesses, political work when it fits,
              and anyone else who wants design with mood, clarity, and a little bit of danger left in it.
            </p>
          </div>
        </MotionSection>

        <MotionSection className="grid gap-6 border-b border-white/10 py-16 lg:grid-cols-3 lg:py-24" delay={0.08}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Approach</p>
            <h2 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-[var(--bone)]">Human-made by design</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              We make work that feels touched by real judgment, not flattened by default settings.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Focus</p>
            <h2 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-[var(--bone)]">Identity, web, direction</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              The sweet spot is brand systems and websites where visual character actually matters.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Fit</p>
            <h2 className="mt-5 text-2xl font-medium tracking-[-0.04em] text-[var(--bone)]">For people with taste</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              Best fit: artists, independent businesses, and clients who want something more than safe.
            </p>
          </div>
        </MotionSection>
      </div>
    </main>
  );
}
