import type { Metadata } from "next";
import { selectedWork, earlierWork, type Project } from "../../content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Sabbir Ahmed Minhaz (SAM): AI workflow automations, voice agents and legal AI products built at CodeMyPixel.",
  alternates: { canonical: "https://sabbirminhaz.com/work" },
};

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="row-title text-xl font-semibold">{p.title}</h2>
        <span className="mono text-xs shrink-0" style={{ color: "var(--faint)" }}>
          {p.year}
        </span>
      </div>
      <p className="mono text-sm mt-1" style={{ color: "var(--accent)" }}>
        {p.tagline}
      </p>
      <p className="mt-3 text-sm leading-7 max-w-2xl" style={{ color: "var(--muted)" }}>
        {p.detail}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="tag mono text-xs">
            {s}
          </span>
        ))}
      </div>
    </>
  );

  if (p.href) {
    return (
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`row block py-8 rise rise-${Math.min(i + 1, 4)}`}
      >
        {inner}
      </a>
    );
  }
  return <article className={`row py-8 rise rise-${Math.min(i + 1, 4)}`}>{inner}</article>;
}

export default function WorkPage() {
  return (
    <div className="pt-16 sm:pt-24 pb-8">
      <p className="mono text-sm rise rise-1" style={{ color: "var(--accent)" }}>
        work
      </p>
      <h1 className="rise rise-2 mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
        Things I have built
      </h1>
      <p className="rise rise-3 mt-4 max-w-xl text-base leading-7" style={{ color: "var(--muted)" }}>
        A few systems I am proud of. Each one runs in production and does
        real work for real businesses.
      </p>

      <h2 className="mono text-sm mt-14 mb-2" style={{ color: "var(--faint)" }}>
        now
      </h2>
      <div>
        {selectedWork.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <h2 className="mono text-sm mt-14 mb-2" style={{ color: "var(--faint)" }}>
        earlier
      </h2>
      <div>
        {earlierWork.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </div>
  );
}
