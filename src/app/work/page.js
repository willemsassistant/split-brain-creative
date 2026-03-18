import Image from "next/image";
import MotionSection from "../components/MotionSection";
import SiteNav from "../components/SiteNav";

const projects = [
  {
    title: "Campaign Platform",
    type: "Live site",
    summary:
      "A political campaign website built to communicate clearly, move quickly, and still feel intentional instead of disposable.",
    image: "/images/sbc-work-1.jpg",
  },
  {
    title: "Identity System Experiments",
    type: "Brand study",
    summary:
      "A growing set of logo, type, and composition studies shaping the Split Brain Creative visual language.",
    image: "/images/sbc-work-2.jpg",
  },
  {
    title: "Motion and Interface Studies",
    type: "Creative direction",
    summary:
      "Internal visual experiments focused on depth, pacing, and atmosphere without sacrificing usability.",
    image: "/images/sbc-work-3.jpg",
  },
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--background)] pt-20">
      <div className="pointer-events-none fixed inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.55)_100%)]" />

      <SiteNav fixed />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <MotionSection className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Work</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.88] tracking-[-0.07em] text-[var(--bone)] sm:text-7xl lg:text-[6.5rem]">
              Selected work, experiments, and proof of direction.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              We are intentionally starting lean here. The point is to show range, taste,
              and the kind of visual decisions we want to keep sharpening as the studio grows.
            </p>
          </div>
        </MotionSection>

        <section className="grid gap-6 py-16 lg:grid-cols-12 lg:py-24">
          {projects.map((project, index) => (
            <MotionSection
              key={project.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] ${index === 0 ? "lg:col-span-7 min-h-[28rem]" : "lg:col-span-5 min-h-[24rem]"}`}
              delay={index * 0.06}
            >
              <div className="absolute inset-0">
                <Image src={project.image} alt={project.title} fill className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/30" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.82))]" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/55">{project.type}</p>
                  <h2 className="mt-5 max-w-[10ch] text-3xl font-medium leading-[0.9] tracking-[-0.05em] text-[var(--bone)] sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">{project.summary}</p>
              </div>
            </MotionSection>
          ))}
        </section>
      </div>
    </main>
  );
}
