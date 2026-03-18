"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import MotionSection from "./MotionSection";

const featuredProjects = [
  {
    title: "Campaign Platform",
    type: "Live digital build",
    summary:
      "A political site shaped for clarity, urgency, and more visual intelligence than the category usually gets.",
    accent: "from-fuchsia-300/30 via-transparent to-transparent",
  },
  {
    title: "Identity Fragments",
    type: "Studio brand language",
    summary:
      "A growing internal system of symbols, typography studies, and dark editorial compositions guiding where the studio is headed.",
    accent: "from-violet-300/30 via-transparent to-transparent",
  },
  {
    title: "Motion Studies",
    type: "Creative direction",
    summary:
      "Experiments in pacing, depth, and interaction designed to make digital work feel authored instead of assembled.",
    accent: "from-amber-100/20 via-transparent to-transparent",
  },
];

export default function HomepageExperience() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.2]);
  const orbA = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const orbB = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <main className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.08),transparent_30%)]" />
      <motion.div
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:90px_90px] [mask-image:radial-gradient(circle_at_center,black_28%,transparent_80%)]"
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 py-5 text-sm uppercase tracking-[0.24em] text-white/70">
          <Link href="/" className="text-white">
            Split Brain Creative
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8">
            <Link href="/work" className="transition hover:text-white">
              Work
            </Link>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </nav>
        </header>

        <motion.section
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative flex min-h-[92vh] items-center border-b border-white/10 py-16 lg:py-24"
        >
          <motion.div
            style={{ y: orbA }}
            className="pointer-events-none absolute left-[-8%] top-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(253,194,255,0.32),transparent_62%)] blur-3xl"
          />
          <motion.div
            style={{ y: orbB }}
            className="pointer-events-none absolute right-[-10%] top-[18%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(110,104,255,0.26),transparent_64%)] blur-3xl"
          />

          <div className="relative z-10 grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
                Brand identity / web design / creative direction / art direction
              </p>
              <h1 className="mt-6 max-w-5xl text-[3.8rem] font-medium leading-[0.84] tracking-[-0.08em] text-[var(--bone)] sm:text-[5.8rem] lg:text-[8.2rem] xl:text-[9.5rem]">
                Design with
                <br />
                a pulse.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                Split Brain Creative builds identities and websites that feel authored,
                cinematic, and very difficult to confuse with template work.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:info@splitbraincreative.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-black transition duration-300 hover:scale-[1.02] hover:bg-[var(--bone)]"
                >
                  Contact us
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-white/85 transition duration-300 hover:border-white/35 hover:bg-white/[0.04] hover:text-white"
                >
                  Selected work
                </Link>
              </div>
            </div>

            <div className="relative min-h-[28rem] lg:min-h-[40rem]">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-[7%_0_0_8%] rounded-[2.4rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] backdrop-blur-2xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute left-[16%] top-[8%] h-[25rem] w-[25rem] rounded-full border border-white/12"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute left-[23%] top-[15%] h-[19rem] w-[19rem] rounded-full border border-fuchsia-200/18"
              />
              <motion.div
                animate={{ y: [-12, 12, -12], rotate: [-6, 0, -6] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[28%] top-[18%] h-[17rem] w-[11rem] rounded-[48%_52%_40%_60%/37%_42%_58%_63%] bg-[linear-gradient(180deg,rgba(255,227,234,0.92),rgba(96,73,255,0.28)_34%,rgba(8,8,12,0)_78%)] shadow-[0_0_120px_rgba(246,131,255,0.18)]"
              />
              <motion.div
                animate={{ y: [16, -10, 16] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[8%] top-[8%] h-52 w-28 rounded-[1.8rem] border border-white/12 bg-white/[0.05] backdrop-blur-xl"
              />
              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[11%] left-[8%] rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-[11px] uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl"
              >
                not for everyone
              </motion.div>
              <motion.div
                animate={{ x: [12, -8, 12], y: [-6, 10, -6] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[14%] right-[4%] rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-[11px] uppercase tracking-[0.3em] text-white/60 backdrop-blur-xl"
              >
                built to be remembered
              </motion.div>
              <div className="absolute inset-x-[12%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            </div>
          </div>
        </motion.section>

        <MotionSection className="grid gap-6 border-b border-white/10 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">Manifesto</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
              We make design that feels human on purpose.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Split Brain Creative exists for people who want something more deliberate than
              drag-and-drop sameness. We care about identity, tension, atmosphere, and the kind
              of visual decisions that make work memorable before anyone explains why it works.
            </p>
          </div>
        </MotionSection>

        <MotionSection className="border-b border-white/10 py-16 lg:py-24" delay={0.08}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">Selected work</p>
              <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
                Work with more shape, tension, and intent than a clean little card grid can hold.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm uppercase tracking-[0.24em] text-white/60 transition hover:text-white"
            >
              View archive →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-[1fr_1fr]">
            {featuredProjects.map((project, index) => {
              const layoutClass =
                index === 0
                  ? "lg:row-span-2 min-h-[32rem]"
                  : index === 1
                    ? "min-h-[18rem]"
                    : "min-h-[18rem]";

              return (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl ${layoutClass}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80 transition duration-500 group-hover:scale-105`} />
                  <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/6" />
                  <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-white/35 via-white/5 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">{project.type}</p>
                      <h3 className="mt-6 max-w-[12ch] text-3xl font-medium leading-[0.95] tracking-[-0.05em] text-[var(--bone)] sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>
                    </div>
                    <div className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
                      <p className="max-w-lg text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                        {project.summary}
                      </p>
                      <div className="justify-self-start rounded-full border border-white/12 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/55">
                        preview
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </MotionSection>

        <MotionSection className="grid gap-8 border-b border-white/10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24" delay={0.1}>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">About the studio</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
              Small enough to stay dangerous. Legit enough to ship real work.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              Split Brain Creative is a small studio focused on identity, websites,
              creative direction, and visual work that refuses to flatten every client
              into the same safe shape.
            </p>
            <p>
              We like dark palettes, stronger typography, and interactions that feel
              intentional instead of decorative. The goal is not chaos. The goal is work
              with authorship.
            </p>
            <Link
              href="/about"
              className="inline-flex text-sm uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
            >
              More about us →
            </Link>
          </div>
        </MotionSection>

        <MotionSection className="py-16 lg:py-24" delay={0.12}>
          <div className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 py-10 backdrop-blur-xl sm:px-10 sm:py-14">
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">Contact</p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
                  If you want something people remember, start here.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  Tell us what you are building and how far you want to push it.
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
