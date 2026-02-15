"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const [wave, setWave] = React.useState(false);

    return (
    <a
        href={href}
        className={cn(
        "text-sm text-white/70 transition hover:text-white",
        wave && "nav-wave"
        )}
        onClick={() => {
        // trigger animation
        setWave(false);
        // next tick so the animation can restart every click
        requestAnimationFrame(() => setWave(true));

        // remove the class after animation ends
        window.setTimeout(() => setWave(false), 750);
        }}
    >
        {children}
    </a>
    );
}
