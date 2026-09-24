"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const skills = [
  "Python", "TypeScript", "React", "Next.js", "React Native",
  "Node.js", "FastAPI", "LangChain", "LangGraph", "LlamaIndex",
  "LiveKit", "WebRTC", "Milvus", "PostgreSQL", "MongoDB",
  "Redis", "Docker", "Azure", "Google Cloud Platform", "Firebase",
];

export default function SkillsAndContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:ashish.naik.1611@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section id="skills" className="w-full max-w-3xl px-6 py-20">
        <Reveal>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Skills
          </h2>
          <p className="mb-8 max-w-xl text-lg text-muted">
            Tools and technologies I work with regularly.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <footer id="contact" className="w-full max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Contact
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted">
            Open to interesting projects and conversations — reach out.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="space-y-3">
                  <a
                    href="mailto:ashish.naik.1611@gmail.com"
                    className="group flex items-center justify-between rounded-xl border border-border bg-surface-low/70 p-4 transition-colors hover:bg-surface-high"
                  >
                    <div className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                        <path d="M4 4h16v16H4z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      <span className="font-mono text-sm text-foreground">ashish.naik.1611@gmail.com</span>
                    </div>
                    <span className="font-mono text-[11px] text-muted transition-colors group-hover:text-accent">
                      EMAIL
                    </span>
                  </a>
                  <a
                    href="tel:+917892874675"
                    className="group flex items-center justify-between rounded-xl border border-border bg-surface-low/70 p-4 transition-colors hover:bg-surface-high"
                  >
                    <div className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="font-mono text-sm text-foreground">+91 78928 74675</span>
                    </div>
                    <span className="font-mono text-[11px] text-muted transition-colors group-hover:text-accent">
                      PHONE
                    </span>
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <a
                    href="https://github.com/ashishnaik1611-arch"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-low text-muted transition-colors hover:bg-surface-high hover:text-accent"
                    title="GitHub"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.55 2.87 8.4 6.84 9.77.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/ashishnaik-ds"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-low text-muted transition-colors hover:bg-surface-high hover:text-accent"
                    title="LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z" />
                    </svg>
                  </a>
                </div>
              </div>

              <p className="mt-12 text-xs text-muted">
                Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              className="flex flex-col gap-4 rounded-3xl border border-border bg-surface-low/90 p-8 backdrop-blur-2xl"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:ring-1 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-secondary py-3 text-sm font-bold text-background shadow-lg shadow-accent/20 transition-transform hover:scale-[1.01]"
              >
                Open in email
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
              <p className="text-center text-xs text-muted">
                Opens your email app with this pre-filled — nothing sends from here directly.
              </p>
            </form>
          </Reveal>
        </div>
      </footer>
    </>
  );
}
