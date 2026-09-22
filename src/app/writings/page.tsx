import type { Metadata } from "next";
import { selectedWritings } from "../../content/site";

export const metadata: Metadata = {
  title: "Writings",
  description:
    "Writings by Sabbir Ahmed Minhaz (SAM) on AI models, AI agents, and building intelligent systems. Published on the CodeMyPixel blog.",
  alternates: { canonical: "https://sabbirminhaz.com/writings" },
};

export default function WritingsPage() {
  return (
    <div className="pt-16 sm:pt-24 pb-8">
      <p className="mono text-sm rise rise-1" style={{ color: "var(--accent)" }}>
        writings
      </p>
      <h1 className="rise rise-2 mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
        Notes on AI systems
      </h1>
      <p className="rise rise-3 mt-4 max-w-xl text-base leading-7" style={{ color: "var(--muted)" }}>
        Essays and hands-on reviews, published on the{" "}
        <a
          href="https://codemypixel.com/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          CodeMyPixel blog
        </a>
        . No hype, just what actually happened.
      </p>

      <div className="mt-12">
        {selectedWritings.map((w, i) => (
          <a
            key={w.title}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`row block py-8 rise rise-${Math.min(i + 1, 4)}`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="row-title text-lg font-medium">{w.title}</h2>
              <span className="mono text-xs shrink-0" style={{ color: "var(--faint)" }}>
                {w.date}
              </span>
            </div>
            <p className="mt-2 text-sm leading-7 max-w-2xl" style={{ color: "var(--muted)" }}>
              {w.excerpt}
            </p>
            <p className="mono text-xs mt-3 link-accent">
              read the full post →
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
