export interface Project {
  title: string;
  tagline: string;
  detail: string;
  stack: string[];
  href?: string;
  year: string;
}

export interface Writing {
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

export const selectedWork: Project[] = [
  {
    title: "Novilla",
    tagline: "Agentic workflow automation for appraisers",
    detail:
      "A tool-using agent that does most of an appraiser's work: email automation, ledger and accounts handling, smart payment links, quotations and PDF workflows.",
    stack: ["AI agents", "workflow automation", "LLMs"],
    year: "2025",
  },
  {
    title: "Vocale",
    tagline: "Voice agents and support automation",
    detail:
      "Production voice agents with sub-second latency: streaming ASR and TTS, smart turn-taking, and follow-up systems that plug into real business workflows.",
    stack: ["voice AI", "real-time systems", "telephony"],
    year: "2025",
  },
  {
    title: "Lex Claro",
    tagline: "Contract signing and legal document analysis",
    detail:
      "Automatic contract signing paired with AI analysis of contracts and legal documents, built for law firms drowning in paperwork.",
    stack: ["legal AI", "document intelligence"],
    year: "2025",
  },
];

export const selectedWritings: Writing[] = [
  {
    title: "The latency budget: how we got voice agents under one second",
    date: "2026-09",
    excerpt:
      "Every millisecond between the caller stopping and the agent answering is trust leaking out. Here is where the time actually goes.",
    href: "/writings",
  },
  {
    title: "Most AI projects fail at the workflow, not the model",
    date: "2026-08",
    excerpt:
      "The model is rarely the bottleneck. The boring plumbing around it is.",
    href: "/writings",
  },
];
