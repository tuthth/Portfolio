import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Studied software engineering with a focus on real projects."
      subtitle="Grounded in fundamentals, sharpened through production-like team work."
      align="center"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold text-zinc-100">
          Bachelor&apos;s Degree in Software Engineering
        </p>
        <p className="text-sm text-zinc-300">FPT University</p>
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          Aug 2020 – Aug 2024 · Ho Chi Minh City, Vietnam
        </p>
      </div>
    </Section>
  );
}

