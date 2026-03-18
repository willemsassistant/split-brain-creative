"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import MotionSection from "./MotionSection";
import SiteNav from "./SiteNav";

const workItems = [
  {
    title: "Campaign Platform",
    type: "Live digital build",
    summary:
      "A political site built for speed, legibility, and a stronger visual point of view than the category usually allows.",
    image: "/images/sbc-work-1.jpg",
    span: "lg:col-span-7",
    height: "min-h-[26rem] lg:min-h-[34rem]",
  },
  {
    title: "Identity Fragments",
    type: "Studio brand language",
    summary:
      "A growing internal system of marks, compositions, and typographic studies shaping the studio’s own visual voice.",
    image: "/images/sbc-work-2.jpg",
    span: "lg:col-span-5",
    height: "min-h-[24rem]",
  },
  {
    title: "Motion Studies",
    type: "Creative direction",
    summary:
      "Experiments in pacing, reveals, and structure designed to make digital work feel directed instead of merely decorated.",
    image: "/images/sbc-work-3.jpg",
    span: "lg:col-span-5",
    height: "min-h-[22rem]",
  },
  {
    title: "Selected Process",
    type: "Art direction",
    summary:
      "References, layouts, and visual tension tests used to push projects past the point where they would normally stop.",
    image: "/images/sbc-hero-1.jpg",
    span: "lg:col-span-7",
    height: "min-h-[24rem] lg:min-h-[28rem]",
  },
];

function StickyHero() {
  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const clipStart = useTransform(scrollYProgress, [0, 0.22], [8, 0]);
  const clipEnd = useTransform(scrollYProgress, [0, 0.22], [92, 100]);
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.14, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.16]);
  const sideY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const markerY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={heroRef} className="relative h-[175vh] border-b border-white/10">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ y: imageY, scale: imageScale, clipPath }}
          className="absolute inset-0"
        >
          <Image
            src="/images/sbc-hero-1.jpg"
            alt="Abstract studio atmosphere"
            fill
            priority
            className="object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-black/32" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.18)_44%,rgba(0,0,0,0.56)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.42))]" />
        </motion.div>

        <motion.div
          style={{ y: markerY }}
          className="pointer-events-none absolute left-[4%] top-[12%] hidden h-[68vh] w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent lg:block"
        />
        <motion.div
          style={{ y: sideY }}
          className="pointer-events-none absolute right-[4%] top-[12%] hidden text-[10px] uppercase tracking-[0.42em] text-white/40 lg:block [writing-mode:vertical-rl]"
        >
          Split Brain Creative / studio mode / 2026
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20"
        >
          <div className="max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/55 sm:text-xs">
              Brand identity / web design / creative direction / art direction
            </p>
            <h1 className="mt-6 max-w-5xl text-[4.2rem] font-medium leading-[0.8] tracking-[-0.09em] text-white sm:text-[6.6rem] lg:text-[9rem] xl:text-[11rem]">
              NOT
              <br />
              TEMPLATE<br />
              WORK.
            </h1>
            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-lg text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Split Brain Creative builds identities and websites with structure,
                tension, and enough authorship to leave a mark.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
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
                  View work
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkGrid() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-12">
      {workItems.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8 }}
          className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] ${item.span} ${item.height}`}
        >
          <div className="absolute inset-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/30" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.82))]" />
          </div>
          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-white/45 via-white/10 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/55">{item.type}</p>
              <h3 className="mt-5 max-w-[10ch] text-3xl font-medium leading-[0.9] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                {item.title}
              </h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
              {item.summary}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default function HomepageExperience() {
  return (
    <main className="relative overflow-x-clip bg-[var(--background)]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.55)_100%)]" />

      <SiteNav fixed />

      <StickyHero />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <MotionSection className="grid gap-6 border-b border-white/10 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Manifesto</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-3xl font-medium leading-[0.96] tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
              We make design that feels human on purpose.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Split Brain Creative exists for people who want something more deliberate than
              drag-and-drop sameness. We care about identity, tension, atmosphere, and the kind
              of visual decisions that make work memorable before anyone explains why it works.
            </p>
          </div>
        </MotionSection>

        <MotionSection className="border-b border-white/10 py-16 lg:py-24" delay={0.06}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Selected work</p>
              <h2 className="mt-4 max-w-5xl text-3xl font-medium leading-[0.96] tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
                Designed to feel directed, not assembled.
              </h2>
            </div>
            <Link href="/work" className="text-sm uppercase tracking-[0.24em] text-white/60 transition hover:text-white">
              View archive →
            </Link>
          </div>
          <WorkGrid />
        </MotionSection>

        <MotionSection className="grid gap-8 border-b border-white/10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24" delay={0.1}>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">About the studio</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-[0.96] tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
              Small enough to stay sharp. Legit enough to ship the real thing.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              Split Brain Creative is a small studio focused on identity, websites,
              creative direction, and visual work that refuses to flatten every client
              into the same safe shape.
            </p>
            <p>
              We like stronger typography, harder compositions, and interaction that feels
              deliberate. The goal is not chaos. The goal is work with authorship.
            </p>
            <Link href="/about" className="inline-flex text-sm uppercase tracking-[0.24em] text-white/70 transition hover:text-white">
              More about us →
            </Link>
          </div>
        </MotionSection>

        <MotionSection className="py-16 lg:py-24" delay={0.12}>
          <div className="rounded-[2.3rem] border border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur-xl sm:px-10 sm:py-14">
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Contact</p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-4xl text-3xl font-medium leading-[0.96] tracking-[-0.06em] text-[var(--bone)] sm:text-5xl lg:text-6xl">
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
