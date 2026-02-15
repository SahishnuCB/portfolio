"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen py-14">
      <header className="flex items-center justify-between">
        <div className="text-sm tracking-wide text-white/70">
          <span className="text-white">Sahishnu</span>
          <span className="mx-2 text-white/30">/</span>
          <span>portfolio</span>
        </div>

        <nav className="flex gap-4 text-sm text-white/70">
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>
      </header>

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
          ECE @ VIT Vellore. Rust + TypeScript. Building AtlasDB (embedded KV) and
          other deep-tech projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-2xl bg-white text-black px-5 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            View projects
          </a>
          <a
            href="https://github.com/SahishnuCB"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 px-5 py-2 text-sm font-medium text-white/80 hover:text-white hover:border-white/25 transition"
          >
            GitHub
          </a>
        </motion.div>
      </section>

      <section id="projects" className="mt-20">
        <div className="text-xs uppercase tracking-[0.2em] text-white/50">
          Selected work
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            { title: "AtlasDB", desc: "Embedded KV store in Rust. Clean layering, evolving toward LSM." },
            { title: "Lumina", desc: "Cross-border payments router prototype. UI + API + ML microservice." },
            { title: "Security-first Portfolio", desc: "This site. Tight headers, CSP next, minimal surface area." },
            { title: "More coming", desc: "Writeups, benchmarks, and open-source contributions." },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/7 transition"
            >
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-white/70">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mt-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">About</div>
          <p className="mt-3 text-white/70">
            I like building things that are simple on the surface but serious under the hood:
            storage engines, backend systems, and clean web apps.
          </p>
        </div>
      </section>

      <section id="contact" className="mt-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">Contact</div>
          <p className="mt-3 text-white/70">
            DM me on GitHub or drop a message on LinkedIn. (We’ll add a secure contact form later if you want.)
          </p>
        </div>
      </section>
    </main>
  );
}
