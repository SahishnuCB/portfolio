"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "AtlasDB",
    desc: "Embedded KV store in Rust. Clean layering today, evolving toward WAL + LSM.",
    href: "https://github.com/SahishnuCB",
    tag: "Rust • Storage",
  },
  {
    title: "Lumina",
    desc: "Cross-border payments router prototype. UI + API + ML microservice pipeline.",
    href: "https://github.com/SahishnuCB",
    tag: "Full-stack • Fintech",
  },
  {
    title: "Security-first Portfolio",
    desc: "This website. Strong headers now; CSP + CodeQL/Dependabot next.",
    href: "#",
    tag: "Next.js • Security",
  },
  {
    title: "More coming",
    desc: "Writeups, benchmarks, and open-source contributions as I ship more builds.",
    href: "#",
    tag: "Roadmap",
  },
];

const skills = ["Rust", "TypeScript", "Next.js", "PostgreSQL", "Security"];

export default function HomePage() {
  return (
    <main className="min-h-screen py-14">
      {/* Top bar */}
      <header className="flex items-center justify-between">
        <div className="text-sm tracking-wide text-white/70">
          <span className="text-white">Sahishnu</span>
          <span className="mx-2 text-white/30">/</span>
          <span>portfolio</span>
        </div>

        <nav className="flex gap-4 text-sm text-white/70">
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          I build{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-white to-pink-200 bg-clip-text text-transparent">
            systems & products
          </span>{" "}
          that feel fast.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-white/70"
        >
          ECE @ VIT Vellore. Rust + TypeScript. I like building things that are
          simple on the surface but serious under the hood.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-2xl bg-white px-5 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.98]"
          >
            View projects
          </a>

          <a
            href="https://github.com/SahishnuCB"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white active:scale-[0.98]"
          >
            GitHub
          </a>
        </motion.div>
      </section>

      {/* Projects */}
      <Section id="projects" eyebrow="Selected work" title="Projects">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                className="group block rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold transition group-hover:text-white">
                    {p.title}
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[11px] text-white/70">
                    {p.tag}
                  </span>
                </div>

                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  {p.desc}
                </div>

                <div className="mt-4 text-sm text-white/60 transition group-hover:text-white/80">
                  View →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" eyebrow="About" title="A little bit about me">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-white/70 leading-relaxed">
              I’m into systems work (storage engines, performance, reliability)
              and clean product engineering. Right now I’m building AtlasDB and
              shipping web projects that are secure by default.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Let’s talk" className="pb-20">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-white/70 leading-relaxed">
              Best way to reach me: GitHub or LinkedIn. If you want, we can add a
              secure contact form later (rate-limited + validated + no spam).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.98]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:you@example.com"
                className="rounded-2xl border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white active:scale-[0.98]"
              >
                Email
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
