import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Sabbir Ahmed Minhaz (SAM): AI engineer, Co-Founder and CTO of CodeMyPixel, and his work on AI automation.",
  alternates: { canonical: "https://www.sabbirminhaz.com/faq" },
};

const faqs = [
  {
    q: "Who is Sabbir Ahmed Minhaz?",
    a: "Sabbir Ahmed Minhaz, known as SAM, is a Co-Founder, CTO and AI Engineer at CodeMyPixel, a software and AI automation agency based in Bangladesh. He builds AI systems that do real production work, including agentic workflow automations, real-time voice agents, and document intelligence.",
  },
  {
    q: "What does Sabbir Ahmed Minhaz do?",
    a: "He leads engineering at CodeMyPixel, where his team ships AI workflow automations for businesses in legal, real estate, and other industries. His focus areas are AI agents, voice AI with sub-second latency, and LLM engineering including local model setup and fine-tuning.",
  },
  {
    q: "What is CodeMyPixel?",
    a: "CodeMyPixel is a 10-person software and AI automation agency based in Bangladesh, co-founded by Sabbir Ahmed Minhaz. It builds full workflow automations, AI agents, and intelligent systems for clients worldwide.",
  },
  {
    q: "What are Novilla, Vocale, and Lex Claro?",
    a: "They are products built by Sabbir Ahmed Minhaz and the CodeMyPixel team. Novilla is an agentic workflow automation tool for appraisers. Vocale provides voice agents, support automation, and follow-up systems. Lex Claro handles automatic contract signing and AI analysis of legal documents.",
  },
  {
    q: "Where is Sabbir Ahmed Minhaz based?",
    a: "He is based in Dhaka, Bangladesh, and works with clients worldwide.",
  },
  {
    q: "How can I contact Sabbir Ahmed Minhaz?",
    a: "The fastest way is email at sabbir@codemypixel.com. He is also on X as @sam_minhaz and on LinkedIn.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="pt-16 sm:pt-24 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <p className="mono text-sm rise rise-1" style={{ color: "var(--accent)" }}>
        faq
      </p>
      <h1 className="rise rise-2 mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
        Questions, answered
      </h1>
      <p className="rise rise-3 mt-4 max-w-xl text-base leading-7" style={{ color: "var(--muted)" }}>
        The short version of who I am and what I do.
      </p>

      <div className="mt-12">
        {faqs.map((f, i) => (
          <div key={f.q} className={`row py-6 rise rise-${Math.min(i + 1, 4)}`}>
            <h2 className="text-base font-semibold">{f.q}</h2>
            <p className="mt-2 text-sm leading-7 max-w-2xl" style={{ color: "var(--muted)" }}>
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
