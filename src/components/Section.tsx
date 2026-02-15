"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export function Section({
    id,
    eyebrow,
    title,
    children,
    className,
}: {
    id?: string;
    eyebrow?: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}) {
    const [waveTitle, setWaveTitle] = React.useState(false);

    React.useEffect(() => {
        if (!id) return;

        const handler = (e: Event) => {
            const ce = e as CustomEvent<{ id: string }>;
            if (ce.detail?.id !== id) return;

            setWaveTitle(false);
            requestAnimationFrame(() => setWaveTitle(true));
            window.setTimeout(() => setWaveTitle(false), 950);
    };

    window.addEventListener("wave-section-title", handler as EventListener);
    return () =>
        window.removeEventListener("wave-section-title", handler as EventListener);
    }, [id]);

    return (
    <section id={id} className={cn("mt-20", className)}>
        {eyebrow ? (
        <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            {eyebrow}
        </div>
        ) : null}

        {title ? (
        <h2
            className={cn(
            "mt-3 text-2xl md:text-3xl font-semibold",
            waveTitle && "title-wave"
            )}
        >
            {title}
        </h2>
        ) : null}

        <div className={cn(title ? "mt-6" : "mt-4")}>{children}</div>

        <div className="section-sep mt-16 opacity-40" />
    </section>
    );
}
