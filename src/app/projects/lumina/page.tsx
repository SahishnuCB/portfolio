"use client";

import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

const chips = [
    "Rust (Axum)",
    "Next.js",
    "Postgres",
    "Stripe",
    "Ethers (Sepolia)",
    "Graph Routing",
];

const highlights = [
    {
        k: "Optimization",
        v: "Graph-based best route (Bellman-Ford style relax)",
    },
    {
        k: "Baseline",
        v: "Direct route computed for measurable delta",
    },
    {
        k: "Settlement",
        v: "Stripe verified webhook → Sepolia transfer demo",
    },
    {
        k: "Auth",
        v: "Short-lived HttpOnly JWT cookie",
    },
];

const decisions = [
    {
        title: "Route selection as a graph optimization problem",
        desc: "Each hop includes fee, slippage, and FX assumptions. The engine searches routes to maximize final amount instead of assuming direct conversion is optimal.",
    },
    {
        title: "Baseline vs best route for explainability",
        desc: "A deterministic direct-route baseline makes improvements quantifiable. The UI can show savings and justify why Lumina recommends a route.",
    },
    {
        title: "Verified payment → settlement trigger",
        desc: "Stripe Checkout confirms payment. A verified webhook event gates settlement logic to avoid executing chain actions without payment confirmation.",
    },
    {
        title: "Input normalization + allowlists",
        desc: "Currency inputs are normalized (tokenized, lowercased) and allowlisted. This reduces malformed inputs and narrows the attack surface.",
    },
    {
        title: "Session token stored in HttpOnly cookies",
        desc: "JWT is kept HttpOnly to reduce the impact of XSS compared to storing tokens in localStorage. Short TTL encourages safer session behavior.",
    },
];

const security = [
    {
        title: "Remove hardcoded DB credentials (must fix)",
        desc: "DB URL must come from env vars. Rotate credentials immediately if they were ever real. Never commit secrets in git.",
    },
    {
        title: "Replace unwrap() in webhook path",
        desc: "Webhook must not panic on missing headers/env. Convert unwrap() to structured error handling and safe 2xx responses when appropriate.",
    },
    {
        title: "Lock down CORS",
        desc: "Restrict CORS to your known UI origins in production. Avoid wildcard origins for payment + webhook flows.",
    },
    {
        title: "Idempotent webhook processing",
        desc: "Stripe can retry webhooks. Add an idempotency layer to ensure the same event cannot trigger settlement more than once.",
    },
];

