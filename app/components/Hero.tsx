"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2yr", label: "At Rakuten India" },
  { value: "50%", label: "Support Call Reduction" },
  { value: "2–3x", label: "Lead Quality Improvement" },
  { value: "1,000+", label: "Records Digitized" },
];

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden px-6 pt-24 pb-10 sm:pt-28">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-soft/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-6 flex max-w-3xl flex-col items-center text-center"
      >
        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-surface-high/80 px-4 py-1.5 backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs tracking-wide text-accent">
            Open to new opportunities
          </span>
        </span>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
          Building production voice AI that people actually talk to
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
          I&apos;m Ashish, a software engineer at Rakuten India building
          real-time multilingual voice agents, RAG pipelines, and LLM
          orchestration for healthcare and mobility clients.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-soft px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
          >
            Explore work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-surface-high/80 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:text-accent"
          >
            Let&apos;s connect
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>

      <div className="relative z-10 mt-4 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center rounded-2xl bg-surface-low/70 p-4 text-center backdrop-blur-xl"
          >
            <span className="text-2xl font-bold text-accent">{stat.value}</span>
            <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
