import Reveal from "./Reveal";

const education = [
  {
    period: "Sep 2021 — May 2025",
    title: "B.Tech, Computer and Communication Engineering",
    org: "Manipal University Jaipur",
    description: "CGPA: 7.85 / 10 · Jaipur, India",
  },
  {
    period: "Jun 2020 — May 2021",
    title: "Class XII",
    org: "St. Joseph's Pre-University College",
    description: "87% · Bangalore, India",
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full max-w-3xl px-6 py-20">
      <Reveal>
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Education
        </h2>
        <p className="mb-12 max-w-xl text-lg text-muted">
          Academic background.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface-low/80 p-5 backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-high text-accent">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10L12 5 2 10l10 5 10-5z" />
                  <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
                </svg>
              </div>
              <div>
                <span className="font-mono text-[11px] font-medium text-accent">
                  {item.period}
                </span>
                <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                <p className="font-medium text-secondary">{item.org}</p>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