const roadmap = [
    {
        version: "v0.1 (current)",
        items: [
            "Rust engine: /optimize route calculator",
            "Stripe payment link creation",
            "Webhook verification + Sepolia demo transfer trigger",
            "Next.js UI: login + dashboard flow",
        ],
    },
    {
        version: "v0.2",
        items: [
            "Real advisory (volatility/risk) instead of placeholder",
            "No unwrap() on critical paths; add structured errors",
            "Environment-first config + secrets management",
            "CORS tightening + stronger request validation",
        ],
    },
    {
        version: "v0.3",
        items: [
            "Smart contracts: escrow / settlement primitives",
            "Idempotent settlement + replay protection",
            "Signed quotes + expiry windows for routes",
            "Transaction audit trail + receipts",
        ],
    },
    {
        version: "v0.4+",
        items: [
            "Liquidity sources (real rates) + caching",
            "Observability (metrics/traces/logs)",
            "Threat model + security test harness",
            "Production hardening + deployment pipeline",
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
            <div className="text-lg font-semibold">
                {title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-white/70">
                {children}
            </div>
        </div>
    );
}

function Metric({ k, v }: { k: string; v: string }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                {k}
            </div>
            <div className="mt-2 text-sm text-white/80">
                {v}
            </div>
        </div>
    );
}

export default function LuminaPage() {
    return (
        <main className="min-h-screen py-14">

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
                        Lumina{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-white to-pink-200 bg-clip-text text-transparent">
                            routing + settlement
                        </span>
                    </h1>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="mt-5 max-w-3xl text-base md:text-lg text-white/70">
                        Lumina is a cross-border routing prototype that treats transfers like an optimization problem.
                        A Rust Axum engine computes the best path (fees + slippage + FX assumptions), the UI runs the
                        user flow with secure session handling, and Stripe webhook verification gates a demo settlement
                        trigger on Sepolia for end-to-end execution.
                    </p>
                </Reveal>

                <Reveal delay={0.14}>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {chips.map((c) => (
                            <Chip key={c}>
                                {c}
                            </Chip>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.18}>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="https://github.com/SaathwikDasari/lumina"
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

                        <a
                            href="#security"
                            className="rounded-2xl border border-white/15 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white active:scale-[0.98]"
                        >
                            Security notes
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.22}>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {highlights.map((h) => (
                            <Metric key={h.k} k={h.k} v={h.v} />
                        ))}
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
                        Cross-border transfers are path-dependent
                    </h2>
                </Reveal>

                <Reveal delay={0.06}>
                    <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
                        Real transfers don’t happen in a single straight line. Fees, slippage, intermediary hops, and
                        exchange assumptions change outcomes. Lumina models this as a graph search problem: compute a
                        baseline direct route, compute the best route, quantify savings, and tie execution to verified
                        payment confirmation.
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
                        UI + routing engine + webhook-gated settlement
                    </h2>
                </Reveal>

                <Reveal delay={0.06}>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <Card title="Rust engine (port 4000)">
                            Axum exposes <span className="text-white/80">POST /optimize</span> for best-path routing and{" "}
                            <span className="text-white/80">POST /create-payment-link</span> for Stripe Checkout creation.
                            A verified <span className="text-white/80">POST /webhook</span> path triggers a Sepolia demo
                            transfer to simulate settlement once payment completes.
                        </Card>

                        <Card title="Next.js UI + Postgres auth">
                            UI handles login using Postgres + bcrypt and stores a short-lived JWT in an{" "}
                            <span className="text-white/80">HttpOnly cookie</span>. The dashboard calls the Rust engine
                            for optimization results and starts checkout from the UI.
                        </Card>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                        <div className="text-sm text-white/60">Conceptual pipeline</div>
                        <pre className="mt-3 overflow-x-auto rounded-2xl bg-black/60 p-4 text-xs text-white/80">
{`User
  → Next.js (auth + dashboard)
    → Rust Engine /optimize (best route vs baseline)
      → Rust Engine /create-payment-link (Stripe Checkout)
        → Stripe webhook (signature verified)
          → On-chain transfer (Sepolia demo settlement)`}
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
                        Why it’s built this way
                    </h2>
                </Reveal>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {decisions.map((d, i) => (
                        <Reveal key={d.title} delay={i * 0.05}>
                            <Card title={d.title}>
                                {d.desc}
                            </Card>
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
                        What a run looks like
                    </h2>
                </Reveal>

                <Reveal delay={0.06}>
                    <div className="mt-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur">
                        <pre className="overflow-x-auto rounded-2xl bg-black/60 p-4 text-xs text-white/80">
{`POST /optimize
{ "amount": 1000, "from": "usd", "to": "inr" }

→ returns: best route vs baseline + fee model

POST /create-payment-link
{ "amount": 1000, "currency": "usd", "receiver_wallet": "0x..." }

→ returns: Stripe Checkout Session URL

Stripe webhook (checkout.session.completed)
→ verifies signature
→ triggers Sepolia transfer (demo settlement)`}
                        </pre>
                    </div>
                </Reveal>

                <div className="section-sep mt-16 opacity-40" />
            </section>

            {/* Security notes */}
            <section id="security" className="mt-20">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Security notes
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                        Hardening plan (prototype → production)
                    </h2>
                </Reveal>

                <Reveal delay={0.06}>
                    <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
                        Lumina is a prototype designed to demonstrate end-to-end routing and execution. These are the top
                        issues to fix before any real deployment, and they’re also the exact kind of details that separate
                        a demo from a production system.
                    </p>
                </Reveal>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {security.map((s, i) => (
                        <Reveal key={s.title} delay={i * 0.05}>
                            <Card title={s.title}>
                                {s.desc}
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <div className="section-sep mt-16 opacity-40" />
            </section>

                        {/* Failure Modes */}
            <section className="mt-20">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Failure Modes
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                        How this system can fail — and how to harden it
                    </h2>
                </Reveal>

                <Reveal delay={0.06}>
                    <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
                        Real systems fail at boundaries. Lumina was reviewed through the lens of
                        failure analysis — not just feature completion. These are the key risks
                        and how they would be mitigated in production.
                    </p>
                </Reveal>

                <div className="mt-8 grid gap-4 md:grid-cols-2">

                    <Reveal delay={0.1}>
                        <Card title="Webhook replay attacks">
                            Stripe can retry events. Settlement must be idempotent.
                            Store processed event IDs and reject duplicates to prevent double execution.
                        </Card>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <Card title="Settlement partial failure">
                            If on-chain transfer fails after payment confirmation,
                            introduce retry queues and reconciliation jobs instead of
                            immediate execution within the webhook handler.
                        </Card>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <Card title="Race conditions on optimize + pay">
                            Lock route quotes with expiry windows so a user cannot pay
                            against stale pricing or outdated route assumptions.
                        </Card>
                    </Reveal>

                    <Reveal delay={0.25}>
                        <Card title="Database outage during login">
                            Fail closed. No session token should be issued if authentication
                            layer cannot verify credentials. Add circuit breakers and health checks.
                        </Card>
                    </Reveal>

                </div>

                <div className="section-sep mt-16 opacity-40" />
            </section>


            {/* Roadmap */}
            <section className="mt-20 pb-20">
                <Reveal>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Roadmap
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                        Where Lumina is going
                    </h2>
                </Reveal>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {roadmap.map((r, i) => (
                        <Reveal key={r.version} delay={i * 0.06}>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                                <div className="text-lg font-semibold">
                                    {r.version}
                                </div>
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
