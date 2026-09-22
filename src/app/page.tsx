import type { Metadata } from "next";
import Link from "next/link";
import { selectedWork, selectedWritings } from "../content/site";

export const metadata: Metadata = {
  title: "Sabbir Ahmed Minhaz (SAM) - Co-Founder, CTO & AI Engineer",
  description:
    "Sabbir Ahmed Minhaz (SAM) is a Co-Founder, CTO and AI Engineer in Bangladesh, building AI workflow automations, voice agents and intelligent systems at CodeMyPixel.",
  alternates: { canonical: "https://sabbirminhaz.com" },
};

export default function Home() {
  return (
    <div className="pt-16 sm:pt-24 pb-8">
      {/* hero */}
      <section>
        <p className="mono text-sm rise rise-1" style={{ color: "var(--accent)" }}>
          hello, i am
        </p>
        <h1
          className="rise rise-2 mt-3 text-4xl sm:text-6xl font-bold tracking-tight"
          style={{ lineHeight: 1.1 }}
        >
          Sabbir Ahmed Minhaz<span className="caret">_</span>
        </h1>
        <p className="rise rise-3 mt-5 text-lg sm:text-xl" style={{ color: "var(--muted)" }}>
          Co-Founder, CTO &amp; AI Engineer
        </p>
        <p
          className="rise rise-4 mt-6 max-w-xl text-base leading-7"
          style={{ color: "var(--muted)" }}
        >
          I build AI systems that do real work. At{" "}
          <a
            href="https://codemypixel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            CodeMyPixel
          </a>
          , I lead engineering on workflow automations, voice agents and
          document intelligence used by businesses every day. Based in
          Bangladesh, working worldwide.
        </p>
        <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
          <Link href="/work" className="tag mono text-sm">
            see the work
          </Link>
          <Link href="/writings" className="tag mono text-sm">
            read the writings
          </Link>
        </div>
      </section>

      {/* selected work */}
      <section className="mt-20">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="mono text-sm" style={{ color: "var(--faint)" }}>
            selected work
          </h2>
          <Link href="/work" className="mono text-sm link-accent">
            all work →
          </Link>
        </div>
        <div>
          {selectedWork.map((p) => (
            <Link key={p.title} href="/work" className="row block py-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="row-title text-lg font-semibold">{p.title}</h3>
                <span className="mono text-xs shrink-0" style={{ color: "var(--faint)" }}>
                  {p.year}
                </span>
              </div>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {p.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* selected writings */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="mono text-sm" style={{ color: "var(--faint)" }}>
            selected writings
          </h2>
          <Link href="/writings" className="mono text-sm link-accent">
            all writings →
          </Link>
        </div>
        <div>
          {selectedWritings.map((w) => (
            <Link key={w.title} href="/writings" className="row block py-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="row-title text-base font-medium">{w.title}</h3>
                <span className="mono text-xs shrink-0" style={{ color: "var(--faint)" }}>
                  {w.date}
                </span>
              </div>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {w.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* now */}
      <section className="mt-16">
        <h2 className="mono text-sm mb-2" style={{ color: "var(--faint)" }}>
          now
        </h2>
        <p className="text-sm leading-7 max-w-xl" style={{ color: "var(--muted)" }}>
          Shipping agentic automations at CodeMyPixel. Writing about AI
          engineering, latency and the boring parts that make systems work.
          Trying to become the most recognizable AI engineer in Bangladesh.
        </p>
      </section>
    </div>
  );
}
