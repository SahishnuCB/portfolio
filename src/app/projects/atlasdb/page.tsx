"use client";

import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";


const chips = [ "Rust", "Storage Engine", "Embedded KV", "Systems" ];

const decisions = [
    {
        title: "Layered architecture (CLI → Parser → Engine → Storage → Model)",
        desc: "Keeps responsibilities clean and makes future evolution (WAL, LSM) easier without rewriting everything," 
    },
    {
        title: "Parser validates keys and errors early",
        desc: "Bad input is rejected at the edge. The engine stays focused on behavior, not syntax policing."
    },
    {
        title: "Engine returns a typed Response",
        desc: "CLI just prints. Storage stays neutral. The engine defines the app's contract in a single place."
    },
    {
        title: "Overwrite semantics live in Engine",
        desc: "Storage is a mechanism. The engine decised the policy (e.g., SET over writes existing keys)"
    },
    {
        title: "Signle-threaded v0.1 on purpose",
        desc: "Correctness first. Concurrency comes later once data flow, API boundaries, and testing are solid."
    },
];

const roadmap = [
    {
        version: "v0.1 (current)",
        items: [
            "In-memory HashMap storage (Starting → String)",
            "CLI shell + parsing + validation",
            "SET/ GET/ DEL/ KEYS/ EXIT",
            "Clear module boundaries + tests",
        ],
    },
    {
        version: "v0.2",
        items: [
            "Write-Ahead Log (WAL) for durability",
            "Crash recovery: replay log to rebuild state",
            "Structured file format + error handling",
        ],
    },
    {
        version: "v0.3",
        items: [
            "MemTable + SSTables",
            "Compaction (basic levelling)",
            "Range-friendly key layout",
        ],
    },
    {
        version: "v0.4+",
        items: [
            "Benchmarks + perf tuning",
            "Optional concurrency model",
            "Configurable storage backends"
        ],
    },
];

function Chip({children}: {children: ReactNode}) {
    return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        {children}
    </span>
    );
}

function Card({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.35)]">
        <div className="text-lg font-semibold "> {title} </div>
        <div className="mt-2 text-sm leading-relaxed text-white/70"> {children} </div>
    </div>
    );
}

export default function AtlasDBPage() {
    return (
        <main className="min-h-screen py-14">
            {/* Simple black line */}
            <Reveal>
                <a
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white/80"
                >
                    <span className="text-lg">←</span> Back to home
                </a>
            </Reveal>

            {/* Header */}
            <section className = "mt-10">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Project
                    </div>
                </Reveal>

                <Reveal delay={0.05}>
                    <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
                        AtlasDB{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-white to-pink-200 bg-clip-text text-transparent">
                            storage engine
                        </span>
                    </h1>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="mt-5 max-w-3xl text-base md:text-lg text-white/70">
                        AtlasDB is an embedded key-value database in Rust, build to evolve
                        progressively from a minimal in-memory KV store into a produnction-style,
                        log-structured storage engine (WAL → MemTable → SSTables → compaction).
                    </p>
                </Reveal>

                <Reveal delay={0.14}>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {chips.map((c) => (
                            <Chip key={c}>{c}</Chip>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.18}>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="https://github.com/SahishnuCB/atlasdb"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl bg-white px-5 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.98]"
                        >
                            View Repo
                        </a>

                        <a
                            href="#architecture"
                            className="rounded-2xl border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white active:scale-[0.98]"
                        >
                            View Architecture
                        </a>
                    </div>
                </Reveal>
            </section>

            {/* Problem */}
            <section className="mt-20">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Problem
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                        Why build AtlasDB?
                    </h2>
                </Reveal>

                <Reveal delay={0.06}>
                    <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
                        Storage engines look "simple" from the outside (set/get), but the
                        internals involve tradeoffs across durability, performance, and
                        correctness. AtlasDB is a leading-first systems project edsigned to
                        keep boundaries clean while gradually adding real storage-engine pieces.
                    </p>
                </Reveal>

                <div className="section-sep mt-16 opacity-40" />
            </section>

            {/* Architecture */}
            <section id="architecture" className="mt-20">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Architecture
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                        Clear boundaries, predictable evolution
                    </h2>
                </Reveal>

                <Reveal delay={0.06}>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <Card title="Current flow (v0.1)">
                            CLI reads input, Parser validates and turns it into a Command, Engine
                            applies behavior, Storage holds state, and Model defines shared types.
                        </Card>

                        <Card title="Future evolution">
                            The same boundaries allow adding WAL for durability, then MemTable +
                            SSTables, then compaction-without turning the code into giant file.
                        </Card>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                        <div className="text-sm text-white/60">Conceptual pipeline:</div>
                        <pre className="mt-3 overflow-x-auto rounded-2xl bg-black/60 p-4 text-xs text-white/80">
{`CLI
    → Parser (syntax + validation)
        → Engine (policy + behavior)
            → Storage (mechanism)
                → Model (shared types)`}
                        </pre>
                    </div>
                </Reveal>

                <div className="section-sep mt-16 opacity-40" />
            </section>

            {/* Design Decisions */}
            <section className="mt-20">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Design Decisions
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                        Choices that keep it maintainable
                    </h2>
                </Reveal>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {decisions.map((d, i) => (
                        <Reveal key={d.title} delay={i * 0.05}>
                            <Card title={d.title}>{d.desc}</Card>
                        </Reveal>
                    ))}
                </div>

                <div className="section-sep mt-16 opacity-40" />
            </section>

            {/* Demo */}
            <section className="mt-20">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        CLI Demo
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                        What using it feels like
                    </h2>
                </Reveal>

                <Reveal delay={0.06}>
                    <div className="mt-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                        <pre className="overflow-x-auto rounded-2xl bg-black/60 p-4 text-xs text-white/80">
{`> SET name "AtlasDB"
OK
> GET name
"AtlasDB"
> DEL name
OK
> GET name
(nil)`}
                        </pre>
                    </div>
                </Reveal>

                <div className="section-sep mt-16 opacity-40" />
            </section>

            {/* Roadmap */}
            <section className="mt-20 pb-20">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Roadmap
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                        Planned evolution
                    </h2>
                </Reveal>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {roadmap.map((r, i) => (
                        <Reveal key={r.version} delay={i * 0.06}>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                                <div className="text-lg font-semibold "> {r.version} </div>
                                <ul className="mt-3 space-y-2 text-sm text-white/70">
                                    {r.items.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="text-white/35">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </main>
    );
}