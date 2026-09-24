"use client";

import Reveal from "./Reveal";

const disciplines = [
  {
    title: "Real-Time Voice Pipelines",
    description:
      "Production multilingual voice agents with LiveKit, WebRTC, and TURN — voice activity detection, noise cancellation, and custom tool-calling.",
    skills: [
      { label: "LiveKit / WebRTC / TURN", value: 92 },
      { label: "VAD & noise cancellation", value: 88 },
    ],
  },
  {
    title: "LLM Orchestration & Retrieval",
    description:
      "Retrieval-augmented generation pipelines on Milvus and Pinecone, built with LangChain, LangGraph, and LlamaIndex across OpenAI, Gemini, and Sarvam AI.",
    skills: [
      { label: "RAG pipelines & vector search", value: 90 },
      { label: "LangChain / LangGraph / LlamaIndex", value: 88 },
    ],
  },
  {
    title: "APIs & Backend Systems",
    description:
      "REST APIs and backend services in Python FastAPI, TypeScript, and Node.js, containerized with Docker across microservice and monolithic architectures.",
    skills: [
      { label: "FastAPI / Node.js / TypeScript", value: 90 },
      { label: "Docker / CI/CD / cloud (Azure, GCP)", value: 82 },
    ],
  },
  {
    title: "Web & Mobile Interfaces",
    description:
      "Client-facing products and SDKs in React, Next.js, and React Native — from zero-code embeddable widgets to full conversational apps.",
    skills: [
      { label: "React / Next.js / React Native", value: 88 },
      { label: "Tailwind CSS & design systems", value: 85 },
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="w-full max-w-5xl px-6 py-20">
      <Reveal>
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Expertise
        </h2>
        <p className="mb-12 max-w-xl text-lg text-muted">
          From real-time voice infrastructure to the RAG pipelines and
          interfaces built on top of it.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {disciplines.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-border bg-surface-low/80 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-accent">
              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-2 mb-5 text-sm text-muted">{item.description}</p>
              <div className="space-y-3">
                {item.skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-[11px]">
                      <span className="text-foreground">{skill.label}</span>
                      <span className="font-bold text-accent">{skill.value}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-high">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
