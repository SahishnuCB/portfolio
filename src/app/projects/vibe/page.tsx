"use client";

import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

const chips = ["Elixir", "Phoenix LiveView", "PubSub", "WebSockets", "Real-time"];

const decisions = [
    {
    title: "Server-authoritative room state",
    desc: "The server owns truth. Clients emit intent (play/pause/seek); the room process updates canonical state and broadcasts it back.",
    },
    {
    title: "Event-driven sync via PubSub",
    desc: "Playback + chat are modeled as events. PubSub fans out updates to all participants in a room topic cleanly and reliably.",
    },
    {
    title: "LiveView for reactive UI",
    desc: "LiveView keeps the interface reactive without a big SPA. Server-pushed updates keep clients aligned with room state.",
    },
    {
    title: "Room isolation boundaries",
    desc: "Each room is scoped to its own topic/state. This prevents cross-talk and keeps the mental model simple.",
    },
    {
    title: "Latency-tolerant UX",
    desc: "Design focuses on minimizing visible drift and ensuring convergence. The system prioritizes consistency over optimistic chaos.",
    },
];

const roadmap = [
    {
    version: "v0.1 (built)",
    items: [
        "Two-user room concept",
        "Synchronized play/pause",
        "Live chat sidebar (Instagram-style)",
        "YouTube search + playback integration",
    ],
    },
    {
    version: "v0.2",
    items: [
        "Seek synchronization + drift correction",
        "Presence indicators (join/leave/typing)",
        "Invite links + basic room permissions",
    ],
    },
    {
    version: "v0.3",
    items: [
        "Multi-user rooms (N participants)",
        "Conflict handling for rapid events (debounce + ordering)",
        "Per-room playlist queue",
    ],
    },
    {
    version: "v0.4+",
    items: [
        "Observability: metrics + traces for event flow",
        "Rate limiting + abuse protection (chat + controls)",
        "Persistence (optional): save room state / chat history",
    ],
    },
];

function Chip({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            {children}
        </span>
    );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.35)]">
        <div className="text-lg font-semibold">{title}</div>
        <div className="mt-2 text-sm leading-relaxed text-white/70">{children}</div>
        </div>
    );
}

export default function VibePage() {
    return (
        <main className="min-h-screen py-14">
        {/* Back link */}
        <Reveal>
            <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white/80"
            >
            <span className="text-lg">←</span> Back to home
            </a>
        </Reveal>

      {/* Header */}
        <section className="mt-10">
            <Reveal>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Project
                </div>
            </Reveal>

            <Reveal delay={0.05}>
                <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
                    Vibe{" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-white to-pink-200 bg-clip-text text-transparent">
                    real-time synchronization
                    </span>
                </h1>
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mt-5 max-w-3xl text-base md:text-lg text-white/70">
                    Vibe is a real-time shared media room built with Elixir and Phoenix
                    LiveView. Two connected clients watch the same YouTube track in sync:
                    when one user pauses/plays (and later seeks), the other client mirrors
                    it immediately. A live chat runs alongside the synchronized playback
                    state.
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
                    href="https://github.com/SahishnuCB/vibe"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white px-5 py-2 text-sm font-medium text-black transition hover:opacity-90 active:scale-[0.98]"
                    >
                    View repo
                    </a>

                    <a
                    href="#architecture"
                    className="rounded-2xl border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white active:scale-[0.98]"
                    >
                    Architecture
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
                    Keeping two clients in sync
                </h2>
            </Reveal>

            <Reveal delay={0.06}>
                <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
                    Synchronizing playback across clients is a distributed systems problem:
                    each client has local state, its own clock, and network latency. Vibe
                    uses a server-authoritative model where the server resolves intent into
                    canonical room state, and broadcasts updates so all clients converge.
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
                    Event-driven coordination
                </h2>
            </Reveal>

            <Reveal delay={0.06}>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <Card title="Client events">
                    Clients emit intent events like play/pause and send chat messages.
                    These events are handled by LiveView on the server.
                    </Card>

                    <Card title="Room state + broadcast">
                    A room process holds canonical state. After state updates, Phoenix
                    PubSub broadcasts the change so all clients update their UI and player
                    state consistently.
                    </Card>
                </div>
            </Reveal>

            <Reveal delay={0.1}>
                <div className="mt-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                <div className="text-sm text-white/60">Conceptual pipeline</div>
                    <pre className="mt-3 overflow-x-auto rounded-2xl bg-black/60 p-4 text-xs text-white/80">
    {`Client A (play/pause/chat)
        → LiveView event handler
            → Room state update (authoritative)
                → PubSub broadcast
                    → Client B updates UI + player`}
                    </pre>
                </div>
            </Reveal>

        <div className="section-sep mt-16 opacity-40" />
        </section>

      {/* Design decisions */}
        <section className="mt-20">
            <Reveal>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Design decisions
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                    Choices that keep sync stable
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
                    Demo
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                    What it feels like in a room
                </h2>
            </Reveal>

            <Reveal delay={0.06}>
                <div className="mt-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                    <pre className="overflow-x-auto rounded-2xl bg-black/60 p-4 text-xs text-white/80">
{`User A hits "Play"
→ server broadcasts { playback: "playing", videoId: "..." }
→ User B player starts playing

User A hits "Pause"
→ server broadcasts { playback: "paused" }
→ User B pauses instantly

Chat message
→ server broadcasts { chat: { from: "A", text: "..." } }
→ User B sidebar updates`}
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
                    Planned improvements
                </h2>
            </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
            {roadmap.map((r, i) => (
            <Reveal key={r.version} delay={i * 0.06}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-lg font-semibold">{r.version}</div>
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
