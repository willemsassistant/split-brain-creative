import MotionSection from "../components/MotionSection";
import SiteNav from "../components/SiteNav";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--background)] pt-20">
      <div className="pointer-events-none fixed inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.55)_100%)]" />

      <SiteNav fixed />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <MotionSection className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Contact</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.88] tracking-[-0.07em] text-[var(--bone)] sm:text-7xl lg:text-[6.5rem]">
              Tell us what you’re building.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              If you need identity work, a website, or a stronger creative point of view,
              send us a note. We are especially interested in projects that want something
              more human than template-first design.
            </p>
          </div>
        </MotionSection>

        <MotionSection className="py-16 lg:py-24" delay={0.08}>
          <div className="rounded-[2.3rem] border border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur-xl sm:px-10 sm:py-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Start here</p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-4xl text-3xl font-medium leading-[0.96] tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
                  Bring us the brief, the mess, or the ambition.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  Include what you’re making, what it needs to do, and how far you want to push the visual direction.
                </p>
              </div>
              <a
                href="mailto:info@splitbraincreative.com"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white px-6 py-4 text-sm font-medium uppercase tracking-[0.22em] text-black transition duration-300 hover:scale-[1.02] hover:bg-[var(--bone)] sm:w-auto"
              >
                info@splitbraincreative.com
              </a>
            </div>
          </div>
        </MotionSection>
      </div>
    </main>
  );
}
