"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
    <div
        className="pointer-events-none fixed inset-0"
        style={{
        background: `radial-gradient(600px 600px at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.12), transparent 55%)`,
        }}
    />
    );
}
