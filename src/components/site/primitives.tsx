import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Content is visible on first paint, including without JavaScript. */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

/** Stable controls retain their position under the pointer. */
export function Magnetic({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  return <span className={cn("inline-block", className)}>{children}</span>;
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string; duration?: number }) {
  return (
    <span>
      {to.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/** Section heading block with eyebrow label. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn("section-heading max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Glassy container used across cards. */
export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={cn("surface-card glass rounded-2xl", hover && "card-hover", className)}>
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
