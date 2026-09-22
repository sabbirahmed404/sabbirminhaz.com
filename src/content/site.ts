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
  href?: string;
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

export const earlierWork: Project[] = [
  {
    title: "Brain lesion detection with YOLO & U-Net",
    tagline: "3D deep learning research",
    detail:
      "Trained on 3D MRI scans of high-grade and low-grade gliomas. Evaluated across architectures including ResNet3D, reaching 0.88 mAP and 0.71 Dice coefficient on 1024x1024 axial slices.",
    stack: ["deep learning", "computer vision", "PyTorch"],
    href: "https://github.com/sabbirahmed404/Brain_Tumor_Detection_Using_YOLO",
    year: "2024",
  },
  {
    title: "TextGPT & IQR Codes",
    tagline: "AI chat product, end-to-end",
    detail:
      "Designed and built the full product experience: admin dashboard, chat interfaces and QR-code flows, plus onboarding and a scalable multilingual architecture on the OpenAI API.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Firebase"],
    href: "https://codemypixel.com/textgpt-case-study/",
    year: "2024",
  },
  {
    title: "Top Floor Trends",
    tagline: "SaaS content platform for a UK media agency",
    detail:
      "Complete user journey from landing pages to interactive artist dashboards: real-time leaderboards, API-driven streaming and social stats, campaign analytics, AI-assisted content tools.",
    stack: ["Next.js", "React 19", "OpenAI API", "Stripe"],
    href: "https://codemypixel.com/top-floor-trends-case-study/",
    year: "2024",
  },
];

export const selectedWritings: Writing[] = [
  {
    title: "Claude Opus 5.5: The New Most Powerful AI Model",
    date: "2026-09-23",
    excerpt:
      "Opus 5.5 takes the top spot on the Artificial Analysis Intelligence Index, beating GPT-6 Astra and Fable 5.1 on coding and knowledge benchmarks, while running about 40% cheaper and 30% faster than Opus 5.",
    href: "https://codemypixel.com/blog/claude-opus-5-5-most-powerful-ai-model",
  },
  {
    title: "We Used Meta Muse for Several Days. Here's What It's Actually Like",
    date: "2026-09-19",
    excerpt:
      "A hands-on review of Meta's Muse personal agent: what the team actually delegated to it, how the Secure VM architecture works, and where it still gets stuck.",
    href: "https://codemypixel.com/blog/meta-muse-personal-ai-agent-1-billion-tokens",
  },
];
