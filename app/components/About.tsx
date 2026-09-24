import Reveal from "./Reveal";

const experience = [
  {
    role: "Associate Software Engineer",
    org: "Rakuten India",
    period: "Jan 2026 — Present",
    description:
      "Own AI agent engineering and platform development across client verticals. Built and deployed production voice agents with LiveKit, WebRTC, and TURN, cutting support call volume 50% for a mobility client and digitizing 1,000+ handwritten medical records with an OCR correction loop.",
    tags: ["LiveKit", "WebRTC", "React Native", "OpenAI", "Gemini"],
    current: true,
  },
  {
    role: "Technical Intern & Trainee Consultant",
    org: "Rakuten India",
    period: "Jan 2025 — Jan 2026",
    description:
      "Built a multi-model voice agent platform with real-time VAD and noise cancellation, improving lead quality 2–3x for a healthcare client. Shipped a RAG FAQ system on Milvus and reduced backend inference latency 40% through async re-architecture.",
    tags: ["LangChain", "LlamaIndex", "Milvus", "FastAPI", "TypeScript"],
  },
];

export default function About() {
  return (
    <section id="experience" className="w-full max-w-3xl px-6 py-20">
      <Reveal>
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Experience
        </h2>
        <p className="mb-12 max-w-xl text-lg text-muted">
          Two years at Rakuten India building voice AI agents and RAG
          pipelines for healthcare and mobility clients.
        </p>
      </Reveal>

      <div className="relative space-y-8 pl-8 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-accent before:via-secondary before:to-border">
        {experience.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.1}>
            <div className="relative">
              <span
                className={`absolute -left-8 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-background ${
                  item.current ? "border-accent" : "border-border"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${item.current ? "animate-pulse bg-accent" : "bg-muted"}`}
                />
              </span>
              <div className="rounded-2xl border border-border bg-surface-low/80 p-5 backdrop-blur-xl">
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                    {item.current && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[11px] text-accent">
                        Present
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[11px] text-muted">
                    {item.org} • {item.period}
                  </span>
                </div>
                <p className="mt-1 text-muted">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-high px-2 py-1 font-mono text-[11px] text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
