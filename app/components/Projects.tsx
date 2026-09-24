import Reveal from "./Reveal";

const projects = [
  {
    name: "Custom Real-Time AI Voice Pipeline",
    description:
      "Self-hosted real-time voice AI pipeline built with LangGraph and WebRTC as a direct replacement for third-party voice infra, with interruption handling, dynamic routing, and tool-calling.",
    tags: ["LangGraph", "WebRTC", "TURN", "VAD"],
    metric: "In development",
    href: "#",
  },
  {
    name: "Face Recognition System",
    description:
      "Siamese neural network for face verification trained on a Faces-in-the-Wild dataset plus custom captured images, with embeddings stored in a vector database for fast inference-time comparison.",
    tags: ["PyTorch", "OpenCV", "Vector DB"],
    metric: "95% accuracy",
    href: "#",
  },
  {
    name: "Fitness Social App",
    description:
      "Native iOS app with workout tracking and social feed features, backed by a Node.js and MongoDB API.",
    tags: ["Swift", "Node.js", "MongoDB"],
    metric: "In development",
    href: "#",
  },
  {
    name: "Student Productivity Platform",
    description:
      "Full-stack AI tool for research generation, document conversion, and AI-content humanization.",
    tags: ["FastAPI", "Flask", "React"],
    metric: "Shipped",
    href: "#",
  },
  {
    name: "Conversational AI Assistant",
    description:
      "Context-aware LLM chatbot and document summarizer supporting PDF ingestion and tabular data Q&A through a Streamlit UI.",
    tags: ["LangChain", "LlamaIndex", "OpenAI"],
    metric: "Shipped",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Projects
        </h2>
        <p className="mb-12 max-w-xl text-lg text-muted">
          A few things I&apos;ve built, at work and outside of it.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <a
              href={project.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface-low/90 p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-high text-foreground transition-colors group-hover:bg-accent group-hover:text-background">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-[11px] text-muted">STATUS:</span>
                <span className="font-mono text-[11px] font-bold text-accent">
                  {project.metric}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
