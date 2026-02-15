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
    return (
    <section id={id} className={cn("mt-20", className)}>
        {eyebrow ? (
        <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            {eyebrow}
        </div>
        ) : null}
        {title ? (
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold">{title}</h2>
        ) : null}
        <div className={cn(title ? "mt-6" : "mt-4")}>{children}</div>
    </section>
    );
}
